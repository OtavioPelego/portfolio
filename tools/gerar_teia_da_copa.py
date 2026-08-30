# -*- coding: utf-8 -*-
"""Gera os dados de "A Teia" (futebol/a-teia-da-copa.html).

Fonte: `passing_network_edges` dos relatorios pos-jogo do FIFA Training Centre
(dataset de Hesham El Alamy). Sao 208 redes — uma por time por partida — com
o numero de passes de cada jogador para cada companheiro. A rede e DIRIGIDA:
A->B e B->A sao contagens diferentes, entao da para ver quem alimenta quem.

Posicao dos nos: o dataset NAO traz coordenada. O que existe e a linha do
jogador (GK/DF/MF/FW) em `match_appearances`. A profundidade vem dessa linha;
a ordem DENTRO da linha e escolhida por baricentro, so para reduzir
cruzamentos e deixar a teia legivel. Nao e onde o jogador esteve em campo, e
a pagina diz isso.

Uso:
    python tools/gerar_teia_da_copa.py            # resumo
    python tools/gerar_teia_da_copa.py --escrever # injeta na pagina
"""
import io, sys, os, csv, json, zipfile, statistics, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DADOS = r'D:\Otávio Profisional\Phosphorus\GitHub\futebol-analises\data\kaggle-wc2026'
PAGINA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      'futebol', 'a-teia-da-copa.html')
CSV_SWAPTR = 'matches - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv'

ALIAS = {'USA': 'United States', 'Bosnia and Herzegovina': 'Bosnia–Herz',
         'Cape Verde': 'Cabo Verde', 'Czech Republic': 'Czechia',
         'Iran': 'IR Iran', 'Turkey': 'Türkiye', 'Korea Republic': 'South Korea'}
MESES = {'January': '01', 'February': '02', 'March': '03', 'April': '04',
         'May': '05', 'June': '06', 'July': '07', 'August': '08'}
LINHAS = ['GK', 'DF', 'MF', 'FW']
FASES = ['Group stage', 'Round of 32', 'Round of 16', 'Quarter-finals',
         'Semi-finals', 'Third-place match', 'Final']


def zip_path():
    return os.path.join(DADOS, [f for f in os.listdir(DADOS) if f.endswith('.zip')][0])


def tabela(nome):
    with zipfile.ZipFile(zip_path()) as z:
        with z.open('data/csv/' + nome) as f:
            return list(csv.DictReader(io.TextIOWrapper(f, encoding='utf-8', errors='replace')))


def ler_csv(nome):
    with open(os.path.join(DADOS, nome), encoding='utf-8-sig',
              errors='replace', newline='') as f:
        return list(csv.DictReader(f))


def para_iso(d):
    p = d.split()
    return '%s-%s-%02d' % (p[2], MESES[p[1]], int(p[0]))


def ordenar_por_baricentro(nos, arestas):
    """Ordem lateral dentro de cada linha, minimizando cruzamentos.

    Heuristica classica de grafo em camadas: cada no vai para a media da
    posicao lateral de quem ele toca, repetido algumas vezes. Nao diz nada
    sobre onde o jogador jogou — so deixa a teia legivel.
    """
    por_linha = collections.defaultdict(list)
    for i, n in enumerate(nos):
        por_linha[n['linha']].append(i)
    pos = {}
    for linha, ids in por_linha.items():
        ids.sort(key=lambda i: nos[i]['camisa'])
        for k, i in enumerate(ids):
            pos[i] = (k + 0.5) / len(ids)

    vizinhos = collections.defaultdict(list)
    for a, b, c in arestas:
        vizinhos[a].append((b, c))
        vizinhos[b].append((a, c))

    for _ in range(4):
        novo = {}
        for i in pos:
            viz = vizinhos.get(i, [])
            peso = sum(c for _, c in viz)
            novo[i] = (sum(pos[j] * c for j, c in viz) / peso) if peso else pos[i]
        for linha, ids in por_linha.items():
            ids2 = sorted(ids, key=lambda i: novo[i])
            for k, i in enumerate(ids2):
                pos[i] = (k + 0.5) / len(ids2)
    return pos


def montar():
    arestas_raw = tabela('passing_network_edges.csv')
    aparicoes = tabela('match_appearances.csv')
    times_partida = {r['match_team_id']: r for r in tabela('match_teams.csv')}
    jogos_h = {r['match_id']: r for r in tabela('matches.csv')}
    swaptr = ler_csv(CSV_SWAPTR)

    # fase de cada partida
    por_chave = {(r['date'], r['home_team'], r['away_team']): r for r in swaptr}
    fase_de, sem_casar = {}, 0
    for mid, r in jogos_h.items():
        d = para_iso(r['date'])
        c, f = r['home_team'], r['away_team']
        alvo = (por_chave.get((d, c, f))
                or por_chave.get((d, ALIAS.get(c, c), ALIAS.get(f, f))))
        if not alvo:
            sem_casar += 1
        fase_de[mid] = (alvo or {}).get('round', 'Group stage')
    if sem_casar:
        raise SystemExit('%d partidas nao casaram — reveja ALIAS' % sem_casar)

    # dados de cada jogador em cada time-partida
    info = {}
    for a in aparicoes:
        info[(a['match_team_id'], a['shirt_number'])] = {
            'nome': a['player_name'], 'pos': a['position'],
            'titular': a['is_starter'] == 'True',
        }

    # arestas com passe > 0, agrupadas por time-partida
    bruto = collections.defaultdict(dict)
    for a in arestas_raw:
        c = int(a['pass_count'] or 0)
        if c and a['from_shirt_number'] != a['to_shirt_number']:
            bruto[a['match_team_id']][(a['from_shirt_number'], a['to_shirt_number'])] = c

    times = sorted({r['team_name'] for r in times_partida.values()})
    idx_time = {t: i for i, t in enumerate(times)}
    ids_jogo = sorted(jogos_h)
    idx_jogo = {m: i for i, m in enumerate(ids_jogo)}

    redes, envolvimentos, duplas, assimetrias = [], [], [], []

    for mtid in sorted(bruto):
        d = bruto[mtid]
        meta = times_partida[mtid]
        j = jogos_h[meta['match_id']]
        meu = int(meta['score'])
        dele = int(j['away_score']) if meta['home_away'] == 'home' else int(j['home_score'])

        camisas = sorted({u for u, _ in d} | {v for _, v in d}, key=lambda s: int(s))
        local = {c: i for i, c in enumerate(camisas)}
        nos = []
        for c in camisas:
            i = info.get((mtid, c), {'nome': 'nº ' + c, 'pos': 'MF', 'titular': False})
            nos.append({'camisa': int(c), 'nome': i['nome'],
                        'linha': LINHAS.index(i['pos']) if i['pos'] in LINHAS else 2,
                        'titular': i['titular']})
        arestas = [[local[u], local[v], c] for (u, v), c in d.items()]
        pos = ordenar_por_baricentro(nos, arestas)

        env = collections.Counter()
        for a, b, c in arestas:
            env[a] += c
            env[b] += c
        total = sum(c for _, _, c in arestas)

        redes.append({
            'g': idx_jogo[meta['match_id']], 't': idx_time[meta['team_name']],
            'casa': 1 if meta['home_away'] == 'home' else 0,
            'gp': meu, 'gc': dele, 'total': total,
            'n': [[n['camisa'], n['nome'], n['linha'], 1 if n['titular'] else 0,
                   round(pos[i], 3)] for i, n in enumerate(nos)],
            'e': arestas,
        })

        # --- material para as secoes narrativas ---
        for i, n in enumerate(nos):
            envolvimentos.append((env[i], n['nome'], LINHAS[n['linha']],
                                  meta['team_name'], idx_jogo[meta['match_id']]))
        vistos = set()
        for (u, v), c in d.items():
            if (v, u) in vistos:
                continue
            vistos.add((u, v))
            volta = d.get((v, u), 0)
            na = info.get((mtid, u), {}).get('nome', '?')
            nb = info.get((mtid, v), {}).get('nome', '?')
            duplas.append((c + volta, na, nb, meta['team_name'], idx_jogo[meta['match_id']]))
            if c >= 12 and c - volta >= 10:
                assimetrias.append((c - volta, c, volta, na, nb, meta['team_name'],
                                    idx_jogo[meta['match_id']]))
            if volta >= 12 and volta - c >= 10:
                assimetrias.append((volta - c, volta, c, nb, na, meta['team_name'],
                                    idx_jogo[meta['match_id']]))

    # passes na rede por resultado
    por_resultado = {}
    for r in ['V', 'E', 'D']:
        g = [x['total'] for x in redes
             if ('V' if x['gp'] > x['gc'] else 'D' if x['gp'] < x['gc'] else 'E') == r]
        por_resultado[r] = {'n': len(g), 'media': round(statistics.fmean(g)),
                            'mediana': round(statistics.median(g))}

    unico = lambda lista, chave, n: [x for i, x in enumerate(
        sorted(lista, key=lambda y: -y[0])) if x[chave] not in
        [z[chave] for z in sorted(lista, key=lambda y: -y[0])[:i]]][:n]

    dados = {
        'times': times,
        'linhas': LINHAS,
        'fases': FASES,
        'jogos': [{'id': m, 'd': para_iso(jogos_h[m]['date']),
                   'h': jogos_h[m]['home_team'], 'a': jogos_h[m]['away_team'],
                   'hs': int(jogos_h[m]['home_score']), 'as': int(jogos_h[m]['away_score']),
                   'r': FASES.index(fase_de[m]) if fase_de[m] in FASES else 0}
                  for m in ids_jogo],
        'redes': redes,
        'top_volume': [{'time': times[r['t']], 'total': r['total'], 'g': r['g'],
                        'gp': r['gp'], 'gc': r['gc']}
                       for r in sorted(redes, key=lambda r: -r['total'])[:10]],
        'top_eixos': [{'v': v, 'nome': n, 'linha': p, 'time': t, 'g': g}
                      for v, n, p, t, g in sorted(envolvimentos, key=lambda x: -x[0])[:10]],
        'top_duplas': [{'v': v, 'a': a, 'b': b, 'time': t, 'g': g}
                       for v, a, b, t, g in sorted(set(duplas), key=lambda x: -x[0])[:10]],
        'mao_unica': [{'dif': dif, 'ida': ida, 'volta': volta, 'de': a, 'para': b,
                       'time': t, 'g': g}
                      for dif, ida, volta, a, b, t, g in
                      sorted(set(assimetrias), key=lambda x: -x[0])[:10]],
        'por_resultado': por_resultado,
        'meta': {
            'redes': len(redes),
            'arestas': sum(len(r['e']) for r in redes),
            'passes': sum(r['total'] for r in redes),
            'jogos': len(ids_jogo),
        },
    }
    return dados


def main():
    d = montar()
    m = d['meta']
    print('%d redes · %d conexoes · %s passes mapeados'
          % (m['redes'], m['arestas'], f"{m['passes']:,}".replace(',', '.')))
    print('\nmaiores redes:')
    for r in d['top_volume'][:4]:
        g = d['jogos'][r['g']]
        print('   %-14s %4d passes   %s %d-%d %s' % (r['time'][:14], r['total'],
              g['h'][:12], g['hs'], g['as'], g['a'][:12]))
    print('\neixos:')
    for e in d['top_eixos'][:4]:
        print('   %-24s %-3s %-14s %3d envolvimentos' % (e['nome'][:24], e['linha'], e['time'][:14], e['v']))
    print('\nduplas:')
    for p in d['top_duplas'][:4]:
        print('   %-22s ⇄ %-22s %-12s %3d' % (p['a'][:22], p['b'][:22], p['time'][:12], p['v']))
    print('\npasses na rede por resultado:')
    for r in ['V', 'E', 'D']:
        x = d['por_resultado'][r]
        print('   %s  n=%3d  media %4d  mediana %4d' % (r, x['n'], x['media'], x['mediana']))

    if '--escrever' in sys.argv:
        blob = json.dumps(d, ensure_ascii=False, separators=(',', ':'))
        t = open(PAGINA, encoding='utf-8', errors='ignore').read()
        i = t.index('const DATA = ') + len('const DATA = ')
        j = t.index('\n', i)
        open(PAGINA, 'w', encoding='utf-8', newline='').write(t[:i] + blob + ';' + t[j:])
        print('\npagina reescrita (%.0f KB de dados)' % (len(blob) / 1024))
    return 0


if __name__ == '__main__':
    sys.exit(main())

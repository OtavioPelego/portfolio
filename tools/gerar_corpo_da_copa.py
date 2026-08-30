# -*- coding: utf-8 -*-
"""Gera o bloco de dados de "O Corpo da Copa" (futebol/o-corpo-da-copa.html).

Fonte: relatorios pos-jogo do FIFA Training Centre, publicados por Hesham El
Alamy no Kaggle (`player_physical_data`, `match_appearances`, `matches`),
cruzados com o CSV do swaptr para saber a fase de cada partida.

Cada linha de `player_physical_data` e um jogador num jogo, com a distancia
percorrida em cinco faixas de velocidade, o pico de km/h, os sprints e as
corridas de alta intensidade. Sao 3.288 linhas cobrindo os 104 jogos.

Uso:
    python tools/gerar_corpo_da_copa.py            # resumo, nao escreve
    python tools/gerar_corpo_da_copa.py --escrever # injeta na pagina
"""
import io, sys, os, csv, json, zipfile, statistics, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DADOS = r'D:\Otávio Profisional\Phosphorus\GitHub\futebol-analises\data\kaggle-wc2026'
PAGINA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      'futebol', 'o-corpo-da-copa.html')
CSV_SWAPTR = 'matches - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv'

# Os dois datasets escrevem o mesmo pais de formas diferentes. Sem isto, 8 das
# 104 partidas nao casam e a fase delas sai como "?" — o mesmo tipo de furo
# silencioso que ja apareceu no gerador da Copa 2026.
ALIAS = {
    'USA': 'United States', 'Bosnia and Herzegovina': 'Bosnia–Herz',
    'Cape Verde': 'Cabo Verde', 'Czech Republic': 'Czechia',
    'Iran': 'IR Iran', 'Turkey': 'Türkiye', 'Korea Republic': 'South Korea',
}
MESES = {'January': '01', 'February': '02', 'March': '03', 'April': '04',
         'May': '05', 'June': '06', 'July': '07', 'August': '08'}
FASES = ['Group stage', 'Round of 32', 'Round of 16', 'Quarter-finals',
         'Semi-finals', 'Third-place match', 'Final']
POSICOES = ['GK', 'DF', 'MF', 'FW']


def num(v, padrao=0.0):
    try:
        return float(str(v).strip())
    except (TypeError, ValueError):
        return padrao


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


def minutos(a):
    """Minutos em campo. Reserva que nao entrou nao tem dado fisico, entao
    so chegam aqui quem jogou."""
    if not a:
        return 90.0
    pega = lambda k: num(a.get(k), None) if (a.get(k) or '').strip() else None
    entrou, saiu = pega('subbed_on_minutes'), pega('subbed_off_minutes')
    inicio = entrou if entrou is not None else 0.0
    fim = saiu if saiu is not None else 90.0
    return max(1.0, fim - inicio)


def montar():
    fisico = tabela('player_physical_data.csv')
    aparicoes = {r['appearance_id']: r for r in tabela('match_appearances.csv')}
    jogos_h = tabela('matches.csv')
    swaptr = ler_csv(CSV_SWAPTR)

    # --- fase e prorrogacao de cada partida, cruzando os dois datasets ---
    por_chave = {}
    for r in swaptr:
        por_chave[(r['date'], r['home_team'], r['away_team'])] = r
    info, sem_casar = {}, 0
    for r in jogos_h:
        data = para_iso(r['date'])
        casa, fora = r['home_team'], r['away_team']
        alvo = (por_chave.get((data, casa, fora))
                or por_chave.get((data, ALIAS.get(casa, casa), ALIAS.get(fora, fora))))
        if not alvo:
            sem_casar += 1
        info[r['match_id']] = {
            'date': data, 'home': casa, 'away': fora,
            'hs': int(num(r['home_score'])), 'as': int(num(r['away_score'])),
            'round': (alvo or {}).get('round', 'Group stage'),
            'et': 'Extra Time' in ((alvo or {}).get('notes') or ''),
        }
    if sem_casar:
        raise SystemExit('%d partidas nao casaram entre os datasets — reveja ALIAS' % sem_casar)

    # --- uma linha por jogador-partida ---
    times = sorted({r['team'] for r in fisico})
    idx_time = {t: i for i, t in enumerate(times)}
    ids_jogo = sorted(info)
    idx_jogo = {m: i for i, m in enumerate(ids_jogo)}

    jogadores, idx_jog, linhas = [], {}, []
    for r in fisico:
        ap = aparicoes.get(r['appearance_id'])
        chave = (r['player_name'], r['team'])
        if chave not in idx_jog:
            idx_jog[chave] = len(jogadores)
            jogadores.append({'nome': r['player_name'], 'time': r['team'],
                              'pos': (ap or {}).get('position', 'MF')})
        m = minutos(ap)
        linhas.append({
            'p': idx_jog[chave], 'g': idx_jogo[r['match_id']], 'min': round(m),
            'dist': round(num(r['total_distance_m'])),
            'topo': round(num(r['top_speed_kmh']), 1),
            'spr': round(num(r['sprints_zone4_5'])),
            'hsr': round(num(r['high_speed_runs_zone3'])),
            'z': [round(num(r['zone1_0_7_kmh_m'])), round(num(r['zone2_7_15_kmh_m'])),
                  round(num(r['zone3_15_20_kmh_m'])), round(num(r['zone4_20_25_kmh_m'])),
                  round(num(r['zone5_25_plus_kmh_m']))],
        })

    # --- agregados por jogador ---
    acc = collections.defaultdict(lambda: {'j': 0, 'min': 0, 'dist': 0, 'spr': 0,
                                           'hsr': 0, 'topo': 0.0, 'z': [0] * 5})
    for l in linhas:
        a = acc[l['p']]
        a['j'] += 1; a['min'] += l['min']; a['dist'] += l['dist']
        a['spr'] += l['spr']; a['hsr'] += l['hsr']
        a['topo'] = max(a['topo'], l['topo'])
        for i in range(5):
            a['z'][i] += l['z'][i]
    for i, j in enumerate(jogadores):
        a = acc[i]
        j.update({'jogos': a['j'], 'min': a['min'], 'dist': a['dist'], 'spr': a['spr'],
                  'hsr': a['hsr'], 'topo': round(a['topo'], 1), 'z': a['z'],
                  'd90': round(a['dist'] / a['min'] * 90) if a['min'] else 0,
                  's90': round(a['spr'] / a['min'] * 90, 1) if a['min'] else 0})

    de_campo = [l for l in linhas if jogadores[l['p']]['pos'] != 'GK']

    def por90(grupo, campo):
        tot_min = sum(l['min'] for l in grupo)
        if not tot_min:
            return 0
        return sum((l[campo] if campo != 'z5' else l['z'][4]) for l in grupo) / tot_min * 90

    # --- perfil por posicao ---
    posicoes = []
    for p in POSICOES:
        g = [l for l in linhas if jogadores[l['p']]['pos'] == p and l['min'] >= 20]
        if not g:
            continue
        posicoes.append({
            'pos': p, 'n': len(g),
            'd90': round(por90(g, 'dist')), 's90': round(por90(g, 'spr'), 1),
            'z590': round(por90(g, 'z5')),
            'topo': round(statistics.fmean(l['topo'] for l in g), 1),
            'z': [round(por90(g, 'dist') * sum(l['z'][i] for l in g)
                        / max(sum(l['dist'] for l in g), 1)) for i in range(5)],
        })

    # --- por fase do torneio (so quem jogou 60 min ou mais, sem goleiros) ---
    fases = []
    for f in FASES:
        g = [l for l in de_campo if info[ids_jogo[l['g']]]['round'] == f and l['min'] >= 60]
        if not g:
            continue
        fases.append({'fase': f, 'n': len(g), 'd90': round(por90(g, 'dist')),
                      's90': round(por90(g, 'spr'), 1), 'z590': round(por90(g, 'z5'))})

    # --- por selecao ---
    equipes = []
    acct = collections.defaultdict(lambda: {'dist': 0, 'spr': 0, 'jogos': set()})
    for l in linhas:
        t = acct[jogadores[l['p']]['time']]
        t['dist'] += l['dist']; t['spr'] += l['spr']; t['jogos'].add(l['g'])
    for t, v in acct.items():
        nj = len(v['jogos'])
        equipes.append({'time': t, 'jogos': nj,
                        'km': round(v['dist'] / 1000 / nj, 1),
                        'spr': round(v['spr'] / nj)})
    equipes.sort(key=lambda e: -e['km'])

    # --- prorrogacao: normalizada por 90, senao e so jogo mais longo ---
    sem_et = [l for l in de_campo if not info[ids_jogo[l['g']]]['et'] and l['min'] >= 60]
    com_et = [l for l in de_campo if info[ids_jogo[l['g']]]['et'] and l['min'] >= 60]
    prorrogacao = {
        'sem': {'n': len(sem_et), 'd90': round(por90(sem_et, 'dist')),
                's90': round(por90(sem_et, 'spr'), 1)},
        'com': {'n': len(com_et), 'd90': round(por90(com_et, 'dist')),
                's90': round(por90(com_et, 'spr'), 1)},
    }

    dados = {
        'times': times,
        'posicoes': POSICOES,
        'fases': FASES,
        'jogos': [{'id': m, 'r': FASES.index(info[m]['round']) if info[m]['round'] in FASES else 0,
                   'd': info[m]['date'], 'h': info[m]['home'], 'a': info[m]['away'],
                   'hs': info[m]['hs'], 'as': info[m]['as'], 'et': 1 if info[m]['et'] else 0}
                  for m in ids_jogo],
        'jogadores': [{'n': j['nome'], 't': idx_time[j['time']],
                       'p': POSICOES.index(j['pos']) if j['pos'] in POSICOES else 2,
                       'j': j['jogos'], 'm': j['min'], 'd': j['dist'], 's': j['spr'],
                       'h': j['hsr'], 'v': j['topo'], 'z': j['z'],
                       'd90': j['d90'], 's90': j['s90']} for j in jogadores],
        'linhas': [[l['p'], l['g'], l['min'], l['dist'], l['topo'], l['spr'], l['hsr']]
                   for l in linhas],
        'perfil_posicao': posicoes,
        'por_fase': fases,
        'por_selecao': equipes,
        'prorrogacao': prorrogacao,
        'meta': {
            'jogos': len(ids_jogo), 'jogadores': len(jogadores), 'registros': len(linhas),
            'km_total': round(sum(l['dist'] for l in linhas) / 1000),
            'topo_max': max(l['topo'] for l in linhas),
            'sprints': sum(l['spr'] for l in linhas),
        },
    }
    return dados


def main():
    d = montar()
    m = d['meta']
    print('%d jogos · %d jogadores · %d registros jogador-partida'
          % (m['jogos'], m['jogadores'], m['registros']))
    print('%s km percorridos · %s sprints · pico de %.1f km/h'
          % (f"{m['km_total']:,}".replace(',', '.'), f"{m['sprints']:,}".replace(',', '.'),
             m['topo_max']))
    print('\nperfil por posicao (por 90 min):')
    for p in d['perfil_posicao']:
        print('   %-3s  %6d m   %5.1f sprints   %4d m acima de 25 km/h   pico medio %.1f'
              % (p['pos'], p['d90'], p['s90'], p['z590'], p['topo']))
    print('\npor fase (por 90 min, sem goleiros, 60+ min):')
    for f in d['por_fase']:
        print('   %-20s %6d m   %5.1f sprints   (n=%d)' % (f['fase'], f['d90'], f['s90'], f['n']))
    pr = d['prorrogacao']
    print('\nprorrogacao: sem %d m/90 (n=%d) · com %d m/90 (n=%d)'
          % (pr['sem']['d90'], pr['sem']['n'], pr['com']['d90'], pr['com']['n']))
    print('\nmais rodaram (total):')
    for j in sorted(d['jogadores'], key=lambda j: -j['d'])[:5]:
        print('   %-26s %-14s %.1f km em %d jogos (%.1f km/90)'
              % (j['n'][:26], d['times'][j['t']][:14], j['d'] / 1000, j['j'], j['d90'] / 1000))

    if '--escrever' in sys.argv:
        blob = json.dumps(d, ensure_ascii=False, separators=(',', ':'))
        t = open(PAGINA, encoding='utf-8', errors='ignore').read()
        i = t.index('const DATA = ') + len('const DATA = ')
        j = t.index('\n', i)
        open(PAGINA, 'w', encoding='utf-8', newline='').write(t[:i] + blob + ';' + t[j:])
        print('\npagina reescrita: %s (%.0f KB de dados)' % (PAGINA, len(blob) / 1024))
    return 0


if __name__ == '__main__':
    sys.exit(main())

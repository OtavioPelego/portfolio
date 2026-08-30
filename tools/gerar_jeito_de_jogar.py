# -*- coding: utf-8 -*-
"""Gera os dados de "O Jeito de Jogar" (futebol/o-jeito-de-jogar.html).

Fonte: `team_phases` dos relatorios pos-jogo do FIFA Training Centre. Para cada
time em cada partida, a FIFA reporta quanto do jogo transcorreu em 17 fases —
8 com a bola e 9 sem ela.

CUIDADO COM A SOMA. As 17 fases NAO formam uma particao: "Em posse" soma em
media 108% e "Sem posse" 87%, e "Press" nao e subconjunto de "Block". As
definicoes se sobrepoem. Por isso a pagina nunca empilha as fases como se
fossem partes de um todo — compara cada fase com a media do torneio, que e
uma leitura valida porque a mesma definicao vale para todos.

Uso:
    python tools/gerar_jeito_de_jogar.py            # resumo
    python tools/gerar_jeito_de_jogar.py --escrever # injeta na pagina
"""
import io, sys, os, csv, json, zipfile, statistics, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DADOS = r'D:\Otávio Profisional\Phosphorus\GitHub\futebol-analises\data\kaggle-wc2026'
PAGINA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      'futebol', 'o-jeito-de-jogar.html')
CSV_SWAPTR = 'matches - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv'

ALIAS = {'USA': 'United States', 'Bosnia and Herzegovina': 'Bosnia–Herz',
         'Cape Verde': 'Cabo Verde', 'Czech Republic': 'Czechia',
         'Iran': 'IR Iran', 'Turkey': 'Türkiye', 'Korea Republic': 'South Korea'}
MESES = {'January': '01', 'February': '02', 'March': '03', 'April': '04',
         'May': '05', 'June': '06', 'July': '07', 'August': '08'}
FASES_TORNEIO = ['Group stage', 'Round of 32', 'Round of 16', 'Quarter-finals',
                 'Semi-finals', 'Third-place match', 'Final']

# ordem de exibicao: do inicio da posse ate o gol, e do bloco alto ao baixo
ORDEM_POSSE = ['Build Up Unopposed', 'Build Up Opposed', 'Progression',
               'Attacking Transition', 'Counter Attack', 'Long Ball',
               'Final Third', 'Set Piece']
ORDEM_SEM = ['High Press', 'High Block', 'Mid Press', 'Mid Block',
             'Low Press', 'Low Block', 'Counter-press', 'Defensive Transition',
             'Recovery']


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


def montar():
    fases = tabela('team_phases.csv')
    times_partida = {r['match_team_id']: r for r in tabela('match_teams.csv')}
    jogos_h = tabela('matches.csv')
    swaptr = ler_csv(CSV_SWAPTR)

    por_chave = {(r['date'], r['home_team'], r['away_team']): r for r in swaptr}
    info, sem_casar = {}, 0
    for r in jogos_h:
        d = para_iso(r['date'])
        c, f = r['home_team'], r['away_team']
        alvo = (por_chave.get((d, c, f))
                or por_chave.get((d, ALIAS.get(c, c), ALIAS.get(f, f))))
        if not alvo:
            sem_casar += 1
        info[r['match_id']] = {
            'date': d, 'home': c, 'away': f,
            'hs': int(r['home_score']), 'as': int(r['away_score']),
            'round': (alvo or {}).get('round', 'Group stage'),
        }
    if sem_casar:
        raise SystemExit('%d partidas nao casaram — reveja ALIAS' % sem_casar)

    ORDEM = ORDEM_POSSE + ORDEM_SEM
    idx_fase = {f: i for i, f in enumerate(ORDEM)}
    grupo_de = {f: (0 if f in ORDEM_POSSE else 1) for f in ORDEM}

    # valor de cada fase em cada time-partida
    valores = collections.defaultdict(dict)
    for r in fases:
        if r['phase'] in idx_fase:
            valores[r['match_team_id']][r['phase']] = float(r['value'])

    times = sorted({r['team_name'] for r in times_partida.values()})
    idx_time = {t: i for i, t in enumerate(times)}
    ids_jogo = sorted(info)
    idx_jogo = {m: i for i, m in enumerate(ids_jogo)}

    linhas = []
    for mtid, d in sorted(valores.items()):
        meta = times_partida[mtid]
        j = info[meta['match_id']]
        meu = int(meta['score'])
        dele = j['as'] if meta['home_away'] == 'home' else j['hs']
        linhas.append({
            'g': idx_jogo[meta['match_id']], 't': idx_time[meta['team_name']],
            'gp': meu, 'gc': dele,
            'v': [round(d.get(f, 0.0), 1) for f in ORDEM],
        })

    # media do torneio por fase — a regua de tudo
    media = [round(statistics.fmean([l['v'][i] for l in linhas]), 1)
             for i in range(len(ORDEM))]
    desvio = [round(statistics.pstdev([l['v'][i] for l in linhas]), 2)
              for i in range(len(ORDEM))]

    # separa vencedor de perdedor
    def res(l):
        return 'V' if l['gp'] > l['gc'] else ('D' if l['gp'] < l['gc'] else 'E')

    discrimina = []
    for i, f in enumerate(ORDEM):
        g = collections.defaultdict(list)
        for l in linhas:
            g[res(l)].append(l['v'][i])
        v, e, dd = (statistics.fmean(g['V']), statistics.fmean(g['E']),
                    statistics.fmean(g['D']))
        discrimina.append({'fase': f, 'grupo': grupo_de[f], 'v': round(v, 1),
                           'e': round(e, 1), 'd': round(dd, 1),
                           'dif': round(v - dd, 1)})
    discrimina.sort(key=lambda x: -abs(x['dif']))

    # perfil medio de cada selecao (media das suas partidas)
    perfil = []
    por_time = collections.defaultdict(list)
    for l in linhas:
        por_time[l['t']].append(l)
    for t, ls in sorted(por_time.items()):
        m = [round(statistics.fmean([l['v'][i] for l in ls]), 1)
             for i in range(len(ORDEM))]
        # o quanto essa selecao foge da media do torneio, em desvios-padrao
        z = [round((m[i] - media[i]) / desvio[i], 2) if desvio[i] else 0.0
             for i in range(len(ORDEM))]
        perfil.append({'t': t, 'jogos': len(ls), 'm': m, 'z': z,
                       'extremo': round(max(abs(x) for x in z), 2)})

    # polos: quem mais e quem menos usou cada fase, numa partida
    polos = []
    for i, f in enumerate(ORDEM):
        ordenado = sorted(linhas, key=lambda l: -l['v'][i])
        cima = [{'time': times[l['t']], 'v': l['v'][i], 'g': l['g'],
                 'r': res(l)} for l in ordenado[:3]]
        baixo = [{'time': times[l['t']], 'v': l['v'][i], 'g': l['g'],
                  'r': res(l)} for l in ordenado[-3:]]
        polos.append({'fase': f, 'grupo': grupo_de[f], 'cima': cima, 'baixo': baixo})

    dados = {
        'times': times,
        'fases': ORDEM,
        'grupos': [grupo_de[f] for f in ORDEM],
        'fases_torneio': FASES_TORNEIO,
        'jogos': [{'d': info[m]['date'], 'h': info[m]['home'], 'a': info[m]['away'],
                   'hs': info[m]['hs'], 'as': info[m]['as'],
                   'r': FASES_TORNEIO.index(info[m]['round'])
                        if info[m]['round'] in FASES_TORNEIO else 0}
                  for m in ids_jogo],
        'linhas': linhas,
        'media': media,
        'desvio': desvio,
        'discrimina': discrimina,
        'perfil': perfil,
        'polos': polos,
        'soma_grupo': {
            'posse': round(statistics.fmean(
                [sum(l['v'][i] for i in range(len(ORDEM)) if grupo_de[ORDEM[i]] == 0)
                 for l in linhas]), 1),
            'sem': round(statistics.fmean(
                [sum(l['v'][i] for i in range(len(ORDEM)) if grupo_de[ORDEM[i]] == 1)
                 for l in linhas]), 1),
        },
        'meta': {'medicoes': len(linhas) * len(ORDEM), 'fases': len(ORDEM),
                 'times_partida': len(linhas), 'jogos': len(ids_jogo)},
    }
    return dados


def main():
    d = montar()
    m = d['meta']
    print('%d medicoes = %d times-partida x %d fases' % (m['medicoes'], m['times_partida'], m['fases']))
    print('soma media por grupo: em posse %.1f%% | sem posse %.1f%%  (nao e particao)'
          % (d['soma_grupo']['posse'], d['soma_grupo']['sem']))
    print('\no que mais separa quem venceu de quem perdeu:')
    for x in d['discrimina'][:6]:
        print('   %-22s V %5.1f  E %5.1f  D %5.1f   %+5.1f'
              % (x['fase'], x['v'], x['e'], x['d'], x['dif']))
    print('\nselecoes com o jeito mais fora da curva:')
    for p in sorted(d['perfil'], key=lambda p: -p['extremo'])[:6]:
        i = max(range(len(d['fases'])), key=lambda k: abs(p['z'][k]))
        print('   %-18s %d jogos  %s %+.1f desvios (%.1f%% contra media %.1f%%)'
              % (d['times'][p['t']][:18], p['jogos'], d['fases'][i], p['z'][i],
                 p['m'][i], d['media'][i]))

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

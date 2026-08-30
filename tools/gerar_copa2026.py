# -*- coding: utf-8 -*-
"""Reconstroi o bloco `const DATA` da pagina "Copa 2026 em Numeros".

Ate agora esse blob estava incrustado a mao no HTML, sem pipeline: atualizar o
torneio significava editar JSON no braco. Este script le os CSV do Kaggle
(swaptr: matches / players / teams) e regenera os 17 blocos derivados.

O ranking FIFA usado no componente "calendario" e um snapshot de dez/2025 que
nao esta em nenhum CSV — ele fica preservado em RANK_FIFA, extraido do proprio
DATA da pagina na primeira execucao.

Modos:
    python gerar_copa2026.py --validar
        Roda com os CSV ANTIGOS (98 jogos) e compara bloco a bloco com o DATA
        que esta no ar. E o portao de confianca: se reproduz o que ja foi
        publicado, a logica esta certa.

    python gerar_copa2026.py --escrever
        Roda com os CSV ATUAIS (104 jogos) e reescreve o HTML.

    python gerar_copa2026.py
        Roda com os CSV atuais e so imprime o resumo, sem tocar no arquivo.
"""
import io, sys, os, csv, json, re, statistics

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

DADOS = r'D:\Otávio Profisional\Phosphorus\GitHub\futebol-analises\data\kaggle-wc2026'
PAGINA = r'D:\Otávio Profisional\Phosphorus\GitHub\portfolio\futebol\copa-2026-em-numeros.html'

CSV_ATUAL = {
    'matches': 'matches - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv',
    'players': 'players - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv',
    'teams':   'teams - fifa_world_cup_2026 - 2026.08.30 - swaptr.csv',
}
CSV_ANTIGO = {'matches': 'matches.csv', 'players': 'players.csv', 'teams': 'teams.csv'}

# matches.csv usa o nome curto da FIFA; a pagina usa o nome por extenso.
# Sem isso a selecao some dos agregados EM SILENCIO — foi assim que a media de
# adversarios da Espanha saiu 22,6 em vez de 31,3.
NOMES = {
    'Cabo Verde': 'Cape Verde',
    'Bosnia–Herz': 'Bosnia and Herzegovina',
    'Bosnia-Herz': 'Bosnia and Herzegovina',
    'Czechia': 'Czech Republic',
    'IR Iran': 'Iran',
    'Türkiye': 'Turkey',
}
nome = lambda t: NOMES.get((t or '').strip(), (t or '').strip())

PESOS = {'atk': 0.26, 'def': 0.24, 'prog': 0.20, 'cal': 0.14,
         'ctrl': 0.08, 'disc': 0.05, 'age': 0.03}


# ------------------------------------------------------------------ utilitarios
def num(v, padrao=None):
    try:
        s = str(v).replace(',', '').strip()
        return float(s) if s not in ('', 'None', 'nan') else padrao
    except (TypeError, ValueError):
        return padrao


def inteiro(v, padrao=0):
    n = num(v)
    return int(n) if n is not None else padrao


def ler(caminho):
    with open(os.path.join(DADOS, caminho), encoding='utf-8-sig',
              errors='replace', newline='') as f:
        return list(csv.DictReader(f))


def z(valores):
    """z-score; desvio zero vira tudo 0."""
    m = statistics.fmean(valores)
    dp = statistics.pstdev(valores)
    return [0.0] * len(valores) if dp == 0 else [(v - m) / dp for v in valores]


def escala(valores, lo=0.0, hi=10.0):
    mn, mx = min(valores), max(valores)
    if mx == mn:
        return [(lo + hi) / 2] * len(valores)
    return [lo + (v - mn) / (mx - mn) * (hi - lo) for v in valores]


# ------------------------------------------------------------------- partidas
def montar_partidas(linhas):
    saida = []
    for r in linhas:
        # Jogo decidido nos penaltis vem como "(3)1–1(4)" e com as colunas
        # home_score/away_score VAZIAS. O blob publicado ate agora lia essas
        # colunas vazias e gravava 0 — por isso Alemanha 1x1 Paraguai aparecia
        # como 0x0, e o total do torneio saia 6 gols menor.
        pens, gols_casa, gols_fora = None, None, None
        marcador = (r.get('score') or '').strip()
        m = re.match(r'^\((\d+)\)(\d+)\s*[–-]\s*(\d+)\((\d+)\)$', marcador)
        if m:
            pens = [int(m.group(1)), int(m.group(4))]
            gols_casa, gols_fora = int(m.group(2)), int(m.group(3))
        else:
            m = re.match(r'^(\d+)\s*[–-]\s*(\d+)$', marcador)
            if m:
                gols_casa, gols_fora = int(m.group(1)), int(m.group(2))
        if gols_casa is None:
            gols_casa, gols_fora = inteiro(r.get('home_score')), inteiro(r.get('away_score'))
        saida.append({
            'round': r['round'],
            'date': r['date'],
            'gw': inteiro(r.get('gameweek'), 0),
            'home': r['home_team'].strip(),   # nome cru do CSV, como a pagina publica
            'away': r['away_team'].strip(),
            'hs': gols_casa,
            'as': gols_fora,
            'pens': pens,
            'stadium': (r.get('venue') or '').split(',')[0].strip(),
            'city': (r.get('venue') or '').split(',')[-1].strip(),
            'att': inteiro(r.get('attendance')),
            'ref': (r.get('referee') or '').strip(),
            'hf': (r.get('home_formation') or '').strip(),
            'af': (r.get('away_formation') or '').strip(),
            'stats': {
                'poss':    [inteiro(r.get('home_possession')), inteiro(r.get('away_possession'))],
                'shots':   [inteiro(r.get('home_total_shots')), inteiro(r.get('away_total_shots'))],
                'sot':     [inteiro(r.get('home_sot')), inteiro(r.get('away_sot'))],
                'saves':   [inteiro(r.get('home_saves')), inteiro(r.get('away_saves'))],
                'corners': [inteiro(r.get('home_corners')), inteiro(r.get('away_corners'))],
                'fouls':   [inteiro(r.get('home_fouls')), inteiro(r.get('away_fouls'))],
                'yellow':  [inteiro(r.get('home_cards_yellow')), inteiro(r.get('away_cards_yellow'))],
                'red':     [inteiro(r.get('home_cards_red')), inteiro(r.get('away_cards_red'))],
                'crosses': [inteiro(r.get('home_crosses')), inteiro(r.get('away_crosses'))],
                'inter':   [inteiro(r.get('home_interceptions')), inteiro(r.get('away_interceptions'))],
                'off':     [inteiro(r.get('home_offsides')), inteiro(r.get('away_offsides'))],
            },
        })
    return saida  # ordem do CSV (cronologica): base dos desempates estaveis


# ------------------------------------------------------- agregados de partida
def montar_meta(partidas, jogadores):
    gols = sum(p['hs'] + p['as'] for p in partidas)
    pub = [p['att'] for p in partidas if p['att']]
    rodadas = {}
    for p in partidas:
        rodadas[p['round']] = rodadas.get(p['round'], 0) + 1
    return {
        'games': len(partidas),
        'goals': gols,
        'gpm': round(gols / len(partidas), 2) if partidas else 0,
        'att_total': sum(pub),
        'att_avg': int(sum(pub) / len(pub)) if pub else 0,
        'att_max': max(pub) if pub else 0,
        'last_date': max(p['date'] for p in partidas),
        'teams': len({p['home'] for p in partidas} | {p['away'] for p in partidas}),
        'players': len(jogadores),
        'rounds': rodadas,
    }


def montar_locais(partidas):
    acc = {}
    for p in partidas:
        if not p['att']:
            continue
        k = (p['stadium'], p['city'])
        a = acc.setdefault(k, {'stadium': p['stadium'], 'city': p['city'],
                               'games': 0, 'att': 0, 'max': 0})
        a['games'] += 1
        a['att'] += p['att']
        a['max'] = max(a['max'], p['att'])
    saida = list(acc.values())
    for a in saida:
        a['avg'] = round(a['att'] / a['games'])
    saida.sort(key=lambda a: -a['att'])
    return saida


def montar_arbitros(partidas, quantos=10):
    acc = {}
    for p in partidas:
        if not p['ref']:
            continue
        a = acc.setdefault(p['ref'], {'ref': p['ref'], 'games': 0, 'y': 0, 'r': 0})
        a['games'] += 1
        a['y'] += sum(p['stats']['yellow'])
        a['r'] += sum(p['stats']['red'])
    # ordenacao ESTAVEL: empate resolve pela ordem de estreia do arbitro
    saida = sorted(acc.values(), key=lambda a: -a['y'] / a['games'])
    return saida[:quantos]


def montar_formacoes(partidas, quantos=6):
    acc = {}
    for p in partidas:
        for f, gp, gc in ((p['hf'], p['hs'], p['as']), (p['af'], p['as'], p['hs'])):
            if not f:
                continue
            a = acc.setdefault(f, {'f': f, 'games': 0, 'w': 0, 'd': 0, 'l': 0, 'gf': 0})
            a['games'] += 1
            a['gf'] += gp
            a['w' if gp > gc else 'l' if gp < gc else 'd'] += 1
    return sorted(acc.values(), key=lambda a: -a['games'])[:quantos]


def montar_disciplina(compare, quantos=12):
    """Totais de cartao saem de teams.csv: a soma partida a partida diverge."""
    lista = [{'team': t, 'y': int(c['cards_yellow']), 'r': int(c['cards_red']),
              'games': int(c['games'])} for t, c in compare.items()]
    lista.sort(key=lambda d: (-(d['y'] + 3 * d['r']), d['team']))
    return lista[:quantos]


def montar_violentas(partidas, quantos=6):
    """Amarelos + 3x vermelhos. Ordenacao ESTAVEL sobre a ordem cronologica,
    que e o que desempata jogos com a mesma pontuacao."""
    chave = lambda p: sum(p['stats']['yellow']) + 3 * sum(p['stats']['red'])
    return sorted(partidas, key=lambda p: -chave(p))[:quantos]


def montar_chave(partidas):
    fases = ['Round of 32', 'Round of 16', 'Quarter-finals', 'Semi-finals', 'Final']
    saida = {}
    for f in fases:
        saida[f] = [p for p in partidas if p['round'] == f]
    return saida


# ------------------------------------------------------- agregados de jogador
def montar_artilheiros(jogadores, quantos=14):
    lista = []
    for r in jogadores:
        g = inteiro(r.get('goals'))
        if g <= 0:
            continue
        minutos = inteiro(r.get('minutes'))
        lista.append({
            'player': r['player'],
            'team': (r.get('team') or r.get('team_country') or '').strip(),
            'goals': g,
            'assists': inteiro(r.get('assists')),
            'min': minutos,
            'shots': inteiro(r.get('shots')),
            'per90': round(g / (minutos / 90), 2) if minutos else 0.0,
        })
    lista.sort(key=lambda d: (-d['goals'], -d['per90']))
    return lista[:quantos]


def montar_assistentes(jogadores, quantos=10):
    lista = [{'player': r['player'],
              'team': (r.get('team') or r.get('team_country') or '').strip(),
              'assists': inteiro(r.get('assists')),
              'goals': inteiro(r.get('goals'))}
             for r in jogadores if inteiro(r.get('assists')) > 0]
    lista.sort(key=lambda d: -d['assists'])
    return lista[:quantos]


def montar_goleiros(jogadores):
    lista = []
    for r in jogadores:
        if 'GK' not in (r.get('position') or ''):
            continue
        jogos = inteiro(r.get('gk_games'))
        pct = num(r.get('gk_save_pct'))
        # a pagina so lista quem defendeu em 3 jogos ou mais
        if jogos < 3 or pct is None:
            continue
        defesas = inteiro(r.get('gk_saves'))
        sofridos = inteiro(r.get('gk_goals_against'))
        lista.append({
            'player': r['player'],
            'team': (r.get('team') or r.get('team_country') or '').strip(),
            'games': jogos,
            'saves': defesas,
            'pct': round(pct, 1),
            'cs': inteiro(r.get('gk_clean_sheets')),
            'ga': sofridos,
        })
    lista.sort(key=lambda d: -d['pct'])
    return lista


# --------------------------------------------------------- agregados de time
CAMPOS_COMPARE = ['possession', 'goals_per90', 'goals_per90_against', 'shots_per90',
                  'shots_per90_against', 'shots_on_target_pct', 'goals_per_shot',
                  'cards_yellow', 'cards_red', 'avg_age', 'games', 'goals',
                  'goals_against', 'pens_made', 'pens_att']


def montar_compare(times):
    # dict preserva ordem de insercao: e a ordem alfabetica do nome ORIGINAL
    # do CSV, pela qual a lista `teams` sai ("Cabo Verde" antes de "Canada")
    return {nome(r['team']): {c: num(r.get(c), 0.0) for c in CAMPOS_COMPARE}
            for r in sorted(times, key=lambda r: r['team'])}


def montar_times(compare):
    lista = [{
        'team': t,
        'games': int(c['games']),
        'poss': round(c['possession'], 1),
        'shots90': round(c['shots_per90'], 1),
        'goals': int(c['goals']),
        'ga': int(c['goals_against']),
        'gps': round(c['goals_per_shot'], 2),
        'age': round(c['avg_age'], 1),
        'yellow': int(c['cards_yellow']),
        'red': int(c['cards_red']),
        'sot_pct': round(c['shots_on_target_pct'], 1),
    } for t, c in compare.items()]
    return lista  # ja na ordem do nome original do CSV


def montar_notas(compare, partidas, rank_fifa):
    """Nota da Copa: z-score de cada metrica, ponderado, reescalonado 1..10."""
    times = sorted(compare)
    adversarios = {t: [] for t in times}
    for p in partidas:
        casa, fora = nome(p['home']), nome(p['away'])
        if casa in adversarios:
            adversarios[casa].append(fora)
        if fora in adversarios:
            adversarios[fora].append(casa)

    faltando = {a for t in times for a in adversarios[t] if a not in rank_fifa}
    if faltando:
        raise SystemExit('rank FIFA ausente para: %s' % sorted(faltando))

    opp = {t: round(statistics.fmean([rank_fifa[a] for a in adversarios[t]]), 1)
           if adversarios[t] else 0.0 for t in times}

    c = compare
    bruto = {
        # ataque: gols/90 (50%), gols por chute (20%), chutes/90 (15%), % no alvo (15%)
        'atk': [0.50 * a + 0.20 * b + 0.15 * d + 0.15 * e for a, b, d, e in zip(
            z([c[t]['goals_per90'] for t in times]),
            z([c[t]['goals_per_shot'] for t in times]),
            z([c[t]['shots_per90'] for t in times]),
            z([c[t]['shots_on_target_pct'] for t in times]))],
        # defesa: gols sofridos/90 (70%) + chutes cedidos/90 (30%), invertidos
        'def': [-(0.70 * a + 0.30 * b) for a, b in zip(
            z([c[t]['goals_per90_against'] for t in times]),
            z([c[t]['shots_per90_against'] for t in times]))],
        'prog': z([c[t]['games'] for t in times]),
        'cal': [-v for v in z([opp[t] for t in times])],
        'ctrl': z([c[t]['possession'] for t in times]),
        'disc': [-v for v in z([
            (c[t]['cards_yellow'] + 3 * c[t]['cards_red']) / max(c[t]['games'], 1)
            for t in times])],
        'age': [-v for v in z([abs(c[t]['avg_age'] - 27.0) for t in times])],
    }

    comps = {k: escala(v, 0, 10) for k, v in bruto.items()}
    soma = [sum(bruto[k][i] * PESOS[k] for k in PESOS) for i in range(len(times))]
    notas = escala(soma, 1, 10)

    ratings = {}
    for i, t in enumerate(times):
        ratings[t] = {
            'nota': round(notas[i], 1),
            'rank': rank_fifa[t],
            'opp_rank_avg': opp[t],
            'games': int(c[t]['games']),
            'comps': {k: round(comps[k][i], 1) for k in PESOS},
        }
    tabela = sorted(
        ({'team': t, 'nota': ratings[t]['nota'], 'rank': ratings[t]['rank'],
          'opp_rank_avg': ratings[t]['opp_rank_avg'], 'games': ratings[t]['games']}
         for t in times), key=lambda d: (-d['nota'], d['team']))
    return ratings, tabela


# ------------------------------------------------------------------ montagem
def montar(csvs, rank_fifa):
    partidas = montar_partidas(ler(csvs['matches']))
    jogadores = ler(csvs['players'])
    times_csv = ler(csvs['teams'])
    compare = montar_compare(times_csv)
    ratings, tabela = montar_notas(compare, partidas, rank_fifa)
    return {
        'matches': partidas,
        'meta': montar_meta(partidas, jogadores),
        'scorers': montar_artilheiros(jogadores),
        'assisters': montar_assistentes(jogadores),
        'gks': montar_goleiros(jogadores),
        'teams': montar_times(compare),
        'compare': compare,
        'discipline': montar_disciplina(compare),
        'violent_matches': montar_violentas(partidas),
        'referees': montar_arbitros(partidas),
        'venues': montar_locais(partidas),
        'formations': montar_formacoes(partidas),
        'ratings': ratings,
        'rating_weights': PESOS,
        'rating_table': tabela,
        'brazil': [p for p in partidas if 'Brazil' in (nome(p['home']), nome(p['away']))],
        'bracket': montar_chave(partidas),
    }


def data_da_pagina():
    t = open(PAGINA, encoding='utf-8', errors='ignore').read()
    i = t.index('const DATA = ') + len('const DATA = ')
    j = t.index('\n', i)
    return json.loads(t[i:j].rstrip(';'))


# ------------------------------------------------------------------ validacao
def comparar(gerado, esperado, caminho='', achados=None):
    if achados is None:
        achados = []
    if isinstance(esperado, dict) and isinstance(gerado, dict):
        for k in esperado:
            if k not in gerado:
                achados.append('%s.%s AUSENTE' % (caminho, k))
            else:
                comparar(gerado[k], esperado[k], '%s.%s' % (caminho, k), achados)
    elif isinstance(esperado, list) and isinstance(gerado, list):
        if len(gerado) != len(esperado):
            achados.append('%s tamanho %d != %d' % (caminho, len(gerado), len(esperado)))
        for i, (g, e) in enumerate(zip(gerado, esperado)):
            comparar(g, e, '%s[%d]' % (caminho, i), achados)
    elif isinstance(esperado, float) or isinstance(gerado, float):
        a, b = num(gerado), num(esperado)
        if a is None or b is None or abs(a - b) > 0.051:
            achados.append('%s = %s, esperado %s' % (caminho, gerado, esperado))
    elif gerado != esperado:
        achados.append('%s = %r, esperado %r' % (caminho, gerado, esperado))
    return achados


def main():
    modo = sys.argv[1] if len(sys.argv) > 1 else '--resumo'
    atual = data_da_pagina()
    rank_fifa = {t: v['rank'] for t, v in atual['ratings'].items()}

    if modo == '--validar':
        print('Validando: gerando a partir dos CSV ANTIGOS (98 jogos) e')
        print('comparando com o DATA que esta publicado.\n')
        gerado = montar(CSV_ANTIGO, rank_fifa)
        total = 0
        for bloco in atual:
            achados = comparar(gerado.get(bloco), atual[bloco], bloco)
            total += len(achados)
            marca = 'ok   ' if not achados else 'DIFERE'
            print('%s %-18s %d divergencia(s)' % (marca, bloco, len(achados)))
            for a in achados[:4]:
                print('        %s' % a[:150])
        print('\nTOTAL de divergencias: %d' % total)
        return 1 if total else 0

    gerado = montar(CSV_ATUAL, rank_fifa)
    m = gerado['meta']
    print('CSV atuais: %d jogos, %d gols, %s ate %s'
          % (m['games'], m['goals'], m['rounds'], m['last_date']))
    print('campeao (ultima partida): %s' % json.dumps(
        gerado['bracket']['Final'], ensure_ascii=False)[:200])

    if modo == '--escrever':
        t = open(PAGINA, encoding='utf-8', errors='ignore').read()
        i = t.index('const DATA = ') + len('const DATA = ')
        j = t.index('\n', i)
        blob = json.dumps(gerado, ensure_ascii=False, separators=(',', ':'))
        open(PAGINA, 'w', encoding='utf-8', newline='').write(t[:i] + blob + ';' + t[j:])
        print('\nHTML reescrito: %s' % PAGINA)
    return 0


if __name__ == '__main__':
    sys.exit(main())

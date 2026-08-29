/* ============================================================================
   i18n dos experimentos do Laboratório
   ----------------------------------------------------------------------------
   Traduz APENAS rótulos de interface. Os dados (nomes de municípios, de
   jogadores, de candidatos, números) nunca são tocados: a troca só acontece
   quando o texto do nó bate EXATAMENTE com uma chave do dicionário.

   Idioma: ?lang=en na URL, ou a escolha guardada em localStorage.
   Um seletor PT|EN é injetado no canto da tela.
   ========================================================================== */
(function () {
  'use strict';

  var DICT = {
    "Passes (Mandante × Visitante)": "Passes (Home × Away)",
    "Chutes (Mandante × Visitante)": "Shots (Home × Away)",
    "Posse (Mandante × Visitante)": "Possession (Home × Away)",
    "← Laboratório": "← Lab",
    "‹ Laboratório": "‹ Lab",
    "capítulos": "chapters",
    /* ---------- navegação / trilha ---------- */
    'Laboratório': 'Lab',
    'Brasil de Lupa': 'Brazil Under the Lens',
    "Futebol · Análises & Data Portraits — Otávio Pelego": "Football · Analysis & Data Portraits — Otávio Pelego",
    "A Copa em Números — 1930–2018": "The World Cup in Numbers — 1930–2018",
    "Copa 2026 em Números — dados reais": "The 2026 World Cup in Numbers — real data",
    "Copa 2022 sob o Microscópio": "The 2022 World Cup Under the Microscope",
    "Laboratório da Partida — Metrica Sports": "Match Lab — Metrica Sports",
    "Onda da Partida — retrato imersivo": "Wave of the Match — an immersive portrait",
    "Como ler — Onda da Partida": "How to read — Wave of the Match",
    'Futebol': 'Football',
    'Como ler': 'How to read',
    'Fontes de dados': 'Data sources',
    'voltar': 'back',
    'início': 'home',

    /* ---------- controles comuns dos mapas 3D ---------- */
    'Altura': 'Height',
    'Altura = população · cor =': 'Height = population · colour =',
    'Altura = valor · cor =': 'Height = value · colour =',
    'Altura = produção · cor =': 'Height = production · colour =',
    'girar câmera sozinha': 'auto-rotate camera',
    'girar câmera': 'auto-rotate camera',
    'tudo': 'all',
    'máx': 'max',
    'Mostrar': 'Show',
    'Só maiores': 'Largest only',
    'baixa': 'low',
    'amplitude de': 'a range of',
    'Prod. mín.': 'Min. production',
    'Pop. mín.': 'Min. population',
    'Renda ≥': 'Income ≥',
    'Renda ≤': 'Income ≤',
    'Idade ≥': 'Age ≥',
    'Idade ≤': 'Age ≤',
    'Fluxo mínimo': 'Minimum flow',
    'Estado': 'State',
    'Cultura dominante · clique p/ filtrar': 'Dominant crop · click to filter',
    'Setor dominante': 'Dominant sector',
    'arraste = girar · Ctrl/direito = mover · scroll = zoom · passe o mouse':
      'drag = rotate · Ctrl/right-click = pan · scroll = zoom · hover for details',
    'arraste = girar · Ctrl/direito = mover · scroll = zoom':
      'drag = rotate · Ctrl/right-click = pan · scroll = zoom',
    'arraste = girar · Ctrl/direito = mover · scroll = zoom · passe o mouse nos arcos':
      'drag = rotate · Ctrl/right-click = pan · scroll = zoom · hover over the arcs',
    'arraste = girar  ·  ctrl+arraste = mover': 'drag = rotate  ·  ctrl+drag = pan',
    'scroll = zoom  ·  passe o mouse nos picos': 'scroll = zoom  ·  hover over the peaks',

    /* ---------- correcoes da auditoria ---------- */
    "Setor que mais gera valor": "The sector generating the most value",
    "Migração entre estados — quem morava em outra UF 5 anos antes do Censo 2022. Cada arco vai da": "Migration between states — people living in a different state 5 years before the 2022 Census. Each arc runs from the",
    "Migração entre estados — quem morava em outra UF 5 anos antes do Censo 2022.": "Migration between states — people living in a different state 5 years before the 2022 Census.",
    "Cada arco vai da": "Each arc runs from the",
    "ganha gente": "gains people",
    "Uiramutã/RR": "Uiramutã/RR",
    "Nova Lima/MG": "Nova Lima/MG",
    "União da Serra/RS": "União da Serra/RS",
    "Sorriso/MT": "Sorriso/MT",
    "lidera": "leads",
    "clique p/ filtrar": "click to filter",
    "Maior": "Largest",
    "Menor": "Smallest",
    "ano": "year",
    "anos": "years",
    "Ano": "Year",
    "Anos": "Years",
    "Fonte": "Source",
    "Fonte:": "Source:",
    "Dados": "Data",
    "Dados:": "Data:",
    "Ver": "View",
    "Clique": "Click",
    "Selecione": "Select",
    "Voltar": "Back",
    "Ocultar": "Hide",
    "total": "total",
    "Total": "Total",
    "mín.": "min.",
    "máx.": "max.",
    "jogo": "match",
    "partida": "match",
    "partidas": "matches",
    "time": "team",
    "times": "teams",
    "gol": "goal",
    "gols": "goals",
    "seleção": "national team",
    "primeiro": "first",
    "último": "last",
    "média": "average",
    "Média": "Average",
    "por partida": "per match",
    "por jogo": "per match",

    /* ---------- lote 1: mapas ---------- */
    "População:": "Population:",
    "Densidade:": "Density:",
    "Área:": "Area:",
    "Renda média:": "Average income:",
    "Idade mediana:": "Median age:",
    "Índice de envelhec.:": "Ageing index:",
    "Setor líder:": "Leading sector:",
    "Área colhida:": "Harvested area:",
    "Valor agrícola total:": "Total agricultural value:",
    "Dominante:": "Dominant:",
    "Chegaram:": "Arrived:",
    "Saíram:": "Left:",
    "desde 2001:": "since 2001:",
    "mais rica que": "richer than",
    "% dos municípios": "% of municipalities",
    "% do valor": "% of the value",
    "pessoas migraram": "people migrated",
    "nos 5 anos até 2022": "in the 5 years to 2022",
    "t de soja": "t of soybeans",
    "idosos/100 jovens": "older people per 100 young",
    "hab/km²": "people/km²",
    "Renda média": "Average income",
    "Idade mediana": "Median age",
    "Área colhida": "Harvested area",
    "Valor agrícola total": "Total agricultural value",
    "Índice de envelhec.": "Ageing index",
    "Setor líder": "Leading sector",
    "RS de Lupa": "Zoom on RS",
    "Densidade demográfica por município — IBGE 2025": "Population density by municipality — IBGE 2025",
    "Densidade hab/km² (escala log)": "Density people/km² (log scale)",
    "213,4 mi habitantes 5.570 municípios": "213.4M inhabitants · 5,570 municipalities",
    "11,2 mi habitantes 497 municípios": "11.2M inhabitants · 497 municipalities",
    "11,2 mi": "11.2M",
    "497 municípios": "497 municipalities",
    "arraste = girar · ctrl+arraste = mover": "drag = rotate · ctrl+drag = pan",
    "scroll = zoom · passe o mouse nos picos": "scroll = zoom · hover over the peaks",
    "Renda domiciliar per capita — Censo 2022 (IBGE). Altura = população · cor = renda por pessoa .": "Household income per capita — 2022 Census (IBGE). Height = population · colour = income per person.",
    "Renda domiciliar per capita — Censo 2022 (IBGE). Altura e cor = renda por pessoa (relevo da riqueza).": "Household income per capita — 2022 Census (IBGE). Height and colour = income per person (relief of wealth).",
    "PIB municipal 2021 (IBGE). Altura = tamanho da economia · cor = setor que mais gera valor .": "Municipal GDP 2021 (IBGE). Height = size of the economy · colour = the sector generating the most value.",
    "PIB municipal 2021 (IBGE). Altura = tamanho da economia · cor = PIB por habitante .": "Municipal GDP 2021 (IBGE). Height = size of the economy · colour = GDP per capita.",
    "PIB por habitante": "GDP per capita",
    "PIB per capita (R$, escala log)": "GDP per capita (R$, log scale)",
    "Idade mediana por município — Censo 2022 (IBGE). Altura = população · cor = idade mediana .": "Median age by municipality — 2022 Census (IBGE). Height = population · colour = median age.",
    "Idade mediana por município — Censo 2022 (IBGE). Altura e cor = idade mediana (relevo etário).": "Median age by municipality — 2022 Census (IBGE). Height and colour = median age (relief of age).",
    "Brasil de Lupa · atlas 3D": "Brazil Under the Lens · 3D atlas",
    "O Brasil em três dimensões": "Brazil in three dimensions",
    "Uma coleção de mapas 3D interativos construídos com dados abertos do": "A collection of interactive 3D maps built from open data by",
    "cada um explora uma faceta do país: quantos somos, como mudamos, quanto ganhamos. Arraste para girar, role para dar zoom, passe o mouse para os detalhes.": "each explores one facet of the country: how many we are, how we change, what we earn. Drag to rotate, scroll to zoom, hover for details.",
    "mapas · todos prontos": "maps · all live",
    "Renderização:": "Rendering:",
    "mapas independentes, uma identidade só.": "independent maps, a single identity.",
    "Dados © IBGE · uso educativo e exploratório.": "Data © IBGE · educational and exploratory use.",
    "← Laboratório": "← Lab",
    "← voltar para o Laboratório": "← back to the Lab",
    "Projeto": "Project",
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    "Trilha de navegação": "Breadcrumb",
    "Otávio Pelego · Otávio de Oliveira Corrêa": "Otávio Pelego · Otávio de Oliveira Corrêa",
    "População de cada município como um pico 3D. O país inteiro e o modo \"RS de Lupa\".": "Every municipality as a 3D peak. The whole country, plus a \"Zoom on RS\" mode.",
    "Crescimento populacional animado de 2001 a 2025. Quem cresce vs. quem encolhe.": "Animated population growth from 2001 to 2025. Who grows vs. who shrinks.",
    "Renda per capita por município. A desigualdade vira cor — e vira topografia.": "Income per capita by municipality. Inequality becomes colour — and becomes terrain.",
    "A transição demográfica: do RS grisalho à Amazônia jovem. Idade mediana por município.": "The demographic transition: from greying Rio Grande do Sul to the young Amazon. Median age by municipality.",
    "Arcos de migração entre estados: SC atrai, o Rio perde. Censo 2022, janela de 5 anos.": "Migration arcs between states: Santa Catarina attracts, Rio loses. 2022 Census, a 5-year window.",
    "O cinturão da soja: 152 Mt em 2023, de Mato Grosso ao MATOPIBA.": "The soybean belt: 152 Mt in 2023, from Mato Grosso to MATOPIBA.",
    "A fronteira agrícola no tempo: 8 Mt em 1974 → 145 Mt em 2024, varrendo o Cerrado.": "The agricultural frontier over time: 8 Mt in 1974 → 145 Mt in 2024, sweeping the Cerrado.",
    "A lavoura de maior valor em cada município — soja, cana, café, mandioca, milho…": "The highest-value crop in each municipality — soy, sugarcane, coffee, cassava, corn…",
    "Escolha o produto: milho, café, cana, arroz… e o rebanho bovino. Onde o Brasil produz.": "Pick the product: corn, coffee, sugarcane, rice… and cattle. Where Brazil produces it.",
    "PIB por município e o setor que mais gera valor. Em 34% dos municípios, é a administração pública.": "GDP by municipality and the sector generating the most value. In 34% of them, it is public administration.",
    "Iniciar Animação Temporal": "Start time animation",
    "Estável": "Stable",

    /* ---------- lote 1b: rodape do atlas ---------- */
    "Projeto": "Project",
    "mapas independentes, uma identidade só.": "independent maps, a single identity.",
    "Fonte:": "Source:",
    "(Censos, estimativas, SIDRA)": "(Censuses, estimates, SIDRA)",

    /* ================= FUTEBOL ================= */
    /* --- narrativas geradas por JS --- */
    "Onde cada jogador realmente pisou durante os 90 minutos (ataque sempre da esquerda para a direita). Clique num jogador:":
      "Where each player actually stepped during the 90 minutes (attacking left to right throughout). Click a player:",
    "ataque → · nós = posição média · mín. 2 passes por ligação":
      "attacking → · nodes = average position · min. 2 passes per link",
    ". Cada círculo é uma finalização; o tamanho é a chance de virar gol.":
      ". Each circle is a shot; the size is its chance of becoming a goal.",
    "(partidas anonimizadas) · xG calculado com modelo simplificado de distância + ângulo · tracking a 25 fps reamostrado para o replay":
      "(anonymised matches) · xG computed with a simplified distance + angle model · 25 fps tracking resampled for the replay",
    "21 Copas do Mundo destiladas em histórias que você provavelmente nunca ouviu — contadas pelos próprios dados.":
      "21 World Cups distilled into stories you have probably never heard — told by the data itself.",
    "— e um em cada cinco jogos termina com um time sem marcar e o outro com um gol só. Quanto mais claro o quadrado, mais vezes o placar aconteceu.":
      "— and one in every five matches ends with one side blanked and the other scoring just once. The lighter the square, the more often that scoreline happened.",
    "nessa lista — o lendário time de Puskás dos anos 50 segue sendo a máquina ofensiva mais impiedosa da história da Copa.":
      "on this list — Puskás’s legendary 1950s side remains the most ruthless attacking machine in World Cup history.",
    "Confrontos que a Copa insiste em repetir. O mais frequente —":
      "Fixtures the World Cup keeps repeating. The most frequent —",
    "Antes de 1982, empates no mata-mata eram decididos com replay (jogo repetido) ou sorteio":
      "Before 1982, knockout draws were settled by a replay or by drawing lots",
    "← era do replay e do sorteio | era dos pênaltis →":
      "← the replay and coin-toss era | the penalty era →",
    "janeiro produziu 32% mais jogadores de Copa que junho":
      "January produced 32% more World Cup players than June",
    "Base: 7.829 jogadores com data de nascimento conhecida · a linha marca a média mensal (652)":
      "Base: 7,829 players with a known date of birth · the line marks the monthly average (652)",
    "Seleções participantes por confederação":
      "Participating teams by confederation",
    "Feito com dados, SVG e amor pelo futebol. Nenhuma biblioteca externa — este arquivo funciona offline.":
      "Made with data, SVG and a love of football. No external libraries — this file works offline.",
    "⏳ Torneio em andamento — retrato dos dados até 10/07/2026 (quartas de final)":
      "⏳ Tournament in progress — a snapshot of the data up to 10 July 2026 (quarter-finals)",
    "— e com a melhor média por 90 minutos do pelotão da frente. Erling Haaland vem logo atrás, depois de atropelar o Brasil nas oitavas.":
      "— and with the best per-90 average of the leading pack. Erling Haaland is right behind, after running over Brazil in the round of 16.",
    "= semifinalistas confirmados no retrato dos dados":
      "= semi-finalists confirmed at the time of this snapshot",
    "dos chutes que enfrentou e soma":
      "of the shots faced, and totals",
    "Seleções mais indisciplinadas":
      "Most ill-disciplined teams",
    "(East Rutherford), com 564.523 torcedores acumulados.":
      "(East Rutherford), with 564,523 spectators in total.",
    "Cinco jogos: empate de estreia, duas goleadas tranquilas, controle total contra o Japão — e a queda nas oitavas para a":
      "Five matches: an opening draw, two comfortable routs, total control against Japan — and elimination in the round of 16 to",
    "no MetLife Stadium. O jogo que o mundo dos dados não parou de dissecar.":
      "at MetLife Stadium. The match the data world has not stopped dissecting.",
    "O detalhe que dói: contra a Noruega o Brasil viveu um jogo":
      "The detail that stings: against Norway, Brazil played a match",
    "— cedeu 66% da posse (uma semana depois de ter 69% contra o Japão) e ainda assim finalizou mais (14 × 9). Mas dos 4 chutes brasileiros no alvo saiu 1 gol; dos 5 noruegueses, 2. A Copa 2026 segue sendo o torneio onde a eficiência vence o volume.":
      "— conceding 66% of possession (a week after holding 69% against Japan) and still taking more shots (14 × 9). But of Brazil’s 4 shots on target, 1 went in; of Norway’s 5, two did. The 2026 World Cup remains the tournament where efficiency beats volume.",
    "(ranking FIFA dos adversários enfrentados).":
      "(FIFA ranking of the opponents faced).",
    "— proximidade do pico de maturidade (~27 anos)":
      "— closeness to the maturity peak (~27 years old)",
    "Ranking completo das 48 notas":
      "Full ranking of all 48 scores",
    "Dados reais da Copa do Mundo 2026 raspados do FBref e publicados no Kaggle por":
      "Real 2026 World Cup data scraped from FBref and published on Kaggle by",
    "em 64 jogos — 169 viraram gol. Cada uma carrega a posição de todos os jogadores visíveis no momento do chute.":
      "across 64 matches — 169 became goals. Each one carries the position of every player visible at the moment of the shot.",
    "clique num chute para abrir o freeze frame":
      "click a shot to open the freeze frame",
    "Escolha qualquer um dos 64 jogos: a corrida do xG minuto a minuto, os chutes dos dois lados e a rede de passes real de cada time.":
      "Pick any of the 64 matches: the xG race minute by minute, the shots from both sides, and each team’s real passing network.",
    "xG acumulado (StatsBomb) · ★ = gol · clique nos pontos para abrir o freeze frame":
      "cumulative xG (StatsBomb) · ★ = goal · click the points to open the freeze frame",
    "terminou artilheiro com 8 gols (xG 4,23), mas a Copa também premiou matadores silenciosos e puniu quem desperdiçou.":
      "finished top scorer with 8 goals (xG 4.23), but the tournament also rewarded quiet finishers and punished the wasteful.",
    "Barra = gols · risco branco = xG acumulado (o que os chutes \"valiam\")":
      "Bar = goals · white tick = cumulative xG (what the shots were \"worth\")",
    "A partida que muitos chamam de a maior final da história: xG de":
      "The match many call the greatest final ever: xG of",
    "(França), 6 gols em 120 minutos e a taça decidida do ponto do pênalti. Abaixo, cada gol com a fotografia real da defesa.":
      "(France), 6 goals in 120 minutes and the trophy settled from the penalty spot. Below, every goal with the real photograph of the defence.",
    "com a Final selecionada para ver a corrida do xG minuto a minuto e as redes de passes dos dois times.":
      "with the Final selected to see the minute-by-minute xG race and both teams’ passing networks.",
    "Brasil × Croácia: a noite que não fecha":
      "Brazil × Croatia: the night that never adds up",
    "Os números da eliminação nas quartas: o Brasil criou":
      "The numbers behind the quarter-final exit: Brazil created",
    "da Croácia, finalizou 20 vezes — e caiu nos pênaltis. O gol de Neymar na prorrogação está congelado abaixo.":
      "to Croatia’s, took 20 shots — and went out on penalties. Neymar’s extra-time goal is frozen below.",
    "105' da prorrogação · xG 0,467 · após tabela dentro da área":
      "105' of extra time · xG 0.467 · after a one-two inside the box",
    "(fork de OtavioPelego) · xG oficial StatsBomb · freeze frames das câmeras 360 · coordenadas no padrão StatsBomb (campo 120×80)":
      "(fork by OtavioPelego) · official StatsBomb xG · 360 camera freeze frames · coordinates in the StatsBomb standard (120×80 pitch)",
    "Altura do bloco: quem defende mais alto?":
      "Block height: who defends highest?",

    /* --- nos multi-frase --- */
    "é uma representação tridimensional imersiva do domínio espacial em um jogo de futebol. Este estilo de visualização é uma adaptação das inovadoras ideias do designer de dados e analista":
      "is an immersive three-dimensional representation of spatial control in a football match. This style of visualisation adapts the pioneering ideas of the data designer and analyst",
    ", que propôs retratar o campo como uma superfície orgânica e fluida para traduzir a física e a tensão tática do jogo.":
      ", who proposed portraying the pitch as an organic, fluid surface to convey the physics and the tactical tension of the game.",
    "Para cada pequeno quadrante do campo, o modelo calcula o tempo físico que cada jogador levaria para correr até aquele ponto (com base em sua distância e velocidade). A cor resultante é uma mistura contínua baseada no controle:":
      "For each small square of the pitch, the model computes the physical time each player would take to run to that point (based on their distance and speed). The resulting colour is a continuous blend based on control:",
    "(a proximidade do local em relação ao gol adversário). Pontos de controle próximos ao gol de ataque geram paredões mais altos. Além disso:":
      "(how close the location is to the opposing goal). Control near the attacking goal produces taller walls. In addition:",
    "O gráfico na parte inferior da tela resume o balanço territorial líquido do jogo segundo a segundo. Picos para cima indicam amplo domínio territorial do Mandante, enquanto picos para baixo indicam domínio do Visitante. Você pode":
      "The chart at the bottom of the screen summarises the net territorial balance of the match second by second. Peaks upwards indicate broad territorial dominance by the home side, while peaks downwards indicate the away side in control. You can",

    /* --- prosa: laboratorio-da-partida e como-ler --- */
    ": em cada área, a cor mostra qual time chegaria primeiro à bola se ela estivesse ali — calculado a cada instante a partir da posição e da velocidade dos 22 jogadores no tracking.":
      ": in every area, the colour shows which team would reach the ball first if it were there — computed at each instant from the position and speed of all 22 players in the tracking data.",
    "com a cor de quem marcou. Aperte o play e assista ao domínio se mover.":
      "in the colour of whoever scored. Press play and watch the control shift.",
    "O lençol somado ao longo dos ~97 minutos: azul onde o Mandante mandou, vermelho onde o Visitante resistiu":
      "The sheet summed over ~97 minutes: blue where the home side ruled, red where the away side held out",
    "de William Spearman. A diferença: o Bogachev reconstrói a impressão da partida a partir de ~1.500 eventos; aqui o lençol é calculado":
      "by William Spearman. The difference: Bogachev reconstructs the impression of a match from ~1,500 events; here the sheet is computed",
    "— para cada ponto do campo, quem chega primeiro, dado onde cada jogador está e para onde se move.":
      "— for every point on the pitch, who gets there first, given where each player is and where they are heading.",
    ". O campo inclina em diagonal e o domínio vira relevo: morros crescem onde um time controla área":
      ". The pitch tilts on a diagonal and control becomes relief: hills rise where a team controls space",
    "(território que ameaça de verdade) e cada chute levanta um pico proporcional ao":
      "(territory that genuinely threatens) and every shot raises a peak proportional to its",
    "e o campo inteiro se tinge da cor de quem marcou — durante toda a comemoração, até a bola voltar a rolar no reinício (detectado nos próprios eventos).":
      "and the whole pitch takes on the colour of whoever scored — for the length of the celebration, until the ball rolls again at the restart (detected in the events themselves).",
    "clique ou arraste no gráfico de domínio para navegar pela partida":
      "click or drag on the control chart to move through the match",
    "Altura = domínio × perigo + paredões onde as ondas colidem · no gol: agulha no local do lance, campo tinge, card do autor":
      "Height = control × danger + walls where the waves collide · on a goal: a spike at the spot, the pitch floods, a card for the scorer",
    "✦ Abrir a versão imersiva em tela cheia (Onda da Partida) →":
      "✦ Open the immersive full-screen version (Wave of the Match) →",
    "Distância percorrida, zonas de velocidade e sprints de cada jogador, extraídos do tracking — o mesmo tipo de relatório que os departamentos de fisiologia recebem após cada rodada.":
      "Distance covered, speed zones and sprints for each player, extracted from the tracking — the same kind of report physiology departments receive after every round.",
    "A maratona invisível: intensidade a cada 5 minutos":
      "The invisible marathon: intensity every 5 minutes",
    "Metros percorridos pelo time inteiro em cada janela de 5 min — dá para ver o caimento físico e o efeito do intervalo":
      "Metres covered by the whole team in each 5-minute window — you can see the physical drop-off and the effect of half-time",
    "A posição média de cada jogador desenha a formação real — não a do papel. E a altura da linha defensiva minuto a minuto mostra quem empurrou quem.":
      "The average position of each player draws the real formation — not the one on paper. And the height of the defensive line, minute by minute, shows who pushed whom.",
    "Mandante ataca → · Visitante ataca ← · posições médias do tracking":
      "Home attacks → · Away attacks ← · average positions from the tracking",
    "Distância média dos 3 defensores mais recuados até o próprio gol, em janelas de 5 min":
      "Average distance of the 3 deepest defenders from their own goal, in 5-minute windows",
    "Cada nó é um jogador na sua posição média; a espessura da linha é o número de passes entre a dupla. É o esqueleto tático do time: por onde a bola realmente circula.":
      "Each node is a player at their average position; the thickness of the line is the number of passes between the pair. It is the tactical skeleton of the team: where the ball actually travels.",
    "Mandante ataca → (chutes à direita) · Visitante ataca ← · tamanho do círculo = xG · passe o mouse":
      "Home attacks → (shots on the right) · Away attacks ← · circle size = xG · hover for details",
    "xG acumulado ao longo do jogo · ★ = gol · o degrau conta a história da criação de chances":
      "Cumulative xG across the match · ★ = goal · the steps tell the story of chance creation",
    "Pressão ofensiva em janelas de 5 minutos (chutes + chegadas ao terço final, com peso extra para gols). Para cima, o Mandante domina; para baixo, o Visitante.":
      "Attacking pressure in 5-minute windows (shots + entries into the final third, with extra weight for goals). Upwards, the home side dominates; downwards, the away side.",
    "mede quantos passes o adversário consegue trocar antes de sofrer uma ação defensiva — quanto":
      "measures how many passes the opponent completes before a defensive action — the",
    ", mais intensa a pressão. Os mapas mostram onde cada time recuperou a bola.":
      ", the more intense the press. The maps show where each team won the ball back.",
    "é uma representação tridimensional imersiva do domínio espacial em um jogo de futebol.":
      "is an immersive three-dimensional representation of spatial control in a football match.",
    "Este estilo de visualização é uma adaptação das inovadoras ideias do designer de dados e analista":
      "This style of visualisation adapts the pioneering ideas of the data designer and analyst",
    "que propôs retratar o campo como uma superfície orgânica e fluida para traduzir a física e a tensão tática do jogo.":
      "who proposed portraying the pitch as an organic, fluid surface to convey the physics and the tactical tension of the game.",
    "Os dados utilizados nesta demonstração provêm do repositório público de dados de rastreamento (tracking) da":
      "The data used in this demonstration comes from the public tracking-data repository of",
    "uma empresa líder em tecnologia de análise de desempenho esportivo. A captura registra as coordenadas de todos os 22 jogadores e da bola a uma taxa de":
      "a leading company in sports performance analysis technology. The capture records the coordinates of all 22 players and the ball at a rate of",
    "A superfície tridimensional que você vê flutuando sobre o campo de jogo é gerada dinamicamente através de dois componentes matemáticos principais:":
      "The three-dimensional surface floating above the pitch is generated dynamically from two main mathematical components:",
    "Para cada pequeno quadrante do campo, o modelo calcula o tempo físico que cada jogador levaria para correr até aquele ponto (com base em sua distância e velocidade).":
      "For each small square of the pitch, the model computes the physical time each player would take to run to that point (based on their distance and speed).",
    "A cor resultante é uma mistura contínua baseada no controle:":
      "The resulting colour is a continuous blend based on control:",
    "(onde os tempos de chegada de ambos os times são quase idênticos).":
      "(where the arrival times of both teams are almost identical).",
    "Onde o controle é totalmente indefinido na fronteira imediata, a malha se rasga sutilmente, gerando uma fresta visual de alta dramaticidade.":
      "Where control is entirely undecided along the immediate frontier, the mesh tears subtly, opening a visually dramatic rift.",
    "A altura das ondas tridimensionais representa a relevância do controle territorial. Ela é calculada multiplicando o grau de dominância territorial pelo":
      "The height of the three-dimensional waves represents how much that territorial control matters. It is computed by multiplying the degree of territorial dominance by the",
    "(a proximidade do local em relação ao gol adversário).":
      "(how close the location is to the opposing goal).",
    "Pontos de controle próximos ao gol de ataque geram paredões mais altos. Além disso:":
      "Control near the attacking goal produces taller walls. In addition:",
    "No momento de um gol, a malha do autor do gol se eleva dramaticamente na jogada e o campo inteiro se tinge da cor do time que marcou até a bola voltar a rolar.":
      "At the moment of a goal, the scorer’s mesh rises dramatically over the play and the entire pitch takes on the colour of the scoring team until the ball rolls again.",
    "O gráfico na parte inferior da tela resume o balanço territorial líquido do jogo segundo a segundo.":
      "The chart at the bottom of the screen summarises the net territorial balance of the match second by second.",
    "Picos para cima indicam amplo domínio territorial do Mandante, enquanto picos para baixo indicam domínio do Visitante.":
      "Peaks upwards indicate broad territorial dominance by the home side, while peaks downwards indicate the away side in control.",
    "ao longo do ECG para navegar no tempo e assistir aos movimentos táticos em qualquer velocidade.":
      "along the ECG to move through time and watch the tactical movements at any speed.",
    "Em vez de tentar acompanhar 22 pontos em movimento simultâneo (o que satura a carga cognitiva), o analista consegue entender instantaneamente as linhas de compactação, blocos de marcação e espaços vazios pela leitura da malha colorida.":
      "Instead of trying to follow 22 dots moving at once (which saturates cognitive load), the analyst instantly grasps compactness lines, marking blocks and empty spaces just by reading the coloured mesh.",
    "Diferente de mapas de calor tradicionais que apenas mostram onde os jogadores estão, a tridimensionalidade baseada no perigo do gol contextualiza a importância real daquela posse de bola.":
      "Unlike traditional heat maps that only show where players are, three-dimensionality weighted by goal danger puts the real importance of that possession in context.",
    "A capacidade de arrastar com o mouse para rotacionar e mudar a elevação da câmera permite que o usuário altere a perspectiva (por exemplo, visualizar a partida \"por trás da defesa\" ou em uma \"visão aérea vertical\").":
      "Being able to drag with the mouse to rotate and change the camera elevation lets the viewer switch perspective (for example, watching the match \"from behind the defence\" or from a \"vertical aerial view\").",
    "O ECG simplifica 90 minutos de flutuação de controle em uma única linha contínua, permitindo identificar instantaneamente momentos de pressão e reviravoltas da partida.":
      "The ECG condenses 90 minutes of fluctuating control into a single continuous line, making moments of pressure and turning points immediately visible.",
    "O cálculo de tempo de viagem assume que todos os atletas correm à mesma velocidade máxima padrão (4.5 m/s) e aceleração constante. Não são considerados cansaço, velocidade máxima real de cada atleta, nem a direção em que o corpo do jogador já está orientado.":
      "The travel-time calculation assumes every athlete runs at the same standard top speed (4.5 m/s) with constant acceleration. It ignores fatigue, each athlete’s real top speed, and the direction the player’s body is already facing.",
    "O rastreamento e o modelo tratam o jogo como estritamente bidimensional. Trajetórias aéreas (como lançamentos altos ou cruzamentos elevados) não são processadas em sua componente de altura real, o que pode falsear quem de fato domina o espaço aéreo.":
      "The tracking and the model treat the game as strictly two-dimensional. Aerial trajectories (long balls or high crosses) are not processed with their real height component, which can misrepresent who actually commands the air.",
    "O modelo de Pitch Control assume o controle de espaço apenas pela distância e velocidade de corrida. Ele não pondera se um jogador está de costas sob forte pressão técnica ou se é dotado de maior capacidade de passe e drible para romper o espaço.":
      "The pitch control model derives control of space from running distance and speed alone. It does not account for a player being turned away under heavy pressure, or for superior passing and dribbling ability to break through that space.",
    "A renderização em tempo real da malha 3D interpolada e ordenada por profundidade diretamente em Canvas 2D exige processamento de CPU considerável do navegador.":
      "Rendering the interpolated, depth-sorted 3D mesh in real time directly on a 2D canvas demands considerable CPU from the browser.",
    "Dados de Rastreamento fornecidos por":
      "Tracking data provided by",
    "Leitura Holística Rápida:":
      "Fast holistic reading:",
    "Ponderação por Perigo Espacial:":
      "Weighting by spatial danger:",
    "Interatividade Espacial 3D:":
      "3D spatial interactivity:",
    "Síntese Temporal Integrada:":
      "Integrated temporal synthesis:",
    "Modelo Físico Simplificado:":
      "Simplified physical model:",
    "Desconsideração da Altura da Bola (2D):":
      "Ball height ignored (2D):",
    "Ausência de Pressão de Jogo:":
      "No account of in-game pressure:",
    "Custo de Processamento Gráfico:":
      "Graphics processing cost:",
    "1. Controle de Campo (Pitch Control) – Cor da Malha:":
      "1. Pitch control – mesh colour:",
    "2. Altura da Malha (Multiplicador de Perigo):":
      "2. Mesh height (danger multiplier):",
    "Ao redor da bola, a malha recebe um impulso dinâmico de":
      "Around the ball, the mesh receives a dynamic boost of",
    "para destacar o epicentro da ação.":
      "to highlight the epicentre of the action.",
    "50% adicionais de altura":
      "an extra 50% in height",
    "25 quadros por segundo (25 Hz)":
      "25 frames per second (25 Hz)",
    "clicar ou arrastar":
      "click or drag",
    "Eletrocardiograma (ECG) Inferior:":
      "Lower electrocardiogram (ECG):",

    /* --- prosa: a-copa, copa-2026, copa-2022 --- */
    "De Montevidéu 1930 a Moscou 2018: cada carta abaixo é uma Copa. As com":
      "From Montevideo 1930 to Moscow 2018: each card below is a World Cup. The ones with",
    "são as em que o anfitrião levantou a taça em casa — aconteceu":
      "are the ones where the host lifted the trophy at home — which happened",
    "vezes, mas nunca depois de 1998.":
      "times, but never after 1998.",
    "Em 1954, cada partida tinha em média":
      "In 1954, the average match had",
    "— e nunca mais voltou a passar de 3.":
      "— and it has never gone above 3 again.",
    ". O futebol então descobriu a tática, a marcação e o medo de perder: em 1990 a média despencou para":
      ". Football then discovered tactics, man-marking and the fear of losing: by 1990 the average had collapsed to",
    "Passe o mouse sobre a linha para explorar cada torneio · o vão entre 1938 e 1950 é a Segunda Guerra":
      "Hover over the line to explore each tournament · the gap between 1938 and 1950 is the Second World War",
    "Dos 900 jogos da história, o placar mais comum é o sofrido":
      "Of the 900 matches in history, the most common scoreline is a hard-fought",
    "Eixo horizontal: gols de quem fez mais · eixo vertical: gols de quem fez menos · passe o mouse nas células":
      "Horizontal axis: goals by the higher scorer · vertical axis: goals by the lower scorer · hover over the cells",
    "Todas as partidas decididas por":
      "Every match decided by",
    "de diferença. Repare no padrão: quase todas aconteceram até 1982, quando o abismo entre gigantes e estreantes era um oceano.":
      "or more. Notice the pattern: nearly all of them happened before 1982, when the gulf between giants and debutants was an ocean.",
    ", 7 jogos — é também o mais desequilibrado: a Suécia nunca venceu.":
      ", 7 matches — and also the most lopsided: Sweden has never won one.",
    ". Desde então virou personagem fixo do mata-mata — 1990, 2006, 2014 e 2018 tiveram quatro decisões cada.":
      ". Since then it has been a fixture of the knockout rounds — 1990, 2006, 2014 and 2018 each had four shoot-outs.",
    "que já foram convocados para uma Copa, o clube dos que disputaram cinco tem só":
      "ever called up to a World Cup, the club of those who played in five has only",
    "sócios. E dois terços dos jogadores nunca passam da primeira.":
      "members. And two thirds of all players never go beyond their first.",
    "Distribuição dos 7.907 jogadores por número de convocações":
      "Distribution of the 7,907 players by number of call-ups",
    "Um viés invisível decide quem chega à Copa antes mesmo da primeira peneira: nas categorias de base, os nascidos no":
      "An invisible bias decides who reaches a World Cup before the first trial even happens: in youth football, those born in the",
    "são os maiores da turma — e são mais escolhidos. Resultado:":
      "are the biggest in their age group — and get picked more often. The result:",
    "Entre 7.829 datas de nascimento conhecidas, praticamente todo dia do calendário tem um jogador de Copa. Escolha o seu:":
      "Among 7,829 known birth dates, almost every day of the calendar has a World Cup player. Pick yours:",
    "Em 1930, a Copa era um clube de europeus e sul-americanos com um punhado de convidados. O torneio triplicou de tamanho — de 13 para 32 seleções — e África e Ásia deixaram de ser figurantes.":
      "In 1930 the World Cup was a club of Europeans and South Americans with a handful of guests. The tournament tripled in size — from 13 to 32 teams — and Africa and Asia stopped being extras.",
    ", dissecada com dados reais partida a partida — da fase de grupos até onde o torneio chegou.":
      ", dissected with real data match by match — from the group stage to wherever the tournament has reached.",
    "Com 48 seleções, 2026 estreou uma fase inédita: os":
      "With 48 teams, 2026 introduced a brand-new stage: the",
    ". Clique em qualquer jogo para abrir os detalhes no explorador.":
      ". Click any match to open the details in the explorer.",
    "Todas as partidas com estatísticas completas. Filtre por fase ou seleção e clique num jogo para abrir o raio-X.":
      "Every match with full statistics. Filter by stage or team and click a match to open the x-ray.",
    "Cada bola é uma seleção: posse de bola contra volume de chutes. Os quadrantes separam quem":
      "Each ball is a team: possession against shot volume. The quadrants separate those who",
    "— e o tamanho mostra os gols marcados.":
      "— and the size shows goals scored.",
    "Times que jogaram em cada esquema (mín. 4 jogos) e o que colheram":
      "Teams that played each formation (min. 4 matches) and what they got out of it",
    "% de defesas (mín. 3 jogos) · 🧱 = jogos sem sofrer gol":
      "save percentage (min. 3 matches) · 🧱 = clean sheets",
    "Escolha duas seleções e compare o retrato estatístico das duas campanhas — cada uma com a sua":
      "Pick two teams and compare the statistical portrait of both campaigns — each with its own",
    ", um índice nosso que pondera ataque, defesa, controle, disciplina, profundidade no torneio e a":
      ", an index of my own weighing attack, defence, control, discipline, tournament progress and",
    "Cada métrica é padronizada entre as 48 seleções (z-score) e entra com um peso:":
      "Each metric is standardised across the 48 teams (z-score) and enters with a weight:",
    "— força média dos adversários enfrentados, pelo ranking FIFA pré-Copa (dez/2025, aproximado): fazer números contra a França vale mais do que contra o Haiti":
      "— the average strength of the opponents faced, by the pre-tournament FIFA ranking (Dec 2025, approximate): putting up numbers against France counts for more than against Haiti",
    "dentro do elenco das 48. Cada barrinha de componente também vai de 0 a 10 na mesma lógica.":
      "within the field of 48. Each component bar also runs from 0 to 10 on the same logic.",
    "· sem dados de tracking/GPS (esses são proprietários da FIFA) · arquivo 100% offline.":
      "· no tracking/GPS data (those are proprietary to FIFA) · fully offline file.",
    "A Copa do Messi, evento por evento: cada chute com a":
      "Messi's World Cup, event by event: every shot with",
    "no instante da finalização, xG oficial da StatsBomb e a estrutura defensiva dos times vista pelas câmeras 360.":
      "at the moment of the shot, official StatsBomb xG, and the defensive shape of the teams as seen by the 360 cameras.",
    "rede de passes (ataca →) · nós = posição média · mín. 4 passes":
      "passing network (attacking →) · nodes = average position · min. 4 passes",
    "Passes + conduções que avançaram a bola ≥ 12 unidades rumo ao gol":
      "Passes + carries that moved the ball ≥ 12 units towards goal",
    "Mín. 8 finalizações — quem transformou pouco em muito":
      "Min. 8 shots — who turned little into a lot",
    "Chances criadas que morreram na trave, no goleiro ou na arquibancada":
      "Chances created that died on the post, on the keeper or in the stands",
    "Dois retratos que só existem com dados 360 e eventos de pressão:":
      "Two portraits that only exist with 360 data and pressing events:",
    "quando o adversário troca passes — a posição de cada defensor capturada pelas câmeras.":
      "while the opponent passes the ball around — every defender’s position captured by the cameras.",
    "defende ← · posições reais dos defensores durante passes adversários":
      "defending ← · real defender positions during opposition passes",
    "Distância média dos 4 defensores mais recuados até o próprio gol (metros equivalentes), medida nos freeze frames 360":
      "Average distance of the 4 deepest defenders from their own goal (equivalent metres), measured in the 360 freeze frames",
    "freeze frames das câmeras 360 · coordenadas no padrão StatsBomb (campo 120×80)":
      "360 camera freeze frames · coordinates in the StatsBomb standard (120×80 pitch)",
    "Copa 2022 sob o Microscópio — StatsBomb 360":
      "The 2022 World Cup Under the Microscope — StatsBomb 360",

    /* --- descricoes dos cards do hub de futebol --- */
    "O data portrait em tela cheia no estilo Bogachev: duas ondas de kevlar que levitam e se rasgam na fronteira do domínio, ECG de posse comandando a navegação, tsunami na comemoração do gol.":
      "The full-screen data portrait in the Bogachev style: two kevlar waves that levitate and tear along the frontier of control, a possession ECG driving the navigation, a tsunami when the goal is celebrated.",
    "Nível profissional: replay animado até 128×, lençol de domínio 2D (pitch control), retrato 3D com relevo de domínio × perigo, raio-X físico (sprints, velocidade), redes de passe, PPDA e momentum.":
      "Professional grade: animated replay up to 128×, a 2D control sheet (pitch control), a 3D portrait with relief of control × danger, a physical x-ray (sprints, speed), passing networks, PPDA and momentum.",
    "Os 64 jogos com freeze frames das câmeras 360: clique em qualquer um dos 1.453 chutes e veja a fotografia real da defesa. Corrida do xG, redes de passe, bloco defensivo real, o capítulo da Final.":
      "All 64 matches with freeze frames from the 360 cameras: click any of the 1,453 shots and see the real photograph of the defence. The xG race, passing networks, the actual defensive block, and a chapter on the Final.",
    "A Copa real de 2026 até as quartas: mata-mata clicável, corrida da Chuteira de Ouro (Messi × Mbappé × Haaland), explorador das 98 partidas, Brasil em foco e a Nota da Copa — índice próprio de 1,0 a 10,0.":
      "The real 2026 World Cup up to the quarter-finals: a clickable knockout bracket, the Golden Boot race (Messi × Mbappé × Haaland), an explorer of all 98 matches, Brazil in focus, and the World Cup Score — my own index from 1.0 to 10.0.",
    "Revista interativa em 11 capítulos: linha do tempo dos campeões, a morte do futebol romântico, mapa de calor de placares, a loteria dos pênaltis, o efeito da idade relativa e \"quem nasceu no seu dia\".":
      "An interactive magazine in 11 chapters: a timeline of the champions, the death of romantic football, a heat map of scorelines, the penalty lottery, the relative age effect and \"who was born on your day\".",

    "Futebol em": "Football in",
    "retratos de dados": "data portraits",
    "aplicativos": "apps",
    "cobertura": "coverage",
    "fontes de dados": "data sources",
    "Os aplicativos": "The apps",
    "Meu conjunto de apps interativos de análise e visualização — da Copa de 1930 ao tracking 25 fps de uma partida, tudo em HTML único, num clique.": "My set of interactive analysis and visualisation apps — from the 1930 World Cup to 25 fps tracking of a single match, all in one HTML file, one click away.",
    "Onda da Partida": "Wave of the Match",
    "Retrato 3D imersivo": "Immersive 3D portrait",
    "Laboratório da Partida": "Match Lab",
    "Análise tática & física": "Tactical & physical analysis",
    "raio-X físico": "physical x-ray",
    "redes de passe": "passing networks",
    "Copa 2022 sob o Microscópio": "The 2022 World Cup Under the Microscope",
    "Catar, evento por evento": "Qatar, event by event",
    "chutes": "shots",
    "1.453 chutes": "1,453 shots",
    "Copa 2026 em Números": "The 2026 World Cup in Numbers",
    "Canadá · México · EUA": "Canada · Mexico · USA",
    "jogos": "matches",
    "98 jogos": "98 matches",
    "seleções": "national teams",
    "48 seleções": "48 national teams",
    "Nota da Copa": "World Cup Score",
    "A Copa em Números": "The World Cup in Numbers",
    "Ferramentas & pesquisa": "Tools & research",
    "Como ler": "How to read",
    "Como Ler": "How to Read",
    "Guia das visualizações 3D": "Guide to the 3D visualisations",
    "Comparativo de ~26 fontes de futebol": "A comparison of ~26 football data sources",
    "abrir": "open",
    "explorar": "explore",
    "Índice detalhado": "Detailed index",
    "Campeões": "Champions",
    "Gols": "Goals",
    "Placares": "Scorelines",
    "Goleadas": "Thrashings",
    "Rivalidades": "Rivalries",
    "Pênaltis": "Penalties",
    "Veteranos": "Veterans",
    "Aniversários": "Birthdays",
    "Seu dia": "Your day",
    "Prêmios": "Awards",
    "O mundo": "The world",
    "gols marcados em 88 anos de Copa do Mundo": "goals scored in 88 years of World Cup football",
    "▼ role para começar": "▼ scroll to begin",
    "A prateleira de troféus": "The trophy shelf",
    "borda dourada": "a gold border",
    "Títulos por seleção": "Titles by nation",
    "A morte do futebol romântico": "The death of romantic football",
    "Gols por partida em cada Copa": "Goals per match in each World Cup",
    "O placar tem cara de quê?": "What does a scoreline look like?",
    "Frequência de cada placar final (1930–2018)": "Frequency of each final scoreline (1930–2018)",
    "Os massacres": "The routs",
    "seis gols ou mais": "six goals or more",
    "Rivalidades de Copa": "World Cup rivalries",
    "Alemanha Ocidental e Alemanha unificada contadas como registradas na base.": "West Germany and unified Germany counted as recorded in the source data.",
    "Mata-mata": "Knockout",
    "Artilharia": "Top scorers",
    "Estilos": "Styles",
    "Goleiros": "Goalkeepers",
    "Disciplina": "Discipline",
    "Palcos": "Venues",
    "Comparar": "Compare",
    "Brasil": "Brazil",
    "Copa do Mundo FIFA 2026 · Canadá · México · EUA — dados reais": "FIFA World Cup 2026 · Canada · Mexico · USA — real data",
    "A primeira Copa de": "The first World Cup with",
    "gols marcados": "goals scored",
    "O torneio": "The tournament",
    "O mata-mata, jogo a jogo": "The knockout stage, match by match",
    "16-avos de final": "round of 32",
    "A corrida da Chuteira de Ouro": "The Golden Boot race",
    "Artilheiros": "Top scorers",
    "Garçons (assistências)": "Playmakers (assists)",
    "Partidas": "Matches",
    "Explorador de partidas": "Match explorer",
    "Táticas": "Tactics",
    "O mapa dos estilos": "The map of styles",
    "propõe": "proposes",
    "de quem": "of those who",
    "reage": "react",
    "Formações mais usadas": "Most-used formations",
    "Debaixo das traves": "Between the posts",
    "Os paredões": "The walls",
    "Barras = gols · passe o mouse para eficiência": "Bars = goals · hover for efficiency",
    "Chutes": "Shots",
    "Protagonistas": "Key players",
    "A Final": "The Final",
    "Catar 2022 · StatsBomb Open Data + 360 freeze frames": "Qatar 2022 · StatsBomb Open Data + 360 freeze frames",
    "fotografia real da defesa": "the real photograph of the defence",
    "Todos os chutes da Copa — com raio-X": "Every shot of the World Cup — with an x-ray",
    "Só gols": "Goals only",
    "ataque": "attack",
    "defesa": "defence",
    "goleiro": "goalkeeper",
    "bola / chutador": "ball / shooter",
    "Jogo a jogo": "Match by match",
    "Anatomia de cada partida": "Anatomy of each match",
    "Corrida do xG": "The xG race",
    "Indivíduos": "Individuals",
    "Os protagonistas": "The key players",
    "Artilheiros: gols reais × esperados": "Top scorers: real goals × expected",
    "Motores de progressão": "Progression engines",
    "🔥 Matadores (gols acima do xG)": "🔥 Finishers (goals above xG)",
    "🧊 Perdulários (gols abaixo do xG)": "🧊 Wasteful (goals below xG)",
    "Jogo 1": "Match 1",
    "Jogo 2": "Match 2",
    "Retrato 3D": "3D portrait",
    "Físico": "Physical",
    "Calor": "Heat",
    "Forma": "Shape",
    "Passes": "Passes",
    "Chutes·xG": "Shots·xG",
    "Pressão": "Pressing",
    "Posse": "Possession",
    "Metrica Sports · eventos + tracking 25 fps": "Metrica Sports · events + 25 fps tracking",
    "Mandante": "Home",
    "Visitante": "Away",
    "O lençol do domínio": "The sheet of control",
    "O campo vira um": "The pitch becomes a",
    "lençol de duas cores": "two-colour sheet",
    "Chutes viram pulsos": "Shots become pulses",
    "gols inundam o campo": "goals flood the pitch",
    "bola": "ball",
    "lençol = território": "sheet = territory",
    "Lençol: ON": "Sheet: ON",
    "Lençol: OFF": "Sheet: OFF",
    "1º tempo": "First half",
    "2º tempo": "Second half",
    "Domínio territorial médio da partida": "Average territorial control of the match",
    "Tracking · superfície 3D": "Tracking · 3D surface",
    "O retrato 3D: domínio como terreno": "The 3D portrait: control as terrain",
    "altura": "height",
    "Como Ler o Retrato Visual": "How to Read the Visual Portrait",
    "Um ensaio de Visual Data Analytics (VDA) sobre o controle espacial no futebol": "An essay in Visual Data Analytics (VDA) on spatial control in football",
    "O Conceito da \"Onda da Partida\"": "The concept of the \"Wave of the Match\"",
    "Como Funciona a Matemática Visual": "How the Visual Maths Works",
    "Azul": "Blue",
    "Vermelho": "Red",
    "Roxo": "Purple",
    "Disputa Territorial": "Territorial Contest",
    "perigo espacial": "spatial danger",
    "Pontos Fortes da Visualização": "Strengths of the Visualisation",
    "Limitações do Modelo (VDA)": "Limitations of the Model (VDA)",
    "‹ Voltar ao Retrato": "‹ Back to the Portrait",
    "Mandante (MAN)": "Home (MAN)",
    "Visitante (VIS)": "Away (VIS)",

    /* ---------- nav e contato embutidos nos experimentos ---------- */
    'Automações': 'Automation', 'Conteúdo': 'Content', 'Sites': 'Websites',
    'Ser encontrado': 'Get found', 'Consultoria': 'Consulting',
    'Minha história': 'My story', 'Vamos conversar?': "Let's talk",
    'Escolha o canal que preferir — eu respondo em todos, e prometo resposta de gente, não de robô.':
      'Pick whichever channel you prefer — I answer on all of them, and I promise a human reply, not a bot.',
    'Para uma melhor experiência de análise visual e interativa dos dados, recomendamos visualizar este painel em um tablet ou computador.':
      'For the best visual and interactive experience with this data, we recommend viewing this dashboard on a tablet or computer.',
    '+55 53 98122-3304 · só mensagens': '+55 53 98122-3304 · messages only',
    'só mensagens': 'messages only',
    'Para uma melhor experiência de análise visual e interativa dos dados, recomendo o uso de um computador ou tablet.':
      'For the best visual and interactive experience with this data, I recommend a desktop or tablet.',

    /* ---------- USDA ---------- */
    'Trigo Global': 'Global Wheat',
    'Análise de Produtividade, Área e Produção (Dados USDA PSD)':
      'Yield, Area and Production Analysis (USDA PSD data)',
    'Cultura:': 'Commodity:', 'Métrica Ativa:': 'Active metric:',
    'Produtividade (MT/HA)': 'Yield (MT/HA)',
    'Produção (1.000 MT)': 'Production (1,000 MT)',
    'Área Colhida (1.000 HA)': 'Harvested area (1,000 HA)',
    'Consumo Doméstico (1.000 MT)': 'Domestic consumption (1,000 MT)',
    'Importações (1.000 MT)': 'Imports (1,000 MT)',
    'Exportações (1.000 MT)': 'Exports (1,000 MT)',
    'Relação Estoque/Consumo (%)': 'Stock-to-use ratio (%)',
    'Produção Mundial': 'World production',
    'Área Colhida Total': 'Total harvested area',
    'Produtividade Média': 'Average yield',
    'Estoque/Consumo Mundial': 'World stock-to-use',
    'Maior Produtor': 'Largest producer',
    'Distribuição Espacial de Produtividade': 'Spatial distribution of yield',
    'Top 10 Países / Regiões': 'Top 10 countries / regions',
    'Produtividade': 'Yield',
    'Evolução Temporal Comparativa (1960 - 2026)': 'Comparative timeline (1960–2026)',
    'Limpar Países': 'Clear countries',
    'Perfil do País Selecionado:': 'Selected country profile:',
    'Consumo Interno': 'Domestic consumption',
    'Balanço Comercial': 'Trade balance',
    'Importador': 'Importer', 'Exportador': 'Exporter',
    '🌾 Trigo': '🌾 Wheat', '🌽 Milho': '🌽 Corn', '🫘 Soja': '🫘 Soybeans',
    '🍚 Arroz': '🍚 Rice', '🍺 Cevada': '🍺 Barley', '☁️ Algodão': '☁️ Cotton',
    '☕ Café': '☕ Coffee', '🍬 Açúcar': '🍬 Sugar', '🌴 Óleo de Palma': '🌴 Palm oil',
    '🥩 Carne Bovina': '🥩 Beef', '🐖 Carne Suína': '🐖 Pork', '🍗 Carne de Frango': '🍗 Poultry',

    /* ---------- TSE ---------- */
    'Histórico Eleitoral Brasileiro': 'Brazilian Electoral History',
    'Análise consolidada e estatísticas oficiais do TSE (1994 - 2022)':
      'Consolidated analysis and official TSE statistics (1994–2022)',
    'Ano da Eleição': 'Election year', 'Turno': 'Round',
    '1º Turno': 'First round', '2º Turno': 'Runoff',
    'Total de Eleitores': 'Registered voters',
    'Total de Candidatos (Geral)': 'Total candidates (all races)',
    'Votos Válidos (Presidente)': 'Valid votes (President)',
    'Abstenção': 'Abstention',
    'Distribuição de Votação por Estado': 'Vote distribution by state',
    'Selecione um estado': 'Select a state',
    'Selecione um estado no mapa': 'Select a state on the map',
    'Clique em qualquer estado no mapa acima para ver a votação detalhada dos candidatos.':
      'Click any state on the map above to see the detailed candidate results.',
    'Votação Nacional (Presidente)': 'National vote (President)',
    'Distribuição dos Votos': 'Vote distribution',
    'Perfil dos Candidatos': 'Candidate profile',
    'Perfil do Eleitorado': 'Electorate profile',
    'Evolução Histórica': 'Historical trend',
    'Gênero das Candidaturas': 'Gender of candidates',
    'Instrução das Candidaturas': 'Education of candidates',
    'Autodeclaração de Raça/Cor': 'Self-declared race/colour',
    'Gênero do Eleitorado': 'Gender of the electorate',
    'Escolaridade do Eleitorado': 'Education of the electorate',
    'Evolução de Abstenções (1994 - 2022)': 'Abstention over time (1994–2022)',
    'Portal de Dados Abertos do TSE': 'TSE Open Data Portal',

    /* ---------- Conab ---------- */
    'Histórico Conab': 'Conab Historical Data',
    'Área, Produção e Rendimento de Culturas no Brasil (1976 - 2026)':
      'Area, Production and Yield of Brazilian Crops (1976–2026)',
    'Grãos': 'Grains', 'Cana-de-Açúcar': 'Sugarcane',
    'Produção (Toneladas)': 'Production (tonnes)',
    'Área Plantada (Hectares)': 'Planted area (hectares)',
    'Produtividade (kg/ha)': 'Yield (kg/ha)',
    'Produção Nacional': 'National production',
    'Área Plantada Total': 'Total planted area',
    'Estado Líder': 'Leading state',
    'Sem registros': 'No records',
    'Distribuição Geográfica de': 'Geographic distribution of',
    'Limpar Filtro': 'Clear filter',
    'Área Plantada': 'Planted area',
    'Evolução Histórica (': 'Historical trend (',
    'Linha do Tempo': 'Timeline',
    'Top 10 Estados Produtores': 'Top 10 producing states',
    'Maiores UFs': 'Largest states',

    /* ---------- commodities avulsas e safras ---------- */
    'Trigo': 'Wheat', 'Cevada': 'Barley', 'Açúcar': 'Sugar',
    'Óleo de Palma': 'Palm oil', 'Carne Bovina': 'Beef',
    'Carne Suína': 'Pork', 'Carne de Frango': 'Poultry',
    'Global': 'Global', 'Mundial': 'World',
    'Safras (Conab)': 'Harvests (Conab)',
    'Feijão (1ª Safra)': 'Beans (1st crop)', 'Feijão (2ª Safra)': 'Beans (2nd crop)',
    'Feijão (3ª Safra)': 'Beans (3rd crop)',
    'Milho (1ª Safra)': 'Corn (1st crop)', 'Milho (2ª Safra)': 'Corn (2nd crop)',
    'Milho (3ª Safra)': 'Corn (3rd crop)',
    'Algodão (Pluma)': 'Cotton (lint)', 'Algodão (Caroço)': 'Cotton (seed)',
    'Amendoim (1ª Safra)': 'Peanut (1st crop)', 'Amendoim (2ª Safra)': 'Peanut (2nd crop)',

    /* ---------- nomes de culturas (botoes do mapa de Culturas) ---------- */
    'Soja': 'Soybeans', 'Milho': 'Corn', 'Café': 'Coffee', 'Cana': 'Sugarcane',
    'Arroz': 'Rice', 'Feijão': 'Beans', 'Algodão': 'Cotton', 'Trigo': 'Wheat',
    'Laranja': 'Orange', 'Mandioca': 'Cassava', 'Cacau': 'Cocoa', 'Uva': 'Grapes',
    'Boi': 'Cattle',

    /* ---------- Brasil em Picos ---------- */
    'Brasil em Picos': 'Brazil in Peaks',
    'População estimada por município — IBGE, 1º jul 2025':
      'Estimated population by municipality — IBGE, 1 July 2025',
    '🇧🇷 Brasil': '🇧🇷 Brazil',
    '🔍 RS de Lupa': '🔍 Zoom on RS',
    'População (escala log)': 'Population (log scale)',
    'habitantes': 'inhabitants',
    'habitantes no país': 'inhabitants nationwide',
    '5.570 municípios': '5,570 municipalities',
    '12 milhões': '12 million',
    '1 mil': '1k',
    '100 mil': '100k',

    /* ---------- Brasil Desigual ---------- */
    'Brasil Desigual': 'Unequal Brazil',
    'Renda domiciliar per capita — Censo 2022 (IBGE).':
      'Household income per capita — 2022 Census (IBGE).',
    'renda por pessoa': 'income per person',
    '🎨 Renda na cor': '🎨 Income as colour',
    '⛰️ Relevo da renda': '⛰️ Income as relief',
    'renda mediana entre municípios': 'median income across municipalities',
    'Renda per capita — R$/mês (escala log)': 'Income per capita — R$/month (log scale)',

    /* ---------- A Economia do Brasil ---------- */
    'A Economia do Brasil': "Brazil's Economy",
    'PIB municipal 2021 (IBGE). Altura = tamanho da economia · cor =':
      'Municipal GDP 2021 (IBGE). Height = size of the economy · colour =',
    'setor que mais gera valor': 'the sector generating the most value',
    '🏭 Setor dominante': '🏭 Dominant sector',
    '💰 PIB per capita': '💰 GDP per capita',
    'PIB do Brasil (2021)': "Brazil's GDP (2021)",
    'Administração pública': 'Public administration',
    'domina': 'leads in',

    /* ---------- Brasil em Movimento ---------- */
    'Brasil em Movimento': 'Brazil on the Move',
    'origem': 'origin',
    'destino': 'destination',
    'ao': 'to the',
    'mostrando': 'showing',
    'fluxos ·': 'flows ·',
    '+ pessoas': '+ people',
    'todos os fluxos': 'all flows',
    'maior ganho líquido': 'largest net gain',
    'saldo migratório (5 anos)': 'net migration (5 years)',
    'Arco:': 'Arc:',
    'origem → destino': 'origin → destination',
    'ganha gente  ': 'gains people  ',
    'perde gente': 'loses people',

    /* ---------- O que o Brasil Planta / Culturas ---------- */
    'Culturas do Brasil': 'Crops of Brazil',
    'Escolha um produto e veja onde o Brasil produz — PAM/PPM IBGE 2023.':
      'Pick a product and see where Brazil grows it — PAM/PPM IBGE 2023.',
    'O que o Brasil Planta': 'What Brazil Grows',
    'A lavoura de': 'The crop of',
    'maior valor': 'highest value',
    'em cada município — Censo Agrícola PAM 2023 (IBGE).':
      'in each municipality — PAM Agricultural Census 2023 (IBGE).',
    'Cor = cultura dominante · altura = valor total da produção.':
      'Colour = dominant crop · height = total production value.',
    'lavoura que domina + municípios': 'the crop leading in the most municipalities',
    'valor da produção agrícola 2023': 'value of agricultural output 2023',

    /* ---------- Brasil no Tempo ---------- */
    'Brasil no Tempo': 'Brazil Over Time',
    'Como a população de cada município mudou — 2001 a 2025.':
      'How each municipality’s population changed — 2001 to 2025.',
    'crescimento desde 2001': 'growth since 2001',
    '📈 Crescimento': '📈 Growth',
    '🌡️ População': '🌡️ Population',
    'crescendo': 'growing',
    'encolhendo': 'shrinking',
    'vs. seu tamanho em 2001': 'vs. its size in 2001',
    'Crescimento desde 2001': 'Growth since 2001',
    'metade': 'half',
    'estável': 'stable',
    'dobro+': 'double+',
    'estimativas IBGE · tab. 6579': 'IBGE estimates · table 6579',

    /* ---------- Brasil que Envelhece ---------- */
    'Brasil que Envelhece': 'Brazil Growing Older',
    'Idade mediana por município — Censo 2022 (IBGE).':
      'Median age by municipality — 2022 Census (IBGE).',
    'idade mediana': 'median age',
    'idade mediana típica': 'typical median age',
    '🎨 Idade na cor': '🎨 Age as colour',
    '⛰️ Relevo etário': '⛰️ Age as relief',
    'Idade mediana (anos)': 'Median age (years)',
    '18 · jovem': '18 · young',
    '50+ · idoso': '50+ · older',
    '36 anos': '36 years',
    '38 anos': '38 years',

    /* ---------- Brasil que Planta (soja) ---------- */
    'Brasil que Planta': 'Brazil that Sows',
    'Produção de': 'Production of',
    'soja': 'soybeans',
    'por município — PAM/IBGE 2023.': 'by municipality — PAM/IBGE 2023.',
    'Altura e cor = toneladas colhidas. Só municípios que plantam soja aparecem.':
      'Height and colour = tonnes harvested. Only soybean-growing municipalities appear.',
    'soja colhida no Brasil (2023)': 'soybeans harvested in Brazil (2023)',
    'lidera: 44 Mt': 'leads: 44 Mt',
    'Produção de soja (t, escala log)': 'Soybean production (t, log scale)',

    /* ---------- A Onda da Soja ---------- */
    'A Onda da Soja': 'The Soy Wave',
    'Produção de soja por município, 1974 → 2024 (PAM/IBGE).':
      'Soybean production by municipality, 1974 → 2024 (PAM/IBGE).',
    'Veja a fronteira agrícola nascer no Sul e varrer o Cerrado e o MATOPIBA.':
      'Watch the agricultural frontier emerge in the South and sweep across the Cerrado and MATOPIBA.',
    'soja no país (ano)': 'soybeans nationwide (year)',
    'municípios produzindo': 'municipalities producing',
    'Produção (t, escala log)': 'Production (t, log scale)',
    'PAM · tabela 5457': 'PAM · table 5457',

    /* ---------- números com formatação brasileira ---------- */
    '213,4 mi': '213.4M',
    '9,0 tri': '9.0tn',
    'R$ 9,0 tri': 'R$ 9.0tn',
    '2,24 Mt': '2.24 Mt',
    '2,2 mi': '2.2M',
    '2,5 mi': '2.5M',
    '1.891': '1,891',
    '2.603 municípios · top 100 = 46%': '2,603 municipalities · top 100 = 46%',
    'municípios (34%)': 'municipalities (34%)',
    'R$ 1.182': 'R$ 1,182',
    'R$ 4.300': 'R$ 4,300',
    'R$ 1.180': 'R$ 1,180',
    'R$ 4.000+': 'R$ 4,000+',

    /* ---------- palavras soltas usadas em tooltips ---------- */
    'municípios': 'municipalities',
    'município': 'municipality',
    'Município': 'Municipality',
    'População': 'Population',
    'Renda': 'Income',
    'Idade': 'Age',
    'Produção': 'Production',
    'Total': 'Total',
    'Média': 'Average',
    'ano': 'year',
    'anos': 'years',
    'mil': 'k',
    'milhões': 'million'
  };

  /* ---------------------------------------------------------------- estado */
  var KEY = 'op-lang';
  function desired() {
    var p = new URLSearchParams(location.search).get('lang');
    if (p === 'en' || p === 'pt') { try { localStorage.setItem(KEY, p); } catch (e) {} return p; }
    try { return localStorage.getItem(KEY) || 'pt'; } catch (e) { return 'pt'; }
  }
  var lang = desired();

  /* ------------------------------------------------------------ tradução */
  /* Regras para textos montados na hora (com numeros no meio). So entram
     quando o texto NAO bate exatamente com o dicionario. Os numeros ficam. */
  var RULES = [
    [/^(.+) municípios . total (.+)$/, '$1 municipalities - total $2'],
    [/^(.+) municípios . top (.+)$/, '$1 municipalities - top $2'],
    [/^(.+) municípios$/, '$1 municipalities'],
    [/^(.+) habitantes$/, '$1 inhabitants'],
    [/^(.+) fluxos . (.+)$/, '$1 flows - $2'],
    [/^mostrando (.+)$/, 'showing $1'],
    [/^(.+) anos$/, '$1 years'],
    [/^Maior: (.+)$/, 'Largest: $1'],
    [/^([A-Z]{2} [+−-][\d.,]+) mil$/, '$1k'],
    [/^(.+) mil$/, '$1k'],
    [/^(.+) milh(?:ao|ões|ão)$/, '$1M'],

    [/^Jogador (\d+) \((.+)\) . (.+) min . (.+) km . vel\. máx (.+) km\/h . ataque sempre da esquerda para a direita$/, 'Player $1 ($2) — $3 min · $4 km · max speed $5 km/h · attacking left to right'],
    [/^posse (\d+)% . (\d+) chutes \((\d+) no alvo\) . formação (.+)$/, 'possession $1% · $2 shots ($3 on target) · formation $4'],
    [/^(.+) capítulos$/, '$1 chapters'],
    [/^(.+) \(Total\)$/, '$1 (total)'],
    [/^Líder em Produção: (.+)$/, 'Production leader: $1'],
    [/^Líder em (.+): (.+)$/, '$1 leader: $2'],
    [/^(.+) - (.+) - Global$/, '$1 — $2 — Global'],
    [/^› (.+)$/, '› $1'],
    [/^(.+) \(mil R\$, escala log\)$/, '$1 (R$ thousand, log scale)'],
    [/^(.+) \(t, escala log\)$/, '$1 (t, log scale)'],
    [/^(.+) \(escala log\)$/, '$1 (log scale)'],
    [/mil R\$/, 'R$ thousand']
  ];

  // indice normalizado: colapsa quebras de linha e espacos multiplos,
  // porque muitos trechos sao um unico no de texto com quebras dentro
  var NORM = {};
  (function () {
    for (var k in DICT) {
      if (Object.prototype.hasOwnProperty.call(DICT, k))
        NORM[k.replace(/\s+/g, ' ').trim()] = DICT[k];
    }
  })();

  var SEP = /^([\s·•–—›|:←‹]*)([\s\S]*?)([\s·•–—›|]*)$/;

  function busca(k) {
    if (Object.prototype.hasOwnProperty.call(DICT, k)) return DICT[k];
    for (var i = 0; i < RULES.length; i++) {
      var re = RULES[i][0];
      re.lastIndex = 0;
      if (re.test(k)) {
        re.lastIndex = 0;
        var out = k.replace(re, function () {
          var tpl = RULES[i][1], args = arguments;
          return tpl.replace(/\$(\d)/g, function (_, d) {
            var g = args[+d] || '';
            return Object.prototype.hasOwnProperty.call(DICT, g) ? DICT[g] : g;
          });
        });
        if (out !== k) return out;
      }
    }
    return null;
  }

  function tr(s) {
    var k = s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
    var direto = busca(k);
    if (direto !== null) return direto;
    // tenta de novo ignorando separadores nas pontas ("· Projeto" -> "Projeto")
    var m = k.match(SEP);
    if (m && m[2] && m[2] !== k) {
      var meio = busca(m[2].trim());
      if (meio !== null) return m[1] + meio + m[3];
    }
    return null;
  }

  function walk(root) {
    var it = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || p.dataset && p.dataset.noI18n)
          return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n, changed = 0;
    while ((n = it.nextNode())) {
      var t = tr(n.nodeValue);
      if (t !== null && t !== n.nodeValue.replace(/\s+/g, ' ').trim()) {
        // preserva o espaçamento original em volta do texto
        var m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
        n.nodeValue = m[1] + t + m[3];
        changed++;
      }
    }
    // atributos visíveis
    root.querySelectorAll && root.querySelectorAll('[title]').forEach(function (el) {
      var t = tr(el.getAttribute('title'));
      if (t) el.setAttribute('title', t);
    });
    return changed;
  }

  /* ------------------------------------------------------- links p/ o site */
  function fixLinks() {
    // no modo EN, a trilha aponta para as páginas em inglês
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (!h || h.indexOf('http') === 0) return;
      if (/(^|\/)laboratorio\/$/.test(h)) a.setAttribute('href', h.replace(/laboratorio\/$/, '') + '../en/laboratorio/');
      else if (/(^|\/)index\.html$/.test(h) && /\.\.\//.test(h)) a.setAttribute('href', h.replace(/index\.html$/, 'en/index.html'));
    });
  }

  /* -------------------------------------------------------------- seletor */
  function toggle() {
    if (document.getElementById('op-lang-sw')) return;
    var css = document.createElement('style');
    css.textContent =
      '#op-lang-sw{position:fixed;z-index:99999;bottom:14px;left:14px;display:inline-flex;gap:1px;' +
      'font:600 11px/1 ui-monospace,Consolas,monospace;background:rgba(10,13,20,.82);' +
      'border:1px solid rgba(255,255,255,.22);border-radius:99px;padding:3px;backdrop-filter:blur(6px)}' +
      '#op-lang-sw a{padding:5px 10px;border-radius:99px;color:#b9c3d6;text-decoration:none}' +
      '#op-lang-sw a.on{background:#eef2f7;color:#0b0e13}';
    document.head.appendChild(css);
    var d = document.createElement('div');
    d.id = 'op-lang-sw';
    d.innerHTML =
      '<a href="?lang=pt" class="' + (lang === 'pt' ? 'on' : '') + '">PT</a>' +
      '<a href="?lang=en" class="' + (lang === 'en' ? 'on' : '') + '">EN</a>';
    document.body.appendChild(d);
  }

  /* ------------------------------------------------------------- execução */
  /* título da aba: traduz o que estiver antes do separador e mantém a marca */
  var TITLES = {
    "Brasil de Lupa — Atlas 3D com dados do IBGE": "Brazil Under the Lens — 3D atlas with IBGE data",
    "Brasil em Picos | População IBGE 2025 — Brasil de Lupa": "Brazil in Peaks | Population IBGE 2025 — Brazil Under the Lens",
    "Brasil Desigual — Renda per capita | Censo 2022 IBGE": "Unequal Brazil — Income per capita | 2022 Census IBGE",
    "A Economia do Brasil — PIB por setor | IBGE — Brasil de Lupa": "Brazil's Economy — GDP by sector | IBGE — Brazil Under the Lens",
    "Brasil em Movimento — Migração entre estados | Censo 2022 IBGE": "Brazil on the Move — Interstate migration | 2022 Census IBGE",
    "Culturas do Brasil — Explorer da produção | PAM+PPM/IBGE — Brasil de Lupa": "Crops of Brazil — Production explorer | PAM+PPM/IBGE — Brazil Under the Lens",
    "Brasil no Tempo — Crescimento populacional 2001–2025 | IBGE": "Brazil Over Time — Population growth 2001–2025 | IBGE",
    "Brasil que Envelhece — Idade mediana | Censo 2022 IBGE": "Brazil Growing Older — Median age | 2022 Census IBGE",
    "Brasil que Planta — A soja no mapa | PAM/IBGE 2023": "Brazil that Sows — Soy on the map | PAM/IBGE 2023",
    "A Onda da Soja — Produção 1974–2024 | PAM/IBGE — Brasil de Lupa": "The Soy Wave — Production 1974–2024 | PAM/IBGE — Brazil Under the Lens",
    "O que o Brasil Planta — Mosaico da cultura dominante | PAM/IBGE — Brasil de Lupa": "What Brazil Grows — Mosaic of the dominant crop | PAM/IBGE — Brazil Under the Lens",
    'Brasil em Picos': 'Brazil in Peaks',
    'Brasil Desigual': 'Unequal Brazil',
    'A Economia do Brasil': "Brazil's Economy",
    'Brasil em Movimento': 'Brazil on the Move',
    'Culturas do Brasil': 'Crops of Brazil',
    'Brasil no Tempo': 'Brazil Over Time',
    'Brasil que Envelhece': 'Brazil Growing Older',
    'Brasil que Planta': 'Brazil that Sows',
    'A Onda da Soja': 'The Soy Wave',
    'Brasil Mosaico': 'Mosaic Brazil',
    'Brasil de Lupa': 'Brazil Under the Lens',
    'Estatísticas Globais de Trigo - USDA': 'Global Wheat Statistics — USDA',
    'Histórico Eleitoral Brasileiro - Dashboard TSE': 'Brazilian Electoral History — TSE Dashboard',
    'Painel Histórico Conab — Área, Produção e Produtividade': 'Conab Historical Panel — Area, Production and Yield'
  };
  function fixTitle() {
    var t = document.title;
    if (Object.prototype.hasOwnProperty.call(TITLES, t)) { document.title = TITLES[t]; return; }
    // tenta a chave mais especifica (mais longa) primeiro, e para na primeira que casar
    var ks = Object.keys(TITLES).sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < ks.length; i++) {
      if (t.indexOf(ks[i]) === 0) { document.title = TITLES[ks[i]] + t.slice(ks[i].length); return; }
    }
    document.title = t.replace('Brasil de Lupa', 'Brazil Under the Lens');
  }

  function apply() {
    if (lang !== 'en') return;
    document.documentElement.lang = 'en';
    fixTitle();
    walk(document.body);
    fixLinks();
  }

  function start() {
    toggle();
    apply();
    if (lang !== 'en') return;
    // conteúdo desenhado depois (gráficos, tooltips): reaplica com debounce
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(function () { walk(document.body); }, 120);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    [400, 1200, 3000, 6000].forEach(function (ms) { setTimeout(function () { walk(document.body); }, ms); });
    // mapas animados reconstroem os paineis: reaplica periodicamente
    var passes = 0;
    var iv = setInterval(function () {
      walk(document.body);
      if (++passes > 90) clearInterval(iv);   // ~72s e para
    }, 800);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

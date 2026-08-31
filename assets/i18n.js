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
    "Chutes (Mandante × Visitante)": "Shots (Home × Away)",
    "Posse (Mandante × Visitante)": "Possession (Home × Away)",
    "‹ Laboratório": "‹ Lab",
    "capítulos": "chapters",
    /* ---------- navegação / trilha ---------- */
    'Laboratório': 'Lab',
    'Brasil de Lupa': 'Brazil Under the Lens',
    "Futebol · Análises & Data Portraits — Otávio Pelego": "Football · Analysis & Data Portraits — Otávio Pelego",
    "A Copa em Números — 1930–2018": "The World Cup in Numbers — 1930–2018",
    "Copa 2026 em Números — dados reais": "The 2026 World Cup in Numbers — real data",
    "Laboratório da Partida — Metrica Sports": "Match Lab — Metrica Sports",
    "Onda da Partida — retrato imersivo": "Wave of the Match — an immersive portrait",
    "Como ler — Onda da Partida": "How to read — Wave of the Match",
    'Futebol': 'Football',
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
    "Ano": "Year",
    "Anos": "Years",
    "Fonte": "Source",
    "Dados": "Data",
    "Dados:": "Data:",
    "Ver": "View",
    "Clique": "Click",
    "Selecione": "Select",
    "Voltar": "Back",
    "Ocultar": "Hide",
    "total": "total",
    "mín.": "min.",
    "máx.": "max.",
    "jogo": "match",
    "partida": "match",
    "time": "team",
    "times": "teams",
    "gol": "goal",
    "gols": "goals",
    "seleção": "national team",
    "primeiro": "first",
    "último": "last",
    "média": "average",
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
    "Dados © IBGE · uso educativo e exploratório.": "Data © IBGE · educational and exploratory use.",
    "← Laboratório": "← Lab",
    "← voltar para o Laboratório": "← back to the Lab",
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    "Trilha de navegação": "Breadcrumb",
    "Otávio Pelego · Otávio de Oliveira Corrêa": "Otávio Pelego · Otávio de Oliveira Corrêa",
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

    /* ---------- lote 2: embrapa, dashboards, hub futebol ---------- */
    "Convocações da Embrapa": "Embrapa call-ups",
    "Convocações da Embrapa — concurso 2024/25": "Embrapa call-ups — 2024/25 civil service exam",
    "Concurso público Embrapa · Edital nº 1/2024": "Embrapa public examination · Notice no. 1/2024",
    "Convocados por cargo": "Call-ups by role",
    "Convocados no total": "Total called up",
    "Convocações por situação": "Call-ups by status",
    "Em que pé está": "Status",
    "Em que pé está cada convocação": "Where each call-up stands",
    "Do total filtrado, quanto já virou contratação, quanto ainda está em trâmite e quanto saiu do processo.": "Of the filtered total, how many became hires, how many are still in progress and how many left the process.",
    "Clique num cargo para filtrar o painel inteiro. O número grande é o total de convocações; abaixo, quantas já viraram contratação.": "Click a role to filter the whole dashboard. The large number is the total of call-ups; below it, how many became hires.",
    "Os gráficos abaixo são clicáveis: toque numa barra para filtrar o painel por ela, e toque de novo para desfazer.": "The charts below are clickable: tap a bar to filter the dashboard by it, and tap again to undo.",
    "Unidades que mais chamaram": "Units that called up the most",
    "Unidade da Embrapa": "Embrapa unit",
    "Unidade da Embrapa para a qual a pessoa foi convocada. Quem ainda não escolheu localidade não aparece aqui.": "The Embrapa unit the person was called to. Those who have not yet chosen a location do not appear here.",
    "Áreas mais chamadas": "Most-called areas",
    "Área do edital, somando todas as subáreas dentro dela.": "Area of the exam notice, summing all sub-areas within it.",
    "Convocados por opção, comparado às vagas do edital": "Call-ups by option, compared with the posts in the notice",
    "o risco marca o total de vagas previsto no Anexo II do edital": "the line marks the total posts set out in Annex II of the notice",
    "Lista de convocados": "List of those called up",
    "Área / subárea": "Area / sub-area",
    "Buscar por nome": "Search by name",
    "digite parte do nome…": "type part of the name…",
    "Baixar CSV do que está na tela": "Download CSV of what is on screen",
    "Atualizado por mim": "Updated by me",
    "Fonte atualizada em": "Source updated on",
    "ver painel oficial ↗": "view the official dashboard ↗",
    "Por que aqui tem cargo e no painel oficial não.": "Why roles appear here and not on the official dashboard.",
    "O painel da Embrapa publica apenas o": "The Embrapa dashboard publishes only the",
    "Duas coisas que podem estranhar à primeira vista.": "Two things that may look odd at first.",
    "Parte das pessoas aparece sem unidade e sem cidade.": "Some people appear with no unit and no city.",
    "Algumas opções já chamaram mais gente do que o número de vagas.": "Some options have already called up more people than the number of posts.",
    "Contratados": "Hired",
    "Em trâmite": "In progress",
    "Desistiu": "Withdrew",
    "Convocados": "Called up",
    "Cargo": "Role",
    "Cargos": "Roles",
    "Situação": "Status",
    "Vagas": "Posts",
    "vagas": "posts",
    "Opção": "Option",
    "Nome": "Name",
    "Cidade": "City",
    "Unidade": "Unit",
    "Todos": "All",
    "Todas": "All",
    "Adicionar país para comparar...": "Add a country to compare…",
    "Perfil do País Selecionado": "Selected country profile",
    "Desenvolvido com dados públicos oficiais do Tribunal Superior Eleitoral (TSE).": "Built from official public data of the Superior Electoral Court (TSE).",
    "› Histórico eleitoral (TSE)": "› Electoral history (TSE)",
    "› Safras (Conab)": "› Harvests (Conab)",
    "› Agro global (USDA)": "› Global agriculture (USDA)",
    "› Futebol": "› Football",
    "› Como Ler": "› How to Read",
    "Paraná (PR)": "Paraná (PR)",
    "21 Copas · 1930–2018": "21 World Cups · 1930–2018",
    "900 partidas": "900 matches",
    "11 capítulos": "11 chapters",
    "HTML único · pipeline Python → JSON → WebGL": "single HTML file · Python → JSON → WebGL pipeline",
    "client-side": "client-side",

    /* ---------- lote 3: embrapa (filtros, KPIs, textos) ---------- */
    "Acompanhamento das convocações do concurso 2024/25. Os dados vêm do painel oficial da Embrapa; cargo, área e subárea de cada opção vêm do edital de abertura. Procure pelo seu nome, ou filtre por qualquer combinação.": "Tracking the call-ups from the 2024/25 civil service exam. The data comes from Embrapa’s official dashboard; the role, area and sub-area of each option come from the opening notice. Search for your name, or filter by any combination.",
    "PESQUISADOR": "RESEARCHER",
    "ANALISTA": "ANALYST",
    "TÉCNICO": "TECHNICIAN",
    "ASSISTENTE": "ASSISTANT",
    "Pesquisador": "Researcher",
    "Analista": "Analyst",
    "Técnico": "Technician",
    "Assistente": "Assistant",
    "Limpar filtros": "Clear filters",
    "Todos os cargos": "All roles",
    "Todas as áreas": "All areas",
    "Todas as subáreas": "All sub-areas",
    "Qualquer situação": "Any status",
    "Todas as situações": "All statuses",
    "Todas as unidades": "All units",
    "Todas as cidades": "All cities",
    "Todas as opções": "All options",
    "CONCORRÊNCIA": "COMPETITION",
    "Concorrência": "Competition",
    "ROLE": "ROLE",
    "ÁREA": "AREA",
    "SUBÁREA": "SUB-AREA",
    "Área": "Area",
    "Subárea": "Sub-area",
    "e": "and",
    "já contratados": "already hired",
    "contratados": "hired",
    "do total": "of the total",
    "Mostrando todas as": "Showing all",
    "convocações.": "call-ups.",
    "convocações": "call-ups",
    "Ampla concorrência": "Open competition",
    "Pessoa com deficiência": "Person with a disability",
    "Negros": "Black candidates",
    "UPDATED BY ME": "UPDATED BY ME",

    /* ---------- lote 4: futebol completo ---------- */
    "Coreia do Sul": "South Korea",
    "Coreia do Norte": "North Korea",
    "África do Sul": "South Africa",
    "Costa do Marfim": "Ivory Coast",
    "Côte d’Ivoire": "Ivory Coast",
    "País de Gales": "Wales",
    "Irlanda do Norte": "Northern Ireland",
    "Argentina": "Argentina",
    "Portugal": "Portugal",
    "Estados Unidos": "United States",
    "Suíça 1954": "Switzerland 1954",
    "Itália 1990": "Italy 1990",
    "América do Sul (CONMEBOL)": "South America (CONMEBOL)",
    "Am. do Norte e Central (CONCACAF)": "North & Central America (CONCACAF)",
    "África (CAF)": "Africa (CAF)",
    "Ásia (AFC)": "Asia (AFC)",
    "Europa (UEFA)": "Europe (UEFA)",
    "Oceania (OFC)": "Oceania (OFC)",
    "gols por jogo": "goals per match",
    "Gols/jogo": "Goals/match",
    "gols em": "goals in",
    "gols/90": "goals/90",
    "no alvo": "on target",
    "% no alvo": "% on target",
    "nos pênaltis": "on penalties",
    "árbitro": "referee",
    "posse média": "average possession",
    "posse média (%)": "average possession (%)",
    "posse de bola média →": "average possession →",
    "chutes por 90 min →": "shots per 90 min →",
    "gols por 90": "goals per 90",
    "gols sofridos por 90": "goals conceded per 90",
    "chutes por 90": "shots per 90",
    "chutes cedidos por 90": "shots conceded per 90",
    "% chutes no alvo": "% shots on target",
    "gols por chute": "goals per shot",
    "gols sofridos": "goals conceded",
    "% vitórias": "% wins",
    "jogos posse": "matches possession",
    "Fase de grupos": "Group stage",
    "Todas as fases": "All stages",
    "Copa de": "World Cup of",
    "Copas do Mundo": "World Cups",
    "jogadores convocados": "players called up",
    "partidas campeão": "matches as champion",
    "maior público": "largest attendance",
    "público médio": "average attendance",
    "torcedores nos estádios": "fans in the stadiums",
    "seleções (recorde)": "national teams (a record)",
    "pên.)": "pens)",
    "de pênaltis": "on penalties",
    "para fora": "off target",
    "na trave": "off the woodwork",
    "defesa na trave": "saved onto the woodwork",
    "para fora / bloqueado": "off target / blocked",
    "de xG": "of xG",
    "de xG contra": "of xG against",
    "gols de xG": "goals of xG",
    "vs esperado": "vs expected",
    "gols · xG": "goals · xG",
    "gols (xG": "goals (xG",
    "pé direito": "right foot",
    "pé esquerdo": "left foot",
    "jogos 🟨": "matches 🟨",
    "% do total": "% of the total",
    "% dos jogos": "% of matches",
    "% de todos os jogos": "% of all matches",
    "jogos · média": "matches · average",
    "e o tamanho mostra os gols marcados.": "and the size shows goals scored.",
    "Passe o mouse nas bolhas": "Hover over the bubbles",
    "O lado feio do jogo": "The ugly side of the game",
    "🟨 amarelos · 🟥 vermelhos (peso 3 no ranking)": "🟨 yellows · 🟥 reds (weighted 3× in the ranking)",
    "Os jogos mais quentes": "The most heated matches",
    "Por cartões (vermelho vale 3)": "By cards (a red counts 3)",
    "Árbitros mais cartoleiros": "The most card-happy referees",
    "Cartões amarelos por jogo apitado": "Yellow cards per match officiated",
    "Os palcos da Copa": "The stages of the World Cup",
    "Público acumulado por estádio · passe o mouse": "Cumulative attendance by stadium · hover for details",
    "força do calendário": "strength of schedule",
    "Como a nota é calculada (metodologia)": "How the score is calculated (methodology)",
    "Cada métrica é padronizada entre as 48 seleções (z-score) e entra com um peso": "Each metric is standardised across the 48 teams (z-score) and enters with a weight",
    "gols/90 (50%), gols por chute (20%), chutes/90 (15%), % no alvo (15%)": "goals/90 (50%), goals per shot (20%), shots/90 (15%), % on target (15%)",
    "gols sofridos/90 (70%), chutes cedidos/90 (30%), invertidos": "goals conceded/90 (70%), shots conceded/90 (30%), inverted",
    "jogos disputados (quanto mais longe na Copa, maior)": "matches played (the further into the tournament, the higher)",
    "Calendário (14%)": "Schedule (14%)",
    "(amarelos + 3×vermelhos)/jogo, invertido": "(yellows + 3×reds)/match, inverted",
    "Idade (3%)": "Age (3%)",
    "proximidade do pico de maturidade (~27 anos)": "closeness to peak maturity (~27 years)",
    "A soma ponderada é re-escalonada de": "The weighted sum is rescaled from",
    "Retrato do torneio até": "A portrait of the tournament up to",
    "⏳ Torneio em andamento — retrato dos dados até": "⏳ Tournament in progress — a snapshot of the data up to",
    "sem dados de tracking/GPS (esses são proprietários da FIFA) · arquivo 100% offline.": "no tracking/GPS data (that is proprietary to FIFA) · 100% offline file.",
    "% dos chutes que enfrentou e soma": "% of the shots faced, and a total of",
    "jogos sem sofrer gol — o alicerce silencioso de uma campanha até aqui quase perfeita.": "clean sheets — the quiet foundation of an almost perfect run so far.",
    "pessoas já passaram pelos estádios — recorde absoluto de público em Copas. O templo da vez": "people have already passed through the stadiums — an all-time World Cup attendance record. The temple of the moment",
    "Capítulo 1": "Chapter 1",
    "Capítulo 2": "Chapter 2",
    "Capítulo 3": "Chapter 3",
    "Capítulo 4": "Chapter 4",
    "Capítulo 5": "Chapter 5",
    "Capítulo 6": "Chapter 6",
    "Capítulo 7": "Chapter 7",
    "Capítulo 8": "Chapter 8",
    "Capítulo 9": "Chapter 9",
    "Capítulo 10": "Chapter 10",
    "Capítulo 11": "Chapter 11",
    "5,38 gols": "5.38 goals",
    "e nunca mais voltou a passar de 3.": "and it has never gone above 3 again.",
    "e um em cada cinco jogos termina com um time sem marcar e o outro com um gol só. Quanto mais claro o quadrado, mais comum o placar.": "and one in every five matches ends with one team scoreless and the other on a single goal. The lighter the square, the more common the scoreline.",
    "Confrontos que a Copa insiste em repetir. O mais frequente": "Fixtures the World Cup keeps repeating. The most frequent",
    "Brasil × Suécia": "Brazil × Sweden",
    "A loteria dos pênaltis": "The penalty lottery",
    "A disputa de pênaltis só estreou na Copa de": "The penalty shootout only arrived at the World Cup in",
    "Disputas de pênaltis por Copa": "Penalty shootouts per World Cup",
    "O clube das cinco Copas": "The five World Cups club",
    "7.907 jogadores": "7,907 players",
    "Quantas Copas um convocado disputa?": "How many World Cups does a called-up player get?",
    "Os mais jovens em uma Copa": "The youngest at a World Cup",
    "Idade na abertura do torneio de estreia": "Age at the opening of their first tournament",
    "Os mais veteranos": "The oldest",
    "Idade na abertura da última Copa disputada": "Age at the opening of their last World Cup",
    "O segredo de janeiro": "The January secret",
    "começo do ano": "the start of the year",
    "são os maiores da turma — e são mais escolhidos. Resultado": "are the biggest in their class — and get picked more often. The result",
    ". É o famoso": ". It is the well-known",
    "efeito da idade relativa": "relative age effect",
    "Jogadores de Copa por mês de nascimento": "World Cup players by month of birth",
    "Quem nasceu no seu dia?": "Who was born on your day?",
    "Entre 7.829 datas de nascimento conhecidas, praticamente todo dia do calendário tem um jogador de Copa. Escolha o seu.": "Among 7,829 known birth dates, virtually every day of the calendar has a World Cup player. Pick yours.",
    "Selecione um dia e um mês…": "Select a day and a month…",
    "A galeria dos premiados": "The gallery of award winners",
    "Bola de Ouro, Chuteira de Ouro, Luva de Ouro e Melhor Jovem — todos os premiados da história. Só": "Golden Ball, Golden Boot, Golden Glove and Best Young Player — every winner in history. Only",
    "jogadores foram premiados mais de uma vez;": "players have won more than once;",
    "lideram, com 4 prêmios cada.": "lead, with 4 awards each.",
    "Premiados mais de uma vez": "Winners of more than one award",
    "A Copa engoliu o mundo": "The World Cup swallowed the world",
    "Construído a partir da": "Built from the",
    "(Joshua C. Fjelstul) · 21 Copas · 900 partidas · 7.907 jogadores": "(Joshua C. Fjelstul) · 21 World Cups · 900 matches · 7,907 players",
    "Bola de Ouro": "Golden Ball",
    "Bola de Prata": "Silver Ball",
    "Bola de Bronze": "Bronze Ball",
    "Chuteira de Ouro": "Golden Boot",
    "Chuteira de Prata": "Silver Boot",
    "Chuteira de Bronze": "Bronze Boot",
    "Luva de Ouro": "Golden Glove",
    "Melhor Jovem": "Best Young Player",
    "(sem Copas 1942/46)": "(no World Cups in 1942/46)",
    "gols do vencedor (ou de ambos, no empate) →": "the winner's goals (or both, if drawn) →",
    "vezes nessa lista — o lendário time de Puskás dos anos 50 segue sendo a máquina ofensiva mais impiedosa da história.": "times on this list — Puskás's legendary 1950s side is still the most ruthless attacking machine in history.",
    "jogos com prorrogação": "matches going to extra time",
    "nenhuma disputa de pênaltis": "no penalty shootout",
    "Disputas de pênaltis": "Penalty shootouts",
    "Jogos com prorrogação": "Matches with extra time",
    "jogadores disputaram exatamente": "players played in exactly",
    "jogadores com data de nascimento conhecida · a linha marca a média mensal (": "players with a known birth date · the line marks the monthly average (",
    "jogadores (": "players (",
    "vs média mensal": "vs monthly average",
    "jogador de Copa nasceu": "World Cup player was born",
    "jogadores de Copa nasceram": "World Cup players were born",
    "Meio-campo ofensivo · tamanho = xG": "Attacking half · size = xG",
    "= gol": "= goal",
    "Dois retratos que só existem com dados 360 e eventos de pressão": "Two portraits that only exist with 360 data and pressing events",
    "onde cada time caça a bola": "where each team hunts the ball",
    "(eventos de pressão) e": "(pressing events) and",
    "onde o bloco defensivo realmente fica": "where the defensive block actually sits",
    "ataque → · onde o time pressiona o adversário": "attacking → · where the team presses the opponent",
    "18 de dezembro de 2022": "18 December 2022",
    "🇧🇷 9 de dezembro de 2022": "🇧🇷 9 December 2022",
    "A Final: Argentina 3×3 França": "The Final: Argentina 3×3 France",
    "defensores visíveis no frame": "defenders visible in the frame",
    "finalizações em 64 jogos": "shots across 64 matches",
    "viraram gol. Cada uma carrega a posição de todos os jogadores visíveis no momento do chute. Clique e veja o que o atacante via.": "became goals. Each one carries the position of every player visible at the moment of the shot. Click and see what the striker saw.",
    "chutes (pênaltis ocultos)": "shots (penalties hidden)",
    "clique para ver o freeze frame": "click to see the freeze frame",
    "clique p/ freeze frame": "click for the freeze frame",
    "terminou artilheiro com": "finished top scorer with",
    "), mas a Copa também premiou matadores silenciosos e puniu perdulários — abaixo, o contraste entre o que cada um fez e o que era esperado.": "), but the tournament also rewarded quiet finishers and punished the wasteful — below, the contrast between what each player did and what was expected.",
    "pressões em": "presses in",
    "(França),": "(France),",
    "gols em 120 minutos e a taça decidida do ponto do pênalti. Abaixo, cada gol com a fotografia exata do momento.": "goals in 120 minutes and the trophy decided from the penalty spot. Below, every goal with the exact photograph of the moment.",
    "da Croácia, finalizou": "of Croatia, shot",
    "vezes — e caiu nos pênaltis. O gol de Neymar na prorrogação está congelado abaixo — a fotografia exata do momento.": "times — and went out on penalties. Neymar’s extra-time goal is frozen below — the exact photograph of the moment.",
    "’ da prorrogação · xG": "’ of extra time · xG",
    "após tabela dentro da área": "after a one-two inside the box",
    "(tamanho = xG) e": "(size = xG) and",
    "Inspirado nos": "Inspired by the",
    "de Alexander Bogachev e no modelo clássico de": "by Alexander Bogachev and the classic model of",
    "fisicamente do tracking": "physically from the tracking",
    "para cada ponto do campo, quem chega primeiro, dado onde cada jogador está e para onde se move.": "for every point on the pitch, who gets there first, given where each player is and where they are moving.",
    "O mesmo lençol, agora com": "The same sheet, now with",
    "perto do gol rival": "near the opponent’s goal",
    ". No gol, um": ". On a goal, a",
    "tsunami fica tremulando em frente às traves": "tsunami ripples in front of the posts",
    "GPS · física": "GPS · physical",
    "O raio-X físico": "The physical x-ray",
    "Quilometragem e zonas de velocidade": "Distance covered and speed zones",
    "Tracking · ocupação": "Tracking · occupation",
    "Mapa de calor por jogador": "Heat map by player",
    "Onde cada jogador realmente pisou durante os 90 minutos (ataque sempre da esquerda para a direita). Clique num jogador.": "Where each player actually stepped during the 90 minutes (attacking always left to right). Click a player.",
    "A forma dos times": "The shape of the teams",
    "Formação média (1º tempo)": "Average formation (first half)",
    "Altura da linha defensiva": "Height of the defensive line",
    "A rede de passes": "The passing network",
    "Chutes e gols esperados": "Shots and expected goals",
    "Mapa de chutes": "Shot map",
    "Pressão e roubo de bola": "Pressing and ball recovery",
    "Eventos · construção": "Events · build-up",
    "Posse e sequências de passes": "Possession and passing sequences",
    "Volume de passes": "Passing volume",
    "As sequências mais longas": "The longest sequences",
    "Passes consecutivos sem perder a bola": "Consecutive passes without losing the ball",
    "Lençol de domínio: modelo simplificado de": "Control sheet: a simplified model of",
    "(inspirado em W. Spearman e nos Football Data Portraits de Alexander Bogachev)": "(inspired by W. Spearman and the Football Data Portraits of Alexander Bogachev)",
    "Arquivo 100% offline — sem bibliotecas externas.": "100% offline file — no external libraries.",
    "Jogo 1 da amostra aberta da Metrica Sports: eventos detalhados + tracking de todos os jogadores. Times anonimizados.": "Match 1 from the Metrica Sports open sample: detailed events + tracking of every player. Teams anonymised.",
    "Jogo 2 da amostra aberta da Metrica Sports: análise por eventos detalhados. Times anonimizados.": "Match 2 from the Metrica Sports open sample: analysis from detailed events. Teams anonymised.",
    "xG (gols esperados)": "xG (expected goals)",
    "posse (aprox. por passes)": "possession (approx. by passes)",
    "PPDA (menor = + pressão)": "PPDA (lower = more pressing)",
    "distância percorrida": "distance covered",
    "Na média da partida, o Mandante foi dono de": "On average across the match, the Home side owned",
    "% do território e o Visitante de": "% of the territory and the Away side",
    "% — territórios calculados em": "% — territories computed over",
    "instantes amostrados a cada 20 s de jogo.": "moments sampled every 20 s of play.",
    "m percorridos pelo time": "m covered by the team",
    "ataque sempre da esquerda para a direita": "attacking always left to right",
    ", mas o xG diz o quanto cada time mereceu": ", but the xG says how much each side deserved",
    "▲ domínio do Mandante": "▲ Home control",
    "▼ domínio do Visitante": "▼ Away control",
    "pressionou mais alto": "pressed higher up",
    "uma posse aproximada de": "an approximate possession of",
    "% . E a paciência aparece nas sequências: a mais longa do jogo teve": "%. And the patience shows in the sequences: the longest of the match had",
    ", uma empresa líder em tecnologia de análise de desempenho esportivo. A captura registra as coordenadas de todos os 22 jogadores e da bola a uma taxa de": ", a leading company in sports performance analysis technology. The capture records the coordinates of all 22 players and the ball at a rate of",
    "1. Controle de Campo (Pitch Control) – Cor da Malha": "1. Pitch Control – Colour of the Mesh",
    "representa controle absoluto do": "represents absolute control by the",
    "representa a zona de": "represents the zone of",
    "2. Altura da Malha (Multiplicador de Perigo)": "2. Height of the Mesh (Danger Multiplier)",
    "(a proximidade do local em relação ao gol adversário). Pontos de controle próximos ao gol de ataque geram paredões altos.": "(how close the spot is to the opponent’s goal). Points of control near the attacking goal raise tall walls.",
    "Ponderação por Perigo Espacial": "Weighting by Spatial Danger",
    "Desconsideração da Altura da Bola (2D)": "Ball Height Ignored (2D)",
    "Ausência de Pressão de Jogo": "No Game Pressure Modelled",
    "Custo de Processamento Gráfico": "Graphics Processing Cost",
    "Leitura Holística Rápida": "Fast Holistic Reading",
    "Interatividade Espacial 3D": "3D Spatial Interactivity",
    "Síntese Temporal Integrada": "Integrated Temporal Synthesis",
    "Modelo Físico Simplificado": "Simplified Physical Model",
    "Eletrocardiograma (ECG) Inferior": "Lower Electrocardiogram (ECG)",

    /* ---------- lote 5 ---------- */
    "Final": "Final",
    "FINAL": "FINAL",

    /* ---------- lote 6: fontes de dados de futebol ---------- */
    "Fontes de Dados de Futebol — Comparativo": "Football Data Sources — a comparison",
    "Fontes de dados de futebol — o que cada uma entrega": "Football data sources — what each one delivers",
    "Phosphorus · Análises de Futebol": "Phosphorus · Football Analysis",
    "buscar fonte…": "search for a source…",
    "Catálogo comparando ~30 fontes por": "A catalogue comparing ~30 sources by",
    "granularidade do dado": "data granularity",
    "(de GPS/tracking a metadados de mercado) e": "(from GPS/tracking to market metadata) and",
    "importância da cobertura": "importance of coverage",
    "(Copa 2026, Copas anteriores, Brasileirão e as grandes ligas europeias). Cada card mostra o que tem, o que não tem, pontos fortes/fracos e uma amostra real da estrutura de dados.": "(the 2026 World Cup, previous World Cups, the Brazilian league and the big European leagues). Each card shows what it has, what it lacks, its strengths and weaknesses, and a real sample of the data structure.",
    "tem, pontos fortes/fracos e uma amostra real da estrutura de dados.": "has, its strengths and weaknesses, and a real sample of the data structure.",
    "Ordenado por padrão: granularidade × cobertura × acessibilidade · Atualizado 15 jul 2026": "Sorted by default: granularity × coverage × accessibility · Updated 15 July 2026",
    "Como ler a granularidade": "How to read the granularity",
    "🛰️ Tracking / GPS — posição contínua (x,y) de todos os jogadores + bola": "🛰️ Tracking / GPS — continuous (x,y) position of every player + the ball",
    "🎯 Evento + 360 — cada ação com coordenada e contexto posicional": "🎯 Event + 360 — every action with coordinates and positional context",
    "⚽ Evento — ações (passe, chute, falta) com coordenada": "⚽ Event — actions (pass, shot, foul) with coordinates",
    "📍 Chute / xG — nível de finalização (xG, coords do chute)": "📍 Shot / xG — shot level (xG, shot coordinates)",
    "📊 Stats de jogo/jogador — agregados por partida": "📊 Match/player stats — aggregated per match",
    "🧾 Resultado / metadados — placar, odds, elenco, valor de mercado": "🧾 Result / metadata — score, odds, squad, market value",
    "cobre Copa 2026": "covers the 2026 World Cup",
    "Matriz de cobertura": "Coverage matrix",
    "Onde cada fonte cobre o que te interessa.": "Where each source covers what matters to you.",
    "não tem.": "does not have it.",
    "Copa 2026": "2026 World Cup",
    "Copas hist.": "past World Cups",
    "Copa 26": "WC 26",
    "Copa hist": "past WCs",
    "Copa 1930–2018": "World Cups 1930–2018",
    "Descartadas ou fora de escopo": "Discarded or out of scope",
    "Não entram na coleta — ou não são fonte de dados, ou são pagas sem retorno prático agora, ou são inspiração de estilo.": "Not part of the collection — either they are not data sources, or they are paid with no practical return right now, or they are style inspiration.",
    "Recomendação rápida para o seu objetivo (data portraits Copa 2026 + dados granulares)": "Quick recommendation for your goal (2026 World Cup data portraits + granular data)",
    "Não existe fonte": "There is no",
    "única": "single",
    "gratuita com tracking da Copa 2026. A estratégia realista é": "free source with tracking for the 2026 World Cup. The realistic strategy is",
    "(scraping) para stats avançadas e xG dos jogos de 2026 conforme acontecem, com cobertura de Brasileirão e ligas europeias · 2)": "(scraping) for advanced stats and xG of the 2026 matches as they happen, covering the Brazilian league and the European leagues · 2)",
    "para treinar seus visuais com evento/360/tracking reais (mesmo que de outras partidas) · 3)": "to train your visuals on real event/360/tracking data (even from other matches) · 3)",
    "para a camada histórica de Copas · 4)": "for the historical World Cup layer · 4)",
    "(API free) como espinha dorsal estruturada de fixtures/tabelas.": "(free API) as the structured backbone of fixtures and tables.",
    "ver amostra de dado": "see a data sample",
    "Evento + posições (360) grátis — nada chega perto": "Free event + positional (360) data — nothing comes close",
    "Ótimo para treinar visualizações de xT, passes, pressão": "Great for practising xT, passing and pressing visuals",
    "Só partidas selecionadas, não temporadas completas das grandes ligas": "Only selected matches, not full seasons of the big leagues",
    "Sem Copa 2026; Copas de 2018/2022 masc. e femininas sim": "No 2026 World Cup; the 2018/2022 men’s and women’s tournaments, yes",
    "Não é live; sem tracking contínuo": "Not live; no continuous tracking",
    "Tracking contínuo real — base ideal para animações e modelos físicos": "Real continuous tracking — the ideal base for animations and physical models",
    "Formato EPTS/FIFA + eventos alinhados por frame": "EPTS/FIFA format + events aligned frame by frame",
    "Documentação e notebooks oficiais": "Official documentation and notebooks",
    "Apenas 3 partidas": "Only 3 matches",
    "Times e jogadores anonimizados": "Teams and players anonymised",
    "Não é Copa nem liga específica": "Not a World Cup or any specific league",
    "Tracking real e gratuito de jogos reconhecíveis": "Real, free tracking of recognisable matches",
    "Inclui métricas físicas (velocidade, distância)": "Includes physical metrics (speed, distance)",
    "Bom para off-ball / espaço": "Good for off-ball / space analysis",
    "Só 9 partidas": "Only 9 matches",
    "Posição só quando o jogador está no enquadramento da TV": "Position only when the player is in the TV frame",
    "Sem bola contínua em alguns trechos": "No continuous ball tracking in some passages",
    "Eventos das grandes ligas por uma temporada inteira, de graça": "Big-league events for a whole season, free",
    "Cobre a Copa de 2018 a nível de evento": "Covers the 2018 World Cup at event level",
    "Código de rating reutilizável": "Reusable rating code",
    "Sem xG oficial nem 360": "No official xG and no 360",
    "Depende do dataset público Wyscout (não atualiza)": "Depends on the public Wyscout dataset (not updated)",
    "📊 Stats avançadas": "📊 Advanced stats",
    "Cobertura + profundidade de stats imbatível no gratuito": "Unbeatable free combination of coverage and stat depth",
    "Tabelas exportáveis (CSV/HTML) direto da página": "Exportable tables (CSV/HTML) straight from the page",
    "Métricas avançadas (xG, progressive, GCA) para todos os jogos": "Advanced metrics (xG, progressive, GCA) for every match",
    "Sem coordenada XY de evento nem tracking": "No XY event coordinates and no tracking",
    "Scraping com rate-limit (≈1 req / 3s)": "Scraping with a rate limit (≈1 request / 3s)",
    "xG é do StatsPerform (não Opta shot-map público)": "xG comes from StatsPerform (not the public Opta shot map)",
    "xG por chute com coordenadas, de graça": "Per-shot xG with coordinates, free",
    "Ótimo para shot maps e xG plots (seu estilo)": "Great for shot maps and xG plots (your style)",
    "Dados embutidos como JSON na própria página (fácil parse)": "Data embedded as JSON in the page itself (easy to parse)",
    "Só 6 ligas europeias": "Only 6 European leagues",
    "Sem Copa do Mundo e sem Brasileirão": "No World Cup and no Brazilian league",
    "Modelo de xG proprietário e fixo": "Proprietary, fixed xG model",
    "Scraping (API não-oficial)": "Scraping (unofficial API)",
    "Cobertura amplíssima + dados ao vivo": "Very broad coverage + live data",
    "Heatmap e rating por jogador prontos": "Ready-made heat maps and player ratings",
    "JSON acessível por endpoints internos": "JSON accessible through internal endpoints",
    "API não é oficial (contra ToS, muda sem aviso)": "The API is unofficial (against the ToS, changes without notice)",
    "Anti-bot / risco de bloqueio": "Anti-bot / risk of being blocked",
    "xG e rating são de modelo próprio fechado": "xG and ratings come from a closed in-house model",
    "Total shots": "Total shots",
    "Shot map + xG por jogo fáceis de extrair": "Shot map + per-match xG easy to extract",
    "JSON limpo nos endpoints internos": "Clean JSON on the internal endpoints",
    "API não-oficial (ToS, instável)": "Unofficial API (ToS, unstable)",
    "Rate-limit / bloqueio possível": "Rate limiting / possible blocking",
    "Dependente de modelo de xG próprio": "Dependent on an in-house xG model",
    "Cobertura absurda + API estruturada e fácil": "Enormous coverage + a structured, easy API",
    "Todos endpoints no free (só limita volume)": "All endpoints on the free tier (only volume is limited)",
    "Sem coordenada de evento nem tracking": "No event coordinates and no tracking",
    "Copa 2026 só em plano pago": "The 2026 World Cup only on a paid plan",
    "12 competições": "12 competitions",
    "Free já inclui Copa + Brasileirão + top-5 + UCL": "The free tier already includes the World Cup + Brazilian league + top-5 + UCL",
    "Estável, oficial, sem scraping": "Stable, official, no scraping",
    "Ótima espinha dorsal de fixtures/tabelas": "An excellent backbone for fixtures and tables",
    "Sem event-level, sem xG, sem tracking": "No event level, no xG, no tracking",
    "Rate-limit baixo no free (~10 req/min)": "Low rate limit on the free tier (~10 req/min)",
    "Stats de partida limitadas": "Limited match stats",
    "🧾 Match/gols/subs": "🧾 Match/goals/subs",
    "Histórico completo e impecavelmente estruturado": "Complete history, impeccably structured",
    "Ideal para dashboards e retrospectivas de Copa": "Ideal for World Cup dashboards and retrospectives",
    "Licença aberta, fácil de cruzar": "Open licence, easy to join with other data",
    "Sem eventos, chutes ou xG (nível partida/gol)": "No events, shots or xG (match/goal level)",
    "Vai só até 2022": "Only goes up to 2022",
    "Não cobre 2026": "Does not cover 2026",
    "É a fonte por trás de worldcups.ai e dos dashboards da Dottie.": "It is the source behind worldcups.ai and Dottie’s dashboards.",
    "🧾 Match histórico": "🧾 Historical match",
    "IA de consulta (paga)": "Query AI (paid)",
    "CSV grátis de tudo, já limpo": "Free CSV of everything, already cleaned",
    "Inclui Copas femininas até 2023": "Includes the women’s World Cups up to 2023",
    "API de query/download": "Query/download API",
    "Mesmo teto de granularidade do Fjelstul (nível partida)": "Same granularity ceiling as Fjelstul (match level)",
    "IA de perguntas é paga": "The question-answering AI is paid",
    "Uso comercial restrito pela licença": "Commercial use restricted by the licence",
    "Base dos Dados": "Base dos Dados",
    "SQL direto no BigQuery, sem montar pipeline": "SQL straight in BigQuery, no pipeline to build",
    "Forte no contexto brasileiro": "Strong on Brazilian context",
    "Copa só até 2018": "World Cups only up to 2018",
    "Nível partida (sem evento/xG)": "Match level (no events/xG)",
    "Cobertura depende de quem subiu o dataset": "Coverage depends on whoever uploaded the dataset",
    "📊 Stats de jogo": "📊 Match stats",
    "CSV pronto de 2026, sem scraping": "Ready-made 2026 CSV, no scraping",
    "Schema FBref (stats avançadas por jogador/time)": "FBref schema (advanced stats per player/team)",
    "Bom ponto de partida rápido": "A good quick starting point",
    "Depende de o mantenedor atualizar": "Depends on the maintainer keeping it updated",
    "Sem eventos/coords": "No events/coordinates",
    "Confiabilidade menor que a fonte original (FBref)": "Less reliable than the original source (FBref)",
    "Odds históricas": "Historical odds",
    "Stats básicas": "Basic stats",
    "Odds históricas gratuitas, raríssimo de achar": "Free historical odds, very rare to find",
    "Décadas de resultados em CSV simples": "Decades of results in plain CSV",
    "Bom para modelos de previsão/mercado": "Good for prediction/market models",
    "Sem xG, sem eventos, sem tracking": "No xG, no events, no tracking",
    "Foco Europa (Brasileirão limitado)": "Europe-focused (limited Brazilian league)",
    "Stats de jogo bem básicas": "Very basic match stats",
    "FTHG=gols casa FT · HST=chutes no gol casa · B365H=odd vitória casa Bet365.": "FTHG = home goals at full time · HST = home shots on target · B365H = Bet365 home win odds.",
    "Valor de mercado": "Market value",
    "Única boa fonte de valor de mercado e transfers": "The only good source for market value and transfers",
    "Elencos, idades, contratos, lesões — ótimo metadado": "Squads, ages, contracts, injuries — excellent metadata",
    "Cobre Copa 2026 (convocações, valores) e Brasileirão": "Covers the 2026 World Cup (call-ups, valuations) and the Brazilian league",
    "Zero dado de evento, chute ou xG": "Zero event, shot or xG data",
    "Valores são estimativa da comunidade": "Values are community estimates",
    "Scraping (difícil)": "Scraping (difficult)",
    "Dados Opta com bom detalhe de ações": "Opta data with good action-level detail",
    "Ratings e mapas por jogador": "Player ratings and maps",
    "Anti-bot forte — coleta trabalhosa/instável": "Strong anti-bot — collection is laborious and unstable",
    "Sem download oficial": "No official download",
    "📊 Stats de time/jogo": "📊 Team/match stats",
    "Viés apostas": "Betting bias",
    "Boa cobertura de ligas + tendências prontas": "Good league coverage + ready-made trends",
    "xG e stats de time acessíveis": "Accessible xG and team stats",
    "API/CSV disponíveis": "API/CSV available",
    "Export/API são pagos": "Export and API are paid",
    "Granularidade agregada (sem evento/coords)": "Aggregated granularity (no events/coordinates)",
    "Orientado a apostas, não a tracking": "Betting-oriented, not tracking-oriented",
    "Cobertura ampla + interface de stats da Copa": "Broad coverage + a World Cup stats interface",
    "JSON interno acessível": "Accessible internal JSON",
    "Menos profundo (sem shot map/heatmap ricos)": "Less deep (no rich shot maps/heat maps)",
    "API não-oficial": "Unofficial API",
    "Máxima granularidade e cobertura, ao vivo": "Maximum granularity and coverage, live",
    "Base de quase todo mundo": "The base for almost everyone else",
    "Licença enterprise (caro)": "Enterprise licence (expensive)",
    "Sem free tier": "No free tier",
    "Contrato/negociação": "Contract/negotiation",
    "Todas as ligas": "All leagues",
    "Evento + 360 completo, cobertura total": "Full event + 360, complete coverage",
    "Provável cobertura da Copa 2026": "Likely coverage of the 2026 World Cup",
    "Free só o Open Data limitado": "Free tier is only the limited Open Data",
    "Cobertura de ligas amplíssima": "Extremely broad league coverage",
    "Vídeo + eventos integrados": "Integrated video + events",
    "Só pago (e caro)": "Paid only (and expensive)",
    "Add-ons de xG/pressure": "xG/pressure add-ons",
    "Sem free tier útil": "No useful free tier",
    "xG e dados avançados custam à parte": "xG and advanced data cost extra",
    "Pacote Copa 2026": "2026 World Cup package",
    "Pacote 2026 mais completo do mercado comercial": "The most complete 2026 package on the commercial market",
    "Enterprise, sem free": "Enterprise, no free tier",
    "Preço sob consulta": "Price on request",
    "Estaduais + Brasileirão": "State leagues + Brazilian league",
    "Melhor cobertura de futebol brasileiro em API": "The best Brazilian football coverage in an API",
    "Estaduais + Brasileirão + Copa 2026": "State leagues + Brazilian league + 2026 World Cup",
    "Só para clubes": "Clubs only",
    "Dado físico/GPS real do atleta (o sonho)": "Real physical/GPS athlete data (the dream)",
    "Velocidade, aceleração, carga": "Speed, acceleration, load",
    "Não é dado público — hardware para clubes": "Not public data — hardware sold to clubs",
    "Sem qualquer acesso aberto": "No open access at all",
    "É consultoria de BI/marketing brasileira. O dashboard da Copa é só portfólio, não um produto de dados. Não é fonte.": "It is a Brazilian BI/marketing consultancy. The World Cup dashboard is portfolio work, not a data product. Not a source.",
    "PlayeRank site (wyscout.hudl.com)": "PlayeRank site (wyscout.hudl.com)",
    "Movidos para a seção de pagos/enterprise como referência — sem coleta prática agora.": "Moved to the paid/enterprise section for reference — no practical collection right now.",
    "Arquivo oficial de partidas com stats básicas, mas sem download em massa e com acesso instável às edições recentes.": "The official match archive with basic stats, but no bulk download and unstable access to recent editions.",

    /* ---------- lote 7: ultimos ajustes ---------- */
    "pessoas migraram nos 5 anos até 2022": "people migrated in the 5 years to 2022",
    "e um em cada cinco jogos termina com um time sem marcar e o outro com um gol só. Quanto mais claro o quadrado, mais vezes o placar aconteceu.": "and one in every five matches ends with one team scoreless and the other on a single goal. The lighter the square, the more often that scoreline happened.",
    "Entre 7.829 datas de nascimento conhecidas, praticamente todo dia do calendário tem um jogador de Copa. Escolha o seu": "Among 7,829 known birth dates, virtually every day of the calendar has a World Cup player. Pick yours",
    "vezes nessa lista — o lendário time de Puskás dos anos 50 segue sendo a máquina ofensiva mais impiedosa da história da Copa.": "times on this list — Puskás's legendary 1950s side is still the most ruthless attacking machine in World Cup history.",
    "A superfície tridimensional que você vê flutuando sobre o campo de jogo é gerada dinamicamente através de dois componentes matemáticos principais": "The three-dimensional surface you see floating above the pitch is generated dynamically from two main mathematical components",
    "(a proximidade do local em relação ao gol adversário). Pontos de controle próximos ao gol de ataque geram paredões mais altos. Além disso": "(how close the spot is to the opponent's goal). Points of control near the attacking goal raise taller walls. On top of that",
    "viraram gol. Cada uma carrega a posição de todos os jogadores visíveis no momento do chute. Clique e veja o que o atacante viu.": "became goals. Each one carries the position of every player visible at the moment of the shot. Click and see what the striker saw.",
    "), mas a Copa também premiou matadores silenciosos e puniu perdulários — abaixo, o contraste entre o que cada um fez e o que os chutes valiam .": "), but the tournament also rewarded quiet finishers and punished the wasteful — below, the contrast between what each player did and what their shots were worth.",
    "vezes — e caiu nos pênaltis. O gol de Neymar na prorrogação está congelado abaixo — a fotografia exata do momento em que ele bateu Livaković.": "times — and went out on penalties. Neymar's extra-time goal is frozen below — the exact photograph of the moment he beat Livaković.",
    "força média dos adversários enfrentados, pelo ranking FIFA pré-Copa (dez/2025, aproximado): fazer números contra a França vale mais do que contra o Haiti": "average strength of the opponents faced, by the pre-tournament FIFA ranking (Dec 2025, approximate): putting up numbers against France counts for more than against Haiti",
    "(Copa 2026, Copas anteriores, Brasileirão e as grandes ligas europeias). Cada card mostra o que tem, o que": "(the 2026 World Cup, previous World Cups, the Brazilian league and the big European leagues). Each card shows what it has, what it",
    "Não entram na coleta — ou não são fonte de dados, ou são pagas sem retorno prático agora, ou são inspiração/ferramenta.": "Not part of the collection — either they are not data sources, or they are paid with no practical return right now, or they are inspiration/tooling.",
    "Similar ao Sofascore: xG, shot map, notas de jogador, momentum e stats detalhadas de partida, com cobertura ampla incluindo Copa 2026 e Brasileirão.": "Similar to Sofascore: xG, shot map, player ratings, momentum and detailed match stats, with broad coverage including the 2026 World Cup and the Brazilian league.",
    "Stats detalhadas alimentadas por Opta, com ratings e dashboards por jogador/jogo e boa cobertura. O problema é o acesso: anti-scraping pesado.": "Detailed stats powered by Opta, with ratings and dashboards per player and match, and good coverage. The problem is access: heavy anti-scraping.",
    "Agregador de stats de time e jogo com algum xG, tendências e foco em apostas. Export CSV e API existem, mas nos planos pagos.": "An aggregator of team and match stats with some xG, trends and a betting focus. CSV export and an API exist, but only on paid plans.",
    "Agregador de placares, tabelas e estatísticas de partida, com página dedicada de stats da Copa. Granularidade menor que Sofascore/FotMob.": "An aggregator of scores, tables and match statistics, with a dedicated World Cup stats page. Lower granularity than Sofascore/FotMob.",
    "O padrão da indústria: evento + tracking ao vivo, o dado que alimenta metade dos outros sites (WhoScored, FBref). Sem qualquer acesso gratuito.": "The industry standard: events + live tracking, the data that feeds half the other sites (WhoScored, FBref). No free access whatsoever.",
    "A versão paga do StatsBomb: evento + 360 para temporadas completas de todas as grandes ligas, com Copa 2026 provável. O Open Data é uma fração disso.": "The paid version of StatsBomb: events + 360 for complete seasons of every major league, with the 2026 World Cup likely. The Open Data is a fraction of this.",
    "API paga bem documentada com fixtures, eventos, lineups, xG (add-on) e boa cobertura. Tem plano gratuito só de teste, sem uso real.": "A well-documented paid API with fixtures, events, line-ups, xG (add-on) and good coverage. The free plan is trial-only, with no real use.",
    "API brasileira com ótima cobertura nacional — estaduais, Brasileirão, continentais e Copa 2026. O forte é o Brasil, mas é paga (free só simbólico).": "A Brazilian API with excellent national coverage — state leagues, the Brazilian league, continental competitions and the 2026 World Cup. Brazil is its strength, but it is paid (the free tier is token).",
    "É o projeto de data portraits do Alexander Bogachev — sua principal inspiração de estilo , não uma fonte de dados aberta.": "It is Alexander Bogachev's data portraits project — your main style inspiration, not an open data source.",
    "A plataforma Wyscout em si é paga. O que aproveitamos é o dataset público 2017/18 (card PlayeRank, na lista principal).": "The Wyscout platform itself is paid. What we use is the public 2017/18 dataset (the PlayeRank card, in the main list).",
    "Onde cada jogador realmente pisou durante os 90 minutos (ataque sempre da esquerda para a direita). Clique num jogador": "Where each player actually stepped during the 90 minutes (attacking always left to right). Click a player",
    "☁️ Algodão": "☁️ Cotton",
    "🍬 Açúcar": "🍬 Sugar",
    "🌴 Óleo de Palma": "🌴 Palm oil",
    "🐖 Carne Suína": "🐖 Pork",
    "🍗 Carne de Frango": "🍗 Poultry",

    /* ---------- lote 8: prefixos de referencia ---------- */
    "Fork seu: github.com/OtavioPelego/skillcorner-opendata": "Your fork: github.com/OtavioPelego/skillcorner-opendata",
    "Dataset já testado: basedosdados.org/dataset/afc5c178…": "Dataset already tested: basedosdados.org/dataset/afc5c178…",
    "Fork seu:": "Your fork:",
    "Dataset já testado:": "Dataset already tested:",

    /* ---------- lote 8: UI do painel Embrapa ---------- */
    "Colocação": "Rank",
    "Lotação": "Duty city",
    "Cidade de lotação": "Duty city",
    "Colocação entre": "Rank between",
    "Nº da opção": "Option no.",
    "Mostrar mais": "Show more",
    "Mostrando": "Showing",
    "Saiu do processo": "Left the process",
    "Ampla Concorrência": "Open competition",
    "Pessoa com Deficiência": "Person with a disability",
    "Tente afrouxar algum critério.": "Try loosening one of the filters.",
    "unidades": "units",
    "áreas": "areas",
    "subáreas": "sub-areas",
    "opções": "options",
    "cargos": "roles",
    "situações": "statuses",
    "cidades": "cities",

    /* ---------- lote 9: Copa 2022 sob o Microscopio ---------- */
    "Pressão·Bloco": "Pressing·Block",
    "Pressão e o bloco como ele é": "Pressing and the block as it really is",
    "Mapa de pressão": "Pressing map",
    "Disputa de pênaltis": "Penalty shootout",
    "A decisão por pênaltis": "The penalty shootout",
    "A disputa de pênaltis": "The shootout",
    "A ordem exata — e onde a noite desandou": "The exact order — and where the night fell apart",
    "O gol de Neymar — o frame": "Neymar’s goal — the frame",
    "finalizações": "shots",
    "finalização": "shot",
    "pressões": "pressures",
    "pressão": "pressure",
    "xG total": "total xG",
    "Foram": "There were",
    "fez": "did",
    "e o que os chutes": "and what the shots",
    "valiam": "were worth",
    "(Argentina) contra": "(Argentina) against",
    "entre a bola e o gol": "between the ball and the goal",
    "Use a seção": "Use the",
    "Rodrygo e Marquinhos pararam em Livaković e na trave. A Croácia converteu": "Rodrygo and Marquinhos were denied by Livaković and the post. Croatia converted",
    ". Selecione Brasil × Croácia na": ". Select Brazil × Croatia in the",
    "seção de partidas": "match section",
    "para o raio-X completo.": "for the full X-ray.",
    "Ocorrências": "Occurrences",
    "Copas": "World Cups",
    "Copa": "World Cup",
    "México": "Mexico",
    "Alemanha": "Germany",
    "Espanha": "Spain",
    "França": "France",
    "Inglaterra": "England",
    "Itália": "Italy",
    "Bélgica": "Belgium",
    "Croácia": "Croatia",
    "Suécia": "Sweden",
    "Suíça": "Switzerland",
    "Holanda": "Netherlands",
    "Uruguai": "Uruguay",
    "Japão": "Japan",
    "Marrocos": "Morocco",
    "Canadá": "Canada",
    "Noruega": "Norway",
    "Dinamarca": "Denmark",
    "Polônia": "Poland",
    "Áustria": "Austria",
    "Turquia": "Turkey",
    "Grécia": "Greece",
    "Escócia": "Scotland",
    "Irlanda": "Ireland",
    "Rússia": "Russia",
    "Colômbia": "Colombia",
    "Equador": "Ecuador",
    "Peru": "Peru",
    "Chile": "Chile",
    "Paraguai": "Paraguay",
    "Bolívia": "Bolivia",
    "Venezuela": "Venezuela",
    "Nigéria": "Nigeria",
    "Camarões": "Cameroon",
    "Senegal": "Senegal",
    "Argélia": "Algeria",
    "Tunísia": "Tunisia",
    "Egito": "Egypt",
    "Gana": "Ghana",
    "Austrália": "Australia",
    "Irã": "Iran",
    "Sérvia": "Serbia",

    /* ---------- lote 10: fontes de dados de futebol ---------- */
    "A melhor base de estatística agregada gratuita. Stats avançadas por jogo e por jogador (xG, xA, passes progressivos, pressões, SCA) alimentadas por Opta, com tabelas prontas para baixar. Cobre praticamente tudo: Copa 2026 conforme acontece, Copas históricas, Brasileirão e as grandes ligas.": "The best free aggregated-statistics database. Advanced stats per match and per player (xG, xA, progressive passes, pressures, SCA) powered by Opta, with tables ready to download. It covers almost everything: the 2026 World Cup as it happens, historical World Cups, the Brazilian league and the major leagues.",
    "API gratuita, limpa e estável. O free cobre 12 competições incluindo Copa do Mundo, Brasileirão, Premier League, La Liga, Bundesliga, Serie A, Ligue 1 e Champions. Dá fixtures, classificações, artilheiros, escalações e head-to-head — sem eventos detalhados nem xG.": "A free, clean and stable API. The free tier covers 12 competitions including the World Cup, the Brazilian league, the Premier League, La Liga, the Bundesliga, Serie A, Ligue 1 and the Champions League. It gives fixtures, tables, top scorers, line-ups and head-to-head — but no detailed events and no xG.",
    "API pronta cobrindo 1200+ ligas com fixtures, eventos (gol, cartão, sub), escalações, estatísticas de jogo, odds e predições. O plano free dá 100 requisições/dia e todos os endpoints — mas as temporadas recentes (2024→2026) ficam travadas para pagantes.": "A ready-made API covering 1,200+ leagues with fixtures, events (goal, card, substitution), line-ups, match statistics, odds and predictions. The free plan gives 100 requests a day and every endpoint — but recent seasons (2024→2026) are locked behind payment.",
    "Empacota a base Fjelstul (1930–2023, masc. e fem.) com download de CSV grátis (CC-BY-NC-SA) e uma camada de IA para consultar em linguagem natural. 27 datasets: 1.248 jogos, 10.401 jogadores, gols, cartões, subs, árbitros, estádios.": "It packages the Fjelstul database (1930–2023, men and women) with free CSV downloads (CC-BY-NC-SA) and an AI layer for natural-language queries. 27 datasets: 1,248 matches, 10,401 players, goals, cards, substitutions, referees, stadiums.",
    "Pacote comercial focado na Copa 2026: dados ao vivo das 104 partidas com passing networks, heatmaps posicionais, ball tracking e coordenadas de evento, além de widgets e microsite. Sem acesso gratuito.": "A commercial package focused on the 2026 World Cup: live data from all 104 matches with passing networks, positional heatmaps, ball tracking and event coordinates, plus widgets and a microsite. No free access.",
    "A base histórica definitiva das Copas: todas as edições de 1930 a 2022 em CSVs relacionais limpos — partidas, gols, cartões, substituições, elencos, jogadores, técnicos, árbitros, estádios e prêmios.": "The definitive historical World Cup database: every edition from 1930 to 2022 in clean relational CSVs — matches, goals, cards, substitutions, squads, players, managers, referees, stadiums and awards.",
    "CSVs de resultados históricos com estatísticas básicas (chutes, escanteios, faltas, cartões) e — o diferencial — odds de dezenas de casas de aposta, cobrindo muitas ligas por décadas. Foco europeu.": "CSVs of historical results with basic statistics (shots, corners, fouls, cards) and — the differentiator — odds from dozens of bookmakers, covering many leagues across decades. European focus.",
    "Algoritmo aberto de rating de jogadores rodando sobre o dataset público Wyscout 2017/18: eventos (passes, chutes, faltas, duelos) com coordenadas das 5 grandes ligas + Copa 2018 + Euro 2016.": "An open player-rating algorithm running on the public Wyscout 2017/18 dataset: events (passes, shots, fouls, duels) with coordinates from the big five leagues plus the 2018 World Cup and Euro 2016.",
    "Plataforma de scouting com event data de cobertura enorme (incluindo Brasileirão e ligas menores) + vídeo. Assinatura cara; o dataset público 2017/18 é o que sobra de graça (ver PlayeRank).": "A scouting platform with event data of enormous coverage (including the Brazilian league and smaller leagues) plus video. The subscription is expensive; the public 2017/18 dataset is what remains free (see PlayeRank).",
    "Não é dado de desempenho em campo — é a referência de valor de mercado, transferências, contratos, lesões, elencos e biografia, com cobertura praticamente universal (Brasileirão incluso).": "This is not on-pitch performance data — it is the reference for market value, transfers, contracts, injuries, squads and biography, with almost universal coverage (the Brazilian league included).",
    "GPS/acelerômetro vestível de verdade — o dado físico real do jogador. Mas não é dataset que se baixa: é hardware+plataforma vendido a clubes/seleções. Você só teria acesso via um clube.": "Genuine wearable GPS/accelerometer — the player’s real physical data. But it is not a dataset you download: it is hardware plus a platform sold to clubs and national teams. You would only get access through a club.",
    "O dado de evento mais rico disponível de graça. Cada partida traz ~3.400 eventos com coordenada, mais o 360: freeze-frames com a posição de todos os jogadores no momento do evento.": "The richest event data available for free. Each match carries around 3,400 events with coordinates, plus the 360 layer: freeze frames with the position of every player at the moment of the event.",
    "Data lake público brasileiro. Traz a Copa do Mundo 1930–2018 e datasets nacionais (incluindo futebol brasileiro) acessíveis via BigQuery/SQL ou download. Já testado por você.": "A Brazilian public data lake. It carries the World Cup from 1930 to 2018 and national datasets (including Brazilian football), reachable through BigQuery/SQL or download. Already tested by you.",
    "xG a nível de finalização: cada chute com xG, coordenada, jogador, tipo de jogada e resultado. Só cobre as 5 grandes ligas europeias + liga russa — sem Copa nem Brasileirão.": "Shot-level xG: every shot with its xG, coordinates, player, play type and outcome. It only covers the big five European leagues plus the Russian league — no World Cup and no Brazilian league.",
    "Tracking extraído do vídeo de transmissão de 9 partidas (grandes clubes), com posições e dados físicos dos jogadores em quadro. Alternativa aberta ao tracking óptico caro.": "Tracking extracted from the broadcast video of 9 matches (big clubs), with positions and physical data for the players in frame. An open alternative to expensive optical tracking.",
    "Conjunto CSV com matches, players e teams da Copa 2026 (schema idêntico ao FBref). Útil como scaffold já montado — mas os números se preenchem conforme o torneio acontece.": "A CSV set with matches, players and teams for the 2026 World Cup (schema identical to FBref). Useful as a ready-made scaffold — but the numbers fill in as the tournament unfolds.",
    "Agregador com stats de jogo, heatmaps de jogador, notas (rating), xG e momentum, com cobertura gigantesca — incluindo Copa 2026 ao vivo, Brasileirão e ligas europeias.": "An aggregator with match stats, player heatmaps, ratings, xG and momentum, with enormous coverage — including the 2026 World Cup live, the Brazilian league and the European leagues.",
    "É o projeto de": "It is the",
    "do Alexander Bogachev — sua principal": "project by Alexander Bogachev — your main",
    "inspiração de estilo": "style inspiration",
    ", não uma fonte de dados aberta.": ", not an open data source.",
    "É consultoria de BI/marketing brasileira. O dashboard da Copa é só portfólio, não um produto de dados.": "This is a Brazilian BI/marketing consultancy. The World Cup dashboard is portfolio work, not a data product.",
    "Não é fonte.": "Not a source.",
    "Local: UnderStat/…chelsea x tottenham.txt (HTML com shotsData embutido) + visualizacao_partida_29142.html.": "Local: UnderStat/…chelsea x tottenham.txt (HTML with shotsData embedded) + visualizacao_partida_29142.html.",
    "Local: kaggle-…/players.csv, teams.csv e matches.csv são derivados do FBref (mesmo schema).": "Local: kaggle-…/players.csv, teams.csv and matches.csv are derived from FBref (same schema).",
    "Local: statsbomb360-open-data/data/competitions.json (índice das competições liberadas).": "Local: statsbomb360-open-data/data/competitions.json (index of the released competitions).",
    "Local: whoscored.com/…norway-england.txt tem partida análoga (BRA/NOR/ENG).": "Local: whoscored.com/…norway-england.txt has an analogous match (BRA/NOR/ENG).",
    "Verificado: 27 datasets, 1930–2023, download gratuito.": "Verified: 27 datasets, 1930–2023, free download.",
    "Verificado: sem tier gratuito.": "Verified: no free tier.",
    "Gratuito": "Free",
    "Gratuito (CSV)": "Free (CSV)",
    "Gratuito (scraping)": "Free (scraping)",
    "Gratuito e bem documentado": "Free and well documented",
    "Pago": "Paid",
    "Paga": "Paid",
    "Pago (API)": "Paid (API)",
    "Pago (BR)": "Paid (BR)",
    "Hardware/Pago": "Hardware/Paid",
    "Padrão-ouro": "Gold standard",
    "Cobertura gigante": "Huge coverage",
    "Cobertura enorme": "Enormous coverage",
    "Boa cobertura ao vivo": "Good live coverage",
    "Congelado em 2017/18": "Frozen at 2017/18",
    "Vestível GPS": "Wearable GPS",
    "Transferências": "Transfers",
    "não": "no",
    "sim": "yes",
    "Ordenar: Composto (padrão)": "Sort: Composite (default)",
    "Recomendação rápida para o seu objetivo (data portraits Copa 2026 + dados granulares):": "A quick recommendation for your goal (2026 World Cup data portraits + granular data):",
    "Fontes verificadas ao vivo nesta pesquisa: football-data.org (cobertura free), API-Football (limites free), worldcups.ai, Data Sports Group, dottie.pro. Demais descritas de conhecimento + amostras locais já baixadas na pasta.": "Sources verified live during this research: football-data.org (free coverage), API-Football (free limits), worldcups.ai, Data Sports Group, dottie.pro. The rest are described from knowledge plus local samples already downloaded to the folder.",

    /* ---------- lote 10b ---------- */
    "Cobertura": "Coverage",
    "📍 Chute / xG": "📍 Shot / xG",
    "Chute / xG": "Shot / xG",

    /* ---------- lote 11: laboratorio da partida ---------- */
    "Zonas (km/h): caminhada <7 · trote 7–15 · corrida 15–20 · alta intensidade 20–25 · sprint ≥25 — barras mostram a distância em cada zona": "Zones (km/h): walking <7 · jogging 7–15 · running 15–20 · high intensity 20–25 · sprint ≥25 — bars show the distance covered in each zone",
    "Momentum: quem mandou em cada fase": "Momentum: who ran each phase of the match",

    /* ---------- lote 11: laboratorio da partida ---------- */
    "Na média da partida, o": "On average across the match, the",
    "foi dono de": "owned",
    "do território e o": "of the territory and the",
    "de": "of",
    "O placar foi": "The score was",
    ", mas o xG diz o quanto cada time": ", but the xG says how much each team",
    "mereceu": "deserved",
    "trocou": "exchanged",
    "passes contra": "passes against",
    ". E a paciência aparece nas sequências: a mais longa do jogo teve": ". And the patience shows up in the sequences: the longest of the match had",
    "Passes (Mandante × Visitante)": "Passes (Home × Away)",
    "Média de passes por posse": "Average passes per possession",
    "Finalizações": "Shots",
    "Gols esperados (xG)": "Expected goals (xG)",
    "GOL": "GK",
    "caminhada": "walking",
    "trote": "jogging",
    "corrida": "running",
    "alta intensidade": "high intensity",

    /* ---------- lote 12: pendencias da varredura estatica ---------- */
    "Conteúdo": "Contents",
    "Otávio Pelego ·": "Otávio Pelego ·",
    "número": "number",
    "Estádios": "Stadiums",
    "Cartões": "Cards",
    "Métrica Ativa:": "Active metric:",
    "— cada um explora uma faceta do país: quantos somos, como mudamos, quanto ganhamos. Arraste para girar, role para dar zoom, passe o mouse para os detalhes.": "— each one explores a facet of the country: how many we are, how we change, how much we earn. Drag to rotate, scroll to zoom, hover for the details.",
    "· mapas independentes, uma identidade só.": "· independent maps, a single identity.",
    "População de cada município como um pico 3D. O país inteiro e o modo \"RS de Lupa\".": "The population of every municipality as a 3D peak. The whole country, plus the \"Rio Grande do Sul up close\" mode.",
    "As convocações são coletadas do painel público da Embrapa no Looker Studio, que a própria Embrapa atualiza semanalmente. Cargo, área, subárea, vagas e localidades vêm do Anexo I e do Anexo II do Edital nº 1/2024. Este é um projeto pessoal, sem qualquer vínculo com a Embrapa ou com o Cebraspe — para qualquer decisão que dependa disso, confie sempre na fonte oficial.": "The call-ups are collected from Embrapa’s public Looker Studio dashboard, which Embrapa itself updates weekly. Role, area, sub-area, posts and locations come from Annexes I and II of Notice no. 1/2024. This is a personal project with no connection to Embrapa or Cebraspe — for any decision that depends on it, always trust the official source.",
    "Os nomes exibidos são os mesmos já publicados no painel oficial da Embrapa, de acesso público. Os nomes de cidade foram padronizados pela grafia do edital, porque o painel oficial traz a mesma cidade escrita de formas diferentes (“Seropedica” e “Seropédica”, por exemplo) — o que espalharia a mesma cidade por vários filtros.": "The names shown are the same ones already published on Embrapa’s official public dashboard. City names were standardised to the notice’s spelling, because the official dashboard writes the same city in different ways (“Seropedica” and “Seropédica”, for instance) — which would scatter one city across several filters.",
    "da opção — 40000084, por exemplo. É o edital que diz que aquele número corresponde a um cargo, uma área e uma subárea. Este painel cruza as duas fontes, e é isso que permite responder “quantos pesquisadores já foram chamados”.": "of the option — 40000084, for example. It is the notice that says which role, area and sub-area that number stands for. This dashboard joins the two sources, and that is what makes it possible to answer “how many researchers have been called so far”.",
    "Isso é esperado: a cada desistência ou desclassificação, a Embrapa convoca a próxima pessoa da lista. Por isso a comparação com as vagas do edital serve para dar noção de andamento, e não para contar quem foi efetivado.": "That is expected: at every withdrawal or disqualification, Embrapa calls the next person on the list. So comparing against the posts in the notice gives a sense of progress, not a count of who was actually hired.",
    "Cada opção (cargo/área/subárea) tem um número de vagas previsto no Anexo II do edital. Aqui dá para ver quantas pessoas já foram chamadas em cada uma. Mostrando as 15 com mais convocações do recorte atual.": "Each option (role/area/sub-area) has a number of posts foreseen in Annex II of the notice. Here you can see how many people have already been called for each. Showing the 15 with the most call-ups in the current selection.",
    "São convocações ainda sem localidade definida. O próprio painel da Embrapa registra esses casos como “null” e informa que eles permanecem assim até a convocação ser finalizada.": "These are call-ups with no location defined yet. Embrapa’s own dashboard records these cases as “null” and states that they stay that way until the call-up is completed.",
    "(players · teams · matches), usados no notebook \"FIFA WorldCup 2026 Deep Analysis & Prediction\" de Wasiq Ali Yasir.": "(players · teams · matches), used in the notebook \"FIFA WorldCup 2026 Deep Analysis & Prediction\" by Wasiq Ali Yasir.",
    "— gols/90 (50%), gols por chute (20%), chutes/90 (15%), % no alvo (15%)": "— goals/90 (50%), goals per shot (20%), shots/90 (15%), % on target (15%)",
    "— jogos disputados (quanto mais longe na Copa, maior)": "— matches played (the further into the tournament, the higher)",
    "Passe o mouse nas bolhas ·": "Hover over the bubbles ·",
    "O Brasil em 2026": "Brazil in 2026",
    "— posse média ·": "— average possession ·",
    "Amostra gratuita de tracking óptico: posição (x,y) dos 22 jogadores + bola a 25 quadros/s em 3 partidas anonimizadas, com os eventos sincronizados. O mais próximo de \"GPS\" que se acha aberto.": "A free sample of optical tracking: (x,y) positions of all 22 players plus the ball at 25 frames per second across 3 anonymised matches, with synchronised events. The closest thing to \"GPS\" you can find in the open.",

    /* ---------- lote 13: rotulos de legenda vindos do DATA ---------- */
    "Agropecuária": "Agriculture",
    "Indústria": "Industry",
    "Serviços": "Services",
    "Setor dominante": "Dominant sector",

    /* ---------- lote 14: ultimas pendencias ---------- */
    "Mês": "Month",
    "Sem dados": "No data",
    "Análise Temporal e Espacial de Trigo (Dados Oficiais USDA PSD)": "Wheat over time and space (official USDA PSD data)",

    /* ---------- lote 15: revisao da pagina Copa 2026 ---------- */
    "posse (%)": "possession (%)",
    "escanteios": "corners",
    "cruzamentos": "crosses",
    "faltas": "fouls",
    "amarelos": "yellows",
    "vermelhos": "reds",
    "impedimentos": "offsides",
    "cartões amarelos": "yellow cards",
    "cartões vermelhos": "red cards",
    "idade média": "average age",
    "dourado": "gold",
    "Ver como tabela": "View as table",
    "Chutes/90": "Shots/90",
    "Sofridos": "Conceded",
    "defendeu": "saved",
    "Frente a frente": "Head to head",
    "Comparador de seleções": "Team comparator",
    "Nota": "Score",
    "invertido": "inverted",
    "invertidos": "inverted",
    "profundidade": "depth",
    "controle": "control",
    "disciplina": "discipline",
    "idade": "age",
    "calendário": "schedule",
    "Profundidade": "Depth",
    "Controle": "Control",
    "Calendário": "Schedule",
    "Adv. médio (rank)": "Avg. opponent (rank)",
    "Rank FIFA": "FIFA rank",

    /* ---------- lote 16b: fases do torneio (grupos de captura) ---------- */
    "quartas de final": "quarter-finals",
    "oitavas de final": "round of 16",
    "semifinais": "semi-finals",
    "semifinal": "semi-final",
    "fase de grupos": "group stage",
    "disputa de terceiro lugar": "third-place play-off",
    "16-avos": "round of 32",
    "final": "final",
    "Quartas": "Quarter-finals",
    "Oitavas": "Round of 16",
    "Semifinais": "Semi-finals",

    /* ---------- lote 17: O Corpo da Copa ---------- */
    "O Corpo da Copa": "The Body of the World Cup",
    "Posições": "Positions",
    "Posição": "Position",
    "Maratonistas": "Marathoners",
    "Velocidade": "Speed",
    "Fases": "Stages",
    "Seleções": "Teams",
    "Os dados": "The data",
    "FIFA Training Centre · 104 partidas": "FIFA Training Centre · 104 matches",
    "Toda Copa é contada em gols. Esta é contada em metros: quanto cada jogador correu, em que velocidade, e quantas vezes disparou — nas 104 partidas de 2026.": "Every World Cup is told in goals. This one is told in metres: how far each player ran, at what speed, and how many times they sprinted — across the 104 matches of 2026.",
    "percorridos no total": "covered in total",
    "sprints acima de 20 km/h": "sprints above 20 km/h",
    "a maior velocidade": "the highest speed recorded",
    "registros jogador-partida": "player-match records",
    "O paradoxo": "The paradox",
    "Quem corre mais não é quem corre mais rápido": "Whoever runs the most is not whoever runs the fastest",
    "Cada barra é a distância média por 90 minutos, repartida nas cinco faixas de velocidade que a FIFA mede. O meio-campo domina o total. Mas olhe a ponta vermelha da barra: é o atacante que acumula mais metros acima de 25 km/h.": "Each bar is the average distance per 90 minutes, split into the five speed bands FIFA measures. Midfielders dominate the total. But look at the red tip of the bar: it is the forward who piles up the most metres above 25 km/h.",
    "Por 90 minutos": "Per 90 minutes",
    "Por 90": "Per 90",
    "O goleiro entra na conta": "The goalkeeper is in the count",
    "Ele aparece de propósito. Serve de régua: mostra o quanto das outras barras é jogo, e não apenas o ato de estar em campo por 90 minutos.": "He is there on purpose. He works as a ruler: he shows how much of the other bars is football, and not merely the act of standing on a pitch for 90 minutes.",
    "Distância": "Distance",
    "Distância total": "Total distance",
    "Sprints": "Sprints",
    "Acima de 25 km/h": "Above 25 km/h",
    "Pico médio": "Average peak",
    "Defensor": "Defender",
    "Meio-campo": "Midfielder",
    "Atacante": "Forward",
    "caminhada (até 7 km/h)": "walking (up to 7 km/h)",
    "trote (7–15)": "jogging (7–15)",
    "corrida (15–20)": "running (15–20)",
    "intensa (20–25)": "high intensity (20–25)",
    "sprint (25+)": "sprint (25+)",
    "Distância por 90 minutos repartida em faixas de velocidade, por posição": "Distance per 90 minutes split into speed bands, by position",
    "Volume": "Volume",
    "Os maratonistas do torneio": "The marathoners of the tournament",
    "Soma de todos os jogos — favorece quem foi longe no torneio.": "Sum across every match — it favours whoever went far in the tournament.",
    "Normalizado por tempo em campo — mínimo de 3 jogos completos.": "Normalised by time on the pitch — minimum of 3 full matches.",
    "Jogadores que mais correram na Copa": "Players who ran the most at the World Cup",
    "Pico": "Peak",
    "Os mais rápidos de 2026": "The fastest of 2026",
    "Maior velocidade registrada": "Highest speed recorded",
    "A corrida mais longa de um jogo só": "The longest run of a single match",
    "Distância num único jogo. Os primeiros da lista quase sempre jogaram prorrogação.": "Distance in one match. The top of this list almost always played extra time.",
    "Jogos": "Matches",
    "Jogador": "Player",
    "Ao longo do torneio": "Across the tournament",
    "As pernas não morreram — a final foi o jogo mais corrido": "The legs did not die — the final was the hardest-run match",
    "Distância por 90 minutos em cada fase do torneio": "Distance per 90 minutes in each stage of the tournament",
    "prorrogação": "extra time",
    "Coletivo": "Collective",
    "Correr mais não levou mais longe": "Running more did not take anyone further",
    "Cada bolha é uma seleção. Horizontal: quilômetros por jogo. Vertical: quantos jogos ela durou no torneio. Passe o mouse para ver.": "Each bubble is a team. Horizontal: kilometres per match. Vertical: how many matches it lasted in the tournament. Hover to see.",
    "quilômetros percorridos por jogo": "kilometres covered per match",
    "jogos disputados": "matches played",
    "Quilômetros por jogo contra número de jogos disputados, por seleção": "Kilometres per match against number of matches played, by team",
    "Cada jogador, cada métrica": "Every player, every metric",
    "Os 1.042 jogadores que entraram em campo, com o que fizeram fisicamente. Procure pelo seu, ou filtre por seleção e posição. Clique no cabeçalho para reordenar.": "The 1,042 players who took the pitch, and what they did physically. Search for yours, or filter by team and position. Click a header to re-sort.",
    "Procurar jogador": "Search player",
    "Todas as seleções": "All teams",
    "Todas as posições": "All positions",
    "Qualquer nº de jogos": "Any number of matches",
    "Mínimo de jogos": "Minimum matches",
    "Pico km/h": "Peak km/h",
    "Pos": "Pos",
    "Limpar": "Clear",
    "Nenhum jogador com esses filtros.": "No player matches these filters.",
    "(CC BY 4.0). São": "(CC BY 4.0). That is",
    "registros de jogador-partida, um para cada atleta em cada um dos 104 jogos.": "player-match records, one for every athlete in each of the 104 matches.",
    "As faixas de velocidade são as da própria FIFA · sem dados de GPS vestível (esses são dos clubes) · arquivo 100% offline.": "The speed bands are FIFA’s own · no wearable GPS data (that belongs to the clubs) · fully offline file.",

    /* ---------- lote 17b: cards do hub de futebol ---------- */
    "Toda Copa é contada em gols; esta é contada em metros. Distância percorrida em cinco faixas de velocidade, sprints e pico de km/h de cada jogador em cada jogo — e três achados contraintuitivos sobre quem corre, quando e por quê.": "Every World Cup is told in goals; this one is told in metres. Distance covered across five speed bands, sprints and peak km/h for every player in every match — plus three counter-intuitive findings about who runs, when and why.",
    "A Copa de 2026 inteira, do primeiro jogo à final: mata-mata clicável, corrida da Chuteira de Ouro (Messi × Mbappé × Haaland), explorador das 104 partidas, Brasil em foco e a Nota da Copa — índice próprio de 1,0 a 10,0.": "The whole 2026 World Cup, from the opening match to the final: a clickable bracket, the Golden Boot race (Messi × Mbappé × Haaland), an explorer of all 104 matches, Brazil in focus and the World Cup Score — our own index from 1.0 to 10.0.",
    "O esforço físico de 2026": "The physical effort of 2026",
    "23.890 km": "23,890 km",
    "1.042 jogadores": "1,042 players",
    "92.803 sprints": "92,803 sprints",
    "104 jogos": "104 matches",

    /* ---------- lote 17c: bloco da prorrogacao ---------- */
    "E a prorrogação?": "And extra time?",
    "Normalizando por 90 minutos, quem jogou os 120 correu": "Normalised per 90 minutes, whoever played all 120 covered",
    "contra": "against",
    "de quem jogou o tempo normal. Não é cansaço acumulado: é que jogo empatado até o fim é jogo disputado o tempo todo.": "compared with those who played normal time. It is not accumulated fatigue: a match level to the end is a match contested throughout.",
    "A final entra nos dois grupos — ela foi decidida na prorrogação.": "The final counts in both groups — it was decided in extra time.",

    /* ---------- lote 18: A Teia (redes de passe) ---------- */
    "A Teia": "The Web",
    "FIFA Training Centre · 208 redes": "FIFA Training Centre · 208 networks",
    "Um time não é onze jogadores: é o desenho dos passes entre eles. Aqui estão as 208 redes da Copa de 2026 — quem tocou com quem, quantas vezes, e em que direção.": "A team is not eleven players: it is the shape of the passes between them. Here are the 208 networks of the 2026 World Cup — who played with whom, how often, and in which direction.",
    "ligações entre jogadores": "links between players",
    "passes mapeados": "passes mapped",
    "19 de julho": "19 July",
    "A final coube num desenho": "The final fitted into one drawing",
    "A final": "The final",
    "O padrão": "The pattern",
    "Passar e vencer": "Passing and winning",
    "Passar mais foi vencer mais": "Passing more meant winning more",
    "Passes na rede por resultado da partida": "Network passes by match result",
    "Venceu": "Won",
    "Empatou": "Drew",
    "Perdeu": "Lost",
    "Quem sustenta": "Who holds it together",
    "Os eixos": "The hubs",
    "Os eixos do torneio": "The hubs of the tournament",
    "Mais envolvimentos numa partida": "Most involvements in a single match",
    "Passes dados mais recebidos, num jogo só.": "Passes made plus passes received, in one match.",
    "As maiores redes": "The biggest networks",
    "Total de passes trocados dentro do time, num jogo.": "Total passes exchanged within the team, in one match.",
    "Envolv.": "Involv.",
    "Aos pares": "In pairs",
    "Duplas": "Pairs",
    "Dupla": "Pair",
    "As ligações mais gastas da Copa": "The most worn links of the World Cup",
    "Assimetria": "Asymmetry",
    "Mão única": "One-way",
    "Só a rede dirigida mostra isto: pares em que a bola foi muitas vezes e quase não voltou.": "Only a directed network shows this: pairs where the ball went many times and hardly came back.",
    "De": "From",
    "Para": "To",
    "Ida": "Out",
    "Volta": "Back",
    "As 208": "The 208",
    "Explorar": "Explore",
    "Escolha uma rede": "Pick a network",
    "Cada partida, cada time. O tamanho do círculo é o envolvimento do jogador; a espessura da linha, o número de passes. Arraste o corte para esconder as ligações fracas e deixar o esqueleto aparecer.": "Every match, every team. The size of the circle is the player’s involvement; the thickness of the line, the number of passes. Drag the cut-off to hide the weak links and let the skeleton show.",
    "Mínimo de passes:": "Minimum passes:",
    "Mínimo de passes na ligação": "Minimum passes on the link",
    "Time": "Team",
    "Times": "Teams",
    "Goleiro": "Goalkeeper",
    "Defesa": "Defence",
    "Meio": "Midfield",
    "Ataque": "Attack",
    "Gol": "GK",
    "Def": "Def",
    "Mei": "Mid",
    "Ata": "Att",
    "entrou depois": "came on later",
    "envolvimentos": "involvements",
    "passes na rede": "passes in the network",
    "ligações": "links",
    "(CC BY 4.0).": "(CC BY 4.0).",
    "Sobre a posição dos jogadores.": "About where the players are drawn.",
    "O dado traz a linha de cada um (goleiro, defesa, meio, ataque), não a coordenada em campo. A profundidade do círculo vem dessa linha; a ordem lateral é escolhida para reduzir cruzamentos e deixar a teia legível.": "The data gives each player’s line (goalkeeper, defence, midfield, attack), not a pitch coordinate. The depth of the circle comes from that line; the lateral order is chosen to reduce crossings and keep the web readable.",
    "Não é onde o jogador esteve — é com quem ele jogou.": "It is not where the player was — it is who he played with.",

    /* ---------- lote 18b: card da Teia ---------- */
    "Um time não é onze jogadores, é o desenho dos passes entre eles. As 208 redes da Copa, jogador a jogador e com direção — na final, a Espanha teceu 773 passes; a Argentina, 357.": "A team is not eleven players, it is the shape of the passes between them. The World Cup’s 208 networks, player by player and with direction — in the final, Spain wove 773 passes; Argentina, 357.",
    "As redes de passe de 2026": "The passing networks of 2026",
    "208 redes": "208 networks",
    "23.858 ligações": "23,858 links",
    "84.308 passes": "84,308 passes",

    /* ---------- lote 19: O Jeito de Jogar (17 fases) ---------- */
    "O Jeito de Jogar": "The Way They Played",
    "FIFA Training Centre · 3.536 medições": "FIFA Training Centre · 3,536 measurements",
    "A FIFA não mede só o que aconteceu: mede": "FIFA does not only measure what happened: it measures",
    "como": "how",
    "o jogo transcorreu. Dezessete fases — oito com a bola, nove sem ela — para cada seleção em cada partida de 2026. É a impressão digital tática de 48 times.": "the match unfolded. Seventeen phases — eight with the ball, nine without it — for every team in every match of 2026. It is the tactical fingerprint of 48 sides.",
    "fases medidas": "phases measured",
    "medições": "measurements",
    "partidas": "matches",
    "O vocabulário": "The vocabulary",
    "As 17 fases": "The 17 phases",
    "As dezessete fases": "The seventeen phases",
    "Com a bola": "With the ball",
    "Sem a bola": "Without the ball",
    "Antes de comparar, é preciso saber o que está sendo medido. Cada barra é a média do torneio: quanto de um jogo típico transcorre naquela fase. Construir sem pressão ocupa mais de um terço do tempo com a bola; bloco baixo e bloco médio dividem quase metade do tempo sem ela.": "Before comparing, you need to know what is being measured. Each bar is the tournament average: how much of a typical match passes in that phase. Building unopposed takes up more than a third of the time on the ball; low block and mid block share almost half the time without it.",
    "Média do torneio em cada uma das 17 fases de jogo": "Tournament average in each of the 17 phases of play",
    "Construção sem pressão": "Build-up unopposed",
    "Construção sob pressão": "Build-up opposed",
    "Progressão": "Progression",
    "Transição ofensiva": "Attacking transition",
    "Contra-ataque": "Counter-attack",
    "Bola longa": "Long ball",
    "Último terço": "Final third",
    "Bola parada": "Set piece",
    "Pressão alta": "High press",
    "Bloco alto": "High block",
    "Pressão média": "Mid press",
    "Bloco médio": "Mid block",
    "Pressão baixa": "Low press",
    "Bloco baixo": "Low block",
    "Contrapressão": "Counter-press",
    "Transição defensiva": "Defensive transition",
    "Recomposição": "Recovery",
    "construção sem pressão": "build-up unopposed",
    "construção sob pressão": "build-up opposed",
    "progressão": "progression",
    "transição ofensiva": "attacking transition",
    "contra-ataque": "counter-attack",
    "bola longa": "long ball",
    "último terço": "final third",
    "bola parada": "set piece",
    "pressão alta": "high press",
    "bloco alto": "high block",
    "pressão média": "mid press",
    "bloco médio": "mid block",
    "pressão baixa": "low press",
    "bloco baixo": "low block",
    "contrapressão": "counter-press",
    "transição defensiva": "defensive transition",
    "recomposição": "recovery",
    "O que separa": "What separates them",
    "Vencer": "Winning",
    "O bloco baixo é o retrato da derrota": "The low block is what defeat looks like",
    "Diferença entre a média de quem venceu e a de quem perdeu, em pontos percentuais. À direita, fases de quem ganha; à esquerda, de quem perde.": "The gap between the average of those who won and those who lost, in percentage points. To the right, the phases of winners; to the left, of losers.",
    "mais em quem venceu": "more among winners",
    "mais em quem perdeu": "more among losers",
    "Diferença entre vencedores e perdedores em cada fase": "The gap between winners and losers in each phase",
    "Ler com cuidado.": "Read it with care.",
    "Cada seleção": "Every team",
    "Impressão digital": "Fingerprint",
    "A impressão digital": "The fingerprint",
    "Seleção": "Team",
    "Comparar com": "Compare with",
    "— nenhuma —": "— none —",
    "média do torneio": "tournament average",
    "Perfil de fases da seleção comparado à média do torneio": "The team’s phase profile against the tournament average",
    "Os extremos": "The extremes",
    "Os polos": "The poles",
    "Quem levou uma fase ao limite": "Who took a phase to its limit",
    "Fase": "Phase",
    "% do jogo": "% of the match",
    "Mais usaram": "Used it most",
    "Menos usaram": "Used it least",
    "Partida a partida": "Match by match",
    "Um jogo, dois jeitos": "One match, two ways of playing",
    "Toda partida tem duas leituras. Escolha um jogo e veja as 17 fases dos dois times lado a lado — quem construiu, quem recuou, quem pressionou.": "Every match has two readings. Pick one and see the 17 phases of both teams side by side — who built, who dropped off, who pressed.",
    "Partida": "Match",
    "As 17 fases dos dois times de uma partida": "The 17 phases of both teams in a match",
    "De onde vêm os dados.": "Where the data comes from.",
    "Relatórios pós-jogo oficiais do": "Official post-match reports from the",
    ", estruturados e publicados no Kaggle por": ", structured and published on Kaggle by",
    "(CC BY 4.0). São 3.536 medições: 208 times-partida × 17 fases.": "(CC BY 4.0). That is 3,536 measurements: 208 team-matches × 17 phases.",
    "As definições de cada fase são da própria FIFA · arquivo 100% offline.": "The definition of each phase is FIFA’s own · fully offline file.",
    "← voltar para Futebol": "← back to Football",

    /* ---------- lote 19b: aviso de causalidade (quebrado por <em>) ---------- */
    "Isto é associação, não causa. Time que está perdendo recua e defende — então parte do bloco baixo é": "This is association, not causation. A team that is losing drops off and defends — so part of the low block is a",
    "consequência": "consequence",
    "do placar, não a razão dele. O gráfico mostra com o que a derrota se parece, não o que a produz.": "of the scoreline, not the reason for it. The chart shows what defeat looks like, not what produces it.",

    /* ---------- lote 19c: card do Jeito de Jogar ---------- */
    "A FIFA não mede só o que aconteceu, mede": "FIFA does not only measure what happened, it measures",
    "o jogo transcorreu: 17 fases, oito com a bola e nove sem ela. Quem venceu passou 19% do jogo em bloco baixo; quem perdeu, 26%.": "how the match unfolded: 17 phases, eight with the ball and nine without it. Teams that won spent 19% of the match in a low block; teams that lost, 26%.",
    "As 17 fases de 2026": "The 17 phases of 2026",
    "17 fases": "17 phases",
    "3.536 medições": "3,536 measurements",

    /* ---------- lote 20: revisao do Otavio (Laboratorio) ---------- */
    "pronto": "ready",
    "em breve": "coming soon",
    "Crescendo": "Growing",
    "Encolhendo": "Shrinking",
    "Cana": "Sugarcane",
    "Mandioca": "Cassava",
    "Café": "Coffee",
    "Milho": "Maize",
    "Banana": "Banana",
    "Feijão": "Beans",
    "Tomate": "Tomato",
    "Fumo": "Tobacco",
    "Cacau": "Cocoa",
    "Coco": "Coconut",
    "Açaí": "Açaí",
    "Uva": "Grape",
    "Castanha": "Cashew",
    "Dendê": "Oil palm",
    "Erva-mate": "Yerba mate",
    "Outras": "Others",
    "Algodão": "Cotton",
    "Amendoim": "Peanut",
    "Aveia": "Oats",
    "Canola": "Canola",
    "Centeio": "Rye",
    "Cevada": "Barley",
    "Girassol": "Sunflower",
    "Mamona": "Castor bean",
    "Sorgo": "Sorghum",
    "Triticale": "Triticale",
    "Arroz (Total)": "Rice (total)",
    "Arroz Irrigado": "Irrigated rice",
    "Arroz Sequeiro": "Upland rice",
    "Café (Total)": "Coffee (total)",
    "Café Arábica": "Arabica coffee",
    "Café Conilon": "Conilon coffee",
    "Cana (Agrícola)": "Sugarcane (agricultural)",
    "Cana (Área Total)": "Sugarcane (total area)",
    "Feijão (2ª Safra)": "Beans (2nd crop)",
    "Feijão (Total)": "Beans (total)",
    "Milho (2ª Safra)": "Maize (2nd crop)",
    "Milho (Total)": "Maize (total)",
    "Cana-de-Açúcar": "Sugarcane",
    "cabeças": "head",
    "mil R$": "R$ thousand",
    "Contratado": "Hired",
    "Convocado": "Called up",
    "Desistente": "Withdrew",
    "Aceitou": "Accepted",
    "Desclassificado": "Disqualified",
    "Não se manifestou": "Did not respond",
    "Aceitou subjudice": "Accepted (sub judice)",
    "Contratado subjudice": "Hired (sub judice)",
    "efetivado": "hired",
    "saiu": "left",
    "em andamento": "in progress",
    "Já contratado": "Already hired",
    "Em andamento": "In progress",
    "Pessoas": "People",
    "pessoas": "people",

    /* ---------- lote 21: modalidade de concorrencia da Embrapa ---------- */
    "Pessoa Preta ou Parda": "Black or mixed-race person",
    "Pessoa Preta ou Parda (214)": "Black or mixed-race person (214)",

    /* ---------- lote 22: tooltips de A Teia ---------- */
    "mediana": "median",
    "times-partida": "team-matches",
    "em média": "on average",

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
    [/^Separando as 208 atua\u00e7\u00f5es pelo resultado, uma fase se destaca de todas: quem perdeu passou (.+)% do jogo em (.+), contra (.+)% de quem venceu\. No outro extremo, quem venceu construiu mais sem press\u00e3o e chegou mais ao \u00faltimo ter\u00e7o\. Nada disso surpreende \u2014 o que surpreende \u00e9 o que n\u00e3o aparece: contra-ataque e progress\u00e3o praticamente n\u00e3o distinguem vencedor de perdedor\.$/, "Split the 208 performances by result and one phase stands out from all the rest: teams that lost spent $1% of the match in $2, against $3% for teams that won. At the other end, winners built more without pressure and reached the final third more often. None of that surprises — what surprises is what does not show up: counter-attack and progression barely tell a winner from a loser."],
    [/^Com a bola elas somam (.+)% em m\u00e9dia; sem a bola, (.+)%\. As defini\u00e7\u00f5es da FIFA se sobrep\u00f5em \u2014 um mesmo trecho de jogo pode contar em mais de uma fase\. Por isso esta p\u00e1gina nunca empilha as fases como se fossem fatias de um bolo: compara cada uma com a m\u00e9dia do torneio, o que \u00e9 v\u00e1lido porque a mesma r\u00e9gua vale para todos\.$/, "With the ball they add up to $1% on average; without it, $2%. FIFA’s definitions overlap — the same passage of play can count in more than one phase. That is why this page never stacks the phases as if they were slices of a pie: it compares each one with the tournament average, which is valid because the same ruler applies to everyone."],
    [/^(.+) atingiu (.+) km\/h \u2014 a maior velocidade registrada na Copa\. Para efeito de compara\u00e7\u00e3o, o recorde mundial dos 100 m foi corrido a uma m\u00e9dia de 37,6 km\/h, com pico perto de 44\. Um jogador de futebol chega perto disso depois de j\u00e1 ter corrido dez quil\u00f4metros\.$/, "$1 hit $2 km/h — the highest speed recorded at the World Cup. For comparison, the 100 m world record was run at an average of 37.6 km/h, peaking near 44. A footballer gets close to that after already having run ten kilometres."],
    [/^A intui\u00e7\u00e3o diz que o torneio vai secando as pernas\. Os dados dizem o contr\u00e1rio: na final correu-se (.+) m a mais por 90 minutos do que na fase de grupos\. Jogo decisivo e equilibrado exige mais, n\u00e3o menos \u2014 e quem chega l\u00e1 \u00e9 justamente quem aguenta\.$/, "Intuition says a tournament drains the legs. The data says the opposite: in the final, players covered $1 m more per 90 minutes than in the group stage. A decisive, balanced match demands more, not less — and whoever gets there is precisely whoever can sustain it."],
    [/^Cada sele\u00e7\u00e3o tem um jeito, e ele aparece quando se compara com a m\u00e9dia\. A sele\u00e7\u00e3o mais fora da curva do torneio foi (.+): (.+)% do jogo em (.+), contra (.+)% da m\u00e9dia \u2014 quase tr\u00eas desvios-padr\u00e3o de dist\u00e2ncia\. Escolha duas sele\u00e7\u00f5es e veja onde elas divergem\.$/, "Every team has a way of playing, and it shows when you compare it with the average. The most unusual side of the tournament was $1: $2% of the match in $3, against $4% for the average — almost three standard deviations away. Pick two teams and see where they diverge."],
    [/^Cada c\u00edrculo \u00e9 um jogador, na sua linha \u2014 goleiro embaixo, ataque em cima\. O tamanho mostra o quanto ele participou; a espessura da linha, quantos passes correram por ali\. As liga\u00e7\u00f5es abaixo de 4 passes ficam escondidas, sen\u00e3o vira novelo\.$/, "Each circle is a player, on their line — goalkeeper at the bottom, attack at the top. The size shows how much they were involved; the thickness of the line, how many passes ran through it. Links below 4 passes stay hidden, otherwise it turns into a tangle."],
    [/^A rede \u00e9 dirigida, ent\u00e3o d\u00e1 para ver o que uma rede sim\u00e9trica esconderia: (.+) passou (\d+) vezes para (.+) e recebeu (\d+) de volta\. Liga\u00e7\u00e3o de m\u00e3o \u00fanica costuma ser hierarquia \u2014 quem constr\u00f3i e quem recebe para resolver\.$/, "The network is directed, so it shows what a symmetric one would hide: $1 passed $2 times to $3 and got $4 back. A one-way link is usually a hierarchy — who builds, and who receives to finish."],
    [/^A m\u00e9dia esconde os extremos\. Em bloco baixo, a dist\u00e2ncia entre os polos do torneio vai de (.+)% a (.+)% do jogo \u2014 dois futeb\u00f3is diferentes dentro da mesma competi\u00e7\u00e3o\. Escolha a fase e veja quem foi ao limite\.$/, "The average hides the extremes. In low block, the distance between the tournament’s poles runs from $1% to $2% of the match — two different kinds of football inside the same competition. Pick a phase and see who went to the limit."],
    [/^A (.+) foi a sele\u00e7\u00e3o que mais correu por jogo \((.+) km\) e caiu antes das quartas\. Entre as quatro que chegaram ao fim, a dist\u00e2ncia percorrida variou pouco \u2014 o que separou n\u00e3o foi quanto se corre, mas quando\.$/, "$1 ran the most per match of any team ($2 km) and went out before the quarter-finals. Among the four that made it to the end, distance covered barely varied — what set them apart was not how much they ran, but when."],
    [/^(.+) e (.+) trocaram (\d+) passes entre si numa partida da (.+)\. Quase todas as liga\u00e7\u00f5es mais gastas da Copa s\u00e3o entre dois zagueiros ou entre zagueiro e lateral: \u00e9 ali, na sa\u00edda de bola, que o futebol repete mais\.$/, "$1 and $2 exchanged $3 passes with each other in one match for $4. Almost every one of the World Cup’s most worn links is between two centre-backs, or a centre-back and a full-back: it is there, building out from the back, that football repeats itself most."],
    [/^Cada partida gera duas redes, uma por time \u2014 s\u00e3o 208 no total\. Separando-as pelo resultado, o degrau \u00e9 limpo: quem venceu trocou em m\u00e9dia (.+) passes dentro do time; quem empatou, (.+); quem perdeu, (.+)\.$/, "Every match produces two networks, one per team — 208 in all. Split by result, the step is clean: winners exchanged an average of $1 passes within the side; teams that drew, $2; teams that lost, $3."],
    [/^Cuidado com a leitura: quem est\u00e1 ganhando tende a ficar com a bola, ent\u00e3o parte disso \u00e9 consequ\u00eancia do placar, e n\u00e3o causa\. O gr\u00e1fico mostra a associa\u00e7\u00e3o, n\u00e3o a dire\u00e7\u00e3o da flecha\.$/, "Read it with care: a team that is ahead tends to keep the ball, so part of this is a consequence of the scoreline, not a cause. The chart shows association, not the direction of the arrow."],
    [/^(.+) tocou na bola (\d+) vezes numa \u00fanica partida pela (.+) \u2014 (\d+) a mais que o segundo colocado do torneio inteiro\. Volante que recebe e devolve, recebe e devolve: a rede inteira passa por ele\.$/, "$1 touched the ball $2 times in a single match for $3 — $4 more than the second-placed player in the whole tournament. A holding midfielder who receives and returns, receives and returns: the entire network runs through him."],
    [/^Time que est\u00e1 perdendo recua e defende \u2014 ent\u00e3o parte do bloco baixo \u00e9 (.+) do placar, n\u00e3o a raz\u00e3o dele\. O gr\u00e1fico mostra com o que a derrota se parece, n\u00e3o o que a produz\.$/, "A team that is losing drops off and defends — so part of the low block is $1 of the scoreline, not the reason for it. The chart shows what defeat looks like, not what produces it."],
    [/^da Cro\u00e1cia, finalizou (\d+) vezes \u2014 e caiu nos p\u00eanaltis\. O gol de Neymar na prorroga\u00e7\u00e3o est\u00e1 congelado abaixo \u2014 a fotografia exata do momento em que ele bateu Livakovi\u0107\.$/, "for Croatia, shooting $1 times — and went out on penalties. Neymar’s extra-time goal is frozen below — the exact photograph of the moment he beat Livaković."],
    [/^terminou artilheiro com (\d+) gols \(xG (\d+),(\d+)\), mas a Copa tamb\u00e9m premiou matadores silenciosos e puniu perdul\u00e1rios \u2014 abaixo, o contraste entre o que cada um$/, "finished top scorer with $1 goals (xG $2.$3), but the World Cup also rewarded quiet finishers and punished the wasteful — below, the contrast between what each of them"],
    [/^em (\d+) jogos \u2014 (\d+) viraram gol\. Cada uma carrega a posi\u00e7\u00e3o de todos os jogadores vis\u00edveis no momento do chute\. Clique e veja o que o atacante viu\.$/, "in $1 matches — $2 became goals. Each one carries the position of every player visible at the moment of the shot. Click and see what the striker saw."],
    [/^(.+) e (.+) jogaram a mesma partida por 120 minutos\. A (.+) trocou (.+) passes dentro do pr\u00f3prio time; a (.+), (.+)\. Uma teceu; a outra correu atr\u00e1s\. O placar foi (.+)\.$/, "$1 and $2 played the same match for 120 minutes. $3 exchanged $4 passes within their own side; $5, $6. One wove; the other chased. The score was $7."],
    [/^(.+) percorreu (.+) km em (\d+) jogos pela (.+)\. S\u00e3o (.+) km a cada 90 minutos, sustentados do primeiro jogo \u00e0 final \u2014 o motor de quem levantou a ta\u00e7a\.$/, "$1 covered $2 km in $3 matches for $4. That is $5 km every 90 minutes, sustained from the opening match to the final — the engine of the side that lifted the trophy."],
    [/^\(Fran\u00e7a\), (\d+) gols em 120 minutos e a ta\u00e7a decidida do ponto do p\u00eanalti\. Abaixo, cada gol com a fotografia exata do momento\.$/, "(France), $1 goals in 120 minutes and the trophy decided from the penalty spot. Below, each goal with the exact photograph of the moment."],
    [/^O meio-campo percorre (.+) m a mais por jogo que o atacante \u2014 mas o atacante faz (.+) m a mais em velocidade de sprint\.$/, "Midfielders cover $1 m more per match than forwards — but forwards do $2 m more at sprinting speed."],
    [/^(.+) km equivalem a (\d+)% de uma volta completa na Terra \u2014 percorridos por (.+) jogadores em pouco mais de um m\u00eas\.$/, "$1 km is $2% of a full lap around the Earth — covered by $3 players in a little over a month."],
    [/^(.+) pessoas já passaram pelos estádios — recorde absoluto de público em Copas\. O templo da vez:?$/, '$1 people have already passed through the stadiums — an all-time World Cup attendance record. The venue of the moment:'],
    [/^Jogador (\d+) \((.+)\) . (.+) min . (.+) km . vel\. máx (.+) km\/h . ataque sempre da esquerda para a direita$/, 'Player $1 ($2) — $3 min · $4 km · max speed $5 km/h · attacking left to right'],
    [/^(.+) jogou (\d+) partidas\. O tra\u00e7o mais forte \u00e9 (.+): (.+)% contra (.+)% da m\u00e9dia do torneio\.$/, "$1 played $2 matches. The strongest trait is $3: $4% against the tournament average of $5%."],
    [/^\u2014 territ\u00f3rios calculados em (\d+) instantes amostrados a cada 20 s de jogo\.$/, "— territories computed from $1 instants sampled every 20 s of play."],
    [/^(.+) das (.+) convoca\u00e7\u00f5es aparecem sem unidade e sem cidade\.$/, "$1 of $2 call-ups have no unit and no city."],
    [/^⏳ Torneio em andamento — retrato dos dados até (.+) \((.+)\)$/, "⏳ Tournament in progress — a snapshot of the data up to $1 ($2)"],
    [/^ataque \u2192 \u00b7 ter\u00e7o defensivo (\d+) \u00b7 m\u00e9dio (\d+) \u00b7 final (\d+)$/, "attack → · defensive third $1 · middle $2 · final $3"],
    [/^🏆 Torneio encerrado — (.+) campeã em (.+) · (.+) partidas$/, "🏆 Tournament over — $1 crowned champions on $2 · $3 matches"],
    [/^Mostrando (.+) de (.+) convoca\u00e7\u00f5es \u2014 filtrando por (.+)\.$/, "Showing $1 of $2 call-ups — filtered by $3."],
    [/^posse (\d+)% . (\d+) chutes \((\d+) no alvo\) . formação (.+)$/, 'possession $1% · $2 shots ($3 on target) · formation $4'],
    [/^(\d+) envolvimentos em passes completos$/, "$1 involvements in completed passes"],
    [/^Mostrando todas as (.+) convoca\u00e7\u00f5es\.$/, 'Showing all $1 call-ups.'],
    [/^venceu (.+)% \u00b7 empatou (.+)% \u00b7 perdeu (.+)%$/, "won $1% · drew $2% · lost $3%"],
    [/^ataque \u2192 \u00b7 (.+) press\u00f5es em (.+) jogos$/, "attack → · $1 pressures in $2 matches"],
    [/^(\d+) defensores vis\u00edveis no frame$/, "$1 defenders visible in the frame"],
    [/^\u00b7 (.+) passes na rede \u00b7 (\d+) liga\u00e7\u00f5es$/, "· $1 passes in the network · $2 links"],
    [/^Mostrando (.+) de (.+) convoca\u00e7\u00f5es\.$/, 'Showing $1 of $2 call-ups.'],
    [/^(.+) chutes \(p\u00eanaltis ocultos\)$/, "$1 shots (penalties hidden)"],
    [/^Mostrando (.+) de (.+) jogadores\.$/, "Showing $1 of $2 players."],
    [/^(.+) passes na rede, em média$/, "$1 passes in the network, on average"],
    [/^mediana (.+) · (.+) times-partida$/, "median $1 · $2 team-matches"],
    [/^(.+) contratados \u00b7 (.+) do total$/, '$1 hired · $2 of the total'],
    [/^As fases n\u00e3o somam 100%\.$/, "The phases do not add up to 100%."],
    [/^varia\u00e7\u00e3o t\u00edpica \u00b1(.+) pontos$/, "typical spread ±$1 points"],
    [/^(.+) \(mil R\$, escala log\)$/, '$1 (R$ thousand, log scale)'],
    [/^diferen\u00e7a de (.+) pontos$/, "a gap of $1 points"],
    [/^(.+) municípios . total (.+)$/, '$1 municipalities - total $2'],
    [/^Líder em Produção: (.+)$/, 'Production leader: $1'],
    [/^(.+)% contra (.+)% da m\u00e9dia$/, "$1% against the average of $2%"],
    [/^(.+) gols em (.+) partidas$/, '$1 goals in $2 matches'],
    [/^Ver s\u00f3 as (.+) maiores$/, "Show only the top $1"],
    [/^\u00b7 (.+) \u00b7 (\d+) gols de xG (\d+),(\d+)$/, "· $1 · $2 goals from xG $3.$4"],
    [/^Rede de passes de (.+)$/, "Passing network of $1"],
    [/^(.+) municípios . top (.+)$/, '$1 municipalities - top $2'],
    [/^gols em (.+) partidas$/, 'goals in $1 matches'],
    [/^\u00b7 (.+) \u00b7 (\d+) gol de xG (\d+),(\d+)$/, "· $1 · $2 goal from xG $3.$4"],
    [/^\u00b7 (.+) passes na rede$/, "· $1 passes in the network"],
    [/^coloca\u00e7\u00e3o de (.+) a (.+)$/, "rank from $1 to $2"],
    [/^(.+) \(t, escala log\)$/, '$1 (t, log scale)'],
    [/^(Mandante|Visitante) \u2014 (\d+) recupera\u00e7\u00f5es$/, "$1 — $2 recoveries"],
    [/^(Goleiro|Defesa|Meio|Ataque) · entrou depois$/, "$1 · came on later"],
    [/^(.+) j\u00e1 contratados$/, '$1 already hired'],
    [/^Menos tempo em (.+)$/, "Least time in $1"],
    [/^(.+) desvios-padr\u00e3o$/, "$1 standard deviations"],
    [/^(.+) \((.+), escala log\)$/, "$1 ($2, log scale)"],
    [/^Ver todas as (.+) (unidades|\u00e1reas|sub\u00e1reas|op\u00e7\u00f5es|cargos|situa\u00e7\u00f5es|cidades)$/, "See all $1 $2"],
    [/^([+\-\u2212][\d.,]+%) vs safra ant\.$/, "$1 vs prev. season"],
    [/^([\d.,]+%) vs safra ant\.$/, "$1 vs prev. season"],
    [/^(\d+) envolvimentos$/, "$1 involvements"],
    [/^Mais tempo em (.+)$/, "Most time in $1"],
    [/^Mostrar mais (.+)$/, "Show $1 more"],
    [/^(.+) nos p\u00eanaltis$/, "$1 on penalties"],
    [/^(.+) \(escala log\)$/, '$1 (log scale)'],
    [/^(.+) \(escala log\)$/, "$1 (log scale)"],
    [/^(.+) convoca\u00e7\u00f5es$/, '$1 call-ups'],
    [/^(.+) - (.+) - Global$/, '$1 — $2 — Global'],
    [/^(.+) municípios$/, '$1 municipalities'],
    [/^(.+) habitantes$/, '$1 inhabitants'],
    [/^Líder em (.+): (.+)$/, '$1 leader: $2'],
    [/^lota\u00e7\u00e3o em (.+)$/, "posted in $1"],
    [/^(.+) jogadores\.$/, "$1 players."],
    [/^mostrando (.+)$/, 'showing $1'],
    [/^(.+) capítulos$/, '$1 chapters'],
    [/^(.+)% em m\u00e9dia$/, "$1% on average"],
    [/^(.+) fluxos . (.+)$/, '$1 flows - $2'],
    [/^(.+) \u00b7 op\u00e7\u00e3o (\d+)$/, "$1 · option $2"],
    [/^Ordenar: (.+)$/, "Sort: $1"],
    [/^Jogador (\d+) (\U0001f9e4)$/, "Player $1 $2"],
    [/^Como ler\.$/, "How to read it."],
    [/^(.+)% do jogo$/, "$1% of the match"],
    [/^\u00b7 op\u00e7\u00e3o (\d+)$/, "· option $1"],
    [/^unidade (.+)$/, "unit $1"],
    [/^(\d+) avan\u00e7os$/, "$1 carries"],
    [/^(.+) \(Total\)$/, '$1 (total)'],
    [/^Jogador (\d+)$/, "Player $1"],
    [/^aos (\d+) min$/, "at $1 min"],
    [/^(.+) cabe\u00e7as$/, "$1 head"],
    [/^Maior: (.+)$/, 'Largest: $1'],
    [/^(\d+),(\d+) de xG$/, "$1.$2 xG"],
    [/^(\d+) fontes$/, "$1 sources"],
    [/^(\d+)\+ jogos$/, "$1+ matches"],
    [/^(.+) mil R\$$/, "$1 R$ thousand"],
    [/^(.+) vagas$/, '$1 posts'],
    [/mil R\$/, 'R$ thousand'],
    [/^op\u00e7\u00e3o (\d+)$/, "option $1"],
    [/^xG \u2265 (\d+),(\d+)$/, "xG ≥ $1.$2"],
    [/^(.+) anos$/, '$1 years'],
    [/^(.+) em (\d[\d.,]*) (jogos|partidas)$/, '$1 in $2 matches'],
    [/^(.+) milh(?:ao|ões|ão)$/, '$1M'],
    [/^(\d+),(\d+) a (\d+),(\d+)$/, "$1.$2 to $3.$4"],
    [/^· nº (\d+)$/, "· no. $1"],
    [/^(Noruega|Argentina|França|Brasil|Portugal|Espanha|Inglaterra|Alemanha|Holanda|Bélgica|Croácia|Marrocos|Japão|México|Canadá|Uruguai|Colômbia|Itália) de ([A-ZÀ-Ú][\wÀ-ú]+)$/, "$2's $1"],
    [/^([A-Z]{2} [+−-][\d.,]+) mil$/, '$1k'],
    [/^(.+) mil$/, '$1k'],
    [/^(\d+) de (\d+)$/, "$1 of $2"],
    [/^(Ataque|Defesa|Profundidade|Controle|Disciplina|Idade|Calend\u00e1rio) \((\d+)%\)$/, "$1 ($2%)"],
    [/^(.+) \((\d+)\)$/, "$1 ($2)"],
    [/^Dos$/, 'Of the'],
    [/^(Analista|Pesquisador|T\u00e9cnico|Assistente) \u00b7 (.+)$/, "$1 · $2"],
    [/^(.+) · ([\d.,]+)$/, "$1 · $2"],
    [/^› (.+)$/, '› $1'],
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

  /* Numero em formato pt-BR (1.234,56) para o formato ingles (1,234.56).
     Roda SO no caminho de fallback do tr(): os valores escritos a mao no
     DICT e nas RULES ja estao em ingles ("10,401 players") e uma segunda
     passada os corromperia. */
  var NUM_PT = /\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+,\d+/g;
  function numeros(s) {
    return s.replace(NUM_PT, function (m) {
      return m.replace(/\./g, '\u0001').replace(/,/g, '.').replace(/\u0001/g, ',');
    });
  }


  /* Data numerica pt-BR (10/07/2026 ou 30/06) para "10 Jul 2026" / "30 Jun".
     Mes fora de 1..12 e sinal de que nao e data (placar, proporção): fica quieto. */
  var MES_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var DATA_PT = /\b(\d{2})\/(\d{2})(?:\/(\d{4}))?\b/g;
  function datas(s) {
    return s.replace(DATA_PT, function (todo, d, mes, ano) {
      var i = +mes - 1;
      if (i < 0 || i > 11 || +d < 1 || +d > 31) return todo;
      return d + ' ' + MES_EN[i] + (ano ? ' ' + ano : '');
    });
  }

  /* Formato de saida: data antes de numero, para o ano nao virar milhar. */
  function formatos(s) { return numeros(datas(s)); }

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
            if (Object.prototype.hasOwnProperty.call(DICT, g)) return DICT[g];
            // o trecho capturado vem do texto em portugues, entao um numero
            // ali esta em formato pt-BR: 6.393.887 -> 6,393,887
            return formatos(g);
          });
        });
        if (out !== k) return out;
      }
    }
    return null;
  }


  /* Substituicao PARCIAL: so termos inequivocos, aplicados quando o texto
     inteiro nao bate no dicionario nem nas regras. Cada par usa limite de
     palavra para nao atingir nome proprio. Ordem importa (mais longo antes). */
  var PARTIALS = [
    ["Bósnia e Herzegovina", "Bosnia and Herzegovina"],
    ["Tchéquia", "Czechia"],
    ["Catar", "Qatar"],
    ["Estados Unidos", "United States"],
    ["Nova Zelândia", "New Zealand"],
    ["Costa Rica", "Costa Rica"],
    ["Eslovênia", "Slovenia"],
    ["Eslováquia", "Slovakia"],
    ["Ucrânia", "Ukraine"],
    ["Irlanda", "Ireland"],
    ["Turquia", "Turkey"],
    ["Congo", "DR Congo"],
    ["defendeu", "saved"],
    ["sofreu", "conceded"],
    ["marcou", "scored"],
    ["finalizou", "shot"],
    ["Alemanha Ocidental", "West Germany"],
    ["Índias Holandesas", "Dutch East Indies"],
    ["Alemanha Oriental", "East Germany"],
    ["Irlanda do Norte", "Northern Ireland"],
    ["Tchecoslováquia", "Czechoslovakia"],
    ["União Soviética", "Soviet Union"],
    ["Coreia do Norte", "North Korea"],
    ["Costa do Marfim", "Ivory Coast"],
    ["Arábia Saudita", "Saudi Arabia"],
    ["País de Gales", "Wales"],
    ["Coreia do Sul", "South Korea"],
    ["África do Sul", "South Africa"],
    ["Nova Zelândia", "New Zealand"],
    ["Uzbequistão", "Uzbekistan"],
    ["Iugoslávia", "Yugoslavia"],
    ["fevereiro", "February"],
    ["Fevereiro", "February"],
    ["Jordânia", "Jordan"],
    ["setembro", "September"],
    ["novembro", "November"],
    ["dezembro", "December"],
    ["Setembro", "September"],
    ["Novembro", "November"],
    ["Dezembro", "December"],
    ["Escócia", "Scotland"],
    ["janeiro", "January"],
    ["outubro", "October"],
    ["Janeiro", "January"],
    ["Outubro", "October"],
    ["público", "attendance"],
    ["Panamá", "Panama"],
    ["agosto", "August"],
    ["Agosto", "August"],
    ["março", "March"],
    ["abril", "April"],
    ["junho", "June"],
    ["julho", "July"],
    ["Março", "March"],
    ["Abril", "April"],
    ["Junho", "June"],
    ["Julho", "July"],
    ["Dendê", "Oil palm"],
    ["maio", "May"],
    ["Maio", "May"],
    ["Mandante", "Home"],
    ["Visitante", "Away"],
    ["mandante", "home"],
    ["visitante", "away"],
    ["Jogador", "Player"],
    ["jogador", "player"],
    ["recuperações", "recoveries"],
    ["terço defensivo", "defensive third"],
    ["Copa do Mundo", "World Cup"],
    ["Copas do Mundo", "World Cups"],
    ["pênaltis", "penalties"],
    ["pênalti", "penalty"],
    ["pên", "pens"],
    ["pé esquerdo", "left foot"],
    ["pé direito", "right foot"],
    ["cabeça", "header"],
    ["falta", "free kick"],
    ["Irã", "Iran"],
    ["Sérvia", "Serbia"],
    ["Nota da Copa", "World Cup Score"],
    ["rank FIFA pré-Copa", "pre-tournament FIFA rank"],
    ["pré-Copa", "pre-tournament"],
    ["adversário médio", "average opponent"],
    ["recorde absoluto", "an all-time record"],
    ["pessoas já passaram pelos estádios", "people have already passed through the stadiums"],
    ["estádios", "stadiums"],
    ["estádio", "stadium"],
    ["calendário", "schedule"],
    ["Ocorrências", "Occurrences"],
    ["ocorrências", "occurrences"],
    ["do 1º time", "for team 1"],
    ["do 2º time", "for team 2"],
    ["Copas", "World Cups"],
    ["Copa", "World Cup"],
    ["cartões", "cards"],
    ["cartão", "card"],
    ["artilheiro", "top scorer"],
    ["assistências", "assists"],
    ["chutes", "shots"],
    ["chute", "shot"],
    ["defesas", "saves"],
    ["goleiro", "goalkeeper"],
    ["campeão", "champion"],
    ["campeões", "champions"],
    ["título", "title"],
    ["títulos", "titles"],
    ["Fase de grupos", "Group stage"],
    ["Disputa de 3º lugar", "Third-place play-off"],
    ["16-avos de final", "Round of 32"],
    ["16-avos", "Round of 32"],
    ["Oitavas de final", "Round of 16"],
    ["Oitavas", "Round of 16"],
    ["Quartas de final", "Quarter-finals"],
    ["Quartas", "Quarter-finals"],
    ["Semifinais", "Semi-finals"],
    ["a definir", "to be decided"],
    ["África do Sul", "South Africa"],
    ["Coreia do Sul", "South Korea"],
    ["Coreia do Norte", "North Korea"],
    ["Costa do Marfim", "Ivory Coast"],
    ["País de Gales", "Wales"],
    ["Irlanda do Norte", "Northern Ireland"],
    ["Arábia Saudita", "Saudi Arabia"],
    ["Estados Unidos", "United States"],
    ["Nova Zelândia", "New Zealand"],
    ["México", "Mexico"],
    ["Alemanha", "Germany"],
    ["Espanha", "Spain"],
    ["França", "France"],
    ["Inglaterra", "England"],
    ["Itália", "Italy"],
    ["Bélgica", "Belgium"],
    ["Croácia", "Croatia"],
    ["Suécia", "Sweden"],
    ["Suíça", "Switzerland"],
    ["Holanda", "Netherlands"],
    ["Uruguai", "Uruguay"],
    ["Japão", "Japan"],
    ["Marrocos", "Morocco"],
    ["Canadá", "Canada"],
    ["Noruega", "Norway"],
    ["Dinamarca", "Denmark"],
    ["Polônia", "Poland"],
    ["Áustria", "Austria"],
    ["Turquia", "Turkey"],
    ["Grécia", "Greece"],
    ["Escócia", "Scotland"],
    ["Irlanda", "Ireland"],
    ["Rússia", "Russia"],
    ["Colômbia", "Colombia"],
    ["Equador", "Ecuador"],
    ["Peru", "Peru"],
    ["Chile", "Chile"],
    ["Paraguai", "Paraguay"],
    ["Bolívia", "Bolivia"],
    ["Venezuela", "Venezuela"],
    ["Nigéria", "Nigeria"],
    ["Camarões", "Cameroon"],
    ["Senegal", "Senegal"],
    ["Argélia", "Algeria"],
    ["Tunísia", "Tunisia"],
    ["Egito", "Egypt"],
    ["Gana", "Ghana"],
    ["Austrália", "Australia"],
    ["Brasil", "Brazil"],
    ["torcedores", "fans"],
    ["árbitro", "referee"],
    ["formações", "formations"],
    ["formação", "formation"],
    ["finalizações", "shots"],
    ["interceptações", "interceptions"],
    ["prorrogação", "extra time"],
    ["pênaltis", "penalties"],
    ["jogadores", "players"],
    ["jogador", "player"],
    ["partidas", "matches"],
    ["partida", "match"],
    ["seleções", "teams"],
    ["seleção", "team"],
    ["Seleções", "Teams"],
    ["Seleção", "Team"],
    ["jogos", "matches"],
    ["jogo", "match"],
    ["gols", "goals"],
    ["gol", "goal"],
    ["anos", "years"],
    ["ano", "year"],
    ["posse", "possession"],
    ["média", "average"],
    ["Aos", "At"],
    ["divide a ponta com", "shares the lead with"],
    ["vitórias", "wins"],
    ["empates", "draws"],
    ["derrotas", "defeats"],
    ["desde", "since"],
    ["rodada", "round"],
    ["grupo", "group"]
  ];

  function parcial(k) {
    var out = k, mudou = false;
    for (var i = 0; i < PARTIALS.length; i++) {
      var re = new RegExp('(^|[^0-9A-Za-z\u00c0-\u024f])' + PARTIALS[i][0] + '(?![0-9A-Za-z\u00c0-\u024f])', 'g');
      var novo = out.replace(re, '$1' + PARTIALS[i][1]);
      if (novo !== out) { out = novo; mudou = true; }
    }
    return mudou ? out : null;
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
    // nada bateu inteiro: substituicao parcial + numero em formato ingles
    var p = parcial(k);
    var out = formatos(p === null ? k : p);
    return out === k ? null : out;
  }

  function walk(root) {
    var it = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'PRE' || tag === 'CODE'
            || tag === 'SAMP' || tag === 'KBD' || p.closest && p.closest('pre,code')
            || p.dataset && p.dataset.noI18n)
          return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n, changed = 0;
    while ((n = it.nextNode())) {
      // ja tratamos este no e ninguem mexeu nele desde entao: pular.
      // Sem isso a normalizacao de numero rodaria de novo a cada passada
      // periodica e corromperia o que ela mesma escreveu (1.234 -> 1,234 -> 1.234).
      if (n.__opFeito === n.nodeValue) continue;
      var t = tr(n.nodeValue);
      if (t !== null && t !== n.nodeValue.replace(/\s+/g, ' ').trim()) {
        // preserva o espaçamento original em volta do texto
        var m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
        n.nodeValue = m[1] + t + m[3];
        changed++;
      }
      n.__opFeito = n.nodeValue;
    }
    // atributos visiveis
    if (root.querySelectorAll) {
      ['title', 'placeholder', 'aria-label', 'alt'].forEach(function (attr) {
        root.querySelectorAll('[' + attr + ']').forEach(function (el) {
          var v = el.getAttribute(attr), t = v && tr(v);
          if (t && t !== v) el.setAttribute(attr, t);
        });
      });
    }
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
      '#op-lang-sw{z-index:99999;display:inline-flex;gap:1px;vertical-align:middle;' +
      'font:600 11px/1 ui-monospace,Consolas,monospace;background:rgba(10,13,20,.82);' +
      'border:1px solid rgba(255,255,255,.22);border-radius:99px;padding:3px;' +
      'backdrop-filter:blur(6px);flex:none}' +
      '#op-lang-sw a{padding:5px 10px;border-radius:99px;color:#b9c3d6;text-decoration:none}' +
      '#op-lang-sw a.on{background:#eef2f7;color:#0b0e13}' +
      '#op-lang-sw.solto{position:fixed}' +
      '#op-lang-sw.no-nav{margin-left:auto}';
    document.head.appendChild(css);

    var d = document.createElement('div');
    d.id = 'op-lang-sw';
    d.innerHTML =
      '<a href="?lang=pt" class="' + (lang === 'pt' ? 'on' : '') + '">PT</a>' +
      '<a href="?lang=en" class="' + (lang === 'en' ? 'on' : '') + '">EN</a>';

    var trilha = document.querySelector('.bc-trail, .crumb, .trail');
    var barra = trilha && trilha.closest('nav');

    if (barra) {
      // pagina-artigo: vira o ultimo item da barra, como o seletor .lang do site
      d.className = 'no-nav';
      barra.appendChild(d);
      return;
    }
    // mapa: fixo ao lado da trilha, porque os quatro cantos estao ocupados
    d.className = 'solto';
    document.body.appendChild(d);
    posicionar(d, trilha);
    addEventListener('resize', function () { posicionar(d, trilha); });
  }

  function posicionar(d, trilha) {
    // Mede o CONTEUDO da trilha, nao o ultimo <a>. Em TSE e USDA a trilha
    // termina em texto puro ("> Historico eleitoral (TSE)"), entao ancorar no
    // ultimo link jogava o seletor em cima desse texto. O Range pega a extensao
    // visual real, inclusive de nos de texto, mesmo quando o container tem
    // largura computada 0 — que e o caso dos paineis absolutos dos mapas.
    var r = null;
    if (trilha) {
      try {
        var faixa = document.createRange();
        faixa.selectNodeContents(trilha);
        r = faixa.getBoundingClientRect();
      } catch (e) { r = trilha.getBoundingClientRect(); }
    }
    if (!r || (!r.width && !r.height)) {
      d.style.left = '14px'; d.style.top = ''; d.style.bottom = '14px';
      return;
    }
    d.style.bottom = '';
    d.style.left = Math.round(r.right + 14) + 'px';
    d.style.top = Math.round(r.top + (r.height - d.offsetHeight) / 2) + 'px';
  }





  /* ------------------------------------------------------------- execução */
  /* título da aba: traduz o que estiver antes do separador e mantém a marca */
  var TITLES = {
    "O Jeito de Jogar — as 17 fases da Copa 2026": "The Way They Played — the 17 phases of the 2026 World Cup",
    "A Teia — as redes de passe da Copa 2026": "The Web — the passing networks of the 2026 World Cup",
    "O Corpo da Copa — o esforço físico da Copa 2026": "The Body of the World Cup — the physical effort of 2026",
    "Fontes de Dados de Futebol — Comparativo": "Football Data Sources — a comparison",
    "Copa 2026 em Números — dados reais": "The 2026 World Cup in Numbers — real data",
    "A Copa em Números — 1930–2018": "The World Cup in Numbers — 1930–2018",
    "Copa 2022 sob o Microscópio — StatsBomb 360": "The 2022 World Cup Under the Microscope — StatsBomb 360",
    "Laboratório da Partida — Metrica Sports": "Match Lab — Metrica Sports",
    "Onda da Partida — retrato imersivo": "Wave of the Match — an immersive portrait",
    "Convocações da Embrapa — concurso 2024/25": "Embrapa call-ups — 2024/25 civil service exam",
    "Futebol · Análises & Data Portraits — Otávio Pelego": "Football · Analyses & Data Portraits — Otávio Pelego",
    "Como ler — Onda da Partida": "How to read — Wave of the Match",
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

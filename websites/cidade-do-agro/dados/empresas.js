/* =========================================================
   PARCEIROS DA CIDADE DO AGRO
   Fonte: posts do Instagram @cidadedoagro_ (coletados em set/2026).
   Para adicionar uma empresa: copie um bloco, ajuste os campos e
   coloque o logo em assets/logos/ e rode: python ferramentas/publicar.py

   Campos:
     id         identificador curto (sem espaço/acento)
     nome       nome da empresa
     instagram  @ da empresa, se aparece na legenda (senão null)
     area       área de atuação (vira filtro na página)
     selo       ícone no topo do post: 'diamante' ou 'estrela' (medalha dourada)
                — parecem ser categorias de parceria, nomes a confirmar
     post       número do post no perfil
     frase      frase de destaque da arte do post
     texto      texto de apoio da arte do post
     legenda    legenda completa do post
     logo, arte caminhos dos arquivos
   ========================================================= */
window.CIDADE_DO_AGRO = {
  totalOficiais: 33,          // empresas oficiais anunciadas nos posts (set/2026)
  atualizadoEm: '2026-09-18',
};

window.EMPRESAS = [
  {
    id: 'corteva',
    nome: 'Corteva Agriscience',
    instagram: 'cortevabr',
    area: 'Proteção de cultivos',
    selo: 'diamante',
    post: 2,
    frase: 'Quem protege o cultivo, protege o futuro.',
    texto: 'A Corteva Agriscience entendeu que proteger o futuro do agronegócio gaúcho começa com estar presente onde ele está sendo construído.',
    legenda: 'A @cortevabr escolheu o Rio Grande do Sul não só como mercado, escolheu como casa. Aqui, onde o campo é cultura, identidade e sustento, a Corteva constrói junto com o produtor um legado que vai muito além da safra.\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Corteva #AgroGaúcho #MetadeSul #RioGrandeDoSul',
    logo: 'assets/logos/corteva.png',
    arte: 'assets/posts/post-02.png',
  },
  {
    id: 'fronteira-agro',
    nome: 'Fronteira Agro',
    instagram: null,
    area: 'Revendas e insumos',
    selo: 'diamante',
    post: 3,
    frase: 'A Fronteira Agro conhece esta terra porque faz parte dela.',
    texto: 'Com produtos e serviços, recebimento de grãos, e com presença de verdade. Parceria que faz a diferença.',
    legenda: '30 anos não se resumem a números. Se resumem à presença. 🤝\n\nA Fronteira Agro está na Metade Sul do Rio Grande do Sul não como fornecedora — mas como parceira. Com insumos, assistência técnica e o compromisso de quem escolheu ficar ao lado do produtor rural, safra após safra.\n\nQuem conhece a terra, sabe como cuidar dela.\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #FronteiraAgro #AgroGaúcho #MetadeSul #AssistênciaTécnica',
    logo: 'assets/logos/fronteira-agro.png',
    arte: 'assets/posts/post-03.png',
  },
  {
    id: 'bioagreen',
    nome: 'Bioagreen',
    instagram: 'bioagreenagrociencia',
    area: 'Biológicos',
    selo: 'diamante',
    post: 4,
    frase: 'Uma empresa gaúcha, em casa, construindo legado.',
    texto: 'Nosso compromisso é com a agricultura, testando e aperfeiçoando constantemente nosso portfólio entregando para o produtor as melhores soluções.',
    legenda: 'Nasceu aqui. Cresceu aqui. E segue inovando aqui. 🧬🌾\n\nA @bioagreenagrociencia é prova de que ciência e campo andam juntos quando a empresa entende de onde vem. Com soluções biológicas desenvolvidas para a realidade do produtor gaúcho, a Bioagreen não apenas entrega tecnologia, ela entrega pertencimento.\n\nPorque quem é daqui, sabe o que o campo precisa.\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #BiológicosNoAgro #AgroGaúcho #InovaçãoNoCampo #MetadeSul',
    logo: 'assets/logos/bioagreen.png',
    arte: 'assets/posts/post-04.png',
  },
  {
    id: 'nachurs',
    nome: 'Nachurs',
    instagram: null,
    area: 'Nutrição de cultivos',
    selo: 'diamante',
    post: 5,
    frase: 'Uma empresa que não apenas entende de nutrição de cultivos, ela ajudou a inventar esse conceito.',
    texto: 'Tecnologia de nutrição de precisão com endereço fixo na Metade Sul do Rio Grande do Sul.',
    legenda: '"Uma empresa que não apenas entende de nutrição de cultivos, ela ajudou a inventar esse conceito."\n\nPioneira em fertilizantes líquidos, a marca que ajudou a escrever o manual da nutrição de cultivos tem endereço fixo na Metade Sul do Rio Grande do Sul — e segue entregando o que sempre entregou: ciência aplicada onde o produtor mais precisa.\n\nNão é novidade. É tradição com tecnologia. 🌱\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Nachurs #NutriçãoDePrecisão #FertilizantesLíquidos #AgroGaúcho',
    logo: 'assets/logos/nachurs.png',
    arte: 'assets/posts/post-05.png',
  },
  {
    id: 'planfer',
    nome: 'Planfer',
    instagram: null,
    area: 'Revendas e insumos',
    selo: 'diamante',
    post: 6,
    frase: 'Uma empresa que não apenas conhece o produtor gaúcho. Ela caminha ao lado dele, safra após safra.',
    texto: 'A Planfer atende mais de 20 municípios em toda região sul do Rio Grande do Sul, sendo uma aliada do produtor rural, do plantio ao pós-colheita.',
    legenda: '🌾 PLANFER\n"Uma empresa que não apenas conhece o produtor gaúcho. Ela caminha ao lado dele, safra após safra."\n\nNão basta conhecer o campo. É preciso estar nele. 👣🌿\n\nA Planfer está presente em mais de 20 municípios da região sul do Rio Grande do Sul levando insumos, assistência e a certeza de que o produtor nunca está sozinho — do plantio ao pós-colheita.\n\nPorque parceria de verdade não termina na venda. Ela começa nela.\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Planfer #AgroGaúcho #MetadeSul #InsumoAgricola',
    logo: 'assets/logos/planfer.png',
    arte: 'assets/posts/post-06.png',
  },
  {
    id: 'elo-agronegocios',
    nome: 'Elo Agronegócios',
    instagram: null,
    area: 'Revendas e insumos',
    selo: 'diamante',
    post: 7,
    frase: 'Elo Agronegócios é especializada em insumos para as culturas que definem a Metade Sul: arroz irrigado, soja, milho e pastagens.',
    texto: 'Uma empresa que não só conhece o campo daqui — ela faz parte dele.',
    legenda: 'ELO AGRONEGÓCIOS\n\n"Uma empresa que não só conhece o campo daqui, ela faz parte dele."\n\nArroz, soja, milho, pastagens. As culturas que definem a Metade Sul têm um parceiro à altura. 🌾\n\nA Elo Agronegócios é especializada nas culturas que moldam a identidade do campo gaúcho — e faz isso com a profundidade de quem não apenas atende o produtor, mas vive na mesma terra que ele.\n\nElo. O nome já diz tudo: conexão, confiança, campo. 🤝\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #EloAgronegócios #AgroGaúcho #MetadeSul #ArrozIrrigado',
    logo: 'assets/logos/elo-agronegocios.png',
    arte: 'assets/posts/post-07.png',
  },
  {
    id: 'agrofel',
    nome: 'Agrofel',
    instagram: null,
    area: 'Revendas e insumos',
    selo: 'diamante',
    post: 8,
    frase: 'Com você em todo o tempo e agora, também aqui. 🌾',
    texto: 'Do plantio à colheita, em mais de 50 unidades espalhadas pelo Rio Grande do Sul, construindo confiança.',
    legenda: 'Quase cinco décadas. Mais de 50 unidades. Uma só missão. 🌾\n\nA Agrofel construiu algo que vai muito além de uma rede de lojas no Rio Grande do Sul: construiu confiança. Do plantio à colheita, do produtor à família, a Agrofel é aquela presença que o campo gaúcho já conhece.\n\nPorque quem cuida do campo, cuida de tudo. 💚\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Agrofel #AgroGaúcho #RioGrandeDoSul #InsumoAgricola',
    logo: 'assets/logos/agrofel.png',
    arte: 'assets/posts/post-08.png',
  },
  {
    id: 'basf',
    nome: 'BASF',
    instagram: null,
    area: 'Proteção de cultivos',
    selo: 'diamante',
    post: 9,
    frase: 'Juntos pelo seu legado. Esse é o compromisso que a BASF assume com cada agricultor, em cada safra, em cada nova geração.',
    texto: 'Trazendo ciência de ponta para o agronegócio!',
    legenda: 'Juntos pelo seu legado. Esse é o compromisso que a BASF assume com cada agricultor, em cada safra, em cada nova geração e é exatamente esse espírito que ela traz para a Cidade do Agro.\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #AgroGaúcho #RioGrandeDoSul #InsumoAgricola #ProduçãoRural',
    logo: 'assets/logos/basf.png',
    arte: 'assets/posts/post-09.png',
  },
  {
    id: 'real-agro',
    nome: 'Real Agro',
    instagram: null,
    area: 'Consultoria e crédito rural',
    selo: 'estrela',
    post: 10,
    frase: 'Consultoria e assessoria agropecuária em Pelotas e região, sempre ao lado do produtor, do planejamento à execução.',
    texto: 'Atua em crédito rural, consultoria financeira, seguro agrícola e assistência técnica.',
    legenda: '🌾 Real Agro\n\nReferência em consultoria e assessoria agropecuária em Pelotas e região, a Real Agro atua em crédito rural, consultoria financeira, seguro agrícola e assistência técnica — sempre ao lado do produtor, do planejamento à execução.\nUma empresa que constrói relação de confiança com o produtor, se conecta com um ecossistema que nasceu com a mesma vocação: presença contínua, e não pontual.\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Agrofel #AgroGaúcho #RioGrandeDoSul #InsumoAgricola',
    logo: 'assets/logos/real-agro.png',
    arte: 'assets/posts/post-10.png',
  },
  {
    id: 'inquima',
    nome: 'Inquima',
    instagram: null,
    area: 'Nutrição de cultivos',
    selo: 'diamante',
    post: 11,
    frase: 'Mais do que produtos, a Inquima oferece serviços de excelência em aplicação e nutrição vegetal!',
    texto: 'O jeito eficiente de fazer agricultura!',
    legenda: 'INQUIMA\n\nMais do que produtos, a Inquima oferece serviços de excelência em aplicação e nutrição vegetal, com o objetivo de auxiliar o produtor a alcançar o máximo potencial dos seus cultivos!\n\n📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#InovaçãoNoCampo #aplicação #cidadedoagro',
    logo: 'assets/logos/inquima.png',
    arte: 'assets/posts/post-11.png',
  },
  {
    id: 'cmpc',
    nome: 'CMPC',
    instagram: null,
    area: 'Florestal',
    selo: 'diamante',
    post: 12,
    frase: null,
    texto: 'O post traz só o logo; os temas marcados são floresta, ILPF (integração lavoura-pecuária-floresta), carbono e agricultura.',
    legenda: 'cmpc\n\n#floresta #ilpf #carbono #agricultura',
    logo: 'assets/logos/cmpc.png',
    arte: 'assets/posts/post-12.png',
  },
  {
    id: 'fmc',
    nome: 'FMC',
    instagram: null,
    area: 'Proteção de cultivos',
    selo: 'estrela',
    post: 13,
    frase: 'Empresa de ciências agrícolas, ligada à história do agronegócio, comprometida com as necessidades do campo.',
    texto: 'Soluções para proteção de cultivos (herbicidas, inseticidas, fungicidas, biológicos e tratamento de sementes) em soja, milho, arroz e trigo.',
    legenda: 'FMC\nMultinacional de referência em soluções para proteção de cultivos herbicidas, inseticidas, fungicidas, biológicos e tratamento de sementes, a FMC atua junto a diversas culturas estratégicas, como soja, milho, arroz e trigo. 📍 Cidade do Agro\n👉 Siga: @cidadedoagro_\n\n#CidadeDoAgro #Agrofel #AgroGaúcho #RioGrandeDoSul #InsumoAgricola',
    logo: 'assets/logos/fmc.png',
    arte: 'assets/posts/post-13.png',
  },
];

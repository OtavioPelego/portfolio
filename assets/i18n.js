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
    /* ---------- navegação / trilha ---------- */
    'Laboratório': 'Lab',
    'Brasil de Lupa': 'Brazil Under the Lens',
    'Futebol': 'Football',
    'Como ler': 'How to read',
    'Fontes de dados': 'Data sources',
    'voltar': 'back',
    'início': 'home',

    /* ---------- controles comuns dos mapas 3D ---------- */
    'Altura': 'Height',
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
  function tr(s) {
    // normaliza espaços especiais (&nbsp;) antes de comparar
    var k = s.replace(/ /g, ' ').trim();
    return Object.prototype.hasOwnProperty.call(DICT, k) ? DICT[k] : null;
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
      if (t !== null && t !== n.nodeValue.trim()) {
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
  function apply() {
    if (lang !== 'en') return;
    document.documentElement.lang = 'en';
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
    [400, 1200, 3000].forEach(function (ms) { setTimeout(function () { walk(document.body); }, ms); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

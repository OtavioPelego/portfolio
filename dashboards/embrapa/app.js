/* ============================================================
   Painel de convocações da Embrapa
   Tudo roda no navegador sobre window.DADOS_EMBRAPA (data/dados.js).
   ============================================================ */
(() => {
  'use strict';

  const DADOS = window.DADOS_EMBRAPA;
  const $ = (sel) => document.querySelector(sel);

  if (!DADOS || !Array.isArray(DADOS.registros)) {
    document.body.insertAdjacentHTML('afterbegin',
      '<p style="padding:24px;color:#e0554e">Não consegui carregar os dados do painel.</p>');
    return;
  }

  // Ordem fixa dos cargos: é a hierarquia do plano de carreira, e também a ordem
  // em que as cores categóricas foram validadas. Não muda com os filtros.
  const CARGOS = ['Pesquisador', 'Analista', 'Técnico', 'Assistente'];

  // Os três desfechos, na ordem em que fazem sentido ler.
  const DESFECHOS = [
    { chave: 'efetivado',    rotulo: 'Já contratado',  cor: 'var(--ok)' },
    { chave: 'em andamento', rotulo: 'Em andamento',   cor: 'var(--atencao)' },
    { chave: 'saiu',         rotulo: 'Saiu do processo', cor: 'var(--grave)' },
  ];

  const LIMITE_PAGINA = 100;

  /* ---------- utilidades ---------- */

  // Busca precisa ignorar acento e caixa: quem procura "jose" tem que achar "JOSÉ".
  // NFD separa a letra do acento; o range abaixo é o bloco de marcas combinantes.
  const achatar = (s) => (s || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  const numero = (n) => n.toLocaleString('pt-BR');

  const porcento = (parte, todo) =>
    todo ? (parte / todo * 100).toFixed(parte / todo < 0.1 ? 1 : 0) : '0';

  const escapar = (s) => (s || '').replace(/[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- preparo dos dados ---------- */

  // Guardamos uma versão achatada do nome em cada registro para não normalizar
  // 1.125 nomes a cada tecla digitada.
  const REGISTROS = DADOS.registros.map((r) => ({ ...r, _nome: achatar(r.nome) }));

  const filtros = {
    nome: '', cargo: '', area: '', subarea: '', situacao: '',
    modalidade: '', unidade: '', lotacao: '', opcao: '',
    colMin: null, colMax: null,
  };

  let ordenacao = { campo: 'posicao', dir: 'asc' };
  let mostrando = LIMITE_PAGINA;

  /* ---------- filtragem ---------- */

  // Aplica todos os filtros, menos o que estiver em `exceto`. Isso serve para
  // duas coisas: filtrar de fato (exceto = null) e montar as opções de cada
  // select levando em conta os OUTROS filtros (busca facetada), de modo que o
  // usuário nunca escolha uma combinação que resulte em zero linhas.
  function filtrar(exceto) {
    const termos = filtros.nome ? achatar(filtros.nome).split(/\s+/).filter(Boolean) : [];

    return REGISTROS.filter((r) => {
      if (exceto !== 'nome' && termos.length &&
          !termos.every((t) => r._nome.includes(t))) return false;
      if (exceto !== 'cargo' && filtros.cargo && r.cargo !== filtros.cargo) return false;
      if (exceto !== 'area' && filtros.area && r.area !== filtros.area) return false;
      if (exceto !== 'subarea' && filtros.subarea && r.subarea !== filtros.subarea) return false;
      if (exceto !== 'situacao' && filtros.situacao && r.situacao !== filtros.situacao) return false;
      if (exceto !== 'modalidade' && filtros.modalidade && r.modalidade !== filtros.modalidade) return false;
      if (exceto !== 'unidade' && filtros.unidade && r.unidade !== filtros.unidade) return false;
      if (exceto !== 'lotacao' && filtros.lotacao && r.lotacao !== filtros.lotacao) return false;
      if (exceto !== 'opcao' && filtros.opcao && r.opcao !== filtros.opcao) return false;

      if (exceto !== 'colocacao') {
        if (filtros.colMin != null && (r.posicao == null || r.posicao < filtros.colMin)) return false;
        if (filtros.colMax != null && (r.posicao == null || r.posicao > filtros.colMax)) return false;
      }
      return true;
    });
  }

  const contar = (lista, campo) => {
    const mapa = new Map();
    for (const r of lista) {
      const v = r[campo];
      if (v) mapa.set(v, (mapa.get(v) || 0) + 1);
    }
    return mapa;
  };

  const maiores = (mapa, n) =>
    [...mapa.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'pt-BR')).slice(0, n);

  /* ---------- selects ---------- */

  const SELECTS = [
    { id: '#f-cargo', chave: 'cargo', campo: 'cargo', todos: 'Todos os cargos', ordem: CARGOS },
    { id: '#f-area', chave: 'area', campo: 'area', todos: 'Todas as áreas' },
    { id: '#f-subarea', chave: 'subarea', campo: 'subarea', todos: 'Todas as subáreas' },
    { id: '#f-situacao', chave: 'situacao', campo: 'situacao', todos: 'Todas as situações' },
    { id: '#f-modalidade', chave: 'modalidade', campo: 'modalidade', todos: 'Todas' },
    { id: '#f-unidade', chave: 'unidade', campo: 'unidade', todos: 'Todas as unidades' },
    { id: '#f-lotacao', chave: 'lotacao', campo: 'lotacao', todos: 'Todas as cidades' },
    { id: '#f-opcao', chave: 'opcao', campo: 'opcao', todos: 'Todas as opções' },
  ];

  function montarSelects() {
    for (const s of SELECTS) {
      const el = $(s.id);
      const disponiveis = contar(filtrar(s.chave), s.campo);

      let chaves = [...disponiveis.keys()];
      if (s.ordem) {
        chaves.sort((a, b) => s.ordem.indexOf(a) - s.ordem.indexOf(b));
      } else {
        chaves.sort((a, b) => a.localeCompare(b, 'pt-BR'));
      }

      const atual = filtros[s.chave];
      // Se o valor escolhido sumiu por causa dos outros filtros, ele continua
      // na lista — senão o select ficaria "vazio" mostrando outra coisa.
      if (atual && !disponiveis.has(atual)) chaves.unshift(atual);

      const rotular = (k) => s.campo === 'opcao' ? rotuloOpcao(k) : k;

      el.innerHTML =
        `<option value="">${escapar(s.todos)}</option>` +
        chaves.map((k) => `<option value="${escapar(k)}"${k === atual ? ' selected' : ''}>` +
          `${escapar(rotular(k))} (${numero(disponiveis.get(k) || 0)})</option>`).join('');
    }
  }

  function rotuloOpcao(codigo) {
    const o = DADOS.opcoes && DADOS.opcoes[codigo];
    return o ? `${codigo} — ${o.subarea}` : codigo;
  }

  /* ---------- KPIs ---------- */

  function pintarKPIs(lista) {
    const efetivados = lista.filter((r) => r.desfecho === 'efetivado');

    $('#kpi-total').textContent = numero(lista.length);
    $('#kpi-total-det').textContent =
      `${numero(efetivados.length)} já contratados`;

    const ids = {
      Pesquisador: 'pesquisador', Analista: 'analista',
      'Técnico': 'tecnico', Assistente: 'assistente',
    };
    for (const cargo of CARGOS) {
      const doCargo = lista.filter((r) => r.cargo === cargo);
      const contratados = doCargo.filter((r) => r.desfecho === 'efetivado').length;
      $(`#kpi-${ids[cargo]}`).textContent = numero(doCargo.length);
      $(`#det-${ids[cargo]}`).textContent = doCargo.length
        ? `${numero(contratados)} contratados · ${porcento(doCargo.length, lista.length)}% do total`
        : 'nenhum no recorte';
    }

    // O botão do cargo fica "ligado" quando aquele cargo é o filtro ativo.
    document.querySelectorAll('.kpi').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.cargo === filtros.cargo));
    });
  }

  /* ---------- gráfico: desfecho ---------- */

  function pintarDesfecho(lista) {
    const total = lista.length;
    const porDesfecho = contar(lista, 'desfecho');

    $('#g-desfecho').innerHTML = DESFECHOS.map((d) => {
      const n = porDesfecho.get(d.chave) || 0;
      if (!n) return '';
      const pct = n / total * 100;
      // Só cabe rótulo dentro do segmento se ele tiver alguma largura.
      const dentro = pct >= 9 ? `<span>${numero(n)}</span>` : '';
      return `<div class="seg" style="flex:${n} 0 0;background:${d.cor}" ` +
             `title="${escapar(d.rotulo)}: ${numero(n)} (${porcento(n, total)}%)">${dentro}</div>`;
    }).join('');

    $('#leg-desfecho').innerHTML = DESFECHOS.map((d) => {
      const n = porDesfecho.get(d.chave) || 0;
      return `<li><i class="pip" style="background:${d.cor}"></i>${escapar(d.rotulo)} ` +
             `<b>${numero(n)}</b> <span>(${porcento(n, total)}%)</span></li>`;
    }).join('');

    // A tabela ao lado é a leitura sem depender de cor nenhuma.
    const porSituacao = maiores(contar(lista, 'situacao'), 20);
    const corDe = (situacao) => {
      const r = lista.find((x) => x.situacao === situacao);
      const d = DESFECHOS.find((y) => y.chave === (r && r.desfecho));
      return d ? d.cor : 'var(--mut)';
    };
    $('#t-situacao tbody').innerHTML = porSituacao.length
      ? porSituacao.map(([sit, n]) =>
          `<tr><td><i class="marca" style="background:${corDe(sit)}"></i>${escapar(sit)}</td>` +
          `<td>${numero(n)}</td><td>${porcento(n, total)}%</td></tr>`).join('')
      : '<tr><td colspan="3">Nenhum registro no recorte atual.</td></tr>';
  }

  /* ---------- gráficos de barra ---------- */

  function pintarBarras(alvo, dados, vazio) {
    const el = $(alvo);
    if (!dados.length) {
      el.innerHTML = `<p class="vazio">${escapar(vazio)}</p>`;
      return;
    }
    const teto = Math.max(...dados.map(([, n]) => n));
    el.innerHTML = dados.map(([rotulo, n]) => `
      <div class="item">
        <span class="rotulo" title="${escapar(rotulo)}">${escapar(rotulo)}</span>
        <span class="qtd">${numero(n)}</span>
        <div class="trilho"><div class="preenche" style="width:${n / teto * 100}%"></div></div>
      </div>`).join('');
  }

  // Convocados por opção, com um risco marcando as vagas previstas no edital.
  function pintarOpcoes(lista) {
    const el = $('#g-opcoes');
    const dados = maiores(contar(lista, 'opcao'), 15);
    if (!dados.length) {
      el.innerHTML = '<p class="vazio">Nenhum registro no recorte atual.</p>';
      return;
    }

    // A escala precisa acomodar tanto os convocados quanto as vagas, senão o
    // risco das vagas sairia do trilho quando houver mais vaga do que convocação.
    const teto = Math.max(...dados.map(([cod, n]) => {
      const o = DADOS.opcoes[cod];
      return Math.max(n, (o && o.vagasTotal) || 0);
    }));

    let temVagas = false;
    el.innerHTML = dados.map(([cod, n]) => {
      const o = DADOS.opcoes[cod] || {};
      const vagas = o.vagasTotal;
      const rotulo = o.subarea ? `${o.cargo} · ${o.subarea}` : cod;
      let marca = '';
      if (vagas) {
        temVagas = true;
        marca = `<i class="meta" style="left:calc(${vagas / teto * 100}% - 1px)" ` +
                `title="${numero(vagas)} vagas previstas no edital"></i>`;
      }
      return `
      <div class="item">
        <span class="rotulo" title="Opção ${escapar(cod)} — ${escapar(rotulo)}">${escapar(rotulo)}</span>
        <span class="qtd">${numero(n)}${vagas ? ` <small>/ ${numero(vagas)} vagas</small>` : ''}</span>
        <div class="trilho"><div class="preenche" style="width:${n / teto * 100}%"></div>${marca}</div>
      </div>`;
    }).join('');

    if (temVagas) {
      el.insertAdjacentHTML('beforeend',
        '<p class="legenda-vagas"><i class="risco"></i> o risco marca o total de vagas ' +
        'previsto no Anexo II do edital</p>');
    }
  }

  /* ---------- tabela ---------- */

  function ordenar(lista) {
    const { campo, dir } = ordenacao;
    const sinal = dir === 'asc' ? 1 : -1;
    return [...lista].sort((a, b) => {
      let x = a[campo], y = b[campo];
      if (campo === 'posicao') {
        // Quem não tem colocação legível vai para o fim, nos dois sentidos.
        if (x == null) return 1;
        if (y == null) return -1;
        return (x - y) * sinal || a.nome.localeCompare(b.nome, 'pt-BR');
      }
      return String(x || '').localeCompare(String(y || ''), 'pt-BR') * sinal;
    });
  }

  // Realça os pedaços do nome que casaram com a busca, sem perder os acentos
  // do original: casamos sobre a versão achatada e recortamos o texto original
  // pelos mesmos índices.
  function realcar(nome, achatado, termos) {
    if (!termos.length) return escapar(nome);

    const faixas = [];
    for (const t of termos) {
      let i = achatado.indexOf(t);
      while (i !== -1) {
        faixas.push([i, i + t.length]);
        i = achatado.indexOf(t, i + 1);
      }
    }
    if (!faixas.length) return escapar(nome);

    faixas.sort((a, b) => a[0] - b[0]);
    const juntas = [faixas[0]];
    for (const [ini, fim] of faixas.slice(1)) {
      const ultima = juntas[juntas.length - 1];
      if (ini <= ultima[1]) ultima[1] = Math.max(ultima[1], fim);
      else juntas.push([ini, fim]);
    }

    let saida = '', cursor = 0;
    for (const [ini, fim] of juntas) {
      saida += escapar(nome.slice(cursor, ini)) + '<mark>' + escapar(nome.slice(ini, fim)) + '</mark>';
      cursor = fim;
    }
    return saida + escapar(nome.slice(cursor));
  }

  function pintarTabela(lista) {
    const termos = filtros.nome ? achatar(filtros.nome).split(/\s+/).filter(Boolean) : [];
    const ordenada = ordenar(lista);
    const visiveis = ordenada.slice(0, mostrando);

    $('#contador-tabela').textContent = lista.length
      ? `mostrando ${numero(visiveis.length)} de ${numero(lista.length)}`
      : '';

    $('#corpo-tabela').innerHTML = visiveis.length ? visiveis.map((r) => `
      <tr>
        <td class="num">${escapar(r.colocacao)}<span class="sub">${escapar(r.modalidade || '')}</span></td>
        <td class="nome">${realcar(r.nome, r._nome, termos)}</td>
        <td><span class="et-cargo" data-c="${escapar(r.cargo)}"><i class="pip"></i>${escapar(r.cargo || '—')}</span></td>
        <td class="mut">${escapar(r.area || '—')}<span class="sub">${escapar(r.subarea || '')} · opção ${escapar(r.opcao)}</span></td>
        <td><span class="et-sit" data-d="${escapar(r.desfecho)}">${escapar(r.situacao)}</span></td>
        <td class="mut">${escapar(r.unidade || '—')}</td>
        <td class="mut">${escapar(r.lotacao || '—')}</td>
      </tr>`).join('')
      : '<tr><td colspan="7" class="vazio-tabela">Nenhuma convocação bate com esses filtros. ' +
        'Tente afrouxar algum critério.</td></tr>';

    $('#mais').hidden = visiveis.length >= lista.length;
    $('#mais').textContent =
      `Mostrar mais ${numero(Math.min(LIMITE_PAGINA, lista.length - visiveis.length))}`;

    document.querySelectorAll('.tabela th[data-ord]').forEach((th) => {
      if (th.dataset.ord === ordenacao.campo) th.dataset.dir = ordenacao.dir;
      else delete th.dataset.dir;
    });
  }

  /* ---------- resumo ---------- */

  function pintarResumo(lista) {
    const partes = [];
    if (filtros.nome) partes.push(`nome contendo “${filtros.nome}”`);
    if (filtros.cargo) partes.push(`cargo ${filtros.cargo}`);
    if (filtros.area) partes.push(`área ${filtros.area}`);
    if (filtros.subarea) partes.push(`subárea ${filtros.subarea}`);
    if (filtros.situacao) partes.push(`situação ${filtros.situacao}`);
    if (filtros.modalidade) partes.push(filtros.modalidade);
    if (filtros.unidade) partes.push(`unidade ${filtros.unidade}`);
    if (filtros.lotacao) partes.push(`lotação em ${filtros.lotacao}`);
    if (filtros.opcao) partes.push(`opção ${filtros.opcao}`);
    if (filtros.colMin != null || filtros.colMax != null) {
      partes.push(`colocação de ${filtros.colMin ?? 1} a ${filtros.colMax ?? '∞'}`);
    }

    $('#resumo-filtro').innerHTML = partes.length
      ? `<b>${numero(lista.length)}</b> de ${numero(REGISTROS.length)} convocações — ` +
        `filtrando por ${partes.map(escapar).join(', ')}.`
      : `Mostrando todas as <b>${numero(REGISTROS.length)}</b> convocações.`;
  }

  /* ---------- orquestração ---------- */

  function atualizar(preservarPagina) {
    if (!preservarPagina) mostrando = LIMITE_PAGINA;
    const lista = filtrar(null);

    pintarKPIs(lista);
    pintarDesfecho(lista);
    pintarBarras('#g-unidades', maiores(contar(lista, 'unidade'), 12),
      'Ninguém no recorte atual já tem unidade definida.');
    pintarBarras('#g-areas', maiores(contar(lista, 'area'), 10),
      'Nenhum registro no recorte atual.');
    pintarOpcoes(lista);
    pintarTabela(lista);
    pintarResumo(lista);
    montarSelects();
    return lista;
  }

  /* ---------- eventos ---------- */

  // Digitar é o único filtro que dispara a cada tecla, então damos um respiro
  // antes de refazer tudo.
  let timer = null;
  $('#f-nome').addEventListener('input', (e) => {
    filtros.nome = e.target.value.trim();
    clearTimeout(timer);
    timer = setTimeout(atualizar, 140);
  });

  for (const s of SELECTS) {
    $(s.id).addEventListener('change', (e) => {
      filtros[s.chave] = e.target.value;
      // Trocar de cargo/área invalida a escolha mais específica embaixo dela.
      if (s.chave === 'cargo') { filtros.area = ''; filtros.subarea = ''; }
      if (s.chave === 'area') filtros.subarea = '';
      atualizar();
    });
  }

  const lerFaixa = (el, chave) => el.addEventListener('input', (e) => {
    const v = parseInt(e.target.value, 10);
    filtros[chave] = Number.isFinite(v) && v > 0 ? v : null;
    clearTimeout(timer);
    timer = setTimeout(atualizar, 220);
  });
  lerFaixa($('#f-col-min'), 'colMin');
  lerFaixa($('#f-col-max'), 'colMax');

  document.querySelectorAll('.kpi').forEach((b) => {
    b.addEventListener('click', () => {
      // Clicar de novo no cargo já ativo desliga o filtro.
      const alvo = b.dataset.cargo;
      filtros.cargo = (filtros.cargo === alvo) ? '' : alvo;
      filtros.area = ''; filtros.subarea = '';
      atualizar();
    });
  });

  document.querySelectorAll('.tabela th[data-ord]').forEach((th) => {
    th.addEventListener('click', () => {
      const campo = th.dataset.ord;
      ordenacao = (ordenacao.campo === campo)
        ? { campo, dir: ordenacao.dir === 'asc' ? 'desc' : 'asc' }
        : { campo, dir: 'asc' };
      pintarTabela(filtrar(null));
    });
  });

  $('#mais').addEventListener('click', () => {
    mostrando += LIMITE_PAGINA;
    pintarTabela(filtrar(null));
  });

  $('#limpar').addEventListener('click', () => {
    Object.assign(filtros, {
      nome: '', cargo: '', area: '', subarea: '', situacao: '',
      modalidade: '', unidade: '', lotacao: '', opcao: '',
      colMin: null, colMax: null,
    });
    $('#f-nome').value = '';
    $('#f-col-min').value = '';
    $('#f-col-max').value = '';
    atualizar();
  });

  $('#baixar').addEventListener('click', () => {
    const lista = ordenar(filtrar(null));
    const colunas = ['colocacao', 'modalidade', 'nome', 'opcao', 'cargo', 'area',
                     'subarea', 'situacao', 'unidade', 'lotacao'];
    const celula = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [colunas.join(',')]
      .concat(lista.map((r) => colunas.map((c) => celula(r[c])).join(',')))
      .join('\r\n');

    // BOM na frente para o Excel abrir os acentos corretamente.
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `convocacoes-embrapa-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  });

  /* ---------- carimbos ---------- */

  const dataLegivel = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '—' : d.toLocaleString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  $('#carimbo-coleta').textContent = dataLegivel(DADOS.coletadoEm);
  $('#carimbo-fonte').textContent = DADOS.atualizadoNaFonte || '—';
  if (DADOS.fonte) $('#link-fonte').href = DADOS.fonte;

  // O rodapé cita quantas convocações ainda estão sem localidade. Preenchemos
  // aqui para o texto não envelhecer a cada atualização dos dados.
  const semLocal = REGISTROS.filter((r) => !r.unidade && !r.lotacao).length;
  $('#rodape-sem-lotacao').textContent =
    `${numero(semLocal)} das ${numero(REGISTROS.length)} convocações aparecem sem ` +
    'unidade e sem cidade.';

  atualizar();
})();

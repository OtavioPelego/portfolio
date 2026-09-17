/* ============================================================
   Histórico de eventos — Convocações da Embrapa
   Roda sobre window.HISTORICO_EMBRAPA (data/historico.js).
   ============================================================ */
(() => {
  'use strict';

  const DADOS = window.HISTORICO_EMBRAPA;
  const $ = (sel) => document.querySelector(sel);

  if (!DADOS || !Array.isArray(DADOS.checagens)) {
    document.body.insertAdjacentHTML('afterbegin',
      '<p style="padding:24px;color:#e0554e">Não consegui carregar o histórico.</p>');
    return;
  }

  const LIMITE_INICIAL = 20;
  const LIMITE_PAGINA = 100;

  const achatar = (s) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const numero = (n) => n.toLocaleString('pt-BR');
  const escapar = (s) => (s || '').replace(/[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- achatar checagens em eventos individuais ---------- */

  const EVENTOS = [];
  for (const checagem of DADOS.checagens) {
    for (const e of checagem.eventos) {
      EVENTOS.push({
        ...e,
        verificadoEm: checagem.verificadoEm,
        dataISO: checagem.verificadoEm.slice(0, 10),
        _nome: achatar(e.nome),
      });
    }
  }
  // Mais recente primeiro é a ordem natural de leitura para um histórico.
  EVENTOS.sort((a, b) => b.verificadoEm.localeCompare(a.verificadoEm));

  const ROTULO_TIPO = { novo: 'Nova convocação', alterado: 'Mudança de situação', saiu: 'Saída da fonte' };
  const ICONE_TIPO = { novo: '+', alterado: '↻', saiu: '−' };

  // O que mudou, em uma frase — cobre inclusive o caso de "alterado" em que só
  // a grafia da unidade/cidade mudou (ex.: correção de acento), sem trocar
  // situação. Nunca inventa: só descreve os campos que de fato divergiram.
  function descreverMudanca(e) {
    if (e.tipo === 'novo') return `Entrou como "${e.situacao}"`;
    if (e.tipo === 'saiu') return `Saiu da lista (estava "${e.situacao}")`;
    const partes = [];
    if (e.situacaoAntes !== e.situacaoDepois) partes.push(`${e.situacaoAntes} → ${e.situacaoDepois}`);
    if (e.unidadeAntes !== e.unidadeDepois) {
      partes.push(`unidade: ${e.unidadeAntes || '—'} → ${e.unidadeDepois || '—'}`);
    }
    if (e.lotacaoAntes !== e.lotacaoDepois) {
      partes.push(`cidade: ${e.lotacaoAntes || '—'} → ${e.lotacaoDepois || '—'}`);
    }
    return partes.join(' · ') || 'sem mudança visível';
  }

  const dataLegivel = (isoOuData) => {
    const d = new Date(isoOuData.length === 10 ? isoOuData + 'T00:00:00' : isoOuData);
    return Number.isNaN(d.getTime()) ? '—' : d.toLocaleDateString('pt-BR');
  };
  const horaLegivel = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  /* ---------- filtragem (mesmo padrão do painel principal) ---------- */

  const VAZIO = { nome: '', tipo: '', cargo: '', opcao: '', dataMin: '', dataMax: '' };
  const filtros = { ...VAZIO };
  let ordenacao = { campo: 'verificadoEm', dir: 'desc' };
  let mostrando = LIMITE_INICIAL;

  function filtrar(exceto) {
    const termos = filtros.nome ? achatar(filtros.nome).split(/\s+/).filter(Boolean) : [];
    return EVENTOS.filter((e) => {
      if (exceto !== 'nome' && termos.length && !termos.every((t) => e._nome.includes(t))) return false;
      if (exceto !== 'tipo' && filtros.tipo && e.tipo !== filtros.tipo) return false;
      if (exceto !== 'cargo' && filtros.cargo && e.cargo !== filtros.cargo) return false;
      if (exceto !== 'opcao' && filtros.opcao && e.opcao !== filtros.opcao) return false;
      if (filtros.dataMin && e.dataISO < filtros.dataMin) return false;
      if (filtros.dataMax && e.dataISO > filtros.dataMax) return false;
      return true;
    });
  }

  const contar = (lista, campo) => {
    const mapa = new Map();
    for (const e of lista) { const v = e[campo]; if (v) mapa.set(v, (mapa.get(v) || 0) + 1); }
    return mapa;
  };

  /* ---------- selects ---------- */

  const SELECTS = [
    { id: '#f-tipo', chave: 'tipo', campo: 'tipo', todos: 'Todos os tipos',
      ordem: ['novo', 'alterado', 'saiu'], rotulo: (t) => ROTULO_TIPO[t] || t },
    { id: '#f-cargo', chave: 'cargo', campo: 'cargo', todos: 'Todos os cargos',
      ordem: ['Pesquisador', 'Analista', 'Técnico', 'Assistente'] },
    { id: '#f-opcao', chave: 'opcao', campo: 'opcao', todos: 'Todas as opções' },
  ];

  function montarSelects() {
    for (const s of SELECTS) {
      const el = $(s.id);
      const disponiveis = contar(filtrar(s.chave), s.campo);
      let chaves = [...disponiveis.keys()];
      if (s.ordem) chaves.sort((a, b) => s.ordem.indexOf(a) - s.ordem.indexOf(b));
      else chaves.sort((a, b) => a.localeCompare(b, 'pt-BR'));

      const atual = filtros[s.chave];
      if (atual && !disponiveis.has(atual)) chaves.unshift(atual);

      const rotular = s.rotulo || ((k) => k);
      el.innerHTML =
        `<option value="">${escapar(s.todos)}</option>` +
        chaves.map((k) => `<option value="${escapar(k)}"${k === atual ? ' selected' : ''}>` +
          `${escapar(rotular(k))} (${numero(disponiveis.get(k) || 0)})</option>`).join('');
    }
  }

  /* ---------- KPIs ---------- */

  function pintarKPIs(lista) {
    $('#kpi-total').textContent = numero(lista.length);
    $('#kpi-total-det').textContent = `desde ${dataLegivel(DADOS.checagens[0].verificadoEm)}`;
    for (const tipo of ['novo', 'alterado', 'saiu']) {
      $(`#kpi-${tipo}`).textContent = numero(lista.filter((e) => e.tipo === tipo).length);
    }
    document.querySelectorAll('.kpi').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.tipo === filtros.tipo));
    });
  }

  /* ---------- gráfico: eventos por checagem ---------- */

  function pintarGrafico(lista) {
    const el = $('#grafico-tempo');
    const porDia = new Map(); // dataISO -> {novo, outras}
    for (const e of lista) {
      const reg = porDia.get(e.dataISO) || { novo: 0, outras: 0 };
      if (e.tipo === 'novo') reg.novo++; else reg.outras++;
      porDia.set(e.dataISO, reg);
    }
    const dias = [...porDia.keys()].sort(); // cronológico, mais antigo à esquerda

    if (!dias.length) {
      el.innerHTML = '<p class="vazio">Nenhum evento no recorte atual.</p>';
      return;
    }

    const teto = Math.max(...dias.map((d) => porDia.get(d).novo + porDia.get(d).outras));
    const tooltip = $('#tooltip-grafico');

    el.innerHTML = dias.map((d) => {
      const { novo, outras } = porDia.get(d);
      const total = novo + outras;
      const hNovo = teto ? (novo / teto * 100) : 0;
      const hOutras = teto ? (outras / teto * 100) : 0;
      const resumo = `${dataLegivel(d)}: ${numero(total)} evento${total === 1 ? '' : 's'}` +
        (novo ? ` (${numero(novo)} novas)` : '');
      return `
      <button type="button" class="coluna-tempo" data-dia="${d}"
              aria-label="${escapar(resumo)}">
        <span class="valor-coluna">${numero(total)}</span>
        <span class="pilha-coluna">
          <span class="seg-outras" style="height:${hOutras}%"></span>
          <span class="seg-novo" style="height:${hNovo}%"></span>
        </span>
        <span class="rotulo-coluna">${dataLegivel(d).slice(0, 5)}</span>
      </button>`;
    }).join('');

    el.querySelectorAll('.coluna-tempo').forEach((btn) => {
      const mostrar = () => {
        tooltip.textContent = btn.getAttribute('aria-label');
        tooltip.hidden = false;
        const r = btn.getBoundingClientRect(), rp = el.getBoundingClientRect();
        tooltip.style.left = `${r.left - rp.left + r.width / 2}px`;
        tooltip.style.top = `${r.top - rp.top - 8}px`;
      };
      const esconder = () => { tooltip.hidden = true; };
      btn.addEventListener('mouseenter', mostrar);
      btn.addEventListener('mouseleave', esconder);
      btn.addEventListener('focus', mostrar);
      btn.addEventListener('blur', esconder);
    });
  }

  /* ---------- lista cronológica ---------- */

  function pintarLista(lista) {
    $('#contador-lista').textContent = lista.length
      ? `${numero(lista.length)} evento${lista.length === 1 ? '' : 's'}` : '';

    if (!lista.length) {
      $('#lista-cronologica').innerHTML =
        '<p class="vazio-tabela">Nenhum evento bate com esses filtros.</p>';
      return;
    }

    const porDia = new Map();
    for (const e of lista) {
      if (!porDia.has(e.dataISO)) porDia.set(e.dataISO, []);
      porDia.get(e.dataISO).push(e);
    }
    const dias = [...porDia.keys()].sort().reverse(); // mais recente primeiro

    $('#lista-cronologica').innerHTML = dias.map((d) => {
      const eventos = porDia.get(d);
      const novos = eventos.filter((e) => e.tipo === 'novo').length;
      const alterados = eventos.filter((e) => e.tipo === 'alterado').length;
      const saidas = eventos.filter((e) => e.tipo === 'saiu').length;
      const resumoPartes = [];
      if (novos) resumoPartes.push(`${numero(novos)} nova${novos === 1 ? '' : 's'}`);
      if (alterados) resumoPartes.push(`${numero(alterados)} mudança${alterados === 1 ? '' : 's'} de situação`);
      if (saidas) resumoPartes.push(`${numero(saidas)} saída${saidas === 1 ? '' : 's'}`);

      const itens = eventos.slice(0, 12).map((e) => `
        <li>
          <span class="et-tipo" data-t="${e.tipo}">${ICONE_TIPO[e.tipo]}</span>
          <span class="nome-item">${escapar(e.nome)}</span>
          <span class="mut">— ${escapar(e.cargo)} · ${escapar(e.subarea)} — ${escapar(descreverMudanca(e))}</span>
        </li>`).join('');
      const resto = eventos.length > 12
        ? `<li class="mut-item">+ ${numero(eventos.length - 12)} outro${eventos.length - 12 === 1 ? '' : 's'} evento${eventos.length - 12 === 1 ? '' : 's'} neste dia — veja na tabela abaixo</li>`
        : '';

      return `
      <article class="dia-cronologico">
        <header>
          <strong>${dataLegivel(d)}</strong>
          <span class="mut">${resumoPartes.join(' · ')}</span>
        </header>
        <ul>${itens}${resto}</ul>
      </article>`;
    }).join('');
  }

  /* ---------- tabela ---------- */

  function ordenar(lista) {
    const { campo, dir } = ordenacao;
    const sinal = dir === 'asc' ? 1 : -1;
    return [...lista].sort((a, b) => {
      if (campo === 'mudanca') {
        return descreverMudanca(a).localeCompare(descreverMudanca(b), 'pt-BR') * sinal;
      }
      return String(a[campo] || '').localeCompare(String(b[campo] || ''), 'pt-BR') * sinal;
    });
  }

  function pintarTabela(lista) {
    const ordenada = ordenar(lista);
    const visiveis = ordenada.slice(0, mostrando);

    $('#contador-tabela').textContent = lista.length
      ? `mostrando ${numero(visiveis.length)} de ${numero(lista.length)}` : '';

    $('#corpo-tabela').innerHTML = visiveis.length ? visiveis.map((e) => `
      <tr>
        <td class="mut">${dataLegivel(e.dataISO)}<span class="sub">${horaLegivel(e.verificadoEm)}</span></td>
        <td><span class="et-tipo" data-t="${e.tipo}">${ICONE_TIPO[e.tipo]}</span> ${escapar(ROTULO_TIPO[e.tipo])}</td>
        <td class="nome">${escapar(e.nome)}<span class="sub">${escapar(e.colocacao)}</span></td>
        <td><span class="et-cargo" data-c="${escapar(e.cargo)}"><i class="pip"></i>${escapar(e.cargo)}</span></td>
        <td class="mut">${escapar(e.area)}<span class="sub">${escapar(e.subarea)} · opção ${escapar(e.opcao)}</span></td>
        <td>${escapar(descreverMudanca(e))}</td>
      </tr>`).join('')
      : '<tr><td colspan="6" class="vazio-tabela">Nenhum evento bate com esses filtros.</td></tr>';

    $('#mais').hidden = visiveis.length >= lista.length;
    $('#mais').textContent = `Mostrar mais ${numero(Math.min(LIMITE_PAGINA, lista.length - visiveis.length))}`;

    document.querySelectorAll('.tabela th[data-ord]').forEach((th) => {
      if (th.dataset.ord === ordenacao.campo) th.dataset.dir = ordenacao.dir;
      else delete th.dataset.dir;
    });
  }

  /* ---------- resumo ---------- */

  function pintarResumo(lista) {
    const partes = [];
    if (filtros.nome) partes.push(`nome contendo "${filtros.nome}"`);
    if (filtros.tipo) partes.push(ROTULO_TIPO[filtros.tipo].toLowerCase());
    if (filtros.cargo) partes.push(`cargo ${filtros.cargo}`);
    if (filtros.opcao) partes.push(`opção ${filtros.opcao}`);
    if (filtros.dataMin || filtros.dataMax) {
      partes.push(`verificado entre ${filtros.dataMin ? dataLegivel(filtros.dataMin) : '…'} e ${filtros.dataMax ? dataLegivel(filtros.dataMax) : '…'}`);
    }
    $('#resumo-filtro').innerHTML = partes.length
      ? `<b>${numero(lista.length)}</b> de ${numero(EVENTOS.length)} eventos — filtrando por ${partes.map(escapar).join(', ')}.`
      : `Mostrando todos os <b>${numero(EVENTOS.length)}</b> eventos registrados.`;
  }

  /* ---------- orquestração ---------- */

  function atualizar(preservarPagina) {
    if (!preservarPagina) mostrando = LIMITE_INICIAL;
    const lista = filtrar(null);
    pintarKPIs(lista);
    pintarGrafico(lista);
    pintarLista(lista);
    pintarTabela(lista);
    pintarResumo(lista);
    montarSelects();
    return lista;
  }

  /* ---------- eventos de interface ---------- */

  let timer = null;
  $('#f-nome').addEventListener('input', (e) => {
    filtros.nome = e.target.value.trim();
    clearTimeout(timer);
    timer = setTimeout(atualizar, 140);
  });

  for (const s of SELECTS) {
    $(s.id).addEventListener('change', (e) => { filtros[s.chave] = e.target.value; atualizar(); });
  }

  $('#f-data-min').addEventListener('change', (e) => { filtros.dataMin = e.target.value; atualizar(); });
  $('#f-data-max').addEventListener('change', (e) => { filtros.dataMax = e.target.value; atualizar(); });

  document.querySelectorAll('.kpi').forEach((b) => {
    b.addEventListener('click', () => {
      const alvo = b.dataset.tipo;
      filtros.tipo = (filtros.tipo === alvo) ? '' : alvo;
      atualizar();
    });
  });

  document.querySelectorAll('.tabela th[data-ord]').forEach((th) => {
    th.addEventListener('click', () => {
      const campo = th.dataset.ord;
      ordenacao = (ordenacao.campo === campo)
        ? { campo, dir: ordenacao.dir === 'asc' ? 'desc' : 'asc' }
        : { campo, dir: campo === 'verificadoEm' ? 'desc' : 'asc' };
      pintarTabela(filtrar(null));
    });
  });

  $('#mais').addEventListener('click', () => {
    mostrando += LIMITE_PAGINA;
    pintarTabela(filtrar(null));
  });

  $('#limpar').addEventListener('click', () => {
    Object.assign(filtros, VAZIO);
    $('#f-nome').value = '';
    $('#f-data-min').value = '';
    $('#f-data-max').value = '';
    atualizar();
  });

  $('#baixar').addEventListener('click', () => {
    const lista = ordenar(filtrar(null));
    const colunas = ['dataISO', 'tipo', 'nome', 'colocacao', 'cargo', 'area', 'subarea', 'opcao'];
    const celula = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [[...colunas, 'mudanca'].join(',')]
      .concat(lista.map((r) => [...colunas.map((c) => celula(r[c])), celula(descreverMudanca(r))].join(',')))
      .join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `historico-embrapa-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  });

  /* ---------- carimbos e aviso ---------- */

  $('#texto-aviso-data').textContent = DADOS.aviso || '';

  if (DADOS.checagens.length) {
    const primeira = DADOS.checagens[0].verificadoEm;
    const ultima = DADOS.checagens[DADOS.checagens.length - 1].verificadoEm;
    $('#carimbo-periodo').textContent = `${dataLegivel(primeira)} – ${dataLegivel(ultima)}`;
  }
  $('#carimbo-checagens').textContent = numero(DADOS.checagens.length);

  atualizar();
})();

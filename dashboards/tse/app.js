// Estado Global da Aplicação
let dadosResultados = null;
let dadosCandidatos = null;
let dadosEleitorado = null;

// Instâncias Globais dos Gráficos do Chart.js para permitir destruição e recriação limpa
let chartNacionalInstance = null;
let chartDistribuicaoInstance = null;
let chartCandGeneroInstance = null;
let chartCandInstrucaoInstance = null;
let chartCandRacaInstance = null;
let chartEleitGeneroInstance = null;
let chartEleitInstrucaoInstance = null;
let chartAbstencaoHistoricoInstance = null;

// Mapeamento de cores oficiais dos principais partidos/candidatos
const coresCandidatos = {
    "Lula": "#ef4444",      // PT Vermelho
    "Dilma": "#ef4444",     // PT Vermelho
    "Haddad": "#dc2626",    // PT Vermelho Escuro
    "Bolsonaro": "#22c55e", // PL Verde
    "Aécio": "#3b82f6",     // PSDB Azul
    "Serra": "#2563eb",     // PSDB Azul
    "Alckmin": "#1d4ed8",   // PSDB Azul Escuro
    "FHC": "#3b82f6",       // PSDB Azul
    "Simone Tebet": "#a855f7", // MDB Roxo
    "Ciro Gomes": "#eab308", // PDT Amarelo
    "Enéas": "#1e293b",     // PRONA Preto/Cinza
    "Outros": "#64748b"     // Cinza
};

// Inicialização
document.addEventListener("DOMContentLoaded", async () => {
    configurarAbas();
    await carregarDados();
    
    // Configurar listeners de mudança de filtros
    document.getElementById("ano-select").addEventListener("change", atualizarDashboard);
    document.getElementById("turno-select").addEventListener("change", atualizarDashboard);
});

// Alternância de Abas
function configurarAbas() {
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            
            tab.classList.add("active");
            const contentId = tab.getAttribute("data-tab");
            document.getElementById(contentId).classList.add("active");
        });
    });
}

// Carregar JSONs e o SVG do Mapa
async function carregarDados() {
    try {
        console.log("Inicializando dados locais offline...");
        
        // Atribuir as variáveis locais vindas de dados.js
        dadosResultados = dadosResultadosOffline;
        dadosCandidatos = dadosCandidatosOffline;
        dadosEleitorado = dadosEleitoradoOffline;
        
        console.log("Dados carregados com sucesso!");
        
        // Inicializar primeira exibição
        atualizarDashboard();
        gerarGraficoHistorico();
    } catch (error) {
        console.error("Erro ao inicializar dados offline:", error);
        document.body.innerHTML += `
            <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                <div class="card" style="text-align: center; max-width: 400px; padding: 2rem;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--red); margin-bottom: 1rem;"></i>
                    <h2 style="color: #fff; margin-bottom: 0.5rem;">Erro de Inicialização</h2>
                    <p style="color: var(--text-secondary); font-size: 0.95rem;">Dados não encontrados. Verifique se o arquivo dados.js está na mesma pasta do index.html.</p>
                </div>
            </div>`;
    }
}

// Atualiza todo o dashboard baseado nos filtros de Ano e Turno
function atualizarDashboard() {
    const ano = parseInt(document.getElementById("ano-select").value);
    const turno = document.getElementById("turno-select").value;
    
    // Tratamento: FHC 1998 e 1994 foram eleitos no 1T. Se selecionar 2T nesses anos, forçar 1T no seletor.
    if ((ano === 1998 || ano === 1994) && turno === "turno2") {
        document.getElementById("turno-select").value = "turno1";
        atualizarDashboard();
        return;
    }
    
    console.log(`Atualizando dashboard para ${ano} - ${turno === "turno1" ? "1º Turno" : "2º Turno"}`);
    
    const dadosAno = dadosResultados[ano] ? dadosResultados[ano][turno] : null;
    const candAno = dadosCandidatos[ano] || null;
    const eleitAno = dadosEleitorado[ano] || null;

    if (!dadosAno) {
        console.warn(`Sem dados de resultados para o ano ${ano} - ${turno}`);
        return;
    }

    // 1. Atualizar Cards de Métricas
    atualizarMetrics(dadosAno, candAno, eleitAno, ano);

    // 2. Colorir e Configurar Mapa do Brasil
    configurarMapa(dadosAno, ano, turno);

    // 3. Atualizar Gráficos Principais
    atualizarGraficosResultados(dadosAno);

    // 4. Atualizar Gráficos Demográficos das Abas
    atualizarGraficosDemograficos(candAno, eleitAno);
}

// Atualiza os Cards Superiores
function atualizarMetrics(dadosAno, candAno, eleitAno, ano) {
    const formatNumber = (num) => num ? num.toLocaleString("pt-BR") : "-";
    
    // Eleitores
    if (eleitAno) {
        document.getElementById("metric-eleitores").innerText = formatNumber(eleitAno.total);
    } else {
        document.getElementById("metric-eleitores").innerText = "-";
    }

    // Candidatos Geral
    if (candAno) {
        document.getElementById("metric-candidatos").innerText = formatNumber(candAno.total);
    } else {
        document.getElementById("metric-candidatos").innerText = "-";
    }

    // Votos Válidos Presidente
    document.getElementById("metric-votos").innerText = formatNumber(dadosAno.total_validos);

    // Abstenção
    if (dadosAno.abstencoes && eleitAno) {
        const pctAbst = ((dadosAno.abstencoes / eleitAno.total) * 100).toFixed(2);
        document.getElementById("metric-abstencao").innerText = `${pctAbst}% (${formatNumber(dadosAno.abstencoes)})`;
    } else {
        document.getElementById("metric-abstencao").innerText = "-";
    }
}

// Colore e adiciona eventos de clique aos estados do mapa SVG
function configurarMapa(dadosAno, ano, turno) {
    const paths = document.querySelectorAll(".mapa-brasil path");
    if (paths.length === 0) return;

    // Resetar painel lateral
    document.getElementById("state-name").innerText = "Selecione um estado no mapa";
    document.getElementById("state-stats-container").innerHTML = `
        <p class="placeholder-text">Clique em qualquer estado no mapa acima para ver a votação detalhada dos candidatos.</p>
    `;

    // Descobrir vencedor de cada estado para colorir
    const vencedoresEstado = {};
    const votosUF = dadosAno.votos_uf;

    for (const uf in votosUF) {
        const votos = votosUF[uf];
        let vencedor = null;
        let maxVotos = -1;
        
        for (const cand in votos) {
            if (votos[cand] > maxVotos) {
                maxVotos = votos[cand];
                vencedor = cand;
            }
        }
        vencedoresEstado[uf] = vencedor;
    }

    // Colorir cada estado do SVG
    paths.forEach(path => {
        const uf = path.getAttribute("id");
        const vencedor = vencedoresEstado[uf];
        const cor = vencedor ? (coresCandidatos[vencedor] || coresCandidatos["Outros"]) : "#1e293b";
        
        // Aplicar cor com opacidade
        path.style.fill = cor;
        path.style.stroke = "#090d16";
        path.style.strokeWidth = "1.5px";
        
        // Armazenar cor base no elemento para usar no hover
        path.setAttribute("data-base-color", cor);

        // Remover event listeners antigos e adicionar novos
        path.replaceWith(path.cloneNode(true));
    });

    // Como clonamos os nós para limpar listeners, precisamos selecionar de novo
    const newPaths = document.querySelectorAll(".mapa-brasil path");
    newPaths.forEach(path => {
        const uf = path.getAttribute("id");
        
        // Efeito de Hover
        path.addEventListener("mouseover", () => {
            path.style.fill = clarearCor(path.getAttribute("data-base-color"), 20);
            path.style.stroke = "#ffffff";
            path.style.strokeWidth = "2px";
            document.getElementById("map-info-badge").innerText = `${path.getAttribute("name")} (${uf})`;
        });

        path.addEventListener("mouseout", () => {
            path.style.fill = path.getAttribute("data-base-color");
            path.style.stroke = "#090d16";
            path.style.strokeWidth = "1.5px";
            document.getElementById("map-info-badge").innerText = "Selecione um estado";
        });

        // Clique para ver detalhes
        path.addEventListener("click", () => {
            mostrarDetalhesEstado(uf, path.getAttribute("name"), votosUF[uf]);
        });
    });
}

// Atualiza o painel lateral com dados do estado clicado
function mostrarDetalhesEstado(uf, nomeEstado, votosCandidatos) {
    const container = document.getElementById("state-stats-container");
    document.getElementById("state-name").innerText = `${nomeEstado} (${uf})`;

    if (!votosCandidatos) {
        container.innerHTML = `<p class="placeholder-text">Dados detalhados indisponíveis para este estado.</p>`;
        return;
    }

    // Somar total de votos nominais no estado
    const totalVotosEstado = Object.values(votosCandidatos).reduce((a, b) => a + b, 0);

    // Classificar candidatos por votos no estado (decrescente)
    const ordenado = Object.entries(votosCandidatos)
        .sort((a, b) => b[1] - a[1]);

    let html = "";
    ordenado.forEach(([cand, votos]) => {
        const pct = ((votos / totalVotosEstado) * 100).toFixed(2);
        const cor = coresCandidatos[cand] || coresCandidatos["Outros"];
        html += `
            <div class="state-stat-row">
                <div class="cand-name-container">
                    <span class="cand-color-dot" style="background-color: ${cor};"></span>
                    <span class="cand-name">${cand}</span>
                </div>
                <div class="cand-votes">
                    <span class="votes-pct">${pct}%</span>
                    <span class="votes-abs">${votos.toLocaleString("pt-BR")}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Utilitário para clarear cores hexadecimais para o efeito de hover
function clarearCor(hex, percent) {
    if (!hex || hex === "#1e293b" || hex.startsWith("rgb")) return "#3b82f6";
    let num = parseInt(hex.replace("#",""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

// Cria/Atualiza Gráficos de Resultados da Eleição Selecionada
function atualizarGraficosResultados(dadosAno) {
    // 1. Gráfico de Votação Nacional (Barras)
    const containerNacional = document.getElementById("chart-nacional");
    if (chartNacionalInstance) chartNacionalInstance.destroy();
    
    // Obter dados ordenados de votação nacional aproximada
    // Somamos os votos de todas as UFs para obter a distribuição
    const totaisNacionais = {};
    for (const uf in dadosAno.votos_uf) {
        for (const cand in dadosAno.votos_uf[uf]) {
            totaisNacionais[cand] = (totaisNacionais[cand] || 0) + dadosAno.votos_uf[uf][cand];
        }
    }

    const candsOrdenados = Object.entries(totaisNacionais).sort((a,b) => b[1] - a[1]);
    const labels = candsOrdenados.map(c => c[0]);
    const votos = candsOrdenados.map(c => c[1]);
    const cores = labels.map(l => coresCandidatos[l] || coresCandidatos["Outros"]);

    chartNacionalInstance = new Chart(containerNacional, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Votos',
                data: votos,
                backgroundColor: cores,
                borderRadius: 8,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            let total = votos.reduce((a,b)=>a+b, 0);
                            let pct = ((value/total)*100).toFixed(2);
                            return `Votos: ${value.toLocaleString("pt-BR")} (${pct}%)`;
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // 2. Gráfico de Pizza de Distribuição dos Votos (Válidos, Brancos, Nulos, Abstenções)
    const containerDist = document.getElementById("chart-distribuicao");
    if (chartDistribuicaoInstance) chartDistribuicaoInstance.destroy();

    const totalVotos = dadosAno.total_validos + (dadosAno.brancos || 0) + (dadosAno.nulos || 0);

    chartDistribuicaoInstance = new Chart(containerDist, {
        type: 'doughnut',
        data: {
            labels: ['Votos Válidos', 'Brancos', 'Nulos', 'Abstenção'],
            datasets: [{
                data: [dadosAno.total_validos, dadosAno.brancos || 0, dadosAno.nulos || 0, dadosAno.abstencoes || 0],
                backgroundColor: [varColor('--green'), varColor('--blue'), varColor('--orange'), varColor('--red')],
                borderColor: '#090d16',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#94a3b8', font: { family: 'Outfit', size: 12 } }
                }
            },
            cutout: '65%'
        }
    });
}

// Cria/Atualiza Gráficos de Perfil Demográfico das Abas
function atualizarGraficosDemograficos(candAno, eleitAno) {
    // === 1. Aba Perfil dos Candidatos ===
    if (candAno) {
        // Gênero
        const containerCandGenero = document.getElementById("chart-candidatos-genero");
        if (chartCandGeneroInstance) chartCandGeneroInstance.destroy();
        chartCandGeneroInstance = new Chart(containerCandGenero, {
            type: 'pie',
            data: {
                labels: Object.keys(candAno.genero),
                datasets: [{
                    data: Object.values(candAno.genero),
                    backgroundColor: [varColor('--blue'), varColor('--purple'), varColor('--orange')],
                    borderColor: '#090d16',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#94a3b8' } } }
            }
        });

        // Instrução
        const containerCandInstrucao = document.getElementById("chart-candidatos-instrucao");
        if (chartCandInstrucaoInstance) chartCandInstrucaoInstance.destroy();
        
        // Limitar a apenas as 5 categorias de instrução mais frequentes para caber no gráfico
        const sortedInst = Object.entries(candAno.instrucao).sort((a,b) => b[1] - a[1]).slice(0, 5);
        
        chartCandInstrucaoInstance = new Chart(containerCandInstrucao, {
            type: 'bar',
            data: {
                labels: sortedInst.map(i => i[0].replace("COMPLETO", "COMP.")),
                datasets: [{
                    data: sortedInst.map(i => i[1]),
                    backgroundColor: varColor('--purple'),
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.03)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { display: false } }
                }
            }
        });

        // Raça/Cor
        const containerCandRaca = document.getElementById("chart-candidatos-raca");
        if (chartCandRacaInstance) chartCandRacaInstance.destroy();
        
        const labelsRaca = Object.keys(candAno.raca);
        const valuesRaca = Object.values(candAno.raca);
        
        chartCandRacaInstance = new Chart(containerCandRaca, {
            type: 'doughnut',
            data: {
                labels: labelsRaca,
                datasets: [{
                    data: valuesRaca,
                    backgroundColor: [varColor('--blue'), varColor('--orange'), varColor('--green'), varColor('--purple'), varColor('--red'), '#94a3b8'],
                    borderColor: '#090d16'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 10 } } } }
            }
        });
    }

    // === 2. Aba Perfil do Eleitorado ===
    if (eleitAno) {
        // Gênero
        const containerEleitGenero = document.getElementById("chart-eleitores-genero");
        if (chartEleitGeneroInstance) chartEleitGeneroInstance.destroy();
        chartEleitGeneroInstance = new Chart(containerEleitGenero, {
            type: 'pie',
            data: {
                labels: Object.keys(eleitAno.genero),
                datasets: [{
                    data: Object.values(eleitAno.genero),
                    backgroundColor: [varColor('--purple'), varColor('--blue'), '#94a3b8'],
                    borderColor: '#090d16',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#94a3b8' } } }
            }
        });

        // Escolaridade
        const containerEleitInstrucao = document.getElementById("chart-eleitores-instrucao");
        if (chartEleitInstrucaoInstance) chartEleitInstrucaoInstance.destroy();
        
        const sortedEleitInst = Object.entries(eleitAno.instrucao).sort((a,b) => b[1] - a[1]).slice(0, 5);
        
        chartEleitInstrucaoInstance = new Chart(containerEleitInstrucao, {
            type: 'bar',
            data: {
                labels: sortedEleitInst.map(i => i[0].replace("COMPLETO", "COMP.")),
                datasets: [{
                    data: sortedEleitInst.map(i => i[1]),
                    backgroundColor: varColor('--blue'),
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.03)' } },
                    y: { ticks: { color: '#94a3b8' }, grid: { display: false } }
                }
            }
        });
    }
}

// Gera Gráfico Histórico de Abstenção na Terceira Aba
function gerarGraficoHistorico() {
    const container = document.getElementById("chart-abstencao-historico");
    if (chartAbstencaoHistoricoInstance) chartAbstencaoHistoricoInstance.destroy();

    // Abstenções consolidadas oficiais de segundo turno (ou primeiro quando aplicável) do TSE
    const anos = [1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022];
    const abstencoesPct = [17.76, 21.49, 20.35, 18.99, 21.50, 21.10, 21.30, 20.59]; // Porcentagem de abstenção oficial 2T (ou 1T para 1994, 1998)

    chartAbstencaoHistoricoInstance = new Chart(container, {
        type: 'line',
        data: {
            labels: anos.map(String),
            datasets: [{
                label: 'Taxa de Abstenção (%)',
                data: abstencoesPct,
                borderColor: varColor('--red'),
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.3,
                borderWidth: 3,
                pointBackgroundColor: varColor('--red'),
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                y: { 
                    ticks: { color: '#94a3b8' }, 
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    min: 15,
                    max: 25
                }
            }
        }
    });
}

// Utilitário para puxar cor das variáveis CSS do root
function varColor(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

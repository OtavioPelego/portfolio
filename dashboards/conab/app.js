// ==========================================
// CONFIGURAÇÕES GLOBAIS E ESTADO DO APP
// ==========================================
let mapBR = null;         // Objeto do mapa Leaflet
let geojsonLayer = null;   // Camada GeoJSON das UFs
let evolutionChart = null; // Instância do Chart.js de Linha (Evolução)
let rankingChart = null;   // Instância do Chart.js de Barras (Ranking)

// Mapeamento de Códigos IBGE para Siglas das UFs
const CODE_TO_UF = {
    "11": "RO", "12": "AC", "13": "AM", "14": "RR", "15": "PA", "16": "AP", "17": "TO",
    "21": "MA", "22": "PI", "23": "CE", "24": "RN", "25": "PB", "26": "PE", "27": "AL",
    "28": "SE", "29": "BA", "31": "MG", "32": "ES", "33": "RJ", "35": "SP", "41": "PR",
    "42": "SC", "43": "RS", "50": "MS", "51": "MT", "52": "GO", "53": "DF"
};

// Nomes completos das UFs
const UF_TO_NAME = {
    "RO": "Rondônia", "AC": "Acre", "AM": "Amazonas", "RR": "Roraima", "PA": "Pará", "AP": "Amapá", "TO": "Tocantins",
    "MA": "Maranhão", "PI": "Piauí", "CE": "Ceará", "RN": "Rio Grande do Norte", "PB": "Paraíba", "PE": "Pernambuco",
    "AL": "Alagoas", "SE": "Sergipe", "BA": "Bahia", "MG": "Minas Gerais", "ES": "Espírito Santo", "RJ": "Rio de Janeiro",
    "SP": "São Paulo", "PR": "Paraná", "SC": "Santa Catarina", "RS": "Rio Grande do Sul", "MS": "Mato Grosso do Sul",
    "MT": "Mato Grosso", "GO": "Goiás", "DF": "Distrito Federal", "BR": "Brasil"
};

// Estado Inicial do App
const state = {
    activeCategory: 'Grãos',    // Grãos, Café, Cana-de-Açúcar
    activeCrop: 'soja',         // soja, milho, trigo, cafe, cana, etc.
    activeMetric: 'production', // production, area, yield
    activeYearIdx: 0,           // Índice do ano selecionado na lista de safras da cultura
    focusUF: null,              // UF selecionada no filtro (null = Brasil)
    isPlaying: false,
    playInterval: null
};

// ==========================================
// FUNÇÕES AUXILIARES DE FORMATAÇÃO E CÁLCULO
// ==========================================

// Formata valores com base na métrica
function formatValue(val, metric) {
    if (val === undefined || val === null || isNaN(val)) return "0.0";
    if (metric === 'yield') {
        return Math.round(val).toLocaleString('pt-BR') + " kg/ha";
    }
    const suffix = metric === 'production' ? " t" : " ha";
    if (val >= 1000) {
        return (val / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " M" + suffix;
    }
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " mil" + suffix;
}

// Retorna a lista de safras para a cultura ativa
function getActiveSafras() {
    if (!CONAB_DATA.crops[state.activeCrop]) return [];
    return CONAB_DATA.crops[state.activeCrop].safras;
}

// Retorna o ano (safra) ativo em formato texto (ex: '2023/24')
function getActiveSafraName() {
    const safras = getActiveSafras();
    return safras[state.activeYearIdx] || '';
}

// Calcula os limites de cores dinamicamente para o mapa
function getColorScale() {
    const crop = CONAB_DATA.crops[state.activeCrop];
    if (!crop) return { stops: [0, 0, 0, 0, 0], colors: [] };

    let maxVal = 0;
    // Percorre todas as UFs e safras para achar o máximo (ignora total nacional BR)
    Object.entries(crop.states).forEach(([uf, ufData]) => {
        if (uf === 'BR') return;
        const vals = ufData[state.activeMetric] || [];
        vals.forEach(v => {
            if (v > maxVal) maxVal = v;
        });
    });

    // Se o valor máximo for zero, define um fallback
    if (maxVal === 0) maxVal = 100;

    // Define stops lineares com base no valor máximo
    const stops = [
        maxVal * 0.05,
        maxVal * 0.20,
        maxVal * 0.45,
        maxVal * 0.70,
        maxVal
    ];

    // Define paletas de cores premium para cada métrica
    let colors = [];
    if (state.activeMetric === 'production') {
        // Paleta Verde Floresta
        colors = ['#ecfdf5', '#a7f3d0', '#34d399', '#059669', '#064e3b'];
    } else if (state.activeMetric === 'area') {
        // Paleta Azul/Ciano
        colors = ['#ecfeff', '#cffafe', '#22d3ee', '#0891b2', '#0e7490'];
    } else {
        // Paleta Ouro/Marrom
        colors = ['#fffbeb', '#fde68a', '#f59e0b', '#d97706', '#78350f'];
    }

    return { stops, colors };
}

// Retorna a cor correspondente a um valor na escala de cores
function getColor(val, scale) {
    if (val === 0 || val === undefined || val === null) return '#181e18'; // Cor neutra para áreas sem dados
    const { stops, colors } = scale;
    if (val <= stops[0]) return colors[0];
    if (val <= stops[1]) return colors[1];
    if (val <= stops[2]) return colors[2];
    if (val <= stops[3]) return colors[3];
    return colors[4];
}

// ==========================================
// RENDERIZAÇÃO DA INTERFACE (DOM E CHARTS)
// ==========================================

// Preenche o dropdown de culturas baseado na categoria ativa
function populateCropsDropdown() {
    const selector = document.getElementById('crop-select');
    selector.innerHTML = '';

    const sortedCrops = Object.entries(CONAB_DATA.crops)
        .filter(([_, info]) => info.category === state.activeCategory)
        .sort((a, b) => a[1].name.localeCompare(b[1].name));

    sortedCrops.forEach(([id, info]) => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = info.name;
        if (id === state.activeCrop) option.selected = true;
        selector.appendChild(option);
    });
}

// Atualiza os cartões de KPIs
function updateKPIs() {
    const crop = CONAB_DATA.crops[state.activeCrop];
    if (!crop) return;

    const safraName = getActiveSafraName();
    const brData = crop.states["BR"];
    
    if (brData) {
        const idx = state.activeYearIdx;
        const area = brData.area[idx] || 0;
        const prod = brData.production[idx] || 0;
        const yieldVal = brData.yield[idx] || 0;

        // Atualizar valores do Brasil
        document.getElementById('kpi-prod-val').textContent = formatValue(prod, 'production');
        document.getElementById('kpi-area-val').textContent = formatValue(area, 'area');
        document.getElementById('kpi-yield-val').textContent = formatValue(yieldVal, 'yield');

        // Calcular variação em relação à safra anterior
        const updateChangeLabel = (elementId, current, prev) => {
            const el = document.getElementById(elementId);
            if (idx > 0 && prev > 0) {
                const diff = ((current - prev) / prev) * 100;
                const sign = diff > 0 ? '+' : '';
                el.textContent = `${sign}${diff.toFixed(1)}% vs safra ant.`;
                el.className = 'kpi-change ' + (diff > 0 ? 'positive' : diff < 0 ? 'negative' : 'neutral');
            } else {
                el.textContent = '--';
                el.className = 'kpi-change neutral';
            }
        };

        const prevArea = brData.area[idx - 1] || 0;
        const prevProd = brData.production[idx - 1] || 0;
        const prevYield = brData.yield[idx - 1] || 0;

        updateChangeLabel('kpi-prod-change', prod, prevProd);
        updateChangeLabel('kpi-area-change', area, prevArea);
        updateChangeLabel('kpi-yield-change', yieldVal, prevYield);
    }

    // Identificar a UF líder da safra ativa
    let leaderUF = '--';
    let leaderVal = 0;
    
    Object.entries(crop.states).forEach(([uf, ufData]) => {
        if (uf === 'BR') return;
        const val = ufData[state.activeMetric][state.activeYearIdx] || 0;
        if (val > leaderVal) {
            leaderVal = val;
            leaderUF = uf;
        }
    });

    document.getElementById('kpi-leader-val').textContent = leaderUF !== '--' ? `${leaderUF} (${UF_TO_NAME[leaderUF] || leaderUF})` : '--';
    const leaderMetricName = state.activeMetric === 'yield' ? 'Produtividade' : state.activeMetric === 'area' ? 'Área' : 'Produção';
    document.getElementById('kpi-leader-sub').textContent = leaderVal > 0 ? `Líder em ${leaderMetricName}: ${formatValue(leaderVal, state.activeMetric)}` : 'Sem registros';

    // Atualizar cabeçalhos e rótulos
    document.getElementById('badge-safra').textContent = safraName;
    document.getElementById('badge-crop').textContent = crop.name;
    document.getElementById('selected-metric-label').textContent = state.activeMetric === 'production' ? 'Produção' : state.activeMetric === 'area' ? 'Área Plantada' : 'Produtividade';
}

// Atualiza o painel de filtro/detalhes da UF ativa
function updateFilterDetailsPanel() {
    const detailsContainer = document.getElementById('filter-details-container');
    if (!state.focusUF) {
        detailsContainer.style.display = 'none';
        return;
    }

    detailsContainer.style.display = 'flex';
    const crop = CONAB_DATA.crops[state.activeCrop];
    const ufName = UF_TO_NAME[state.focusUF] || state.focusUF;
    document.getElementById('filter-uf-title').innerHTML = `<i data-lucide="map-pin"></i> ${ufName} (${state.focusUF})`;
    
    // Recarregar ícones do Lucide
    lucide.createIcons();

    const ufData = crop.states[state.focusUF];
    if (ufData) {
        const idx = state.activeYearIdx;
        const prod = ufData.production[idx] || 0;
        const area = ufData.area[idx] || 0;
        const yieldVal = ufData.yield[idx] || 0;

        document.getElementById('filter-prod').textContent = formatValue(prod, 'production');
        document.getElementById('filter-area').textContent = formatValue(area, 'area');
        document.getElementById('filter-yield').textContent = formatValue(yieldVal, 'yield');
    } else {
        document.getElementById('filter-prod').textContent = 'Sem registro';
        document.getElementById('filter-area').textContent = 'Sem registro';
        document.getElementById('filter-yield').textContent = 'Sem registro';
    }
}

// Inicializa ou atualiza o gráfico de barras horizontais (Ranking de UFs)
function updateRankingChart() {
    const crop = CONAB_DATA.crops[state.activeCrop];
    if (!crop) return;

    const idx = state.activeYearIdx;
    
    // Extrai os valores das UFs para o ano selecionado
    const dataList = Object.entries(crop.states)
        .filter(([uf, _]) => uf !== 'BR')
        .map(([uf, ufData]) => ({
            uf: uf,
            name: UF_TO_NAME[uf] || uf,
            value: ufData[state.activeMetric][idx] || 0
        }))
        .filter(item => item.value > 0)
        .sort((a, b) => b.value - a.value)
        .slice(0, 10); // Top 10

    const labels = dataList.map(item => `${item.uf} - ${item.name}`);
    const dataValues = dataList.map(item => item.value);

    // Cor das barras varia conforme a métrica selecionada
    const barColors = state.activeMetric === 'production' 
        ? 'rgba(92, 156, 56, 0.75)' 
        : state.activeMetric === 'area' ? 'rgba(10, 168, 167, 0.75)' : 'rgba(224, 172, 40, 0.75)';

    const borderColors = state.activeMetric === 'production' 
        ? '#5c9c38' 
        : state.activeMetric === 'area' ? '#0aa8a7' : '#e0ac28';

    if (rankingChart) {
        rankingChart.data.labels = labels;
        rankingChart.data.datasets[0].data = dataValues;
        rankingChart.data.datasets[0].backgroundColor = barColors;
        rankingChart.data.datasets[0].borderColor = borderColors;
        rankingChart.update();
    } else {
        const ctx = document.getElementById('rankingChart').getContext('2d');
        rankingChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: dataValues,
                    backgroundColor: barColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(8, 14, 8, 0.95)',
                        borderColor: '#5c9c38',
                        borderWidth: 1,
                        titleColor: '#e0ac28',
                        bodyColor: '#ecf3e8',
                        titleFont: { family: 'Outfit', weight: 'bold' },
                        bodyFont: { family: 'Inter' },
                        callbacks: {
                            label: function(context) {
                                return ` ${formatValue(context.raw, state.activeMetric)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#a3b899', font: { family: 'Inter', size: 10 } }
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: '#ecf3e8', font: { family: 'Outfit', size: 11 } }
                    }
                }
            }
        });
    }
}

// Inicializa ou atualiza o gráfico de linha (Evolução Temporal)
function updateEvolutionChart() {
    const crop = CONAB_DATA.crops[state.activeCrop];
    if (!crop) return;

    const safras = crop.safras;
    const activeTarget = state.focusUF || 'BR';
    const targetData = crop.states[activeTarget];
    
    const dataValues = targetData ? targetData[state.activeMetric] : new Array(safras.length).fill(0);

    const themeColors = state.activeMetric === 'production' 
        ? { stroke: '#5c9c38', fill: 'rgba(92, 156, 56, 0.08)' } 
        : state.activeMetric === 'area' 
            ? { stroke: '#0aa8a7', fill: 'rgba(10, 168, 167, 0.08)' } 
            : { stroke: '#e0ac28', fill: 'rgba(224, 172, 40, 0.08)' };

    if (evolutionChart) {
        evolutionChart.data.labels = safras;
        evolutionChart.data.datasets[0].label = state.focusUF ? `${state.focusUF} - ${UF_TO_NAME[state.focusUF]}` : 'Brasil';
        evolutionChart.data.datasets[0].data = dataValues;
        evolutionChart.data.datasets[0].borderColor = themeColors.stroke;
        evolutionChart.data.datasets[0].backgroundColor = themeColors.fill;
        evolutionChart.update();
    } else {
        const ctx = document.getElementById('evolutionChart').getContext('2d');
        evolutionChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: safras,
                datasets: [{
                    label: 'Brasil',
                    data: dataValues,
                    borderColor: themeColors.stroke,
                    backgroundColor: themeColors.fill,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.2,
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#ecf3e8', font: { family: 'Outfit', size: 12 } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(8, 14, 8, 0.95)',
                        borderColor: '#5c9c38',
                        borderWidth: 1,
                        titleColor: '#e0ac28',
                        bodyColor: '#ecf3e8',
                        titleFont: { family: 'Outfit', weight: 'bold' },
                        bodyFont: { family: 'Inter' },
                        callbacks: {
                            label: function(context) {
                                return ` ${formatValue(context.raw, state.activeMetric)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.03)' },
                        ticks: { 
                            color: '#a3b899', 
                            font: { family: 'Inter', size: 9 },
                            maxRotation: 45,
                            autoSkip: true,
                            maxTicksLimit: 15
                        }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#a3b899', font: { family: 'Inter', size: 10 } }
                    }
                }
            }
        });
    }
}

// ==========================================
// MAPA INTERATIVO (LEAFLET E CHOROPLETH)
// ==========================================

// Estilo padrão de cada feição do estado no GeoJSON
function styleFeature(feature) {
    const uf = CODE_TO_UF[feature.properties.codarea];
    const crop = CONAB_DATA.crops[state.activeCrop];
    let val = 0;
    
    if (crop && crop.states[uf]) {
        val = crop.states[uf][state.activeMetric][state.activeYearIdx] || 0;
    }

    const scale = getColorScale();
    const isSelected = state.focusUF === uf;

    return {
        fillColor: getColor(val, scale),
        weight: isSelected ? 3.5 : 1,
        opacity: isSelected ? 1 : 0.6,
        color: isSelected ? '#e0ac28' : 'rgba(255,255,255,0.15)',
        fillOpacity: isSelected ? 0.9 : 0.7,
        dashArray: isSelected ? '' : '2'
    };
}

// Ações executadas ao passar o mouse, tirar o mouse ou clicar em um estado
function onEachFeature(feature, layer) {
    const uf = CODE_TO_UF[feature.properties.codarea];
    const crop = CONAB_DATA.crops[state.activeCrop];
    const ufName = UF_TO_NAME[uf] || uf;
    
    let val = 0;
    if (crop && crop.states[uf]) {
        val = crop.states[uf][state.activeMetric][state.activeYearIdx] || 0;
    }

    // Tooltip contendo as informações da UF
    layer.bindTooltip(`
        <div style="font-family: 'Outfit', sans-serif; font-size: 13px; line-height: 1.4;">
            <b>${ufName} (${uf})</b><br>
            ${state.activeMetric === 'production' ? 'Produção' : state.activeMetric === 'area' ? 'Área' : 'Produtividade'}: 
            <span style="color:#e0ac28; font-weight:700;">${formatValue(val, state.activeMetric)}</span>
        </div>
    `, { sticky: true, className: 'leaflet-tooltip-custom' });

    layer.on({
        mouseover: function(e) {
            const l = e.target;
            l.setStyle({
                weight: state.focusUF === uf ? 3.5 : 2,
                color: state.focusUF === uf ? '#e0ac28' : '#fff',
                fillOpacity: 0.8
            });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                l.bringToFront();
            }
        },
        mouseout: function(e) {
            geojsonLayer.resetStyle(e.target);
        },
        click: function(e) {
            if (state.focusUF === uf) {
                state.focusUF = null; // Limpa filtro ao clicar no mesmo
            } else {
                state.focusUF = uf; // Filtra por esta UF
            }
            updateAppView();
        }
    });
}

// Inicializa o mapa do Leaflet
function initMap() {
    // Coordenadas centrais do Brasil
    mapBR = L.map('map-br', {
        zoomControl: true,
        attributionControl: false
    }).setView([-15.0, -53.0], 4);

    // Carrega o GeoJSON das UFs (definido no arquivo malha_br_ufs.js como GEOM_BR_UFS)
    geojsonLayer = L.geoJSON(GEOM_BR_UFS, {
        style: styleFeature,
        onEachFeature: onEachFeature
    }).addTo(mapBR);

    updateMapLegend();
}

// Desenha/Atualiza a legenda do mapa
function updateMapLegend() {
    const scale = getColorScale();
    const container = document.getElementById('map-legend-scale');
    container.innerHTML = '';

    scale.colors.forEach((color) => {
        const cell = document.createElement('div');
        cell.className = 'legend-scale-cell';
        cell.style.backgroundColor = color;
        container.appendChild(cell);
    });

    const stops = scale.stops;
    document.getElementById('legend-min').textContent = formatValue(0, state.activeMetric);
    document.getElementById('legend-max').textContent = formatValue(stops[4], state.activeMetric);
}

// ==========================================
// CONTROLES DA LINHA DO TEMPO (SLIDER & PLAY)
// ==========================================

// Inicializa o Slider temporal e os controles
function initTimeline() {
    const safras = getActiveSafras();
    const slider = document.getElementById('timeline-slider');
    
    slider.min = 0;
    slider.max = safras.length - 1;
    slider.value = state.activeYearIdx;

    // Define os rótulos de início e fim da linha do tempo
    document.getElementById('timeline-start-label').textContent = safras[0] || '';
    document.getElementById('timeline-end-label').textContent = safras[safras.length - 1] || '';

    // Atualiza o display da safra atual
    document.getElementById('display-year').textContent = getActiveSafraName();
}

// Play/Pause na animação temporal
function togglePlay() {
    const btn = document.getElementById('play-btn');
    const safras = getActiveSafras();

    if (state.isPlaying) {
        // Pausa
        state.isPlaying = false;
        clearInterval(state.playInterval);
        btn.innerHTML = '<i data-lucide="play"></i>';
    } else {
        // Inicia Play
        state.isPlaying = true;
        btn.innerHTML = '<i data-lucide="pause"></i>';
        
        state.playInterval = setInterval(() => {
            state.activeYearIdx++;
            if (state.activeYearIdx >= safras.length) {
                // Ao final da timeline, reinicia
                state.activeYearIdx = 0;
            }
            
            // Sincroniza controles
            document.getElementById('timeline-slider').value = state.activeYearIdx;
            document.getElementById('display-year').textContent = getActiveSafraName();
            
            // Atualiza apenas os componentes da safra ativa
            updateKPIs();
            updateFilterDetailsPanel();
            updateRankingChart();
            if (geojsonLayer) geojsonLayer.setStyle(styleFeature);
        }, 850); // Intervalo de 850ms entre safras para visualização suave
    }
    lucide.createIcons();
}

// ==========================================
// CONTROLE DE CICLO DE ATUALIZAÇÃO GERAL
// ==========================================

// Atualiza todos os componentes do app para sincronizar o estado
function updateAppView() {
    // 1. Legenda e escala do mapa
    updateMapLegend();
    
    // 2. Aplicar estilos e re-vincular eventos no GeoJSON do mapa
    if (geojsonLayer) {
        geojsonLayer.setStyle(styleFeature);
    }
    
    // 3. Atualizar textos dos KPIs e filtros de UFs
    updateKPIs();
    updateFilterDetailsPanel();
    
    // 4. Atualizar gráficos
    updateRankingChart();
    updateEvolutionChart();

    // 5. Rótulo de Safra Ativa na linha do tempo
    document.getElementById('display-year').textContent = getActiveSafraName();
}

// Inicialização completa do aplicativo ao carregar os dados
function initApp() {
    // Define a cultura inicial como Soja
    state.activeCrop = 'soja';
    const safras = getActiveSafras();
    state.activeYearIdx = safras.length - 1; // Começa na safra mais recente (2025/26)

    // Preenche categorias e dropdowns
    populateCropsDropdown();
    initTimeline();

    // Renderiza o mapa Leaflet
    initMap();

    // Renderiza todos os KPIs e gráficos
    updateAppView();

    // Registrar Event Listeners do DOM
    setupEventListeners();

    // Inicializar ícones do Lucide
    lucide.createIcons();
}

// Define todos os ouvintes de eventos da página
function setupEventListeners() {
    // Tabs de categoria (Grãos, Café, Cana)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            state.activeCategory = e.target.dataset.category;
            
            // Define cultura padrão da nova categoria
            if (state.activeCategory === 'Grãos') state.activeCrop = 'soja';
            else if (state.activeCategory === 'Café') state.activeCrop = 'cafe';
            else if (state.activeCategory === 'Cana-de-Açúcar') state.activeCrop = 'cana';

            populateCropsDropdown();
            
            // Reseta a timeline para o ano mais recente da nova cultura
            const safras = getActiveSafras();
            state.activeYearIdx = safras.length - 1;
            
            initTimeline();
            state.focusUF = null; // Limpa filtro de UF
            
            updateAppView();
        });
    });

    // Dropdown de seleção de cultura
    document.getElementById('crop-select').addEventListener('change', (e) => {
        state.activeCrop = e.target.value;
        const safras = getActiveSafras();
        
        // Ajusta o índice do ano se exceder a lista da nova cultura
        if (state.activeYearIdx >= safras.length) {
            state.activeYearIdx = safras.length - 1;
        }

        initTimeline();
        state.focusUF = null; // Limpa filtro de UF
        updateAppView();
    });

    // Seletor de métrica (produção, área, produtividade)
    document.getElementById('metric-select').addEventListener('change', (e) => {
        state.activeMetric = e.target.value;
        updateAppView();
    });

    // Slider de linha do tempo
    document.getElementById('timeline-slider').addEventListener('input', (e) => {
        state.activeYearIdx = parseInt(e.target.value);
        
        // Se estiver tocando, pausa
        if (state.isPlaying) togglePlay();

        document.getElementById('display-year').textContent = getActiveSafraName();
        
        // Atualiza apenas os dados vinculados ao ano
        updateKPIs();
        updateFilterDetailsPanel();
        updateRankingChart();
        if (geojsonLayer) geojsonLayer.setStyle(styleFeature);
    });

    // Botão de Play/Pause da linha do tempo
    document.getElementById('play-btn').addEventListener('click', togglePlay);

    // Botão de limpar filtro de UF
    document.getElementById('btn-clear-uf').addEventListener('click', () => {
        state.focusUF = null;
        updateAppView();
    });
}

// Inicializa a aplicação quando a janela e os arquivos JS carregarem
window.addEventListener('load', () => {
    initApp();
});

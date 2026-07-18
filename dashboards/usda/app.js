// ==========================================
// CONFIGURAÇÕES GLOBAIS E ESTADO DO APP
// ==========================================
let appData = null;      // Armazenará os dados do JSON do USDA
let worldMap = null;     // Objeto do mapa Leaflet
let geojsonLayer = null; // Camada GeoJSON do mapa
let worldGeoJSON = null; // Dados do mapa da CDN

// Estado da Aplicação
const state = {
    activeCommodity: 'wheat', // wheat, corn, soybean, rice, barley, cotton
    activeMetric: 'yield',    // yield, production, area, consumption, imports, exports
    activeYear: 2025,
    selectedCountries: ["World", "United States", "China", "India", "Russia", "Brazil"],
    isPlaying: false,
    playInterval: null,
    focusCountry: null
};

// Mapeamento de nomes de países (GeoJSON Name -> USDA Key Name)
const countryNameMapping = {
    "United States of America": "United States",
    "Russian Federation": "Russia",
    "Viet Nam": "Vietnam",
    "Republic of Korea": "South Korea",
    "Iran (Islamic Republic of)": "Iran",
    "Syrian Arab Republic": "Syria",
    "United Republic of Tanzania": "Tanzania",
    "Democratic Republic of the Congo": "Congo (Kinshasa)",
    "Republic of the Congo": "Congo (Brazzaville)",
    "Burma": "Burma",
    "Cote d'Ivoire": "Cote d'Ivoire",
    "Czech Republic": "Czech Republic",
    "Slovakia": "Slovakia",
    "Macedonia": "North Macedonia"
};

// Arquivos JSON correspondentes para cada commodity
const commodityFiles = {
    wheat: 'wheat_data.json',
    corn: 'corn_data.json',
    soybean: 'soybean_data.json',
    rice: 'rice_data.json',
    barley: 'barley_data.json',
    cotton: 'cotton_data.json'
};

// Nomes de exibição das commodities para o painel
const commodityDisplayNames = {
    wheat: { title: "Trigo Global", subtitle: "Análise de Produtividade, Área e Produção de Trigo (Dados USDA PSD)" },
    corn: { title: "Milho Global", subtitle: "Análise de Produtividade, Área e Produção de Milho (Dados USDA PSD)" },
    soybean: { title: "Soja Global", subtitle: "Análise de Produtividade, Área e Produção de Soja (Dados USDA PSD)" },
    rice: { title: "Arroz Global", subtitle: "Análise de Produtividade, Área e Produção de Arroz (Dados USDA PSD)" },
    barley: { title: "Cevada Global", subtitle: "Análise de Produtividade, Área e Produção de Cevada (Dados USDA PSD)" },
    cotton: { title: "Algodão Global", subtitle: "Análise de Produtividade, Área e Produção de Algodão (Dados USDA PSD)" },
    coffee: { title: "Café Global", subtitle: "Análise de Produção, Consumo e Comércio de Café (Dados USDA PSD)" },
    sugar: { title: "Açúcar Global", subtitle: "Análise de Produção, Consumo e Comércio de Açúcar (Dados USDA PSD)" },
    palm_oil: { title: "Óleo de Palma Global", subtitle: "Análise de Produtividade, Área e Produção de Óleo de Palma (Dados USDA PSD)" },
    beef: { title: "Carne Bovina Global", subtitle: "Análise de Produção, Consumo e Comércio de Carne Bovina (Dados USDA PSD)" },
    pork: { title: "Carne Suína Global", subtitle: "Análise de Produção, Consumo e Comércio de Carne Suína (Dados USDA PSD)" },
    poultry: { title: "Carne de Aves Global", subtitle: "Análise de Produção, Consumo e Comércio de Aves de Corte (Dados USDA PSD)" }
};

// Escalas de cores de produtividade (Yield) específicas para cada cultura
// As demais métricas compartilham uma escala genérica escalada por valor
const yieldScales = {
    wheat: {
        stops: [0.5, 1.5, 2.5, 4.0, 6.0],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    },
    corn: {
        stops: [1.5, 3.0, 5.0, 7.5, 10.0],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    },
    soybean: {
        stops: [0.5, 1.2, 2.0, 2.8, 3.5],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    },
    rice: {
        stops: [1.0, 2.5, 4.0, 5.5, 7.0],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    },
    barley: {
        stops: [0.5, 1.5, 2.5, 4.0, 5.5],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    },
    cotton: {
        stops: [150, 400, 750, 1100, 1600],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'KG/HA'
    },
    palm_oil: {
        stops: [1.0, 2.0, 3.0, 4.0, 5.0],
        colors: ['#ffe2a0', '#f4c360', '#e2b13c', '#b8860b', '#10b981'],
        unit: 'MT/HA'
    }
};

// Escalas para as métricas volumétricas (Genéricas)
const genericScales = {
    production: {
        stops: [500, 2000, 10000, 50000, 100000],
        colors: ['#e0f2fe', '#bae6fd', '#38bdf8', '#0284c7', '#0369a1']
    },
    area: {
        stops: [100, 500, 2000, 7500, 15000],
        colors: ['#ecfeff', '#cffafe', '#22d3ee', '#0891b2', '#0e7490']
    },
    consumption: {
        stops: [500, 2000, 10000, 50000, 100000],
        colors: ['#fef3c7', '#fde68a', '#fbbf24', '#d97706', '#b45309']
    },
    imports: {
        stops: [50, 250, 1000, 3000, 7500],
        colors: ['#f5f3ff', '#ddd6fe', '#a78bfa', '#7c3aed', '#5b21b6']
    },
    exports: {
        stops: [50, 250, 1000, 5000, 15000],
        colors: ['#fff7ed', '#ffedd5', '#fed7aa', '#f97316', '#c2410c']
    },
    stocks_to_use: {
        stops: [10, 20, 35, 50, 70],
        colors: ['#fdf2f8', '#fbcfe8', '#f472b6', '#db2777', '#9d174d']
    }
};

// Função auxiliar para retornar rótulo de unidade dinâmico
function getMetricUnitLabel(metric, commodity) {
    const isCotton = commodity === 'cotton';
    const isCoffee = commodity === 'coffee';
    
    if (metric === 'yield') {
        return isCotton ? "KG/HA (Quilos por Hectare)" : "MT/HA (Toneladas por Hectare)";
    }
    if (metric === 'area') {
        return "1.000 HA (Milhares de Hectares)";
    }
    if (metric === 'stocks_to_use') {
        return "% (Relação Estoque/Consumo)";
    }
    
    let unitName = "MT";
    if (isCotton) unitName = "Fardos";
    else if (isCoffee) unitName = "Sacas 60kg";
    
    const labelDetail = isCotton 
        ? "Fardos de 480 lb" 
        : (isCoffee ? "Sacas de 60 kg" : "Toneladas");
        
    if (metric === 'production') return `1.000 ${unitName} (Milhares de ${labelDetail})`;
    if (metric === 'consumption') return `1.000 ${unitName} (Milhares de ${labelDetail})`;
    if (metric === 'imports') return `1.000 ${unitName} (Milhares de ${labelDetail})`;
    if (metric === 'exports') return `1.000 ${unitName} (Milhares de ${labelDetail})`;
    
    return "1.000 Unidades";
}

// Gráficos do Chart.js
let temporalChart = null;
let rankingChart = null;

// ==========================================
// ==========================================
// INICIALIZAÇÃO E CARREGAMENTO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Apontar GeoJSON do Mapa direto para a variável global carregada pelo script no HTML
        worldGeoJSON = WORLD_GEOJSON;
        
        // Inicializar Componentes
        initMap();
        initCharts();
        setupEventListeners();
        
        // Carregar a primeira commodity (Trigo)
        changeCommodity('wheat');
        
    } catch (error) {
        console.error("Erro na inicialização da aplicação:", error);
        alert("Erro ao carregar dados do USDA ou mapa global. Verifique os logs do console.");
    }
});

function validateMetricSelection(commodityCode) {
    const noAreaCommodities = ['beef', 'pork', 'poultry', 'coffee', 'sugar'];
    const metricSelect = document.getElementById('active-metric');
    if (!metricSelect) return;
    
    const isNoArea = noAreaCommodities.includes(commodityCode);
    
    // Desabilitar/habilitar opções no select
    Array.from(metricSelect.options).forEach(option => {
        if (option.value === 'yield' || option.value === 'area') {
            option.disabled = isNoArea;
        }
    });
    
    // Se a métrica ativa for uma das desabilitadas, alternar para production
    if (isNoArea && (state.activeMetric === 'yield' || state.activeMetric === 'area')) {
        state.activeMetric = 'production';
        metricSelect.value = 'production';
    }
}

// Alternar commodity (Cultura ativa)
function changeCommodity(commodityCode) {
    try {
        state.activeCommodity = commodityCode;
        
        // Obter dados locais direto da variável global consolidada injetada via HTML
        if (typeof ALL_COMMODITIES_DATA !== 'undefined') {
            appData = ALL_COMMODITIES_DATA[commodityCode];
        } else {
            console.error("Variável global ALL_COMMODITIES_DATA não está definida!");
            return;
        }
        
        if (!appData) {
            console.error(`Dados não encontrados para a commodity: ${commodityCode}`);
            return;
        }
        
        // Validar e limitar a seleção de métrica conforme o tipo de commodity
        validateMetricSelection(commodityCode);
        
        // Atualizar Títulos da Página
        const textInfo = commodityDisplayNames[commodityCode];
        document.getElementById('app-title').innerText = textInfo.title;
        document.getElementById('app-subtitle').innerText = textInfo.subtitle;
        
        // Atualizar limites do slider de ano
        const years = appData.years;
        const minYear = years[0];
        const maxYear = years[years.length - 1];
        
        const slider = document.getElementById('year-slider');
        slider.min = minYear;
        slider.max = maxYear;
        
        // Ajustar ano ativo caso caia fora do intervalo novo
        if (state.activeYear > maxYear) state.activeYear = maxYear;
        if (state.activeYear < minYear) state.activeYear = minYear;
        slider.value = state.activeYear;
        
        document.getElementById('start-year-label').innerText = minYear;
        document.getElementById('end-year-label').innerText = maxYear;
        
        // Validar e limpar países selecionados (alguns países podem não existir na nova commodity)
        state.selectedCountries = state.selectedCountries.filter(countryName => {
            return appData.countries[countryName] !== undefined;
        });
        
        // Garantir que pelo menos o "World" está na comparação temporal
        if (!state.selectedCountries.includes("World") && appData.countries["World"]) {
            state.selectedCountries.unshift("World");
        }
        
        // Limpar foco de país se ele não tiver dados na nova commodity
        if (state.focusCountry && !appData.countries[state.focusCountry]) {
            state.focusCountry = null;
        }
        
        // Renderizar chips de países ativos
        renderActiveCountryChips();
        
        // Redesenhar a camada de países no mapa para resetar propriedades
        renderMapLayer();
        
        // Atualizar o painel completo
        updateDashboard();
        
    } catch (error) {
        console.error(`Erro ao carregar commodity ${commodityCode}:`, error);
        alert(`Não foi possível carregar os dados para a cultura selecionada.`);
    }
}

// ==========================================
// CONFIGURAÇÃO DO MAPA (LEAFLET)
// ==========================================
function initMap() {
    worldMap = L.map('world-map', {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        minZoom: 1.5,
        maxZoom: 7,
        maxBounds: [[-90, -180], [90, 180]]
    });
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(worldMap);
}

function renderMapLayer() {
    if (geojsonLayer) {
        worldMap.removeLayer(geojsonLayer);
    }
    
    geojsonLayer = L.geoJson(worldGeoJSON, {
        style: getCountryStyle,
        onEachFeature: onEachCountryFeature
    }).addTo(worldMap);
}

function updateMapColors() {
    renderMapLayer();
}

// Obter valor de um país a partir do nome no GeoJSON
function getCountryDataValue(geoName, metric, year) {
    let usdaName = countryNameMapping[geoName] || geoName;
    
    const countryData = appData.countries[usdaName];
    if (!countryData || countryData.is_region) return null;
    
    const yearIndex = countryData.years.indexOf(year);
    if (yearIndex === -1) return null;
    
    if (metric === 'stocks_to_use') {
        const stocks = countryData.stocks ? countryData.stocks[yearIndex] : 0;
        const consumption = countryData.consumption ? countryData.consumption[yearIndex] : 0;
        if (consumption > 0) {
            return (stocks / consumption) * 100;
        }
        return 0;
    }
    
    return countryData[metric] ? countryData[metric][yearIndex] : null;
}

// Determinar a cor de preenchimento de um país baseado no valor e cultura
function getColor(value, metric) {
    if (value === null || value === undefined || value === 0) {
        return 'rgba(255, 255, 255, 0.05)'; // Sem dados da cultura
    }
    
    // Obter escala de acordo com a métrica e cultura
    const scale = metric === 'yield' 
        ? yieldScales[state.activeCommodity] 
        : genericScales[metric];
        
    for (let i = 0; i < scale.stops.length; i++) {
        if (value <= scale.stops[i]) {
            return scale.colors[i];
        }
    }
    return scale.colors[scale.colors.length - 1];
}

// Estilo CSS dos países
function getCountryStyle(feature) {
    const countryName = feature.properties.name;
    const val = getCountryDataValue(countryName, state.activeMetric, state.activeYear);
    
    return {
        fillColor: getColor(val, state.activeMetric),
        weight: 1,
        opacity: 1,
        color: 'rgba(255, 255, 255, 0.12)',
        fillOpacity: 0.8
    };
}

// Hover e clique no mapa
function onEachCountryFeature(feature, layer) {
    layer.on({
        mouseover: (e) => {
            const l = e.target;
            l.setStyle({
                weight: 1.5,
                color: 'rgba(226, 177, 60, 0.8)',
                fillOpacity: 0.95
            });
            l.bringToFront();
            
            const countryName = feature.properties.name;
            let usdaName = countryNameMapping[countryName] || countryName;
            const val = getCountryDataValue(countryName, state.activeMetric, state.activeYear);
            
            let formattedValue = val !== null ? val.toLocaleString('pt-BR') : "Sem dados";
            
            // Unidade correta
            let unit = state.activeMetric === 'yield' 
                ? (state.activeCommodity === 'cotton' ? "KG/HA" : "MT/HA")
                : (state.activeCommodity === 'cotton' ? "1000 Bales" : "1000 MT");
            if (val === null) unit = "";
            
            l.bindTooltip(`<strong>${usdaName}</strong><br>${state.activeMetric.toUpperCase()}: ${formattedValue} ${unit}`, {
                direction: 'top',
                sticky: true,
                className: 'leaflet-tooltip-dark'
            }).openTooltip();
        },
        mouseout: (e) => {
            geojsonLayer.resetStyle(e.target);
        },
        click: (e) => {
            const countryName = feature.properties.name;
            let usdaName = countryNameMapping[countryName] || countryName;
            
            if (appData.countries[usdaName]) {
                selectCountryForFocus(usdaName);
                addCountryToComparison(usdaName);
            }
        }
    });
}

// Atualizar legenda do mapa baseada na commodity e métrica
function updateMapLegend() {
    const legendContainer = document.getElementById('map-legend');
    legendContainer.innerHTML = '';
    
    const scale = state.activeMetric === 'yield' 
        ? yieldScales[state.activeCommodity] 
        : genericScales[state.activeMetric];
        
    const isCotton = state.activeCommodity === 'cotton';
    let unit = "";
    if (state.activeMetric === 'yield') {
        unit = isCotton ? "KG/HA" : "MT/HA";
    } else if (state.activeMetric === 'area') {
        unit = "1.000 HA";
    } else {
        unit = isCotton ? "1.000 Bales" : "1.000 MT";
    }
    
    // Sem dados
    let html = `
        <div class="legend-item">
            <span class="legend-color" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15)"></span>
            <span>Sem dados</span>
        </div>
    `;
    
    // Gradiente de stops
    for (let i = 0; i < scale.stops.length; i++) {
        let label = '';
        if (i === 0) {
            label = `< ${scale.stops[i]}`;
        } else if (i === scale.stops.length - 1) {
            label = `> ${scale.stops[i - 1]}`;
        } else {
            label = `${scale.stops[i - 1]} - ${scale.stops[i]}`;
        }
        
        html += `
            <div class="legend-item">
                <span class="legend-color" style="background: ${scale.colors[i]}"></span>
                <span>${label} ${unit}</span>
            </div>
        `;
    }
    
    legendContainer.innerHTML = html;
}

// ==========================================
// CONFIGURAÇÃO E MANIPULAÇÃO DE GRÁFICOS
// ==========================================
function initCharts() {
    // 1. Gráfico de linha temporal
    const ctxTemporal = document.getElementById('temporal-chart').getContext('2d');
    temporalChart = new Chart(ctxTemporal, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#f3f4f6',
                        font: { family: 'Inter', size: 11, weight: '500' },
                        boxWidth: 12,
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 15, 25, 0.95)',
                    titleColor: '#f3f4f6',
                    bodyColor: '#e5e7eb',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    titleFont: { family: 'Outfit', weight: 'bold' },
                    bodyFont: { family: 'Inter' }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.03)' },
                    ticks: { color: '#9ca3af', font: { family: 'Inter', size: 10 } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#9ca3af', font: { family: 'Inter', size: 10 } }
                }
            }
        }
    });

    // 2. Gráfico de ranking
    const ctxRanking = document.getElementById('ranking-chart').getContext('2d');
    rankingChart = new Chart(ctxRanking, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Valor',
                data: [],
                backgroundColor: 'rgba(226, 177, 60, 0.75)',
                borderColor: 'rgba(226, 177, 60, 1)',
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
                    backgroundColor: 'rgba(11, 15, 25, 0.95)',
                    titleColor: '#f3f4f6',
                    bodyColor: '#e5e7eb',
                    titleFont: { family: 'Outfit', weight: 'bold' },
                    bodyFont: { family: 'Inter' }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.03)' },
                    ticks: { color: '#9ca3af', font: { family: 'Inter', size: 10 } }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#f3f4f6', font: { family: 'Inter', size: 10 } }
                }
            }
        }
    });
}

function updateTemporalChart() {
    try {
        if (!temporalChart || !appData) return;
        
        const datasets = [];
        const colors = ['#e2b13c', '#3b82f6', '#10b981', '#ec4899', '#8b5cf6', '#06b6d4', '#f97316', '#ef4444'];
        
        state.selectedCountries.forEach((cName, idx) => {
            const countryData = appData.countries[cName];
            if (!countryData) return;
            
            const plotData = appData.years.map(yr => {
                const index = countryData.years.indexOf(yr);
                return (index !== -1 && countryData[state.activeMetric]) ? countryData[state.activeMetric][index] : null;
            });
            
            const color = colors[idx % colors.length];
            
            datasets.push({
                label: cName,
                data: plotData,
                borderColor: color,
                backgroundColor: color + '15',
                borderWidth: cName === "World" ? 3.5 : 2,
                borderDash: cName === "World" ? [5, 5] : [],
                tension: 0.15,
                pointRadius: 1,
                pointHoverRadius: 5
            });
        });
        
        temporalChart.data.labels = appData.years;
        temporalChart.data.datasets = datasets;
        
        if (temporalChart.options && temporalChart.options.scales && temporalChart.options.scales.y) {
            temporalChart.options.scales.y.title = {
                display: true,
                text: getMetricUnitLabel(state.activeMetric, state.activeCommodity),
                color: '#9ca3af',
                font: { family: 'Inter', size: 10 }
            };
        }
        
        temporalChart.update('none');
    } catch (error) {
        console.error("Erro ao atualizar gráfico temporal:", error);
    }
}

function updateRankingChart() {
    try {
        if (!rankingChart || !appData) return;
        
        const year = state.activeYear;
        const metric = state.activeMetric;
        const countryValues = [];
        
        for (const [cName, cData] of Object.entries(appData.countries)) {
            if (cData.is_region) continue;
            
            const yrIdx = cData.years.indexOf(year);
            if (yrIdx !== -1 && cData[metric]) {
                const val = cData[metric][yrIdx];
                if (val > 0) {
                    countryValues.push({ name: cName, value: val });
                }
            }
        }
        
        countryValues.sort((a, b) => b.value - a.value);
        const top10 = countryValues.slice(0, 10);
        
        const labels = top10.map(item => item.name);
        const data = top10.map(item => item.value);
        
        // Determinar cor de destaque do ranking
        let barColor = 'rgba(226, 177, 60, 0.7)';
        let borderColor = 'rgba(226, 177, 60, 1)';
        
        if (metric === 'production') { barColor = 'rgba(59, 130, 246, 0.7)'; borderColor = 'rgba(59, 130, 246, 1)'; }
        else if (metric === 'area') { barColor = 'rgba(6, 182, 212, 0.7)'; borderColor = 'rgba(6, 182, 212, 1)'; }
        else if (metric === 'imports') { barColor = 'rgba(124, 58, 237, 0.7)'; borderColor = 'rgba(124, 58, 237, 1)'; }
        else if (metric === 'exports') { barColor = 'rgba(249, 115, 22, 0.7)'; borderColor = 'rgba(249, 115, 22, 1)'; }
        else if (metric === 'consumption') { barColor = 'rgba(236, 72, 153, 0.7)'; borderColor = 'rgba(236, 72, 153, 1)'; }
        
        rankingChart.data.labels = labels;
        if (rankingChart.data.datasets && rankingChart.data.datasets[0]) {
            rankingChart.data.datasets[0].data = data;
            rankingChart.data.datasets[0].backgroundColor = barColor;
            rankingChart.data.datasets[0].borderColor = borderColor;
            
            const unitLabel = getMetricUnitLabel(metric, state.activeCommodity);
            rankingChart.data.datasets[0].label = unitLabel ? unitLabel.split(" ")[0] : "";
        }
        
        rankingChart.update();
    } catch (error) {
        console.error("Erro ao atualizar gráfico de ranking:", error);
    }
}

// Função para gerar o título principal dinâmico
function getDynamicAppTitle(metric, commodity) {
    const metricNames = {
        yield: "Produtividade",
        production: "Produção",
        area: "Área Colhida",
        consumption: "Consumo Doméstico",
        imports: "Importações",
        exports: "Exportações",
        stocks_to_use: "Relação Estoque/Consumo"
    };
    
    const commodityNames = {
        wheat: "Trigo",
        corn: "Milho",
        soybean: "Soja",
        rice: "Arroz",
        barley: "Cevada",
        cotton: "Algodão",
        coffee: "Café",
        sugar: "Açúcar",
        palm_oil: "Óleo de Palma",
        beef: "Carne Bovina",
        pork: "Carne Suína",
        poultry: "Carne de Aves"
    };
    
    const mName = metricNames[metric] || "Análise";
    const cName = commodityNames[commodity] || "Cultura";
    
    return `${mName} - ${cName} - Global`;
}

// ==========================================
// ATUALIZAÇÃO DO DASHBOARD E KPIS
// ==========================================
function updateDashboard() {
    try { updateKPIs(); } catch (e) { console.error("Erro ao atualizar KPIs:", e); }
    try { updateMapColors(); } catch (e) { console.error("Erro ao atualizar cores do mapa:", e); }
    try { updateMapLegend(); } catch (e) { console.error("Erro ao atualizar legenda do mapa:", e); }
    try { updateRankingChart(); } catch (e) { console.error("Erro ao atualizar gráfico de ranking:", e); }
    try { updateTemporalChart(); } catch (e) { console.error("Erro ao atualizar gráfico temporal:", e); }
    try { updateFocusCountryPanel(); } catch (e) { console.error("Erro ao atualizar painel de país em foco:", e); }
    
    try {
        // Atualizar Título Dinâmico Principal
        const dynamicTitle = getDynamicAppTitle(state.activeMetric, state.activeCommodity);
        const appTitleEl = document.getElementById('app-title');
        if (appTitleEl) appTitleEl.innerText = dynamicTitle;
        
        // Atualizar Subtítulo
        const appSubtitleEl = document.getElementById('app-subtitle');
        if (appSubtitleEl) {
            const commodityNames = {
                wheat: "Trigo",
                corn: "Milho",
                soybean: "Soja",
                rice: "Arroz",
                barley: "Cevada",
                cotton: "Algodão",
                coffee: "Café",
                sugar: "Açúcar",
                palm_oil: "Óleo de Palma",
                beef: "Carne Bovina",
                pork: "Carne Suína",
                poultry: "Carne de Aves"
            };
            const cName = commodityNames[state.activeCommodity] || "Cultura";
            appSubtitleEl.innerText = `Análise Temporal e Espacial de ${cName} (Dados Oficiais USDA PSD)`;
        }
        
        // Atualizar Título do Painel do Mapa
        const mapLabels = {
            yield: "Distribuição Espacial de Produtividade",
            production: "Distribuição Espacial de Produção",
            area: "Distribuição Espacial de Área Colhida",
            consumption: "Distribuição Espacial de Consumo Doméstico",
            imports: "Distribuição Espacial de Importações",
            exports: "Distribuição Espacial de Exportações",
            stocks_to_use: "Distribuição Espacial da Relação Estoque/Consumo"
        };
        const mapTitleEl = document.getElementById('map-title-label');
        if (mapTitleEl) {
            mapTitleEl.innerHTML = `<i data-lucide="globe"></i> ${mapLabels[state.activeMetric]}`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
        
        const displayYearEl = document.getElementById('display-year');
        if (displayYearEl) displayYearEl.innerText = state.activeYear;
        
        const mapYearBadgeEl = document.getElementById('map-year-badge');
        if (mapYearBadgeEl) mapYearBadgeEl.innerText = state.activeYear;
        
        const yearSliderEl = document.getElementById('year-slider');
        if (yearSliderEl) yearSliderEl.value = state.activeYear;
        
        const metricLabels = {
            yield: "Produtividade",
            production: "Produção",
            area: "Área Colhida",
            consumption: "Consumo Doméstico",
            imports: "Importações",
            exports: "Exportações",
            stocks_to_use: "Relação Estoque/Consumo"
        };
        const rankingMetricBadgeEl = document.getElementById('ranking-metric-badge');
        if (rankingMetricBadgeEl) {
            rankingMetricBadgeEl.innerText = metricLabels[state.activeMetric] || "Métrica";
        }
    } catch (e) {
        console.error("Erro ao atualizar badges de texto do dashboard:", e);
    }
}

function updateKPIs() {
    if (!appData) return;
    
    const year = state.activeYear;
    const prevYear = year - 1;
    const isCotton = state.activeCommodity === 'cotton';
    const isCoffee = state.activeCommodity === 'coffee';
    const noAreaCommodities = ['beef', 'pork', 'poultry', 'coffee', 'sugar'];
    const hasArea = !noAreaCommodities.includes(state.activeCommodity);
    
    const worldData = appData.countries["World"];
    let worldProd = 0, prevWorldProd = 0;
    let worldArea = 0, prevWorldArea = 0;
    let worldYield = 0, prevWorldYield = 0;
    let worldStocksToUse = 0, prevWorldStocksToUse = 0;
    
    if (worldData) {
        const yrIdx = worldData.years.indexOf(year);
        const prevIdx = worldData.years.indexOf(prevYear);
        
        if (yrIdx !== -1) {
            worldProd = worldData.production[yrIdx];
            worldArea = worldData.area ? worldData.area[yrIdx] : 0;
            worldYield = worldData.yield ? worldData.yield[yrIdx] : 0;
            
            const worldStocks = worldData.stocks ? worldData.stocks[yrIdx] : 0;
            const worldCons = worldData.consumption ? worldData.consumption[yrIdx] : 0;
            worldStocksToUse = worldCons > 0 ? (worldStocks / worldCons) * 100 : 0;
        }
        if (prevIdx !== -1) {
            prevWorldProd = worldData.production[prevIdx];
            prevWorldArea = worldData.area ? worldData.area[prevIdx] : 0;
            prevWorldYield = worldData.yield ? worldData.yield[prevIdx] : 0;
            
            const prevWorldStocks = worldData.stocks ? worldData.stocks[prevIdx] : 0;
            const prevWorldCons = worldData.consumption ? worldData.consumption[prevIdx] : 0;
            prevWorldStocksToUse = prevWorldCons > 0 ? (prevWorldStocks / prevWorldCons) * 100 : 0;
        }
    }
    
    // Rótulos de unidades
    let prodUnit = "M MT";
    if (isCotton) prodUnit = "M Bales";
    else if (isCoffee) prodUnit = "M Bags";
    
    const areaUnit = "M HA";
    const yieldUnit = isCotton ? "KG/HA" : "MT/HA";
    
    // Controlar visibilidade dos cards de área e rendimento
    const cardArea = document.getElementById('card-area');
    const cardYield = document.getElementById('card-yield');
    if (cardArea) cardArea.style.display = hasArea ? 'flex' : 'none';
    if (cardYield) cardYield.style.display = hasArea ? 'flex' : 'none';
    
    // Renderizar Produção Mundial
    document.getElementById('kpi-prod-val').innerText = `${(worldProd / 1000).toFixed(2)} ${prodUnit}`;
    renderKPIChange(document.getElementById('kpi-prod-change'), worldProd, prevWorldProd);
    
    if (hasArea) {
        // Renderizar Área Mundial
        document.getElementById('kpi-area-val').innerText = `${(worldArea / 1000).toFixed(2)} ${areaUnit}`;
        renderKPIChange(document.getElementById('kpi-area-change'), worldArea, prevWorldArea);
        
        // Renderizar Produtividade Mundial
        const yieldPrecision = isCotton ? 0 : 3;
        document.getElementById('kpi-yield-val').innerText = `${worldYield.toFixed(yieldPrecision)} ${yieldUnit}`;
        renderKPIChange(document.getElementById('kpi-yield-change'), worldYield, prevWorldYield);
    }
    
    // Renderizar Relação Estoque/Consumo Mundial
    document.getElementById('kpi-stocks-to-use-val').innerText = `${worldStocksToUse.toFixed(2)}%`;
    renderKPIChange(document.getElementById('kpi-stocks-to-use-change'), worldStocksToUse, prevWorldStocksToUse);
    
    // Maior Produtor
    let maxProd = -1;
    let leaderName = "--";
    for (const [cName, cData] of Object.entries(appData.countries)) {
        if (cData.is_region || cName === "World") continue;
        const yrIdx = cData.years.indexOf(year);
        if (yrIdx !== -1) {
            const prod = cData.production[yrIdx];
            if (prod > maxProd) {
                maxProd = prod;
                leaderName = cName;
            }
        }
    }
    
    document.getElementById('kpi-leader-val').innerText = leaderName;
    document.getElementById('kpi-leader-amount').innerText = maxProd > 0 ? `${(maxProd / 1000).toFixed(1)} ${prodUnit}` : "--";
}

function renderKPIChange(element, current, previous) {
    if (previous <= 0) {
        element.innerText = "--";
        element.className = "kpi-change neutral";
        return;
    }
    
    const pct = ((current - previous) / previous) * 100;
    const sign = pct >= 0 ? "+" : "";
    element.innerText = `${sign}${pct.toFixed(2)}% vs ano ant.`;
    
    if (pct > 0.05) { element.className = "kpi-change positive"; } 
    else if (pct < -0.05) { element.className = "kpi-change negative"; } 
    else { element.className = "kpi-change neutral"; }
}

// ==========================================
// INTERAÇÃO COM PAÍS EM DESTAQUE (DETALHES)
// ==========================================
function selectCountryForFocus(countryName) {
    state.focusCountry = countryName;
    updateFocusCountryPanel();
}

function updateFocusCountryPanel() {
    const panel = document.getElementById('focus-country-panel');
    if (!state.focusCountry || !appData) {
        panel.style.display = 'none';
        return;
    }
    
    const countryData = appData.countries[state.focusCountry];
    if (!countryData) return;
    
    panel.style.display = 'block';
    document.getElementById('focus-country-name').innerText = state.focusCountry;
    
    const year = state.activeYear;
    const yrIdx = countryData.years.indexOf(year);
    const isCotton = state.activeCommodity === 'cotton';
    const volumeUnit = isCotton ? "k Bales" : "k MT";
    
    if (yrIdx !== -1) {
        const prod = countryData.production[yrIdx];
        const cons = countryData.consumption[yrIdx];
        const imp = countryData.imports[yrIdx];
        const exp = countryData.exports[yrIdx];
        
        document.getElementById('focus-prod-val').innerText = `${prod.toLocaleString('pt-BR')} ${volumeUnit}`;
        document.getElementById('focus-cons-val').innerText = `${cons.toLocaleString('pt-BR')} ${volumeUnit}`;
        
        const netTrade = exp - imp;
        const tradeValEl = document.getElementById('focus-trade-val');
        const tradeTypeEl = document.getElementById('focus-trade-type');
        
        tradeValEl.innerText = `${Math.abs(netTrade).toLocaleString('pt-BR')} ${volumeUnit}`;
        
        if (netTrade > 0) {
            tradeTypeEl.innerText = "Exportador Líquido";
            tradeTypeEl.className = "exporter-color";
        } else if (netTrade < 0) {
            tradeTypeEl.innerText = "Importador Líquido";
            tradeTypeEl.className = "importer-color";
        } else {
            tradeTypeEl.innerText = "Autossuficiente";
            tradeTypeEl.className = "";
        }
    } else {
        document.getElementById('focus-prod-val').innerText = "--";
        document.getElementById('focus-cons-val').innerText = "--";
        document.getElementById('focus-trade-val').innerText = "--";
        document.getElementById('focus-trade-type').innerText = "Sem dados no ano";
    }
}

// ==========================================
// GERENCIAMENTO DA SELEÇÃO DE PAÍSES
// ==========================================
function addCountryToComparison(countryName) {
    if (state.selectedCountries.includes(countryName)) return;
    
    if (state.selectedCountries.length >= 8) {
        state.selectedCountries.shift();
    }
    
    state.selectedCountries.push(countryName);
    renderActiveCountryChips();
    updateTemporalChart();
}

function removeCountryFromComparison(countryName) {
    state.selectedCountries = state.selectedCountries.filter(c => c !== countryName);
    renderActiveCountryChips();
    updateTemporalChart();
}

function renderActiveCountryChips() {
    const container = document.getElementById('active-countries-container');
    container.innerHTML = '';
    
    state.selectedCountries.forEach(country => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerHTML = `${country} <i data-lucide="x"></i>`;
        
        chip.addEventListener('click', () => {
            removeCountryFromComparison(country);
            if (state.focusCountry === country) {
                state.focusCountry = null;
                updateFocusCountryPanel();
            }
        });
        
        container.appendChild(chip);
    });
    
    lucide.createIcons();
}

// ==========================================
// EVENT LISTENERS & INPUTS
// ==========================================
function setupEventListeners() {
    // 1. Seletor de Cultura (Commodity)
    document.getElementById('active-commodity').addEventListener('change', (e) => {
        changeCommodity(e.target.value);
    });

    // 2. Seletor de Métrica
    document.getElementById('active-metric').addEventListener('change', (e) => {
        state.activeMetric = e.target.value;
        updateDashboard();
    });
    
    // 3. Slider Temporal
    const slider = document.getElementById('year-slider');
    slider.addEventListener('input', (e) => {
        state.activeYear = parseInt(e.target.value);
        updateDashboard();
        if (state.isPlaying) {
            pauseTimeline();
        }
    });
    
    // 4. Botão Play/Pause
    const playBtn = document.getElementById('btn-play');
    playBtn.addEventListener('click', () => {
        if (state.isPlaying) { pauseTimeline(); } 
        else { playTimeline(); }
    });
    
    // 5. Limpar Seleção
    document.getElementById('btn-clear-selection').addEventListener('click', () => {
        state.selectedCountries = ["World"];
        state.focusCountry = null;
        renderActiveCountryChips();
        updateDashboard();
    });
    
    // 6. Pesquisa de Países
    const searchInput = document.getElementById('country-search');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchResults.style.display = 'none';
            return;
        }
        
        const matches = Object.keys(appData.countries)
            .filter(name => name.toLowerCase().includes(query))
            .slice(0, 8);
            
        if (matches.length > 0) {
            searchResults.innerHTML = '';
            matches.forEach(match => {
                const item = document.createElement('div');
                item.className = 'search-item';
                item.innerText = match;
                item.addEventListener('click', () => {
                    addCountryToComparison(match);
                    selectCountryForFocus(match);
                    searchInput.value = '';
                    searchResults.style.display = 'none';
                });
                searchResults.appendChild(item);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.style.display = 'none';
        }
    });
}

// ==========================================
// CONTROLES DE ANIMAÇÃO DA LINHA DO TEMPO
// ==========================================
function playTimeline() {
    state.isPlaying = true;
    const playIcon = document.getElementById('play-icon');
    playIcon.setAttribute('data-lucide', 'pause');
    lucide.createIcons();
    
    const minYear = parseInt(document.getElementById('year-slider').min);
    const maxYear = parseInt(document.getElementById('year-slider').max);
    
    if (state.activeYear >= maxYear) {
        state.activeYear = minYear;
    }
    
    state.playInterval = setInterval(() => {
        if (state.activeYear < maxYear) {
            state.activeYear++;
            updateDashboard();
        } else {
            pauseTimeline();
        }
    }, 450);
}

function pauseTimeline() {
    state.isPlaying = false;
    clearInterval(state.playInterval);
    const playIcon = document.getElementById('play-icon');
    playIcon.setAttribute('data-lucide', 'play');
    lucide.createIcons();
}

# Otávio Pelego · Visual Data Analytics

Portfólio de visualização de dados interativa — atlas 3D do Brasil, data portraits de futebol e dashboards analíticos, tudo rodando 100% no navegador (client-side, sem backend).

*Interactive data visualization portfolio: 3D atlases of Brazil (IBGE open data), football data portraits and analytical dashboards — all client-side HTML/WebGL.*

**🌐 Ao vivo:** [otaviopelego.pages.dev](https://otaviopelego.pages.dev)

---

## Projetos

### 🇧🇷 Brasil de Lupa — atlas 3D com dados do IBGE (`brasil-de-lupa/`)
10 mapas interativos em WebGL (deck.gl): a população dos 5.570 municípios como picos 3D, migração interna em arcos, desigualdade de renda, envelhecimento, economia, o avanço da soja no tempo. Dados: Censos, estimativas populacionais e SIDRA.

### ⚽ Futebol — análises & data portraits (`futebol/`)
5 apps cobrindo de 1930 a 2026:
- **Copa 2026 em Números** — a Copa real (Canadá·México·EUA) com mata-mata clicável e índice próprio de avaliação
- **Copa 2022 sob o Microscópio** — 1.453 chutes com freeze frames das câmeras 360 da StatsBomb
- **Laboratório da Partida** e **Onda da Partida** — tracking posicional a 25 fps, pitch control (Spearman) e retratos 3D no estilo Bogachev
- **A Copa em Números** — revista interativa das 21 Copas históricas

### 📊 Dashboards analíticos (`dashboards/`)
- **TSE** — histórico eleitoral brasileiro, perfil do eleitorado e candidatos
- **Conab** — área, produção e produtividade das safras brasileiras
- **USDA PSD** — 12 commodities globais, séries desde 1960, mapa choropleth + timelapse

## Arquitetura

Todos os projetos seguem o mesmo pipeline:

```
dado bruto (CSV/XLS/JSON oficial) → script Python → JSON compacto → injetado no HTML
```

O resultado são apps **single-file ou quase**: abrem no navegador, sem servidor, sem build. Bibliotecas: deck.gl (WebGL 3D), Leaflet, Chart.js.

## Deploy

Site estático puro — publicado via Cloudflare Pages (sem etapa de build, output = raiz do repo).

---

`o2cnutri_mvp_presentation/` é um diretório legado de assets do MVP [O2C Nutri](https://otaviopelego.github.io/phosphorus/portfolio/o2c_nutri.html) (Phosphorus), mantido por compatibilidade de links.

**Otávio Pelego** — nome profissional de *Otávio de Oliveira Corrêa* · fundador da [Phosphorus](https://otaviopelego.github.io/phosphorus/) · pelegocorrea@gmail.com

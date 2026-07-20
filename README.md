# Otávio Pelego — site pessoal

Dados que viram decisão, processos que viram tempo. Site institucional + portfólio de visualização de dados, 100% estático (client-side, sem backend).

**🌐 Ao vivo:** [otaviopelego.pages.dev](https://otaviopelego.pages.dev)

---

## Estrutura

| URL | Pasta | O que é |
|---|---|---|
| `/` | `index.html` | Hub: posicionamento, serviços e minha história |
| `/data-analytics` | `data-analytics/` | **Carro-chefe** — visual data analytics, cases e projetos autorais |
| `/workflows` | `workflows/` | Automações + IA |
| `/contents` | `contents/` | Conteúdo com IA (texto, imagem, áudio, vídeo) |
| `/websites` | `websites/` | Sites e páginas |
| `/google-workspace` | `google-workspace/` | Perfil da Empresa no Google + Workspace |
| `/consulting` | `consulting/` | Consultoria e mentoria — O Centurião |
| `/mvps` | `mvps/` | Produtos procurando sócios e capital |

`/home` redireciona para `/` (ver `_redirects`).

### Projetos de visualização (linkados a partir de `/data-analytics`)

- **`brasil-de-lupa/`** — atlas 3D do Brasil: 10 mapas WebGL (deck.gl) com dados do IBGE
- **`futebol/`** — 5 data portraits de futebol, de 1930 à Copa de 2026 (StatsBomb 360, tracking Metrica a 25 fps, FBref)
- **`dashboards/`** — TSE (histórico eleitoral), Conab (safras) e USDA (12 commodities globais)

### Compartilhado

- **`assets/site.css`** — sistema de design de todas as páginas institucionais (dark + light automático)
- **`assets/otavio.webp`** — foto
- **`_redirects`** — regras do Cloudflare Pages

## Arquitetura

```
dado bruto oficial (CSV/XLS/API) → pipeline Python → JSON compacto → HTML single-file
```

Sem build, sem framework, sem backend. Deploy automático via Cloudflare Pages a cada push na `main` (build command vazio, output = raiz).

---

`o2cnutri_mvp_presentation/` é um diretório legado de assets do MVP [O2C Nutri](https://otaviopelego.github.io/phosphorus/portfolio/o2c_nutri.html), mantido por compatibilidade com links externos antigos.

**Otávio Pelego** — nome profissional de *Otávio de Oliveira Corrêa* · fundador da [Phosphorus](https://otaviopelego.github.io/phosphorus/) · pelegocorrea@gmail.com

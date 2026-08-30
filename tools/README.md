# tools

Scripts que **geram** conteudo publicado neste repositorio. Estao aqui, e nao
na pasta de dados, porque o que eles produzem e versionado aqui: se o script
se perder, a unica saida e voltar a editar JSON na mao.

## gerar_copa2026.py

Reconstroi o bloco `const DATA` de `futebol/copa-2026-em-numeros.html` a partir
dos CSV do Kaggle (swaptr: `matches` / `players` / `teams`).

```bash
python tools/gerar_copa2026.py --validar    # confere contra o que esta no ar
python tools/gerar_copa2026.py              # so mostra o resumo
python tools/gerar_copa2026.py --escrever   # reescreve o HTML
```

**Rode `--validar` antes de `--escrever`.** Ele gera a partir dos CSV antigos
(98 jogos) e compara bloco a bloco com o DATA publicado. Se a logica estiver
certa, 10 dos 17 blocos batem exatamente e o resto tem causa conhecida
(correcao dos placares de penalti, desempate cosmetico entre jogadores com
numeros identicos, e o ranking de Cabo Verde).

Os CSV nao moram neste repo — ficam em
`futebol-analises/data/kaggle-wc2026`, que **nao esta sob git**. O caminho
esta no topo do script, em `DADOS`.

### Armadilhas que ja custaram caro

- `matches.csv` usa nome curto da FIFA (`Cabo Verde`, `Türkiye`, `IR Iran`) e o
  resto usa o nome por extenso. Sem o mapa `NOMES`, a selecao some dos
  agregados **em silencio** — foi assim que a media de adversarios da Espanha
  saiu 22,6 em vez de 31,3.
- Jogo decidido nos penaltis vem como `(3)1–1(4)` com `home_score`/`away_score`
  **vazios**. Ler a coluna direto grava 0 e some com gols de verdade.
- Varios blocos sao ordenacao **estavel** sobre a ordem cronologica do CSV.
  Reordenar `matches` bagunca `violent_matches`, `referees` e `bracket`.

# MIGRAÇÃO DO SITE — Plano v2.0

> *Documento de mudanças antes da execução. Lê, valida, e só então começo a mexer.*

---

## Contexto

O site atual é de **5 de abril/2026**. Desde então o Core foi atualizado várias vezes (sistema simplificado, Vendinha consolidada, habilidades de 200+ pra 109, sistemas novos como Crítico, Duelo, Veículos, etc). O site precisa refletir tudo isso.

**Direção escolhida:**
- Reformular tudo (não só atualizar conteúdo)
- Quebrar `index.html` (242KB) em páginas temáticas menores
- Criar **sumário geral** como hub de navegação
- **Vendinha** consolida armas + armaduras + estilos de luta + contratos + economia
- **Habilidades** ganha seção própria pra Poderes de Demônios Puros
- **Aflições** mantém formato simples atual
- **Loucuras do Mestre** (STAGE/MITO/MUSUME) NÃO entram no site

---

## Estrutura Nova do Site

### 🆕 Páginas NOVAS

**Decisão importante:** o `sumario.md` (745 linhas) já consolida o sistema inteiro — Personagem, Testes, Combate, Duelo, Stress, Aflições, Demônios Puros, Descanso, Economia, Criação. Não faz sentido criar páginas separadas pra cada (Regras/Naturezas/Combate/Stress/Veículos/Júniores) — viraria redundância. Tudo isso vira **`sumario.html` único**, com índice navegável no topo.

| Arquivo | Conteúdo | Fonte (.md canônico) |
|---|---|---|
| `sumario.html` | **Sistema completo numa página** — 10 seções com índice navegável: 1) Personagem & Natureza · 2) Testes & Ações · 3) Combate · 4) Duelo · 5) Stress · 6) Aflições · 7) Demônios Puros · 8) Descanso · 9) Dinheiro & Economia · 10) Criação | `03-consulta-rapida/sumario.md` |
| `vendinha.html` | **Single source of truth** — Armas (curto/médio/longo/especial), Armaduras, **12 Estilos de Luta**, Contratos Demoníacos, Talismãs (6 efeitos), Dinheiro & Economia, custos de PM por natureza, regras de compra | `vendinha-do-seu-bento.md` + `contratos-demoniacos.md` |
| `historia.html` | Lore canônica 1908-2011 (4 eras, apagamentos, incidentes-âncora) | `historia.md` (completo, já preenchido) |

### 🔄 Páginas ATUALIZADAS

| Arquivo | O que muda |
|---|---|
| `index.html` | Vira homepage **leve** — só hero, "O Que É SCAR?", navegação pras outras páginas. Tira regras/conteúdo de dentro (vai pras páginas dedicadas) |
| `habilidades.html` | Reescrita completa — **109 habilidades** em 3 categorias (Físico / Mental / Social) + **seção própria pra Poderes de Demônios Puros** + 14 Poderes Demoníacos prontos (8 combate + 6 utilidade) |
| `aflicoes.html` | Sincronizar com `aflicoes.md` (formato d100 mantido — user pediu pra deixar simples) |
| `docs/ficha-padrao.html` | Adicionar campos novos (Iniciativa, Junior, etc) |
| `docs/ficha-demonio.html` | 14 Poderes Demoníacos prontos pra seleção |
| `dice-roller.html` | Ajustes pequenos em efeitos especiais (talismã com 6 opções, falha crítica) |

### ❌ Páginas REMOVIDAS

| Arquivo | Substituído por |
|---|---|
| `armamentos.html` | `vendinha.html` (com escopo bem maior) |

### ✅ Páginas INTOCADAS

- `aparencias.html` — referências visuais por natureza, conteúdo independente
- `assets/` — CSS, JS, imagens (mantidos; serão estendidos pras novas páginas)

---

## Mudanças Numéricas (refletir onde aparecer)

| Regra | Valor antigo | Valor novo |
|---|---|---|
| Stacking de d10 | Sem limite | ≤ 2× atributo (excedente: +2 Stress, +5 fixo, **Sobrecarregado**) |
| Talismãs | Bônus fixo | 6 efeitos à escolha por uso |
| Cura Leve | 1d3 dias | **1 noite** |
| Cura Grave | 1d3 semanas | **1d3 dias** |
| Cura Crítica | 1d3 meses | **1d3 semanas** |
| Iniciativa | (não existia) | 1d10 + Coordenação |
| Falha Crítica | (não existia) | Dado natural 1 = efeito ruim contextual |
| Sistema de Crítico | (não existia) | Existe — regra dedicada |
| Sistema de Duelo | (não existia) | Existe — buff/debuff pós-duelo |
| Boxe | Estilo fraco | +1d10 esquiva se defender 5+ · 1ª Leve sem penalidade |
| Judô | Estilo fraco | Contra-ataque usa Força do inimigo · derrubar dá +1d10 aliados |
| Grilhões (Híbrido) | Sem custo | Demônio interno pode possuir/forçar ações |
| Habilidades | 200+ em várias categorias | **109** em 3 categorias (Físico/Mental/Social) |

---

## Navegação Nova (menu do site)

```
🏠 Home (index)
📚 Sumário
   ├── 📐 Regras
   ├── 🎭 Naturezas
   ├── ⚔️ Combate
   ├── 💀 Stress & Aflições
   ├── 🎯 Habilidades (+ Poderes de Demônios)
   ├── 🏪 Vendinha
   ├── 🏍️ Veículos
   ├── 🧑‍🎓 Júniores
   └── 📜 História
🎨 Aparências
🎲 Rolador de Dados
📋 Fichas
   ├── Ficha Padrão
   └── Ficha Demônio
```

---

## Ordem de Execução

Vou seguir essa ordem pra que cada página construída sirva de fundação pras próximas:

### Fase 1 — Fundação (estruturas base)
1. `index.html` (homepage limpa + nav nova)
2. `sumario.html` (hub geral)
3. `regras.html` (regras numéricas fundamentais)

### Fase 2 — Core do Sistema
4. `naturezas.html` (Humano/Híbrido/Infernal/Demônio Puro + criação)
5. `combate.html` (combate, iniciativa, duelo, cura)
6. `stress-aflicoes.html` (stress, colapso, aflições simples)

### Fase 3 — Conteúdo de Gameplay
7. `habilidades.html` (reescrita — 109 + Poderes de Demônios)
8. `vendinha.html` (armas, armaduras, estilos, contratos, economia)

### Fase 4 — Sistemas Adicionais
9. `veiculos.html`
10. `juniores.html`

### Fase 5 — Lore & Fichas
11. `historia.html` (placeholder até o user colar do Discord)
12. `docs/ficha-padrao.html` (atualizar)
13. `docs/ficha-demonio.html` (atualizar)

### Fase 6 — Polimento
14. `dice-roller.html` (ajustes pequenos)
15. Excluir `armamentos.html`
16. `aflicoes.html` (sincronizar)
17. Testar navegação completa

---

## Estilo Visual

- **Manter identidade atual** — paleta vermelho/preto, tipografia, estilo dark/sangue
- **CSS reutilizado** — `assets/css/` estendido pra novas páginas
- **Header + nav + footer comuns** em todas as páginas
- **Mobile-first** (já é responsivo)
- Cada página segue o mesmo molde visual da página existente mais polida (provavelmente `index.html` é o template visual de referência)

---

## Pontos Pendentes

1. **`historia.md`** — está com só o nome do user. Quando ele colar a história completa do Discord, eu construo `historia.html`. Por enquanto fica como placeholder na nav
2. **`changelog.md` MUSUME** — a entrada do MUSUME no changelog ainda descreve a versão antiga (5 fases, 5 tipos de pista, etc). Vou atualizar antes de subir Musume no Discord (operação pequena, faço junto)

---

## O Que NÃO Vai pro Site

- **Loucuras do Mestre** (`06-loucuras-do-mestre/`) — STAGE, MITO, MUSUME, README. Ficam apenas no Discord/docs
- **Documentos meta** (`05-meta/`) — changelog, roadmap, este plano. Internos do projeto, não público

---

## Progresso da Execução

### ✅ Fase 1 — Fundação (CONCLUÍDA)

| Arquivo | Status | Tamanho | Conteúdo |
|---|---|---|---|
| `sumario.html` | ✅ Criado | 77KB | 10 seções com índice navegável: Personagem, Testes, Combate, Duelo, Stress, Aflições, Demônios Puros, Descanso, Economia, Criação |
| `historia.html` | ✅ Criado | 43KB | Apagamentos + Linha do Tempo (4 eras 1908-2011) + Inferno + Naturezas narrativas + 15+ Facções |
| `index.html` | ✅ Reescrito | 24KB (era 242KB, -90%) | Homepage leve: hero, 6 princípios, 6 cards de navegação, resumo das 4 naturezas, CTA |

**Stack:** Squeleton CSS v4 + main.css/contratos.css/page-styles.css + Google Fonts (Bebas Neue + Roboto). Mobile-first responsivo. Mobile menu modal idêntico ao original. Mesma identidade visual (vermelho sangue + dark).

### ✅ Fase 2 — Catálogos Principais (CONCLUÍDA)

| Arquivo | Status | Tamanho | Conteúdo |
|---|---|---|---|
| `vendinha.html` | ✅ Criado | 79KB | Single source of truth — Armas (curto/médio/longo/especial), Armaduras, 12 Veículos, 12 Estilos de Luta, Contratos (apresentação + tiers), Encomendas |
| `habilidades.html` | ✅ Reescrito | 82KB | 109 habilidades em 3 categorias com **filtros JS** (Físico 37 · Mental 37 · Social 35). Cada habilidade em card com Requisito/Custo/Efeito/Rebote/Notas. Sistema de Troca Equivalente. Seção placeholder pra 14 Poderes de Demônios Puros |
| `armamentos.html` | ❌ Deletado | — | Substituído por `vendinha.html`. Refs atualizadas em aparencias e aflicoes |
| `index.html` | 🔄 Atualizado | 46KB | Acrescentado: numeração `[01-06]` nos princípios, ícones com glow vermelho, palavras em vermelho na intro, decorações de aspas grandes, **4 modais clicáveis** pras Naturezas |

### Detalhes visuais aplicados (após feedback do user)

- Princípios ganharam numeração `[01]` a `[06]` em vermelho, ícones com border circular vermelho e glow
- Palavras-chave em vermelho na intro do index ("SCAR", "d10", "Demônios existem", "medo coletivo", etc)
- Cards das 4 Naturezas viraram **triggers de modal** (data-modal-show) → modais detalhados com Bônus, Maleficios, Como Funciona, Categorias (no caso de Demônio Puro)
- Aspas decorativas gigantes no quote final do index

### ✅ Imagem do Seu Bento (gerada e arquivada)

- `assets/images/seu-bento.webp` — retrato do lojista (japonês idoso, avental sujo, cigarro, vendinha com prateleiras de itens suspeitos). Gerada via Nano Banana Pro. **Não usada no site** — user pediu pra fazer ele mesmo depois. Arquivo fica disponível pra uso futuro.

---

### ✅ Fase 3 — Polimento + Refatoração CSS (CONCLUÍDA — parcial)

| Item | Status | Detalhes |
|---|---|---|
| Nav anchors antigos | ✅ Corrigido | aflicoes.html e aparencias.html — substituídos os 4 anchors antigos (`#sistema`, `#criacao`, `#contratos`, `#combate`) pelo nav novo (Sumário/Habilidades/Vendinha/Aflições/História/Aparências) tanto no desktop quanto no mobile menu |
| **`assets/css/components.css`** | ✅ Criado | **12KB de classes compartilhadas** padronizando visual de todas as páginas com a estética do index — cards, tabelas, divisores, headers, filtros, quote blocks, back-to-top, etc. Aplicado em 8 páginas HTML |
| Aflicoes.html visual | ⏳ Pendente | Conteúdo antigo permanece — refatoração CSS já melhora visual sem reescrever. Reescrita completa pode ser feita depois sem urgência |
| `docs/ficha-padrao.html` | ⏳ Pendente | Ficha autônoma (CSS próprio inline) — não usa o stack do site. Atualizar campos seria edição direta |
| `docs/ficha-demonio.html` | ⏳ Pendente | Mesmo caso da ficha padrão |
| `dice-roller.html` | 🟡 Parcial | Recebeu components.css (estética unificada). Ajustes mecânicos (Talismã 6 efeitos, falha crítica) não aplicados — não bloqueia funcionamento |

### Refatoração CSS — o que ganhou

O `components.css` define **14 grupos de regras universais** que afetam visualmente TODAS as páginas que linkam o arquivo:

1. **Cards base** — `.toc-card, .item-card, .org-card, .skill-card, .info-card, .tier-card, .principle-card, .natureza-resumo, .natureza-card, .estilo-card, .summary-card, .nav-grid-card` → mesmo background, border, hover behavior (translate Y + glow vermelho)
2. **Linha animada no topo** — `.toc-card::before, .tier-card::before, .org-card::before` → linha vermelha que cresce no hover (mesma do index)
3. **Border lateral colorida** — `.skill-card.fisico/.mental/.social, .item-card` → padronizado
4. **Tabelas** — `.stat-table` consistente em todas as páginas (zebra striping, header Bebas Neue uppercase)
5. **Quote blocks** — `.quote-block, .narrativo` mesmo estilo (linear-gradient + border-left vermelho)
6. **Divisores** — `.secao-divider` + `.scar-divider-thin` padronizados
7. **Section headers** — `.sumario-section h2, .vendinha-section h2, .scar-section-header` com border-bottom vermelho
8. **Subsection headers** — `.subcategory-header` com border dashed vermelho
9. **Section accent line** (linha vermelha decorativa)
10. **Words em vermelho** — `.red-word, .red-word-strong`
11. **System warning box** (alerta)
12. **Back-to-top button**
13. **Filter bar** (sticky no scroll com filtros)
14. **Category header** (cabeçalho de categoria com gradient)

**Bonus:** classes novas `.scar-card`, `.scar-card-animated`, `.scar-card-bordered` pra novos componentes serem criados sem inventar mais variações.

### Estrutura final do CSS

```
assets/css/
├── main.css            (22KB · variáveis CSS + header/nav/footer)
├── contratos.css       (12KB · estilos de contratos)
├── page-styles.css     (29KB · estilos do index original)
└── components.css      (12KB · NOVO — componentes compartilhados)
```

**Páginas com components.css:** index, sumario, historia, vendinha, habilidades, aflicoes, aparencias, dice-roller (8 total). Fichas (`docs/`) ficam de fora por terem CSS autônomo inline — são docs pra impressão, padrão diferente.

---

## Estado Final do Site

```
✅ index.html         46KB  Homepage (hero + princípios + nav + 4 modais)
✅ sumario.html       77KB  Sistema completo (10 seções, TOC navegável)
✅ historia.html      43KB  Lore 1908-2011 + Inferno + Facções
✅ habilidades.html   82KB  109 habilidades + filtros JS
✅ vendinha.html      79KB  Armas+Armaduras+Veículos+Estilos+Contratos
⚠️ aflicoes.html     100KB  Conteúdo antigo, nav atualizada
⚠️ aparencias.html    52KB  Conteúdo intocado, nav atualizada
✅ dice-roller.html   84KB  Ferramenta de dados (intocada)
❌ armamentos.html    ---   DELETADO
                     ---
Total                563KB  (era 767KB com armamentos.html — 27% menor)
```

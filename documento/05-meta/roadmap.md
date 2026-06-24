# SCAR — ROADMAP
══════════════════
> *Caderno de ideias pra futuras atualizações. Cada item tem o que é, como atacar, e o output esperado.*

---

## 🔧 1. Reescrever & Simplificar Sistema Core
**O que é:** Revisão completa das regras pra reduzir complexidade. Sistema acumulou camadas (combate, aflições, PM, contratos, marcos, stress) e precisa de poda antes de adicionar mais coisa em cima.

**Ideia de execução:**
- **Auditoria primeiro:** ler `02-criacao-e-preparo/` e `03-consulta-em-jogo/` e marcar tudo que (a) nunca foi usado em mesa, (b) repete outra mecânica, (c) precisa de tabela pra entender
- **Definir "simples":** critério objetivo — jogador novo entende combate em 1 sessão? teste resolve em 3 minutos? ficha cabe em 1 página?
- **Cortar antes de escrever:** lista do que vai embora primeiro, depois o que reescreve
- **Unificar redundâncias:** se aflições e injúrias têm regra parecida, fundir
- **Tom intacto:** simplificar mecânica, NÃO o sangue narrativo. SCAR continua sendo SCAR
- **Versionar:** marcar como `v2.0` pra não confundir mesas que rodam o atual

**Como começar:** sessão única de auditoria — só ler e anotar, nada de escrever. Sair com lista de "cortar / reescrever / manter".

**Output:** revisão de `02-criacao-e-preparo/` e `03-consulta-em-jogo/` + changelog em `04-meta/`

---

## 🏍️ 2. Sistema de Veículos & Perseguições
**O que é:** Regras pra moto, carro, helicóptero, perseguição cinematográfica. Hoje SCAR não cobre.

**Ideia de execução:**
- **Veículos** têm Stress próprio (durabilidade) + 3 atributos: Velocidade · Manobra · Resistência
- **Perseguição** = mini-jogo de 3-5 rounds, atacante vs perseguido em testes contestados. Vencedor de cada round ganha/perde "distância" (escala narrativa: cola → mantém → escapa)
- **Falha crítica em perseguição** = colisão (Injúria automática + dano no veículo)
- **Atributos do piloto que se aplicam:** Coordenação (sempre), Tecnologia (carros modernos/hack), Malandragem (furar bloqueio), Vigor (perseguição longa)
- **5-8 veículos prontos** com stats: moto naked (Honda CBR), fusca, Land Rover blindado da SP, helicóptero da SP, trem-bala, carrinho de sorvete e cadeira de rodas (zoeira), van.
- **Construir DEPOIS da simplificação** pra usar a escala de Stress/atributos da v2.0

**Como começar:** seção nova em `04-mecanicas-em-jogo/sistemas-narrativos.md` ou arquivo próprio `veiculos.md`. Modelo: 4 passos de procedimento + tabela de veículos.

**Output:** adição em `04-mecanicas-em-jogo/`

---

## 📱 6. App de Ficha PWA *(mobile)*
**O que é:** Progressive Web App de ficha de personagem com tracking em tempo real. Instala no celular, funciona offline.

**Ideia de execução:**
- **Stack:** HTML/CSS/JS vanilla (já é o stack atual do site SCAR — não precisa framework novo)
- **Funcionalidades core (MVP):**
  - Criar ficha (escolher natureza, distribuir atributos, calcular Stress/Injúrias automático)
  - Tracker de Stress/PM/Injúrias com botões +/-
  - Lista de Aflições ativas com toggle
  - Lista de poderes/contratos
  - Log de PM gasto (pra triggerar Marcos de Cicatriz)
- **Persistência:** LocalStorage + export/import JSON pra backup
- **Visual:** dark sangue, consistente com site SCAR
- **Princípio:** começar simples (atributos + Stress tracker primeiro), expandir aos poucos. Não tentar fazer tudo de uma vez.
- **Esperar a v2.0:** se construir antes da simplificação, retrabalho garantido

**Como começar:** protótipo bem mínimo — só uma página com atributos editáveis e tracker de Stress. Depois adicionar uma feature por sessão de trabalho.

**Output:** pasta `pwa/` ou `app/` na raiz, deploy junto com site

---

## 🎲 7. Foundry VTT Module
**O que é:** Sistema oficial pro Foundry Virtual Tabletop — fichas integradas, rolador automatizado, combate gerenciado.

**Ideia de execução:**
- Foundry usa JS/HTML/Handlebars — próximo do stack SCAR atual
- Tem ecossistema próprio: classes JS específicas (Actor, Item), manifest.json, ChatMessage API, Hooks
- **Funcionalidades core:** ficha de personagem (Actor Sheet), rolador d10 com dados visíveis no chat, aplicação automática de Stress/PM, automação de iniciativa e combate (atacante vs defensor)
- **Reaproveitar:** lógica do PWA (compartilhar cálculos de Stress/Injúria/PM via componentes JS comuns)

**Como começar:** **depois do PWA**, pra reaproveitar lógica e não duplicar trabalho. Foundry tem doc extensa — escrever sistema do zero é projeto de 1-2 meses. Começar com ficha básica + rolador, depois adicionar automação aos poucos.

**Output:** repositório separado `foundry-scar/` (Foundry tem estrutura própria de pacote)

---

## 🥚 Futuro / Easter Eggs
- **Uma Musume nas Loucuras de Mestre:** referência ao anime/franquia das horse girls como conteúdo bônus de mestre — possível one-shot temático ou tabela aleatória de "competidoras infernais". Não é prioridade, mas vai pro caderno.

---

## 📋 Ordem Sugerida (revisada)

| Prioridade | Item | Por quê |
|---|---|---|
| **1º** | **Reescrever & Simplificar Core** | Tudo depende disso. Construir veículos/animais/PWA em cima de sistema que vai mudar = retrabalho |
| **1º (paralelo)** | **Redesenhar Vanguarda Escarlate** | Trabalho de lore, não trava em regra. Roda enquanto a simplificação anda |
| **1º (paralelo)** | **Lore Expandido (continuação)** | Mesmo motivo: escrita pura, paraleliza com tudo |
| **2º** | **Sistema de Veículos** | Já no sistema novo. Tokyo pede |
| **3º** | **Sistema de Animais** | Mesma escala de stats da v2.0. Vem depois de veículos pra reaproveitar regra de "NPC simplificado" |
| **4º** | **Apresentação no Discord** | Apresentar versão estável e bonita, não rascunho. Vanguarda redesenhada vira a cara da apresentação |
| **5º** | **App PWA** | Código, mas stack já dominado. Maior utilidade prática pra mesa |
| **6º** | **Foundry VTT** | Último — projeto grande, depende do PWA pra reaproveitar |
| **futuro** | **Uma Musume / Loucuras** | Easter egg, sem pressa |

> *Nada aqui é deadline. Roadmap é menu, não calendário. Pega o que estiver com vontade — mas se for mexer em regra nova, simplifica antes.*

# SCAR — CHANGELOG
══════════════════

## 🔮 Próximas Atualizações
- Sistema de contratos, poderes e habilidades gerais (expansão)
- Finalizar fichas
- NPCs
- Buscar mais players

> 📋 Roadmap detalhado em [`roadmap.md`](roadmap.md) — Lore expandido · SERTÃO (próxima Loucura) · Veículos · PWA · Foundry VTT

---

> **24/06/2026 (12ª rodada)**

# **Update: "Do Bestiário Atualizado"** — fichas de monstro alinhadas ao sistema
As fichas estavam sem o número mais importante do combate novo.

- **Defesa Passiva em TODA criatura** (não existia): o atacante agora tem contra o que rolar. Calculada por 5,5 × atributo de defesa (encaixa Vigor / esquiva Coordenação). Chefes: Antofobia 33 · Cavaleiro-Corvo 44 · Fera de Marfim 50 · Delirium 22 · Juggernaut 50 · Controle 17. Minions: Humano 11 · Caçador 28 · Zumbi Comum 6 · Arauto 33 · Filhote 17 · Carniceiro 28 · Construto 22.
- **Armadura convertida pro formato atual:** "X de redução"/"Armadura 10" → **−1/−2 níveis** (Cavaleiro-Corvo, Fera, Juggernaut, Zumbi Arauto, e os do site).
- **Notas de identidade:** Delirium "difícil de alcançar pela ilusão (não pela Passiva)"; Controle "você quase nunca chega nele".
- Sincronizado nos 3 lugares: `BESTIARIO-DEMONIOS.md`, `BESTIARIO-MINIONS.md` e o bestiário visual `aparencias.html` (26 statlines ganharam a pill **Def**; criaturas exclusivas do site — Cara Feliz, O Sócio, Espantalho, Aurélio, Evolução Demônio — tiveram a Def calculada). Cabeçalhos e a caixa "Como ler" atualizados.

> **24/06/2026 (11ª rodada)**

# **Update: "Do Filler que Virou Alma"** — Habilidades Gerais reformuladas
Em vez de cortar as Gerais fracas, **reformulamos** cada uma pra ter efeito próprio e significado (o filler virou coisa boa). Princípio: cada Geral tem **um efeito claro**; a força vem de juntar várias, limitada pelo teto da Troca Equivalente.

**23 reformuladas** (Físico/Mental/Social) — destaques:
- **Speed Blitz**: virou buff de velocidade (Coord 6, +2d10 em ações de Coordenação + deslocamento dobrado, 1 Stress/rodada) — forte, mas sem o "Sem Defesa pra todos" que ficou roubado.
- **Pele Dura** → resistência especializada a 1 tipo de dano (−1 nível sempre).
- **Onde Dói** → sabe um segredo do alvo? força 1 concessão sem rolar.
- **Sequência Devastadora** → 3º acerto seguido fura armadura + acumula +5 por acerto.
- E mais: Ignorar o Medo (medo vira fúria), Sangue Quente (repetível), Líder Natural, Nem a Morte Separa, etc.

**4 fusões (só duplicata, sem ganhar poder):** Tiro Duplo + Rajada Controlada → **Fogo em Sequência**; Atirador de Elite Extremo → absorvido por **Técnica Mortal**; Esquizofrenia + Leitura de Cicatriz → **Leitura Forense** (corrige o nome); Bom Homem + História que Assombra → **Reputação**.

**Mantidas como Geral** (decisão do dono): cura, conserto, pilotagem e contatos seguem Gerais (básico universal); o Humano só tem a versão melhor.

**Contagem:** Gerais 115 → **111** · total 183 → **179** (De Origem 68 inalterado). Sincronizado nos 3 arquivos (`habilidades.md`, `habilidades.html`, `dice-roller.html` — catálogo + grupos de situação), JS validado, e corrigido um "De Origem 80→68" que tinha ficado velho no site.

> **24/06/2026 (10ª rodada)**

# **Update: "Do Cadáver e do Medo"** — origens Infernal e Demônio Puro
Fechando o passe de alma nas habilidades de Origem.

**Infernal — reformulado (de transformação genérica para a tragédia dele)**
Trocada a transformação/regen comum por 4 blocos com a alma do Infernal (cadáver emprestado que vira gente):
- **Corpo Emprestado**: Carne que Não Aceita Morrer, Costura Própria, Membro Descartável, Trocar de Pele, Não Apaga Ainda.
- **Memória do Inferno** (foi demônio e lembra): Reconhecer um Igual, Línguas Mortas, Frieza Infinita, Instinto do Abismo.
- **A Coisa que Você Foi** (o errado sob a pele): Presença Antinatural, Aura de Terror, Grito do Inferno, Marca Rastejante, Rosto Verdadeiro.
- **Virando Gente** (a traição de aprender a sentir): Primeira Lágrima, Coração Emprestado (ganha Talismã!), Escolha de Poupar.

**Demônio Puro — 5 poderes únicos de SCAR** (mantidos os 14 anteriores):
- **Mídia do Medo** (sobe a Escala de Medo aterrorizando em público), **Abrir a Porta** (Porta do Inferno), **A Falha é a Força** (abraça a Falha Central como lâmina de dois gumes), **Aprender a Fingir Gente**, **Comer o Conceito**.

**Contagens:** Humano 14 · Infernal 22→**17** · Híbrido 18 · Demônio Puro 14→**19**. De Origem segue **68**, total **183** (totais inalterados). Tudo sincronizado em `habilidades.md`, `habilidades.html` e `dice-roller.html` (catálogo + grupos de situação recategorizados).

> **24/06/2026 (9ª rodada)**

# **Update: "Do Que Só Você Traz"** — origens Humano e Híbrido reformuladas
Repensar o que cada natureza traz de **único** nas habilidades de Origem (em `habilidades.md`).

**Humano — de "treino genérico" para "o que só gente traz"**
- Saíram os blocos genéricos (Combate, Tática, Sobrevivência, Equipamento) que qualquer um treinaria nas Gerais.
- Entraram dois blocos com alma humana:
  - **Ofício** (a carreira/vida antes): Distintivo Velho, Mãos de Médico, Graxa nas Mãos, Pena Afiada, Contato no Submundo, Gravata e Papel, Quadro-Negro, Gente do Bairro.
  - **Humanidade**: Cara de Ninguém, A Graça de Ser Comum, Âncora de Humanidade, Última Bala, Não Vou Cair Aqui, Vontade de Gente.

**Híbrido — a fusão humano+demônio, bem trabalhada**
- Reescrito em torno dos **Grilhões como recurso vivo**:
  - **O Acordo**: Arma Viva, Transição Suave, Barganha Interna, Dar Rédea, Cobrar de Volta.
  - **As Duas Vozes** (o demônio sabe coisas): Faro do Abismo, A Voz que Sabe, Instinto Emprestado, Dívida de Sangue.
  - **Identidade Dual**: Natureza Dual Reativa, Corpo Entre Mundos, Sangue de Dois Mundos, Espelho do Inimigo, Síntese Imperfeita.
  - **O Fio que te Segura** (a metade humana): Equilíbrio Instável, Âncora Humana, Sincronia, Recusa Compartilhada.

**Sincronizado no site e no rolador:** `habilidades.html` (cards) e `dice-roller.html` (catálogo) agora listam as novas Humano/Híbrido. Contagens atualizadas: Humano 22→**14**, Híbrido 22→**18**, De Origem 80→**68**, total 195→**183** (Gerais 115 inalterado).

> **24/06/2026 (8ª rodada)**

# **Update: "Do Rolador Afinado"**
- **Rolador conferido com o sistema atual** (Passiva 5,5×, 22 pontos + troca por PM no contador, estilos rebalanceados). Export da ficha agora também traz a linha **CARGA** (5 + Força), além de Defesa Passiva e ¥.
- **Modo Owlbear mais compacto:** dados e total menores no popover, espaçamentos reduzidos, e o **switch de visões (Rolar/Combate/Bônus/Habilidades) fixo no topo** — ocupa menos tela e fica sempre alcançável sem rolar.

> **24/06/2026 (7ª rodada)**

# **Update: "Da Ficha Nova"** — fichas copia-e-cola atualizadas
- As duas fichas do sumário do site (Padrão e Demônio Puro) foram reescritas: mais bonitas (cabeçalho em caixa, colunas alinhadas) e **completas com as regras novas**. Padrão agora tem **Defesa Passiva e Carga** e as fórmulas embutidas. Demônio Puro ganhou **Pontos de Idade (Força/Resistência/Sabedoria), DT Base de Medo, Defesa Passiva, Carga e Portas para o Inferno** (faltavam). Carga também adicionada às fichas em branco do markdown de criação.

> **24/06/2026 (6ª rodada)**

# **Update: "Do Bolso Inicial"** — dinheiro na criação
- Nova tabela **Dinheiro Inicial (¥)**: base **2.000** + **Procedência** (bico +2.000 · carreira +4.000 · conexão com grana +8.000) + ganchos de lore (+500 a +2.000). Ajuste por natureza: Infernal −1.000, Demônio Puro começa em 0. Teto de bom senso ~15.000 na criação.
- ¥ e PM são **eixos separados** (trauma não dá grana). Adicionado em Economia, no Ponto de Partida (sumário + criação), no site (sumario.html) e como hint no rolador.

> **24/06/2026 (5ª rodada)**

# **Update: "Do Balcão Justo"** — balanceamento da vendinha + Encomendas
Revisão do catálogo e sistema de encomendas sob medida.

**Armas — o "nível" finalmente faz sentido**
- O campo **nível (Leve/Grave/Crítica)** das armas era dado morto (sem regra). Agora é o **teto de Injúria por golpe**: a diferença manda, mas não passa do teto. Faca não crava Crítica de cara; rifle sim. Slots cheios transbordam pro nível acima (faca mata por mil cortes, rifle de uma vez). Furam o teto: crítico da arma, efeitos especiais e ataques contra Sem Defesa. Definido em sumario.md/.html e na vendinha.

**Reprecificação (inversão corrigida)**
- **Machado** 300 → 700 ¥ e **Marreta** 250 → 400 ¥: eram melhores que a Katana (500) e mais baratos. Agora a curva (arma melhor custa mais) fecha.

**Encomendas reescritas — com tabela de balanceamento**
- **Regra de ouro:** ¥ compra COISA (gear, acesso, serviço); **PM compra PODER permanente**. Dinheiro nunca vira poder sozinho — é o que mantém "compre o que quiser" equilibrado.
- **Construtor de arma sob medida** (preço por dado / nível / efeito).
- **Tabela de encomendas que custam PM** (estilo personalizado, familiar, Júnior, arma demoníaca, poder sob medida) com ¥ + PM + trava.
- **O que o Bento não vende** (ressurreição, atributo, sair de graça). Propagado no site (vendinha.html).

> **24/06/2026 (4ª rodada)**

# **Update: "Do Peso e do Mestre"**
Combate mais tático (carga, quebra, desgaste da defesa) + conteúdo de mesa novo.

**Combate — três regras novas**
- **Desgaste da Passiva:** a Defesa Passiva erode. Cada ataque após o 1º na rodada baixa −5 (reseta no turno do defensor); cada Injúria carregada rebaixa (Leve −3 · Grave −6 · Crítica −10). É a chance do fraco contra o tanque: matilha + paciência. Unifica e substitui a antiga regra de cercado.
- **Arma respeita o teto do dobro:** o bônus em dados da arma conta na Troca Equivalente (pool ≤ 2× atributo). Arma grande em corpo fraco rende menos; o desarmado de atributo alto fica competitivo. Inclui regra de **Desarmado** (+0, ataca com atributo puro).
- **Carga & Mãos:** 2 mãos, slots de carga = 5 + Força (Leve 1 / Médio 2 / Pesado 3). Acima do limite: −1d10 Coord, não corre, −5 Passiva. Sacar/trocar = 1 Movimento.
- **Quebra, Conserto & Munição:** arma falha/quebra no Desastre (Dado 1); munição contada, recarga = 1 Movimento; conserto via Tecnologia/Engenheiro de Campo, Seu Bento (~30% do preço), ou regeneração demoníaca.

**Conteúdo de mesa novo**
- **[INÍCIO RÁPIDO](../01-leia-primeiro/INICIO-RAPIDO.md)** — quickstart de 2 páginas: regra de ouro, combate em 4 passos, 3 caçadores pré-prontos (22 pontos, verificados) e 1 cena pronta. Resolve a porta de entrada.
- **[GUIA DO MESTRE](../09-guia-do-mestre/COMO-CONDUZIR-SCAR.md)** — como conduzir SCAR: montar sessão, dosar o Medo, ritmo de combate, quando usar Injúria/Aflição/Colapso/Marca, recompensar PM, os 4 Eixos, os 3 erros comuns, e um **exemplo de jogo narrado** com rolagens reais.

Propagado no site (sumario.html: Desgaste, teto da arma, Carga, Quebra) e na vendinha (Carga & Peso).

**Sumário do site refatorado**
- Nova aba **Visão Geral** (padrão ao abrir): regra de ouro, referência rápida (DT, combate em 4 passos, Stress), e o guia condensado (como jogar / como mestrar) + atalhos pro Início Rápido e Guia do Mestre.
- **Abas reduzidas de 12 para 5:** os 11 capítulos foram agrupados em 4 temas (Personagem, Jogo & Combate, Estados, Mundo) + Visão Geral. Cabe numa fileira em vez de três. Links diretos (#sec-X) abrem o grupo certo e rolam até o capítulo.

---

> **24/06/2026 (3ª rodada)**

# **Update: "Do Acerto Final"** — auditoria pós-refino
Após o refino de prosa, nova auditoria por agentes. Correções de consistência e três decisões de design.

**Consistência (bugs corrigidos)**
- `sumario.html` ainda mostrava a Troca Equivalente antiga ("dano fixo não tem teto"). Agora reflete os **dois tetos** (dados 2× atributo · fixo 10 + atributo).
- A frase "uma lógica só" listava o **Duelo**, que é exceção. Removido e declarado exceção (md + site).
- Nota cruzada em `aflicoes.md`: penalidade −Xd10 que zera o pool = **falha automática** (regra de borda).

**Atributos — fim da escolha falsa (16-22)**
- Mortais agora têm **22 pontos fixos** (teto 10). Cada ponto que você **abre mão** vira **+2 PM iniciais**, ou **3 pontos = 1 Habilidade Geral grátis**. Trocar poder bruto por evolução virou escolha real. Demônio Puro: 22 fixos, sem troca. Propagado em sumário, criação, fichas, README, site e wizard do rolador.

**Colapso — nível pela intensidade**
- O nível da Injúria do Colapso agora é **decisão do Mestre, pelo tamanho do que foi feito na rodada que estourou**: esforço comum = Leve; all-in com buffs empilhados, dados absurdos e realidade dobrada = Grave ou Crítica. Quanto mais poder arrancado de uma vez, pior a conta.

**Demônio Puro jogável — idade de estreia**
- Base recomendada: **Maduro (4 Pontos de Idade)**. O Mestre ajusta pela lore (Jovem 2 a Veterano 6); **Ancião+ é NPC/chefe**, salvo decisão consciente do Mestre. Fecha o buraco de um PC entrar Imemorial.

---

> **24/06/2026 (2ª rodada)**

# **Update: "Do Ajuste Fino"** — segunda auditoria
Após nova varredura por agentes do estado já corrigido. Foco no que tinha sobrado.

**Combate**
- **Defesa Passiva agora é 5,5 × atributo** (arred. p/ cima), não mais 5×. Motivo: com 5× a Defesa Ativa (rolar, média 5,5×) era *sempre* melhor que a Passiva — o "risco" prometido não existia. Com 5,5× a Passiva = média exata, então rolar Ativo vira aposta real ~50/50. Também baixa a letalidade da arma leve entre iguais (~42%→~27% de Grave). Propagado: sumário .md/.html, fichas, dice-roller (calc + export).
- **Piso explícito:** diferença ≤0 = raspão (sem Injúria); ≥1 = no mínimo Leve. Escrito na regra.

**Balanceamento**
- **Contratos de Restrição travados:** agora custam **6 PM** (antes só "aprovação do Mestre"), têm **Custo por Uso** pesado e não-mitigável (Injúria/Aflição/Sobrecarga), e o **PODER MÁXIMO respeita a Troca Equivalente** (não fura mais o teto de dados). Era o maior exploit remanescente.
- **Bom Homem / História que Assombra:** +20 → **+10 fixo** (entram no teto da Troca Equivalente; antes furavam por redação).
- **Armas Pesadas** refinada: Aflição automática só em **Crítica** (1× por alvo) e Medo só contra **Tier 2+ abaixo** (era o estilo ainda dominante).
- "Intelecto" removido da Brecha (atributo que não existe).

**Criação**
- Nova **ficha-exemplo de Demônio Puro** (`EXEMPLO-DEMONIO-PURO.md`) — faltava modelo preenchido da natureza mais diferente. Mostra Categoria de Medo, Pontos de Idade aplicados, Stress/DT/Injúrias fechados.
- Limpeza de redação no guia de criação (frase truncada da Lore).

**Coesão (site sincronizado)**
- `vendinha.html`, `trilhas.html`, `aparencias.html`: preços novos (Faca 150, Katana 500, Motosserra 4.000, Sniper 18.000) e estilos rebalanceados propagados.
- `sumario.html`: Defesa Passiva 5,5×, Ferimento→Injúria (3×), "Intelecto" removido.
- `index.html`: "109 habilidades" → "115".
- `aparencias.html` (bestiário): nota de slots de Injúria fixos por design adicionada.

---

> **24/06/2026**

# **Update: "Do Sistema Coeso"** — passe de revisão e balanceamento
Correções a partir de auditoria completa do sistema (facilidade de criar ficha + jogar + coesão).

**Clareza de regras**
- **Lógica de teste unificada:** todo teste agora é **somar Xd10 vs DT** (acabou a ambiguidade "contar dados que passaram"). Combate, perícia, social, Medo e Duelo usam a mesma soma. Graus de sucesso = cada +10 acima da DT.
- **Bloco "Ponto de Partida"** na criação (sumário §10 e `criacao-personagem`): PM inicial, habilidades grátis por natureza e fórmulas de recurso reunidos num só lugar.
- **Fórmulas de Injúria** agora aparecem direto nas fichas em branco (Leves = 2+⌊Vigor/2⌋, Graves = 1+⌊Vigor/3⌋, Crítica = 1).
- **Paridade de pacote inicial:** Infernal e Híbrido agora têm habilidades grátis de criação declaradas (antes só Humano tinha).
- **Links quebrados consertados** em `criacao-personagem` (removidos caracteres invisíveis U+2060); "Insistir no Teste" e "Brecha" adicionados ao índice.
- Regra de **piso de pool** (penalidades nunca geram dados negativos; pool 0 = falha automática) e padronização **Ferimento → Injúria**.

**Balanceamento**
- **Troca Equivalente agora cobre bônus fixo:** teto de +X fixo por teste = **10 + atributo base** (fechou o exploit de empilhar +10/+20 sem limite). Brecha com teto de **+20 por alvo**.
- **Armas Pesadas (estilo)** não anula mais armadura — **ignora 1 nível** de proteção.
- **Estilos fracos reforçados:** Boxe (Combinação: 2º acerto sobe Injúria) e Mãos da Guerra (nunca desarmado; +1d10 com arma de verdade).
- **Wrestling:** tabela de agarre reescrita (estava invertida/incompreensível).
- **Reprecificação:** Sniper 8.000→18.000¥, Motosserra 1.500→4.000¥, Faca 50→150¥; Katana 800→500¥.

**Coesão**
- **Bestiário:** declarado que slots de Injúria de NPC são fixados à mão por design (não pela fórmula de PC); cabeçalho dos minions corrigido.
- **Aflições:** perda de controle agora dá teste de reação (DT 20), alinhando com a Linha-Dura "ninguém perde o controle sem chance de reagir"; Grilhões seguem como exceção.
- **Ficha-exemplo (Ivanne)** corrigida: template certo (Híbrido 16-22), Estilo de Luta preenchido, PM coerente, marcada como exemplo de personagem desenvolvido.

**Combate — Defesa Passiva (resolve o empate entre iguais)**
- O **atacante rola sozinho** (soma Xd10 + arma) contra a **Defesa Passiva = 5 × atributo de defesa** do alvo. Uma rolagem por troca → combate ~2× mais rápido e que **resolve** (some o impasse de dois pools iguais).
- **Defesa Ativa** vira escolha: o defensor gasta a **Reação** pra rolar no lugar da Passiva e tentar anular um golpe grande.
- **Cercado:** −5 na Passiva por atacante além do 1º na rodada; sem Reação/surpreso = Defesa 0. Atualizadas as seções Ataque & Defesa, Sem Defesa e Vários contra um.
- Ficha (docs + export do rolador) agora traz a linha **Defesa Passiva**; aba LIVRE do rolador ganhou calculadora de Passiva e tabela de diferença atualizada (inclui Morte 40+).

**Ferramenta — wizard de criação no rolador (`dice-roller.html`)**
- **Contador de pontos de atributo ao vivo**: mostra total / limite (16-22, ou 22 pro Demônio Puro), pinta verde/amarelo/vermelho, trava o teto 10 e avisa atributo 0 (falha automática + Stress).
- **Dica de Ponto de Partida**: ao escolher a natureza, mostra as habilidades grátis daquela natureza.
- Estilos de Luta no rolador sincronizados com o balanceamento novo (Boxe, Armas Pesadas, Mãos da Guerra, Wrestling).
- Export da ficha agora mostra o total de pontos e cabeçalho de atributos correto por natureza.

---

> **31/12/2025**

# **Update: "Da Maldade"**
Início do trabalho em demônios jogáveis.
- Sistema dos Demônios
- Fichas dos Demônios
- Origens dos Demônios
- Ideias de conceitos pra Demônios

---

# **Update: "Do Fazer Algo Direito"**
- Rework do sistema, conceitos de lore e ficha
- Efeito dos armamentos

---

> **01/01/2026**

# **Pequena Update**
Ajustes finos em Stress e Injúrias.
- Stress ampliado (recuperação, forçar dado, etc)
- Recalculado a quantidade real de Injúrias

---

> **02/01/2026**

# **Update Completa: "Crescer e Ficar Mais Forte"**
Sistema de progressão entrou em vigor.
- Sistema de pontuação por missões e batalhas
- Sistema de evolução de origem (menos demônios)
- Habilidades de origem
- Habilidades gerais
- Contratos pré-prontos

---

> **03/01/2026**

# **Update Completa: "O Seu Medo Me Fortalece"**
Demônios ganharam mecânica de evolução baseada em medo.
- Sistema do Medo pra demônios
- Sistema de evolução dos demônios
- Segredo+

---

> **04/01/2026**

# **Balanceamento: "Chega de Malek Opressor kkkk"**
Autoridade tava forte demais — agora resistir a ela usa o mesmo sistema de resistir a demônios.
- Testes pra resistir a Autoridade usam o sistema do Medo

---

> **05/01/2026**

# **Update Completa: "Usa Poderzinho Quem Não Se Garante na Porrada"**
Combate corpo a corpo precisava de identidade pra não depender só de poderes.
- Criação dos Estilos de Luta
- Buff geral em combate corpóreo
- Revisão do gasto de Stress corpóreo

---

# **Buff/Revisão Completa: "Aflições"**
Aflições estavam fracas — agora ferram os personagens de verdade.
- Aumentar, buffar e revisar aflições (traumas e condições persistentes)

---

# **Update Completa: "Tutorial de Como Ir ao Inferno ☺️"**
Portas pro inferno agora têm regra.
- O que são
- Como abrir

---

> **14/01/2026**

# **Update de Última Hora: "Melhorando a Explicação"**
- Sistema melhor explicado
- Criação de personagens e demônios refinada
- Gasto de PM detalhado

---

# **Update: "Crescer e Ficar Mais Forte 2"**
Expansão das opções de progressão.
- +130 Habilidades gerais (2 marcadas)
- Mais modelos de contratos pré-prontos com custos definidos
- 19 habilidades únicas pra cada origem (menos demônios)

---

# **Rework: "O Seu Medo Me Fortalece"**
Sistema do medo precisava de ajuste depois dos primeiros testes.
- Sistema do medo pra demônios refeito
- Sistema de evolução dos demônios (buff)
- Segredo+ (buff)

---

> **15/01/2026**

# **Update: "Aflição 2"**
- Rework completo das aflições
- 200 tipos de aflições mentais e físicas

---

> **30/01/2026**

# **Update: "Crítico" + "E Hora do Duelo!"**
Sistema rodava há meses sem crítico — finalmente entrou. E duelos ganharam mecânica própria.
- Sistema de Crítico (depois de milênios)
- Sistema de Duelo
- Buff e debuff pós-duelo

---

# **Rework: "Armado Até os Dentes"**
Armas eram genéricas. Agora cada uma tem efeito próprio.
- Buff em armas e efeitos armados
- Modelo padrão de armas

---

> **31/01/2026**

# **Rework Completo: "Talismãs"**
Talismãs estavam dando bônus fixo grande demais. Agora cada uso escolhe 1 efeito de uma lista — funciona como recurso, não como buff permanente.

Escolha **1 efeito grátis por uso**:
1. Rerolar um teste falho
2. Reduzir 1 nível de Injúria recebida
3. Ignorar 1 Aflição por 1 cena
4. +3d10 em teste relacionado ao significado do Talismã
5. Resistir automaticamente a 1 Teste de Medo
6. Recupera 1d7 + Vínculo de Stress

---

# **Update: "O Que É Chainsaw Man?"**
Explicação do mundo onde o RPG se passa.
- Facções, localizações, termos e conceitos do universo

---

# **Rework Completo: "Passos pra Criar uma Ficha"**
Fichas reformuladas pra novato não se perder na criação.
- Reformulação completa das fichas de Demônios Puros, Humanos, Infernais e Híbridos

# **Rework: "Nome do Servidor & Conceito"**
O servidor cresceu mais do que o esperado — ganhou nome e identidade.
- Renomeado pra **"Sacrificial Contract & Risk"** (SCAR)
- Foco em aprofundar o sistema de Chainsaw Man e criar mais formas de explorar esse mundo

---

> **01/02/2026**

# **Nerf: "Híbrido / Grilhões"**
Híbrido tava forte demais sem custo. Grilhões agora medem o controle que o demônio interno tem sobre você.
- Grilhões: o demônio pode te possuir, forçar ações e etc

---

> **02/02/2026**

# **Update: "Compre o Meu Curso 📘"** *(zoeira)*
SCAR oficialmente saiu do papel — site no ar.
- Sistema agora tem site oficial: https://jonathanrbo.github.io/SCAR/

---

# **Update: "Vc É uma Falha"**
Sistema de tratamento pra dado natural 1.
- Sistema de Dados iguais a 1 (falha crítica)

---

> **03/02/2026**

# **Update: "Compre o Meu Curso 2 📘"** *(zoeira)*
Site oficial agora roda no mobile e ganhou ferramentas pra mesa virtual.
- Site responsivo (mobile)
- Rolador de dados com efeitos diversos integrado ao site
- Modo multiplayer pra dados/sessões improvisadas
- Site: https://jonathanrbo.github.io/SCAR/

---

> **05/04/2026**

# **Update: "Ninguém Sobrevive Sozinho"**
Atualização focada em tudo que acontece fora do combate. Companheiros, relações, investigação, sobrevivência e o que mantém um caçador humano num mundo de demônios.
- Sistema de Intimidade & Reprodução
- Habilidades Gerais (5 novas categorias, 127 habilidades)
- Sistema de Júnior/Escudeiro
- Correções de consistência e balanceamento
- Reorganização de documentos (18 → 11 arquivos)

---

# **Update: "Fundação"** *(antes "Alicerce")*
Regras fundamentais que faltavam no sistema. Sem isso, combate não tinha ordem, ferimentos não curavam, ninguém sabia quanto ganhava, e demônios jogáveis não tinham poderes pra escolher.
- Sistema de Iniciativa (1d10 + Coordenação)
- Cura & Recuperação entre missões (Leve 1d3 dias, Grave 1d3 semanas, Crítica 1d3 meses)
- Dinheiro & Economia (tabela de pagamento por missão, custo de vida, mercado negro)
- 14 Poderes Demoníacos prontos pra Demônios Puros jogáveis (8 combate + 6 utilidade)

---

# **Buff: "O Cadáver Tem Memória"**
Infernal não tinha motivo pra ser escolhido em vez de Híbrido. Agora tem identidade própria: é o tipo que conhece demônios melhor que ninguém e ignora dor — mas o corpo não dura pra sempre.
- Memória do Inferno: +1d10 vs demônios conhecidos, identifica conceito sem teste
- Corpo Emprestado: Injúrias Leves nunca geram penalidade
- Corpo em Decomposição: a cada 3 sessões, risco de Aflição Física (1d10, resultado 1-2)

---

# **Buff: "Levanta e Luta"**
Boxe e Judô eram os estilos mais fracos. Boxe dependia do inimigo falhar, Judô dependia do inimigo ser mais forte. Ambos ganharam identidade e utilidade constante.
- Boxe: +esquiva natural (+1d10 se defender por 5+) e resistência de ringue (1ª Leve sem penalidade)
- Judô: contra-ataque usa Força do inimigo, bônus na defesa E no contra-ataque vs mais fortes, fluxo (derrubar dá +1d10 pra aliados)

---

> **05/05/2026**

# **Update: "O Mestre Pirou: Ato 1"**
Abertura da pasta de spinoffs (**Loucuras do Mestre**) — onde o sistema do SCAR vira esqueleto pra outros universos. Primeira loucura no ar: **STAGE**, SCAR no mundo dos astros da música, com labels demoníacas e fandoms que te devoram o psicológico.
- Pasta `05-loucuras-do-mestre/` + molde padrão pra futuras esquizofrenias
- **STAGE** mapeia o motor inteiro do SCAR pro tema idol: 4 Naturezas, 10 Atributos, Recursos, 5 Selos e 12 Estilos de Performance reflavorizados
- Hype (= Medo), Gimmick (= Talismã), Escala de Público (= Idade do demônio)
- 8 tipos de Cena Mecânica (Show, Entrevista, Premiação, Surto Online...) + Sistema de Banda
- **Regra de ouro:** cantar de verdade pra forçar dado

---

> **07/05/2026**

# **Update: "O Mestre Pirou: Ato 2"**
Segunda loucura no ar: **MITO**, DLC opcional que adiciona anjos, santos, espíritos, folclóricos e eldritch à mesa. Diferente do STAGE (reflavor), MITO é aditiva sem substituir nada do SCAR base.
- #loucuras-do-mestre ganha tipagem: **Reflavor** e **DLC**
- 1 natureza nova (**Sobrenatural**) + Híbrido e infernal(Revenante em MITO) ganharam **variantes sobrenatural** com habilidades iniciais novas e conceitos.
- Reverência (= Medo), Manifestação (= Idade), Votos (= Contratos), Estigma (= Marca)

---

> **07/05/2026**

# **Update: "Choquei"**
Lore canônica do mundo SCAR ganhou arquivo próprio em. História oficial de 1908 a 2011 com incidentes-âncora, apagamentos nos eventos.
- **Linha do Tempo em 4 eras(Lore)**: Pré-Guerra (1908-1937), Guerra Fria (1945-1979), Crise Soviética (1986-1996), Pós-Armas (1997-2011)
- **Apagamentos**: conceitos apagados da história por contrato demoníaco 

---

> **09/05/2026**

# **Rework Completo: "Menos é Mais"**
Eram **mais de 200 habilidades** espalhadas em muitas categorias diversas, sem identidade temática e cheias de redundância. Cortadas, consolidadas e reescritas, agora cada uma tem propósito e aura.
- **De 200+ → 109 habilidades** em apenas **3 categorias**: Físico / Mental / Social (`habilidades.md`)
- Critério narrativo por categoria (corpo / cabeça / pessoa) com texto de abertura próprio
- "Aura" adicionada em habilidades antes mecânicas demais (Atirador, Tiro de Precisão, Reflexo Antecipado, Defensor Natural, Aparagem Mestra, Velocidade Cegante, Tiro Duplo, Speed Blitz, etc)
- Mais opções de habilidades multi-alvo no estilo Speed Blitz e Esquiva Impossível
- Redundâncias removidas, combos quebrados rebalanceados

---

# **Update: "Troca Equivalente — Limite do Dobro"**
Stacking estava aberto pra inflação (10d10 num teste com atributo 5 acontecia). Em vez de cap fixo proibitivo, virou **trade-off**: você pode estourar, mas o corpo cobra o preço.
- Bônus em d10 somados não pode passar do **atributo base** *(total ≤ 2× atributo)*
- Cada d10 excedente: **+2 Stress + +5 fixo + estado Sobrecarregado**
- Sobrecarregado por 3 rodadas seguidas → **desmaio**; 1 rodada de descanso reseta o estado
- **Dano fixo (+X)** continua livre, sem teto
- Stress de Sobrecarregado **não pode ser mitigado** por habilidades de redução

---

# **Update Completa: "A Vendinha do Seu Bento Abriu"**
Antes os contratos, armas, armaduras, estilos de luta e preços ficavam soltos em arquivos diferentes — ninguém sabia onde achar nada nem o que era canônico. Agora é uma loja só, organizada e narrativa.
- **Vendinha do Seu Bento** criada do zero como single source of truth de equipamento e mercado
- Armas catalogadas por alcance (curto / médio / longo) com efeitos próprios
- Armaduras consolidadas
- **12 Estilos de Luta** num catálogo único
- Custos de PM por natureza unificados
- Sistema de **dinheiro & economia** integrado (custo de vida, mercado, pagamento por missão)
- Regra pra **comprar estilos de luta extras** (5 PM + 3.000¥ pro 2º, 8 PM + 6.000¥ pro 3º)

---

# **Update: "Veículos"**
Sistema não tinha regra pra moto, carro, caminhão ou nada com roda. Agora tem.
- Sistema de Veículos criado do zero
- Integrado ao combate, perseguição e exploração

---

# **Update: "Tudo Tem Sumário Agora"**
Arquivos do sistema eram densos e sem orientação — abrir um doc era se perder dentro dele. Cada arquivo principal ganhou sumário próprio e existe um overview central.
- **Sumario.md** consolidando o sistema inteiro (Personagem, Testes, Combate, Duelo, Stress, Aflições, Demônios Puros, Descanso, Criação)
- Sumário interno em cada arquivo principal pra navegação rápida
- Cross-references entre docs (`ver vendinha-do-seu-bento.md`, `ver sumario.md`, etc)

---

# **Rework: "Criar Ficha Sem Chorar"**
A área de ajuda pra criação de personagem era básica e confusa — novato abria e fechava sem entender. Reescrita do zero com passo a passo, exemplos e explicações de cada decisão.
- Criação de personagem reformulada com fluxo guiado
- Explicações claras pra cada natureza (Humano, Híbrido, Infernal, Demônio Puro)
- Custos, escolhas e exemplos por etapa
- 14 Poderes Demoníacos reformatados em padrão consistente (Tipo / Custo / Atributo / Efeito)

---

# **Update: "História + Lore Viraram Uma Coisa Só"**
Antes existia um arquivo só pro **tom da história** e outro pra **lore canônica** — separados, redundantes e desconectados. Fundidos num documento único onde tom e fato andam juntos.
- Tom da História + Lore consolidados em um arquivo
- Linha narrativa unificada (referências cruzadas entre eventos canônicos e atmosfera)

---

# **Update: "Habilidades de Demônios"**
Antes não tinha habilidades "gerais" para Demônios Puros tendo apenas que criar as proprias e para as outras naturezas tinham, agora esta livre para players e npcs demonio possam não so criar suas habilidades e caso não tenham criatividade possam escolher algumas ja escritas.
- Habilidades de demônios escritas e disponíveis.

# **Balanceamento: "Cura Mais Rápida, Vida Mais Curta"**
Tempos de cura tavam longos demais — players ficavam de molho cenas fora do jogo. Comprimidos pra manter pressão sem virar sessão de hospital.
- **Leve:** 1 noite (era 1d3 dias)
- **Grave:** 1d3 dias (era 1d3 semanas)
- **Crítica:** 1d3 semanas (era 1d3 meses)

---

# **Update: "O Mestre Pirou: Ato 3 — Musume"**
Terceira loucura no ar: **MUSUME**, DLC que adiciona Musumes (humanas com sangue de cavalo) à mesa. Próximas dos Híbridos, mas o que carregam dentro não é demônio — é a **obsessão pela vitória de alguém que perdeu**, condensada em forma viva. Foco total em corridas.
- **4 Naturezas por porte:** Veloz (sprinter), Compassada (miler), Eterna (stayer), Bárbara (cross-country/obstáculo)
- **Sistema de Corrida** com 5 Fases (Largada, 1ª Reta, Curva, Reta Final, Última Esticada) — cada fase é teste de atributo SCAR específico
- **4 Estilos de Corrida:** Fugitiva, Marca-Passo, Atacante, Tempestade Final (paralelos a Estilos de Luta)
- **5 Tipos de Pista:** Plana, Areia, Cross-Country, Obstáculo, Carga
- **Condições da Pista:** seca, pesada, empoeirada, vento contrário/cauda, pista nervosa
- **Manobras de Pelotão:** Marcar, Boxe, Furar pelo lado, Roubar Pace
- **Surto Final** — recurso de risco máximo na Última Esticada
- **Pulso de Corrida** (= Grilhões pra Musume) — gatilhos que disparam compulsão de correr
- **Treinador** como suporte mecânico (de qualquer natureza SCAR)
- **Habilidade Única** por Musume — temática ao cavalo histórico que ela honra
- **Aflições próprias:** Pernas Quebradas, Sangue Esfriado, Trauma de Derby, Síndrome do Pódio, Casco Rachado, Pulmão Estourado
- **Carreira/Temporada:** Estreia → Local → Regional → Nacional → Derby Internacional → Triple Crown
- Criação usa template de Júnior/Companheiro do SCAR (12 pts atributo, máx 4, Stress 4 + Vigor + Vínculo)
- Totalmente compatível com SCAR base (campanha pura ou mista)

---

> **20/05/2026**

# **Rework Completo: "MUSUME — Confrontos no Lugar de Fases"**
Corrida de Musume tava virando contagem de fase mecânica — rola Coordenação, rola Vigor, rola Vínculo, soma posição. Sem peso narrativo entre rolagens. Reescrito do zero pra ser sequência de momentos com declaração, modificadores em cadeia e último Confronto decisivo.
- **Naturezas renomeadas pra forma de correr** (não mais porte): VELOZ → **RAJADA**, COMPASSADA → **CADÊNCIA**, ETERNA → **TEIMOSA**, BÁRBARA → **INDÔMITA**
- Habilidades próprias reescritas no padrão Confronto (Sopro / Compasso / Não Para / Pisada Firme)
- **Sistema de Corrida refeito:** 3 fases → **N Confrontos por distância** (Sprint 2, Mile 3, Longa 4, Maratona 5)
- **Sem tracker de posição** — Modificadores em Cadeia passam pro próximo Confronto: 1º vencedor leva +1d10 (cap +3d10), falha crítica leva -2d10 + Injúria
- **Último Confronto decide o ranking final** — Confrontos anteriores afetam o seguinte via cadeia, não via contagem
- **Pistas viraram distâncias** (Sprint / Mile / Longa / Maratona) · terreno saiu daqui e virou **Condição**
- **Condições de Pista** como status: Chuva, Lama, Gramado Seco, Vento Contrário, Sol Forte, Pista Nervosa
- **Manobras = Habilidades Gerais SCAR** (Físico/Mental/Social) adaptadas à pista pelo mestre — fim de Boxe/Furar pelo Lado dedicadas
- **Surto Final = Forçar Fôlego turbinado:** gasta X Stress (positivo ou negativo) por +Xd10. Apenas pontos NO NEGATIVO geram Fratura (1 por ponto). 3+ Fratura = Pernas Quebradas automático
- **Limite do Dobro aplicado à corrida** — bônus em d10 não pode passar do atributo dominante; excesso vira +5 fixo + Stress de Sobrecarregado (freio natural pra Surto Final extremo)
- **Falha crítica em rolagem de Confronto** = 2+ dados marcando 1 (consistente com o sistema "Vc É uma Falha" do SCAR base)
- Estilos de Corrida reescritos pra disparar em primeiro/meio/último Confronto (sem referência a "Largada/Meio/Final")
- **Estilo Customizado** liberado: player monta Conceito + escolhe 1 Bônus de Mecânica de uma lista + mestre desenha 1 Bônus Custom condicional. 4 pré-prontos continuam como opção.
- **Manobra de Pelotão reintroduzida** como declaração extra opcional (não substitui ação principal): Prensar (Força vs Coord, alvo -1d10) e Cortar pelo Lado (Coord vs Perc, +1d10 pra você). 1x por corrida, custa 2 Stress. Única ferramenta que tira d10 do oponente.
- Treinador escala melhor com Vínculo (níveis 5, 7, 9 destravam suporte progressivo)

### Balanceamento (ajustes pós-simulação)
- **Sopro (Rajada) nerfed:** custo subiu pra 4 Stress no próximo Confronto + só pode ser usada se ela ainda não venceu nenhum (força papel de "abridora explosiva", não de "embaladora")
- **Compasso (Cadência) refeito:** ignora o pior dado de uma rolagem 1x por corrida (consistência tangível, não +1d10 condicional fraco)
- **Não Para (Teimosa) buffado:** ganhou efeito ativo — recupera 1 Stress quando rival rola falha crítica (cresce com queda alheia)
- **Fugitiva buffada:** se vencer os 2 primeiros Confrontos, ganha +2d10 no último (recompensa a liderança acumulada — antes ela morria no fim)
- **Tempestade Final capada:** Surto Final dobra apenas os 3 PRIMEIROS pontos negativos (do 4º em diante conta normal). Evita explosões de 15+ d10 que tornavam o estilo dominante.

### Ações: 1 Movimento + Habilidades Ilimitadas
- **Estrutura de ações refeita:** 1 Movimento de Pista obrigatório (Manobra com Habilidade Geral OU Aguentar) + habilidades adicionais ilimitadas empilháveis, limitadas só por Stress + Limite do Dobro
- Sem mais "1 ação por Confronto" artificial — coerente com SCAR base, onde Stress já regula gasto
- **Vencer é Formalidade:** quando o bônus de uma Musume excede muito o pelotão, mestre narra como passagem dominante. Ela rola por formalidade, mas a vitória é fait accompli. Tom Uma Musume Pretty Derby.

---

> **17/05/2026**

# **Proposta: "VC E BETA"**
Seu personagem é ELE naquela cena. Você informa o mestre que vai farmar ou mogar o beta, onde vc narra o que seu personagem vai fazer com detalhes com essa aura onde vc fica **peak**. caso tudo ocorra nos conformes e passe no teste em que vc farmou aura vc ganha um bonus.
- Escolhe 2 buffs absurdos (sucesso garantido, +2 tiers, imortal, hype contagia aliado, frase paralisa inimigo)
- Inimigo também puxa aura**
- Preço depois: apagão, cospe sangue, +Stress, +Grilhão, ou Sonho trincado. Sem free lunch.
- **Demônio Puro não tem aura** eles são betas.

---


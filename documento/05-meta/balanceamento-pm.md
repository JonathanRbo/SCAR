# BALANCEAMENTO DE PM — Revisão
══════════════════
> *Status: análise + decisão aplicada.*

## ✅ DECISÃO APLICADA
- **PM de combate** virou **ganho único por sessão** (escolhe o feito mais alto, não soma por inimigo) — corrigido em `sumario.md` e `sumario.html`.
- **Custo de atributo:** mantido (já está caro o suficiente — decisão do autor).
- **PM inicial 3:** vale **só pra Humano** (parte do background humano, não regra geral).
- **Pendente (a critério do autor):** ficha em `criacao-personagem.md` ainda mostra `PM: 0`.

---

## RESPOSTA RÁPIDA: quanto PM tem uma pessoa comum?

**Na criação: 3 PM** (background "vida comum"). Régua oficial (`sumario.md` → PM Inicial):

| Passado | PM inicial |
|---|---|
| Vida comum, sem eventos extremos | **3** |
| Já enfrentou mortes / violência / caos | 5 |
| Sobreviveu a trauma grave | 7 |
| Passado extremo (massacre, contrato antigo, quase-morte) | 9 |

(+ 1d10 e +1 a cada 3 anos de experiência prévia em missões)

---

## INCONSISTÊNCIAS ENCONTRADAS

1. **Ficha diz `PM: 0`** (`criacao-personagem.md`), mas a regra dá **3** pro humano comum. Corrigir a ficha pra `PM: 3 (vida comum)` ou anotar que o 0 é *antes* de somar o background.
2. **Custo de +1 atributo é fixo** (Humano 4 / Híbrido 5), o que não acompanha a curva de poder — subir de 2→3 custa o mesmo que 9→10, mesmo a escala dizendo que tiers altos levam "anos".

---

## O PROBLEMA CENTRAL: ganho "por batalha" × curva "por campanha/anos"

O **ganho de PM** está calibrado por evento (por inimigo, por feito), mas o **custo** e a **escala de poder** foram pensados em ritmo de campanha longa. Eles se contradizem.

**Entrada estimada (1 sessão típica: ~2 combates + 1 missão):**
- Combate: +3 a +6 *por inimigo/feito*
- Missão: +3 a +8
- ≈ **~16 PM / sessão**

**Custos atuais:** habilidade 2 · +1 atributo 4-5 · evoluir poder 2-3

**Choque:** subir **1 atributo de 2 → 7** = 5 × 4 = **20 PM ≈ 1,5 sessão**.
Mas `escala-de-poder.md` diz que tier **7-8 = "2+ anos focando"**. Resultado: a matemática deixa virar monstro em poucas sessões, contrariando a própria lore.

---

## PROPOSTA DE AJUSTE *(escolher 1 caminho)*

### ▸ Caminho A — Custo escalonado + ganho por sessão *(recomendado)*
1. **+1 atributo custa o NOVO valor em PM** (ir pra 5 custa 5 PM; ir pra 8 custa 8 PM). Trava tiers altos sozinho, sem tabela extra.
   - Ex: 2→7 = 3+4+5+6+7 = **25 PM** (vários arcos pra UM atributo focado → bate com "veterano").
2. **PM de combate vira ganho ÚNICO por sessão**, não por inimigo: no fim da sessão, +3 (tranquila) / +5 (arriscada) / +8 (virada de arco). Para de empilhar +3-6 por luta.
3. **Sonhos mantêm** (4/6/10/15) — são raros, é recompensa de arco, tudo certo.
4. Resultado: ~5-8 PM/sessão em vez de ~16. Crescer fica significativo, mas não explode.

### ▸ Caminho B — Só reduzir os ganhos
Manter custos, mas cortar ganho de combate pela metade (+1 a +3) e deixar missão como recompensa principal. Mais simples, mexe menos, mas não resolve o "atributo alto custa barato demais".

### ▸ Caminho C — Teto por arco
Limitar PM gasto por arco (ex: máx 10 PM/arco), independente de quanto entrou. Segura a inflação sem mexer nas tabelas.

---

## RECOMENDAÇÃO

**Caminho A.** O custo escalonado de atributo é a única mudança que sozinha já alinha a matemática com a escala de poder ("anos pra ser monstro"), e transformar o combate em ganho-por-sessão mata a inflação por farm de inimigo. Sonhos e a régua de PM inicial ficam como estão.

> Pra aplicar: ajustar `sumario.md` (seções *Ganho de PM* e *Custos de PM por Natureza*) e corrigir a ficha (`PM: 0` → `PM: 3`).

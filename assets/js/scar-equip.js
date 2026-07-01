// ====================================================
// SCAR — Equipamento, tiers, riqueza, veículos e encomendas
// Usado por criar.html (junto com scar-catalogo.js)
// ====================================================

// ===== Tiers de raridade (orçamento de poder, não só preço) =====
const TIERS = [
  { key:'comum',       nome:'Comum',       cor:'#8a8a8a', yen:'até 1.000 ¥',              poder:'1 traço: +1d10 OU 1 efeito. Nível Leve.' },
  { key:'especial',    nome:'Especial',    cor:'#5DADE2', yen:'1k – 10k ¥',               poder:'+2d10 OU +1d10 e 1 efeito. Pode subir a Grave.' },
  { key:'superior',    nome:'Superior',    cor:'#9B59B6', yen:'10k – 50k ¥',              poder:'+2d10 e 1 efeito forte, OU teto Crítica. Alcance estendido.' },
  { key:'excepcional', nome:'Excepcional', cor:'#D4AF37', yen:'50k+ ¥ (+PM se demoníaco)', poder:'+3d10, 1 efeito forte e 1 traço único. Carrega SEMPRE 1 Limitador.' },
];
const TIER_LABEL = { comum:'Comum', especial:'Especial', superior:'Superior', excepcional:'Excepcional' };
const TIER_COR = { comum:'#8a8a8a', especial:'#5DADE2', superior:'#9B59B6', excepcional:'#D4AF37' };

// ===== Limitadores — todo item Excepcional pega 1 (pra não ficar roubado) =====
const LIMITADORES = [
  'Faminta: consome 1 Injúria Leve sua por cena de uso (ou 3 Stress pra não sangrar).',
  'Marcada: enquanto a empunha, demônios te acham — −1d10 pra se esconder / passar por humano.',
  'Instável: no desastre (dado 1), o efeito volta contra você (sofre o próprio golpe pela metade).',
  'Cobrança: 1x por sessão o item exige um preço narrativo do Mestre (favor, nome, lembrança).',
  'Ciumenta: só funciona nas suas mãos; com outra pessoa é arma comum e ela não gosta de ser largada.',
  'Ruído do Abismo: cada uso sobe +1 no seu Stress e atrai atenção (barulho conceitual).',
];

// ===== Arma sob medida — custo por peça (¥), da Vendinha =====
const ARMA_PECAS = {
  dado:   [ {v:0,label:'sem bônus',yen:0}, {v:1,label:'+1d10',yen:500}, {v:2,label:'+2d10',yen:1500}, {v:3,label:'+3d10',yen:4000} ],
  nivel:  [ {v:'Leve',yen:0}, {v:'Grave',yen:500}, {v:'Crítica',yen:2500} ],
  alcance:[ {v:'Curto',yen:0}, {v:'Médio',yen:500}, {v:'Longo',yen:1000} ],
  efeitos:[
    {nome:'Ocultável',yen:300,forte:false},
    {nome:'Perfurante (ignora 1 proteção)',yen:400,forte:false},
    {nome:'Atordoar (−1 ação)',yen:400,forte:false},
    {nome:'Silencioso',yen:400,forte:false},
    {nome:'Área (até 2 alvos)',yen:500,forte:false},
    {nome:'Execução (morte em indefeso)',yen:1000,forte:true},
    {nome:'Brutal (+1 nível de Injúria)',yen:1000,forte:true},
    {nome:'+2d10 contra desprevenido',yen:1000,forte:true},
  ],
};

// ===== Riqueza inicial — rola dados pelo passado (¥) =====
const RIQUEZA = [
  { key:'duro',        nome:'Duro',        dados:2, mult:100, nota:'vira e mexe sem grana' },
  { key:'remediado',   nome:'Remediado',   dados:3, mult:150, nota:'paga as contas, sobra pouco' },
  { key:'confortavel', nome:'Confortável', dados:4, mult:250, nota:'tem uma reserva' },
  { key:'conectado',   nome:'Conectado',   dados:5, mult:500, nota:'dinheiro e contatos' },
];

// ===== Veículos (garagem do Bento) =====
const VEICULOS = [
  { id:'scooter',    nome:'Scooter 50cc',        tier:'comum',       yen:800,   slots:1, vel:'Média',        manobra:'Alta',  bonus:'+1d10 furtividade urbana', pilota:'Coordenação',            efeito:'Boa pra entrega/disfarce. Não corre de demônio sério.' },
  { id:'fusca',      nome:'Fusca',               tier:'especial',    yen:1500,  slots:3, vel:'Média',        manobra:'Média', bonus:'—',                        pilota:'Coordenação',            efeito:'Quebra fácil (1d10/perseguição: 1-2 pifa), mas sempre volta a ligar.' },
  { id:'honda-cbr',  nome:'Honda CBR',           tier:'especial',    yen:4000,  slots:2, vel:'Muito Rápida', manobra:'Alta',  bonus:'+1d10 fuga',               pilota:'Coordenação/Malandragem', efeito:'Frágil: cai feio em colisão.' },
  { id:'pickup',     nome:'Pickup velha',        tier:'especial',    yen:5000,  slots:5, vel:'Média',        manobra:'Baixa', bonus:'+1d10 manobra agressiva',  pilota:'Vigor/Força',            efeito:'Carrega aliados/cargas. Difícil de virar.' },
  { id:'van',        nome:'Van usada',           tier:'especial',    yen:6000,  slots:5, vel:'Lenta',        manobra:'Baixa', bonus:'—',                        pilota:'Coordenação/Vigor',       efeito:'6 pessoas + equipamento. Padrão "vanzinha branca".' },
  { id:'sedan',      nome:'Sedan Comum',         tier:'especial',    yen:8000,  slots:4, vel:'Rápida',       manobra:'Média', bonus:'+1d10 rodovia',            pilota:'Coordenação/Tecnologia',  efeito:'Confiável. Anônimo.' },
  { id:'caminhao',   nome:'Caminhão de Carga',   tier:'superior',    yen:12000, slots:7, vel:'Lenta',        manobra:'Baixa', bonus:'+1d10 colisão/barricada',  pilota:'Vigor/Força',            efeito:'Atravessa barricada média. Ruim em rua estreita (−1d10).' },
  { id:'land-rover', nome:'Land Rover Blindado', tier:'superior',    yen:25000, slots:6, vel:'Média',        manobra:'Baixa', bonus:'+2d10 colisão',            pilota:'Coordenação',            efeito:'Vidro à prova de bala: reduz 1 nível por tiro externo. Roubado: risco de marca.' },
  { id:'moto-besta', nome:'Moto-Besta',          tier:'excepcional', yen:12000, slots:3, vel:'Muito Rápida', manobra:'Média', bonus:'+1d10 geral',              pilota:'Vínculo',                efeito:'Demoníaca (ela escolhe quem monta). Limitador: bebe sangue (1 Injúria Leve/semana) e atrai demônios maiores. Custa + contrato.' },
];

// ===== Encomendas do Bento (sem Familiares) — ¥ compra coisa, PM compra poder =====
const ENCOMENDAS = [
  { id:'info-contato',   nome:'Informação / Contato / Serviço',  tier:'comum',       yen:'100 – 1.000 ¥', pm:0,           efeito:'O que o mundo já tem: um nome, um rumor confirmado, munição rara, documento de uma noite.' },
  { id:'identidade',     nome:'Identidade nova / Sumir do mapa', tier:'superior',    yen:'10k – 50k ¥',   pm:0,           efeito:'Documento que cola, história de fundo, desaparecer da SP. Só ¥, mas amarra um favor.' },
  { id:'junior',         nome:'Júnior / Escudeiro formado',      tier:'superior',    yen:'10k+ ¥',        pm:'conforme',  efeito:'NPC treinado que te segue. Vínculo gera consequência quando ele se machuca.' },
  { id:'estilo-custom',  nome:'Estilo de Luta personalizado',    tier:'superior',    yen:'3k / 6k ¥',     pm:'5 / 8',     efeito:'Um estilo novo desenhado com o Mestre. Cena de treino. Máx 3 estilos no total.' },
  { id:'arma-demoniaca', nome:'Arma demoníaca',                  tier:'excepcional', yen:'Alto+ ¥',       pm:'3+',        efeito:'Ignora teto de dano ou corta um conceito. Item de Contrato: tem Custo por uso e uma Marca (Limitador embutido).' },
  { id:'poder-medida',   nome:'Poder / Item sob medida',         tier:'excepcional', yen:'50k+ ¥',        pm:'4 Eixos',   efeito:'Uma vantagem única que entra na ficha. Aprovação do Mestre + preço narrativo obrigatório.' },
  { id:'apresentacao',   nome:'Apresentação a um Demônio',       tier:'excepcional', yen:'50k+ ¥',        pm:'no Contrato', efeito:'Bento marca o encontro pra você fechar o Contrato. O resto é com o demônio.' },
];

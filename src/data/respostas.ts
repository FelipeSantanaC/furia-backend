import Fuse from "fuse.js";

export const topicos = {
  historia: [
    "Qual é a história da FURIA?"
  ],
  jogos: [
    "Quais jogos a FURIA compete?",
    "O que é o CS2?",
    "Quais são as conquistas no LoL?",
    "Onde a FURIA joga Rocket League?",
    "Qual a line atual de CS2 da Furia?",
    "Qual a line atual de LoL da Furia?",
    "Qual a line de Rocket League da FURIA?"
  ],
  sede: [
    "Onde está localizada a sede da FURIA?"
  ],
  patrocinadores: [
    "Quem são os principais patrocinadores da FURIA?"
  ],
  conquistas: [
    "Quais foram as principais conquistas da FURIA?"
  ],
  ingresso: [
    "Como posso entrar para a FURIA?"
  ],
  site: [
    "Qual é o site oficial da FURIA?"
  ],
  redes: [
    "Quais são as redes sociais da FURIA?"
  ],
  jogosFuturos: [
    "Quais são os próximos jogos da FURIA?"
  ]
};

export type Pergunta =
  | "Qual é a história da FURIA?"
  | "Quais jogos a FURIA compete?"
  | "Onde está localizada a sede da FURIA?"
  | "Quem são os principais patrocinadores da FURIA?"
  | "Quais foram as principais conquistas da FURIA?"
  | "Como posso entrar para a FURIA?"
  | "O que é o CS2?"
  | "Quais são as conquistas no LoL?"
  | "Onde a FURIA joga Rocket League?"
  | "Qual é o site oficial da FURIA?"
  | "Quais são as redes sociais da FURIA?"
  | "Qual a line atual de CS2 da Furia?"
  | "Qual a line atual de LoL da Furia?"
  | "Qual a line de Rocket League da FURIA?"
  | "Quais são os próximos jogos da FURIA?";

export const respostas: Record<Pergunta, string> = {
  "Qual é a história da FURIA?": "A FURIA foi fundada em 2017 por Jaime 'raizen' Pádua, André Akkari e Cris Guedes.",
  "Quais jogos a FURIA compete?": "CS2, LoL, Valorant, R6, Rocket League, Apex Legends e Fut7.",
  "Onde está localizada a sede da FURIA?": "Uberlândia, Minas Gerais.",
  "Quem são os principais patrocinadores da FURIA?": "Red Bull, Lenovo, PokerStars, Hellmann's, Cruzeiro do Sul.",
  "Quais foram as principais conquistas da FURIA?": "CBLOL 2024, DreamHack Masters 2020, RLCS Regional Top 3.",
  "Como posso entrar para a FURIA?": "Se destaque nos jogos e torneios competitivos.",
  "O que é o CS2?": "CS2 é a versão mais recente do Counter-Strike, aclamado mundialmente.",
  "Quais são as conquistas no LoL?": "FURIA tem uma das maiores conquistas no CBLOL 2024.",
  "Onde a FURIA joga Rocket League?": "FURIA compete internacionalmente em Rocket League, com destaque em torneios da RLCS.",
  "Qual é o site oficial da FURIA?": "https://www.furia.gg",
  "Quais são as redes sociais da FURIA?": "Twitter: @FURIA, Instagram: @furia, YouTube: FURIA, Twitch: twitch.tv/furia",
  "Qual a line atual de CS2 da Furia?": "KSCERATO, yuurih, YEKINDAR, FalleN e molodoy.",
  "Qual a line atual de LoL da Furia?": "Guigo, Tatu, Tutsz, Ayu e Jojo.",
  "Qual a line de Rocket League da FURIA?": "CaioTG1, Yanxnz, lostt, coach: stk.",
  "Quais são os próximos jogos da FURIA?": "CS2: FURIA vs G2 (05/05/2025), LoL: FURIA vs paiN (06/05/2025), Rocket League: RLCS Open dia 10/05/2025."
};

const fuse = new Fuse(Object.keys(respostas), {
  includeScore: true,
  threshold: 0.2,
});

export const buscarPerguntaSemelhante = (pergunta: string): Pergunta | null => {
  const resultado = fuse.search(pergunta);
  if (resultado.length > 0) {
    return resultado[0].item as Pergunta;
  }
  return null;
};

# 🔥 FURIA Chatbot Backend

Este é um projeto pessoal que desenvolvi com o objetivo de simular um sistema de perguntas e respostas sobre a organização da FURIA. A API permite que usuários façam perguntas relacionadas à FURIA e recebam respostas com base em um conjunto de dados pré-definido. Também implementei uma lógica de similaridade textual para reconhecer perguntas parecidas.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **TypeScript**
- **Express.js**
- **CORS**
- **Fuse.js** (busca de similaridade textual)

---

## 📁 Estrutura do Projeto
```bash
.
├── app.ts # Inicialização do Express e rotas
├── index.ts # Inicialização do servidor
├── routes/
│ └── chat-route.ts # Rotas relacionadas ao chat
├── controllers/
│ └── chat-controller.ts # Lógica para lidar com perguntas e tópicos
├── data/
│ └── respostas.ts # Base de dados estática com perguntas/respostas
```

## 📌 Endpoints

### `GET /api/chat/topicos`

Retorna a lista de tópicos disponíveis para facilitar a navegação do usuário.

**Resposta:**
```json
{
  "historia": ["Qual é a história da FURIA?"],
  "jogos": ["Quais jogos a FURIA compete?", "..."],
  "sede": ["Onde está localizada a sede da FURIA?"],
  ...
}
```

### `POST /api/chat/resposta`

Recebe uma pergunta e retorna a resposta correspondente. Caso a pergunta não esteja nos dados estáticos, o sistema tenta encontrar uma semelhante.

**Body:**
```json
{
  "pergunta": "Qual é a história da FURIA?"
}
```

**Resposta:**
```json
{
  "resposta": "A FURIA foi fundada em 2017 por Jaime 'raizen' Pádua, André Akkari e Cris Guedes."
}
```

Se não for encontrada nenhuma correspondência:
```json
{
  "resposta": "Desculpe, não entendi sua pergunta. Tente reformular ou escolha um dos tópicos no início."
}
```

## 🧠 Lógica de Similaridade
A busca por perguntas semelhantes é feita com Fuse.js, que permite tolerância a erros de digitação ou variações nas perguntas enviadas, retornando a resposta mais próxima possível com base na pontuação de similaridade.

## ⚙️ Como Rodar Localmente

**1. Clone este repositório:**
```bash
git clone https://github.com/seu-usuario/furia-chat-backend.git
cd furia-chat-backend
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor:**
```bash
npm run dev
```

**4. Acesse via navegador ou ferramenta de API (como Postman ou Insomnia):**
```bash
http://localhost:3001/api
```


## 📝 Contribuição
Sugestões, feedbacks ou melhorias são muito bem-vindos!

## 👨‍💻 Autor
Desenvolvido por Felipe Santana – inspirado na organização da FURIA.


















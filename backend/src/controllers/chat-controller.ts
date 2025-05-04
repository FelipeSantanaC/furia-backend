import { Request, Response } from "express";
import { respostas, buscarPerguntaSemelhante, topicos } from "../data/respostas";

export function obterTopicos(req: Request, res: Response) {
  res.json(topicos);
  return; 
}

export function responderPergunta(req: Request, res: Response) {
  const { pergunta } = req.body;

  const resposta = respostas[pergunta as keyof typeof respostas];

  if (resposta) {
    res.json({ resposta });
    return;
  }

  const perguntaSemelhante = buscarPerguntaSemelhante(pergunta);

  if (!perguntaSemelhante) {
    res.json({
      resposta: "Desculpe, não entendi sua pergunta. Tente reformular ou escolha um dos tópicos no início.",
    });
    return;
  }
  
  res.json({ resposta: respostas[perguntaSemelhante] });
  return;
}

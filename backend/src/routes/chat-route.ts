import { Router } from "express";
import { responderPergunta, obterTopicos } from "../controllers/chat-controller";

const router = Router();

router.get("/chat/topicos", obterTopicos);

router.post("/chat/resposta", responderPergunta);

export default router;

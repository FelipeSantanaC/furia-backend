import express from "express";
import chatRoutes from "./routes/chat-route";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", chatRoutes); 

export { app };

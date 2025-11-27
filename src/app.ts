import express from "express";
import rotaTarefa from "./routes/tarefaRoute";

const app = express();
app.use(express.json());

app.use("/tarefas", rotaTarefa);

export default app;

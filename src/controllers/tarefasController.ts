import { Request, Response, NextFunction } from "express";
import tarefasRepository from "../repositories/tarefasRepository";
import Tarefa from "../models/tarefasModel";

async function pegarTarefas(req: Request, res: Response, next: NextFunction) {
  const result = await tarefasRepository.getTarefas();
  res.json(result);
}

async function pegarTarefa(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  let result = await tarefasRepository.getTarefa(parseInt(id));
  const code = result ? 200 : 404;
  res.status(code).json(result);
}

async function criarTarefa(req: Request, res: Response, next: NextFunction) {
  const tarefa = req.body as Tarefa;

  try {
    const result = await tarefasRepository.criarTarefa(tarefa);
    return res.status(201).json(result);
  } catch (error) {
    console.log("Erro ao criar: ", error);
    return res.status(400).json({ erro: "Dados invalidos" });
  }
}

function atualizarTarefa(req: Request, res: Response, next: NextFunction) {
  res.send("atualizar uma tarefa");
}

function deletarTarefa(req: Request, res: Response, next: NextFunction) {
  res.send("deletar uma tarefa");
}

export default {
  pegarTarefas,
  pegarTarefa,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};

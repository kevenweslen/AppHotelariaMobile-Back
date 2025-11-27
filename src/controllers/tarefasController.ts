import {Request, Response, NextFunction} from "express";

function getTarefas(req: Request, res: Response, next:NextFunction){
  res.send("Listar todas as tarefas")
}
function getTarefa(req: Request, res: Response, next:NextFunction){
  res.send("Listar uma tarefa")
}

function criarTarefa(req: Request, res: Response, next:NextFunction){
  res.send("Criar uma tarefa")
}

function atualizarTarefa(req: Request, res: Response, next:NextFunction){
  res.send("Atulizar uma tarefa")
}

function deletarTarefa(req: Request, res: Response, next:NextFunction){
  res.send("Deletar uam tarefa")
}

export default {
  getTarefas, getTarefa,
  criarTarefa, atualizarTarefa, deletarTarefa
}

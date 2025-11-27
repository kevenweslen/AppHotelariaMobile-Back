import {Request, Response, NextFunction} from "express";
import tarefasRepositories from "../repositories/tarefasRepositories";
import task from "../model/task";

async function getTarefas(req: Request, res: Response, next:NextFunction){
  const result = await tarefasRepositories.getTarefas();
  res.json(result);
}
async function getTarefa(req: Request, res: Response, next:NextFunction){
  const {id} =req.params
  const result = await tarefasRepositories.getTarefa(parseInt(id));
  const code = result ? 200 : 404;
  if(code == 200){
    console.log ("seu resultados:  |")
  }else{
    console.log("não encontrou nada")
  }
  res.status(code).json(result)
}

async function criarTarefa(req: Request, res: Response, next:NextFunction){
  const tarefa =req.body as task
  try{
    const result = await tarefasRepositories.createTarefa(tarefa);
    return res.status(201).json(result);
  }catch(error){
    console.log("Erro ao criar", error)
    return res.status(404).json({erro:"dados imcompletos"});
  };
  
};

async function atualizarTarefa(req: Request, res: Response, next:NextFunction){
  const {id} = req.params
  const tarefa = req.body as task

  try{
    const result = await tarefasRepositories.atualizarTarefa(parseInt(id), tarefa);
    return res.status(201).json(result);
  }catch(error){
    console.log("Erro ao atualizar", error);
    return res.status(404).json({erro:"Erro ao atualizar tarefa"});
  };
};

async function deletarTarefa(req: Request, res: Response, next:NextFunction){
  const {id} = req.params
  try{
    const result = await tarefasRepositories.deletarTarefa(parseInt(id));
    return res.json(result);
  }catch(error){
    console.log("Erro ao atualizar", error);
    return res.status(404).json({erro:"Erro ao deletar tarefa"});

  }
};

export default {
  getTarefas, getTarefa,
  criarTarefa, atualizarTarefa, deletarTarefa
}

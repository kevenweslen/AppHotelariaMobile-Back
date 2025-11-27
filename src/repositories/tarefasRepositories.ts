import { describe } from "node:test";
import task from "../model/task"

const listaDeTarefas:task[] = []

async function getTarefas():Promise<task[] | any> {
  return new Promise((resolve, reject)=>{
    return resolve(listaDeTarefas);
  });
};
async function getTarefa(id:number): Promise<task | any>{
  return new Promise((resolve, reject)=> {
    const tarefa = listaDeTarefas.find(t =>t.id === id);
    return resolve(tarefa);
  });
};
async function createTarefa(dados:task):Promise<task> {
  return new Promise((resolve, reject)=> {
    if(!dados.nome || !dados.descricao){
      return reject (new Error("Dados invalidos"))
    };
    const novaTarefa= new task(dados.nome, dados.descricao);
    listaDeTarefas.push(novaTarefa);
    return resolve(novaTarefa);
  });
};

async function atualizarTarefa(id:number, dados:task):Promise<task>{
    return new Promise((resolve, reject)=>{
        const indice = listaDeTarefas.findIndex(t => t.id === id)
        if (indice === -1) {
            return reject(new Error("Tarefa nao encontrada"))
        }
        listaDeTarefas[indice].nome = dados.nome
        listaDeTarefas[indice].descricao = dados.descricao
        return resolve(listaDeTarefas[indice])
    });
};

async function deletarTarefa(id:Number): Promise<task>{
  return new Promise((resolve, reject)=> {
    const indice= listaDeTarefas.findIndex(t => t.id === id);
    if (indice === -1) {
      return reject(new Error("Tarefa não ezistente"))
    }
    const [tarefa]= listaDeTarefas.splice(indice, 1)
    return resolve(tarefa)
  });
};

export default{
  getTarefas, getTarefa, createTarefa, atualizarTarefa, deletarTarefa
};

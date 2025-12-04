import Tarefa from "../models/tarefasModel";

const listaDeTarefas: Tarefa[] = [];

async function getTarefas(): Promise<Tarefa[] | any> {
  return new Promise((resolve, reject) => {
    return resolve(listaDeTarefas);
  });
}
async function getTarefa(id: number): Promise<Tarefa | any> {
  return new Promise((resolve, reject) => {
    const tarefa = listaDeTarefas.find(t => t.id === id);
    return resolve(tarefa);
  });
}

async function criarTarefa(data: Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    if (!data.nome || !data.descricao) {
      return reject(new Error("Dados invalidos"));
    }
    const novaTarefa = new Tarefa(data.nome, data.descricao);
    listaDeTarefas.push(novaTarefa);
    return resolve(novaTarefa);
  });
}

async function atualizarTarefa(id: number, data: Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const index = listaDeTarefas.findIndex((t) => t.id === id);
    if (index === -1) {
      return reject(new Error("Tarefa não encontrada"));
    }
    listaDeTarefas[index].nome = data.nome;
    listaDeTarefas[index].descricao = data.descricao;
    return resolve(listaDeTarefas[index]);
  });
}

async function deletarTarefa(id: number): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const index = listaDeTarefas.findIndex((t) => t.id === id)
    if(index === -1) {
      return reject(new Error("Tarefa não"))
    }
    const [tarefa] = listaDeTarefas.splice(index, 1);
    return resolve(tarefa);
    
  });
}

export default {
  getTarefas,
  getTarefa,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};

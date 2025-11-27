import Tarefa from "../models/tarefasModel";

const listaDeTarefas: Tarefa[] = [];

async function getTarefas(): Promise<Tarefa[] | any> {
  return new Promise((resolve, reject) => {
    return resolve(listaDeTarefas);
  });
}
async function getTarefa(id: number): Promise<Tarefa | any> {
  return new Promise((resolve, reject) => {
    const tarefa = listaDeTarefas.find((t) => t.id === id);
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

export default {
  getTarefas,
  getTarefa,
  criarTarefa,
};

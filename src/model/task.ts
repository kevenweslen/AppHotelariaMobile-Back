export default class task{
  id: number;
  nome: string;
  descricao: string;

  private static proximoID = 1;
  constructor(nome: string, descricao: string){
    this.id = task.proximoID++;
    this.nome = nome;
    this.descricao = descricao;
  }
}


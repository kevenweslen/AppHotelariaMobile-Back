import { pool } from '../database/database';
import { cadastro } from "../models/cadastroModel.js";

 async function cadastrarCliente(nome:string, cpf:string, email:string, senha:string, telefone:string ) {
    const sql = "INSERT INTO clientes (nome, cpf, email, senha, telefone) VALUES (?, ?, ?, ?, ?)";
    const [result] = await pool.query<cadastro[]>(sql, [nome, cpf, email, senha, telefone]);
    return result.length ? result[0] : null;
}
export default { cadastrarCliente };
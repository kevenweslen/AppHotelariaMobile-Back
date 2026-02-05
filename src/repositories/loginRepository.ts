import { pool } from '../database/database';
import { Login } from '../models/loginModel';
 
async function validarLogin(email: string):Promise<Login|null> {
  const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, roles.nome AS cargo
    FROM clientes
    JOIN roles ON roles.id = clientes.cargo_id WHERE clientes.email = ?`;
 
  const [linhas] = await pool.query<Login[]>(sql, [email]);
  return  linhas.length ? linhas[0] : null;  
}
 
export default { validarLogin };
 
import { pool } from '../database/database';

async function validarLogin(email: string) {
    const sql =  `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, roles.nome AS cargos
    FROM clientes
    JOIN roles ON roles.id = clientes.cargo_id WHERE clientes.email = ?`;

    const [linhas] = await pool.query(sql, [email]);
    return linhas.length ? linhas[0] : null;
}

export default { validarLogin };

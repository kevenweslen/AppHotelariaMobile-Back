import {pool} from "../database/dbHotel";
import {Login} from "../model/login"

export async function validarLogin (email : string) {
    const sql = `
    SELECT clientes.nome, clientes.email, clientes.senha, cargos.nome AS cargo
    FROM clientes
    JOIN cargos ON cargo.id = clientes.cargo_id
    WHERE clientes.email =?`

    const [rows] = await pool.query<Login[]>(sql, [email]);
    return rows.length ? rows[0] : null;
}

export default {
    validarLogin
}
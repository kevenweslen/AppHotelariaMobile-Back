import {pool} from "../database/database";
import { RowDataPacket } from "mysql2";
import { quartoReserva, Quartos } from "../models/quarto";

async function disoiniveis (pedido:quartoReserva):Promise<Quartos|null>{
    const sql = `
    SELECT quartos q
    WHERE q.disponiveis = 1 
    AND (q.qtd_cama_casal, * 2 + q.qtd_cama_solteiro) >= ?
    AND q.id NOT IN (
        SELECT r.quarto_id
        FROM reservas r
        WHERE (r.data_fim >= ? AND r.data_inicion <= ?))
    `

const [quartos] = await pool.query<Quartos[]>(sql, [
        pedido.quantidade,
        pedido.dataFim,
        pedido.data_inicion,
    ])
    return quartos.length ? quartos : null
}

async function buscaFotoQuartoID(id:number){
    const sql = `
    SELECT F.nome
    FROM quartos_fotos QF
    JOIN fotos F ON QF.fot_id = F.id
    WHERE QF.quarto_id = ?
    `
    const [fotos] = await pool.quary<RowDataPacket[]>
}
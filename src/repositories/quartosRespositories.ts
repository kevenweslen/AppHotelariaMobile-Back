import {pool} from "../database/database"
import { RowDataPacket } from "mysql2";
import { QuartoReserva, Quartos } from "../models/quartosModel";

async function disponiveis(pedido:QuartoReserva):Promise<Quartos[]|null>{
    const sql = `SELECT *
        FROM quartos q
        WHERE q.disponivel = 1
        AND (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) >= ?
        AND q.id NOT IN (
            SELECT r.quarto_id
            FROM reservas r
            WHERE (r.data_fim >= ? AND r.data_inicio <= ?))`;

    const [quartos] = await pool.query<Quartos[]>(sql, [
        pedido.quantidade,
        pedido.dataInicio,
        pedido.dataFim,
    ])
    return quartos.length ? quartos : null
}

async function buscarFotoPorQuartoId(id:number) {
    const sql = `SELECT F.nome
    FROM quartos_fotos QF
    JOIN fotos F ON  QF.foto_id = F.id
    WHERE QF.quarto_id = ?`;

    const [fotos] = await pool.query<RowDataPacket[]>(sql, [id])
    return fotos.map(foto=>(foto.nome))
}

export default{
    disponiveis, buscarFotoPorQuartoId
}
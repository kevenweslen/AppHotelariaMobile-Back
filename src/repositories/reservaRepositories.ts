import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../database/database';
 
async function fazerPedido(data:any){
    const sql= `
    INSERT INTO pedidos (cliente_id, pagamento) 
    VALUES (?, ?);
    `
    try{
        const [result] = await pool.query<ResultSetHeader>(sql, [
            data.cliente_id,
            data.pagamento,
        ]);
        return result.insertId;
    } catch(err) {
        console.error('erro ao criar reserva', err)
        return null;
    }
}
async function fazerReserva(idPedido:number, quarto:object){
const sql = `
INSERT INTO reservas (pedicos_id, quarto_id, data_inicio, data_fim) 
VALUES (?, ?, ?, ?)
`
    try{
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idPedido,
            quarto.id,
            quartod.dataInicio,
            quarto.dataFim
        ]);
        return result.insertId;
    } catch(err) {
        console.error('erro ao criar reserva', err)
        return null;
    }
}
 
export default { fazerPedido, fazerReserva };
 
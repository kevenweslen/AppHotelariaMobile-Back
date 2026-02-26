import { NextFunction, Request, Response } from "express";
import reservaRepositories from "../repositories/reservaRepositories";
import { corrigirDataHora } from "../utils/dataHora";

async function criarPedido (req:Request, res:Response, next:NextFunction){
    const token = (req as any).payload;
    const {pagamento, quartos} = req.body;

    if(!token.id || !pagamento || !quartos){
        return res.status(400).json({erro: "Dados incompletos"});
    }

    try{
        const dadosPedido = {
            cliente_id : token.id,
            pagamento : pagamento,
        }

        const pedidoID = await reservaRepositories.fazerPedido(dadosPedido);
        if(!pedidoID){
            throw new Error("Erro ao criar pedido")
        }

        let result = [];
        for(let q of quartos){
            q.dataInicio = await corrigirDataHora(q.dataInicio, 14)
            q.dataFim = await corrigirDataHora(q.dataFim, 12)
            const reservaID = await reservaRepositories.fazerReserva(pedidoID, q)
            if(!reservaID){continue}
            result.push({
                ...q,
                reservaID: reservaID,
            })
        }

        res.status(200).json({
            message:"Reserva feita com sucesso!",
            pedidoID: pedidoID,
            reservas: result
        })

    }catch(error) {
        console.log(error)
        return res.status(400).json({erro: "Reserva não efetuada"})
    }

}
export default {
    criarPedido 
}
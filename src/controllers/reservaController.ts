import { NextFunction, Request, Response } from "express";
import reservaRepositories from "../repositories/reservaRepositories";

const function corrigirDataHora(data:string, hora:number) {
    let novaData = new Date(data)
    novaData.setHours(hora)
}

async function criarPedido (req:Request, res:Response, next:NextFunction){
    const token = req.payload;
    const [pagamento, quarto] = req.body;

    if(!token.id || !pagamento || !quarto){
        return res.status(400).json{{erro: "Dados incompletos"}};
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
        for(let q of quarto){
            q.dataInicio= corrigirDataHora(q.dataInicio, 14)
            q.dataFim= corrigirDataHora(q.dataFim, 12)
            const reservaID = await reservaRepositories.fazerReserva(pedidoID, q)
            if(!reservaID){continue}
            result.push({
                ...q,
                reservaID: reservaID,
            })
            console.log(result)
        }
        res.status(200).json("Reserva realizada")
    }catch(error){
        return res.status(400).json({erro: "Reserva não efetuada"})
    }


    return res.sendStatus(200);

}
export default {
     criarPedido 
}
import { Request, Response } from "express";

async function login (req: Request, res: Response) {
    try {
        console.log("Login realizado com sucesso", req.body);
        return res.status(200).json({ message: "Login feito com sucesso"});
    } catch (error) {
        console.error("Erro ao processar o login:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export default { login };

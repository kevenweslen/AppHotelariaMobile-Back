import { NextFunction, Request, Response } from "express";
import cadastroRepository from "../repositories/cadastroRepository";
import { createJWT } from "../utils/jwt";
import { gerarSenha } from "../utils/senha";

async function cadastro(req: Request, res: Response, next: NextFunction) {
    const { email, senha, nome, cpf, telefone } = req.body;

    if (!email || !senha || !nome || !cpf || !telefone) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }
    if (email.trim() === "" || senha.trim() === "") {
        return res.status(401).json({ message: "Email e senha não pode ser vazio" });
    }
    try {
        const result = await cadastroRepository.cadastrarCliente(nome, cpf, email, senha, telefone);
        if (!result) { throw new Error("Erro ao cadastrar usuário"); }

        //remover senha do objeto
        const { senha: _, ...usuario } = result;

        //criar o token do usuario
        const token = createJWT({ usuario });

        return res.status(201).json({ token });

    } catch (error) {
        console.log(error);
        return res.status(402).json({ message: "Erro ao cadastrar usuário." });
    }
};


export default { cadastro };

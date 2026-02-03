import { NextFunction, Request, Response } from "express";
import loginRepository from "../repositories/loginRepository";

async function login(req: Request, res: Response, next: NextFunction) {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: "Email and password are required." });
    }
    if (email.trim() === "" || senha.trim() === "") {
        return res.status(401).json({ message: "Email and password cannot be empty." });
    }
    try {
        const result = await loginRepository.validarLogin(email);
        if(!result) {throw new Error();}
        console.log(result);
        console.log(result.senha);
    } catch (error) {
        console.log(error);
        return res.status(402).json({ message: "Internal server error." });
    }
    return res.sendStatus(200);
};

export default { login };

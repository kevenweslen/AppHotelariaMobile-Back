import { QueryResult, RowDataPacket } from "mysql2";

export type Login = RowDataPacket & {
    id: number;
    nome: string;
    email: string;
    senha: string;
    roles: string;
}
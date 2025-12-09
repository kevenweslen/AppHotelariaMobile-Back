import dotenv from "dotenv";
import app from "./app";

dotenv.config()

const PORT = parseInt(process.env.PORT!);

app.listen(PORT, () => console.log(`Servidor está rodando na PORTA: ${PORT}`));

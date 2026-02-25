import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import app from "./app";

// Caminho para o arquivo .env
const envPath = path.resolve(__dirname, '../.env');
console.log('📁 Caminho do .env:', envPath);

// Verifica se o arquivo existe
if (!fs.existsSync(envPath)) {
    console.error('❌ Arquivo .env não encontrado!');
    console.log('📝 Criando arquivo .env automaticamente...');
    
    // Cria o arquivo .env com configurações padrão
    const defaultEnv = `PORT=3000
JWT_SECRET=senha123
DB_HOST=localhost
DB_PORT=3306
DB_NAME=apphoelaria
DB_USER=root
DB_PASSWORD=
`;
    
    fs.writeFileSync(envPath, defaultEnv);
    console.log('✅ Arquivo .env criado com sucesso!');
}

// Carrega as variáveis de ambiente
dotenv.config({ path: envPath });

// Verifica se a PORT foi definida
const portEnv = process.env.PORT;
if (!portEnv) {
    console.error('❌ ERRO: Variável PORT não definida');
    process.exit(1);
}

const PORT = parseInt(portEnv, 10);

// Verifica se é um número válido
if (isNaN(PORT) || PORT < 0 || PORT > 65535) {
    console.error(`❌ ERRO: Porta inválida: ${portEnv}`);
    process.exit(1);
}

console.log('✅ Configurações carregadas:');
console.log(`📌 PORT: ${PORT}`);
console.log(`📌 DB_HOST: ${process.env.DB_HOST}`);
console.log(`📌 DB_NAME: ${process.env.DB_NAME}`);

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta: ${PORT}`);
    console.log(`🔗 http://localhost:${PORT}`);
});
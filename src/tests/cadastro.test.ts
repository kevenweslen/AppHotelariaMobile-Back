test("POST /cadastro → deve retornar 201 e um token JWT", async () => {
  const payload = {
    nome: "Matheus R Jesus",
    cpf: "123456783333901222",
    email: "matheus33333422@gmail.com",
    senha: "12345678",
    telefone: "3333"
  };

  const res = await fetch("http://localhost:3000/api/login/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  expect(res.status).toBe(201);
});
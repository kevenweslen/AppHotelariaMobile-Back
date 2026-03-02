test("POST /cadastro → deve retornar 201 e um token JWT", async () => {
  const payload = {
    nome: "Keven",
    cpf: "111111111111",
    email: "132@email.com", 
    senha: "123456",
    telefone: "11111111111"
  };

  const res = await fetch("http://localhost:3000/api/login/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(payload),
  });

  expect(res.status).toBe(201);
});
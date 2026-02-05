const URL_base = "http://localhost:3000/api/login/cadastro";

test("POST: /cadastro = 201", async () => {
  const res = await fetch(URL_base, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Matheus R Jesus",
      cpf: "12345678901",
      email: "matheus3422@gmail.com",
      senha: "123",
      telefone: "11999999999"
    }),
  });

    const text = await res.text();
    console.log("Status:", res.status);
    console.log("Corpo da resposta:", text);
    expect(res.status).toBe(201);
});

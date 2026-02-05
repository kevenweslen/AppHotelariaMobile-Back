test("POST: /login = 200", async () => {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "lord@hihi.com",
      senha: "123",
    }),
  });
 
  expect(res.status).toBe(200);
  const json = await res.json()
  console.log(json);
 
  // const body = await res.json();
 
  // expect(body).toHaveProperty("message");
  // expect(body.message).toBe("Login recebido com sucesso");
});
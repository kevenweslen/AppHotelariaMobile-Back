const URL_base = "http://localhost:3000/api/login";
const login = {
  username: "matheus",
  password: "123",
};
try {
  const res = await fetch(URL_base, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });
  console.log(res.status); 
  const content = await res.json();
  console.log(content); 
} catch (error) {
  console.error("Erro ao fazer login:", error);
}



test("GET: /tarefas = 200", async () => {
  const res = await fetch(URL_BASE);
  expect(res.status).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);
});
const URL_base = "http://localhost:3000/api/login";

const login = {
  email: "matheus@gmail.com",
  password: "123",
};

test("POST: /login = 200", async () => {
  const res = await fetch(URL_base, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(login),
  });
  console.log(await res.json());
  expect(res.status).toBe(200);
});
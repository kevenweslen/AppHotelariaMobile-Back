const URL_BASE: string = "http://localhost:3000/tarefas";
const novaTarefa = {
  nome: "Nome da tarefa",
  descricao: "Descrição",
};

let tarefa_id: number = 0;

const tarefa_Atualizada = {
  nome: "Nome da tarefa atualizada",
  descricao: "Descrição atualizada",
};

test("GET: /tarefas = 200", async () => {
  const res = await fetch(URL_BASE);
  expect(res.status).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);
});

test("POST: /tarefas = 201 (Criar tarefa) ", async () => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novaTarefa),
  });
  expect(res.status).toBe(201);

  const content = await res.json();
  tarefa_id = content.id;

  expect(content).toHaveProperty("id");
  expect(content).toHaveProperty("nome");
  expect(content).toHaveProperty("descricao");
});

test("GET: /tarefas = 200", async () => {
  const res = await fetch(`${URL_BASE}/${tarefa_id}`);
  expect(res.status).toBe(200);

  const content = await res.json();
  expect(content).toHaveProperty("nome", novaTarefa["nome"]);
  expect(content).toHaveProperty("descricao", novaTarefa["descricao"]);
});

test("PUT: /tarefas/1 = 200 (atualizar tarefa) ", async () => {
  const res = await fetch(`${URL_BASE}/ ${tarefa_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa_Atualizada),
  });
  expect(res.status).toBe(201);
});

test("POST: /tarefas = 400 (Erro Criar tarefa)", async () => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  expect(res.status).toBe(400);
  const content = await res.json();
  expect(content).toHaveProperty("erro", "dados incompletos");
});

test("DELETE: /tarefas/:id = 204", async () => {
  const res = await fetch(`${URL_BASE}/${tarefa_id}`, {
    method: "DELETE",
  });
  expect(res.status).toBe(200);
  const content = await res.json();
  expect(content).toHaveProperty("id");
  expect(content).toHaveProperty("nome");
  expect(content).toHaveProperty("descricao");
});

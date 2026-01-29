const URL_BASE = "http://localhost:3000/task";

let task_id =0;

const new_task = {
    nome: "nome da tarefa",
    descricao: "descrição da tarefa"

}

const update_task = {
    nome:"Task name update",
    descricao:"Tesk description update"
}

test("GET: /task = 200", async () => {
    const res = await fetch(URL_BASE)
    expect(res.status).toBe(200);

    const body = await res.json()
    expect(Array.isArray(body)).toBe(true)
})

test("POST: /task = 201(Create task)", async() => {
    const res = await fetch(URL_BASE, {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(new_task)
    })
    expect(res.status).toBe(201);

    const content = await res.json()
    task_id = content.id
    console.log(task_id);
    expect(content).toHaveProperty('nome');
    expect(content).toHaveProperty('descrição da tarefa');
})

// test("GET: /task/1 = 200", async() => {
//     const res = await fetch('${URL_BASE}/${task_id}')
//     expect(res.status).toBe(200)

//     const content = await res.json()
//     expect(content).toHaveProperty('name', new_task['name'])
//     expect(content).toHaveProperty('description', new_task['description'])
// })

// test("PUT: /task/1 = 201 (update task)", async() => {0
//     const res = await fetch('${URL_BASE}/${task_id}', {
//         method: "PUT",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(update_task)
//     })
//     expect(res.status).toBe(201);
// })

// test("DELET: /task/:id = 204", async() => {
//     const res = await fetch('${URL_BASE}/${task_id}', {
//         method: "DELETE"
//     })
//     expect(res.status).toBe(200)

//     const content = await res.json()
//     expect(content). toHaveProperty('id')
//     expect(content). toHaveProperty('name')
//     expect(content). toHaveProperty('description')
// })

// //teste para erros

// test("GET: /task/id == 404", async() => {
//     const res = await fetch('${URL_BASE}/99999')
//     expect(res.status).toBe(404);
// })

// test("POST: /tesks = 400 (Error create task)", async() => {
//     const res = await fetch (URL_BASE, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({})
//     })
//     expect(res.status).toBe(400);

//     const content = await res.json()
//     expect(content).toHaveProperty('erro', 'dados invalidos')
// })
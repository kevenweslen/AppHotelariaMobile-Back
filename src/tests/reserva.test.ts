
test("POST: /api/reserva = 200", async =()=>{
    const res = await fetch("http://localhost:3000/aí/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "fulano@email.com",
            senha: "senha123"}
        )
    });
    expect(res.status).toBe(200);
    const token = await res.json()

    const resp = await fetch  ("http://localhost:3000/api/reserva", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            pagamento: "pix",
            quartos: [{
                id: 1,
                dataInicio: "",
                dataFim: "",  
                }]
        })
    });
    expect (resp.status).toBe(200)
})
import { verifyJWT } from "../utils/jwt";

const BASE_URL = "http://localhost:3000/jwt"

test("GET: /jwt = 200", async() => {
    const res = await fetch(BASE_URL)
    expect(res.status).toBe(200);

    const data = await res.json()

    expect(typeof data).toBe('string')

    const token = verifyJWT(data)
    expect(typeof token).toBe('object')
    
})
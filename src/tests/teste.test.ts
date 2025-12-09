import { verifyJWT } from "../utils/jwt";

const URL_BASE: string = "http://localhost:3000/jwt";
test("GET: /jwt = 200", async () => {
  const res = await fetch(URL_BASE);
  expect(res.status).toBe(200);

  const body = await res.json();
  console.log("TOKEN:", body);

  expect(typeof body).toBe("string");

  const token = verifyJWT(body);
  expect(typeof token).toBe("object");
  
});

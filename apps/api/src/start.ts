import { createApiServer } from "./server.js";

const server = createApiServer();

const address = await server.listen({
  host: "127.0.0.1",
  port: 3001,
});

console.log(address);

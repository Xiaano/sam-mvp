import type { FastifyInstance } from "fastify";

export function registerHealthRoute(app: FastifyInstance) {
  app.get("/health", async () => ({
    status: "ok",
    service: "sam-mvp-api",
    version: "0.1.0",
  }));
}

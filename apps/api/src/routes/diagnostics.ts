import type { FastifyInstance } from "fastify";

export function registerDiagnosticsRoute(app: FastifyInstance) {
  app.get("/diagnostics", async () => ({
    service: "sam-mvp-api",
    status: "ok",
    mode: "local-dev",
    database: "not_checked",
    prisma: "not_checked",
    woocommerce: "not_built",
    secrets: "not_exposed",
    timestamp: new Date().toISOString(),
  }));
}

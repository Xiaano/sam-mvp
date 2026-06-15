import type { FastifyInstance } from "fastify";

import { createMockScan } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerMockScanRoute(app: FastifyInstance) {
  app.get("/api/health-checker/mock-scan", async () => createMockScan());
}

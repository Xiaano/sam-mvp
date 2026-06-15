import type { FastifyInstance } from "fastify";

import { createMockOperatorOverview } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerOperatorOverviewMockRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/operator-overview-mock", async () =>
    createMockOperatorOverview(),
  );
}

import type { FastifyInstance } from "fastify";

import { createMockScanToReviewFlow } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerMockScanToReviewFlowRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/mock-scan-to-review-flow", async () =>
    createMockScanToReviewFlow(),
  );
}

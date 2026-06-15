import type { FastifyInstance } from "fastify";

import { createMockOperatorReviewPreview } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerOperatorReviewPreviewRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/operator-review-preview", async () =>
    createMockOperatorReviewPreview(),
  );
}

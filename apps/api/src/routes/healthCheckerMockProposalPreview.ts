import type { FastifyInstance } from "fastify";

import { createMockProposalPreview } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerMockProposalPreviewRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/mock-proposal-preview", async () =>
    createMockProposalPreview(),
  );
}

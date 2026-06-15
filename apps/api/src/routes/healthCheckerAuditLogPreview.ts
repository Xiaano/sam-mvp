import type { FastifyInstance } from "fastify";

import { createMockAuditLogPreview } from "../services/healthChecker/mockRuntimeService.js";

export function registerHealthCheckerAuditLogPreviewRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/audit-log-preview", async () =>
    createMockAuditLogPreview(),
  );
}

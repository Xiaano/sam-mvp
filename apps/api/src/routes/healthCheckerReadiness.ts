import type { FastifyInstance } from "fastify";

export function registerHealthCheckerReadinessRoute(app: FastifyInstance) {
  app.get("/api/health-checker/readiness", async () => ({
    service: "sam-health-checker",
    status: "ready_for_mock_scan_contract",
    version: "0.1.0",
    database: "not_checked",
    woocommerce: "not_connected",
    secrets: "not_required",
    capabilities: [
      "product_image_check",
      "short_description_check",
      "long_description_check",
      "tag_check",
      "seo_basic_check",
    ],
    next_step: "The next step can be a mock scan contract.",
  }));
}

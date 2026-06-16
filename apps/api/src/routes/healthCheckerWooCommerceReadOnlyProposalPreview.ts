import type { FastifyInstance } from "fastify";

import { getWooCommerceReadOnlyProposalPreviewV0 } from "../services/healthChecker/woocommerceReadOnlyProposalPreview.js";

export function registerHealthCheckerWooCommerceReadOnlyProposalPreviewRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-read-only-proposal-preview", async () => {
    return getWooCommerceReadOnlyProposalPreviewV0();
  });
}

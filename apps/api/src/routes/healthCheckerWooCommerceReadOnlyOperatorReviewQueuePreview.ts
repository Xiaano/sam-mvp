import type { FastifyInstance } from "fastify";

import { getWooCommerceReadOnlyOperatorReviewQueuePreview } from "../services/healthChecker/woocommerceReadOnlyOperatorReviewQueuePreview.js";

export function registerHealthCheckerWooCommerceReadOnlyOperatorReviewQueuePreviewRoute(
  app: FastifyInstance,
) {
  app.get(
    "/api/health-checker/woocommerce-read-only-operator-review-queue-preview",
    async () => {
      return getWooCommerceReadOnlyOperatorReviewQueuePreview();
    },
  );
}

import type { FastifyInstance } from "fastify";

import { getWooCommerceReadOnlyProductScanV0 } from "../connectors/woocommerceReadOnlyAdapter.js";

export function registerHealthCheckerWooCommerceReadOnlyProductScanRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-read-only-product-scan", async () => {
    return getWooCommerceReadOnlyProductScanV0();
  });
}

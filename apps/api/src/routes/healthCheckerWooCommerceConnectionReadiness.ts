import type { FastifyInstance } from "fastify";

import { getWooCommerceReadOnlyConnectionReadiness } from "../connectors/woocommerceReadOnlyAdapter.js";

export function registerHealthCheckerWooCommerceConnectionReadinessRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-connection-readiness", async () => {
    return getWooCommerceReadOnlyConnectionReadiness();
  });
}

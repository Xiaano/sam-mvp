import type { FastifyInstance } from "fastify";
import { getWooCommerceConfigReadiness } from "../services/healthChecker/woocommerceReadOnlyConfig.js";

export function registerHealthCheckerWooCommerceConfigReadinessRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-config-readiness", async () =>
    getWooCommerceConfigReadiness(),
  );
}

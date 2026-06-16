import type { FastifyInstance } from "fastify";
import { getWooCommerceReadOnlyAdapterReadiness } from "../connectors/woocommerceReadOnlyAdapter.js";
import { getWooCommerceConfigReadiness } from "../services/healthChecker/woocommerceReadOnlyConfig.js";

export function registerHealthCheckerWooCommerceConfigReadinessRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-config-readiness", async () => {
    const configReadiness = getWooCommerceConfigReadiness();
    const adapterReadiness = getWooCommerceReadOnlyAdapterReadiness();

    return {
      service: configReadiness.service,
      status: configReadiness.status,
      mode: configReadiness.mode,
      timestamp: configReadiness.timestamp,
      checks: configReadiness.checks,
      nextStep: configReadiness.nextStep,
      adapter: {
        adapterName: adapterReadiness.adapterName,
        canReadProducts: adapterReadiness.canReadProducts,
        canWriteProducts: adapterReadiness.canWriteProducts,
        adapterStatus: adapterReadiness.status,
        adapterNextStep: adapterReadiness.nextStep,
        woocommerceApiCalled: adapterReadiness.woocommerceApiCalled,
        writeScopeEnabled: adapterReadiness.writeScopeEnabled,
      },
    };
  });
}

import type { FastifyInstance } from "fastify";

import { createWooCommerceReadOnlyProductScanSkeleton } from "../connectors/woocommerceReadOnlyAdapter.js";

export function registerHealthCheckerWooCommerceProductScanSkeletonRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-product-scan-skeleton", async () => {
    const skeleton = createWooCommerceReadOnlyProductScanSkeleton();

    return {
      service: skeleton.service,
      mode: skeleton.mode,
      source: skeleton.source,
      productsScanned: skeleton.productsScanned,
      issuesFound: skeleton.issuesFound,
      products: skeleton.products,
      issues: skeleton.issues,
      woocommerceApiCalled: skeleton.woocommerceApiCalled,
      writeScopeEnabled: skeleton.writeScopeEnabled,
      status: skeleton.status,
      nextStep: skeleton.nextStep,
    };
  });
}

import {
  getWooCommerceConfigReadiness,
  type WooCommerceConfigReadiness,
} from "../services/healthChecker/woocommerceReadOnlyConfig.js";

export type WooCommerceReadOnlyAdapterReadiness = {
  adapterName: "woocommerce_read_only_adapter";
  mode: "read-only";
  canReadProducts: boolean;
  canWriteProducts: false;
  woocommerceApiCalled: false;
  writeScopeEnabled: false;
  status: WooCommerceConfigReadiness["status"];
  nextStep: WooCommerceConfigReadiness["nextStep"];
};

export function getWooCommerceReadOnlyAdapterReadiness(): WooCommerceReadOnlyAdapterReadiness {
  // Skeleton only.
  // No API call.
  // No writes.
  // No product fetch.
  const configReadiness = getWooCommerceConfigReadiness();
  const readyForAdapterSkeleton =
    configReadiness.nextStep === "ready_for_read_only_adapter_skeleton";

  return {
    adapterName: "woocommerce_read_only_adapter",
    mode: "read-only",
    canReadProducts: readyForAdapterSkeleton,
    canWriteProducts: false,
    woocommerceApiCalled: false,
    writeScopeEnabled: false,
    status: configReadiness.status,
    nextStep: configReadiness.nextStep,
  };
}

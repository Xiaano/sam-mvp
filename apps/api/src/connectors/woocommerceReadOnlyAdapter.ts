import {
  getWooCommerceConfigReadiness,
  type WooCommerceConfigReadiness,
} from "../services/healthChecker/woocommerceReadOnlyConfig.js";

export type WooCommerceReadOnlyProductField = {
  id: string | number;
  sku: string;
  name: string;
  status: string;
  type: string;
  permalink: string;
  stock_status: string;
  stock_quantity: number | null;
  manage_stock: boolean;
  imagePresent: boolean;
  imageCount: number;
  shortDescriptionPresent: boolean;
  longDescriptionPresent: boolean;
  categories: string[];
  tags: string[];
  date_modified: string | null;
};

export type WooCommerceReadOnlyProductIssue = {
  issueId: string;
  productId: string | number;
  sku: string;
  field: string;
  status: string;
  summary: string;
  severity: "low" | "medium" | "high" | "critical";
};

export type WooCommerceReadOnlyProductScanSkeleton = {
  service: string;
  mode: "read-only";
  source: "woocommerce_staging";
  productsScanned: number;
  issuesFound: number;
  products: WooCommerceReadOnlyProductField[];
  issues: WooCommerceReadOnlyProductIssue[];
  woocommerceApiCalled: false;
  writeScopeEnabled: false;
  status: WooCommerceConfigReadiness["status"];
  nextStep: WooCommerceConfigReadiness["nextStep"];
};

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

export function createWooCommerceReadOnlyProductScanSkeleton(): WooCommerceReadOnlyProductScanSkeleton {
  // Skeleton only.
  // No WooCommerce API call.
  // No product fetch.
  // No writes.
  // No execution.
  const configReadiness = getWooCommerceConfigReadiness();

  return {
    service: "sam-health-checker",
    mode: "read-only",
    source: "woocommerce_staging",
    productsScanned: 0,
    issuesFound: 0,
    products: [],
    issues: [],
    woocommerceApiCalled: false,
    writeScopeEnabled: false,
    status: configReadiness.status,
    nextStep: configReadiness.nextStep,
  };
}

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

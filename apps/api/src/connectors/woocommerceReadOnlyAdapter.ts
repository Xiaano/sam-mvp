import {
  getWooCommerceConfigReadiness,
  type WooCommerceConfigReadiness,
} from "../services/healthChecker/woocommerceReadOnlyConfig.js";

type WooCommerceReadOnlyConnectionReadinessStatus =
  | "missing_config"
  | "invalid_config"
  | "ready_for_read_only_product_scan"
  | "authentication_rejected"
  | "read_access_not_confirmed"
  | "network_unreachable"
  | "runtime_unsupported";

type WooCommerceReadOnlyConnectionReadinessErrorCategory =
  | "missing_config"
  | "invalid_config"
  | "authentication_rejected"
  | "read_access_not_confirmed"
  | "network_unreachable"
  | "runtime_unsupported";

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

export type WooCommerceReadOnlyConnectionReadiness = {
  service: string;
  mode: "read-only";
  status: WooCommerceReadOnlyConnectionReadinessStatus;
  timestamp: string;
  connectionAttempted: boolean;
  authenticationAccepted: boolean;
  readAccessConfirmed: boolean;
  httpStatus: number | null;
  errorCategory: WooCommerceReadOnlyConnectionReadinessErrorCategory | null;
  woocommerceApiCalled: boolean;
  productDataReturned: false;
  writeScopeEnabled: false;
  nextStep: WooCommerceReadOnlyConnectionReadinessStatus;
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

function getWooCommerceBasicAuthHeader() {
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    return null;
  }

  return `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`;
}

function buildWooCommerceProductProbeUrl(baseUrl: string) {
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const probeUrl = new URL("wp-json/wc/v3/products", normalizedBaseUrl);

  probeUrl.searchParams.set("per_page", "1");
  probeUrl.searchParams.set("_fields", "id");

  return probeUrl;
}

function createConnectionReadinessResponse(
  status: WooCommerceReadOnlyConnectionReadinessStatus,
  errorCategory: WooCommerceReadOnlyConnectionReadinessErrorCategory | null,
  connectionAttempted: boolean,
  authenticationAccepted: boolean,
  readAccessConfirmed: boolean,
  httpStatus: number | null,
): WooCommerceReadOnlyConnectionReadiness {
  return {
    service: "sam-health-checker",
    mode: "read-only",
    status,
    timestamp: new Date().toISOString(),
    connectionAttempted,
    authenticationAccepted,
    readAccessConfirmed,
    httpStatus,
    errorCategory,
    woocommerceApiCalled: connectionAttempted,
    productDataReturned: false,
    writeScopeEnabled: false,
    nextStep: status,
  };
}

export async function getWooCommerceReadOnlyConnectionReadiness(): Promise<WooCommerceReadOnlyConnectionReadiness> {
  const configReadiness = getWooCommerceConfigReadiness();

  if (configReadiness.status === "missing_config") {
    return createConnectionReadinessResponse(
      "missing_config",
      "missing_config",
      false,
      false,
      false,
      null,
    );
  }

  if (configReadiness.status === "invalid_base_url") {
    return createConnectionReadinessResponse(
      "invalid_config",
      "invalid_config",
      false,
      false,
      false,
      null,
    );
  }

  const fetchFn = globalThis.fetch;

  if (typeof fetchFn !== "function") {
    return createConnectionReadinessResponse(
      "runtime_unsupported",
      "runtime_unsupported",
      false,
      false,
      false,
      null,
    );
  }

  const baseUrl = process.env.WC_BASE_URL;
  const authHeader = getWooCommerceBasicAuthHeader();

  if (!baseUrl || !authHeader) {
    return createConnectionReadinessResponse(
      "missing_config",
      "missing_config",
      false,
      false,
      false,
      null,
    );
  }

  const probeUrl = buildWooCommerceProductProbeUrl(baseUrl);
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetchFn(probeUrl, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    if (response.ok) {
      return createConnectionReadinessResponse(
        "ready_for_read_only_product_scan",
        null,
        true,
        true,
        true,
        response.status,
      );
    }

    if (response.status === 401 || response.status === 403) {
      return createConnectionReadinessResponse(
        "authentication_rejected",
        "authentication_rejected",
        true,
        false,
        false,
        response.status,
      );
    }

    return createConnectionReadinessResponse(
      "read_access_not_confirmed",
      "read_access_not_confirmed",
      true,
      false,
      false,
      response.status,
    );
  } catch {
    return createConnectionReadinessResponse(
      "network_unreachable",
      "network_unreachable",
      true,
      false,
      false,
      null,
    );
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
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

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
  | "request_timeout"
  | "fetch_or_tls_error"
  | "url_build_error"
  | "network_unreachable"
  | "runtime_unsupported";

type WooCommerceReadOnlyProductScanStatus =
  | "missing_config"
  | "invalid_config"
  | "scan_completed"
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

export type WooCommerceReadOnlyProductSummary = {
  id: string | number;
  sku: string;
  name: string;
  status: string;
  type: string;
  permalink: string;
  stockStatus: string;
  stockQuantity: number | null;
  manageStock: boolean | null;
  imagePresent: boolean;
  imageCount: number;
  shortDescriptionPresent: boolean;
  longDescriptionPresent: boolean;
  categoryCount: number;
  tagCount: number;
  dateModified: string | null;
};

export type WooCommerceReadOnlyDetectedIssue = {
  issueId: string;
  productId: string | number;
  sku: string;
  type:
    | "missing_image"
    | "missing_short_description"
    | "missing_long_description"
    | "missing_tags"
    | "missing_category"
    | "non_publish_status";
  severity: "low" | "medium";
  status: "detected";
  message: string;
};

export type WooCommerceReadOnlyProductScanV0 = {
  service: string;
  mode: "read-only";
  source: "woocommerce_staging";
  status: WooCommerceReadOnlyProductScanStatus;
  timestamp: string;
  productsScanned: number;
  issuesFound: number;
  products: WooCommerceReadOnlyProductSummary[];
  issues: WooCommerceReadOnlyDetectedIssue[];
  woocommerceApiCalled: boolean;
  productDataReturned: boolean;
  writeScopeEnabled: false;
  nextStep: WooCommerceReadOnlyProductScanStatus;
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
  const consumerKey = process.env.WC_CONSUMER_KEY?.trim();
  const consumerSecret = process.env.WC_CONSUMER_SECRET?.trim();

  if (!consumerKey || !consumerSecret) {
    return null;
  }

  return `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`;
}

function buildWooCommerceProductProbeUrl(baseUrl: string) {
  const trimmedBaseUrl = baseUrl.trim();
  const normalizedBaseUrl = trimmedBaseUrl.endsWith("/") ? trimmedBaseUrl : `${trimmedBaseUrl}/`;
  const probeUrl = new URL("wp-json/wc/v3/products", normalizedBaseUrl);

  probeUrl.searchParams.set("per_page", "1");
  probeUrl.searchParams.set("_fields", "id");

  return probeUrl;
}

function getConnectionFetchErrorCategory(error: unknown): WooCommerceReadOnlyConnectionReadinessErrorCategory {
  if (error instanceof DOMException && error.name === "AbortError") {
    return "request_timeout";
  }

  if (error instanceof TypeError) {
    return "fetch_or_tls_error";
  }

  return "network_unreachable";
}

function buildWooCommerceReadOnlyProductScanUrl(baseUrl: string) {
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const scanUrl = new URL("wp-json/wc/v3/products", normalizedBaseUrl);

  scanUrl.searchParams.set("per_page", "10");
  scanUrl.searchParams.set(
    "_fields",
    [
      "id",
      "sku",
      "name",
      "status",
      "type",
      "permalink",
      "stock_status",
      "stock_quantity",
      "manage_stock",
      "images",
      "short_description",
      "description",
      "categories",
      "tags",
      "date_modified",
    ].join(","),
  );

  return scanUrl;
}

function createProductScanResponse(
  status: WooCommerceReadOnlyProductScanStatus,
  products: WooCommerceReadOnlyProductSummary[],
  issues: WooCommerceReadOnlyDetectedIssue[],
  woocommerceApiCalled: boolean,
  productDataReturned: boolean,
): WooCommerceReadOnlyProductScanV0 {
  return {
    service: "sam-health-checker",
    mode: "read-only",
    source: "woocommerce_staging",
    status,
    timestamp: new Date().toISOString(),
    productsScanned: products.length,
    issuesFound: issues.length,
    products,
    issues,
    woocommerceApiCalled,
    productDataReturned,
    writeScopeEnabled: false,
    nextStep: status,
  };
}

function getStringField(value: unknown) {
  return typeof value === "string" ? value : "";
}

function getIdField(value: unknown, fallback: number) {
  return typeof value === "string" || typeof value === "number" ? value : `unknown_${fallback}`;
}

function getNullableNumberField(value: unknown) {
  return typeof value === "number" ? value : null;
}

function getNullableBooleanField(value: unknown) {
  return typeof value === "boolean" ? value : null;
}

function hasTextContent(value: unknown) {
  return typeof value === "string" && value.replace(/<[^>]*>/g, "").trim().length > 0;
}

function getArrayCount(value: unknown) {
  return Array.isArray(value) ? value.length : 0;
}

function toProductSummary(rawProduct: Record<string, unknown>, index: number): WooCommerceReadOnlyProductSummary {
  const imageCount = getArrayCount(rawProduct.images);
  const categoryCount = getArrayCount(rawProduct.categories);
  const tagCount = getArrayCount(rawProduct.tags);

  return {
    id: getIdField(rawProduct.id, index + 1),
    sku: getStringField(rawProduct.sku),
    name: getStringField(rawProduct.name),
    status: getStringField(rawProduct.status),
    type: getStringField(rawProduct.type),
    permalink: getStringField(rawProduct.permalink),
    stockStatus: getStringField(rawProduct.stock_status),
    stockQuantity: getNullableNumberField(rawProduct.stock_quantity),
    manageStock: getNullableBooleanField(rawProduct.manage_stock),
    imagePresent: imageCount > 0,
    imageCount,
    shortDescriptionPresent: hasTextContent(rawProduct.short_description),
    longDescriptionPresent: hasTextContent(rawProduct.description),
    categoryCount,
    tagCount,
    dateModified: getStringField(rawProduct.date_modified) || null,
  };
}

function createIssue(
  product: WooCommerceReadOnlyProductSummary,
  type: WooCommerceReadOnlyDetectedIssue["type"],
  severity: WooCommerceReadOnlyDetectedIssue["severity"],
  message: string,
): WooCommerceReadOnlyDetectedIssue {
  return {
    issueId: `wc_${String(product.id)}_${type}`,
    productId: product.id,
    sku: product.sku,
    type,
    severity,
    status: "detected",
    message,
  };
}

function detectProductIssues(product: WooCommerceReadOnlyProductSummary) {
  const issues: WooCommerceReadOnlyDetectedIssue[] = [];

  if (!product.imagePresent) {
    issues.push(createIssue(product, "missing_image", "medium", "Product is missing an image."));
  }

  if (!product.shortDescriptionPresent) {
    issues.push(
      createIssue(product, "missing_short_description", "low", "Product is missing a short description."),
    );
  }

  if (!product.longDescriptionPresent) {
    issues.push(
      createIssue(product, "missing_long_description", "low", "Product is missing a long description."),
    );
  }

  if (product.tagCount === 0) {
    issues.push(createIssue(product, "missing_tags", "low", "Product has no tags."));
  }

  if (product.categoryCount === 0) {
    issues.push(createIssue(product, "missing_category", "medium", "Product has no category."));
  }

  if (product.status !== "publish") {
    issues.push(createIssue(product, "non_publish_status", "medium", "Product status is not publish."));
  }

  return issues;
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

  const baseUrl = process.env.WC_BASE_URL?.trim();
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

  let probeUrl: URL;

  try {
    probeUrl = buildWooCommerceProductProbeUrl(baseUrl);
  } catch {
    return createConnectionReadinessResponse(
      "network_unreachable",
      "url_build_error",
      true,
      false,
      false,
      null,
    );
  }

  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => {
    controller.abort();
  }, 15000);

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
  } catch (error) {
    return createConnectionReadinessResponse(
      "network_unreachable",
      getConnectionFetchErrorCategory(error),
      true,
      false,
      false,
      null,
    );
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}

export async function getWooCommerceReadOnlyProductScanV0(): Promise<WooCommerceReadOnlyProductScanV0> {
  const configReadiness = getWooCommerceConfigReadiness();

  if (configReadiness.status === "missing_config") {
    return createProductScanResponse("missing_config", [], [], false, false);
  }

  if (configReadiness.status === "invalid_base_url") {
    return createProductScanResponse("invalid_config", [], [], false, false);
  }

  const fetchFn = globalThis.fetch;

  if (typeof fetchFn !== "function") {
    return createProductScanResponse("runtime_unsupported", [], [], false, false);
  }

  const baseUrl = process.env.WC_BASE_URL;
  const authHeader = getWooCommerceBasicAuthHeader();

  if (!baseUrl || !authHeader) {
    return createProductScanResponse("missing_config", [], [], false, false);
  }

  const scanUrl = buildWooCommerceReadOnlyProductScanUrl(baseUrl);
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const response = await fetchFn(scanUrl, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    if (response.status === 401 || response.status === 403) {
      return createProductScanResponse("authentication_rejected", [], [], true, false);
    }

    if (!response.ok) {
      return createProductScanResponse("read_access_not_confirmed", [], [], true, false);
    }

    const rawPayload = await response.json();

    if (!Array.isArray(rawPayload)) {
      return createProductScanResponse("read_access_not_confirmed", [], [], true, false);
    }

    const products = rawPayload
      .slice(0, 10)
      .filter((product): product is Record<string, unknown> => {
        return product !== null && typeof product === "object" && !Array.isArray(product);
      })
      .map(toProductSummary);
    const issues = products.flatMap(detectProductIssues);

    return createProductScanResponse("scan_completed", products, issues, true, true);
  } catch {
    return createProductScanResponse("network_unreachable", [], [], true, false);
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

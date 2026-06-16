type WooCommerceConfigReadinessNextStep =
  | "ready_for_read_only_adapter_skeleton"
  | "missing_config"
  | "invalid_base_url";

export type WooCommerceConfigReadiness = {
  service: string;
  status: WooCommerceConfigReadinessNextStep;
  mode: "read-only";
  timestamp: string;
  checks: {
    wcBaseUrlConfigured: boolean;
    wcBaseUrlLooksValid: boolean;
    wcConsumerKeyConfigured: boolean;
    wcConsumerSecretConfigured: boolean;
    secretsExposed: false;
    woocommerceApiCalled: false;
    writeScopeEnabled: false;
  };
  nextStep: WooCommerceConfigReadinessNextStep;
};

function hasConfiguredValue(value: string | undefined) {
  return typeof value === "string" && value.trim().length > 0;
}

function looksLikeHttpUrl(value: string | undefined) {
  if (!hasConfiguredValue(value)) {
    return false;
  }

  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}

export function getWooCommerceConfigReadiness(): WooCommerceConfigReadiness {
  const wcBaseUrlConfigured = hasConfiguredValue(process.env.WC_BASE_URL);
  const wcBaseUrlLooksValid = looksLikeHttpUrl(process.env.WC_BASE_URL);
  const wcConsumerKeyConfigured = hasConfiguredValue(process.env.WC_CONSUMER_KEY);
  const wcConsumerSecretConfigured = hasConfiguredValue(process.env.WC_CONSUMER_SECRET);

  let nextStep: WooCommerceConfigReadinessNextStep;

  if (!wcBaseUrlConfigured || !wcConsumerKeyConfigured || !wcConsumerSecretConfigured) {
    nextStep = "missing_config";
  } else if (!wcBaseUrlLooksValid) {
    nextStep = "invalid_base_url";
  } else {
    nextStep = "ready_for_read_only_adapter_skeleton";
  }

  return {
    service: "sam-health-checker",
    status: nextStep,
    mode: "read-only",
    timestamp: new Date().toISOString(),
    checks: {
      wcBaseUrlConfigured,
      wcBaseUrlLooksValid,
      wcConsumerKeyConfigured,
      wcConsumerSecretConfigured,
      secretsExposed: false,
      woocommerceApiCalled: false,
      writeScopeEnabled: false,
    },
    nextStep,
  };
}

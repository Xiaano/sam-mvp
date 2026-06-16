import type { FastifyInstance } from "fastify";

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

export function registerHealthCheckerWooCommerceConfigReadinessRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/woocommerce-config-readiness", async () => {
    const wcBaseUrlConfigured = hasConfiguredValue(process.env.WC_BASE_URL);
    const wcBaseUrlLooksValid = looksLikeHttpUrl(process.env.WC_BASE_URL);
    const wcConsumerKeyConfigured = hasConfiguredValue(process.env.WC_CONSUMER_KEY);
    const wcConsumerSecretConfigured = hasConfiguredValue(process.env.WC_CONSUMER_SECRET);

    const hasRequiredConfig =
      wcBaseUrlConfigured && wcConsumerKeyConfigured && wcConsumerSecretConfigured;

    let nextStep: "ready_for_read_only_adapter_skeleton" | "missing_config" | "invalid_base_url";

    if (!wcBaseUrlConfigured || !wcConsumerKeyConfigured || !wcConsumerSecretConfigured) {
      nextStep = "missing_config";
    } else if (!wcBaseUrlLooksValid) {
      nextStep = "invalid_base_url";
    } else {
      nextStep = "ready_for_read_only_adapter_skeleton";
    }

    const status = hasRequiredConfig && wcBaseUrlLooksValid ? "ready_for_read_only_adapter_skeleton" : nextStep;

    return {
      service: "sam-health-checker",
      status,
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
  });
}

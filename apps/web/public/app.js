document.addEventListener("DOMContentLoaded", () => {
  const marker = document.getElementById("loaded-marker");
  const tabButtons = Array.from(document.querySelectorAll("[data-tab-target]"));
  const tabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));

  const healthState = document.getElementById("health-state");
  const healthService = document.getElementById("health-service");
  const healthStatus = document.getElementById("health-status");
  const healthMode = document.getElementById("health-mode");
  const healthTimestamp = document.getElementById("health-timestamp");

  const diagnosticsState = document.getElementById("diagnostics-state");
  const diagnosticsService = document.getElementById("diagnostics-service");
  const diagnosticsStatus = document.getElementById("diagnostics-status");
  const diagnosticsMode = document.getElementById("diagnostics-mode");
  const diagnosticsDatabase = document.getElementById("diagnostics-database");
  const diagnosticsPrisma = document.getElementById("diagnostics-prisma");
  const diagnosticsWoocommerce = document.getElementById("diagnostics-woocommerce");
  const diagnosticsSecrets = document.getElementById("diagnostics-secrets");
  const diagnosticsTimestamp = document.getElementById("diagnostics-timestamp");

  const readinessState = document.getElementById("readiness-state");
  const readinessService = document.getElementById("readiness-service");
  const readinessStatus = document.getElementById("readiness-status");
  const readinessMode = document.getElementById("readiness-mode");
  const readinessTimestamp = document.getElementById("readiness-timestamp");

  const mockScanState = document.getElementById("mock-scan-state");
  const mockScanService = document.getElementById("mock-scan-service");
  const mockScanStatus = document.getElementById("mock-scan-status");
  const mockScanMode = document.getElementById("mock-scan-mode");
  const mockScanId = document.getElementById("mock-scan-id");
  const mockScanShop = document.getElementById("mock-scan-shop");
  const mockScanProductsChecked = document.getElementById("mock-scan-products-checked");
  const mockScanIssuesFound = document.getElementById("mock-scan-issues-found");
  const mockScanRiskLevel = document.getElementById("mock-scan-risk-level");
  const mockScanTimestamp = document.getElementById("mock-scan-timestamp");

  const mockScanIssueState = document.getElementById("mock-scan-issue-state");
  const mockScanIssueCategories = document.getElementById("mock-scan-issue-categories");
  const mockScanTopIssue = document.getElementById("mock-scan-top-issue");
  const mockScanIssueCount = document.getElementById("mock-scan-issue-count");
  const mockScanIssueRegister = document.getElementById("mock-scan-issue-register");

  const proposalPreviewState = document.getElementById("proposal-preview-state");
  const proposalPreviewService = document.getElementById("proposal-preview-service");
  const proposalPreviewStatus = document.getElementById("proposal-preview-status");
  const proposalPreviewMode = document.getElementById("proposal-preview-mode");
  const proposalPreviewSourceScanId = document.getElementById("proposal-preview-source-scan-id");
  const proposalPreviewCount = document.getElementById("proposal-preview-count");
  const proposalPreviewApproval = document.getElementById("proposal-preview-approval");
  const proposalPreviewAutoExecute = document.getElementById("proposal-preview-auto-execute");
  const proposalPreviewTimestamp = document.getElementById("proposal-preview-timestamp");
  const proposalPreviewPrimaryState = document.getElementById("proposal-preview-primary-state");
  const proposalPreviewPrimaryId = document.getElementById("proposal-preview-primary-id");
  const proposalPreviewLinkedIssue = document.getElementById("proposal-preview-linked-issue");
  const proposalPreviewProductEntity = document.getElementById("proposal-preview-product-entity");
  const proposalPreviewType = document.getElementById("proposal-preview-type");
  const proposalPreviewValue = document.getElementById("proposal-preview-value");
  const proposalPreviewRiskLevel = document.getElementById("proposal-preview-risk-level");
  const proposalPreviewHumanReview = document.getElementById("proposal-preview-human-review");
  const proposalPreviewRegister = document.getElementById("proposal-preview-register");

  const proposalContractState = document.getElementById("proposal-contract-state");
  const proposalContractService = document.getElementById("proposal-contract-service");
  const proposalContractStatus = document.getElementById("proposal-contract-status");
  const proposalContractMode = document.getElementById("proposal-contract-mode");
  const proposalContractModelPresent = document.getElementById("proposal-contract-model-present");
  const proposalContractRequiredFields = document.getElementById("proposal-contract-required-fields");
  const proposalContractSourceTypes = document.getElementById("proposal-contract-source-types");
  const proposalContractGovernance = document.getElementById("proposal-contract-governance");
  const proposalContractNote = document.getElementById("proposal-contract-note");

  const wcConfigState = document.getElementById("wc-config-state");
  const wcConfigService = document.getElementById("wc-config-service");
  const wcConfigStatus = document.getElementById("wc-config-status");
  const wcConfigMode = document.getElementById("wc-config-mode");
  const wcConfigBaseUrlConfigured = document.getElementById("wc-config-base-url-configured");
  const wcConfigBaseUrlLooksValid = document.getElementById("wc-config-base-url-looks-valid");
  const wcConfigConsumerKeyConfigured = document.getElementById("wc-config-consumer-key-configured");
  const wcConfigConsumerSecretConfigured = document.getElementById("wc-config-consumer-secret-configured");
  const wcConfigSecretsExposed = document.getElementById("wc-config-secrets-exposed");
  const wcConfigCalled = document.getElementById("wc-config-called");
  const wcConfigWriteScope = document.getElementById("wc-config-write-scope");
  const wcConfigNextStep = document.getElementById("wc-config-next-step");
  const wcConfigAdapterName = document.getElementById("wc-config-adapter-name");
  const wcConfigAdapterCanRead = document.getElementById("wc-config-adapter-can-read");

  const wcScanState = document.getElementById("wc-scan-state");
  const wcScanDescription = document.getElementById("wc-scan-description");
  const wcScanWarning = document.getElementById("wc-scan-warning");
  const wcScanButton = document.getElementById("wc-scan-run-button");
  const wcScanService = document.getElementById("wc-scan-service");
  const wcScanMode = document.getElementById("wc-scan-mode");
  const wcScanSource = document.getElementById("wc-scan-source");
  const wcScanStatus = document.getElementById("wc-scan-status");
  const wcScanTimestamp = document.getElementById("wc-scan-timestamp");
  const wcScanProductsScanned = document.getElementById("wc-scan-products-scanned");
  const wcScanIssuesFound = document.getElementById("wc-scan-issues-found");
  const wcScanCalled = document.getElementById("wc-scan-called");
  const wcScanProductDataReturned = document.getElementById("wc-scan-product-data-returned");
  const wcScanWriteScope = document.getElementById("wc-scan-write-scope");
  const wcScanNextStep = document.getElementById("wc-scan-next-step");
  const wcScanProductRegister = document.getElementById("wc-scan-product-register");
  const wcScanIssueRegister = document.getElementById("wc-scan-issue-register");

  const apiBaseUrl = "http://localhost:3001";

  document.body.setAttribute("data-shell-state", "loaded");
  document.body.classList.add("loaded");

  const loadedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  if (marker) {
    marker.textContent = `Static shell loaded ${loadedAt}`;
  }

  activateTab("overview");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab-target");

      if (targetTab) {
        activateTab(targetTab);
      }
    });
  });

  if (healthState) {
    healthState.textContent = "loading";
  }

  if (diagnosticsState) {
    diagnosticsState.textContent = "loading";
  }

  if (readinessState) {
    readinessState.textContent = "loading";
  }

  void loadHealth();
  void loadDiagnostics();
  void loadReadiness();
  void loadMockScan();
  void loadMockProposalPreview();
  void loadProposalContract();
  void loadWooCommerceConfigReadiness();
  renderWooCommerceReadOnlyProductScanIdle();

  if (wcScanButton) {
    wcScanButton.addEventListener("click", () => {
      void loadWooCommerceReadOnlyProductScan();
    });
  }

  function activateTab(targetTab) {
    tabButtons.forEach((button) => {
      const isActive = button.getAttribute("data-tab-target") === targetTab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.getAttribute("data-tab-panel") === targetTab;
      panel.classList.toggle("is-active", isActive);

      if (isActive) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  }

  async function loadHealth() {
    try {
      const response = await fetch(new URL("/health", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      renderHealth({
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        timestamp: payload.timestamp ?? "not loaded yet",
      });
    } catch {
      renderHealth({
        service: "unavailable",
        status: "error",
        mode: "read-only",
        timestamp: "not loaded yet",
      });
    }
  }

  async function loadDiagnostics() {
    try {
      const response = await fetch(new URL("/diagnostics", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      renderDiagnostics({
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        database: payload.database ?? "not loaded yet",
        prisma: payload.prisma ?? "not loaded yet",
        woocommerce: payload.woocommerce ?? "not loaded yet",
        secrets: payload.secrets ?? "not loaded yet",
        timestamp: payload.timestamp ?? "not loaded yet",
      });
    } catch {
      renderDiagnostics({
        service: "unavailable",
        status: "error",
        mode: "read-only",
        database: "not loaded yet",
        prisma: "not loaded yet",
        woocommerce: "not loaded yet",
        secrets: "not loaded yet",
        timestamp: "not loaded yet",
      });
    }
  }

  async function loadReadiness() {
    try {
      const response = await fetch(new URL("/api/health-checker/readiness", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      renderReadiness({
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        timestamp: payload.timestamp ?? "not loaded yet",
      });
    } catch {
      renderReadiness({
        service: "unavailable",
        status: "error",
        mode: "read-only",
        timestamp: "not loaded yet",
      });
    }
  }

  async function loadMockScan() {
    try {
      const response = await fetch(new URL("/api/health-checker/mock-scan", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const issues = Array.isArray(payload.issues) ? payload.issues : [];
      const issueCategories = [...new Set(issues.map((issue) => issue?.type).filter(Boolean))];
      const topIssue = issues[0];
      const issueRegister = issues.map((issue, index) => {
        const issueLabel = issue?.issue_id ?? `issue_${String(index + 1).padStart(3, "0")}`;
        const productLabel = issue?.product_sku ?? "not loaded yet";
        const categoryLabel = issue?.type ?? "not loaded yet";
        const severityLabel = issue?.severity ?? issue?.risk_level ?? "not loaded yet";
        const statusLabel = issue?.status ?? "not loaded yet";
        const messageLabel = issue?.message ?? "not loaded yet";

        return {
          index: index + 1,
          issueLabel,
          productLabel,
          categoryLabel,
          severityLabel,
          statusLabel,
          messageLabel,
        };
      });

      renderMockScan({
        state: "success",
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        scanId: payload.scan_id ?? "not loaded yet",
        shop: payload.shop?.name
          ? `${payload.shop.name} (${payload.shop.platform ?? "unknown platform"})`
          : "not loaded yet",
        productsChecked:
          payload.summary?.products_checked ?? payload.summary?.issues_found ?? "not loaded yet",
        issuesFound: payload.summary?.issues_found ?? issues.length ?? "not loaded yet",
        riskLevel: payload.summary?.risk_level ?? "not loaded yet",
        timestamp: payload.checked_at ?? "not loaded yet",
      });

      renderMockScanIssueSummary({
        state: issues.length === 0 ? "empty" : "success",
        issueCategories: issueCategories.length > 0 ? issueCategories.join(", ") : "no issues",
        topIssue: topIssue?.message ?? "No issues found",
        issueCount: issues.length,
      });

      renderMockScanIssueRegister({
        state: issues.length === 0 ? "empty" : "success",
        rows: issueRegister.length > 0 ? issueRegister : ["No issues found"],
      });
    } catch {
      renderMockScan({
        state: "error",
        service: "unavailable",
        status: "error",
        mode: "read-only",
        scanId: "not loaded yet",
        shop: "not loaded yet",
        productsChecked: "not loaded yet",
        issuesFound: "not loaded yet",
        riskLevel: "not loaded yet",
        timestamp: "not loaded yet",
      });

      renderMockScanIssueSummary({
        state: "error",
        issueCategories: "not loaded yet",
        topIssue: "not loaded yet",
        issueCount: "not loaded yet",
      });

      renderMockScanIssueRegister({
        state: "error",
        rows: ["not loaded yet"],
      });
    }
  }

  async function loadMockProposalPreview() {
    try {
      const response = await fetch(new URL("/api/health-checker/mock-proposal-preview", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const proposalPreviews = Array.isArray(payload.proposal_previews) ? payload.proposal_previews : [];
      const primaryProposal = proposalPreviews[0];
      const proposalRows = proposalPreviews.map((proposal, index) => {
        const proposalLabel = proposal?.proposal_id ?? `proposal_${String(index + 1).padStart(3, "0")}`;
        const issueLabel = proposal?.issue_id ?? proposal?.source_issue_type ?? "not loaded yet";
        const entityLabel = proposal?.title ?? proposal?.source_issue_type ?? "not loaded yet";
        const actionLabel = proposal?.proposal_type ?? "not loaded yet";
        const summaryLabel = proposal?.proposed_change ?? proposal?.reason ?? "not loaded yet";
        const riskLabel = proposal?.risk_level ?? "not loaded yet";
        const approvalLabel = proposal?.requires_human_approval ? "yes" : "no";

        return {
          index: index + 1,
          proposalLabel,
          issueLabel,
          entityLabel,
          actionLabel,
          summaryLabel,
          riskLabel,
          approvalLabel,
        };
      });

      renderMockProposalPreview({
        state: "success",
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        sourceScanId: payload.source_scan_id ?? "not loaded yet",
        count: proposalPreviews.length,
        approval:
          payload.approval_flow?.human_approval_required === true ? "required" : "not loaded yet",
        autoExecute:
          payload.approval_flow?.auto_execute_allowed === false ? "disabled" : "not loaded yet",
        timestamp: payload.timestamp ?? "not loaded yet",
      });

      renderMockProposalPreviewPrimary({
        state: proposalPreviews.length === 0 ? "empty" : "success",
        proposalId: primaryProposal?.proposal_id ?? "not loaded yet",
        linkedIssue: primaryProposal?.issue_id ?? primaryProposal?.source_issue_type ?? "not loaded yet",
        productEntity: primaryProposal?.title ?? primaryProposal?.source_issue_type ?? "not loaded yet",
        proposalType: primaryProposal?.proposal_type ?? "not loaded yet",
        proposalValue: primaryProposal?.proposed_change ?? primaryProposal?.reason ?? "not loaded yet",
        riskLevel: primaryProposal?.risk_level ?? "not loaded yet",
        humanReviewRequired: primaryProposal?.requires_human_approval ? "yes" : "no",
      });

      renderMockProposalRegister({
        state: proposalPreviews.length === 0 ? "empty" : "success",
        rows:
          proposalRows.length > 0
            ? proposalRows
            : ["No proposals available in the mock preview."],
      });
    } catch {
      renderMockProposalPreview({
        state: "error",
        service: "unavailable",
        status: "error",
        mode: "read-only",
        sourceScanId: "not loaded yet",
        count: "not loaded yet",
        approval: "not loaded yet",
        autoExecute: "not loaded yet",
        timestamp: "not loaded yet",
      });

      renderMockProposalPreviewPrimary({
        state: "error",
        proposalId: "not loaded yet",
        linkedIssue: "not loaded yet",
        productEntity: "not loaded yet",
        proposalType: "not loaded yet",
        proposalValue: "not loaded yet",
        riskLevel: "not loaded yet",
        humanReviewRequired: "not loaded yet",
      });

      renderMockProposalRegister({
        state: "error",
        rows: ["not loaded yet"],
      });
    }
  }

  async function loadProposalContract() {
    try {
      const response = await fetch(new URL("/api/health-checker/proposal-contract", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const sourceProvenanceModel = payload?.source_provenance_model ?? null;
      const requiredFields = Array.isArray(sourceProvenanceModel?.required_fields)
        ? sourceProvenanceModel.required_fields
        : [];
      const sourceTypes = Array.isArray(sourceProvenanceModel?.source_types)
        ? sourceProvenanceModel.source_types
        : [];
      const reviewRules = sourceProvenanceModel?.review_rules ?? {};
      const hasContractData = Boolean(sourceProvenanceModel);
      const governanceRules = [
        reviewRules.no_proposal_without_source_status === true
          ? "no proposal without source status"
          : null,
        reviewRules.ai_generated_requires_review === true
          ? "ai_generated requires review"
          : null,
        reviewRules.source_unknown_requires_review === true
          ? "source_unknown requires review"
          : null,
        reviewRules.provenance_required_before_write_rewrite_execution === true
          ? "provenance required before write/rewrite/execution"
          : null,
        reviewRules.no_execution_change_from_contract === true
          ? "no execution change from contract"
          : null,
      ].filter(Boolean);

      renderProposalContract({
        state: hasContractData ? "success" : "empty",
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "not loaded yet",
        modelPresent: hasContractData ? "yes" : "no",
        requiredFields:
          requiredFields.length > 0 ? `${requiredFields.length} fields` : "empty",
        sourceTypes:
          sourceTypes.length > 0 ? sourceTypes.join(", ") : "empty",
        governanceRules:
          governanceRules.length > 0 ? governanceRules : ["empty"],
        note:
          "Per-proposal provenance is not yet present in mock proposal preview. Contract only / read-only / no execution.",
      });
    } catch {
      renderProposalContract({
        state: "error",
        service: "unavailable",
        status: "error",
        mode: "read-only",
        modelPresent: "not loaded yet",
        requiredFields: "not loaded yet",
        sourceTypes: "not loaded yet",
        governanceRules: ["not loaded yet"],
        note: "Per-proposal provenance is not yet present in mock proposal preview. Contract only / read-only / no execution.",
      });
    }
  }

  async function loadWooCommerceConfigReadiness() {
    try {
      const response = await fetch(new URL("/api/health-checker/woocommerce-config-readiness", apiBaseUrl));

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const checks = payload?.checks ?? {};
      const nextStep = payload?.nextStep ?? "not loaded yet";

      renderWooCommerceConfigReadiness({
        state: nextStep === "missing_config" || nextStep === "invalid_base_url" ? nextStep : "success",
        service: payload.service ?? "not loaded yet",
        status: payload.status ?? "not loaded yet",
        mode: payload.mode ?? "read-only",
        wcBaseUrlConfigured: checks.wcBaseUrlConfigured === true ? "true" : "false",
        wcBaseUrlLooksValid: checks.wcBaseUrlLooksValid === true ? "true" : "false",
        wcConsumerKeyConfigured: checks.wcConsumerKeyConfigured === true ? "true" : "false",
        wcConsumerSecretConfigured: checks.wcConsumerSecretConfigured === true ? "true" : "false",
        secretsExposed: checks.secretsExposed === true ? "true" : "false",
        woocommerceApiCalled: checks.woocommerceApiCalled === true ? "true" : "false",
        writeScopeEnabled: checks.writeScopeEnabled === true ? "true" : "false",
        nextStep,
        adapterName: payload.adapter?.adapterName ?? "not loaded yet",
        adapterCanReadProducts: payload.adapter?.canReadProducts === true ? "true" : "false",
        adapterCanWriteProducts: payload.adapter?.canWriteProducts === false ? "false" : "not loaded yet",
        adapterStatus: payload.adapter?.adapterStatus ?? "not loaded yet",
        adapterNextStep: payload.adapter?.adapterNextStep ?? "not loaded yet",
      });
    } catch {
      renderWooCommerceConfigReadiness({
        state: "error",
        service: "unavailable",
        status: "error",
        mode: "read-only",
        wcBaseUrlConfigured: "false",
        wcBaseUrlLooksValid: "false",
        wcConsumerKeyConfigured: "false",
        wcConsumerSecretConfigured: "false",
        secretsExposed: "false",
        woocommerceApiCalled: "false",
        writeScopeEnabled: "false",
        nextStep: "missing config",
        adapterName: "not loaded yet",
        adapterCanReadProducts: "false",
        adapterCanWriteProducts: "false",
        adapterStatus: "not loaded yet",
        adapterNextStep: "not loaded yet",
      });
    }
  }

  function renderWooCommerceReadOnlyProductScanIdle() {
    renderWooCommerceReadOnlyProductScanSummary({
      state: "not run",
      service: "not loaded yet",
      mode: "read-only",
      source: "woocommerce_staging",
      status: "not run",
      timestamp: "not loaded yet",
      productsScanned: "not loaded yet",
      issuesFound: "not loaded yet",
      woocommerceApiCalled: "false",
      productDataReturned: "false",
      writeScopeEnabled: "false",
      nextStep: "manual operator trigger required",
    });

    renderWooCommerceReadOnlyProductRows({
      state: "idle",
      rows: ["No products scanned yet."],
    });

    renderWooCommerceReadOnlyIssueRows({
      state: "idle",
      rows: ["No issues available yet."],
    });

    if (wcScanDescription) {
      wcScanDescription.textContent = "Operator-controlled / no automatic scan";
    }

    if (wcScanWarning) {
      wcScanWarning.textContent = "Staging/test only";
    }

    if (wcScanButton) {
      wcScanButton.disabled = false;
      wcScanButton.textContent = "Run read-only product scan";
    }
  }

  function setWooCommerceReadOnlyProductScanBusy(isBusy) {
    if (wcScanState && isBusy) {
      wcScanState.textContent = "running";
    }

    if (wcScanButton) {
      wcScanButton.disabled = isBusy;
      wcScanButton.textContent = isBusy ? "Running read-only scan" : "Run read-only product scan";
    }

    if (wcScanDescription) {
      wcScanDescription.textContent = isBusy
        ? "Running read-only scan"
        : "Operator-controlled / no automatic scan";
    }
  }

  function normalizeWooCommerceScanRows(rows) {
    return rows.map((row, index) => {
      const normalizedRow =
        typeof row === "string"
          ? {
              index: index + 1,
              id: row,
              sku: "not loaded yet",
              name: "not loaded yet",
              status: "not loaded yet",
              type: "not loaded yet",
              stockStatus: "not loaded yet",
              stockQuantity: "not loaded yet",
              imagePresent: "not loaded yet",
              shortDescriptionPresent: "not loaded yet",
              longDescriptionPresent: "not loaded yet",
              categoryCount: "not loaded yet",
              tagCount: "not loaded yet",
            }
          : {
              index: index + 1,
              id: row.id ?? `product_${String(index + 1).padStart(3, "0")}`,
              sku: row.sku ?? "not loaded yet",
              name: row.name ?? "not loaded yet",
              status: row.status ?? "not loaded yet",
              type: row.type ?? "not loaded yet",
              stockStatus: row.stockStatus ?? "not loaded yet",
              stockQuantity:
                row.stockQuantity === null || row.stockQuantity === undefined
                  ? "not loaded yet"
                  : String(row.stockQuantity),
              imagePresent: row.imagePresent === true ? "true" : "false",
              shortDescriptionPresent: row.shortDescriptionPresent === true ? "true" : "false",
              longDescriptionPresent: row.longDescriptionPresent === true ? "true" : "false",
              categoryCount:
                row.categoryCount === null || row.categoryCount === undefined
                  ? "not loaded yet"
                  : String(row.categoryCount),
              tagCount:
                row.tagCount === null || row.tagCount === undefined
                  ? "not loaded yet"
                  : String(row.tagCount),
            };

      return normalizedRow;
    });
  }

  function normalizeWooCommerceIssueRows(rows) {
    return rows.map((row, index) => {
      const normalizedRow =
        typeof row === "string"
          ? {
              index: index + 1,
              issueId: row,
              productId: "not loaded yet",
              sku: "not loaded yet",
              type: "not loaded yet",
              severity: "not loaded yet",
              status: "not loaded yet",
              message: "not loaded yet",
            }
          : {
              index: index + 1,
              issueId: row.issueId ?? `issue_${String(index + 1).padStart(3, "0")}`,
              productId: row.productId ?? "not loaded yet",
              sku: row.sku ?? "not loaded yet",
              type: row.type ?? "not loaded yet",
              severity: row.severity ?? "not loaded yet",
              status: row.status ?? "not loaded yet",
              message: row.message ?? "not loaded yet",
            };

      return normalizedRow;
    });
  }

  function renderWooCommerceReadOnlyProductScanSummary({
    state,
    service,
    mode,
    source,
    status,
    timestamp,
    productsScanned,
    issuesFound,
    woocommerceApiCalled,
    productDataReturned,
    writeScopeEnabled,
    nextStep,
  }) {
    if (wcScanState) {
      wcScanState.textContent = state;
    }

    if (wcScanService) {
      wcScanService.textContent = service;
    }

    if (wcScanMode) {
      wcScanMode.textContent = mode;
    }

    if (wcScanSource) {
      wcScanSource.textContent = source;
    }

    if (wcScanStatus) {
      wcScanStatus.textContent = status;
    }

    if (wcScanTimestamp) {
      wcScanTimestamp.textContent = timestamp;
    }

    if (wcScanProductsScanned) {
      wcScanProductsScanned.textContent = productsScanned;
    }

    if (wcScanIssuesFound) {
      wcScanIssuesFound.textContent = issuesFound;
    }

    if (wcScanCalled) {
      wcScanCalled.textContent = woocommerceApiCalled;
    }

    if (wcScanProductDataReturned) {
      wcScanProductDataReturned.textContent = productDataReturned;
    }

    if (wcScanWriteScope) {
      wcScanWriteScope.textContent = writeScopeEnabled;
    }

    if (wcScanNextStep) {
      wcScanNextStep.textContent = nextStep;
    }
  }

  function renderWooCommerceReadOnlyProductRows({ state, rows }) {
    if (wcScanProductRegister) {
      wcScanProductRegister.dataset.state = state;
      wcScanProductRegister.innerHTML = "";

      const list = document.createElement("ol");
      list.className = "issue-register-list";

      const renderMessageOnly = rows.length === 1 && typeof rows[0] === "string";

      if (renderMessageOnly) {
        const item = document.createElement("li");
        item.className = "issue-register-row";
        item.textContent = rows[0];
        list.appendChild(item);
        wcScanProductRegister.appendChild(list);
        return;
      }

      normalizeWooCommerceScanRows(rows).forEach((row) => {
        const item = document.createElement("li");
        item.className = "issue-register-row";

        const heading = document.createElement("div");
        heading.className = "row-heading";

        const indexLabel = document.createElement("strong");
        indexLabel.textContent = `${row.index}. Product ${row.id}`;
        heading.appendChild(indexLabel);
        item.appendChild(heading);

        const fields = [
          ["sku", row.sku],
          ["name", row.name],
          ["status", row.status],
          ["type", row.type],
          ["stock status", row.stockStatus],
          ["stock quantity", row.stockQuantity],
          ["image present", row.imagePresent],
          ["short description present", row.shortDescriptionPresent],
          ["long description present", row.longDescriptionPresent],
          ["category count", row.categoryCount],
          ["tag count", row.tagCount],
        ];

        fields.forEach(([label, value]) => {
          const field = document.createElement("div");
          field.className = "row-field";

          const fieldLabel = document.createElement("span");
          fieldLabel.textContent = label;

          const fieldValue = document.createElement("strong");
          fieldValue.textContent = value;

          field.appendChild(fieldLabel);
          field.appendChild(fieldValue);
          item.appendChild(field);
        });

        list.appendChild(item);
      });

      wcScanProductRegister.appendChild(list);
    }
  }

  function renderWooCommerceReadOnlyIssueRows({ state, rows }) {
    if (wcScanIssueRegister) {
      wcScanIssueRegister.dataset.state = state;
      wcScanIssueRegister.innerHTML = "";

      const list = document.createElement("ol");
      list.className = "issue-register-list";

      const renderMessageOnly = rows.length === 1 && typeof rows[0] === "string";

      if (renderMessageOnly) {
        const item = document.createElement("li");
        item.className = "issue-register-row";
        item.textContent = rows[0];
        list.appendChild(item);
        wcScanIssueRegister.appendChild(list);
        return;
      }

      normalizeWooCommerceIssueRows(rows).forEach((row) => {
        const item = document.createElement("li");
        item.className = "issue-register-row";

        const heading = document.createElement("div");
        heading.className = "row-heading";

        const indexLabel = document.createElement("strong");
        indexLabel.textContent = `${row.index}. ${row.issueId}`;
        heading.appendChild(indexLabel);
        item.appendChild(heading);

        const fields = [
          ["product id", row.productId],
          ["sku", row.sku],
          ["type", row.type],
          ["severity", row.severity],
          ["status", row.status],
          ["message", row.message],
        ];

        fields.forEach(([label, value]) => {
          const field = document.createElement("div");
          field.className = "row-field";

          const fieldLabel = document.createElement("span");
          fieldLabel.textContent = label;

          const fieldValue = document.createElement("strong");
          fieldValue.textContent = value;

          field.appendChild(fieldLabel);
          field.appendChild(fieldValue);
          item.appendChild(field);
        });

        list.appendChild(item);
      });

      wcScanIssueRegister.appendChild(list);
    }
  }

  async function loadWooCommerceReadOnlyProductScan() {
    setWooCommerceReadOnlyProductScanBusy(true);

    try {
      const response = await fetch(
        new URL("/api/health-checker/woocommerce-read-only-product-scan", apiBaseUrl),
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = await response.json();
      const products = Array.isArray(payload.products) ? payload.products : [];
      const issues = Array.isArray(payload.issues) ? payload.issues : [];
      const hasProducts = products.length > 0;
      const hasIssues = issues.length > 0;

      renderWooCommerceReadOnlyProductScanSummary({
        state: payload.status ?? "success",
        service: payload.service ?? "not loaded yet",
        mode: payload.mode ?? "read-only",
        source: payload.source ?? "woocommerce_staging",
        status: payload.status ?? "success",
        timestamp: payload.timestamp ?? "not loaded yet",
        productsScanned:
          payload.productsScanned === 0 || payload.productsScanned
            ? String(payload.productsScanned)
            : "not loaded yet",
        issuesFound:
          payload.issuesFound === 0 || payload.issuesFound
            ? String(payload.issuesFound)
            : "not loaded yet",
        woocommerceApiCalled: payload.woocommerceApiCalled === true ? "true" : "false",
        productDataReturned: payload.productDataReturned === true ? "true" : "false",
        writeScopeEnabled: payload.writeScopeEnabled === false ? "false" : "not loaded yet",
        nextStep: payload.nextStep ?? "not loaded yet",
      });

      renderWooCommerceReadOnlyProductRows({
        state: hasProducts ? "success" : "empty",
        rows:
          hasProducts
            ? products
            : ["No products returned by the read-only scan."],
      });

      renderWooCommerceReadOnlyIssueRows({
        state: hasIssues ? "success" : "empty",
        rows: hasIssues ? issues : ["No issues detected in the read-only scan."],
      });
    } catch {
      renderWooCommerceReadOnlyProductScanSummary({
        state: "error",
        service: "unavailable",
        mode: "read-only",
        source: "woocommerce_staging",
        status: "error",
        timestamp: "not loaded yet",
        productsScanned: "not loaded yet",
        issuesFound: "not loaded yet",
        woocommerceApiCalled: "false",
        productDataReturned: "false",
        writeScopeEnabled: "false",
        nextStep: "manual operator trigger required",
      });

      renderWooCommerceReadOnlyProductRows({
        state: "error",
        rows: ["unavailable"],
      });

      renderWooCommerceReadOnlyIssueRows({
        state: "error",
        rows: ["unavailable"],
      });
    } finally {
      setWooCommerceReadOnlyProductScanBusy(false);
    }
  }

  function renderHealth({ service, status, mode, timestamp }) {
    if (healthState) {
      healthState.textContent = status;
    }

    if (healthService) {
      healthService.textContent = service;
    }

    if (healthStatus) {
      healthStatus.textContent = status;
    }

    if (healthMode) {
      healthMode.textContent = mode;
    }

    if (healthTimestamp) {
      healthTimestamp.textContent = timestamp;
    }
  }

  function renderDiagnostics({
    service,
    status,
    mode,
    database,
    prisma,
    woocommerce,
    secrets,
    timestamp,
  }) {
    if (diagnosticsState) {
      diagnosticsState.textContent = status;
    }

    if (diagnosticsService) {
      diagnosticsService.textContent = service;
    }

    if (diagnosticsStatus) {
      diagnosticsStatus.textContent = status;
    }

    if (diagnosticsMode) {
      diagnosticsMode.textContent = mode;
    }

    if (diagnosticsDatabase) {
      diagnosticsDatabase.textContent = database;
    }

    if (diagnosticsPrisma) {
      diagnosticsPrisma.textContent = prisma;
    }

    if (diagnosticsWoocommerce) {
      diagnosticsWoocommerce.textContent = woocommerce;
    }

    if (diagnosticsSecrets) {
      diagnosticsSecrets.textContent = secrets;
    }

    if (diagnosticsTimestamp) {
      diagnosticsTimestamp.textContent = timestamp;
    }
  }

  function renderReadiness({ service, status, mode, timestamp }) {
    if (readinessState) {
      readinessState.textContent = status;
    }

    if (readinessService) {
      readinessService.textContent = service;
    }

    if (readinessStatus) {
      readinessStatus.textContent = status;
    }

    if (readinessMode) {
      readinessMode.textContent = mode;
    }

    if (readinessTimestamp) {
      readinessTimestamp.textContent = timestamp;
    }
  }

  function renderMockScan({
    state,
    service,
    status,
    mode,
    scanId,
    shop,
    productsChecked,
    issuesFound,
    riskLevel,
    timestamp,
  }) {
    if (mockScanState) {
      mockScanState.textContent = state;
    }

    if (mockScanService) {
      mockScanService.textContent = service;
    }

    if (mockScanStatus) {
      mockScanStatus.textContent = status;
    }

    if (mockScanMode) {
      mockScanMode.textContent = mode;
    }

    if (mockScanId) {
      mockScanId.textContent = scanId;
    }

    if (mockScanShop) {
      mockScanShop.textContent = shop;
    }

    if (mockScanProductsChecked) {
      mockScanProductsChecked.textContent = productsChecked;
    }

    if (mockScanIssuesFound) {
      mockScanIssuesFound.textContent = issuesFound;
    }

    if (mockScanRiskLevel) {
      mockScanRiskLevel.textContent = riskLevel;
    }

    if (mockScanTimestamp) {
      mockScanTimestamp.textContent = timestamp;
    }
  }

  function renderMockScanIssueSummary({ state, issueCategories, topIssue, issueCount }) {
    if (mockScanIssueState) {
      mockScanIssueState.textContent = state;
    }

    if (mockScanIssueCategories) {
      mockScanIssueCategories.textContent = issueCategories;
    }

    if (mockScanTopIssue) {
      mockScanTopIssue.textContent = topIssue;
    }

    if (mockScanIssueCount) {
      mockScanIssueCount.textContent = issueCount;
    }
  }

  function renderMockScanIssueRegister({ state, rows }) {
    if (mockScanIssueRegister) {
      mockScanIssueRegister.dataset.state = state;
      mockScanIssueRegister.innerHTML = "";

      const list = document.createElement("ol");
      list.className = "issue-register-list";

      rows.forEach((row) => {
        const normalizedRow =
          typeof row === "string"
            ? {
                index: 1,
                issueLabel: row,
                productLabel: "not loaded yet",
                categoryLabel: "not loaded yet",
                severityLabel: "not loaded yet",
                statusLabel: "not loaded yet",
                messageLabel: "not loaded yet",
              }
            : row;

        const item = document.createElement("li");
        item.className = "issue-register-row";

        const heading = document.createElement("div");
        heading.className = "row-heading";

        const indexLabel = document.createElement("strong");
        indexLabel.textContent = `${normalizedRow.index}. ${normalizedRow.issueLabel}`;
        heading.appendChild(indexLabel);
        item.appendChild(heading);

        const fields = [
          ["product/entity", normalizedRow.productLabel],
          ["category", normalizedRow.categoryLabel],
          ["severity/risk", normalizedRow.severityLabel],
          ["status", normalizedRow.statusLabel],
          ["summary", normalizedRow.messageLabel],
        ];

        fields.forEach(([label, value]) => {
          const field = document.createElement("div");
          field.className = "row-field";

          const fieldLabel = document.createElement("span");
          fieldLabel.textContent = label;

          const fieldValue = document.createElement("strong");
          fieldValue.textContent = value;

          field.appendChild(fieldLabel);
          field.appendChild(fieldValue);
          item.appendChild(field);
        });

        list.appendChild(item);
      });

      mockScanIssueRegister.appendChild(list);
    }
  }

  function renderMockProposalPreview({
    state,
    service,
    status,
    mode,
    sourceScanId,
    count,
    approval,
    autoExecute,
    timestamp,
  }) {
    if (proposalPreviewState) {
      proposalPreviewState.textContent = state;
    }

    if (proposalPreviewService) {
      proposalPreviewService.textContent = service;
    }

    if (proposalPreviewStatus) {
      proposalPreviewStatus.textContent = status;
    }

    if (proposalPreviewMode) {
      proposalPreviewMode.textContent = mode;
    }

    if (proposalPreviewSourceScanId) {
      proposalPreviewSourceScanId.textContent = sourceScanId;
    }

    if (proposalPreviewCount) {
      proposalPreviewCount.textContent = count;
    }

    if (proposalPreviewApproval) {
      proposalPreviewApproval.textContent = approval;
    }

    if (proposalPreviewAutoExecute) {
      proposalPreviewAutoExecute.textContent = autoExecute;
    }

    if (proposalPreviewTimestamp) {
      proposalPreviewTimestamp.textContent = timestamp;
    }
  }

  function renderMockProposalPreviewPrimary({
    state,
    proposalId,
    linkedIssue,
    productEntity,
    proposalType,
    proposalValue,
    riskLevel,
    humanReviewRequired,
  }) {
    if (proposalPreviewPrimaryState) {
      proposalPreviewPrimaryState.textContent = state;
    }

    if (proposalPreviewPrimaryId) {
      proposalPreviewPrimaryId.textContent = proposalId;
    }

    if (proposalPreviewLinkedIssue) {
      proposalPreviewLinkedIssue.textContent = linkedIssue;
    }

    if (proposalPreviewProductEntity) {
      proposalPreviewProductEntity.textContent = productEntity;
    }

    if (proposalPreviewType) {
      proposalPreviewType.textContent = proposalType;
    }

    if (proposalPreviewValue) {
      proposalPreviewValue.textContent = proposalValue;
    }

    if (proposalPreviewRiskLevel) {
      proposalPreviewRiskLevel.textContent = riskLevel;
    }

    if (proposalPreviewHumanReview) {
      proposalPreviewHumanReview.textContent = humanReviewRequired;
    }
  }

  function renderMockProposalRegister({ state, rows }) {
    if (proposalPreviewRegister) {
      proposalPreviewRegister.dataset.state = state;
      proposalPreviewRegister.innerHTML = "";

      const list = document.createElement("ol");
      list.className = "proposal-register-list";

      rows.forEach((row) => {
        const normalizedRow =
          typeof row === "string"
            ? {
                index: 1,
                proposalLabel: row,
                issueLabel: "not loaded yet",
                entityLabel: "not loaded yet",
                actionLabel: "not loaded yet",
                summaryLabel: "not loaded yet",
                riskLabel: "not loaded yet",
                approvalLabel: "not loaded yet",
              }
            : row;

        const item = document.createElement("li");
        item.className = "proposal-register-row";

        const heading = document.createElement("div");
        heading.className = "row-heading";

        const indexLabel = document.createElement("strong");
        indexLabel.textContent = `${normalizedRow.index}. ${normalizedRow.proposalLabel}`;
        heading.appendChild(indexLabel);
        item.appendChild(heading);

        const fields = [
          ["linked issue", normalizedRow.issueLabel],
          ["product/entity", normalizedRow.entityLabel],
          ["proposed action/type", normalizedRow.actionLabel],
          ["proposed value/summary", normalizedRow.summaryLabel],
          ["risk/severity", normalizedRow.riskLabel],
          ["human review required", normalizedRow.approvalLabel],
        ];

        fields.forEach(([label, value]) => {
          const field = document.createElement("div");
          field.className = "row-field";

          const fieldLabel = document.createElement("span");
          fieldLabel.textContent = label;

          const fieldValue = document.createElement("strong");
          fieldValue.textContent = value;

          field.appendChild(fieldLabel);
          field.appendChild(fieldValue);
          item.appendChild(field);
        });

        list.appendChild(item);
      });

      proposalPreviewRegister.appendChild(list);
    }
  }

  function renderProposalContract({
    state,
    service,
    status,
    mode,
    modelPresent,
    requiredFields,
    sourceTypes,
    governanceRules,
    note,
  }) {
    if (proposalContractState) {
      proposalContractState.textContent = state;
    }

    if (proposalContractService) {
      proposalContractService.textContent = service;
    }

    if (proposalContractStatus) {
      proposalContractStatus.textContent = status;
    }

    if (proposalContractMode) {
      proposalContractMode.textContent = mode;
    }

    if (proposalContractModelPresent) {
      proposalContractModelPresent.textContent = modelPresent;
    }

    if (proposalContractRequiredFields) {
      proposalContractRequiredFields.textContent = requiredFields;
    }

    if (proposalContractSourceTypes) {
      proposalContractSourceTypes.textContent = sourceTypes;
    }

    if (proposalContractGovernance) {
      proposalContractGovernance.innerHTML = "";

      const list = document.createElement("ul");
      list.className = "contract-governance-list";

      governanceRules.forEach((rule) => {
        const item = document.createElement("li");
        item.textContent = rule;
        list.appendChild(item);
      });

      proposalContractGovernance.appendChild(list);
    }

    if (proposalContractNote) {
      proposalContractNote.textContent = note;
    }
  }

  function summarizeWooCommerceConfig(baseUrlConfigured, baseUrlLooksValid) {
    if (baseUrlConfigured !== "true") {
      return "missing";
    }

    if (baseUrlLooksValid !== "true") {
      return "invalid";
    }

    return "configured";
  }

  function summarizeWooCommerceCredentials(consumerKeyConfigured, consumerSecretConfigured) {
    return consumerKeyConfigured === "true" && consumerSecretConfigured === "true"
      ? "configured"
      : "missing";
  }

  function renderWooCommerceConfigReadiness({
    state,
    service,
    status,
    mode,
    wcBaseUrlConfigured,
    wcBaseUrlLooksValid,
    wcConsumerKeyConfigured,
    wcConsumerSecretConfigured,
    secretsExposed,
    woocommerceApiCalled,
    writeScopeEnabled,
    nextStep,
    adapterName,
    adapterCanReadProducts,
    adapterCanWriteProducts,
    adapterStatus,
    adapterNextStep,
  }) {
    const configSummary = summarizeWooCommerceConfig(
      wcBaseUrlConfigured,
      wcBaseUrlLooksValid,
    );
    const credentialsSummary = summarizeWooCommerceCredentials(
      wcConsumerKeyConfigured,
      wcConsumerSecretConfigured,
    );

    if (wcConfigState) {
      wcConfigState.textContent = state;
    }

    if (wcConfigService) {
      wcConfigService.textContent = service;
    }

    if (wcConfigStatus) {
      wcConfigStatus.textContent = status;
    }

    if (wcConfigMode) {
      wcConfigMode.textContent = mode;
    }

    if (wcConfigBaseUrlConfigured) {
      wcConfigBaseUrlConfigured.textContent = configSummary;
    }

    if (wcConfigBaseUrlLooksValid) {
      wcConfigBaseUrlLooksValid.textContent = credentialsSummary;
    }

    if (wcConfigConsumerKeyConfigured) {
      wcConfigConsumerKeyConfigured.textContent = secretsExposed;
    }

    if (wcConfigConsumerSecretConfigured) {
      wcConfigConsumerSecretConfigured.textContent = woocommerceApiCalled;
    }

    if (wcConfigSecretsExposed) {
      wcConfigSecretsExposed.textContent = writeScopeEnabled;
    }

    if (wcConfigCalled) {
      wcConfigCalled.textContent = adapterName;
    }

    if (wcConfigWriteScope) {
      wcConfigWriteScope.textContent = adapterCanReadProducts;
    }

    if (wcConfigNextStep) {
      wcConfigNextStep.textContent = adapterCanWriteProducts;
    }

    if (wcConfigAdapterName) {
      wcConfigAdapterName.textContent = adapterStatus;
    }

    if (wcConfigAdapterCanRead) {
      wcConfigAdapterCanRead.textContent = adapterNextStep;
    }
  }
});

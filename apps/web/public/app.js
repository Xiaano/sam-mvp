document.addEventListener("DOMContentLoaded", () => {
  const marker = document.getElementById("loaded-marker");

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
});

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
});

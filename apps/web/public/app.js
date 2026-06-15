document.addEventListener("DOMContentLoaded", () => {
  const marker = document.getElementById("loaded-marker");
  const healthState = document.getElementById("health-state");
  const healthService = document.getElementById("health-service");
  const healthStatus = document.getElementById("health-status");
  const healthMode = document.getElementById("health-mode");
  const healthTimestamp = document.getElementById("health-timestamp");
  const apiBaseUrl = "http://localhost:3000";

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

  void loadHealth();

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

  function renderHealth({ service, status, mode, timestamp }) {
    if (healthState) {
      healthState.textContent = `${status}`;
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
});

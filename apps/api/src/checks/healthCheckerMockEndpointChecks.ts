import assert from "node:assert/strict";

import { createApiServer } from "../server.js";

type CheckCase = {
  name: string;
  path: string;
  verify: (payload: any) => void;
};

const checkCases: CheckCase[] = [
  {
    name: "mock-scan",
    path: "/api/health-checker/mock-scan",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock");
      assert.equal(payload.status, "completed");
      assert.equal(payload.source, "mock-scan");
      assert.equal(payload.summary.issues_found, 4);
    },
  },
  {
    name: "mock-proposal-preview",
    path: "/api/health-checker/mock-proposal-preview",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock_preview");
      assert.equal(payload.status, "completed");
      assert.equal(payload.source_scan_id, "mock_scan_001");
      assert.equal(payload.summary.proposals_previewed, 4);
      assert.equal(payload.approval_flow.human_approval_required, true);
    },
  },
  {
    name: "operator-review-preview",
    path: "/api/health-checker/operator-review-preview",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock_preview");
      assert.equal(payload.status, "completed");
      assert.equal(payload.source, "mock-operator-review-preview");
      assert.equal(payload.summary.review_items, 4);
      assert.equal(payload.review_policy.human_review_required, true);
    },
  },
  {
    name: "mock-scan-to-review-flow",
    path: "/api/health-checker/mock-scan-to-review-flow",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock_flow");
      assert.equal(payload.status, "completed");
      assert.equal(payload.flow_id, "mock_flow_001");
      assert.equal(payload.summary.issues_found, 4);
      assert.equal(payload.summary.review_items, 4);
    },
  },
  {
    name: "operator-overview-mock",
    path: "/api/health-checker/operator-overview-mock",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock_overview");
      assert.equal(payload.status, "completed");
      assert.equal(payload.overview_id, "overview_001");
      assert.equal(payload.scan_summary.review_items, 4);
      assert.equal(Array.isArray(payload.future_extension_hooks), true);
    },
  },
  {
    name: "audit-log-preview",
    path: "/api/health-checker/audit-log-preview",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "mock_preview");
      assert.equal(payload.status, "completed");
      assert.equal(payload.source, "mock-audit-log-preview");
      assert.equal(payload.summary.audit_events_previewed, 7);
      assert.equal(payload.summary.runtime_logging, "disabled");
    },
  },
  {
    name: "diagnostics",
    path: "/diagnostics",
    verify: (payload) => {
      assert.equal(payload.database, "not_checked");
      assert.equal(payload.prisma, "not_checked");
    },
  },
];

async function main() {
  const app = createApiServer();
  await app.ready();

  try {
    for (const checkCase of checkCases) {
      const response = await app.inject({
        method: "GET",
        url: checkCase.path,
      });

      assert.equal(
        response.statusCode,
        200,
        `${checkCase.name} returned ${response.statusCode}`,
      );

      const payload = JSON.parse(response.body);
      checkCase.verify(payload);
    }

    console.log(
      `Checked ${checkCases.length} endpoints: ${checkCases
        .map((checkCase) => checkCase.path)
        .join(", ")}`,
    );
    console.log("All minimal mock endpoint checks passed.");
  } finally {
    await app.close();
  }
}

main().catch((error: unknown) => {
  console.error("Mock endpoint check failed.");
  console.error(error);
  process.exitCode = 1;
});

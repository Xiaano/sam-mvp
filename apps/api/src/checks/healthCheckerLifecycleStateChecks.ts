import assert from "node:assert/strict";

import { createApiServer } from "../server.js";

type CheckCase = {
  name: string;
  path: string;
  verify: (payload: any) => void;
};

function collectStrings(value: unknown, output: string[] = []): string[] {
  if (typeof value === "string") {
    output.push(value);
    return output;
  }

  if (Array.isArray(value)) {
    for (const entry of value) {
      collectStrings(entry, output);
    }
    return output;
  }

  if (value && typeof value === "object") {
    for (const entry of Object.values(value as Record<string, unknown>)) {
      collectStrings(entry, output);
    }
  }

  return output;
}

function assertNoActiveExecutionStates(payload: unknown) {
  const strings = collectStrings(payload);

  for (const token of ["execution_allowed", "executed", "execution_failed"]) {
    assert.equal(
      strings.includes(token),
      false,
      `Unexpected active lifecycle token: ${token}`,
    );
  }
}

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
      assert.equal(payload.safety.write_actions, "disabled");
      assert.equal(payload.safety.woocommerce, "not_connected");
      assertNoActiveExecutionStates(payload);
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
      assert.equal(payload.summary.issues_found, 4);
      assert.equal(payload.summary.proposals_previewed, 4);
      assert.equal(payload.summary.requires_human_approval, true);
      assert.equal(payload.summary.auto_execute_allowed, false);
      assert.equal(payload.approval_flow.human_approval_required, true);
      assert.equal(payload.approval_flow.default_status, "ready_for_review");
      assert.equal(payload.safety.auto_execute, "disabled");
      assertNoActiveExecutionStates(payload);
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
      assert.equal(payload.summary.requires_human_review, true);
      assert.equal(payload.summary.auto_execute_allowed, false);
      assert.equal(payload.review_policy.human_review_required, true);
      assert.equal(payload.review_policy.default_next_status, "ready_for_review");
      assert.equal(payload.review_policy.auto_execute_allowed, false);
      assert.equal(payload.safety.auto_execute, "disabled");
      assertNoActiveExecutionStates(payload);
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
      assert.equal(payload.summary.scan_status, "completed");
      assert.equal(payload.summary.issues_found, 4);
      assert.equal(payload.summary.proposals_previewed, 4);
      assert.equal(payload.summary.review_items, 4);
      assert.equal(payload.summary.approval_required, true);
      assert.equal(payload.approval_policy.human_approval_required, true);
      assert.equal(payload.approval_policy.auto_execute_allowed, false);
      assert.equal(payload.approval_policy.write_actions, "disabled");
      assert.ok(
        payload.review_queue.every(
          (item: any) =>
            item.current_status === "ready_for_review" &&
            item.requires_human_review === true &&
            item.requires_human_approval === true &&
            item.auto_execute_allowed === false,
        ),
      );
      assertNoActiveExecutionStates(payload);
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
      assert.equal(payload.scan_summary.status, "completed");
      assert.equal(payload.scan_summary.review_items, 4);
      assert.equal(payload.approval_policy.human_approval_required, true);
      assert.equal(payload.safety.auto_execute, "disabled");
      assert.ok(
        payload.future_extension_hooks.every(
          (hook: any) => hook.status === "metadata_only",
        ),
      );
      assertNoActiveExecutionStates(payload);
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
      assert.equal(payload.summary.database, "not_used");
      assert.ok(
        payload.audit_trail.some(
          (event: any) => event.event_type === "proposal_approved",
        ),
      );
      assert.ok(
        payload.audit_trail.some(
          (event: any) => event.event_type === "execution_blocked",
        ),
      );
      assert.equal(
        payload.audit_trail.some(
          (event: any) => event.event_type === "execution_failed",
        ),
        false,
      );
      assertNoActiveExecutionStates(payload);
    },
  },
  {
    name: "approval-flow-contract",
    path: "/api/health-checker/approval-flow-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.equal(payload.approval_rules.auto_execute_after_approval, false);
      assert.equal(payload.safety.auto_execute, "disabled");
      assert.ok(Array.isArray(payload.allowed_transitions));
      assertNoActiveExecutionStates(payload);
    },
  },
  {
    name: "audit-log-contract",
    path: "/api/health-checker/audit-log-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.equal(payload.safety.runtime_logging, "disabled");
      assert.ok(Array.isArray(payload.audit_events));
      assert.ok(Array.isArray(payload.required_fields));
      assertNoActiveExecutionStates(payload);
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
      `Checked ${checkCases.length} lifecycle/state endpoints: ${checkCases
        .map((checkCase) => checkCase.path)
        .join(", ")}`,
    );
    console.log("All lifecycle/state semantic-guard checks passed.");
  } finally {
    await app.close();
  }
}

main().catch((error: unknown) => {
  console.error("Lifecycle/state check failed.");
  console.error(error);
  process.exitCode = 1;
});

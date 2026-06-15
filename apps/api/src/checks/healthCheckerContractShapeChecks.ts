import assert from "node:assert/strict";

import { createApiServer } from "../server.js";

type CheckCase = {
  name: string;
  path: string;
  verify: (payload: any) => void;
};

const checkCases: CheckCase[] = [
  {
    name: "proposal-contract",
    path: "/api/health-checker/proposal-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.proposal_types));
      assert.ok(Array.isArray(payload.proposal_statuses));
      assert.ok(payload.execution_safety);
      assert.equal(payload.execution_safety.write_actions, "disabled");
    },
  },
  {
    name: "operator-review-contract",
    path: "/api/health-checker/operator-review-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.review_actions));
      assert.ok(Array.isArray(payload.review_statuses));
      assert.equal(payload.safety.write_actions, "disabled");
    },
  },
  {
    name: "approval-flow-contract",
    path: "/api/health-checker/approval-flow-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.allowed_transitions));
      assert.equal(payload.approval_rules.auto_execute_after_approval, false);
      assert.equal(payload.safety.auto_execute, "disabled");
    },
  },
  {
    name: "audit-log-contract",
    path: "/api/health-checker/audit-log-contract",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.audit_events));
      assert.ok(Array.isArray(payload.required_fields));
      assert.equal(payload.safety.runtime_logging, "disabled");
    },
  },
  {
    name: "issue-proposal-mapping",
    path: "/api/health-checker/issue-proposal-mapping",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.mappings));
      assert.equal(payload.mapping_model.auto_execute_allowed, false);
      assert.equal(payload.safety.auto_execute, "disabled");
    },
  },
  {
    name: "issue-classification",
    path: "/api/health-checker/issue-classification",
    verify: (payload) => {
      assert.equal(payload.service, "sam-health-checker");
      assert.equal(payload.mode, "contract");
      assert.equal(payload.status, "available");
      assert.ok(Array.isArray(payload.issue_types));
      assert.ok(Array.isArray(payload.severity_levels));
      assert.ok(Array.isArray(payload.confidence_levels));
      assert.ok(Array.isArray(payload.action_categories));
      assert.equal(payload.safety.write_actions, "disabled");
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
      `Checked ${checkCases.length} contract routes: ${checkCases
        .map((checkCase) => checkCase.path)
        .join(", ")}`,
    );
    console.log("All minimal contract-shape checks passed.");
  } finally {
    await app.close();
  }
}

main().catch((error: unknown) => {
  console.error("Contract-shape check failed.");
  console.error(error);
  process.exitCode = 1;
});

import type { FastifyInstance } from "fastify";

export function registerHealthCheckerOperatorReviewContractRoute(
  app: FastifyInstance,
) {
  app.get("/api/health-checker/operator-review-contract", async () => ({
    service: "sam-health-checker",
    mode: "contract",
    status: "available",
    version: "0.1.0",
    review_model: {
      source: "mock-proposal-preview",
      human_review_required: true,
      auto_approval_allowed: false,
      auto_execute_allowed: false,
    },
    review_actions: [
      {
        action: "approve",
        label: "Approve",
        description: "Approve the proposal for later controlled execution.",
        changes_proposal_status_to: "approved",
        requires_reason: false,
        allows_execution: false,
        risk_note: "Approval does not enable automatic execution.",
      },
      {
        action: "reject",
        label: "Reject",
        description: "Reject the proposal and stop it from progressing.",
        changes_proposal_status_to: "rejected",
        requires_reason: true,
        allows_execution: false,
        risk_note: "Rejected proposals stay blocked from execution.",
      },
      {
        action: "hold",
        label: "Hold",
        description: "Place the proposal on hold for later reassessment.",
        changes_proposal_status_to: "on_hold",
        requires_reason: false,
        allows_execution: false,
        risk_note: "Held proposals remain inactive until manually resumed.",
      },
      {
        action: "request_changes",
        label: "Request Changes",
        description: "Send the proposal back for improvement before approval.",
        changes_proposal_status_to: "changes_requested",
        requires_reason: true,
        allows_execution: false,
        risk_note: "Requested changes keep the proposal out of execution flow.",
      },
      {
        action: "needs_more_context",
        label: "Needs More Context",
        description: "Mark the proposal as requiring more source context first.",
        changes_proposal_status_to: "needs_more_context",
        requires_reason: true,
        allows_execution: false,
        risk_note: "Missing context blocks approval and execution.",
      },
    ],
    review_statuses: [
      "ready_for_review",
      "approved",
      "rejected",
      "on_hold",
      "changes_requested",
      "needs_more_context",
    ],
    example_review_item: {
      proposal_id: "preview_002",
      source_issue_type: "missing_short_description",
      proposal_type: "generate_short_description",
      current_status: "ready_for_review",
      available_actions: [
        "approve",
        "reject",
        "hold",
        "request_changes",
        "needs_more_context",
      ],
      recommended_action: "request_changes",
      requires_human_approval: true,
      auto_execute_allowed: false,
    },
    safety: {
      database: "not_used",
      woocommerce: "not_connected",
      prisma: "not_used",
      secrets: "not_required",
      write_actions: "disabled",
      auto_execute: "disabled",
    },
    next_step:
      "Next step can be operator review preview or approval-flow mock.",
  }));
}

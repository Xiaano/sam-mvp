type ScanSummary = {
  scan_id: string;
  checked_at: string;
  shop: {
    platform: string;
    name: string;
    url: string;
  };
  risk_level: string;
};

type Issue = {
  issue_id: string;
  product_sku: string;
  type: string;
  message: string;
  severity?: string;
  status?: string;
};

type ProposalPreview = {
  proposal_id: string;
  issue_id?: string;
  source_issue_type?: string;
  proposal_type: string;
  title?: string;
  current_state: string;
  proposed_change: string;
  reason: string;
  risk_level: string;
  confidence: string;
  requires_human_approval: true;
  auto_execute_allowed: false;
  default_status: string;
};

type ReviewItem = {
  review_id: string;
  proposal_id: string;
  source_issue_type: string;
  proposal_type: string;
  current_status: string;
  recommended_action: string;
  available_actions: string[];
  requires_human_review: true;
  requires_human_approval: true;
  auto_execute_allowed: false;
  operator_note?: string;
};

type ApprovalPolicy = {
  human_approval_required: true;
  auto_approval_allowed: false;
  auto_execute_allowed: false;
  bulk_approval_allowed: false;
  write_actions: "disabled";
  default_next_status?: string;
};

type AuditTrailPreviewEvent = {
  event_type: string;
  source_endpoint: string;
  reason: string;
};

type Safety = {
  database: "not_used";
  woocommerce: "not_connected";
  prisma: "not_used";
  secrets: "not_required";
  write_actions: "disabled";
  auto_execute: "disabled";
  runtime_logging?: "disabled";
};

type FutureExtensionHook = {
  hook: string;
  status: "metadata_only";
  note: string;
};

type MockScanToReviewFlow = {
  service: "sam-health-checker";
  mode: "mock_flow";
  status: "completed";
  version: "0.1.0";
  flow_id: string;
  summary: {
    scan_status: "completed";
    issues_found: number;
    proposals_previewed: number;
    review_items: number;
    approval_required: true;
  };
  scan: ScanSummary;
  issues: Issue[];
  proposal_previews: ProposalPreview[];
  review_queue: ReviewItem[];
  approval_policy: ApprovalPolicy;
  audit_trail_preview: AuditTrailPreviewEvent[];
  safety: Safety;
  next_step: string;
};

type MockScan = {
  service: "sam-health-checker";
  mode: "mock";
  status: "completed";
  source: "mock-scan";
  scan_id: string;
  shop: ScanSummary["shop"];
  checked_at: string;
  summary: {
    products_checked: number;
    issues_found: number;
    proposals_created: number;
    risk_level: string;
  };
  issues: Issue[];
  proposals: {
    proposal_id: string;
    issue_id: string;
    action: string;
    summary: string;
  }[];
  safety: {
    database: "not_used";
    woocommerce: "not_connected";
    prisma: "not_used";
    secrets: "not_required";
    write_actions: "disabled";
  };
  next_step: string;
};

type MockScanResponse = MockScan;

type MockOperatorOverview = {
  service: "sam-health-checker";
  mode: "mock_overview";
  status: "completed";
  version: "0.1.0";
  overview_id: string;
  scan_summary: {
    source_scan_id: string;
    source_flow_id: string;
    source_route: string;
    status: "completed";
    checked_at: string;
    products_checked: number;
    issues_found: number;
    proposals_previewed: number;
    review_items: number;
    risk_level: string;
  };
  issues: Issue[];
  proposal_previews: ProposalPreview[];
  review_queue: ReviewItem[];
  approval_policy: ApprovalPolicy;
  audit_trail_preview: AuditTrailPreviewEvent[];
  safety: Safety;
  future_extension_hooks: FutureExtensionHook[];
  next_step: string;
};

type MockProposalPreview = {
  service: "sam-health-checker";
  mode: "mock_preview";
  status: "completed";
  version: "0.1.0";
  source_scan_id: string;
  summary: {
    issues_found: number;
    proposals_previewed: number;
    requires_human_approval: true;
    auto_execute_allowed: false;
    write_actions: "disabled";
  };
  proposal_previews: ProposalPreview[];
  approval_flow: {
    human_approval_required: true;
    bulk_approval_allowed: false;
    auto_execute_allowed: false;
    default_status: "ready_for_review";
  };
  safety: Safety;
  next_step: string;
};

type MockOperatorReviewPreview = {
  service: "sam-health-checker";
  mode: "mock_preview";
  status: "completed";
  version: "0.1.0";
  source: "mock-operator-review-preview";
  summary: {
    review_items: number;
    requires_human_review: true;
    auto_approval_allowed: false;
    auto_execute_allowed: false;
    write_actions: "disabled";
  };
  review_queue: ReviewItem[];
  review_policy: {
    human_review_required: true;
    auto_approval_allowed: false;
    auto_execute_allowed: false;
    bulk_approval_allowed: false;
    default_next_status: "ready_for_review";
  };
  safety: Safety;
  next_step: string;
};

type MockAuditLogPreview = {
  service: "sam-health-checker";
  mode: "mock_preview";
  status: "completed";
  version: "0.1.0";
  source: "mock-audit-log-preview";
  summary: {
    audit_events_previewed: number;
    human_decision_events: number;
    system_events: number;
    runtime_logging: "disabled";
    database: "not_used";
  };
  audit_trail: {
    event_id: string;
    event_type: string;
    timestamp: string;
    actor_type: string;
    actor_id: string;
    scan_id: string;
    issue_id: string | null;
    proposal_id: string | null;
    action: string;
    previous_status: string;
    new_status: string;
    reason: string;
    source_endpoint: string;
    risk_note: string;
  }[];
  compliance_preview: {
    gdpr_data_minimization: true;
    avoid_sensitive_raw_data: true;
    operator_traceability: true;
    ai_transparency_ready: true;
    retention_policy_required_later: true;
  };
  safety: Safety;
  next_step: string;
};

const mockScan: ScanSummary = {
  scan_id: "mock_scan_001",
  checked_at: "2026-06-14T10:00:00.000Z",
  shop: {
    platform: "woocommerce",
    name: "Demo Webshop",
    url: "https://example.test",
  },
  risk_level: "medium",
};

const issues: Issue[] = [
  {
    issue_id: "issue_001",
    product_sku: "DEMO-001",
    type: "product_image_check",
    message: "Primary product image is missing.",
    severity: "high",
    status: "open",
  },
  {
    issue_id: "issue_002",
    product_sku: "DEMO-002",
    type: "short_description_check",
    message: "Short description is missing.",
    severity: "medium",
    status: "open",
  },
  {
    issue_id: "issue_003",
    product_sku: "DEMO-003",
    type: "tag_check",
    message: "Product tags are missing.",
    severity: "medium",
    status: "open",
  },
  {
    issue_id: "issue_004",
    product_sku: "DEMO-004",
    type: "long_description_check",
    message: "Long description is too short.",
    severity: "medium",
    status: "open",
  },
];

const proposalPreviews: ProposalPreview[] = [
  {
    proposal_id: "preview_001",
    issue_id: "issue_001",
    source_issue_type: "missing_product_image",
    proposal_type: "add_product_image",
    title: "Add missing primary product image",
    current_state: "No primary image is available for the product.",
    proposed_change: "Request a primary product image and attach it after manual approval.",
    reason: "Products without a main image reduce clarity and conversion quality.",
    risk_level: "high",
    confidence: "high",
    requires_human_approval: true,
    auto_execute_allowed: false,
    default_status: "ready_for_review",
  },
  {
    proposal_id: "preview_002",
    issue_id: "issue_002",
    source_issue_type: "missing_short_description",
    proposal_type: "generate_short_description",
    title: "Generate short product description",
    current_state: "Short description is empty.",
    proposed_change: "Prepare a short commercial description draft for operator review.",
    reason: "A short description improves product scannability and merchandising.",
    risk_level: "medium",
    confidence: "medium",
    requires_human_approval: true,
    auto_execute_allowed: false,
    default_status: "ready_for_review",
  },
  {
    proposal_id: "preview_003",
    issue_id: "issue_003",
    source_issue_type: "missing_product_tags",
    proposal_type: "add_product_tags",
    title: "Add starter tag set",
    current_state: "No product tags are assigned.",
    proposed_change: "Prepare a small tag set for manual approval before publication.",
    reason: "Tags support filtering, search and internal product grouping.",
    risk_level: "medium",
    confidence: "medium",
    requires_human_approval: true,
    auto_execute_allowed: false,
    default_status: "ready_for_review",
  },
  {
    proposal_id: "preview_004",
    issue_id: "issue_004",
    source_issue_type: "long_description_too_short",
    proposal_type: "improve_long_description",
    title: "Improve long product description",
    current_state: "Long description is too short.",
    proposed_change: "Prepare an expanded long-description draft for operator review.",
    reason: "Short long descriptions reduce product detail, clarity and merchandising quality.",
    risk_level: "medium",
    confidence: "medium",
    requires_human_approval: true,
    auto_execute_allowed: false,
    default_status: "ready_for_review",
  },
];

const reviewQueue: ReviewItem[] = [
  {
    review_id: "review_001",
    proposal_id: "preview_001",
    source_issue_type: "missing_product_image",
    proposal_type: "add_product_image",
    current_status: "ready_for_review",
    recommended_action: "approve",
    available_actions: ["approve", "reject", "hold", "needs_more_context"],
    requires_human_review: true,
    requires_human_approval: true,
    auto_execute_allowed: false,
    operator_note: "Image request can proceed after manual confirmation.",
  },
  {
    review_id: "review_002",
    proposal_id: "preview_002",
    source_issue_type: "missing_short_description",
    proposal_type: "generate_short_description",
    current_status: "ready_for_review",
    recommended_action: "request_changes",
    available_actions: [
      "approve",
      "reject",
      "hold",
      "request_changes",
      "needs_more_context",
    ],
    requires_human_review: true,
    requires_human_approval: true,
    auto_execute_allowed: false,
    operator_note: "Description draft needs more commercial tone before approval.",
  },
  {
    review_id: "review_003",
    proposal_id: "preview_003",
    source_issue_type: "missing_product_tags",
    proposal_type: "add_product_tags",
    current_status: "ready_for_review",
    recommended_action: "approve",
    available_actions: ["approve", "reject", "hold", "request_changes"],
    requires_human_review: true,
    requires_human_approval: true,
    auto_execute_allowed: false,
    operator_note: "Starter tags look acceptable for manual approval.",
  },
  {
    review_id: "review_004",
    proposal_id: "preview_004",
    source_issue_type: "long_description_too_short",
    proposal_type: "improve_long_description",
    current_status: "ready_for_review",
    recommended_action: "needs_more_context",
    available_actions: [
      "approve",
      "reject",
      "hold",
      "request_changes",
      "needs_more_context",
    ],
    requires_human_review: true,
    requires_human_approval: true,
    auto_execute_allowed: false,
    operator_note: "More product detail is needed before approval of the long-description draft.",
  },
];

const approvalPolicy: ApprovalPolicy = {
  human_approval_required: true,
  auto_approval_allowed: false,
  auto_execute_allowed: false,
  bulk_approval_allowed: false,
  write_actions: "disabled",
  default_next_status: "ready_for_review",
};

const auditTrailPreview: AuditTrailPreviewEvent[] = [
  {
    event_type: "scan_started",
    source_endpoint: "/api/health-checker/mock-scan",
    reason: "A mock scan begins the review flow preview.",
  },
  {
    event_type: "issue_detected",
    source_endpoint: "/api/health-checker/mock-scan",
    reason: "The mock scan identifies the product issues in scope.",
  },
  {
    event_type: "proposal_previewed",
    source_endpoint: "/api/health-checker/mock-proposal-preview",
    reason: "Proposal previews are prepared for operator review.",
  },
  {
    event_type: "operator_review_opened",
    source_endpoint: "/api/health-checker/operator-review-preview",
    reason: "The operator overview presents the review queue.",
  },
  {
    event_type: "proposal_approval_previewed",
    source_endpoint: "/api/health-checker/approval-flow-contract",
    reason:
      "Approval is shown as a human-led contract preview and remains non-executing.",
  },
  {
    event_type: "audit_log_recorded",
    source_endpoint: "/api/health-checker/audit-log-preview",
    reason: "Audit preview shows the decision trace without runtime writes.",
  },
];

const safetyPolicy: Safety = {
  database: "not_used",
  woocommerce: "not_connected",
  prisma: "not_used",
  secrets: "not_required",
  write_actions: "disabled",
  auto_execute: "disabled",
  runtime_logging: "disabled",
};

const futureExtensionHooks: FutureExtensionHook[] = [
  {
    hook: "customer_shop_segmentation",
    status: "metadata_only",
    note: "Future grouping by customer or shop segment.",
  },
  {
    hook: "issue_priority",
    status: "metadata_only",
    note: "Future priority ordering for operator focus.",
  },
  {
    hook: "impact_score",
    status: "metadata_only",
    note: "Future estimate of business impact per issue or proposal.",
  },
  {
    hook: "risk_insight",
    status: "metadata_only",
    note: "Future risk framing for review and approval decisions.",
  },
  {
    hook: "support_status",
    status: "metadata_only",
    note: "Future signal for support or escalation handling.",
  },
  {
    hook: "customer_value",
    status: "metadata_only",
    note: "Future value context for prioritizing review work.",
  },
  {
    hook: "operator_roles",
    status: "metadata_only",
    note: "Future role-based review visibility or filtering.",
  },
  {
    hook: "audit_retention",
    status: "metadata_only",
    note: "Future retention policy metadata for audit traces.",
  },
  {
    hook: "approval_history",
    status: "metadata_only",
    note: "Future historical approval context for repeat reviews.",
  },
  {
    hook: "rollback_undo_preparation",
    status: "metadata_only",
    note: "Future metadata for safe undo preparation.",
  },
  {
    hook: "woocommerce_execution_later",
    status: "metadata_only",
    note: "Future execution routing can stay separate from this mock.",
  },
  {
    hook: "ai_proposal_text_later",
    status: "metadata_only",
    note: "Future AI text generation stays outside this read-only mock.",
  },
  {
    hook: "nautilus_cockpit_view_later",
    status: "metadata_only",
    note: "Future cockpit presentation can consume the same overview shape.",
  },
  {
    hook: "nemo_commerce_positioning_later",
    status: "metadata_only",
    note: "Future positioning metadata can be added without changing runtime behavior.",
  },
];

function clone<T>(value: T): T {
  return structuredClone(value);
}

export function createMockScanToReviewFlow(): MockScanToReviewFlow {
  return {
    service: "sam-health-checker",
    mode: "mock_flow",
    status: "completed",
    version: "0.1.0",
    flow_id: "mock_flow_001",
    summary: {
      scan_status: "completed",
      issues_found: issues.length,
      proposals_previewed: proposalPreviews.length,
      review_items: reviewQueue.length,
      approval_required: true,
    },
    scan: clone(mockScan),
    issues: clone(issues),
    proposal_previews: clone(proposalPreviews),
    review_queue: clone(reviewQueue),
    approval_policy: clone(approvalPolicy),
    audit_trail_preview: clone(auditTrailPreview),
    safety: clone(safetyPolicy),
    next_step:
      "Next step can be a read-only operator review contract or a scan-to-review mock preview detail.",
  };
}

export function createMockScan(): MockScanResponse {
  return {
    service: "sam-health-checker",
    mode: "mock",
    status: "completed",
    source: "mock-scan",
    scan_id: mockScan.scan_id,
    shop: clone(mockScan.shop),
    checked_at: mockScan.checked_at,
    summary: {
      products_checked: 12,
      issues_found: issues.length,
      proposals_created: proposalPreviews.length,
      risk_level: mockScan.risk_level,
    },
    issues: clone(issues),
    proposals: [
      {
        proposal_id: "proposal_001",
        issue_id: "issue_001",
        action: "request_product_image",
        summary: "Add a primary product image before publication review.",
      },
      {
        proposal_id: "proposal_002",
        issue_id: "issue_002",
        action: "draft_short_description",
        summary: "Prepare a short commercial description for manual review.",
      },
      {
        proposal_id: "proposal_003",
        issue_id: "issue_003",
        action: "suggest_product_tags",
        summary: "Prepare a starter tag set for operator approval.",
      },
      {
        proposal_id: "proposal_004",
        issue_id: "issue_004",
        action: "expand_long_description",
        summary: "Propose a richer long description structure for review.",
      },
    ],
    safety: {
      database: "not_used",
      woocommerce: "not_connected",
      prisma: "not_used",
      secrets: "not_required",
      write_actions: "disabled",
    },
    next_step: "Next step can be a proposal contract or issue classification route.",
  };
}

export function createMockOperatorOverview(): MockOperatorOverview {
  return {
    service: "sam-health-checker",
    mode: "mock_overview",
    status: "completed",
    version: "0.1.0",
    overview_id: "overview_001",
    scan_summary: {
      source_scan_id: mockScan.scan_id,
      source_flow_id: "mock_flow_001",
      source_route: "/api/health-checker/mock-scan-to-review-flow",
      status: "completed",
      checked_at: mockScan.checked_at,
      products_checked: 4,
      issues_found: issues.length,
      proposals_previewed: proposalPreviews.length,
      review_items: reviewQueue.length,
      risk_level: mockScan.risk_level,
    },
    issues: clone(issues),
    proposal_previews: clone(proposalPreviews),
    review_queue: clone(reviewQueue),
    approval_policy: clone(approvalPolicy),
    audit_trail_preview: clone(auditTrailPreview),
    safety: clone(safetyPolicy),
    future_extension_hooks: clone(futureExtensionHooks),
    next_step:
      "Next step can be a read-only operator overview panel mapping or a cockpit wireframe.",
  };
}

export function createMockProposalPreview(): MockProposalPreview {
  return {
    service: "sam-health-checker",
    mode: "mock_preview",
    status: "completed",
    version: "0.1.0",
    source_scan_id: mockScan.scan_id,
    summary: {
      issues_found: issues.length,
      proposals_previewed: proposalPreviews.length,
      requires_human_approval: true,
      auto_execute_allowed: false,
      write_actions: "disabled",
    },
    proposal_previews: clone(proposalPreviews),
    approval_flow: {
      human_approval_required: true,
      bulk_approval_allowed: false,
      auto_execute_allowed: false,
      default_status: "ready_for_review",
    },
    safety: clone(safetyPolicy),
    next_step:
      "Next step can be proposal preview detail or operator review contract.",
  };
}

export function createMockOperatorReviewPreview(): MockOperatorReviewPreview {
  return {
    service: "sam-health-checker",
    mode: "mock_preview",
    status: "completed",
    version: "0.1.0",
    source: "mock-operator-review-preview",
    summary: {
      review_items: reviewQueue.length,
      requires_human_review: true,
      auto_approval_allowed: false,
      auto_execute_allowed: false,
      write_actions: "disabled",
    },
    review_queue: clone(reviewQueue),
    review_policy: {
      human_review_required: true,
      auto_approval_allowed: false,
      auto_execute_allowed: false,
      bulk_approval_allowed: false,
      default_next_status: "ready_for_review",
    },
    safety: clone(safetyPolicy),
    next_step:
      "Next step can be approval-flow contract or review decision mock.",
  };
}

export function createMockAuditLogPreview(): MockAuditLogPreview {
  return {
    service: "sam-health-checker",
    mode: "mock_preview",
    status: "completed",
    version: "0.1.0",
    source: "mock-audit-log-preview",
    summary: {
      audit_events_previewed: 7,
      human_decision_events: 3,
      system_events: 4,
      runtime_logging: "disabled",
      database: "not_used",
    },
    audit_trail: clone([
      {
        event_id: "audit_001",
        event_type: "scan_started",
        timestamp: "2026-06-14T00:00:00.000Z",
        actor_type: "system",
        actor_id: "system",
        scan_id: "mock_scan_001",
        issue_id: null,
        proposal_id: null,
        action: "start",
        previous_status: "idle",
        new_status: "running",
        reason: "A mock scan begins for audit preview purposes.",
        source_endpoint: "/api/health-checker/mock-scan",
        risk_note: "Start events must avoid sensitive runtime payloads.",
      },
      {
        event_id: "audit_002",
        event_type: "issue_detected",
        timestamp: "2026-06-14T00:01:00.000Z",
        actor_type: "system",
        actor_id: "system",
        scan_id: "mock_scan_001",
        issue_id: "issue_001",
        proposal_id: null,
        action: "flag",
        previous_status: "running",
        new_status: "issue_found",
        reason: "A missing product image was detected in the mock trail.",
        source_endpoint: "/api/health-checker/mock-scan",
        risk_note: "Issue traces must remain source-aware and reviewable.",
      },
      {
        event_id: "audit_003",
        event_type: "proposal_previewed",
        timestamp: "2026-06-14T00:02:00.000Z",
        actor_type: "system",
        actor_id: "system",
        scan_id: "mock_scan_001",
        issue_id: "issue_001",
        proposal_id: "preview_001",
        action: "preview",
        previous_status: "issue_found",
        new_status: "preview_ready",
        reason: "A proposal preview is prepared for operator review.",
        source_endpoint: "/api/health-checker/mock-proposal-preview",
        risk_note: "Preview traces should not imply execution or approval.",
      },
      {
        event_id: "audit_004",
        event_type: "operator_review_opened",
        timestamp: "2026-06-14T00:03:00.000Z",
        actor_type: "operator",
        actor_id: "operator_001",
        scan_id: "mock_scan_001",
        issue_id: "issue_001",
        proposal_id: "preview_001",
        action: "open_review",
        previous_status: "preview_ready",
        new_status: "ready_for_review",
        reason: "A human reviewer opens the preview for inspection.",
        source_endpoint: "/api/health-checker/operator-review-preview",
        risk_note: "Operator review traces support accountability and auditability.",
      },
      {
        event_id: "audit_005",
        event_type: "proposal_approval_previewed",
        timestamp: "2026-06-14T00:04:00.000Z",
        actor_type: "operator",
        actor_id: "operator_001",
        scan_id: "mock_scan_001",
        issue_id: "issue_001",
        proposal_id: "preview_001",
        action: "approve",
        previous_status: "ready_for_review",
        new_status: "approved",
        reason:
          "The operator approval is represented as a mock contract preview.",
        source_endpoint: "/api/health-checker/approval-flow-contract",
        risk_note:
          "Previewed approval does not imply runtime approval or execution.",
      },
      {
        event_id: "audit_006",
        event_type: "execution_blocked",
        timestamp: "2026-06-14T00:05:00.000Z",
        actor_type: "system",
        actor_id: "system",
        scan_id: "mock_scan_001",
        issue_id: "issue_001",
        proposal_id: "preview_001",
        action: "block_execution",
        previous_status: "approved",
        new_status: "blocked",
        reason: "Execution remains blocked because runtime execution is disabled.",
        source_endpoint: "/api/health-checker/approval-flow-contract",
        risk_note: "Blocked execution events must never expose secrets or raw credentials.",
      },
      {
        event_id: "audit_007",
        event_type: "proposal_rejection_previewed",
        timestamp: "2026-06-14T00:06:00.000Z",
        actor_type: "operator",
        actor_id: "operator_001",
        scan_id: "mock_scan_001",
        issue_id: "issue_002",
        proposal_id: "preview_002",
        action: "reject",
        previous_status: "ready_for_review",
        new_status: "rejected",
        reason:
          "The rejection is represented as a mock operator-review preview.",
        source_endpoint: "/api/health-checker/operator-review-preview",
        risk_note:
          "Previewed rejection keeps operator reasoning traceable without runtime writes.",
      },
    ]),
    compliance_preview: {
      gdpr_data_minimization: true,
      avoid_sensitive_raw_data: true,
      operator_traceability: true,
      ai_transparency_ready: true,
      retention_policy_required_later: true,
    },
    safety: clone(safetyPolicy),
    next_step:
      "Next step can be contract-layer review or route inventory.",
  };
}

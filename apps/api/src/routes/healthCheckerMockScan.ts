import type { FastifyInstance } from "fastify";

export function registerHealthCheckerMockScanRoute(app: FastifyInstance) {
  app.get("/api/health-checker/mock-scan", async () => ({
    service: "sam-health-checker",
    mode: "mock",
    status: "completed",
    scan_id: "mock_scan_001",
    shop: {
      platform: "woocommerce",
      name: "Demo Webshop",
      url: "https://example.test",
    },
    checked_at: "2026-06-14T10:00:00.000Z",
    summary: {
      products_checked: 12,
      issues_found: 4,
      proposals_created: 4,
      risk_level: "medium",
    },
    issues: [
      {
        issue_id: "issue_001",
        product_sku: "DEMO-001",
        type: "product_image_check",
        status: "open",
        message: "Primary product image is missing.",
      },
      {
        issue_id: "issue_002",
        product_sku: "DEMO-002",
        type: "short_description_check",
        status: "open",
        message: "Short description is missing.",
      },
      {
        issue_id: "issue_003",
        product_sku: "DEMO-003",
        type: "tag_check",
        status: "open",
        message: "Product tags are missing.",
      },
      {
        issue_id: "issue_004",
        product_sku: "DEMO-004",
        type: "long_description_check",
        status: "open",
        message: "Long description is too short.",
      },
    ],
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
  }));
}

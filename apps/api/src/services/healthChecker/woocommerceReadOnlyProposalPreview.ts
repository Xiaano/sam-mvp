import {
  getWooCommerceReadOnlyProductScanV0,
  type WooCommerceReadOnlyDetectedIssue,
  type WooCommerceReadOnlyProductScanV0,
} from "../../connectors/woocommerceReadOnlyAdapter.js";

type WooCommerceReadOnlyProposalType =
  | "add_product_image_review"
  | "create_short_description_review"
  | "create_long_description_review"
  | "add_tags_review"
  | "assign_category_review"
  | "review_publication_status";

type WooCommerceReadOnlyProposalTargetField =
  | "images"
  | "short_description"
  | "description"
  | "tags"
  | "categories"
  | "status";

type WooCommerceReadOnlyProposalPreview = {
  proposalId: string;
  sourceIssueId: string;
  productId: string | number;
  sku: string;
  issueType: WooCommerceReadOnlyDetectedIssue["type"];
  proposalType: WooCommerceReadOnlyProposalType;
  targetField: WooCommerceReadOnlyProposalTargetField;
  currentState: "preview_only";
  proposedValue: null;
  proposalValueStatus: "not_generated";
  requiresHumanReview: true;
  autoExecuteAllowed: false;
  writeScopeEnabled: false;
  summary: string;
  sourceProvenance: {
    sourceType: "webshop_existing_data";
    sourceName: "WooCommerce staging product scan V0";
    sourceReference: string;
    sourceConfidence: "high";
    evidenceReference: string;
    aiGenerated: false;
    sourceUnknown: false;
    requiresHumanReview: true;
    targetField: WooCommerceReadOnlyProposalTargetField;
    proposedValue: null;
  };
};

type WooCommerceReadOnlyProposalPreviewResponse = {
  service: string;
  mode: "read-only";
  source: "woocommerce_staging";
  status: WooCommerceReadOnlyProductScanV0["status"];
  timestamp: string;
  sourceScanStatus: WooCommerceReadOnlyProductScanV0["status"];
  issuesRead: number;
  proposalsCreated: number;
  proposals: WooCommerceReadOnlyProposalPreview[];
  woocommerceApiCalled: boolean;
  productDataReturned: boolean;
  proposalDataReturned: true;
  secretsExposed: false;
  autoExecuteAllowed: false;
  writeScopeEnabled: false;
  aiUsed: false;
  databaseWritten: false;
  nextStep: WooCommerceReadOnlyProductScanV0["status"] | "ready_for_operator_review";
};

const issueProposalMapping: Record<
  WooCommerceReadOnlyDetectedIssue["type"],
  {
    proposalType: WooCommerceReadOnlyProposalType;
    targetField: WooCommerceReadOnlyProposalTargetField;
    summary: string;
  }
> = {
  missing_image: {
    proposalType: "add_product_image_review",
    targetField: "images",
    summary: "Review missing product image. No image is generated in this preview.",
  },
  missing_short_description: {
    proposalType: "create_short_description_review",
    targetField: "short_description",
    summary: "Review missing short description. No copy is generated in this preview.",
  },
  missing_long_description: {
    proposalType: "create_long_description_review",
    targetField: "description",
    summary: "Review missing long description. No copy is generated in this preview.",
  },
  missing_tags: {
    proposalType: "add_tags_review",
    targetField: "tags",
    summary: "Review missing product tags. No tags are generated in this preview.",
  },
  missing_category: {
    proposalType: "assign_category_review",
    targetField: "categories",
    summary: "Review missing product category. No category is assigned in this preview.",
  },
  non_publish_status: {
    proposalType: "review_publication_status",
    targetField: "status",
    summary: "Review product publication status. No status change is generated in this preview.",
  },
};

function toProposalPreview(
  issue: WooCommerceReadOnlyDetectedIssue,
  index: number,
): WooCommerceReadOnlyProposalPreview {
  const mapping = issueProposalMapping[issue.type];
  const sourceReference = `${issue.issueId}/${String(issue.productId)}/${issue.sku || "no_sku"}`;

  return {
    proposalId: `wc_proposal_preview_${String(index + 1).padStart(3, "0")}`,
    sourceIssueId: issue.issueId,
    productId: issue.productId,
    sku: issue.sku,
    issueType: issue.type,
    proposalType: mapping.proposalType,
    targetField: mapping.targetField,
    currentState: "preview_only",
    proposedValue: null,
    proposalValueStatus: "not_generated",
    requiresHumanReview: true,
    autoExecuteAllowed: false,
    writeScopeEnabled: false,
    summary: mapping.summary,
    sourceProvenance: {
      sourceType: "webshop_existing_data",
      sourceName: "WooCommerce staging product scan V0",
      sourceReference,
      sourceConfidence: "high",
      evidenceReference: issue.issueId,
      aiGenerated: false,
      sourceUnknown: false,
      requiresHumanReview: true,
      targetField: mapping.targetField,
      proposedValue: null,
    },
  };
}

function createProposalPreviewResponse(
  sourceScan: WooCommerceReadOnlyProductScanV0,
  proposals: WooCommerceReadOnlyProposalPreview[],
): WooCommerceReadOnlyProposalPreviewResponse {
  const previewReady = sourceScan.status === "scan_completed";

  return {
    service: "sam-health-checker",
    mode: "read-only",
    source: "woocommerce_staging",
    status: sourceScan.status,
    timestamp: new Date().toISOString(),
    sourceScanStatus: sourceScan.status,
    issuesRead: sourceScan.issues.length,
    proposalsCreated: proposals.length,
    proposals,
    woocommerceApiCalled: sourceScan.woocommerceApiCalled,
    productDataReturned: sourceScan.productDataReturned,
    proposalDataReturned: true,
    secretsExposed: false,
    autoExecuteAllowed: false,
    writeScopeEnabled: false,
    aiUsed: false,
    databaseWritten: false,
    nextStep: previewReady ? "ready_for_operator_review" : sourceScan.nextStep,
  };
}

export async function getWooCommerceReadOnlyProposalPreviewV0() {
  const sourceScan = await getWooCommerceReadOnlyProductScanV0();

  if (sourceScan.status !== "scan_completed") {
    return createProposalPreviewResponse(sourceScan, []);
  }

  const proposals = sourceScan.issues.map(toProposalPreview);

  return createProposalPreviewResponse(sourceScan, proposals);
}

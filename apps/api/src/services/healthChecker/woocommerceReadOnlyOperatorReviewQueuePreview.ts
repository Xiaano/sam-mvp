import { getWooCommerceReadOnlyProposalPreviewV0 } from "./woocommerceReadOnlyProposalPreview.js";

type WooCommerceReadOnlyProposalPreviewResponse = Awaited<
  ReturnType<typeof getWooCommerceReadOnlyProposalPreviewV0>
>;

type WooCommerceReadOnlyProposalPreview =
  WooCommerceReadOnlyProposalPreviewResponse["proposals"][number];

type ReviewAction =
  | "approve"
  | "reject"
  | "hold"
  | "request_changes"
  | "needs_more_context";

type WooCommerceReadOnlyOperatorReviewQueueItem = {
  queueItemId: string;
  proposalId: string;
  sourceIssueId: string;
  productId: string | number;
  sku: string;
  issueType: WooCommerceReadOnlyProposalPreview["issueType"];
  proposalType: WooCommerceReadOnlyProposalPreview["proposalType"];
  targetField: WooCommerceReadOnlyProposalPreview["targetField"];
  reviewStatus: "ready_for_review";
  recommendedAction: ReviewAction;
  availableActions: ReviewAction[];
  requiresHumanReview: true;
  requiresHumanApproval: true;
  autoExecuteAllowed: false;
  writeScopeEnabled: false;
  sourceProvenance: WooCommerceReadOnlyProposalPreview["sourceProvenance"];
  createdAt: string;
  updatedAt: string;
};

type WooCommerceReadOnlyOperatorReviewQueuePreviewResponse = {
  service: string;
  mode: "read-only";
  source: "woocommerce_staging";
  status: WooCommerceReadOnlyProposalPreviewResponse["status"];
  timestamp: string;
  sourceScanStatus: WooCommerceReadOnlyProposalPreviewResponse["sourceScanStatus"];
  sourceProposalPreviewStatus: WooCommerceReadOnlyProposalPreviewResponse["status"];
  proposalsRead: number;
  queueItemsCreated: number;
  reviewQueue: WooCommerceReadOnlyOperatorReviewQueueItem[];
  woocommerceApiCalled: boolean;
  productDataReturned: boolean;
  proposalDataReturned: boolean;
  operatorReviewQueueReturned: true;
  writeScopeEnabled: false;
  secretsExposed: false;
  autoExecuteAllowed: false;
  aiUsed: false;
  databaseWritten: false;
  nextStep: string;
};

const availableReviewActions: ReviewAction[] = [
  "approve",
  "reject",
  "hold",
  "request_changes",
  "needs_more_context",
];

function getRecommendedAction(
  proposal: WooCommerceReadOnlyProposalPreview,
): ReviewAction {
  if (
    proposal.proposedValue === null ||
    proposal.proposalValueStatus === "not_generated"
  ) {
    return "needs_more_context";
  }

  return "request_changes";
}

function toReviewQueueItem(
  proposal: WooCommerceReadOnlyProposalPreview,
  index: number,
  timestamp: string,
): WooCommerceReadOnlyOperatorReviewQueueItem {
  return {
    queueItemId: `wc_review_queue_${String(index + 1).padStart(3, "0")}`,
    proposalId: proposal.proposalId,
    sourceIssueId: proposal.sourceIssueId,
    productId: proposal.productId,
    sku: proposal.sku,
    issueType: proposal.issueType,
    proposalType: proposal.proposalType,
    targetField: proposal.targetField,
    reviewStatus: "ready_for_review",
    recommendedAction: getRecommendedAction(proposal),
    availableActions: [...availableReviewActions],
    requiresHumanReview: true,
    requiresHumanApproval: true,
    autoExecuteAllowed: false,
    writeScopeEnabled: false,
    sourceProvenance: proposal.sourceProvenance,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export async function getWooCommerceReadOnlyOperatorReviewQueuePreview() {
  const proposalPreview = await getWooCommerceReadOnlyProposalPreviewV0();
  const timestamp = new Date().toISOString();
  const reviewQueue = proposalPreview.proposals.map((proposal, index) =>
    toReviewQueueItem(proposal, index, timestamp),
  );

  return {
    service: "sam-health-checker",
    mode: "read-only",
    source: "woocommerce_staging",
    status: proposalPreview.status,
    timestamp,
    sourceScanStatus: proposalPreview.sourceScanStatus,
    sourceProposalPreviewStatus: proposalPreview.status,
    proposalsRead: proposalPreview.proposals.length,
    queueItemsCreated: reviewQueue.length,
    reviewQueue,
    woocommerceApiCalled: proposalPreview.woocommerceApiCalled,
    productDataReturned: proposalPreview.productDataReturned,
    proposalDataReturned: proposalPreview.proposalDataReturned,
    operatorReviewQueueReturned: true,
    writeScopeEnabled: false,
    secretsExposed: false,
    autoExecuteAllowed: false,
    aiUsed: false,
    databaseWritten: false,
    nextStep:
      reviewQueue.length > 0
        ? "ready_for_operator_review_queue_preview"
        : proposalPreview.nextStep,
  } satisfies WooCommerceReadOnlyOperatorReviewQueuePreviewResponse;
}

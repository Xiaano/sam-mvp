import Fastify from "fastify";

import { registerDiagnosticsRoute } from "./routes/diagnostics.js";
import { registerHealthRoute } from "./routes/health.js";
import { registerHealthCheckerApprovalFlowContractRoute } from "./routes/healthCheckerApprovalFlowContract.js";
import { registerHealthCheckerIssueClassificationRoute } from "./routes/healthCheckerIssueClassification.js";
import { registerHealthCheckerIssueProposalMappingRoute } from "./routes/healthCheckerIssueProposalMapping.js";
import { registerHealthCheckerMockProposalPreviewRoute } from "./routes/healthCheckerMockProposalPreview.js";
import { registerHealthCheckerMockScanRoute } from "./routes/healthCheckerMockScan.js";
import { registerHealthCheckerOperatorReviewContractRoute } from "./routes/healthCheckerOperatorReviewContract.js";
import { registerHealthCheckerOperatorReviewPreviewRoute } from "./routes/healthCheckerOperatorReviewPreview.js";
import { registerHealthCheckerProposalContractRoute } from "./routes/healthCheckerProposalContract.js";
import { registerHealthCheckerReadinessRoute } from "./routes/healthCheckerReadiness.js";

export function createApiServer() {
  const app = Fastify({
    logger: false,
  });

  registerHealthRoute(app);
  registerDiagnosticsRoute(app);
  registerHealthCheckerApprovalFlowContractRoute(app);
  registerHealthCheckerReadinessRoute(app);
  registerHealthCheckerMockScanRoute(app);
  registerHealthCheckerIssueClassificationRoute(app);
  registerHealthCheckerProposalContractRoute(app);
  registerHealthCheckerIssueProposalMappingRoute(app);
  registerHealthCheckerMockProposalPreviewRoute(app);
  registerHealthCheckerOperatorReviewContractRoute(app);
  registerHealthCheckerOperatorReviewPreviewRoute(app);

  return app;
}

-- CreateEnum
CREATE TYPE "IssueStatus" AS ENUM ('NEW', 'REVIEWED', 'PARKED', 'SENT_TO_WEBSHOPBEHEER', 'RESOLVED');

-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('PREVIEW_READY', 'APPROVED', 'REJECTED', 'PARKED', 'MANUAL_REVIEW_REQUIRED', 'EXECUTING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "ExecutionStatus" AS ENUM ('PENDING', 'EXECUTING', 'COMPLETED', 'FAILED', 'MANUAL_REVIEW_REQUIRED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "SourceConfidence" AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'AI_CONCEPT');

-- CreateEnum
CREATE TYPE "UserDecisionType" AS ENUM ('APPROVE', 'REJECT', 'PARK', 'MANUAL_REVIEW');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "platform" TEXT,
    "externalId" TEXT,
    "externalRef" TEXT,
    "name" TEXT NOT NULL,
    "sku" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScanRun" (
    "id" TEXT NOT NULL,
    "runLabel" TEXT,
    "scope" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScanRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "scanRunId" TEXT,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT,
    "priority" "Priority" NOT NULL,
    "status" "IssueStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "issueId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rationale" TEXT,
    "status" "ProposalStatus" NOT NULL,
    "sourceConfidence" "SourceConfidence" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "productId" TEXT,
    "actionType" TEXT NOT NULL,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDecision" (
    "id" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "operatorId" TEXT NOT NULL,
    "decisionType" "UserDecisionType" NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDecision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Execution" (
    "id" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "actionId" TEXT,
    "operatorId" TEXT,
    "status" "ExecutionStatus" NOT NULL,
    "resultSummary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Execution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoryItem" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "message" TEXT,
    "operatorId" TEXT,
    "scanRunId" TEXT,
    "issueId" TEXT,
    "proposalId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SourceData" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "proposalId" TEXT,
    "sourceType" TEXT NOT NULL,
    "sourceLabel" TEXT,
    "contentSummary" TEXT,
    "sourceConfidence" "SourceConfidence" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SourceData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operator" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "email" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Product_platform_externalId_idx" ON "Product"("platform", "externalId");

-- CreateIndex
CREATE INDEX "Product_sku_idx" ON "Product"("sku");

-- CreateIndex
CREATE INDEX "Issue_productId_idx" ON "Issue"("productId");

-- CreateIndex
CREATE INDEX "Issue_scanRunId_idx" ON "Issue"("scanRunId");

-- CreateIndex
CREATE INDEX "Issue_status_idx" ON "Issue"("status");

-- CreateIndex
CREATE INDEX "Issue_priority_idx" ON "Issue"("priority");

-- CreateIndex
CREATE INDEX "Proposal_issueId_idx" ON "Proposal"("issueId");

-- CreateIndex
CREATE INDEX "Proposal_status_idx" ON "Proposal"("status");

-- CreateIndex
CREATE INDEX "Action_proposalId_idx" ON "Action"("proposalId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDecision_proposalId_key" ON "UserDecision"("proposalId");

-- CreateIndex
CREATE INDEX "UserDecision_operatorId_idx" ON "UserDecision"("operatorId");

-- CreateIndex
CREATE INDEX "Execution_proposalId_idx" ON "Execution"("proposalId");

-- CreateIndex
CREATE INDEX "Execution_actionId_idx" ON "Execution"("actionId");

-- CreateIndex
CREATE INDEX "Execution_status_idx" ON "Execution"("status");

-- CreateIndex
CREATE INDEX "HistoryItem_entityType_entityId_idx" ON "HistoryItem"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "HistoryItem_operatorId_idx" ON "HistoryItem"("operatorId");

-- CreateIndex
CREATE INDEX "HistoryItem_scanRunId_idx" ON "HistoryItem"("scanRunId");

-- CreateIndex
CREATE INDEX "HistoryItem_issueId_idx" ON "HistoryItem"("issueId");

-- CreateIndex
CREATE INDEX "HistoryItem_proposalId_idx" ON "HistoryItem"("proposalId");

-- CreateIndex
CREATE INDEX "SourceData_productId_idx" ON "SourceData"("productId");

-- CreateIndex
CREATE INDEX "SourceData_proposalId_idx" ON "SourceData"("proposalId");

-- CreateIndex
CREATE INDEX "SourceData_sourceConfidence_idx" ON "SourceData"("sourceConfidence");

-- CreateIndex
CREATE INDEX "Operator_email_idx" ON "Operator"("email");

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_scanRunId_fkey" FOREIGN KEY ("scanRunId") REFERENCES "ScanRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDecision" ADD CONSTRAINT "UserDecision_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDecision" ADD CONSTRAINT "UserDecision_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Execution" ADD CONSTRAINT "Execution_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Execution" ADD CONSTRAINT "Execution_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryItem" ADD CONSTRAINT "HistoryItem_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryItem" ADD CONSTRAINT "HistoryItem_scanRunId_fkey" FOREIGN KEY ("scanRunId") REFERENCES "ScanRun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryItem" ADD CONSTRAINT "HistoryItem_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryItem" ADD CONSTRAINT "HistoryItem_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceData" ADD CONSTRAINT "SourceData_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SourceData" ADD CONSTRAINT "SourceData_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

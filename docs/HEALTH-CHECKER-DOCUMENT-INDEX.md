# SAM Health Checker Document Index

## Purpose

This index is a navigation aid only. It does not replace the original documents and must not become a second source of truth.

If this index conflicts with any source, the original document remains leading.

No documents have been moved, renamed, merged, or removed to create this index.

## 1. Status and central overviews

- `docs/HEALTH-CHECKER-MILESTONE-SUMMARY.md` | `summary` | Central phase overview and current milestone context | `active` | Links the Health Checker workstreams and completed phases.
- `docs/HEALTH-CHECKER-CONTRACT-MOCK-READINESS-PHASE-CLOSURE.md` | `phase closure` | Closes the contract + mock readiness phase | `reference` | Boundary between mock/contract readiness and later governance work.
- `docs/HEALTH-CHECKER-GOVERNANCE-PERSISTENCE-BOUNDARY-PHASE-CLOSURE.md` | `phase closure` | Closes the governance/persistence-boundary chain | `reference` | Boundary for persistence, data, source, classification, access, audit, execution.

## 2. Contract layer and contract reviews

- `docs/HEALTH-CHECKER-CONTRACT-LAYER-REVIEW.md` | `review` | Inventory of contract routes and contract-layer consistency | `historical/audit` | Early contract-layer overview and route inventory.
- `docs/HEALTH-CHECKER-CONTRACT-CONSOLIDATION-PLAN.md` | `plan` | Notes possible later shared contract consolidation | `reference` | Prevents premature refactor.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-READINESS-REVIEW.md` | `review` | Confirms contract routes are still static and shape-readable | `historical/audit` | Readiness gate before contract-shape tests.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-TEST-STRATEGY.md` | `strategy` | Describes minimal contract-shape test scope | `reference` | Shape/metadata-only testing guidance.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-TEST-IMPLEMENTATION-DECISION.md` | `decision` | Approves later minimal contract-shape test implementation | `reference` | Micro-scope gate for contract-shape checks.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-CHECKS-IMPLEMENTATION-REVIEW.md` | `review` | Reviews the implemented contract-shape checks | `historical/audit` | Confirms checked routes and validation path.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-TEST-STRATEGY.md` | `strategy` | Contract-shape testing strategy | `reference` | Contract-vs-runtime separation.

## 3. Mock runtime/service and service adoption

- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-DESIGN.md` | `design` | Designs the in-memory/mock runtime service | `historical/audit` | Mock runtime foundation.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-IMPLEMENTATION-DECISION.md` | `decision` | Decides to allow mock runtime service implementation | `reference` | Go/no-go for mock runtime service.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-V1-DECISION.md` | `decision` | Closes mock runtime service v1 | `reference` | Marks v1 as complete.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-V1-STABILITY-REVIEW.md` | `review` | Confirms v1 is stable enough without shared helper | `historical/audit` | Stability gate.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-REFACTOR-THRESHOLD-DECISION.md` | `decision` | Defines when refactor/helper becomes justified | `reference` | Drift threshold.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-ROUTE-ADOPTION-DECISION.md` | `decision` | Decides mock routes may adopt the service | `reference` | Route-adoption gate.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-ROUTE-ADOPTION-REVIEW.md` | `review` | Reviews route adoption of the mock runtime service | `historical/audit` | Confirms thin routes.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-ROUTE-ADOPTION-REVIEW.md` | `review` | Route adoption review | `historical/audit` | Service adoption review.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-V1-STABILITY-REVIEW.md` | `review` | Service stability review | `historical/audit` | Readability/stability gate.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-POST-ADOPTION-READABILITY-REVIEW.md` | `review` | Reviews readability after route adoption | `historical/audit` | Post-adoption maintainability.

## 4. Mock routes and route adoption reviews

- `docs/HEALTH-CHECKER-NEXT-MOCK-SCAN-SERVICE-ADOPTION-DECISION.md` | `decision` | Selects mock-scan as next service-adoption candidate | `reference` | Next-step gate for mock scan.
- `docs/HEALTH-CHECKER-MOCK-SCAN-SERVICE-ADOPTION-REVIEW.md` | `review` | Reviews mock-scan service adoption | `historical/audit` | Confirms mock-scan service-driven.
- `docs/HEALTH-CHECKER-MOCK-PROPOSAL-PREVIEW-SERVICE-ADOPTION-REVIEW.md` | `review` | Reviews proposal-preview service adoption | `historical/audit` | Confirms proposal preview service-driven.
- `docs/HEALTH-CHECKER-NEXT-OPERATOR-REVIEW-SERVICE-ADOPTION-DECISION.md` | `decision` | Selects operator-review-preview as next candidate | `reference` | Next-step gate for operator review preview.
- `docs/HEALTH-CHECKER-OPERATOR-REVIEW-PREVIEW-SERVICE-ADOPTION-REVIEW.md` | `review` | Reviews operator-review-preview service adoption | `historical/audit` | Confirms operator review preview service-driven.
- `docs/HEALTH-CHECKER-NEXT-AUDIT-LOG-PREVIEW-SERVICE-ADOPTION-DECISION.md` | `decision` | Selects audit-log-preview as next candidate | `reference` | Next-step gate for audit-log preview.
- `docs/HEALTH-CHECKER-AUDIT-LOG-PREVIEW-SERVICE-ADOPTION-REVIEW.md` | `review` | Reviews audit-log-preview service adoption | `historical/audit` | Confirms audit-log preview service-driven.
- `docs/HEALTH-CHECKER-NEXT-SERVICE-DRIVEN-MOCK-RESPONSE-DECISION.md` | `decision` | Decides next service-driven mock response route | `reference` | Adopts service-driven preview route.
- `docs/HEALTH-CHECKER-SERVICE-DRIVEN-MOCK-ADOPTION-PHASE-REVIEW.md` | `review` | Reviews the completed service-driven mock adoption phase | `historical/audit` | Summarizes the service-driven mock phase.
- `docs/HEALTH-CHECKER-SERVICE-DRIVEN-MOCK-ROUTE-INVENTORY.md` | `inventory` | Inventories mock/read-only routes and next candidate | `historical/audit` | Route sequencing and adoption selection.
- `docs/HEALTH-CHECKER-MOCK-SCAN-TO-REVIEW-FLOW-REVIEW.md` | `review` | Reviews the mock scan-to-review flow | `historical/audit` | Flow-level mock composition review.
- `docs/HEALTH-CHECKER-OPERATOR-OVERVIEW-DESIGN.md` | `design` | Designs the future operator overview | `reference` | Operator cockpit/read-only panel design.
- `docs/HEALTH-CHECKER-OPERATOR-OVERVIEW-MOCK-REVIEW.md` | `review` | Reviews the operator overview mock | `historical/audit` | Confirms overview mock is read-only.
- `docs/HEALTH-CHECKER-OPERATOR-FLOW-READINESS-REVIEW.md` | `review` | Reviews the operator flow readiness | `historical/audit` | Readiness of operator flow and state semantics.

## 5. Checks, test strategy and runbooks

- `docs/HEALTH-CHECKER-MOCK-ENDPOINT-TEST-STRATEGY.md` | `strategy` | Defines minimal mock endpoint test scope | `reference` | Mock/runtime read-only tests.
- `docs/HEALTH-CHECKER-MOCK-ENDPOINT-TEST-IMPLEMENTATION-DECISION.md` | `decision` | Approves later minimal mock endpoint tests | `reference` | Micro-scope gate for mock endpoint checks.
- `docs/HEALTH-CHECKER-MOCK-ENDPOINT-CHECKS-IMPLEMENTATION-REVIEW.md` | `review` | Reviews implemented mock endpoint checks | `historical/audit` | Confirms current mock endpoint checks.
- `docs/HEALTH-CHECKER-MOCK-ENDPOINT-CHECK-RUNBOOK.md` | `runbook` | Runbook for running mock endpoint checks | `procedure` | Operational execution of the check script.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-TEST-STRATEGY.md` | `strategy` | Defines minimal contract-shape test scope | `reference` | Contract shape only.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-TEST-IMPLEMENTATION-DECISION.md` | `decision` | Approves later minimal contract-shape tests | `reference` | Micro-scope gate for contract shape checks.
- `docs/HEALTH-CHECKER-CONTRACT-SHAPE-CHECKS-IMPLEMENTATION-REVIEW.md` | `review` | Reviews implemented contract-shape checks | `historical/audit` | Confirms current contract-shape checks.
- `docs/HEALTH-CHECKER-CHECK-RUN-CONSOLIDATION-REVIEW.md` | `review` | Reviews both check sets together | `historical/audit` | Check-run governance and separation.

## 6. Governance, data and persistence boundaries

- `docs/HEALTH-CHECKER-PERSISTENCE-READINESS-REVIEW.md` | `review` | Persistence readiness gate | `historical/audit` | Persistence not yet allowed.
- `docs/HEALTH-CHECKER-DATA-MODEL-BOUNDARY-DECISION.md` | `decision` | Conceptual entity boundary for persistence | `reference` | Data model gate.
- `docs/HEALTH-CHECKER-RETENTION-DATA-MINIMIZATION-DECISION.md` | `decision` | Retention and minimization boundary | `reference` | Storage minimization gate.
- `docs/HEALTH-CHECKER-TENANT-CUSTOMER-SHOP-BOUNDARY-DECISION.md` | `decision` | Tenant/customer/shop boundary rules | `reference` | Prevents data mixing.
- `docs/HEALTH-CHECKER-SOURCE-SYSTEM-BOUNDARY-DECISION.md` | `decision` | Source system boundary rules | `reference` | Prevents source mixing.
- `docs/HEALTH-CHECKER-CANONICAL-MAPPING-DECISION.md` | `decision` | Canonical mapping boundary | `reference` | Raw to canonical translation gate.
- `docs/HEALTH-CHECKER-FIELD-LEVEL-MAPPING-DECISION.md` | `decision` | Field-level mapping boundary | `reference` | Field selection and minimization gate.
- `docs/HEALTH-CHECKER-DATA-CLASSIFICATION-DECISION.md` | `decision` | Data classification boundary | `reference` | Classification before persistence.
- `docs/HEALTH-CHECKER-ACCESS-CONTROL-BOUNDARY-DECISION.md` | `decision` | Access-control boundary | `reference` | Role/permission separation.
- `docs/HEALTH-CHECKER-AUDIT-LOGGING-POLICY-DECISION.md` | `decision` | Audit logging policy boundary | `reference` | Metadata-first audit policy.
- `docs/HEALTH-CHECKER-ACTOR-IDENTITY-BOUNDARY-DECISION.md` | `decision` | Actor identity boundary | `reference` | Actor identity and scope rules.
- `docs/HEALTH-CHECKER-REVIEW-APPROVAL-POLICY-DECISION.md` | `decision` | Review/approval policy boundary | `reference` | Review vs approval vs execution.
- `docs/HEALTH-CHECKER-EXECUTION-POLICY-BOUNDARY-DECISION.md` | `decision` | Execution policy boundary | `reference` | Execution disabled/blocking rules.
- `docs/HEALTH-CHECKER-ROLLBACK-UNDO-POLICY-DECISION.md` | `decision` | Rollback/undo policy boundary | `reference` | Recovery requirements before execution.
- `docs/HEALTH-CHECKER-GOVERNANCE-PERSISTENCE-BOUNDARY-PHASE-CLOSURE.md` | `phase closure` | Closes governance/persistence boundary chain | `reference` | Governance phase closure.

## 7. Phase closures

- `docs/HEALTH-CHECKER-CONTRACT-MOCK-READINESS-PHASE-CLOSURE.md` | `phase closure` | Closes contract + mock readiness | `reference` | Marks current contract/mock phase complete.
- `docs/HEALTH-CHECKER-GOVERNANCE-PERSISTENCE-BOUNDARY-PHASE-CLOSURE.md` | `phase closure` | Closes governance/persistence-boundary chain | `reference` | Marks governance/persistence phase complete.

## 8. Decisions that block or constrain future implementation

- `docs/HEALTH-CHECKER-NEXT-STEP-DECISION.md` | `decision` | Sets the next mock/runtime step | `reference` | Blocks random endpoint growth.
- `docs/HEALTH-CHECKER-NEXT-SERVICE-DRIVEN-MOCK-RESPONSE-DECISION.md` | `decision` | Sets the next service-driven mock route | `reference` | Keeps adoption staged.
- `docs/HEALTH-CHECKER-NEXT-MOCK-SCAN-SERVICE-ADOPTION-DECISION.md` | `decision` | Chooses mock-scan as a candidate | `reference` | Gate for mock-scan adoption.
- `docs/HEALTH-CHECKER-NEXT-AUDIT-LOG-PREVIEW-SERVICE-ADOPTION-DECISION.md` | `decision` | Chooses audit-log-preview as a candidate | `reference` | Gate for audit-log preview adoption.
- `docs/HEALTH-CHECKER-NEXT-OPERATOR-REVIEW-SERVICE-ADOPTION-DECISION.md` | `decision` | Chooses operator-review-preview as a candidate | `reference` | Gate for operator review preview adoption.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-REFACTOR-THRESHOLD-DECISION.md` | `decision` | Sets refactor threshold for mockRuntimeService | `reference` | Prevents premature refactor.
- `docs/HEALTH-CHECKER-MOCK-RUNTIME-SERVICE-V1-DECISION.md` | `decision` | Closes mock runtime service v1 | `reference` | Prevents uncontrolled growth.
- `docs/HEALTH-CHECKER-NEXT-SERVICE-DRIVEN-MOCK-RESPONSE-DECISION.md` | `decision` | Governs next service-driven mock response | `reference` | Keeps mock adoption incremental.

## Index rules

This index is only a navigation aid.

It does not replace source documents.

If an index entry and a source document conflict, the source document wins.

Documents with audit or decision value must not be removed or merged without a separate decision.

Further consolidation or restructuring requires a separate decision.

This step gives no permission for code, database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution or secrets.


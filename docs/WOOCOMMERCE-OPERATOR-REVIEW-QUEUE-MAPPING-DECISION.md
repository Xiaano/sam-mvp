# WooCommerce Operator Review Queue Mapping Decision

## Status

* Status: APPROVED DIRECTION / NOT IMPLEMENTED
* Scope: WooCommerce read-only proposal-preview to operator-review queue preview mapping
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled

## Doel

Dit document legt de micro-scope vast voor een toekomstige veilige mapping van WooCommerce read-only proposal-preview naar een operator-review queue preview.

Dit is nog geen echte review, approval, persistence of execution. De mapping mag later alleen helpen om bestaande read-only proposal-preview data als reviewbare queue-items te tonen.

## Huidige bewezen input

De WooCommerce read-only proposal-preview bevat per proposal:

* proposalId
* sourceIssueId
* productId
* sku
* issueType
* proposalType
* targetField
* currentState: preview_only
* proposedValue: null
* proposalValueStatus: not_generated
* requiresHumanReview: true
* autoExecuteAllowed: false
* writeScopeEnabled: false
* summary
* sourceProvenance

Top-level safety:

* writeScopeEnabled: false
* secretsExposed: false
* autoExecuteAllowed: false
* aiUsed: false
* databaseWritten: false

## Gewenste queue-preview output later

Een toekomstig queue-item heeft conceptueel minimaal nodig:

* queueItemId
* proposalId
* sourceIssueId
* productId
* sku
* issueType
* proposalType
* targetField
* reviewStatus
* recommendedAction
* availableActions
* requiresHumanReview
* requiresHumanApproval
* autoExecuteAllowed
* writeScopeEnabled
* sourceProvenance
* createdAt
* updatedAt

## Mappingregels

* proposalId blijft proposalId.
* sourceIssueId blijft de issue reference.
* productId en sku blijven de productreferentie.
* issueType, proposalType en targetField blijven de inhoudelijke classificatie.
* reviewStatus start als ready_for_review of preview_ready.
* recommendedAction mag alleen suggestief zijn.
* availableActions mogen alleen review-acties zijn zoals approve, reject, hold, request_changes en needs_more_context.
* approve mag nooit execution betekenen.
* proposedValue blijft null zolang er geen generatie, AI of tekstvoorstel is.
* proposalValueStatus blijft not_generated zolang er geen voorstelwaarde is gegenereerd.

## Ontbrekende velden / nog niet oplossen

* severity ontbreekt nog in de WooCommerce proposal-preview mapping.
* reviewerDecision, reviewerReason, reviewedBy en reviewedAt horen pas bij echte review-state.
* persistence, idempotency en audit trail worden nog niet geopend.
* Er komt geen database-write in deze mappingfase.

## Harde grenzen

* Geen automatische scan bij openen van operator review.
* Geen proposal-preview automatisch opnieuw draaien zonder operatoractie.
* Geen review, approval of execution.
* Geen database of Prisma.
* Geen write/rewrite naar WooCommerce.
* Geen AI-generatie.
* Geen secrets of credentials in queue-output.
* Mock/operator-review en WooCommerce stagingdata blijven duidelijk gescheiden.

## Kleinste toekomstige implementatiestap

Een read-only mapping endpoint of service mag later alleen bestaande WooCommerce proposal-preview output transformeren naar queue-preview shape.

Die stap mag geen persistence, approval, execution, AI of write-scope toevoegen.

Runtime moet expliciet safety flags teruggeven:

* writeScopeEnabled: false
* secretsExposed: false
* autoExecuteAllowed: false
* aiUsed: false
* databaseWritten: false

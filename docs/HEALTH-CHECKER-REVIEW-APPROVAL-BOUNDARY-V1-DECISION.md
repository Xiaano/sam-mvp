# Health Checker Review Approval Boundary V1 Decision

## Status

* Status: APPROVED DIRECTION / NOT IMPLEMENTED
* Scope: Review and approval boundary
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled

## Kernbesluit

Review en approval worden aparte fases na proposal preview. Een proposal preview mag nooit automatisch approval of execution betekenen.

## Begrippen

* Proposal preview: read-only voorstelregel zonder gegenereerde content
* Review: menselijke controle van issue, bron, risico en gewenste vervolgstap
* Approval: expliciet menselijk akkoord voor een later uitvoerbaar voorstel
* Execution: niet toegestaan in deze fase

## Minimale toekomstige reviewvelden

* proposalId
* sourceIssueId
* productId
* sku
* proposalType
* targetField
* proposedValueStatus
* sourceProvenance
* reviewerDecision
* reviewerReason
* reviewedBy
* reviewedAt

## Toegestane toekomstige reviewbeslissingen

* approve_for_later_execution
* reject
* needs_source
* needs_manual_edit
* defer

## Verboden in deze fase

* execution
* write/rewrite
* WooCommerce updates
* media uploads
* database persistence zonder apart akkoord
* AI-content generatie
* automatic approval
* automatic execution

## Governance

* human review required blijft true
* autoExecuteAllowed blijft false
* writeScopeEnabled blijft false
* proposedValue null of not_generated blijft geen uitvoerbaar voorstel
* source/provenance blijft verplicht

## Aanbevolen volgende micro-stap

Leg de review- en approvalstatus later vast als read-only contractvelden naast de bestaande proposal preview, zonder execution of write-scope te openen.

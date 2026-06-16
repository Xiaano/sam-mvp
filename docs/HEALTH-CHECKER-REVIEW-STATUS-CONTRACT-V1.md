# Health Checker Review Status Contract V1

## Status

* Status: CONTRACT / NOT IMPLEMENTED
* Scope: Review status fields and decisions
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled

## Kernregel

Reviewstatussen zijn alleen beoordelingstoestanden. Geen enkele reviewstatus mag execution, WooCommerce-write of automatische approval starten.

## Minimale reviewvelden

* reviewId
* proposalId
* sourceIssueId
* productId
* sku
* proposalType
* targetField
* sourceProvenance
* reviewStatus
* reviewerDecision
* reviewerReason
* reviewedBy
* reviewedAt
* requiresHumanReview
* autoExecuteAllowed
* writeScopeEnabled

## Toegestane reviewStatus waarden

* not_reviewed
* in_review
* reviewed
* deferred
* rejected

## Toegestane reviewerDecision waarden

* approve_for_later_execution
* reject
* needs_source
* needs_manual_edit
* defer

## Governance regels

* requiresHumanReview blijft true
* autoExecuteAllowed blijft false
* writeScopeEnabled blijft false
* approve_for_later_execution betekent nog geen execution
* proposedValue null/not_generated is nooit uitvoerbaar
* reviewerReason is verplicht bij reject, needs_source, needs_manual_edit en defer
* sourceProvenance blijft verplicht

## Expliciet buiten scope

* execution/write/rewrite
* WooCommerce updates
* media uploads
* database opslag
* AI-content generatie
* automatische approval
* automatische execution
* frontendknoppen bouwen

## Aanbevolen volgende micro-stap

Leg reviewstatus en reviewbeslissingen later vast als read-only contractvelden naast de bestaande proposal reviewgrens, zonder execution- of write-scope te openen.

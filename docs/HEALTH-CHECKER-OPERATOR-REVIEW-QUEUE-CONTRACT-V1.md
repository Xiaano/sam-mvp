# Health Checker Operator Review Queue Contract V1

## Status

* Status: CONTRACT / NOT IMPLEMENTED
* Scope: Operator review queue display contract
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled

## Kernregel

De operator review queue mag proposal previews zichtbaar maken voor menselijke beoordeling, maar mag geen execution, WooCommerce-write, automatische approval of database-opslag starten.

## Queue item velden

* queueItemId
* proposalId
* sourceIssueId
* productId
* sku
* proposalType
* targetField
* issueType
* severity
* currentState
* proposedValueStatus
* reviewStatus
* reviewerDecision
* sourceProvenance
* requiresHumanReview
* autoExecuteAllowed
* writeScopeEnabled
* createdAt
* updatedAt

## Toegestane queue states

* preview_ready
* waiting_for_review
* in_review
* reviewed
* deferred
* rejected

## Toegestane operatoracties later

* open_review
* mark_needs_source
* mark_needs_manual_edit
* reject_with_reason
* defer_with_reason
* approve_for_later_execution

## Verboden operatoracties in deze fase

* execute
* write_to_woocommerce
* update_product
* upload_media
* generate_ai_content
* auto_approve
* auto_execute

## Governance regels

* approve_for_later_execution blijft geen execution
* reviewerReason is verplicht bij reject, defer, needs_source en needs_manual_edit
* sourceProvenance blijft zichtbaar/verplicht
* proposedValue null/not_generated blijft niet uitvoerbaar
* autoExecuteAllowed blijft false
* writeScopeEnabled blijft false

## Expliciet buiten scope

* frontendknoppen bouwen
* API-endpoint bouwen
* database opslag
* AI-content generatie
* WooCommerce updates
* media uploads
* execution/write/rewrite

## Aanbevolen volgende micro-stap

Leg de operator review queue later vast als read-only contractlaag naast reviewstatus en approvalgrenzen, zonder uitvoerbare acties toe te voegen.

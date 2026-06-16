# Health Checker Operator Review Preview Contract V1

## Status

* Status: CONTRACT / NOT IMPLEMENTED
* Scope: Operator review preview/detail contract
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled
* UI/design status: Flexible foundation, not final dashboard design

## Kernregel

Een operator review preview mag één proposal item veilig tonen voor menselijke beoordeling, maar mag geen approval, execution, WooCommerce-write, database-opslag of AI-generatie starten.

## Preview/detail velden

* queueItemId
* proposalId
* sourceIssueId
* productId
* sku
* productName indien veilig beschikbaar
* proposalType
* issueType
* severity
* targetField
* currentState
* proposedValueStatus
* proposedValue
* sourceProvenance
* reviewStatus
* reviewerDecision
* reviewerReason
* requiresHumanReview
* autoExecuteAllowed
* writeScopeEnabled
* createdAt
* updatedAt

## Source/provenance weergave

* sourceType
* sourceName
* sourceReference
* sourceConfidence
* evidenceReference
* aiGenerated
* sourceUnknown
* requiresHumanReview

## Toegestane operator preview-acties later

* open_preview
* close_preview
* add_review_note
* mark_needs_source
* mark_needs_manual_edit
* reject_with_reason
* defer_with_reason
* approve_for_later_execution

## Verboden in deze fase

* execute
* write_to_woocommerce
* update_product
* upload_media
* generate_ai_content
* auto_approve
* auto_execute
* database persistence zonder apart akkoord

## Governance regels

* approve_for_later_execution blijft geen execution
* proposedValue null/not_generated is nooit uitvoerbaar
* reviewerReason verplicht bij reject, defer, needs_source en needs_manual_edit
* sourceProvenance blijft zichtbaar/verplicht
* autoExecuteAllowed blijft false
* writeScopeEnabled blijft false
* UI mag later wijzigen; contract legt alleen velden/grenzen vast

## Ontwerpflexibiliteit

Dit contract legt geen definitief cockpit-, dashboard-, tab-, route- of klantdashboardontwerp vast. Latere Axiora/Nautilus cockpitstructuur mag evolueren zolang governance en boundaries behouden blijven.

## Expliciet buiten scope

* frontend bouwen
* API-endpoint bouwen
* database opslag
* AI-content generatie
* WooCommerce updates
* media uploads
* execution/write/rewrite
* definitieve cockpit/dashboard UX vastleggen

## Aanbevolen volgende micro-stap

Leg de operator review preview later vast als read-only detailcontract naast queue en reviewstatus, zonder uitvoerbare acties toe te voegen.

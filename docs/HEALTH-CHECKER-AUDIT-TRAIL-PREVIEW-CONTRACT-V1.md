# Health Checker Audit Trail Preview Contract V1

## Status

* Status: CONTRACT / NOT IMPLEMENTED
* Scope: Audit trail preview contract
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled
* UI/design status: Flexible foundation, not final dashboard design

## Kernregel

Audit trail preview mag gebeurtenissen traceerbaar tonen, maar mag geen nieuwe acties starten, geen database schrijven en geen execution/write impliceren.

## Audit event types

* product_scan_requested
* product_scan_completed
* issue_detected
* proposal_preview_created
* review_queue_item_created
* review_preview_opened
* review_decision_recorded
* approval_marked_for_later_execution
* execution_not_enabled

## Minimale auditvelden

* auditEventId
* eventType
* timestamp
* actorType
* actorId
* source
* productId
* sku
* sourceIssueId
* proposalId
* queueItemId
* reviewId
* targetField
* previousState
* newState
* sourceProvenance
* writeScopeEnabled
* autoExecuteAllowed
* databaseWritten

## Actor types

* system_read_only
* operator
* reviewer
* future_service

## Governance regels

* audit preview is read-only
* databaseWritten blijft false zolang persistence niet apart is goedgekeurd
* writeScopeEnabled blijft false
* autoExecuteAllowed blijft false
* approval_marked_for_later_execution betekent nog geen execution
* secrets, credentials en raw WooCommerce responses mogen nooit in audit preview verschijnen
* sourceProvenance blijft verplicht waar relevant

## Expliciet buiten scope

* database opslag
* immutable audit log implementatie
* execution/write/rewrite
* WooCommerce updates
* media uploads
* AI-content generatie
* frontend bouwen
* API-endpoint bouwen
* definitieve cockpit/dashboard UX vastleggen

## Ontwerpflexibiliteit

Audit trail mag later als tab, panel, detaildrawer, timeline of customer dashboard-module worden vormgegeven zolang governance en boundaries behouden blijven.

## Aanbevolen volgende micro-stap

Leg audit trail preview later vast als read-only traceercontract naast review, queue en preview, zonder opslag of uitvoerbare acties te openen.

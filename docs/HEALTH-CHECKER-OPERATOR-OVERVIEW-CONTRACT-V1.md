# Health Checker Operator Overview Contract V1

## Status

* Status: CONTRACT / NOT IMPLEMENTED
* Scope: Read-only operator overview contract
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled
* UI/design status: Flexible foundation, not final dashboard design

## Kernregel

De operator overview mag read-only samenvattingen tonen van scans, issues, proposals, review queue, review preview en audit preview. De overview mag geen acties starten, geen approval impliceren, geen database schrijven en geen execution/write openen.

## Overview-secties

* scanSummary
* issueSummary
* proposalPreviewSummary
* reviewQueueSummary
* reviewPreviewSummary
* auditTrailSummary
* governanceSummary

## Minimale overviewvelden

* overviewId
* source
* environment
* generatedAt
* scanStatus
* productsScanned
* issuesFound
* proposalsCreated
* queueItemsTotal
* queueItemsWaitingForReview
* queueItemsInReview
* queueItemsReviewed
* queueItemsDeferred
* queueItemsRejected
* auditEventsAvailable
* writeScopeEnabled
* autoExecuteAllowed
* databaseWritten
* aiUsed

## Governance summary

* operatorControlled: true
* automaticScanAllowed: false
* automaticProposalPreviewAllowed: false
* automaticApprovalAllowed: false
* automaticExecutionAllowed: false
* sourceProvenanceRequired: true
* humanReviewRequired: true

## Verboden

* execute
* write_to_woocommerce
* update_product
* upload_media
* generate_ai_content
* auto_approve
* auto_execute
* database persistence zonder apart akkoord
* live omgeving automatisch raken
* secrets of credentials tonen

## Ontwerpflexibiliteit

Dit contract legt geen definitief cockpit-, dashboard-, tab-, route-, klantselectie- of Nautilus/Axiora dashboardontwerp vast. Latere UI mag als tabs, routes, cards, tables, customer dashboard, trouble cockpit of module-overview worden vormgegeven zolang governance en boundaries behouden blijven.

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

Leg de operator overview later vast als read-only samenvattingslaag naast queue, preview en audit, zonder uitvoerbare acties of een vast dashboarddesign te openen.

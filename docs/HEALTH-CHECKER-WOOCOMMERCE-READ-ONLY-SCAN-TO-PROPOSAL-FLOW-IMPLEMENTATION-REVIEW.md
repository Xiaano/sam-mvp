# Health Checker WooCommerce Read-only Scan-to-Proposal Flow Implementation Review

## Status

* Status: IMPLEMENTED / REVIEWED
* Scope: WooCommerce staging read-only flow
* Product priority: SAM Health Checker first
* Write scope: Not enabled
* AI usage: Not enabled
* Database persistence: Not enabled
* Frontend behavior: Operator-controlled

## Wat werkt nu

* `WooCommerce Read-only Product Scan V0`
* `Product Scan V0` leest maximaal 10 stagingproducten
* `Product Scan V0` detecteert issues
* `WooCommerce Read-only Proposal Preview V0`
* `Proposal Preview V0` zet issues om naar preview-only proposalregels

## Werkende keten

* product scan
* issue detection
* proposal preview
* source/provenance per proposal

## Lokale validatie

* productscan gaf `scan_completed`
* `productsScanned: 10`
* `issuesFound: 40`
* proposal preview gaf `scan_completed`
* `issuesRead: 40`
* `proposalsCreated: 40`
* `writeScopeEnabled: false`
* `aiUsed: false`
* `databaseWritten: false`

## Veiligheidsgrenzen

* geen writes
* geen execution
* geen AI/OpenAI
* geen database/persistence
* geen secrets zichtbaar
* geen raw WooCommerce response
* geen volledige descriptions
* geen image URLs
* geen automatische scan bij page load
* proposal preview alleen operator-controlled

## Source/provenance

* `sourceType: webshop_existing_data`
* `sourceName: WooCommerce staging product scan V0`
* `aiGenerated: false`
* `sourceUnknown: false`
* `requiresHumanReview: true`
* `proposedValue: null`
* `autoExecuteAllowed: false`

## Cockpitstatus

* `Staging / Read-only` tab bevat productscan en proposal preview apart
* Beide zijn handmatig/operator-controlled
* `Mock / Demo` blijft gescheiden van echte stagingdata

## Expliciet nog niet gebouwd

* proposal approval
* review workflow
* execution/write/rewrite
* database opslag
* AI content generation
* skip-with-reason
* notifications
* advanced stock/status checks

## Aanbevolen volgende micro-stap

Ontwerp een operator-controlled frontend trigger of read-only scan panel dat niet automatisch bij elke cockpit-load scant.

# Health Checker Operator Cockpit Scope Decision V1

## Status

* Status: APPROVED DIRECTION / NOT FINAL DESIGN
* Scope: Read-only operator cockpit scope
* Product priority: SAM Health Checker first
* Execution/write scope: Not allowed
* Database persistence: Not enabled
* UI/design status: Flexible foundation, not final dashboard design

## Kernbesluit

De huidige Health Checker cockpit mag doorgroeien als read-only operator cockpit voor SAM Health Checker en later mogelijk als basis voor Axiora/Nautilus dashboardmodules. Dit besluit opent geen klantplatform, geen definitief dashboarddesign en geen execution/write-flow.

## Huidige cockpitfunctie

* overzicht van read-only statusdata
* mock/demo gescheiden van staging/read-only
* operator-controlled WooCommerce productscan
* operator-controlled proposal preview
* governance/contracts inzichtelijk
* geen automatische staging scans bij page load
* geen write/rewrite/execution

## Toekomstige richting, niet nu bouwen

* klantselectie
* shopselectie
* tabs/routes per module
* trouble cockpit
* live/read-only monitoring
* audit/traceability views
* review queue views
* Nautilus/Axiora dashboardmodules
* customer dashboard evolution

## Expliciet niet nu

* definitief dashboarddesign
* klantplatform bouwen
* multi-tenant implementatie
* database persistence
* approval/execution UI
* WooCommerce writes
* media uploads
* AI-content generatie
* automatische scans/proposals/execution
* live omgeving automatisch raken

## Governance regels

* operatorControlled blijft true
* automaticScanAllowed blijft false
* automaticProposalPreviewAllowed blijft false
* automaticApprovalAllowed blijft false
* automaticExecutionAllowed blijft false
* writeScopeEnabled blijft false
* autoExecuteAllowed blijft false
* sourceProvenance blijft verplicht
* humanReviewRequired blijft true

## Ontwerpflexibiliteit

Tabs, routes, cards, tables, detaildrawers, filters, klantselectie en dashboard-layout mogen later vrij wijzigen zolang de governancegrenzen blijven gelden.

## Relatie tot Axiora/Nautilus

De cockpit mag later dienen als bouw- en bewijsbasis voor bredere Axiora/Nautilus dashboardconcepten, maar huidige scope blijft SAM Health Checker MVP.

## Fase-afsluiting

De huidige fase heeft documentair de volgende keten afgebakend:
product scan -> issue detection -> proposal preview -> review boundary -> review status -> review queue -> review preview -> audit trail preview -> operator overview -> cockpit scope.

## Aanbevolen volgende micro-stap

Leg later alleen nog operationele read-only cockpitweergave en eventuele micro-scope details vast, zonder een definitief dashboarddesign of uitvoeringstraject te openen.

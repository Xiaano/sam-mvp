# SAM Health Checker Service-Driven Mock Route Inventory

## Scope

Dit is een inventarisatie, geen besluit om code te wijzigen.

## Bestaande Health Checker mock/read-only routes

* `GET /api/health-checker/readiness`
* `GET /api/health-checker/mock-scan`
* `GET /api/health-checker/issue-classification`
* `GET /api/health-checker/proposal-contract`
* `GET /api/health-checker/issue-proposal-mapping`
* `GET /api/health-checker/mock-proposal-preview`
* `GET /api/health-checker/operator-review-contract`
* `GET /api/health-checker/operator-review-preview`
* `GET /api/health-checker/approval-flow-contract`
* `GET /api/health-checker/audit-log-contract`
* `GET /api/health-checker/audit-log-preview`
* `GET /api/health-checker/mock-scan-to-review-flow`
* `GET /api/health-checker/operator-overview-mock`

## Al service-driven via `mockRuntimeService`

De volgende routes lopen al via `apps/api/src/services/healthChecker/mockRuntimeService.ts`:

* `GET /api/health-checker/mock-proposal-preview`
* `GET /api/health-checker/operator-review-preview`
* `GET /api/health-checker/mock-scan-to-review-flow`
* `GET /api/health-checker/operator-overview-mock`

## Nog inline/static in routebestanden

De volgende routes lijken nog inline/static in hun routebestanden te zitten:

* `GET /api/health-checker/readiness`
* `GET /api/health-checker/mock-scan`
* `GET /api/health-checker/issue-classification`
* `GET /api/health-checker/proposal-contract`
* `GET /api/health-checker/issue-proposal-mapping`
* `GET /api/health-checker/operator-review-contract`
* `GET /api/health-checker/approval-flow-contract`
* `GET /api/health-checker/audit-log-contract`
* `GET /api/health-checker/audit-log-preview`

## Beste volgende kandidaat voor service-adoptie

`GET /api/health-checker/audit-log-preview` is de beste volgende kandidaat.

### Waarom deze kandidaat logisch is

* De route is een preview/mock-route en past daarom beter bij `mockRuntimeService`.
* De route volgt logisch op operator review en approval-flow semantiek.
* Audit-log preview helpt om de traceability/auditlijn service-driven te maken zonder contractroutes aan te raken.
* Contractroutes zoals `approval-flow-contract`, `operator-review-contract`, `audit-log-contract` en `proposal-contract` blijven voorlopig statisch.
* Service-adoptie moet focussen op preview/mock/runtime-achtige routes, niet op contractdefinities.

## Routes die voorlopig beter met rust kunnen blijven

* `GET /api/health-checker/readiness`
* `GET /api/health-checker/mock-scan`
* `GET /api/health-checker/issue-classification`
* `GET /api/health-checker/proposal-contract`
* `GET /api/health-checker/issue-proposal-mapping`
* `GET /api/health-checker/operator-review-contract`
* `GET /api/health-checker/audit-log-contract`

Deze routes zijn nu nog duidelijk leesbare statische contractlagen en hoeven niet direct service-driven te worden.

## Bevestiging

Dit document is alleen een inventarisatie en geen besluit om code te wijzigen.
Geen runtime-scope, code, route of serverregistratie is aangepast.

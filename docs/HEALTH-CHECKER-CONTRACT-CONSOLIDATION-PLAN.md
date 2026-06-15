# SAM Health Checker Contract Consolidation Plan

## Status

* huidige contractlaag is logisch, read-only en veilig
* route-inventory is vastgelegd in `docs/HEALTH-CHECKER-CONTRACT-LAYER-REVIEW.md`
* er is geen acute refactor nodig

## Aanleiding

* er zijn inmiddels meerdere statische contract-/previewroutes
* safety-objecten en responsevelden worden herhaald
* centralisatie kan later drift voorkomen

## Wat voorlopig niet doen

* geen directe refactor
* geen routes samenvoegen
* geen database/Prisma activeren
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit
* geen commerciële rename

## Mogelijke latere centralisatie

Mogelijke gedeelde onderdelen zijn:

* standaard `service`
* standaard `version`
* standaard `safety`
* standaard `next_step`
* standaard `mode`
* standaard approval flags zoals `human_approval_required`, `auto_execute_allowed`, `write_actions`

## Mogelijke technische richting later

Een latere richting kan bijvoorbeeld zijn:

* `apps/api/src/contracts/healthChecker/shared.ts`
* gedeelde helper voor safety-objecten
* gedeelde types/interfaces voor contractresponses
* routefiles blijven voorlopig expliciet en leesbaar

## Risico bij te vroeg refactoren

* verlies van helderheid
* meer abstractie dan nodig
* onnodig tijdverlies vóór echte mock runtime-flow

## Aanbevolen aanpak

* nu documenteren en parkeren
* pas centraliseren wanneer echte runtime-flow of database-integratie begint
* vóór WooCommerce/Prisma opnieuw beoordelen

## Volgende bouwstap na dit plan

* mock runtime-flow ontwerp of mock scan-to-review-flow
* nog steeds read-only
* geen echte execution


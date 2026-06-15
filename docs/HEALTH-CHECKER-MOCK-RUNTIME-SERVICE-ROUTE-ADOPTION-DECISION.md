# SAM Health Checker Mock Runtime Service Route Adoption Decision

## Besluit

De bestaande read-only mock routes mogen in een aparte vervolgstap de mock runtime service gaan gebruiken.

## Scope

Dit besluit geldt alleen voor:

* `GET /api/health-checker/mock-scan-to-review-flow`
* `GET /api/health-checker/operator-overview-mock`

## Strikte grenzen

Deze vervolgstap blijft strikt beperkt tot:

* geen database
* geen Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit
* geen POST-endpoints
* geen write actions
* geen execution
* geen secrets

## Doel

Het doel is om de statische payloads uit de routes te verplaatsen naar `mockRuntimeService`, zodat de routes dunner worden terwijl gedrag en responsevorm behouden blijven.

## Acceptatiecriteria

Voor de latere adoptiestap gelden deze voorwaarden:

* bestaande endpoint paths blijven gelijk
* response blijft read-only/mock
* safety blijft expliciet
* human review en human approval blijven verplicht
* `auto_execute` blijft disabled
* `/diagnostics` blijft `database: "not_checked"` en `prisma: "not_checked"` tonen

## Geen implementatie in dit document

Dit document bevat alleen het adoptiebesluit en geen implementatie.


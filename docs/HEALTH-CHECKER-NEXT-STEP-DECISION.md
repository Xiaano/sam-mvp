# SAM Health Checker Next Step Decision

## Status

* contractlaag is afgerond
* contractlaag-review is vastgelegd
* consolidatieplan is vastgelegd
* repo stond clean en gelijk met `origin/main`

## Besluit

* geen nieuwe losse contract-endpoints toevoegen zonder bewuste reden
* geen directe refactor/consolidatie uitvoeren
* geen database/Prisma activeren
* geen WooCommerce-koppeling maken
* geen AI/OpenAI toevoegen
* geen frontend/cockpit bouwen
* geen execution/write-actions bouwen

## Volgende bouwdoel

* `Read-only mock scan-to-review flow`

## Doel van die volgende bouwstap

Één read-only flow waarin mock scan, issues, proposals, review queue en audit-preview logisch samenkomen.

Daarbij geldt:

* geen echte engine
* geen database
* geen WooCommerce
* geen AI
* geen execution
* alleen aantonen hoe de bestaande contracten als keten samenwerken

## Waarom deze stap

* behoudt continuïteit
* maakt de waarde zichtbaarder
* voorkomt endpoint-lawine
* houdt governance en human approval centraal
* bereidt later cockpit/API-integratie beter voor

## Scopegrenzen

* read-only
* statisch/mock
* geen persistence
* geen operatoractie uitvoeren
* geen approve/reject POST-endpoints
* geen database writes
* geen WooCommerce writes
* geen secrets

## Mogelijke endpointnaam voor latere bouwstap

* `GET /api/health-checker/mock-scan-to-review-flow`

## Acceptatiecriteria voor latere bouwstap

* bestaande endpoints blijven werken
* nieuwe flow is read-only
* flow verwijst logisch naar bestaande contractlaag
* safety-object blijft expliciet
* human approval blijft verplicht
* auto-execute blijft disabled
* `/diagnostics` blijft `database: "not_checked"` en `prisma: "not_checked"` tonen


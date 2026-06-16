# SAM MVP

## Doel

`SAM MVP Release 1` is een frisse opbouw van `SAM`, gericht op een verkoopbare en stabiele kern voor `SAM Health Checker` en `SAM Webshopbeheer`. Deze repository is de gecontroleerde monorepo-basis voor die MVP-opbouw.

## Huidige status

* `SAM MVP Release 1` draait technisch op een API-first basis met `Fastify`, `TypeScript`, `Prisma 7` en `PostgreSQL`.
* `SAM Health Checker` is de huidige prioriteit; de bestaande cockpit/API-basis is read-only en analysegericht.
* De minimale API draait lokaal op poort `3001`.
* `/health` is lokaal succesvol gevalideerd.
* `/diagnostics` is lokaal succesvol gevalideerd en blijft bewust read-only/statisch.
* Prisma/database-runtime blijft via `/diagnostics` nog steeds `not_checked`.
* De lokale `PostgreSQL`-runtime en eerste Prisma-migratie zijn gevalideerd; Prisma Client is lokaal gegenereerd.
* Prisma compatibility blijft `PASSED_WITH_WARNINGS` door de bekende `EBADENGINE`-warning en `3 moderate severity vulnerabilities`.
* De actuele waarheid voor technische status staat in [docs/CURRENT-STATUS.md](docs/CURRENT-STATUS.md).

## Kernbestanden

* [docs/CURRENT-STATUS.md](docs/CURRENT-STATUS.md)
* [docs/SCOPE.md](docs/SCOPE.md)
* [docs/TECHNICAL-ARCHITECTURE.md](docs/TECHNICAL-ARCHITECTURE.md)
* [docs/DATABASE-SCHEMA.md](docs/DATABASE-SCHEMA.md)
* [docs/API-PLAN.md](docs/API-PLAN.md)
* [docs/TEST-STRATEGY.md](docs/TEST-STRATEGY.md)
* [docs/BUILD-LOG.md](docs/BUILD-LOG.md)
* [docs/CODEX-WORKFLOW.md](docs/CODEX-WORKFLOW.md)
* [docs/APPROVED-DECISIONS-INDEX.md](docs/APPROVED-DECISIONS-INDEX.md)

## Harde guardrails

* echte secrets blijven buiten `sam-mvp`
* alleen `.env.example` mag in de repo
* `DATABASE_URL` blijft buiten `sam-mvp`
* Codex mag geen `.env`, `DATABASE_URL` of secrets lezen, openen, tonen, kopieren of wijzigen
* nieuwe stappen volgen: documenteren -> plannen -> bouwen
* `SAM MVP` blijft prioriteit boven bredere `Guardian`-uitbouw

## Bewust nog niet gebouwd

* geen `WooCommerce` connector
* geen businesslogica buiten goedgekeurde MVP-stappen
* geen productie-deployment
* geen extra API-endpoints buiten de aantoonbare Health Checker read-only/contract/mock/lifecycle-basis
* geen autonome `AI`-uitvoering

## Volgende stap

Documentatieconsistentie en kleine cleanup gaan voor nieuwe feature-uitbreiding.

## Werkwijze voor Codex

Voor vaste werkregels, leesvolgorde, secrets-grenzen en rapportageformat geldt [docs/CODEX-WORKFLOW.md](docs/CODEX-WORKFLOW.md) als leidend document.

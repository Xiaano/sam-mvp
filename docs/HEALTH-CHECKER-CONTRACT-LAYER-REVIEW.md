# SAM Health Checker Contract Layer Review

## Status

* Repo stond clean en gelijk met `origin/main`.
* Review is read-only uitgevoerd.
* Geen codewijzigingen gedaan tijdens de inventory.

## Route-inventory

De huidige API-contractlaag bevat 14 runtime handlers:

* `/health`
* `/diagnostics`
* `/api/health-checker/readiness`
* `/api/health-checker/mock-scan`
* `/api/health-checker/issue-classification`
* `/api/health-checker/proposal-contract`
* `/api/health-checker/issue-proposal-mapping`
* `/api/health-checker/mock-proposal-preview`
* `/api/health-checker/operator-review-contract`
* `/api/health-checker/operator-review-preview`
* `/api/health-checker/approval-flow-contract`
* `/api/health-checker/audit-log-contract`
* `/api/health-checker/audit-log-preview`
* `/api/health-checker/mock-scan-to-review-flow`

## Contractketen

De contractketen loopt logisch van readiness naar scan, classificatie, proposalvorming, review, approval en audit:

* readiness
* mock scan
* issue classification
* proposal contract
* issue-proposal mapping
* mock proposal preview
* operator review contract
* operator review preview
* approval flow contract
* audit-log contract
* audit-log preview
* mock scan-to-review flow

## Veiligheidsstatus

* alle Health Checker routes zijn read-only of statisch
* geen databaseconnectie
* geen Prisma-query's
* geen WooCommerce-koppeling
* geen `.env` of secrets
* geen AI/OpenAI
* geen frontend/cockpit
* geen oude SAM V2-bestanden
* `/diagnostics` blijft `database: "not_checked"` en `prisma: "not_checked"` tonen

## Consistentiecheck

* geen dubbele of botsende endpoint paths gevonden
* naamgeving is grotendeels consistent
* kernvelden zoals `service`, `mode/status`, `version`, `safety` en `next_step` zijn grotendeels consistent
* `contract` en `mock_preview` worden bewust onderscheiden

## Technische aandachtspunten

* er is herhaling in safety-objecten en statische payloads
* centralisatie kan later zinvol zijn
* geen acute refactor nodig
* normale `npm run check -w @sam-mvp/api` faalt binnen Codex nog steeds op `EPERM: operation not permitted, lstat 'C:\Users\Admin'`
* inline Node/tsx-workaround is eerder gebruikt voor runtimevalidatie
* de nieuwe route `GET /api/health-checker/mock-scan-to-review-flow` is read-only, statisch/mock en gebruikt geen database, Prisma, WooCommerce, secrets of write actions

## Aanbevolen vervolgstap

* geen nieuwe contract-endpoints toevoegen vóór een bewuste vervolgbeslissing
* mogelijke volgende stap: klein consolidatieplan voor gedeelde responsevelden en safety-objecten
* daarna pas mock runtime-flow of echte implementation planning

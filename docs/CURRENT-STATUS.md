# Current Status

## Repo en projectstart

* Repo-context: frisse lokale opzet voor `SAM MVP Release 1`.
* Basisuitgangspunt blijft geldig: "Dit is een nieuwe start."
* Oude `SAM V2` blijft alleen testcontext; oude code wordt niet overgenomen.
* De repo is lokaal Git-geïnitialiseerd op branch `main`.
* Remote `origin` wijst naar `https://github.com/Xiaano/sam-mvp.git`.
* De eerste commit en push naar `main` zijn succesvol afgerond.
* GitHub-status: `initialized and pushed`.
* Secrets-status:
  * er is geen `.env` in `sam-mvp`;
  * echte secrets blijven buiten `sam-mvp`;
  * `DATABASE_URL` blijft buiten `sam-mvp`;
  * Codex mag geen `.env`, `DATABASE_URL` of secrets lezen.

## Actuele technische toestand

### API-stack

* Bouwrichting uit bronset: API-first.
* Aantoonbaar bestaande minimale API-basis volgens bronset:
  * minimale Fastify API draait lokaal op poort `3001`;
  * `GET /health` is lokaal succesvol gevalideerd;
  * `GET /diagnostics` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/readiness` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/mock-scan` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/issue-classification` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/proposal-contract` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/issue-proposal-mapping` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/mock-proposal-preview` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/operator-review-contract` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/operator-review-preview` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/approval-flow-contract` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/audit-log-contract` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/audit-log-preview` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/mock-scan-to-review-flow` is lokaal succesvol gevalideerd;
  * `GET /api/health-checker/operator-overview-mock` is lokaal succesvol gevalideerd;
  * de minimale lifecycle/state semantic-guard checks zijn lokaal succesvol uitgevoerd via `node node_modules/tsx/dist/cli.mjs apps/api/src/checks/healthCheckerLifecycleStateChecks.ts`;
  * `GET /diagnostics` blijft bewust read-only en statisch;
  * `GET /diagnostics` maakt geen databaseverbinding, voert geen Prisma-query uit, gebruikt geen WooCommerce en toont geen secrets;
  * `GET /api/health-checker/readiness` blijft bewust read-only en statisch;
  * `GET /api/health-checker/mock-scan` blijft bewust read-only en statisch;
  * `GET /api/health-checker/mock-scan` gebruikt nu `apps/api/src/services/healthChecker/mockRuntimeService.ts` terwijl de response read-only/mock blijft en de bronwaarde daar logisch `mock-scan` is;
  * `GET /api/health-checker/mock-scan` gebruikt geen database, voert geen Prisma-query uit, maakt geen WooCommerce-verbinding en laat write actions uitgeschakeld;
  * `GET /api/health-checker/issue-classification` blijft bewust read-only en statisch;
  * `GET /api/health-checker/issue-classification` levert alleen contract- en taxonomiegegevens en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/proposal-contract` blijft bewust read-only en statisch;
  * `GET /api/health-checker/proposal-contract` levert alleen contractgegevens voor voorstellen en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/issue-proposal-mapping` blijft bewust read-only en statisch;
  * `GET /api/health-checker/issue-proposal-mapping` levert alleen statische mappings tussen issue- en proposal-contracten en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/mock-proposal-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/mock-proposal-preview` levert alleen statische voorstelpreviews en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/operator-review-contract` blijft bewust read-only en statisch;
  * `GET /api/health-checker/operator-review-contract` levert alleen statische reviewafspraken voor menselijke beoordeling en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/operator-review-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/operator-review-preview` levert alleen statische reviewpreview-items en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/approval-flow-contract` blijft bewust read-only en statisch;
  * `GET /api/health-checker/approval-flow-contract` levert alleen statische goedkeuringsafspraken en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/audit-log-contract` blijft bewust read-only en statisch;
  * `GET /api/health-checker/audit-log-contract` levert alleen statische auditlog-afspraken en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/audit-log-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/audit-log-preview` levert alleen statische auditlog-preview-events en gebruikt geen database, Prisma of WooCommerce;
  * `GET /api/health-checker/mock-scan-to-review-flow` blijft bewust read-only en statisch;
  * `GET /api/health-checker/mock-scan-to-review-flow` combineert de bestaande mock scan, proposal preview, review queue, approval policy en audit preview zonder database, Prisma of WooCommerce;
  * `GET /api/health-checker/mock-proposal-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/mock-proposal-preview` gebruikt nu `apps/api/src/services/healthChecker/mockRuntimeService.ts` terwijl de response read-only/mock blijft;
  * `GET /api/health-checker/woocommerce-read-only-proposal-preview` is lokaal gevalideerd als de read-only keten van productscan naar preview-only proposals;
  * `GET /api/health-checker/woocommerce-read-only-proposal-preview` gebruikt de bestaande read-only productscan als bron, zet issues om naar preview-only proposalregels en houdt write scope, AI en database expliciet uit;
  * `GET /api/health-checker/operator-overview-mock` blijft bewust read-only en statisch;
  * `GET /api/health-checker/operator-overview-mock` geeft alleen een mock operator-overzicht terug met scan summary, issues, proposal previews, review queue, approval policy, audit trail preview, safety/status panel en future extension hooks;
  * `GET /api/health-checker/operator-review-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/operator-review-preview` gebruikt nu `apps/api/src/services/healthChecker/mockRuntimeService.ts` terwijl de response read-only/mock blijft en de bronwaarde daar logisch `mock-operator-review-preview` is;
  * `GET /api/health-checker/audit-log-preview` blijft bewust read-only en statisch;
  * `GET /api/health-checker/audit-log-preview` gebruikt nu `apps/api/src/services/healthChecker/mockRuntimeService.ts` terwijl de response read-only/mock blijft en de bronwaarde daar logisch `mock-audit-log-preview` is;
  * de mock routes worden nu gevoed door `apps/api/src/services/healthChecker/mockRuntimeService.ts` terwijl de responsevorm read-only/mock blijft;
  * de mock proposal preview-route is nu ook service-driven en blijft endpoint-path compatibel;
* Aantoonbaar genoemd pad voor Prisma app-integratie:
  * `apps/api/src/persistence/prismaClient.ts`
* Via de lokaal gevalideerde API-routes is Prisma/database-runtime nog niet gevalideerd; `database` en `prisma` blijven daar bewust `not_checked`.

### TypeScript

* TypeScript is lokaal geïnstalleerd door Ricardo.
* TypeScript-configuratie is geldig volgens bronset.
* `npm run check` is lokaal succesvol uitgevoerd door Ricardo.
* Vastgelegde versie in bronset:
  * TypeScript `6.0.3`

### Fastify

* Fastify is lokaal geïnstalleerd door Ricardo.
* Vastgelegde versie in bronset:
  * Fastify `5.8.5`
* De minimale Fastify API runtime is lokaal getest via de bestaande health route.

### Prisma

* Prisma is lokaal geïnstalleerd door Ricardo.
* Auditwaardige versies:
  * `prisma 7.8.0`
  * `@prisma/client 7.8.0`
* Prisma schema-validatie met extern beheerde `DATABASE_URL` is succesvol uitgevoerd.
* Prisma Client is lokaal gegenereerd.
* Auditwaardig outputpad:
  * `apps/api/src/generated/prisma`
* Prisma runtime compatibility gate-status:
  * `PASSED_WITH_WARNINGS`

### PostgreSQL

* Lokale PostgreSQL-richting is actief gebruikt voor ontwikkeling/test.
* Auditwaardige databasefeiten:
  * container: `sam-mvp-postgres`
  * hostpoort: `5433`
  * containerpoort: `5432`
  * database: `sam_mvp_dev`
  * user: `sam_mvp_local`

### Docker/Postgres runtime

* Docker/Postgres runtime is lokaal gevalideerd.
* De container `sam-mvp-postgres` draaide lokaal met status `healthy`.
* Databaseverbinding is handmatig gecontroleerd met `psql`.

### Migratie-status

* De eerste Prisma migratie is succesvol toegepast.
* Auditwaardige migratie:
  * `20260612213620_init`
* Prisma meldde bij de toegepaste migratie:
  * "All migrations have been successfully applied."
  * "Database schema is up to date."
* De volgende tabellen zijn lokaal gevalideerd in schema `public`:
  * `Action`
  * `Execution`
  * `HistoryItem`
  * `Issue`
  * `Operator`
  * `Product`
  * `Proposal`
  * `ScanRun`
  * `SourceData`
  * `UserDecision`
  * `_prisma_migrations`

### Generated Prisma client

* Prisma Client is lokaal gegenereerd.
* Gerapporteerde output:
  * `Generated Prisma Client (7.8.0) to .\apps\api\src\generated\prisma`
* Huidige bron van waarheid blijft:
  * `schema.prisma`
  * migrations

## Bekende warnings en blockers

### Huidige warnings

* Prisma runtime compatibility gate blijft `PASSED_WITH_WARNINGS`.
* Auditwaardige warning:
  * `EBADENGINE` warning op `@prisma/streams-local@0.1.2`
* Bijbehorende vereiste uit bronset:
  * required: `node >=22.0.0` of `bun >=1.3.6`
  * current: `node v20.19.0`, `npm 10.8.2`
* Extra auditpunt:
  * `3 moderate severity vulnerabilities`

### Eerdere blockerstatus

* Eerdere npm-uitvoercontextfout in Codex:
  * `EPERM: operation not permitted, lstat 'C:\Users\Admin'`
* Status in bronset:
  * blocker zelf staat als `RESOLVED`
  * Prisma install warnings staan als `MONITORED`
* Betekenis nu:
  * npm werkte buiten Codex in normale PowerShell;
  * de eerdere blokkade lijkt een uitvoercontextprobleem en geen `sam-mvp`-projectfout.

## Controle nodig

De volgende statusregels komen uit oudere of bredere documenten en zijn mogelijk verouderd of intern tegenstrijdig. Ze mogen daarom niet zonder controle als definitieve actuele status worden hergebruikt:

* `README.md` noemt `Projectstatus: PRISMA_SCHEMA_V0_VALIDATED`, terwijl latere bronbestanden ook lokale PostgreSQL-runtime, migratie-apply en Prisma generate als voltooid vastleggen.
* `README.md` bevat zowel:
  * "Er is nog geen database."
  * als later ook:
    * lokale PostgreSQL-runtime is succesvol gevalideerd;
    * eerste Prisma migratie is succesvol toegepast;
    * lokale PostgreSQL-tabellen zijn gevalideerd.
* `README.md` bevat zowel:
  * "De eerste lokale Prisma migratie is succesvol toegepast via `migrate deploy`, maar Prisma `generate` is nog niet uitgevoerd."
  * als later ook:
    * "Prisma Client `generate` is succesvol uitgevoerd naar `apps/api/src/generated/prisma`."
* `README.md` bevat:
  * "Prisma compatibility gate is `OPEN`."
  * terwijl `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md` als latere bronstatus `PASSED_WITH_WARNINGS` vastlegt.
* `README.md` noemt:
  * "Er zijn nog geen API-endpoints."
  * terwijl hetzelfde document ook bevestigt dat de health route aanwezig en succesvol getest is.

## Bewust nog niet gebouwd

* geen businesslogica
* geen WooCommerce connector
* geen extra API-endpoints buiten wat aantoonbaar bestaat, inclusief de huidige read-only health/status/mock/classification/proposal/mapping/preview/review/review-preview/approval/audit-routes
* geen productie-deployment
* geen echte secrets in repo
* geen `Prisma db push` uitgevoerd
* geen bevestigde Prisma runtime/database-integratie in applicatielogica buiten de voorbereidende bouwstenen

## Minimale mock endpoint checks

* Er is een minimale check toegevoegd voor de huidige mock/read-only endpoints.
* De check controleert alleen `statusCode=200`, relevante `source`/`mode`/`status`-metadata, endpoint-relevante aantallen waar aanwezig, en `/diagnostics` met `database=not_checked` en `prisma=not_checked`.
* De check raakt geen database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution of secrets.
* De check is lokaal succesvol uitgevoerd via de workspace `tsx`-entrypoint.

## Minimale contract-shape checks

* Er is een minimale check toegevoegd voor de statische Health Checker contract-/mappingroutes.
* De check controleert alleen `statusCode=200`, contractvorm, metadata, verplichte secties en disabled/blocked execution-semantiek waar aanwezig.
* De check raakt geen database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution of secrets.
* De check is lokaal succesvol uitgevoerd via de workspace `tsx`-entrypoint.

## Minimale lifecycle/state semantic-guard checks

* Er is een minimale check toegevoegd voor de huidige Health Checker lifecycle/state-semantiek.
* De check controleert read-only GET-endpoints op basale semantische guards zoals:
  * `completed` betekent geen execution;
  * `approved` betekent niet automatisch execution;
  * `execution_allowed`, `executed` en `execution_failed` blijven conceptueel of niet actief;
  * `blocked` en `disabled` blokkeren write/execution;
  * `review_required` en `approval_required` blijven gescheiden.
* De check raakt geen database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution of secrets.
* De check is lokaal succesvol uitgevoerd via `node node_modules/tsx/dist/cli.mjs apps/api/src/checks/healthCheckerLifecycleStateChecks.ts`.

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` expliciet als bronmateriaal voor `docs/CURRENT-STATUS.md` zijn aangewezen:

* `README.md`
* `docs/ENVIRONMENT-BLOCKERS.md`
* `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md`
* `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md`
* `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md`
* `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md`
* `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md`
* `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md`

Waar bronbestanden elkaar in tijd of status lijken te overlappen, is dat hierboven gemarkeerd als `Controle nodig`.

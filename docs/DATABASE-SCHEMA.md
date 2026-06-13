# Database Schema

## Doel

Dit document legt de centrale database- en schemahoofdlijnen van `SAM MVP Release 1` vast.

Het document beschrijft:

* de `PostgreSQL`/`Prisma 7`-richting;
* de scope van `schema v0`;
* het migratiebeleid;
* het beleid rond generated Prisma client-output;
* de persistence-boundary;
* de secrets- en `DATABASE_URL`-grenzen.

## Databasehoofdrichting

De databasehoofdrichting van `SAM MVP Release 1` is:

* `PostgreSQL`
* `Prisma 7`
* `schema v0`
* lokale dev/test-database via `Docker` + `PostgreSQL`

Deze richting betekent:

* relationele opslag voor de MVP-kern;
* `Prisma` als schema-, migratie- en clienttooling;
* een gecontroleerde route via migrations in plaats van losse databasewijzigingen;
* een lokale dev/test-richting die los blijft van productie en staging.

## Schema v0-scope

`schema v0` blijft bewust MVP-minimaal.

Het schema blijft gericht op `SAM MVP Release 1` en mag alleen de minimale kern van het product dragen.

Vastgelegd blijft:

* minimale MVP-modellen;
* geen multi-tenant-modellen in `schema v0`;
* geen billing-modellen in `schema v0`;
* geen `Guardian`-productmodellen in `schema v0`;
* geen verbreding buiten de directe `SAM`-kern zonder expliciet besluit.

## Aantoonbare modellen en tabellen in schema v0

De volgende modellen/tabelnamen zijn aantoonbaar onderdeel van `schema v0` en de lokale database-opbouw:

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

Deze set geldt als de gecontroleerde MVP-kern voor de huidige schema-opbouw.

## Migratiebeleid

Migrations zijn de bron van databasewijzigingen.

Daarmee blijft vastgelegd:

* migrations zijn controleerbaar;
* migrations zijn reviewbaar;
* migrations moeten niet-destructief blijven;
* databasewijzigingen horen niet buiten deze route om te ontstaan.

Niet gebruiken voor deze gecontroleerde MVP-route:

* `prisma db push`

Bestaand auditfeit:

* toegepaste migratie: `20260612213620_init`

Aanvullende uitgangspunten:

* create-only migraties mogen eerst statisch gecontroleerd worden;
* migraties worden pas toegepast na expliciete en gecontroleerde stap;
* migration-bestanden blijven onderdeel van de bron van waarheid samen met `schema.prisma`.

## Generated Prisma client-beleid

De generated Prisma client is een afgeleid artefact.

Bron van waarheid blijft:

* `schema.prisma`
* migrations

Vastgelegde outputlocatie:

* `apps/api/src/generated/prisma`

Aanvullende regels:

* generated output mag geen echte secrets bevatten;
* voorbeeldverwijzingen naar `process.env.DATABASE_URL` in generated output zijn geen echte secrets;
* generated output blijft afgeleid van het schema en is niet de primaire bron voor datamodelbesluiten;
* wijzigingen aan schema of databasebeleid horen niet in generated output thuis.

## Persistence-boundary

De persistence-boundary blijft hard:

* `Prisma` alleen via persistence/data-access;
* routes gebruiken `Prisma` niet direct;
* connectors gebruiken `Prisma` niet direct;
* businesslogica initialiseert geen losse `Prisma`-clients;
* centrale Prisma-clientmodule:
  * `apps/api/src/persistence/prismaClient.ts`

Dat betekent:

* opslagtoegang hoort in repositories of data-access;
* domeinlogica hoort niet rechtstreeks op de ORM te leunen;
* connectoren blijven vrij van databasekennis;
* losse querylogica buiten de persistence-laag past niet bij deze MVP-richting.

## Lokale database-/infrastructuurrichting

De lokale dev/test-richting blijft:

* `Docker` voor lokale `PostgreSQL`
* `PostgreSQL` als lokale ontwikkel- en testdatabase

Compact relevante databasefeiten:

* lokale database: `sam_mvp_dev`
* hostpoort: `5433`

Deze feiten zijn relevant als huidige gecontroleerde richting, maar dit document is geen runtime-statuspagina.

## Secrets- en config-regels

De volgende regels blijven leidend:

* echte `DATABASE_URL` blijft buiten `sam-mvp`;
* geen echte `.env` in repo;
* alleen `.env.example` mag in repo;
* Ricardo beheert echte lokale waarden handmatig buiten repo.

Aanvullend:

* `DATABASE_URL` mag niet met echte waarde in `schema.prisma` staan;
* `DATABASE_URL` wordt later alleen via extern beheerde waarden of tijdelijke sessievariabelen gebruikt;
* Codex mag geen `.env`, `DATABASE_URL` of secrets lezen, openen, tonen, kopieren of wijzigen.

## Bekende database-/Prisma-aandachtspunten

* Prisma compatibility gate: `PASSED_WITH_WARNINGS`
* `EBADENGINE` warning op `@prisma/streams-local@0.1.2`
* required: `node >=22.0.0` of `bun >=1.3.6`
* current: `node v20.19.0`, `npm 10.8.2`
* `3 moderate severity vulnerabilities`

Aanvullende interpretatie:

* deze warnings blokkeren niet automatisch de documentatie- of schema-opbouw;
* ze blijven wel auditwaardige aandachtspunten voor verdere Prisma-runtime- en dependencybesluiten;
* automatische fixes horen niet zonder apart besluit in de MVP-route thuis.

## Wat dit document niet is

Dit document is:

* geen API-routeplan
* geen build-log
* geen runtime-statuspagina
* geen teststrategie
* geen volledige Prisma commandogeschiedenis

Daarom horen de volgende zaken elders thuis:

* API-opbouw in `docs/API-PLAN.md`
* bouwgeschiedenis in `docs/BUILD-LOG.md`
* actuele validatiestatus in `docs/CURRENT-STATUS.md`
* test- en validatieaanpak in `docs/TEST-STRATEGY.md`

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `docs/DATABASE-SCHEMA.md` zijn aangewezen:

* `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md`
* `docs/LOCAL-POSTGRES-STRATEGY.md`
* `docs/LOCAL-PRISMA-MIGRATION-PLAN.md`
* `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md`
* `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md`
* `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md`
* `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md`
* `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md`
* `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`
* `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md`

Daarnaast zijn meegelezen:

* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`
* `docs/TECHNICAL-ARCHITECTURE.md`
* `docs/DOCS-MIGRATION-MATRIX.md`

Zij zijn alleen gebruikt om dit document te laten aansluiten op de huidige consolidatiestructuur en niet als vervanging van de hierboven aangewezen bronset.

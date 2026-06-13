# Test Strategy

## Doel

Dit document legt de centrale test- en validatieaanpak voor `SAM MVP Release 1` vast. De focus ligt op statische controles, handmatige lokale checks, gates, warnings en validatiegrenzen, zonder build-log, database-schema-detail of API-plan te dupliceren.

## Test- en validatieprincipes

De validatievolgorde blijft bewust klein en gecontroleerd:

* eerst statisch controleren
* daarna lokaal valideren
* daarna pas runtime- of database-integratie toelaten
* geen automatische fixes zonder expliciete opdracht
* geen productiechecks in deze fase

Deze volgorde voorkomt dat configuratie-, runtime- of databaseproblemen te vroeg worden vermengd met bredere applicatiebouw.

## Rolverdeling

De rolverdeling voor validatie blijft scherp:

* Ricardo voert lokale `npm`-, `npx`-, `Prisma`-, database-, build- en testcommando's handmatig uit wanneer die expliciet zijn gepland
* Codex mag validatiestappen documenteren, analyseren en afbakenen
* Codex voert zulke commando's niet uit zonder expliciete opdracht

Daarmee blijft handmatige lokale uitvoering gescheiden van documentatie, analyse en repo-bewaking.

## Bestaande gevalideerde checks

De volgende validatiestappen zijn aantoonbaar uitgevoerd of als geldige gate vastgelegd:

* TypeScript-configuratie en `npm run check` zijn lokaal succesvol gebruikt waar dit expliciet is gevalideerd
* Prisma CLI-check is lokaal succesvol uitgevoerd
* Prisma schema `format` en `validate` zijn lokaal succesvol uitgevoerd
* Prisma schema-validatie met extern beheerde `DATABASE_URL` is succesvol uitgevoerd
* de Prisma compatibility gate staat op `PASSED_WITH_WARNINGS`

Compact relevante validatiefeiten:

* `node v20.19.0`
* `npm 10.8.2`
* `prisma 7.8.0`
* `@prisma/client 7.8.0`

Controle nodig:

* `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md` beschrijft een tussenfase waarin de API TypeScript-validatie na `apps/api/src/persistence/prismaClient.ts` nog niet was uitgevoerd. Dat document heeft auditwaarde, maar is niet automatisch de actuele eindsituatie.

## Gates en warnings

De volgende gates en waarschuwingen blijven expliciet onderdeel van de validatiestrategie:

* Prisma compatibility gate: `PASSED_WITH_WARNINGS`
* `EBADENGINE` warning op `@prisma/streams-local@0.1.2`
* required: `node >=22.0.0` of `bun >=1.3.6`
* current: `node v20.19.0`, `npm 10.8.2`
* `3 moderate severity vulnerabilities`
* eerdere `EPERM: operation not permitted, lstat 'C:\Users\Admin'` als historische Codex-uitvoercontextfout

Interpretatie:

* deze warnings blokkeren niet automatisch elke documentatiestap
* ze vragen wel bewuste beoordeling voordat Prisma-runtime, dependencybeleid of verdere integratiestappen als stabiel mogen gelden
* automatische remediatie zonder expliciet besluit past niet binnen deze MVP-route

## Validatiegrenzen

De volgende grenzen blijven hard:

* geen echte secrets in repo
* geen `.env` door Codex lezen of aanpassen
* geen `prisma db push`
* geen database-mutatie zonder expliciet plan
* geen dependency-installatie zonder expliciet besluit

Aanvullend:

* `DATABASE_URL` blijft buiten `sam-mvp`
* lokale secrets en configuratiewaarden worden handmatig buiten de repo beheerd
* validatiestappen mogen geen aanleiding zijn om alsnog impliciet configuratie of secrets in de repo te plaatsen

## Beoogde volgende validatiestappen

Veilige volgende validatiestappen zijn:

* controleren of de geconsolideerde kernbestanden onderling consistent blijven
* API-mapverantwoordelijkheden statisch controleren
* de bestaande health-route opnieuw handmatig valideren indien nodig
* Prisma runtime- of database-integratie pas testen na een goedgekeurd plan

## Wat dit document niet is

Dit document is niet bedoeld als:

* build-log
* database-schema-detaildocument
* API-routeplan
* runtime-statuspagina
* automatische testimplementatie

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `docs/TEST-STRATEGY.md` zijn aangewezen:

* `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md`
* `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md`
* `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md`
* `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md`
* `docs/ENVIRONMENT-BLOCKERS.md`

Daarnaast zijn meegelezen:

* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`
* `docs/BUILD-LOG.md`
* `docs/DATABASE-SCHEMA.md`
* `docs/API-PLAN.md`
* `docs/DOCS-MIGRATION-MATRIX.md`

Deze extra documenten zijn alleen gebruikt om de teststrategie goed te laten aansluiten op de geconsolideerde kernstructuur.

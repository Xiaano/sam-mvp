# Docs Pipeline Proposal

## 1. Huidige documentatiebestanden

| Bestand | Huidige functie | Overlap | Advies | Te behouden informatie |
| --- | --- | --- | --- | --- |
| `README.md` | Hoofdstatus van de repo, guardrails en voortgangsoverzicht. | Grote overlap met `docs/APPROVED-DECISIONS-INDEX.md`, veel `LOCAL-*` validaties en meerdere beslisdocs. | Actief, maar te breed. Later terugbrengen naar korte ingangspagina plus verwijzingen. | Projectidentiteit, huidige projectstatus, hoofdguardrails, oude SAM V2 alleen testcontext, secrets buiten repo, kernlocaties zoals Prisma output en Docker/DB richting. |
| `docs/README.md` | Korte ingang voor docs-map. | Overlap met root `README.md` en `APPROVED-DECISIONS-INDEX.md`. | Ondersteunend, later waarschijnlijk archiveerbaar of opgaan in `CURRENT-STATUS.md`. | Dat docs alleen goedgekeurde informatie mogen bevatten en dat losse ideeen geen bron van waarheid zijn. |
| `docs/APPROVED-DECISIONS-INDEX.md` | Centrale index van goedgekeurde keuzes, guardrails en veel statusregels. | Overlap met bijna alle beslissing-, strategie- en validatiedocumenten. | Actief, maar opschonen tot alleen duurzame besluiten en guardrails. | Goedgekeurde hoofdkeuzes, verboden scope, secrets policy, connector boundary, Source Authority, database/API/Prisma hoofdrichting. |
| `docs/API-FIRST-BUILD-DECISION.md` | Vastlegging dat verdere opbouw API-first gebeurt. | Overlap met `API-PLAN.md`-to-be, `TECHNICAL-ARCHITECTURE.md`-to-be en root `README.md`. | Ondersteunend, later opnemen in `TECHNICAL-ARCHITECTURE.md` en `API-PLAN.md`. | Waarom API-first is gekozen en dat cockpit pas zinvol is na stabiele kernflow. |
| `docs/API-FRAMEWORK-DECISION.md` | Besluit voor Fastify als API-framework en boundaryregels voor routes/services/connectors. | Overlap met `API-FIRST-BUILD-DECISION.md`, `API-RUNTIME-STRATEGY-DECISION.md`, `apps/api/README.md`. | Actief inhoudelijk, maar later comprimeren naar `API-PLAN.md` en `TECHNICAL-ARCHITECTURE.md`. | Fastify-keuze, reden, route/service/repository/connector boundary. |
| `docs/API-RUNTIME-STRATEGY-DECISION.md` | Besluit dat lokale runtime licht blijft, waarschijnlijk via `tsx`. | Overlap met `LOCAL-TSX-INSTALL-STEPS.md`, root `README.md`, runtime-validaties. | Ondersteunend, later opnemen in `API-PLAN.md` en `BUILD-LOG.md`. | Waarom lichte runtime is gekozen, geen productiebuild, geen Docker runtime voor API in deze fase. |
| `docs/ENVIRONMENT-BLOCKERS.md` | Historiek van npm/omgeving blockers en Prisma warnings. | Overlap met diverse install- en gate-docs. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `BUILD-LOG.md`. | Eerdere npm-permissieproblemen, Prisma warnings, welke blokkades opgelost of alleen gemonitord zijn. |
| `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md` | Plan voor handmatige TS-validatie van de API na Prisma client module. | Overlap met `LOCAL-PRISMA-ADAPTER-DEPENDENCY-DECISION.md`, root `README.md`, validatiedocs. | Verouderd/ondersteunend; deels ingehaald door latere dependency-stap. Later archiveren na samenvatting in `TEST-STRATEGY.md` en `BUILD-LOG.md`. | Dat TS-validatie een aparte handmatige stap is en dat Prisma 7 runtime-inrichting een dependencygrens had. |
| `docs/LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md` | Beschrijft hoe lokale Docker/Postgres-compose eruit mag zien. | Overlap met `LOCAL-POSTGRES-STRATEGY.md`, `LOCAL-EXTERNAL-CONFIG-RUNBOOK.md`, `LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`. | Ondersteunend, later opnemen in `TECHNICAL-ARCHITECTURE.md` en `DATABASE-SCHEMA.md`. | Docker als voorkeursroute, `postgres:16-alpine`, hostpoort flexibiliteit, volume- en secretgrenzen. |
| `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md` | Runbook voor externe secrets/config buiten repo. | Overlap met `LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`, `LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`, `config/README.md`. | Actief inhoudelijk, maar later samenbrengen in `CODEX-WORKFLOW.md` en `CURRENT-STATUS.md`. | Geen `.env` in repo, PowerShell variabelen en secrets buiten `sam-mvp`. |
| `docs/LOCAL-FASTIFY-INSTALL-STEPS.md` | Voorbereiding en afronding van lokale Fastify-installatie. | Overlap met `API-FRAMEWORK-DECISION.md`, root `README.md`, `BUILD-LOG`-to-be. | Archiveerbaar na overname in `BUILD-LOG.md`. | Dat Fastify lokaal is toegevoegd en dat dit zonder backendlogica of endpoints gebeurde. |
| `docs/LOCAL-INSTALL-STEPS.md` | Voorbereiding en afronding van lokale TypeScript-installatie. | Overlap met `TYPESCRIPT-DECISION.md`, root `README.md`, `BUILD-LOG`-to-be. | Archiveerbaar na overname in `BUILD-LOG.md`. | Node/npm/TypeScript versies, dat Ricardo lokaal installeerde en Codex niet. |
| `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md` | Validatie dat lokale Postgres-container draait en healthy is. | Overlap met `LOCAL-POSTGRES-STRATEGY.md`, `LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md`, root `README.md`. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md`, detail naar `BUILD-LOG.md`. | Dat container `sam-mvp-postgres` healthy is, poorten, gevalideerde DB/user, geen Prisma-acties in die stap. |
| `docs/LOCAL-POSTGRES-STRATEGY.md` | Goedkeuring van lokale PostgreSQL-richting met Docker als voorkeur. | Overlap met compose-strategie en externe config-runbooks. | Actief inhoudelijk, later opnemen in `DATABASE-SCHEMA.md` en `TECHNICAL-ARCHITECTURE.md`. | PostgreSQL als lokale dev/test DB, Docker voorkeur, secrets buiten repo, volgorde van inrichting. |
| `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md` | Validatie van aangemaakte tabellen en `_prisma_migrations`. | Overlap met migratie-validatiedocs en root `README.md`. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `BUILD-LOG.md`. | Welke tabellen bestaan en dat migratie `20260612213620_init` geregistreerd is. |
| `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md` | Handmatige PowerShell-variabelen voor lokale Postgres-config. | Overlap met `LOCAL-EXTERNAL-CONFIG-RUNBOOK.md` en `LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`. | Archiveerbaar na samenvatting in `CODEX-WORKFLOW.md` of `DATABASE-SCHEMA.md`. | Welke variabelen nodig zijn en dat ze tijdelijk per sessie gezet worden. |
| `docs/LOCAL-PRISMA-ADAPTER-DEPENDENCY-DECISION.md` | Besluit dat Prisma 7 adapter- en Node-typing dependencies apart nodig waren. | Overlap met `LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md`, root `README.md`, later dependency-status. | Verouderd als besluitmoment, maar historisch belangrijk. Later naar `BUILD-LOG.md`; daarna archiveerbaar. | Waarom `@prisma/adapter-pg`, `pg`, `@types/node` en mogelijk `@types/pg` nodig waren. |
| `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md` | Plan voor Prisma integratie alleen via persistence-laag. | Overlap met `SOURCE-AUTHORITY-GUARDRAIL.md`, `API-FRAMEWORK-DECISION.md`, `TECHNICAL-ARCHITECTURE`-to-be. | Actief inhoudelijk, later opnemen in `TECHNICAL-ARCHITECTURE.md` en `API-PLAN.md`. | Centrale Prisma-clientmodule, geen Prisma in routes/connectors, stapsgewijze app-integratie. |
| `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md` | Plan en resultaat voor lokale Prisma CLI-check. | Overlap met `PRISMA-RUNTIME-COMPATIBILITY-GATE.md`, root `README.md`, `BUILD-LOG`-to-be. | Archiveerbaar na overname in `BUILD-LOG.md` en samenvatting in `TEST-STRATEGY.md`. | Dat Prisma CLI lokaal werkte met de gekozen versies en zonder `.env`. |
| `docs/LOCAL-PRISMA-CLIENT-MODULE-VALIDATION.md` | Statische controle van centrale Prisma client module. | Overlap met `LOCAL-PRISMA-APP-INTEGRATION-PLAN.md`, root `README.md`, `API-PLAN`-to-be. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `BUILD-LOG.md`. | Importpad, singleton-patroon, geen queries, geen secrets/logging, geen routes/services/connectors toegevoegd. |
| `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md` | Runbook voor externe `DATABASE_URL` buiten repo. | Overlap met `LOCAL-EXTERNAL-CONFIG-RUNBOOK.md` en `LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`. | Ondersteunend, later samenbrengen in `CODEX-WORKFLOW.md` en `DATABASE-SCHEMA.md`. | `DATABASE_URL` blijft buiten repo, alleen tijdelijke PowerShell-sessievariabele. |
| `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md` | Statische controle van gegenereerde Prisma output en repo-hygiene. | Overlap met `LOCAL-PRISMA-GENERATE-VALIDATION.md`, `.gitignore`-beleid, root `README.md`. | Ondersteunend, later samenvatten in `BUILD-LOG.md` en `DATABASE-SCHEMA.md`. | Dat generated output bestaat, van schema afgeleid is, geen secrets bevat en dat gitignore-beleid aandacht vroeg. |
| `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md` | Validatie dat `prisma generate` lokaal succesvol liep. | Overlap met generated-output-validatie en root `README.md`. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `BUILD-LOG.md`. | Prisma Client 7.8.0 gegenereerd naar `apps/api/src/generated/prisma`, zonder DB-mutatie. |
| `docs/LOCAL-PRISMA-INSTALL-STEPS.md` | Voorbereiding en afronding van lokale Prisma-installatie met warnings. | Overlap met compatibility gate, blockers, root `README.md`. | Ondersteunend, later samenvatten in `BUILD-LOG.md`; daarna archiveerbaar. | Prisma/@prisma/client versies, EBADENGINE warning, audit-meldingen, geen schema/DB/.env. |
| `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md` | Validatie dat bestaande create-only migratie via `migrate deploy` is toegepast. | Overlap met `LOCAL-POSTGRES-TABLES-VALIDATION.md`, root `README.md`, migration plan docs. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `BUILD-LOG.md`. | Migratie `20260612213620_init` succesvol toegepast; schema up to date. |
| `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md` | Statische controle van create-only migratiebestanden. | Overlap met `LOCAL-PRISMA-MIGRATION-PLAN.md`, root `README.md`. | Ondersteunend, later samenvatten in `BUILD-LOG.md` en `DATABASE-SCHEMA.md`. | `migration.sql` veilig, geen destructieve statements, consistent met schema. |
| `docs/LOCAL-PRISMA-MIGRATION-PLAN.md` | Plan voor volgende gecontroleerde migratiestap. | Overlap met create-only/applied validation docs en `prisma.config.ts`-strategie. | Ondersteunend; delen nog relevant voor `DATABASE-SCHEMA.md`, daarna archiveerbaar. | Voorkeursroute `migrate dev` met `prisma.config.ts`, geen `db push`, geen `.env` in repo. |
| `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md` | Plan en resultaat voor `prisma format`, `prisma validate` en `npm run check`. | Overlap met schema-validatie met `DATABASE_URL`, root `README.md`. | Ondersteunend, later samenvatten in `TEST-STRATEGY.md` en `BUILD-LOG.md`. | Dat schema v0 format/validate geslaagd is en zonder DB/generate/.env gebeurde. |
| `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md` | Validatie van schema met externe `DATABASE_URL`. | Overlap met schema-check-steps en `DATABASE_URL` runbook. | Ondersteunend, later samenvatten in `BUILD-LOG.md` en `DATABASE-SCHEMA.md`. | Schema is valide met extern beheerde runtime-URL en zonder DB-mutatie. |
| `docs/LOCAL-TSX-INSTALL-STEPS.md` | Voorbereiding en afronding van lokale `tsx`-installatie. | Overlap met runtime-strategie en root `README.md`. | Archiveerbaar na overname in `BUILD-LOG.md`. | Dat `tsx` is toegevoegd en dat runtime tooling zonder extra endpoints of backendlogica blijft. |
| `docs/PACKAGE-MANAGER-DECISION.md` | Besluit dat `npm workspaces` de package manager-richting is. | Overlap met root `README.md` en workspace-configuratie. | Actief, maar kort genoeg om later op te nemen in `TECHNICAL-ARCHITECTURE.md` of `CODEX-WORKFLOW.md`. | `npm workspaces` is gekozen; geen extra package-manager complexiteit. |
| `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md` | Gate voor Prisma runtime-compatibility met warnings. | Overlap met `ENVIRONMENT-BLOCKERS.md`, `LOCAL-PRISMA-INSTALL-STEPS.md`, CLI/schema checks. | Ondersteunend, later samenvatten in `CURRENT-STATUS.md` en `TEST-STRATEGY.md`. | Node/npm/Prisma versies, EBADENGINE warning, audit-waarschuwingen, gate-status `PASSED_WITH_WARNINGS`. |
| `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md` | Hoofdstrategie voor Prisma 7 schema/config. | Overlap met schema-, migration- en `DATABASE_URL` docs. | Actief inhoudelijk, later opnemen in `DATABASE-SCHEMA.md`. | Generator output expliciet, schema v0 scope, geen echte `DATABASE_URL`, Prisma alleen in persistence. |
| `docs/SOURCE-AUTHORITY-GUARDRAIL.md` | Product- en architectuurregel voor bronhierarchie en AI als laatste laag. | Overlap met bredere scope/guardrails in root `README.md` en decisions index. | Actief en essentieel. Later opnemen in `SCOPE.md` en `TECHNICAL-ARCHITECTURE.md`. | Bronhierarchie, confidence-niveaus, geen AI als primaire waarheid, source adapters gescheiden van connectors. |
| `docs/TYPESCRIPT-DECISION.md` | Besluit dat TypeScript de primaire taalrichting is. | Overlap met install/config/status docs. | Actief, maar compact genoeg om later op te nemen in `TECHNICAL-ARCHITECTURE.md`. | Waarom TypeScript is gekozen en dat het repo-breed uitgangspunt is. |

## 2. Voorgestelde nieuwe document-pipeline

### `README.md`

- Doel: korte ingang voor mensen en agents die de repo openen.
- Welke informatie erin hoort: projectdoel, huidige globale status, kernlinks naar de belangrijkste docs, niet-onderhandelbare guardrails in zeer korte vorm.
- Welke informatie er niet in hoort: volledige changelog, alle lokale validatiestappen, detailrunbooks, duplicaten van beslisdocumenten.
- Wanneer Codex dit bestand moet lezen: altijd als eerste bestand bij een nieuwe taak in `sam-mvp`.

### `docs/CURRENT-STATUS.md`

- Doel: een compacte, actuele bron van waarheid voor de nu geldende technische toestand.
- Welke informatie erin hoort: laatst gevalideerde runtime-status, Prisma-status, database-status, open blockers/warnings, wat al lokaal bewezen is en wat nog niet.
- Welke informatie er niet in hoort: rationale van oude keuzes, complete commandologs, uitgebreide historie per stap.
- Wanneer Codex dit bestand moet lezen: bij elke taak die voortbouwt op de huidige repo-status, installaties, runtime, Prisma of lokale omgeving.

### `docs/APPROVED-DECISIONS-INDEX.md`

- Doel: index van goedgekeurde duurzame besluiten en guardrails.
- Welke informatie erin hoort: gekozen stackrichting, package manager, Fastify, TypeScript, Prisma/Postgres, Source Authority, connector boundary, secrets policy.
- Welke informatie er niet in hoort: stap-voor-stap validaties, installatielogs, tijdelijke warnings die al elders historisch staan.
- Wanneer Codex dit bestand moet lezen: altijd na `README.md`, voordat nieuwe bouw- of documentatiestappen worden voorbereid.

### `docs/BUILD-LOG.md`

- Doel: chronologische vastlegging van uitgevoerde technische stappen en validaties.
- Welke informatie erin hoort: wat Ricardo lokaal uitvoerde, welke uitkomst dat had, welke artefacten ontstonden, welke warnings toen golden.
- Welke informatie er niet in hoort: structurele architectuurregels of productscope.
- Wanneer Codex dit bestand moet lezen: wanneer een taak afhankelijk is van historische context, eerdere installaties of eerdere validaties.

### `docs/CODEX-WORKFLOW.md`

- Doel: vaste spelregels voor hoe Codex veilig binnen deze repo mag werken.
- Welke informatie erin hoort: wat Codex wel en niet mag uitvoeren, omgang met secrets, `.env`, externe PowerShell-variabelen, wanneer Ricardo handmatig iets doet, wat eerst gelezen moet worden.
- Welke informatie er niet in hoort: inhoudelijke productbesluiten of database-architectuurdetails.
- Wanneer Codex dit bestand moet lezen: aan het begin van alle taken die tooling, configuratie, secrets of lokale uitvoering raken.

### `docs/SCOPE.md`

- Doel: functionele en productmatige afbakening van SAM MVP.
- Welke informatie erin hoort: MVP-grenzen, Source Authority, uitgesloten modules, AI als laatste conceptlaag, wat buiten scope blijft.
- Welke informatie er niet in hoort: Fastify-, Prisma- of Docker-details.
- Wanneer Codex dit bestand moet lezen: bij nieuwe featureverzoeken, productuitbreidingen, connectorvragen en AI-gerelateerde productlogica.

### `docs/TECHNICAL-ARCHITECTURE.md`

- Doel: geconsolideerde technische hoofdlijnen van de repo.
- Welke informatie erin hoort: API-first, monorepo-richting, Fastify, TypeScript, persistence-laag, route/service/repository/connector boundaries, Docker/Postgres hoofdrichting.
- Welke informatie er niet in hoort: losse installatiestappen of volledige commandogeschiedenis.
- Wanneer Codex dit bestand moet lezen: bij elke taak die code-structuur, mappen, boundaries of integratiepatronen raakt.

### `docs/DATABASE-SCHEMA.md`

- Doel: centrale plek voor Prisma/Postgres ontwerpstatus en databasewaarheid.
- Welke informatie erin hoort: Prisma 7 strategie, schema v0 scope, migratiebeleid, gegenereerde client als afgeleid artefact, database-runbooks in samengevatte vorm.
- Welke informatie er niet in hoort: volledige PowerShell-runbooks of uitgebreide historische installatielogs.
- Wanneer Codex dit bestand moet lezen: voor alle Prisma-, schema-, migratie-, generated client- en databasevragen.

### `docs/API-PLAN.md`

- Doel: concrete planlaag voor de API-opbouw.
- Welke informatie erin hoort: API-first reden, Fastify-keuze, runtime-richting, health endpoint-context, toekomstige mapverantwoordelijkheden, Prisma via persistence only.
- Welke informatie er niet in hoort: productscope of database-runbookdetails.
- Wanneer Codex dit bestand moet lezen: bij alle API-, route-, service-, runtime- en persistence-integratietaken.

### `docs/TEST-STRATEGY.md`

- Doel: centrale plek voor handmatige en later geautomatiseerde validatiestrategie.
- Welke informatie erin hoort: welke checks lokaal door Ricardo gebeuren, welke gates bestaan, hoe TypeScript/Prisma/schema/runtime stap voor stap gevalideerd worden.
- Welke informatie er niet in hoort: uitvoerige projectstatus of architectuurbesluiten.
- Wanneer Codex dit bestand moet lezen: voordat nieuwe validatie-, runtime-, Prisma- of integratiestappen worden voorgesteld.

### `docs/archive/`

- Doel: historische documenten behouden zonder dat ze concurreren met de actieve bron van waarheid.
- Welke informatie erin hoort: eenmalige installatiestappen, afgeronde validaties, verouderde tussenplannen, oudere gate-momenten die wel nog auditwaarde hebben.
- Welke informatie er niet in hoort: documenten die nog de actieve, actuele bron van waarheid moeten zijn.
- Wanneer Codex dit bestand moet lezen: alleen als historische onderbouwing nodig is of als een huidige samenvatting te weinig detail geeft.

## 3. Archiefvoorstel

| Bestand | Reden voor archiveren | Welke informatie eerst moet worden overgenomen |
| --- | --- | --- |
| `docs/README.md` | Dient vooral als tijdelijke ingang en dubbelt root `README.md`. | Regel dat docs alleen goedgekeurde informatie mogen bevatten. |
| `docs/LOCAL-FASTIFY-INSTALL-STEPS.md` | Eenmalige installatiestap; geen actieve bron van waarheid. | Dat Fastify lokaal door Ricardo is toegevoegd en zonder endpoints/logica. |
| `docs/LOCAL-INSTALL-STEPS.md` | Eenmalige TypeScript-installatiehistorie. | Node/npm/TypeScript versies en dat Codex de installatie niet uitvoerde. |
| `docs/LOCAL-TSX-INSTALL-STEPS.md` | Eenmalige runtime-tooling installatie. | Dat `tsx` lokaal beschikbaar is en waarom het gekozen is. |
| `docs/LOCAL-PRISMA-INSTALL-STEPS.md` | Eenmalige Prisma-installatie met warnings. | Prisma-versies, EBADENGINE/audit-waarschuwingen, geen `.env`/schema/DB in die stap. |
| `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md` | Uitgevoerde check met historische waarde, maar niet meer actief als los document. | Dat Prisma CLI lokaal werkte met de gekozen versies. |
| `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md` | Uitgevoerde schema check; detail hoort in buildlog/teststrategie. | Dat `prisma format`, `prisma validate` en `npm run check` slaagden. |
| `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md` | Puntvalidatie; beter als statusregel in database/test-documenten. | Dat schema geldig is met extern beheerde `DATABASE_URL`. |
| `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md` | Historische tussenstap voor migratieaudit. | Dat `migration.sql` veilig was en overeenkwam met schema. |
| `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md` | Historisch deploymoment. | Dat `20260612213620_init` via `migrate deploy` is toegepast. |
| `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md` | Validatiemoment, niet de structurele architectuur zelf. | Containernaam, image, status healthy, hostpoort 5433, DB/user validatie. |
| `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md` | Puntvalidatie van tabellen na migratie. | Welke tabellen bestaan en dat `_prisma_migrations` is gevuld. |
| `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md` | Eenmalige generate-validatie. | Dat Prisma Client 7.8.0 is gegenereerd naar `apps/api/src/generated/prisma`. |
| `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md` | Statische output-check met vooral historische repo-hygiene context. | Dat output gegenereerd is, geen secrets bevat en uit schema-outputpad volgt. |
| `docs/LOCAL-PRISMA-CLIENT-MODULE-VALIDATION.md` | Puntvalidatie van een specifiek bouwsteenbestand. | Dat centrale Prisma client module statisch klopt en geen queries of secrets bevat. |
| `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md` | Tussenplan met deels verouderde dependency-context. | Dat TS-validatie een aparte handmatige stap is en waar de Prisma 7 grens zat. |
| `docs/LOCAL-PRISMA-ADAPTER-DEPENDENCY-DECISION.md` | Besluitmoment is historisch zodra dependencies zijn toegevoegd. | Waarom adapter- en type-dependencies nodig waren. |
| `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md` | Detailrunbook dat beter in workflow/config-samenvatting past. | Benodigde PowerShell-variabelen en dat ze sessiegebonden zijn. |
| `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md` | Detailrunbook; kernregel hoort in workflow/config docs. | Dat `DATABASE_URL` buiten repo blijft en tijdelijk lokaal wordt gezet. |
| `docs/ENVIRONMENT-BLOCKERS.md` | Historische blockers/warnings; nuttig maar niet als hoofdbron. | Eerdere npm-permissieproblemen, Prisma warnings, huidige blockerstatus. |

## 4. Risico's

- Grootste risico is dubbele waarheid zolang `README.md`, `APPROVED-DECISIONS-INDEX.md` en meerdere `LOCAL-*` documenten tegelijk actuele status blijven claimen.
- Migratie zonder vaste overnamematrix kan leiden tot verlies van kleine maar belangrijke details, zoals exacte versies, warning-status of waarom een stap handmatig door Ricardo gebeurde.
- Sommige documenten bevatten nog historisch relevante "tussenwaarheden" die later zijn ingehaald; als die zonder markering blijven staan, ontstaat verwarring over wat nu echt geldt.
- Secrets- en `.env`-beleid staat op veel plekken herhaald. Bij slordige samenvoeging kan een nuance verdwijnen, terwijl dit juist een harde guardrail is.
- Source Authority is productkritisch maar staat nu relatief los van de technische docs. Zonder expliciete opname in `SCOPE.md` en `TECHNICAL-ARCHITECTURE.md` kan die regel te makkelijk uit beeld raken.
- De huidige set bevat zowel beslissing, plan, runbook als validatie in losse documenten. Zonder duidelijk onderscheid tussen "besluit", "status" en "historie" blijft het risico op documentwildgroei bestaan.

## 5. Volgende veilige stap

Maak na goedkeuring eerst een migratiematrix in een apart document of issue waarin per bestaand bestand exact wordt vastgelegd:

1. naar welk nieuw kernbestand de essentie verhuist;
2. welke zinnen of feiten letterlijk behouden moeten blijven;
3. of het oude bestand daarna `ondersteunend` blijft of naar `docs/archive/` mag.

Pas daarna pas de eerste inhoudelijke consolidatie uit, te beginnen met `README.md`, `CURRENT-STATUS.md` en `BUILD-LOG.md`, omdat daar nu de meeste dubbele statusinformatie zit.

# Docs Migration Matrix

## 1. Doel

Deze matrix voorkomt dat informatie verloren gaat tijdens latere documentatieconsolidatie.

De matrix legt per bestaand document vast:

* welke status het document nu heeft;
* naar welk toekomstig kernbestand de inhoud moet verhuizen;
* welke feiten exact behouden moeten blijven;
* welke formuleringen letterlijk behouden moeten blijven;
* onder welke voorwaarde een document pas later naar `docs/archive/` mag.

## 2. Migratiematrix per bestaand document

| Huidig bestand | Status | Nieuwe bestemming | Exact te behouden feiten | Letterlijk te behouden regels of formuleringen | Mag later naar `docs/archive/` | Voorwaarde voor archiveren |
| --- | --- | --- | --- | --- | --- | --- |
| `README.md` | actief | `README.md`; `docs/CURRENT-STATUS.md`; `docs/CODEX-WORKFLOW.md` | repo is frisse start; oude `SAM V2` is alleen testcontext; Fastify/TypeScript/Prisma/Postgres zijn gekozen; `schema.prisma v0`, `prisma.config.ts` en generated client bestaan; secrets blijven buiten repo; lokale runtime, migratie en generate zijn uitgevoerd; er zijn nog geen businesslogica, WooCommerce connector en extra API-endpoints | "Dit is een nieuwe start."; "Oude `SAM V2` is alleen testcontext."; "Echte secrets blijven buiten `sam-mvp`."; "`DATABASE_URL` blijft buiten `sam-mvp`."; "Codex mag geen `.env` of secrets lezen." | nee | eerst opsplitsen in compacte landing page plus status-overname zonder verlies van actuele feiten |
| `docs/README.md` | ondersteunend | `docs/CURRENT-STATUS.md`; `docs/CODEX-WORKFLOW.md` | docs-map moet alleen goedgekeurde of expliciet vastgelegde informatie bevatten | "geen losse ideeen zonder besluit" | ja | pas archiveren nadat deze regel zichtbaar terugkomt in workflow/status-documentatie |
| `docs/APPROVED-DECISIONS-INDEX.md` | actief | `docs/APPROVED-DECISIONS-INDEX.md`; `docs/SCOPE.md`; `docs/TECHNICAL-ARCHITECTURE.md`; `docs/DATABASE-SCHEMA.md`; `docs/CODEX-WORKFLOW.md` | gekozen hoofdrichtingen, guardrails, connector boundary, secrets policy, Source Authority, Prisma/Postgres/Fastify/TypeScript/package manager; document bevat ook historische statusregels die deels verouderd lijken en daarom controle nodig hebben | "Connectors: geen Prisma, geen databasekennis"; "Source Authority: bronnen zijn leidend, `AI` is last resort"; "Alleen `.env.example` in `sam-mvp`"; "Codex mag geen `.env`-bestanden lezen/openen/tonen/kopieren/wijzigen" | nee | eerst index opschonen tot duurzame besluiten; historische statusregels alleen verplaatsen na controle |
| `docs/DOCS-PIPELINE-PROPOSAL.md` | ondersteunend | `docs/CODEX-WORKFLOW.md`; `docs/BUILD-LOG.md`; `docs/TECHNICAL-ARCHITECTURE.md` | eerste vereenvoudigingsvoorstel, statusindeling van docs en voorgestelde kernset | "README.md"; "`docs/CURRENT-STATUS.md`"; "`docs/archive/`" | ja | pas archiveren nadat migratiematrix en eerste consolidatiestap zijn goedgekeurd |
| `docs/API-FIRST-BUILD-DECISION.md` | ondersteunend | `docs/TECHNICAL-ARCHITECTURE.md`; `docs/API-PLAN.md` | API-first is gekozen zodat kernflow eerst functioneel klopt vóór cockpituitbouw | "SAM MVP Release 1 wordt vanaf deze fase API-first opgebouwd." | ja | pas archiveren nadat API-first rationale is opgenomen in architectuur en API-plan |
| `docs/API-FRAMEWORK-DECISION.md` | ondersteunend | `docs/API-PLAN.md`; `docs/TECHNICAL-ARCHITECTURE.md` | Fastify is gekozen; routes mogen geen businesslogica of directe Prisma-toegang hebben; services gebruiken repositories; connectors blijven vrij van Prisma | "Gebruik Fastify als API-frameworkrichting voor SAM MVP Release 1."; "Fastify routes mogen geen Prisma direct gebruiken"; "connectors blijven vrij van Prisma en databasekennis" | ja | pas archiveren nadat frameworkbesluit en boundaries expliciet zijn overgenomen |
| `docs/API-RUNTIME-STRATEGY-DECISION.md` | ondersteunend | `docs/API-PLAN.md`; `docs/BUILD-LOG.md` | lichte lokale runtime via `tsx`-richting; `/health` lokaal testbaar; geen productiebuild of deployment in deze fase | "Gebruik voor lokale ontwikkeling een lichte TypeScript runtime-aanpak, waarschijnlijk via tsx" | ja | pas archiveren nadat runtime-richting en fasering in API-plan en build-log staan |
| `docs/ENVIRONMENT-BLOCKERS.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/TEST-STRATEGY.md` | eerdere npm EPERM-context; latere Prisma warnings; blockerstatus veranderde door de tijd; actuele betekenis moet bij overname expliciet gecontroleerd worden | "`EPERM: operation not permitted, lstat 'C:\\Users\\Admin'`"; "Prisma install warnings" | ja | pas archiveren nadat blockers chronologisch zijn vastgelegd en actuele blockerstatus is gecontroleerd |
| `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md` | historisch | `docs/TEST-STRATEGY.md`; `docs/BUILD-LOG.md` | TypeScript-validatie voor API was aparte stap; Prisma 7 constructor/adapter boundary veroorzaakte een tijdelijk validatieprobleem | "TypeScript-validatie mag pas na deze planstap handmatig worden uitgevoerd door Ricardo." | ja | pas archiveren nadat teststrategie en build-log de mislukte en vervolgde validatiestappen bevatten |
| `docs/LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md` | ondersteunend | `docs/TECHNICAL-ARCHITECTURE.md`; `docs/DATABASE-SCHEMA.md`; `docs/CODEX-WORKFLOW.md` | Docker is voorkeursroute voor lokale Postgres; `postgres:16-alpine`; hostpoort kan afwijken van `5432`; nog geen compose-executie in deze stap | "Voor lokale ontwikkeling wordt Docker de voorkeursroute voor PostgreSQL."; "hostpoort later afwijken van 5432, bijvoorbeeld 5433" | ja | pas archiveren nadat compose-richting, image en poortbeleid zijn vastgelegd in architectuur/database docs |
| `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md` | actief | `docs/CODEX-WORKFLOW.md`; `docs/CURRENT-STATUS.md`; `docs/DATABASE-SCHEMA.md` | lokale configuratie en secrets worden extern beheerd; geen `.env` in repo; voorbeeldlocatie buiten repo is documentair relevant; Codex mag secrets niet zien | "Echte secrets blijven buiten sam-mvp."; "Codex mag deze waarden niet lezen, openen, tonen, kopieren of wijzigen." | ja | pas archiveren nadat externe config-regels expliciet zijn geconsolideerd |
| `docs/LOCAL-FASTIFY-INSTALL-STEPS.md` | historisch | `docs/BUILD-LOG.md` | Fastify werd lokaal door Ricardo toegevoegd; check bleef slagen; nog geen serverbestand/endpoints in die stap | "Fastify toevoegen als runtime dependency voor apps/api." | ja | pas archiveren nadat installatiemoment en uitkomst in build-log zijn opgenomen |
| `docs/LOCAL-INSTALL-STEPS.md` | historisch | `docs/BUILD-LOG.md`; `docs/TEST-STRATEGY.md` | TypeScript werd lokaal aan root toegevoegd; node/npm/ts-versies zijn auditwaardig; Codex voerde geen npm-installatie uit | "Codex voert voorlopig geen npm-installaties uit" | ja | pas archiveren nadat versies en lokale uitvoerder in build-log staan |
| `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | container `sam-mvp-postgres` draaide healthy op hostpoort `5433`; databaseverbinding met `psql` bevestigd; `current_database: sam_mvp_dev`; `current_user: sam_mvp_local` | "container: sam-mvp-postgres"; "status: healthy"; "hostpoort: 5433" | ja | pas archiveren nadat runtime-validatie als statusfeit en historisch moment is overgenomen |
| `docs/LOCAL-POSTGRES-STRATEGY.md` | ondersteunend | `docs/DATABASE-SCHEMA.md`; `docs/TECHNICAL-ARCHITECTURE.md`; `docs/CODEX-WORKFLOW.md` | PostgreSQL is lokale opslagrichting; Docker waarschijnlijk/gekozen voorkeursroute; echte `DATABASE_URL` buiten repo; geen oude V2-database kopieren | "Gebruik later een lokale `PostgreSQL`-database voor ontwikkeling en test." | ja | pas archiveren nadat strategie, grenzen en secrets-regels elders zijn vastgelegd |
| `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | tabellen `Action`, `Execution`, `HistoryItem`, `Issue`, `Operator`, `Product`, `Proposal`, `ScanRun`, `SourceData`, `UserDecision`, `_prisma_migrations`; migratie `20260612213620_init` geregistreerd | "De volgende migratie is geregistreerd in _prisma_migrations: * 20260612213620_init" | ja | pas archiveren nadat tabelset en migratieregistratie expliciet in database-status staan |
| `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md` | ondersteunend | `docs/CODEX-WORKFLOW.md`; `docs/DATABASE-SCHEMA.md` | benodigde tijdelijke PowerShell-variabelen: `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST_PORT`; waarden alleen sessiegebonden | "Deze waarden worden alleen tijdelijk in de `PowerShell`-sessie gezet." | ja | pas archiveren nadat sessievariabele-beleid is overgenomen |
| `docs/LOCAL-PRISMA-ADAPTER-DEPENDENCY-DECISION.md` | historisch | `docs/BUILD-LOG.md`; `docs/API-PLAN.md`; `docs/TEST-STRATEGY.md` | Prisma 7 PostgreSQL runtime vereiste aparte dependencybeslissing; toen ontbraken `@prisma/adapter-pg` en `pg`; ook `@types/node` en mogelijk `@types/pg` nodig | "Voor veilige Prisma 7 PostgreSQL-integratie is een aparte dependency-stap nodig." | ja | pas archiveren nadat dependencygrens en latere installatie als historie zijn vastgelegd |
| `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md` | ondersteunend | `docs/API-PLAN.md`; `docs/TECHNICAL-ARCHITECTURE.md`; `docs/DATABASE-SCHEMA.md` | Prisma alleen via centrale persistence-laag; voorkeurslocatie `apps/api/src/persistence/prismaClient.ts`; routes/connectors/businesslogica mogen niet rechtstreeks initialiseren | "Prisma mag later alleen via een duidelijke data-access laag worden gebruikt."; "Routes, connectors en businesslogica mogen niet rechtstreeks Prisma Client initialiseren." | ja | pas archiveren nadat integratieprincipes en volgorde zijn overgenomen |
| `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md` | historisch | `docs/BUILD-LOG.md`; `docs/TEST-STRATEGY.md` | `npx prisma -v` werkte lokaal; `npm run check` bleef slagen; geen schema/database/migraties/.env toegevoegd in die stap | "`npx prisma -v` werkte succesvol" | ja | pas archiveren nadat CLI-check als gevalideerde stap is gelogd |
| `docs/LOCAL-PRISMA-CLIENT-MODULE-VALIDATION.md` | historisch | `docs/BUILD-LOG.md`; `docs/API-PLAN.md`; `docs/DATABASE-SCHEMA.md` | `prismaClient.ts` bestaat; import uit generated output; één centrale instance; `globalThis` singleton; geen queries, routes, services of connectors toegevoegd | "Er bestaat een centrale `prisma` instance."; "Er wordt een `globalThis` singleton-patroon gebruikt." | ja | pas archiveren nadat module-validatie en bouwsteenstatus zijn overgenomen |
| `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md` | ondersteunend | `docs/CODEX-WORKFLOW.md`; `docs/DATABASE-SCHEMA.md` | `DATABASE_URL` blijft buiten repo; conceptueel patroon met `localhost:5433/sam_mvp_dev?schema=public`; niet aan Codex geven | "DATABASE_URL blijft buiten sam-mvp."; "De echte waarde wordt niet aan Codex gegeven." | ja | pas archiveren nadat deze regels letterlijk elders terugkomen |
| `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | `npx prisma generate --config prisma.config.ts` uitgevoerd; output `apps/api/src/generated/prisma`; Prisma Client `7.8.0` succesvol gegenereerd | "Generated Prisma Client (7.8.0) to .\\apps\\api\\src\\generated\\prisma" | ja | pas archiveren nadat generate-status en outputpad zijn vastgelegd |
| `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md` | historisch | `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | generated output bestaat en past bij generator-output in schema; geen echte secrets of `DATABASE_URL`; voorbeeldverwijzingen naar `process.env.DATABASE_URL` zijn geen secret; geen oude SAM V2-verwijzingen | "Er zijn wel voorbeeldverwijzingen naar `process.env.DATABASE_URL` aangetroffen in de gegenereerde output. Dit zijn geen secrets" | ja | pas archiveren nadat nuance over generated output en secrets is overgenomen |
| `docs/LOCAL-PRISMA-INSTALL-STEPS.md` | historisch | `docs/BUILD-LOG.md`; `docs/CURRENT-STATUS.md`; `docs/TEST-STRATEGY.md` | Ricardo installeerde `prisma 7.8.0` en `@prisma/client 7.8.0`; `npm run check: GESLAAGD`; `EBADENGINE` warning op `@prisma/streams-local`; `npm audit: 3 moderate vulnerabilities` | "`COMPLETED_WITH_WARNINGS`"; "`EBADENGINE` warning op `@prisma/streams-local`"; "`npm audit: 3 moderate vulnerabilities`" | ja | pas archiveren nadat warnings en versies expliciet zijn gelogd |
| `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | `npx prisma migrate deploy --config prisma.config.ts`; migratie `20260612213620_init` toegepast; Prisma meldde dat alle migraties zijn toegepast en schema up to date is | "All migrations have been successfully applied."; "Database schema is up to date." | ja | pas archiveren nadat applied-status en migratie-ID zijn overgenomen |
| `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md` | historisch | `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | `migration_lock.toml` en `migration.sql` bestaan; migratie was veilig en niet-destructief; logisch consistent met huidige MVP-modellen, enums, indexes en foreign keys | "Er zijn geen destructieve statements aangetroffen." | ja | pas archiveren nadat auditwaarde van de create-only controle is overgenomen |
| `docs/LOCAL-PRISMA-MIGRATION-PLAN.md` | ondersteunend | `docs/DATABASE-SCHEMA.md`; `docs/TEST-STRATEGY.md`; `docs/BUILD-LOG.md` | voorkeursroute `npx prisma migrate dev --config prisma.config.ts --name init`; `db push` niet gebruiken; `--skip-generate` niet gebruiken; `generate` blijft aparte stap; `DATABASE_URL` via `process.env` | "`npx prisma migrate dev --config prisma.config.ts --name init`"; "`npx prisma db push`" | ja | pas archiveren nadat voorkeursmigratiebeleid in database-schema is vastgelegd |
| `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md` | historisch | `docs/BUILD-LOG.md`; `docs/TEST-STRATEGY.md`; `docs/DATABASE-SCHEMA.md` | `prisma format`, `prisma validate` en `npm run check` zijn geslaagd; geen DB/migraties/generate/.env; Codex voerde geen npm/npx-commando's uit | "`prisma format: GESLAAGD`"; "`prisma validate: GESLAAGD`"; "`npm run check: GESLAAGD`" | ja | pas archiveren nadat deze validatiestap chronologisch is vastgelegd |
| `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md` | historisch | `docs/CURRENT-STATUS.md`; `docs/BUILD-LOG.md`; `docs/DATABASE-SCHEMA.md` | `npx prisma validate --schema apps/api/prisma/schema.prisma` met externe `DATABASE_URL`; schema is valid; geen migrate/generate/db push; geen tabellen aangemaakt in deze stap | "The schema at apps\\api\\prisma\\schema.prisma is valid." | ja | pas archiveren nadat validatie met externe `DATABASE_URL` is samengevat |
| `docs/LOCAL-TSX-INSTALL-STEPS.md` | historisch | `docs/BUILD-LOG.md`; `docs/API-PLAN.md` | `tsx` is lokaal in API-workspace toegevoegd; `npm run check` bleef slagen; nog geen runtime startbestand of extra endpoints in die stap | "`tsx` toevoegen als devDependency voor de API workspace." | ja | pas archiveren nadat runtime-tooling geschiedenis is gelogd |
| `docs/PACKAGE-MANAGER-DECISION.md` | ondersteunend | `docs/TECHNICAL-ARCHITECTURE.md`; `docs/CODEX-WORKFLOW.md`; `docs/APPROVED-DECISIONS-INDEX.md` | `npm workspaces` is gekozen; geen extra package manager-complexiteit; sluit aan op workspaces | "Gebruik `npm workspaces` als package manager-richting voor `SAM MVP Release 1`." | ja | pas archiveren nadat package-manager-keuze stabiel in kernbesluiten staat |
| `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md` | ondersteunend | `docs/CURRENT-STATUS.md`; `docs/TEST-STRATEGY.md`; `docs/DATABASE-SCHEMA.md` | gate-status `PASSED_WITH_WARNINGS`; Node `v20.19.0`; npm `10.8.2`; Prisma `7.8.0`; `@prisma/client 7.8.0`; `EBADENGINE` voor `@prisma/streams-local@0.1.2`; `3 moderate severity vulnerabilities`; CLI-check geslaagd maar warnings blijven aandachtspunt | "`PASSED_WITH_WARNINGS`"; "required: `node >=22.0.0` of `bun >=1.3.6`" | ja | pas archiveren nadat warningstatus en versies in status/teststrategie staan |
| `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md` | actief | `docs/DATABASE-SCHEMA.md`; `docs/TECHNICAL-ARCHITECTURE.md`; `docs/APPROVED-DECISIONS-INDEX.md` | Prisma 7 bewust volgens v7-richting; generator output expliciet; schema v0 scope met tien modellen; geen echte `DATABASE_URL`; geen Prisma in connectors; geen multi-tenant/billing/Guardian-productmodellen in schema v0 | "`schema.prisma` wordt later klein en MVP-gericht opgezet"; "geen Prisma Client in connectors"; "schema `v0` mag alleen minimale MVP-modellen bevatten" | ja | pas archiveren nadat database-schema-kernbestand deze strategie volledig draagt |
| `docs/README.md` | ondersteunend | `docs/CURRENT-STATUS.md`; `docs/CODEX-WORKFLOW.md` | docs-map is nu nog structure-only geformuleerd en daarom deels historisch; kernregel blijft bruikbaar | "geen code of installaties zonder expliciete opdracht" | ja | pas archiveren nadat workflow en current-status deze regel overnemen |
| `docs/SOURCE-AUTHORITY-GUARDRAIL.md` | actief | `docs/SCOPE.md`; `docs/TECHNICAL-ARCHITECTURE.md`; `docs/API-PLAN.md`; `docs/APPROVED-DECISIONS-INDEX.md` | AI is niet primaire waarheid; bronhierarchie van klantbron/PIM/ERP tot AI concept; confidence-niveaus; source handling niet in routes of WooCommerce connector; onzekere voorstellen vereisen handmatige review | "`SAM` gebruikt `AI` niet als primaire waarheid voor feitelijke productinformatie."; "`AI`-concepten moeten als `AI CONCEPT` gemarkeerd worden" | nee | eerst expliciet opnemen in scope en architectuur zonder inhoudsverlies |
| `docs/TYPESCRIPT-DECISION.md` | ondersteunend | `docs/TECHNICAL-ARCHITECTURE.md`; `docs/APPROVED-DECISIONS-INDEX.md` | TypeScript is primaire taalrichting voor web, api en shared; helpt fouten eerder zichtbaar maken; past bij Prisma/Postgres-richting | "Gebruik `TypeScript` als primaire taalrichting voor `SAM MVP Release 1`." | ja | pas archiveren nadat taalkeuze stabiel in kernbesluiten en architectuur staat |

## 3. Nieuwe kernbestanden en bronmateriaal

### `README.md`

* Inputdocumenten:
  `README.md`, `docs/APPROVED-DECISIONS-INDEX.md`, `docs/DOCS-PIPELINE-PROPOSAL.md`
* Verhuizende informatie:
  korte projectintro, huidige samenvattende status, links naar kernbestanden, belangrijkste guardrails in compacte vorm
* Hoort er niet in:
  volledige installatielogs, alle validatie-uitkomsten, alle waarschuwingen, alle historische tussenstappen

### `docs/CURRENT-STATUS.md`

* Inputdocumenten:
  `README.md`, `docs/ENVIRONMENT-BLOCKERS.md`, `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md`, `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md`, `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md`, `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md`, `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md`, `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md`
* Verhuizende informatie:
  actuele runtime-/database-/Prisma-status, wat lokaal bewezen is, open warnings zoals `EBADENGINE` en audit, wat bewust nog niet gebouwd is
* Hoort er niet in:
  uitgebreide rationale, volledige commandoblokken, ontwerpprincipes die thuishoren in architectuur of scope

### `docs/APPROVED-DECISIONS-INDEX.md`

* Inputdocumenten:
  `docs/APPROVED-DECISIONS-INDEX.md`, `docs/PACKAGE-MANAGER-DECISION.md`, `docs/TYPESCRIPT-DECISION.md`, `docs/API-FIRST-BUILD-DECISION.md`, `docs/API-FRAMEWORK-DECISION.md`, `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md`, `docs/SOURCE-AUTHORITY-GUARDRAIL.md`
* Verhuizende informatie:
  duurzame keuzes en harde guardrails
* Hoort er niet in:
  uitvoerige validatiehistorie, stapstatussen die na korte tijd verouderen, dubbele statusregels uit `README.md`

### `docs/BUILD-LOG.md`

* Inputdocumenten:
  alle `LOCAL-*INSTALL*`, `LOCAL-*VALIDATION*`, `LOCAL-PRISMA-CLI-CHECK-STEPS.md`, `LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md`, `ENVIRONMENT-BLOCKERS.md`
* Verhuizende informatie:
  chronologische log van wat Ricardo lokaal uitvoerde, welke versies golden, welke warnings optraden, welke artefacten ontstonden
* Hoort er niet in:
  blijvende architectuurregels, productscope, algemene repo-ingang

### `docs/CODEX-WORKFLOW.md`

* Inputdocumenten:
  `README.md`, `docs/README.md`, `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md`, `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`, `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`, `docs/PACKAGE-MANAGER-DECISION.md`
* Verhuizende informatie:
  hoe Codex binnen deze repo werkt, wat niet mag, secrets-/`.env`-beleid, wanneer Ricardo handmatige stappen uitvoert
* Hoort er niet in:
  gedetailleerde database- of API-architectuur, historische installatielogs

### `docs/SCOPE.md`

* Inputdocumenten:
  `docs/SOURCE-AUTHORITY-GUARDRAIL.md`, `docs/APPROVED-DECISIONS-INDEX.md`, `README.md`
* Verhuizende informatie:
  productgrenzen, AI als laatste conceptlaag, uitgesloten modules, klantbronhiërarchie, wat bewust nog niet gebouwd is
* Hoort er niet in:
  Prisma-config, Docker-poorten, runtime-commandos

### `docs/TECHNICAL-ARCHITECTURE.md`

* Inputdocumenten:
  `docs/API-FIRST-BUILD-DECISION.md`, `docs/API-FRAMEWORK-DECISION.md`, `docs/PACKAGE-MANAGER-DECISION.md`, `docs/TYPESCRIPT-DECISION.md`, `docs/LOCAL-POSTGRES-STRATEGY.md`, `docs/LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md`, `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md`, `docs/SOURCE-AUTHORITY-GUARDRAIL.md`
* Verhuizende informatie:
  API-first, Fastify, TypeScript, npm workspaces, connector boundary, source-adapter boundary, persistence-laag, Docker/Postgres hoofdrichting
* Hoort er niet in:
  gedetailleerde validatielogs, alle historische waarschuwingen, volledige commandoreeksen

### `docs/DATABASE-SCHEMA.md`

* Inputdocumenten:
  `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md`, `docs/LOCAL-POSTGRES-STRATEGY.md`, `docs/LOCAL-PRISMA-MIGRATION-PLAN.md`, `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md`, `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md`, `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md`, `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md`, `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md`, `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`, `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md`
* Verhuizende informatie:
  schema v0 scope, migrationbeleid, generated client als afgeleid artefact, huidige DB-status, externe `DATABASE_URL`-regel
* Hoort er niet in:
  algemene productscope, Codex-brede werkafspraken, volledige buildhistorie

### `docs/API-PLAN.md`

* Inputdocumenten:
  `docs/API-FIRST-BUILD-DECISION.md`, `docs/API-FRAMEWORK-DECISION.md`, `docs/API-RUNTIME-STRATEGY-DECISION.md`, `docs/LOCAL-TSX-INSTALL-STEPS.md`, `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md`, `docs/LOCAL-PRISMA-CLIENT-MODULE-VALIDATION.md`
* Verhuizende informatie:
  API-opbouwvolgorde, runtime-richting, Fastify boundary, health-route-context, Prisma via persistence only
* Hoort er niet in:
  volledige databasevalidaties, secrets-runbooks, productscopebesluiten

### `docs/TEST-STRATEGY.md`

* Inputdocumenten:
  `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md`, `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md`, `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md`, `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md`, `docs/ENVIRONMENT-BLOCKERS.md`
* Verhuizende informatie:
  welke checks handmatig door Ricardo worden uitgevoerd, hoe validatie stap voor stap loopt, welke warnings extra controle vragen
* Hoort er niet in:
  blijvende stackkeuzes, productscope of volledige changelog

## 4. Niet-migreerbare of risicovolle informatie

De volgende informatie mag niet zomaar grof worden samengevat, omdat nuance of auditwaarde verloren kan gaan:

* exacte formuleringen rond secrets policy, vooral:
  "Alleen `.env.example` in `sam-mvp`",
  "Echte secrets blijven buiten `sam-mvp`",
  "Codex mag geen `.env` of secrets lezen",
  "`DATABASE_URL` blijft buiten `sam-mvp`"
* exacte warningdetails rond Prisma-installatie en runtime-compatibility:
  `EBADENGINE` op `@prisma/streams-local@0.1.2`,
  vereiste `node >=22.0.0` of `bun >=1.3.6`,
  `3 moderate severity vulnerabilities`
* exacte versies en statusfeiten:
  `node v20.19.0`,
  `npm 10.8.2`,
  `prisma 7.8.0`,
  `@prisma/client 7.8.0`,
  `Fastify 5.8.5`,
  TypeScript `6.0.3`
* exacte runtime- en database-identifiers:
  `sam-mvp-postgres`,
  hostpoort `5433`,
  database `sam_mvp_dev`,
  user `sam_mvp_local`,
  migratie `20260612213620_init`
* exacte output- en bronpaden:
  `apps/api/src/generated/prisma`,
  `apps/api/src/persistence/prismaClient.ts`
* Source Authority-bronhiërarchie en het onderscheid tussen `HIGH`, `MEDIUM`, `LOW` en `AI CONCEPT`
* boundaryregels die makkelijk verwateren bij samenvatting:
  geen Prisma in connectors,
  routes bevatten geen businesslogica,
  Prisma alleen via persistence/data-access
* historische statusregels in `README.md` en `docs/APPROVED-DECISIONS-INDEX.md` die elkaar tegenspreken of verouderd lijken
  controle nodig voordat deze naar `CURRENT-STATUS.md` of een nieuwe decisions-index worden overgezet

## 5. Aanbevolen consolidatievolgorde

1. `docs/CURRENT-STATUS.md`
   Eerst alle actuele statusfeiten en open warnings op een plek krijgen.
2. `docs/BUILD-LOG.md`
   Daarna de historische installaties, validaties en migratiestappen chronologisch veiligstellen.
3. `docs/CODEX-WORKFLOW.md`
   Vervolgens alle Codex-/Ricardo-/secrets-regels centraliseren.
4. `docs/SCOPE.md`
   Daarna productscope en Source Authority los trekken van technische status.
5. `docs/TECHNICAL-ARCHITECTURE.md`
   Vervolgens API-first, Fastify, connector boundary, persistence boundary en Docker/Postgres hoofdlijnen bundelen.
6. `docs/DATABASE-SCHEMA.md`
   Daarna Prisma/Postgres/migrations/generated client en database-status samenbrengen.
7. `docs/API-PLAN.md`
   Daarna alle API-opbouw en runtime-keuzes compact bundelen.
8. `docs/TEST-STRATEGY.md`
   Vervolgens alle handmatige validatie- en gate-informatie consolideren.
9. `README.md` opschonen
   Pas nadat de kernbestanden bestaan, zodat `README.md` echt kort kan worden.
10. `docs/archive/`-stap
   Pas als per document is gecontroleerd dat de exacte feiten en formuleringen veilig zijn overgenomen.

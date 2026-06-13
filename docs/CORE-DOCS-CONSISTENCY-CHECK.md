# Core Docs Consistency Check

## Status van dit document

Dit document is een historische consistentiecontrole-snapshot. Het legt vast wat tijdens deze controle is gevonden. Latere correcties kunnen inmiddels zijn uitgevoerd. Gebruik voor actuele projectstatus `docs/CURRENT-STATUS.md` en voor actuele besluiten `docs/APPROVED-DECISIONS-INDEX.md`.

## Korte samenvatting

De geconsolideerde kernbestanden zijn grotendeels consistent.

Positief bevestigd:

* de links in `README.md` zijn relatief en logisch;
* de kernnaam `SAM MVP Release 1` wordt in de geconsolideerde documenten consistent gebruikt;
* `SAM Health Checker`, `SAM Webshopbeheer` en `AXIORA Guardian` worden functioneel en scopematig consistent gebruikt;
* de secrets-, `.env`- en `DATABASE_URL`-regels zijn in `README.md`, `docs/CURRENT-STATUS.md`, `docs/TECHNICAL-ARCHITECTURE.md`, `docs/DATABASE-SCHEMA.md`, `docs/TEST-STRATEGY.md` en `docs/CODEX-WORKFLOW.md` inhoudelijk consistent;
* Prisma-, PostgreSQL-, TypeScript- en Fastify-versies plus warnings zijn in de geconsolideerde documenten consistent genoemd.

Belangrijkste aandachtspunt:

* `docs/APPROVED-DECISIONS-INDEX.md` is inmiddels opgeschoond tot een zuivere besluiten- en guardrailsindex; de onderstaande bevindingen over dit bestand hebben daarom vooral historische waarde.

## Gevonden inconsistenties

### 1. Historisch: `docs/APPROVED-DECISIONS-INDEX.md` bevatte verouderde statusblokken

Duidelijke tegenstrijdigheden met de geconsolideerde kernstatus:

* `Projectstatus: STRUCTURE_ONLY`
* `Code status: NO_CODE`
* "De huidige fase bevat alleen structuur en documentatie."
* "De volgende stap mag alleen zijn: voorbereiden van minimale projectconfiguratie, maar pas na expliciete goedkeuring."

Deze regels botsten met de actuele geconsolideerde status, waarin aantoonbaar al bestaat:

* minimale Fastify API met health-route;
* lokale PostgreSQL-runtime;
* toegepaste Prisma-migratie;
* gegenereerde Prisma Client;
* centrale Prisma client module.

### 2. Historisch: `docs/APPROVED-DECISIONS-INDEX.md` mengde besluiten en historische tussenstatus

Voorbeelden van gemengde of ingehaalde regels:

* `Docker` is waarschijnlijk voorkeursroute voor lokale `PostgreSQL`, maar nog niet uitgevoerd
* `Docker` is voorkeursroute voor lokale `PostgreSQL`
* No Docker container started
* Database not created
* No Prisma migrate/generate/db push executed
* No database tables created
* TypeScript validation not executed yet
* No app integration yet
* database/migraties/generate zijn nog niet uitgevoerd

Een deel hiervan heeft auditwaarde, maar hoort niet meer als actuele guardrail of hoofdstatus in een besluitenindex te staan. Dit punt is inmiddels afgehandeld door de opschoning van de index.

### 3. `docs/CURRENT-STATUS.md` bevat nog historische README-verwijzingen in `Controle nodig`

Dit is op zich niet fout, maar wel een tijdelijke rest van de consolidatie. De verwijzingen blijven nuttig zolang de oude tegenstrijdigheden auditmatig benoemd moeten blijven.

Geen wijziging nodig zolang dit bewust als tijdelijke controlelaag bedoeld is.

## Gevonden linkproblemen

`README.md`:

* Geen wijziging nodig.
* Alle kernlinks zijn relatief en logisch:
  * `docs/CURRENT-STATUS.md`
  * `docs/SCOPE.md`
  * `docs/TECHNICAL-ARCHITECTURE.md`
  * `docs/DATABASE-SCHEMA.md`
  * `docs/API-PLAN.md`
  * `docs/TEST-STRATEGY.md`
  * `docs/BUILD-LOG.md`
  * `docs/CODEX-WORKFLOW.md`
  * `docs/APPROVED-DECISIONS-INDEX.md`

## Gevonden terminologieproblemen

### 1. Encoding/typografie

Er komen nog enkele tekstuele resten voor die later opgeschoond mogen worden:

* `kopieren` waar eerder ook `kopiëren` bedoeld is;
* `geinstalleerd` waar `geïnstalleerd` bedoeld is;
* `coördineren` in `docs/API-PLAN.md`;
* `Risico’s / aandachtspunten` in `docs/CODEX-WORKFLOW.md`.

Dit zijn geen inhoudelijke inconsistenties, maar wel opruimpunten voor documentkwaliteit.

### 2. Guardian-benaming

De geconsolideerde kernbestanden zijn onderling consistent:

* `AXIORA Guardian` als bredere strategische context;
* `Guardian` als verkorte verwijzing binnen scope en guardrails.

Geen wijziging nodig.

## Voorgestelde minimale correcties

### Prioriteit 1

Afgehandeld:

`docs/APPROVED-DECISIONS-INDEX.md` is inmiddels bijgewerkt zodat het alleen nog bevat:

* duurzame goedgekeurde besluiten;
* harde guardrails;
* geen ingehaalde projectstatussen;
* geen historische tussenmeldingen zoals "nog niet uitgevoerd" wanneer die later aantoonbaar wel zijn uitgevoerd.

### Prioriteit 2

Voer een kleine tekstuele opschoonronde uit op de geconsolideerde kernbestanden voor:

* `kopieren` -> `kopiëren`
* `geinstalleerd` -> `geïnstalleerd`
* `coördineren` -> `coördineren`
* `Risico’s` -> `Risico’s`

### Prioriteit 3

Laat `docs/CURRENT-STATUS.md` de sectie `Controle nodig` voorlopig behouden, maar herbeoordeel later of die sectie korter kan zodra `docs/APPROVED-DECISIONS-INDEX.md` is opgeschoond.

## Bestanden die eventueel later aangepast moeten worden

Aanpassen aanbevolen:

* `docs/API-PLAN.md`
* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`

Geen wijziging nodig op basis van deze controle:

* `README.md`
* `docs/SCOPE.md`
* `docs/TECHNICAL-ARCHITECTURE.md`
* `docs/DATABASE-SCHEMA.md`
* `docs/TEST-STRATEGY.md`
* `docs/BUILD-LOG.md`

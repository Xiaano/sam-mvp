# Approved Decisions Index

## Doel

Dit document vat de duurzame goedgekeurde besluiten en harde guardrails samen voor `SAM MVP Release 1`.

Dit document is bewust geen statuspagina, build-log, schema-overzicht of API-plan.

## Duurzame hoofdkeuzes

### Productrichting

* `SAM MVP Release 1` is de primaire productrichting
* `SAM MVP` heeft prioriteit boven bredere `Guardian`-uitbouw
* `AXIORA Guardian` blijft strategisch relevant, maar wordt in deze fase niet als zelfstandig product opgebouwd
* oude `SAM V2` blijft alleen testcontext en geen codebron

### Werkvolgorde

* nieuwe stappen volgen: documenteren → plannen → bouwen
* geen grote wijzigingen zonder expliciete goedkeuring

### Repository- en stackrichting

* de repository-richting is een lichte monorepo
* de technische hoofdrichting is `API-first`
* `TypeScript` is de primaire taalrichting
* `npm workspaces` is de package-manager-richting
* `Fastify` is de API-frameworkrichting

### Persistence-richting

* `PostgreSQL` is de database- en opslagrichting
* `Prisma` is de ORM- en persistence-toolingrichting
* `Docker` is de voorkeursroute voor lokale `PostgreSQL`

### Toegangs- en operatormodel

* de MVP-richting gaat uit van een interne operator

## Architectuur- en implementatieguardrails

### Prisma- en persistence-boundary

* `Prisma` hoort alleen in de persistence/data-access-laag
* routes gebruiken `Prisma` niet direct
* connectors gebruiken `Prisma` niet direct
* businesslogica initialiseert geen losse `Prisma`-clients buiten de persistence-richting

### Connector-boundary

* connectors blijven transport-/integratielaag
* connectors hebben geen databasekennis
* connectors bevatten geen businesslogica
* connectors bepalen geen productwaarheid
* `WooCommerce`-communicatie hoort later in connectors, maar de `WooCommerce` connector is nu nog geen gebouwde MVP-component

### API-boundary

* routes bevatten geen businesslogica
* routes sturen door naar services
* services bevatten domeinlogica
* services gebruiken repositories/data-access voor opslag

## Source Authority guardrails

* Source Authority is verplicht
* bronnen zijn leidend; `AI` is last resort
* `AI` is niet de primaire waarheid voor feitelijke productinformatie
* `AI` mag alleen conceptvoorstellen doen wanneer brondata onvoldoende is
* `AI`-output moet herkenbaar blijven als `AI CONCEPT`
* onzekere voorstellen vereisen handmatige review
* bronverwerking hoort niet rechtstreeks in routes
* de `WooCommerce` connector mag geen bronwaarheid bepalen
* source adapters en proposal-logica blijven gescheiden

## Secrets- en configuratieguardrails

* echte secrets blijven buiten `sam-mvp`
* alleen `.env.example` mag in de repo
* `DATABASE_URL` blijft buiten `sam-mvp`
* Codex mag geen `.env`, `DATABASE_URL` of secrets lezen, openen, tonen, kopiëren of wijzigen
* echte lokale waarden worden handmatig buiten de repo beheerd

## Scope- en veiligheidsremmen

* geen volledige autonomie
* geen autonome `AI`-uitvoering
* geen multi-tenant SaaS-complexiteit in deze MVP-fase
* geen billing of subscriptions in deze MVP-fase
* geen pricing engine
* geen ads/social monitoring
* geen marketplace-integraties
* geen zelfstandige `Guardian`-app of `Guardian`-productuitbouw in deze fase

## Elders te detailleren

* De bredere stackrichting `React/Vite` cockpit + `Node.js API` is historisch vaker genoemd, maar deze index behandelt alleen de duurzame keuze dat de MVP API-first wordt opgebouwd met `Fastify`, `TypeScript`, `PostgreSQL` en `Prisma`. Verdere cockpitdetails horen in scope-, architectuur- of API-documentatie en niet in deze besluitenindex.
* `docs/HEALTH-CHECKER-COMMERCE-DEPTH-EXTENSION-GROUPS-REVIEW.md` - future extension review voor Commerce Depth, Source Intake en Extension Groups; document only, geen actieve MVP-scope.
* `docs/HEALTH-CHECKER-PHASE-CLOSURE-CHECK.md` - phase closure check voor de read-only Health Checker basis; document only, geen scope-uitbreiding.
* `docs/HEALTH-CHECKER-WOOCOMMERCE-READ-ONLY-CONFIG-CONTRACT.md` - read-only config contract voor toekomstige WooCommerce staging scan; document only, geen actieve MVP-scope.
* `docs/HEALTH-CHECKER-WOOCOMMERCE-READ-ONLY-PRODUCT-SCAN-CONTRACT.md` - read-only WooCommerce product scan field boundary; document only, geen API-call, geen write/execution-scope.
* `docs/HEALTH-CHECKER-WOOCOMMERCE-READ-ONLY-PRODUCT-SCAN-V0-IMPLEMENTATION-REVIEW.md` - implementation review voor de eerste read-only WooCommerce productscan V0; document only, geen write/execution-scope.
* `docs/HEALTH-CHECKER-WOOCOMMERCE-READ-ONLY-SCAN-TO-PROPOSAL-FLOW-IMPLEMENTATION-REVIEW.md` - read-only scan-to-proposal flow review; document only, geen write/execution-scope.
* `docs/DEVELOPER-WORKFLOW-HELPERS-V1-DECISION.md` - developer workflow helpers besluit; alleen lokale dev-handelingen, geen SAM-productworkflow automatisering.

## Verwijzing naar andere kernbestanden

Voor actuele status:

* `docs/CURRENT-STATUS.md`

Voor bouwgeschiedenis en handmatige validaties:

* `docs/BUILD-LOG.md`

Voor architectuur:

* `docs/TECHNICAL-ARCHITECTURE.md`

Voor productscope:

* `docs/SCOPE.md`

Voor database- en schemastrategie:

* `docs/DATABASE-SCHEMA.md`

Voor API-opbouw:

* `docs/API-PLAN.md`

Voor validatie- en warningsbeleid:

* `docs/TEST-STRATEGY.md`

Voor vaste werkwijze en uitvoeringsgrenzen:

* `docs/CODEX-WORKFLOW.md`

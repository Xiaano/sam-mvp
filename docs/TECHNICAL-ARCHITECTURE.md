# Technical Architecture

## Doel

Dit document legt de technische hoofdlijnen van `SAM MVP Release 1` centraal vast.

Het document beschrijft:

* de gekozen technische richting;
* de belangrijkste architectuurboundaries;
* de plaats van `Prisma`, `PostgreSQL`, `Fastify` en `npm workspaces`;
* de technische gevolgen van Source Authority.

## Technische hoofdkeuzes

De technische hoofdrichting van `SAM MVP Release 1` is:

* `API-first`
* `TypeScript`
* `npm workspaces`
* `Fastify`
* `PostgreSQL`
* `Prisma`
* `Docker` voor lokale `PostgreSQL`

### API-first

`SAM MVP Release 1` wordt technisch `API-first` opgebouwd.

Dat betekent:

* eerst de API-structuur;
* daarna de datalaag en persistence-richting;
* daarna connector-boundaries;
* daarna pas verdere koppeling met cockpit of andere lagen.

De reden blijft dat de kernflow eerst inhoudelijk moet kloppen voordat een interface daar betrouwbaar op kan leunen.

### TypeScript

`TypeScript` is de primaire taalrichting voor deze monorepo.

Dit ondersteunt:

* duidelijke contracts en types;
* betere controleerbaarheid van Codex-output;
* gedeelde afspraken tussen `api`, `web` en `shared`;
* aansluiting op `Fastify` en `Prisma`.

### npm workspaces

`npm workspaces` blijft de package-manager-richting.

Dit ondersteunt:

* een lichte monorepo-opzet;
* werkbare scheiding tussen `apps/*` en `packages/*`;
* een eenvoudige basis zonder extra package-managercomplexiteit.

### Fastify

`Fastify` is de gekozen API-frameworkrichting.

De keuze ondersteunt:

* een lichte `Node.js` API;
* duidelijke route- en service-scheiding;
* latere schema-based validation indien nodig;
* een compacte API-first opbouw.

### PostgreSQL en Prisma

`PostgreSQL` is de opslagrichting.

`Prisma` is de ORM/toolingrichting.

Samen vormen zij de persistence-richting voor:

* producten
* issues
* proposals
* beslissingen
* executions
* history/audit trail

## Architectuurboundaries

De volgende boundaries zijn leidend:

### Routes

* routes bevatten geen businesslogica
* routes bevatten geen bronwaarheidslogica
* routes gebruiken geen directe database-details
* routes sturen door naar services

### Services

* services bevatten domeinlogica
* services verwerken issue-detectie, proposalvorming, approval-flow en andere kernlogica
* services gebruiken repositories of data-access voor opslag
* services gebruiken connectors voor externe communicatie

### Repositories en data-access

* repositories en data-access gebruiken persistence
* repositories vormen de grens tussen domeinlogica en opslagdetails
* `Prisma` hoort alleen in de persistence/data-access laag

### Prisma

* `Prisma` wordt alleen via persistence/data-access gebruikt
* routes gebruiken geen `Prisma` direct
* connectors gebruiken geen `Prisma` direct
* businesslogica initialiseert geen losse `Prisma`-clients buiten de centrale persistence-richting

### Connectors

* connectors blijven transport-/integratielaag
* connectors hebben geen `Prisma`- of databasekennis
* connectors halen data op of sturen data naar externe systemen
* connectors bepalen geen productwaarheid
* connectors bevatten geen proposal-logica of domeinbeslissingen

## Source Authority in de architectuur

Source Authority heeft directe technische gevolgen voor de architectuur.

Vastgelegd blijft:

* bronverwerking hoort niet rechtstreeks in routes
* `WooCommerce` connector bepaalt geen bronwaarheid
* source adapters en proposal-logica blijven gescheiden
* `AI`-output blijft conceptlaag en niet primaire waarheid

Dat betekent concreet:

* platformdata ophalen is iets anders dan bronwaarheid bepalen
* source adapters verwerken en normaliseren bronmateriaal
* services bepalen welke bron leidend is
* proposals moeten herleidbaar blijven naar hun bronbasis of confidence
* `AI CONCEPT` blijft herkenbaar als aparte laag en niet als feitelijke bron

## Lokale infrastructuurrichting

De lokale dev/test-richting blijft:

* `Docker` voor lokale `PostgreSQL`
* `PostgreSQL` als lokale ontwikkel- en testdatabase

Compact relevante infrastructuurpunten:

* lokale `PostgreSQL`-container is onderdeel van de dev/test-richting
* hostpoort mag lokaal afwijken van `5432`, bijvoorbeeld `5433`, om conflicten te vermijden
* compose- en runtime-details horen niet volledig in dit document thuis

Secrets-regel blijft technisch leidend:

* echte secrets blijven buiten de repo
* `DATABASE_URL` blijft buiten `sam-mvp`
* alleen `.env.example` mag in de repo

## Wat dit document niet is

Dit document is:

* geen actuele statuspagina
* geen build-log
* geen database-schema-detaildocument
* geen API-routeplan
* geen teststrategie

Daarom horen de volgende zaken elders thuis:

* actuele runtime- en validatiestatus in `docs/CURRENT-STATUS.md`
* historische installaties en validaties in `docs/BUILD-LOG.md`
* schema- en migratiedetails in `docs/DATABASE-SCHEMA.md`
* route- en API-opbouwdetails in `docs/API-PLAN.md`
* validatie- en checkstrategie in `docs/TEST-STRATEGY.md`

## Bewuste architectuurrem

Nieuwe technische complexiteit wordt alleen toegevoegd wanneer dit de MVP-kern aantoonbaar dichter bij marktintroductie brengt.

Dat betekent:

* eerst de lichte hoofdrichting volgen;
* geen extra lagen toevoegen zonder duidelijke noodzaak;
* geen enterprise-uitbouw zonder aantoonbare meerwaarde;
* geen technische verbreding die de MVP onnodig vertraagt.

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `docs/TECHNICAL-ARCHITECTURE.md` zijn aangewezen:

* `docs/API-FIRST-BUILD-DECISION.md`
* `docs/API-FRAMEWORK-DECISION.md`
* `docs/PACKAGE-MANAGER-DECISION.md`
* `docs/TYPESCRIPT-DECISION.md`
* `docs/LOCAL-POSTGRES-STRATEGY.md`
* `docs/LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md`
* `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md`
* `docs/SOURCE-AUTHORITY-GUARDRAIL.md`

Daarnaast zijn meegelezen:

* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`
* `docs/SCOPE.md`
* `docs/DOCS-MIGRATION-MATRIX.md`

Zij zijn alleen gebruikt om deze architectuur te laten aansluiten op de huidige consolidatiestructuur en niet als vervanging van de hierboven aangewezen bronset.

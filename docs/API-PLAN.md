# API Plan

## Doel

Dit document legt de centrale API-opbouw van SAM MVP Release 1 vast. Het beschrijft de gekozen API-richting, de beoogde laagverdeling, de runtime-aanpak, de health-routecontext en het Prisma-via-persistence-plan, zonder build-log, database-schema-detail of productscope te dupliceren.

## API-opbouwrichting

SAM MVP Release 1 wordt API-first opgebouwd. De API is de functionele ruggengraat van de MVP en moet eerst de kernflow logisch kunnen dragen voordat cockpit- of UI-uitbouw verdergaat.

De gekozen API-richting is:

* Fastify als API-framework
* TypeScript als taalrichting
* een lichte lokale runtime via `tsx`
* eerst een stabiele kernflow, daarna pas verdere cockpit/UI-uitbouw

De kernflow richt zich eerst op:

* producten ophalen
* issues detecteren
* proposals voorbereiden
* beslissingen verwerken
* status bijhouden
* history/audit trail vastleggen

## Beoogde API-lagen

De beoogde API-opbouw bestaat uit deze lagen:

* routes
* services
* repositories/data-access
* persistence
* connectors
* source adapters/proposal-logica

Deze scheiding houdt de MVP klein, begrijpelijk en controleerbaar, en voorkomt dat transport, domeinlogica en persistence door elkaar gaan lopen.

## Route-boundaries

Routes hebben een smalle verantwoordelijkheid:

* routes bevatten geen businesslogica
* routes gebruiken Prisma niet direct
* routes bepalen geen Source Authority
* routes sturen verzoeken door naar services

Routes zijn dus alleen de API-ingang en niet de plek waar domeinregels, bronwaarheid of database-details worden bepaald.

## Service-boundaries

Services dragen de domeinlogica van de API:

* services bevatten domeinlogica
* services coördineren issue-detectie, proposals, review en uitvoering
* services gebruiken repositories/data-access voor opslag
* services gebruiken connectors alleen voor externe communicatie

Services vormen daarmee de laag waar de SAM-kernflow inhoudelijk wordt gestuurd, zonder persistence- of connectorverantwoordelijkheden te vermengen.

## Persistence- en Prisma-plan

Prisma blijft beperkt tot de persistence/data-access-laag:

* Prisma wordt alleen via persistence/data-access gebruikt
* de centrale Prisma-clientmodule staat onder `apps/api/src/persistence/prismaClient.ts`
* routes, services en connectors initialiseren geen losse Prisma-clients
* verdere runtime- en database-integratie in applicatielogica moet expliciet worden gepland

De bestaande centrale Prisma-clientmodule is dus een voorbereid bouwblok, maar nog geen vrijbrief om Prisma rechtstreeks in andere API-lagen te gebruiken.

## Connector-boundaries

Connectors blijven een transport- en integratielaag:

* connectors blijven transport-/integratielaag
* de WooCommerce connector is nog niet gebouwd
* de WooCommerce connector mag later geen bronwaarheid bepalen
* connectors bevatten geen Prisma- of databasekennis

Source handling en proposal-logica horen dus niet verstopt te raken in connectorcode.

## Health-routecontext

Volgens de actuele projectstatus bestaat er een minimale health-route en draait de basis-API lokaal. Deze route ondersteunt de eerste runtime-validatie van de API, maar is geen bewijs dat bredere API-functionaliteit al is ontworpen of gebouwd.

Daarom geldt:

* de minimale health-route bestaat volgens de actuele status
* extra API-endpoints buiten de aantoonbare basis/health-route zijn nog niet bevestigd
* nieuwe endpoints mogen pas worden toegevoegd met expliciete opdracht en een passend plan

## Beoogde volgende API-stappen

Veilige vervolgstappen zijn:

* API-mapverantwoordelijkheden controleren en documentair scherp houden
* de bestaande health-route compact blijven documenteren als minimale runtimebasis
* een eerste read-only status- of diagnostic-endpoint pas plannen na expliciete goedkeuring
* daarna pas issue- en proposal-routes ontwerpen

## Wat dit document niet is

Dit document is niet bedoeld als:

* database-schema-detaildocument
* build-log
* teststrategie
* productscope-document
* cockpit/UI-plan

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `API-PLAN.md` zijn aangewezen, waaronder de besluitdocumenten voor API-first, Fastify, runtime-strategie, tsx-richting en Prisma-appintegratie.

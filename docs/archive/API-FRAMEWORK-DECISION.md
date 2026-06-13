# API Framework Decision - SAM MVP

## 1. Titel

API Framework Decision - SAM MVP

## 2. Status

`APPROVED`

## 3. Besluit

Gebruik `Fastify` als API-frameworkrichting voor `SAM MVP Release 1`.

## 4. Reden

`Fastify` past goed bij `SAM MVP Release 1` omdat:

* het licht genoeg is voor een MVP
* het geschikt is voor een duidelijke `Node.js` API
* het goed past bij `TypeScript`
* het later schema-based validation kan ondersteunen
* het overzichtelijk genoeg blijft voor Codex
* het geschikt is voor een API-first opbouw

## 5. Niet gekozen

* `Express` als primaire API-frameworkrichting
* `Next.js` fullstack API-route als primaire backend
* zware enterprise-frameworks
* oude `SAM V2`-backendstructuur

## 6. Impact op SAM

De API-laag wordt later gebruikt voor:

* health/status checks
* productscan-flow
* issue-detectie
* proposal-flow
* approval/status-flow
* history/audit trail
* WooCommerce connector-aansturing via services

## 7. Connector boundary

* `Fastify` routes mogen geen Prisma direct gebruiken
* routes bevatten geen businesslogica
* routes sturen door naar services
* services gebruiken repositories voor opslag
* connectors blijven vrij van Prisma en databasekennis
* WooCommerce-communicatie hoort later in connectors

## 8. Grenzen

* geen `Fastify`-installatie in deze stap
* geen serverbestand in deze stap
* geen routes/endpoints in deze stap
* geen Prisma schema
* geen database
* geen oude `SAM V2`-code
* geen `Guardian`-productmodule

## 9. Vervolgactie

Na dit besluit mag een lokale installatiestap voor `Fastify` worden voorbereid, maar uitvoering gebeurt pas na expliciete goedkeuring.

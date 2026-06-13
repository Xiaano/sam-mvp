# Local Prisma App Integration Plan - SAM MVP

## Status

APPROVED FOR NEXT STEP

## Context

De lokale PostgreSQL-runtime is gevalideerd.

De eerste Prisma migratie is toegepast.

De database-tabellen zijn gecontroleerd.

Prisma Client is lokaal gegenereerd naar:

`apps/api/src/generated/prisma`

Gegenereerde Prisma Client-output wordt door Git genegeerd.

schema.prisma en migrations blijven bron van waarheid.

## Besluit

Prisma mag later alleen via een duidelijke data-access laag worden gebruikt.

Routes, connectors en businesslogica mogen niet rechtstreeks Prisma Client initialiseren.

De API krijgt later een centrale Prisma client module.

Voorkeurslocatie later:

`apps/api/src/persistence/prismaClient.ts`

## Grenzen

Connectors blijven vrij van Prisma en databasekennis.

WooCommerce connector komt later apart.

Scanlogica komt later apart.

Proposal-logica komt later apart.

Routes mogen later services aanroepen, maar niet zelf database-details beheren.

DATABASE_URL blijft buiten sam-mvp.

Geen .env in sam-mvp.

## Verwachte latere opbouw

Latere volgorde:

1. Centrale Prisma client module maken.
2. Kleine database healthcheck/service toevoegen.
3. TypeScript/build-check uitvoeren.
4. Pas daarna persistence-services toevoegen.
5. Pas daarna scan/proposal-logica koppelen.

## Niet doen in deze stap

* geen prismaClient.ts maken
* geen services maken
* geen routes maken
* geen connectorlogica maken
* geen Prisma-commando uitvoeren
* geen database wijzigen

## Conclusie

SAM MVP mag Prisma integreren in de API, maar alleen via een centrale persistence-laag en in aparte gecontroleerde vervolgstappen.

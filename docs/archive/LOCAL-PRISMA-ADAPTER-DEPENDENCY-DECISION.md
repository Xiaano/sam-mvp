# Local Prisma Adapter Dependency Decision - SAM MVP

## Status

APPROVED FOR NEXT STEP

## Context

De centrale Prisma client module is aangemaakt en statisch gevalideerd.

De handmatige TypeScript-check faalde op:

* PrismaClient constructor vereist opties in Prisma 7
* process is niet bekend in TypeScript

Codex heeft gecontroleerd dat @prisma/adapter-pg en pg niet beschikbaar zijn in de huidige package-configuratie.

## Besluit

Voor veilige Prisma 7 PostgreSQL-integratie is een aparte dependency-stap nodig.

De verwachte dependency-richting is:

Runtime dependencies voor apps/api:

* @prisma/adapter-pg
* pg

Development/type dependencies voor apps/api:

* @types/node
* mogelijk @types/pg indien TypeScript dit vereist

## Grenzen

Deze stap installeert niets.

Deze stap past package.json niet aan.

Deze stap past package-lock.json niet aan.

Deze stap wijzigt geen code.

Deze stap voert geen TypeScript-check uit.

Deze stap voert geen Prisma-commando uit.

## Vervolg

Na dit besluit mag Ricardo of Codex in een aparte expliciet goedgekeurde stap dependencies toevoegen/installeren.

Daarna mag prismaClient.ts pas worden aangepast.

Daarna volgt opnieuw:

`npm run check -w @sam-mvp/api`

## Conclusie

SAM MVP mag de benodigde Prisma 7 PostgreSQL adapter-dependencies toevoegen, maar alleen via een aparte gecontroleerde dependency-stap.

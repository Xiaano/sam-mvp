# Local Prisma Migration Plan - SAM MVP

## Status

APPROVED FOR NEXT STEP

## Context

De lokale PostgreSQL-runtime is gevalideerd.

Prisma schema-validatie met extern beheerde DATABASE_URL is succesvol uitgevoerd.

Er is nog geen Prisma migrate uitgevoerd.

Er is nog geen Prisma generate uitgevoerd.

Er is nog geen Prisma db push uitgevoerd.

Er zijn nog geen Prisma-tabellen aangemaakt.

## Besluit

De volgende gecontroleerde technische stap mag een lokale Prisma migratie zijn.

Deze migratie mag alleen handmatig door Ricardo worden uitgevoerd na expliciete toestemming.

Codex mag geen migratie uitvoeren.

## Voorkeursroute

Gebruik later:

`npx prisma migrate dev --config prisma.config.ts --name init`

Niet gebruiken:

`npx prisma db push`

`--skip-generate` wordt niet gebruikt.

Prisma Client `generate` blijft een aparte stap indien nodig.

`prisma.config.ts` leest `DATABASE_URL` via `process.env.DATABASE_URL`.

`DATABASE_URL` blijft buiten `sam-mvp`.

## Grenzen

DATABASE_URL blijft buiten sam-mvp.

Geen .env in sam-mvp.

Geen secrets in documentatie.

Geen oude SAM V2-database kopiëren.

Geen WooCommerce connector.

Geen applicatielogica wijzigen.

## Verwachte uitkomst later

Prisma maakt een migrations-map aan onder:

`apps/api/prisma/migrations/`

De lokale database krijgt tabellen op basis van schema.prisma.

Dit gebeurt pas in een aparte gecontroleerde stap.

## Conclusie

SAM MVP is klaar om een lokale Prisma migratie als volgende gecontroleerde stap te overwegen, maar deze stap voert nog niets uit.

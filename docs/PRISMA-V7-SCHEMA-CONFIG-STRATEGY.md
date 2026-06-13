# Prisma 7 Schema and Config Strategy - SAM MVP

## 1. Titel

Prisma 7 Schema and Config Strategy - SAM MVP

## 2. Status

`APPROVED`

## 3. Context

`Prisma` en `@prisma/client` zijn geinstalleerd in `@sam-mvp/api`.
De Prisma CLI-check is lokaal geslaagd.
Er is nog geen `schema.prisma`, database, migration of `.env`.

## 4. Besluit

`SAM MVP` gebruikt `Prisma 7` bewust volgens de nieuwe `v7`-richting:

* `schema.prisma` wordt later klein en MVP-gericht opgezet
* generator output wordt expliciet ingesteld
* databaseconfiguratie wordt later via Prisma config voorbereid
* echte `DATABASE_URL` blijft buiten `sam-mvp`
* `.env.example` bevat alleen lege voorbeeldwaarden

## 5. Belangrijke regels

* geen `DATABASE_URL` met echte waarde in `schema.prisma`
* geen echte `.env` in `sam-mvp`
* geen Prisma Client in connectors
* Prisma hoort alleen in data-access/persistence-laag
* schema `v0` mag alleen minimale MVP-modellen bevatten
* geen `Tenant`, `Billing`, `CustomerAccount` of `Guardian`-productmodellen in schema `v0`

## 6. Verwachte latere bestanden

Later kunnen mogelijk deze bestanden worden voorbereid:

* `sam-mvp/apps/api/prisma/schema.prisma`
* `sam-mvp/apps/api/prisma.config.ts`

Maar:

* nog niet in deze stap
* pas na expliciete opdracht
* zonder echte secrets

## 7. Schema v0 scope

Schema `v0` mag later alleen gericht zijn op:

* `Product`
* `ScanRun`
* `Issue`
* `Proposal`
* `Action`
* `UserDecision`
* `Execution`
* `HistoryItem`
* `SourceData`
* `Operator`

## 8. Buiten scope

* database aanmaken
* migraties
* `prisma generate`
* `prisma migrate`
* `prisma db push`
* echte `DATABASE_URL`
* `.env` in `sam-mvp`
* multi-tenant datamodel
* billingdata
* `Guardian` als productdatabase
* `WooCommerce` connector

## 9. Vervolgactie

Na dit document mag een eerste `schema.prisma v0`-opdracht worden voorbereid, met minimale MVP-modellen en zonder databaseverbinding of migratie.

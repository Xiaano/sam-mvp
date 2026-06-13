# Local PostgreSQL Strategy - SAM MVP

## 1. Status

`APPROVED`

## 2. Context

`SAM MVP` gebruikt `PostgreSQL` als opslagrichting en `Prisma ORM` als toolingrichting.
`schema.prisma v0` is lokaal geformatteerd en gevalideerd.
Er is nog geen database, geen migratie, geen `Prisma generate` en geen `.env` in `sam-mvp`.

## 3. Besluit

Gebruik later een lokale `PostgreSQL`-database voor ontwikkeling en test.
De voorkeursroute is `Docker`, maar `Docker`-configuratie wordt pas in een aparte stap voorbereid.

## 4. Secrets-regel

* Echte `DATABASE_URL` blijft buiten `sam-mvp`.
* In `sam-mvp` staat alleen `.env.example` met lege waarden.
* Codex mag geen `.env` lezen, openen, tonen, kopieren of wijzigen.
* Echte secrets worden lokaal door Ricardo beheerd, bijvoorbeeld in `D:\AXIORA_SECRETS\sam-mvp.env` of wachtwoordmanager.

## 5. Verwachte lokale database later

* Database type: `PostgreSQL`
* Database naam: `sam_mvp_dev`
* Gebruiker: nog niet definitief
* Wachtwoord: nooit in documentatie
* Poort: later bepalen
* Beheer via `Docker`: waarschijnlijk ja
* Productie/staging database: later apart bepalen

## 6. Volgorde later

Stap 1:
`Docker`/`PostgreSQL`-strategie vastleggen.

Stap 2:
`docker-compose` voorbereiding maken zonder secrets.

Stap 3:
Ricardo beheert echte `DATABASE_URL` buiten `sam-mvp`.

Stap 4:
`Prisma` config voorbereiden zonder echte secrets.

Stap 5:
Pas daarna `migrate`/`generate` overwegen.

## 7. Niet doen zolang deze strategie alleen documentatie is

* geen database aanmaken
* geen `Docker` container starten
* geen `docker-compose.yml` maken
* geen `.env` maken
* geen echte `DATABASE_URL` opslaan
* geen `prisma migrate`
* geen `prisma db push`
* geen `prisma generate`

## 8. Governance

* Database hoort bij persistence/data-access.
* Connectors blijven vrij van `Prisma` en databasekennis.
* `WooCommerce` connector komt later apart.
* Source Authority blijft leidend voor productwaarheid.
* Geen oude `SAM V2`-database kopieren.

## 9. Conclusie

`SAM MVP` mag richting lokale `PostgreSQL`-database gaan, maar alleen via aparte gecontroleerde stappen en zonder echte secrets in `sam-mvp`.

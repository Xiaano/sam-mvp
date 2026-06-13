# Config

Hier komen later configuratievoorbeelden en omgevingsdocumentatie.

Belangrijke regels:

* Config bevat alleen voorbeelden en documentatie.
* Echte credentials horen niet in `sam-mvp`.
* `.env.example` mag bestaan.
* `.env` mag niet worden aangemaakt of gecommit.
* Echte secrets worden lokaal door Ricardo beheerd.
* Databaseconfiguratie komt later.
* Echte `DATABASE_URL` komt niet in `sam-mvp`.
* `Docker`/`PostgreSQL` configuratie wordt later apart voorbereid.
* `Docker`/`PostgreSQL` configuratie komt later.
* `docker-compose.yml` verwacht environment variables.
* `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` en `POSTGRES_HOST_PORT` worden extern beheerd.
* `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST_PORT` en `DATABASE_URL` worden extern beheerd.
* Echte waarden worden niet in `sam-mvp` opgeslagen.
* `.env` wordt niet gebruikt binnen `sam-mvp`.
* `PostgreSQL` is lokaal bereikbaar via hostpoort `5433`.
* `PowerShell`-sessievariabelen kunnen later handmatig door Ricardo gezet worden.
* Tijdelijke `PowerShell`-variabelen kunnen later handmatig door Ricardo gezet worden.
* Er komt geen `.env` in `sam-mvp`.
* `DATABASE_URL` wordt later extern beheerd.
* `DATABASE_URL` mag niet in `sam-mvp` worden opgeslagen.
* Tijdelijke `PowerShell`-sessievariabele kan later handmatig door Ricardo worden gezet.
* `.env` blijft buiten `sam-mvp`.
* `docker-compose.yml` bestaat nu als voorbereiding.
* Hostpoort wordt later bepaald.
* `Docker`-configuratie mag geen echte secrets bevatten.
* `DATABASE_URL` blijft extern beheerd en staat niet in `sam-mvp`.
* `DATABASE_URL` is alleen tijdelijk lokaal gebruikt voor schema-validatie.
* `prisma.config.ts` leest `DATABASE_URL` alleen via `process.env`.
* Prisma-acties volgen pas na aparte expliciete toestemming.
* `DATABASE_URL` blijft extern en is nodig voordat `migrate dev` handmatig wordt uitgevoerd.
* `DATABASE_URL` bleef extern tijdens `migrate deploy` en is niet in `sam-mvp` opgeslagen.
* De database bevat lokaal tabellen, maar `DATABASE_URL` blijft extern.
* Prisma Client is lokaal gegenereerd, terwijl `DATABASE_URL` extern blijft.
* Prisma Client-output is lokaal aanwezig onder `apps/api/src/generated/prisma`.
* Prisma Client moet lokaal opnieuw gegenereerd kunnen worden.
* Gegenereerde output wordt niet als bronconfiguratie behandeld.
* Prisma wordt later via een centrale persistence-laag gebruikt.
* Applicatiecode mag Prisma later alleen via deze centrale persistence-module gebruiken.
* Prisma-toegang loopt via `apps/api/src/persistence/prismaClient.ts`.
* TypeScript-validatie blijft een aparte handmatige vervolgstap.
* `@prisma/adapter-pg` en `pg` zijn beschikbaar voor latere Prisma runtime-integratie.

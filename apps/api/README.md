# API

Deze map is bedoeld voor de toekomstige `Node.js API` van `SAM MVP Release 1`.

Huidige status:

* `PRISMA_SCHEMA_V0_VALIDATED`

Belangrijke uitgangspunten:

* TypeScript-configuratie is aanwezig.
* Minimale TypeScript placeholders zijn toegevoegd om `tsc`-inputs mogelijk te maken.
* API folder skeleton is aanwezig.
* TypeScript-check is lokaal geslaagd.
* Fastify is beschikbaar als API-frameworkdependency.
* `tsx` is beschikbaar als lokale TypeScript runtime-tooling.
* Prisma tooling en CLI werken lokaal.
* Prisma v7 wordt bewust voorbereid.
* `schema.prisma v0` is aanwezig en valide.
* Fastify server factory compileert.
* `GET /health` route compileert.
* Runtime startfile is aanwezig.
* Server start lokaal via `npm run dev -w @sam-mvp/api`.
* `/health` werkt op [http://127.0.0.1:3001/health](http://127.0.0.1:3001/health).
* routes/services/connectors/repositories/data-access/domain/config zijn voorbereid.
* Er is minimale backend-skeletoncode toegevoegd.
* Er is nog geen businesslogica aanwezig.
* Er is nog geen echte backendlogica.
* Server start nog niet automatisch.
* Bestaande enige endpoint: `GET /health`.
* Er zijn nog geen extra endpoints.
* Prisma blijft beperkt tot data-access/persistence-laag.
* geen database, migraties of generate uitgevoerd.
* Er is geen WooCommerce connector.
* Er zijn nog geen extra backend/Prisma dependencies voor verdere SAM-functionaliteit toegevoegd.
* Er zijn geen build/test scripts toegevoegd.
* Lokale installaties zijn door Ricardo uitgevoerd.
* Installaties pas na expliciete opdracht.
* Dependencies worden pas toegevoegd na expliciete opdracht.
* Oude `SAM V2` blijft alleen testcontext.
* Toekomstige source adapters moeten gescheiden blijven van connectors, services en repositories.
* `WooCommerce` connector blijft platformconnector, niet bronwaarheid-engine.
* Connectors mogen later geen Prisma gebruiken.
* Connectors krijgen geen databasekennis.
* Prisma hoort later alleen in de data-access/persistence-laag.
* `EBADENGINE` warning moet worden beoordeeld voordat Prisma-runtime actief wordt gebruikt.
* Source Authority guardrail blijft verplicht maar is nog niet geimplementeerd.

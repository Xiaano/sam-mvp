# API Runtime Strategy Decision - SAM MVP

## 1. Titel

API Runtime Strategy Decision - SAM MVP

## 2. Status

`APPROVED`

## 3. Context

De minimale `Fastify` API skeleton bestaat en compileert. De API bevat een server factory, een `GET /health` route en een index export, maar start nog niet automatisch.

## 4. Besluit

Gebruik voor lokale ontwikkeling een lichte `TypeScript` runtime-aanpak, waarschijnlijk via `tsx`, zodat de API lokaal kan draaien zonder eerst een zware buildpipeline op te zetten.

## 5. Reden

* `SAM MVP Release 1` heeft eerst een eenvoudige lokale runtime nodig
* de API moet snel lokaal kunnen starten voor `/health`-tests
* er is nog geen productiebuild nodig
* er is nog geen deployment nodig
* de aanpak moet klein en begrijpelijk blijven
* Codex voert geen npm-installaties uit; Ricardo installeert lokaal waar nodig

## 6. Runtimevolgorde

Stap 1:
Runtime-strategie vastleggen.

Stap 2:
Lokale `tsx`-installatiestap voorbereiden.

Stap 3:
Ricardo installeert `tsx` lokaal.

Stap 4:
Startbestand toevoegen dat `createApiServer` gebruikt.

Stap 5:
Startscript toevoegen.

Stap 6:
Lokaal `/health` testen.

## 7. Grenzen

* nog geen productiebuild
* nog geen Docker
* nog geen deployment
* nog geen Prisma
* nog geen database
* nog geen `WooCommerce` connector
* nog geen scanlogica
* nog geen extra endpoints behalve bestaande `/health`
* geen oude `SAM V2`-code gebruiken

## 8. Connector en source boundaries

* runtime-start mag geen connectorlogica bevatten
* runtime-start mag geen Prisma of database initialiseren
* Source Authority blijft guardrail, maar wordt nog niet geimplementeerd
* `WooCommerce` connector komt later apart

## 9. Vervolgactie

Na dit besluit mag een lokale `tsx`-installatiestap worden voorbereid, maar uitvoering gebeurt pas door Ricardo in normale `PowerShell`.

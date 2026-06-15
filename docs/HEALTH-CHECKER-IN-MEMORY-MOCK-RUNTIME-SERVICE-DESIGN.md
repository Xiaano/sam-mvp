# SAM Health Checker In-Memory Mock Runtime Service Design

## Doel

Dit is een eerste mogelijke runtime-service vóór database of Prisma. De service is alleen in-memory/mock en kent geen persistence.

## Service-verantwoordelijkheid

De mock runtime-service zou later verantwoordelijk kunnen zijn voor:

* mock scan-run maken
* mock issues genereren
* mock proposals koppelen
* mock review queue opbouwen
* mock approval policy toepassen
* mock audit events previewen

## Wat bewust niet gebeurt

Nu gebeurt bewust nog niets van het volgende:

* geen database writes
* geen Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen echte operatoracties
* geen execution
* geen secrets

## Mogelijke latere servicevorm

Een latere servicevorm kan bijvoorbeeld zijn:

* `apps/api/src/services/healthChecker/mockRuntimeService.ts`

Pas bouwen na aparte beslissing.

## Relatie met bestaande endpoints

De service sluit logisch aan op:

* mock scan-to-review flow
* operator overview mock

De contractlaag blijft leidend.

## Veiligheidsregels

De service blijft later alleen veilig als deze regels gelden:

* read-only
* `write_actions` disabled
* `auto_execute` disabled
* human review/approval verplicht

## Acceptatiecriteria vóór implementatie

Vóór implementatie moeten eerst deze punten worden herbeoordeeld:

* shared response/safety afspraken
* lifecycle/state-design
* geen database/Prisma activeren
* geen WooCommerce koppelen


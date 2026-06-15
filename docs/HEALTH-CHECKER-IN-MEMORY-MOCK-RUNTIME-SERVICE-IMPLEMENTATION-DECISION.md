# SAM Health Checker In-Memory Mock Runtime Service Implementation Decision

## Besluit

De in-memory mock runtime service mag als volgende code-stap worden voorbereid.

## Strikte scope

Deze volgende stap blijft strikt beperkt tot:

* alleen mock/in-memory
* geen database
* geen Prisma-runtime
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit
* geen write actions
* geen execution
* geen secrets

## Mogelijke toekomstige file

Een mogelijke toekomstige file is:

* `apps/api/src/services/healthChecker/mockRuntimeService.ts`

## Verantwoordelijkheid van de service

De service mag later alleen mock data structureren voor:

* scan run
* issues
* proposals
* review queue
* approval policy
* audit preview

## Relatie met bestaande endpoints

Bestaande endpoints mogen pas in een aparte stap eventueel overschakelen naar deze service.

## Acceptatiecriteria voor de latere implementatiestap

Voor de latere implementatiestap geldt:

* geen bestaande routes breken
* `/diagnostics` blijft `database` en `prisma` `not_checked`
* safety blijft expliciet
* human approval blijft verplicht
* `auto_execute` blijft disabled

## Geen implementatie in dit document

Dit document bevat alleen het besluit en geen implementatie.


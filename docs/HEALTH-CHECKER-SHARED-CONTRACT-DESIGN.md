# SAM Health Checker Shared Contract Design

## Waarom dit later nuttig kan zijn

De huidige Health Checker-contractlaag bevat veel herhaalde responsevelden en safety-objecten. Een gedeelde basis kan later helpen om drift te verminderen, dezelfde taal te houden tussen mock, review en auditlagen, en nieuwe contracten sneller en consistenter op te bouwen.

## Mogelijk gedeelde velden

Later zouden mogelijk deze velden of blokken gedeeld kunnen worden:

* `service`
* `version`
* `mode`
* `status`
* `safety`
* `next_step`
* approval flags
* `write_actions` / `auto_execute` flags

## Mogelijke technische richting later

Een latere technische richting kan bijvoorbeeld zijn:

* `apps/api/src/contracts/healthChecker/shared.ts`
* een gedeelde helper voor safety-objecten
* gedeelde response types/interfaces

## Wat nu bewust niet gebeurt

Nu gebeurt bewust nog niets van het volgende:

* geen refactor
* geen codewijziging
* geen routewijziging
* geen database/Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit

## Risico bij te vroeg centraliseren

Te vroeg centraliseren kan leiden tot:

* verlies van leesbaarheid
* onnodige abstractie
* vertraging vóór echte runtime-flow

## Beslisregel

Centralisatie wordt pas zinvol zodra echte runtime-flow, databasevoorbereiding of meerdere muterende endpoints dit noodzakelijk maken. Tot die tijd blijven de bestaande contracten expliciet en leesbaar.

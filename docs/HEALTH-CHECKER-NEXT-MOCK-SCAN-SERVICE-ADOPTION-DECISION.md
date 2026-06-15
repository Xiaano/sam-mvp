# SAM Health Checker Next Mock Scan Service Adoption Decision

## Besluit

- `GET /api/health-checker/mock-scan` is de volgende mogelijke kandidaat voor service-adoptie.
- Dit is een mock/runtime-achtige route, geen contractroute.
- Een latere codewijziging zal waarschijnlijk een gerichte export toevoegen, bijvoorbeeld `createMockScan()`.
- Het bestaande endpoint path moet ongewijzigd blijven.

## Veiligheidsgrenzen

- De response moet read-only/mock blijven.
- Mock scan data mag nooit als productiebron of klantdata gelden.
- Mock scan data mag niet naar database, Prisma, WooCommerce, AI/OpenAI, write flows of execution doorstromen.
- `source`, `mode`, `status` of vergelijkbare metadata moeten herkenbaar blijven.
- Contractroutes blijven statisch.
- Een eventuele code-adoptie mag niet gecombineerd worden met refactor of shared helper.
- `/diagnostics` moet `database=not_checked` en `prisma=not_checked` blijven tonen.

## Geen bredere scope

- Geen database.
- Geen Prisma.
- Geen WooCommerce.
- Geen AI/OpenAI.
- Geen POST/write/execution.
- Geen secrets.

## Bevestiging

- Dit document geeft geen toestemming voor database, Prisma, WooCommerce, AI/OpenAI, POST-endpoints, write actions, execution of secrets.
- Het document is alleen een besluitdocument en verandert geen code, runtime of route-inrichting.


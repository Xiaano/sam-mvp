# SAM Health Checker Mock Runtime Service Refactor Threshold Decision

## Besluit

- `mockRuntimeService` wordt nu nog niet gerefactord.
- Extra service-adopties zijn alleen verantwoord zolang leesbaarheid, contracthelderheid en validatie beheersbaar blijven.
- Helper/centralisatie mag pas worden overwogen bij aantoonbaar drift-risico.

## Signalen voor eerst een refactorbesluit

Een apart refactorbesluit is eerst nodig als:

- dubbele status/source/mode-structuren inconsistent raken;
- meerdere routes dezelfde lifecycle-, audit- of reviewpayloads delen met kleine verschillen;
- validatie onoverzichtelijk wordt;
- routebestanden dun worden maar het servicebestand te groot wordt;
- contractroutes per ongeluk runtime-logica dreigen te krijgen;
- mock data en contractdefinities door elkaar gaan lopen.

## Contractroutes blijven statisch

- Contractroutes blijven voorlopig statisch.
- Preview/mock/runtime-routes mogen per stuk worden geadopteerd na een apart besluitdocument.
- Refactor mag nooit gecombineerd worden met route-adoptie.

## Toekomstige helper/refactor

- Een eventuele toekomstige helper of refactor heeft een eigen besluitdocument nodig.
- Zo'n stap vereist ook een eigen scope, validatie en review.

## Veiligheidsgrenzen

- Geen database.
- Geen Prisma.
- Geen WooCommerce.
- Geen AI/OpenAI.
- Geen POST/write/execution.
- Geen secrets.

## Bevestiging

- Dit document geeft geen toestemming voor codewijziging.
- Route-adoptie en refactor blijven voortaan expliciet gescheiden.


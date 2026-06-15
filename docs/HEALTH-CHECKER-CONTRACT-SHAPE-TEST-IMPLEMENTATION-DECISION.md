# SAM Health Checker Contract Shape Test Implementation Decision

## Besluit

Een minimale contract-shape testimplementatie voor de huidige Health Checker contract-/mappingroutes is later verantwoord. Dit document voegt nog geen testcode toe.

## Eerste testset

De eerste contract-shape testset mag alleen deze bestaande GET-routes behandelen:

- `GET /api/health-checker/proposal-contract`
- `GET /api/health-checker/operator-review-contract`
- `GET /api/health-checker/approval-flow-contract`
- `GET /api/health-checker/audit-log-contract`
- `GET /api/health-checker/issue-proposal-mapping`
- `GET /api/health-checker/issue-classification`

## Wat tests mogen controleren

Tests mogen alleen controleren:

- `statusCode=200`
- aanwezigheid van contractsecties
- verplichte shape- en metadata-velden waar aanwezig
- issue-, proposal-, review-, approval- en audit-definities
- disabled of blocked execution-semantiek waar aanwezig
- afwezigheid van write/action-endpointgedrag

## Wat tests niet mogen

Tests mogen geen databaseverbinding maken, geen Prisma gebruiken, geen WooCommerce gebruiken, geen AI/OpenAI gebruiken, geen POST/write/execution testen, geen secrets nodig hebben en geen echte klantdata gebruiken.

Mock/runtime-data mag niet als contractbron worden gebruikt.

## Scopegrenzen

Deze testimplementatie mag niet gecombineerd worden met:

- routewijzigingen
- service-adoptie
- refactor
- shared helper
- serverregistratiewijzigingen
- adapter-/servicegrensvoorbereiding

Mock endpoint checks en contract-shape checks blijven gescheiden.

Contractroutes blijven statisch.

## Tooling

Eventuele tooling moet minimaal blijven en de bestaande projectstructuur respecteren.

## Volgende stap

Echte testcode mag pas in een aparte vervolgstap worden toegevoegd op basis van dit besluit.

## Bevestiging

Dit document is alleen een contract-shape testimplementatiebesluit. Geen testcode, code, runtime of secrets zijn geraakt. Mock/runtime en contractlagen blijven gescheiden.

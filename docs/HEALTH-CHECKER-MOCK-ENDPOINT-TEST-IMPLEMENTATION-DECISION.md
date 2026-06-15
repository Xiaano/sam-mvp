# SAM Health Checker Mock Endpoint Test Implementation Decision

## Besluit

Een minimale testimplementatie voor de huidige mock/read-only Health Checker endpoints is later verantwoord, maar alleen voor shape-, metadata- en read-only checks. Dit document voegt nog geen testcode toe.

## Eerste testset

De eerste testset mag alleen deze endpoints omvatten:

- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`
- `GET /diagnostics`

## Wat tests minimaal bewaken

Tests mogen zich beperken tot metadata, shape en read-only gedrag, zoals:

- `statusCode=200`
- `source`
- `mode`
- `status`
- endpoint-relevante aantallen waar aanwezig
- `/diagnostics` met `database=not_checked` en `prisma=not_checked`

## Wat tests niet mogen doen

Tests mogen geen databaseverbinding maken, geen Prisma gebruiken, geen WooCommerce gebruiken, geen AI/OpenAI gebruiken, geen POST/write/execution-gedrag testen, geen secrets nodig hebben en geen echte klantdata gebruiken.

## Scopegrenzen

Deze testimplementatie mag niet gecombineerd worden met:

- routewijzigingen
- serverregistratiewijzigingen
- refactor
- shared helper
- contractroutewijzigingen
- adapter- of servicegrensvoorbereiding

Contractroutes blijven voorlopig statisch. Ze vallen niet in deze eerste testset, behalve eventueel later in een aparte contract-shape testfase na een apart besluit.

## Tooling

De testopzet moet minimaal blijven en de bestaande projectstructuur respecteren. Als Codex-/npm-beperkingen later een rol spelen, kan een veilige inline `tsx`-check of lichte testsetup pas in de echte implementatiestap worden overwogen.

## Volgende stap

Echte testcode mag pas in een aparte vervolgstap worden toegevoegd op basis van dit besluit.

## Bevestiging

Dit document is alleen een testimplementatiebesluit. Geen code, runtime, contractroutes of secrets zijn geraakt. De mock-data-boundary blijft intact.

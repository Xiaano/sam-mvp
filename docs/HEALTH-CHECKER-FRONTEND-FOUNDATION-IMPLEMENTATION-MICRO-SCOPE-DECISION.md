# Health Checker Frontend Foundation Implementation Micro Scope Decision

## Besluit
Een minimale frontend foundation implementatie is later verantwoord als volgende codefase, mits die strikt read-only blijft en alleen de basis legt voor een toekomstige cockpit. Deze beslissing voegt nog geen code toe.

## Mogelijke foundation
Later mag maximaal worden toegevoegd:
- eenvoudige app-shell in `apps/web`
- read-only entrypoint
- basis HTML/render target indien nodig
- eenvoudige TypeScript frontendstructuur
- dev/build/check scripts als strikt nodig
- read-only API client/fetch laag voor bestaande GET-endpoints
- basis loading/empty/error states
- eenvoudige styling/basislayout

## Mogelijke endpoints
De frontend foundation mag later maximaal deze bestaande API-endpoints gebruiken:
- `GET /health`
- `GET /diagnostics`
- `GET /api/health-checker/readiness`
- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`

## Grenzen
- Geen nieuwe backendroutes mogen nodig zijn.
- De frontend foundation moet read-only blijven.
- Er mag geen auth/session-implementatie worden toegevoegd.
- Er mogen geen approve/reject/execute/write UI-acties worden toegevoegd.
- Secrets, raw payloads, execution payloads, Prisma/database internals en onnodige klantdata mogen niet getoond worden.

## Dependency- en frameworkkeuze
Een dependency- of frameworkkeuze moet expliciet gemotiveerd worden vóór installatie.
Als een dependency toch nodig blijkt, moet Codex stoppen en rapporteren in plaats van installeren.

## Implementatiegrens
De implementatie moet later in één aparte micro-scope gebeuren.

## Minimale validatie na implementatie
Na implementatie moet minimaal worden gevalideerd dat:
- bestaande API checks groen blijven;
- de web workspace check/build slaagt indien scripts zijn toegevoegd;
- handmatige browsercontrole een read-only cockpit/app-shell toont;
- `/diagnostics` `database=not_checked`, `prisma=not_checked`, `woocommerce=not_built`, `secrets=not_exposed` blijft tonen.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, dependencies, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een frontend foundation implementation micro-scope decision.
- Er zijn geen frontend-, code-, dependency-, runtime- of secretscope geraakt.
- `apps/web` blijft nog een placeholder.
- De eerste UI blijft later read-only.
- `execution/write` is nog niet toegestaan.


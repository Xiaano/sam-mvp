# Health Checker Read Only API Fetch Micro Scope Decision

## Besluit
Een minimale read-only API-fetch stap is later verantwoord, mits die strikt beperkt blijft tot status- en readinessweergave. Deze beslissing voegt nog geen code toe.

## Mogelijke eerste fetch-endpoints
De eerste fetch-stap mag maximaal deze endpoints gebruiken:
- `GET /health`
- `GET /diagnostics`
- `GET /api/health-checker/readiness`

Deze endpoints mogen alleen visueel of statusmatig worden getoond.

## Veilig zichtbare velden
Veilig zichtbaar mogen zijn:
- service
- status
- mode
- database
- prisma
- woocommerce
- secrets
- timestamp
- readiness/status metadata, voor zover aanwezig

## Bewaakte waarden
De volgende waarden moeten expliciet bewaakt blijven:
- `database=not_checked`
- `prisma=not_checked`
- `woocommerce=not_built`
- `secrets=not_exposed`

## UI-grenzen
De UI mag in deze stap alleen loading, empty, error en unavailable states tonen.

## Expliciet niet toegestaan
In deze eerste fetch-stap mogen geen mock scan-, proposal-, review- of audit payloads worden opgehaald. Ook zijn geen POST, PUT, PATCH of DELETE requests toegestaan en geen approve/reject/execute/write UI-acties.

## Implementatiegrenzen
- Er zijn geen nieuwe backendroutes nodig.
- Er zijn geen dependencies of frameworks nodig.
- Implementatie mag pas in een aparte microstap gebeuren.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een read-only API-fetch micro-scope decision.
- Er zijn geen frontend-, code-, runtime- of secretscope geraakt.
- Alleen `/health`, `/diagnostics` en `/readiness` mogen later in scope vallen.
- `execution/write` is nog niet toegestaan.


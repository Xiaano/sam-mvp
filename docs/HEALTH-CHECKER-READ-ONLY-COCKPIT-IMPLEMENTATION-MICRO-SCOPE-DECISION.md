# Health Checker Read Only Cockpit Implementation Micro Scope Decision

## Besluit
Een eerste minimale read-only cockpitimplementatie is later verantwoord als volgende codefase, mits zij strikt beperkt blijft tot read-only presentatie. Deze beslissing voegt nog geen frontend-code toe.

## Mogelijke UI-secties
De eerste implementatie mag minimaal deze UI-secties bevatten:
- API/diagnostics status
- readiness status
- scan summary
- issue summary
- proposal preview
- operator review status
- lifecycle/state summary
- audit trail metadata

## Mogelijke endpoints
De eerste implementatie mag maximaal de volgende bestaande endpoints gebruiken:
- `GET /health`
- `GET /diagnostics`
- `GET /api/health-checker/readiness`
- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`

Contractroutes mogen alleen als read-only reference worden gebruikt als dat strikt nodig is.

## UI states
Minimaal aanwezig moeten zijn:
- loading
- empty
- error
- unavailable endpoint
- mock/read-only mode indicator

## Buiten scope
Expliciet buiten scope blijven:
- approve
- reject/block
- execute
- write
- cleanup/delete
- export met echte data
- auth/session
- dashboard preferences
- widgets als configureerbare architectuur
- nieuwe backendroutes
- database/Prisma
- WooCommerce
- AI/OpenAI

## Veiligheidsgrenzen
- De eerste UI mag geen secrets, raw payloads, execution payloads of onnodige klantdata tonen.
- De eerste UI mag geen package- of dependency-uitbreiding doen tenzij die apart gemotiveerd en expliciet gemeld wordt.

## Implementatie- en verifiestap
De implementatie moet later in één aparte micro-scope gebeuren. Na implementatie moeten minimaal handmatige browsercontrole en de bestaande checkcommands opnieuw worden uitgevoerd.

## Nog niet toegestaan
Dit document geeft geen toestemming voor code, frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een read-only cockpit implementation micro-scope decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De eerste UI blijft read-only.
- Er zijn geen nieuwe backendroutes nodig.
- `execution/write` is nog niet toegestaan.


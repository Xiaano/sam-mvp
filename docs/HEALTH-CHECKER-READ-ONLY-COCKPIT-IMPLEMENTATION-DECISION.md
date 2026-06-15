# Health Checker Read Only Cockpit Implementation Decision

## Besluit
Een eerste minimale read-only cockpit is later verantwoord, mits die strikt als presentatie- en leeslaag blijft functioneren. Deze beslissing voegt nog geen frontend-code toe.

## Mogelijke endpoints voor een eerste cockpit
Een eerste cockpit mag later maximaal de volgende bestaande endpoints consumeren:
- `GET /health`
- `GET /diagnostics`
- `GET /api/health-checker/readiness`
- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`

Contractroutes mogen alleen als read-only reference worden gebruikt.

## Mogelijke eerste UI-secties
De eerste cockpit mag conceptueel alleen deze secties tonen:
- API/diagnostics status
- scan summary
- issue summary
- proposal preview
- operator review status
- audit trail metadata
- lifecycle/state summary

## Niet-toegestane acties
De eerste cockpit mag niet bevatten:
- approve
- reject/block
- execute
- write
- cleanup/delete
- export met echte data
- WooCommerce update
- AI/OpenAI call
- database write

## Cockpit-grenzen
- De eerste UI mag geen auth-implementatie toevoegen.
- De eerste UI mag geen nieuwe backendroutes vereisen.
- De eerste UI mag geen secrets, raw payloads, execution payloads of onnodige klantdata tonen.
- Loading, empty en error states moeten minimaal worden meegenomen bij latere implementatie.

## Implementatiegrens
Een echte cockpit-implementatie mag pas in een aparte vervolgstap worden toegevoegd.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een read-only cockpit implementation decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De eerste cockpit blijft read-only.
- Er zijn geen nieuwe backendroutes nodig.
- `execution/write` is nog niet toegestaan.


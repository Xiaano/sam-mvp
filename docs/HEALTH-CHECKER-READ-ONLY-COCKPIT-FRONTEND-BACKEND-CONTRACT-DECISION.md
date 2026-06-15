# Health Checker Read Only Cockpit Frontend Backend Contract Decision

## Besluit
Een frontend/backend contract is nodig vóór cockpit-implementatie, zodat een toekomstige read-only cockpit alleen veilige en voorspelbare data consumeert. Zonder contract ontstaat risico op UI-logica die per ongeluk read-only inzichten, review/approval en execution door elkaar haalt.

## Mogelijke read-only bronnen voor de cockpit
Een eerste cockpit mag conceptueel later de volgende bestaande read-only endpoints consumeren:
- `GET /health`
- `GET /diagnostics`
- `GET /api/health-checker/readiness`
- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`
- relevante contractroutes, alleen als read-only reference

## Veilig zichtbare informatie
De cockpit mag veilig conceptueel tonen:
- service/status/mode metadata
- scan summary
- issue summary
- proposal preview
- review status
- approval status
- lifecycle/status metadata
- audit metadata
- diagnostics/readiness status

## Niet-zichtbare informatie
De cockpit mag niet tonen:
- secrets
- API keys/tokens
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- execution payloads
- raw debuglogs zonder governance
- onnodige klantdata
- Prisma/database internals

## Cockpit-grenzen
- De eerste cockpitfase mag uitsluitend read-only zijn.
- De cockpit mag geen approve/reject/execute/write-acties bevatten.
- Approval en execution mogen nooit één UI-actie worden.
- Widgets/data panels mogen alleen gecontroleerde views zijn op gevalideerde data.
- User preferences mogen later alleen layout- en kijkvoorkeuren zijn.
- Loading, empty en error states moeten later apart worden ontworpen.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Voorwaarden vóór latere read-only cockpit-implementatie
Vóór latere implementatie zijn minimaal nodig:
- read-only cockpit implementation decision
- UI information architecture
- frontend/backend response mapping
- security review
- role/permission matrix detailtabel
- auth/session identity boundary
- widget architecture decision, indien widgets in scope komen

## Bevestigingen
- Dit is alleen een frontend/backend contract decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De cockpit blijft read-only.
- `execution/write` is nog niet toegestaan.


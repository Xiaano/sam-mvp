# Health Checker Operator Cockpit Scope Decision

## Besluit
Een cockpit-scopebesluit is nodig vóór UI-implementatie, zodat read-only inzicht, review/approval en execution niet per ongeluk samen in één cockpit worden ontworpen. Zonder scopebesluit wordt de kans op functievermenging te groot.

## Eerste cockpitfase
De eerste cockpitfase moet read-only zijn.

## Toegestane cockpit-informatie
De eerste cockpit mag conceptueel minimaal tonen:
- scan overview
- issue summary
- proposal preview
- operator review status
- approval status
- lifecycle/status metadata
- audit trail metadata
- diagnostics/readiness status

## Niet-toegestane cockpit-informatie
De eerste cockpit mag niet tonen:
- secrets
- API keys/tokens
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- execution payloads
- raw debuglogs zonder governance
- onnodige klantdata

## Niet-toegestane acties in de eerste fase
De eerste cockpitfase mag niet bevatten:
- approve uitvoeren
- reject/block uitvoeren
- execution voorbereiden
- execution uitvoeren
- WooCommerce writes
- database writes
- AI/OpenAI calls
- cleanup/delete
- export met echte data

## Scheiding van fases
Review, approval en execution vereisen later aparte fases en aparte besluiten.

## Implementatiegrenzen
- De eerste cockpit mag geen auth-code of access-control-implementatie introduceren.
- De eerste cockpit mag alleen bestaande read-only contract/mock-informatie consumeren als later expliciet besloten wordt tot implementatie.
- Cockpit-contracten moeten later apart besloten worden vóór frontendbouw.
- UI state zoals loading, empty en error moet later apart worden ontworpen.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Voorwaarden vóór latere implementatie
Vóór latere cockpit-implementatie zijn minimaal nodig:
- frontend/backend contract decision
- read-only cockpit implementation decision
- role/permission matrix detailtabel
- auth/session identity boundary
- information architecture
- security review
- UI state design
- audit visibility policy

## Bevestigingen
- Dit is alleen een operator cockpit scope decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De eerste cockpitfase blijft read-only.
- `execution/write` is nog niet toegestaan.


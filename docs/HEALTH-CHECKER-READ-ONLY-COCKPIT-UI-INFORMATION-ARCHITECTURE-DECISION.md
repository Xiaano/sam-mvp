# Health Checker Read Only Cockpit UI Information Architecture Decision

## Besluit
UI information architecture is nodig vóór frontendimplementatie, zodat een toekomstige read-only cockpit een duidelijke, veilige en consistente informatievolgorde krijgt. Zonder architectuur kan de UI te snel uitgroeien tot een losse verzameling schermen zonder duidelijke grenzen.

## Toegestane cockpitsecties
De eerste cockpit mag conceptueel deze secties bevatten:
- API/diagnostics status
- readiness status
- scan summary
- issue summary
- proposal preview
- operator review status
- approval status
- lifecycle/state summary
- audit trail metadata

## Logische volgorde
Een logische eerste volgorde is:
1. API/diagnostics status
2. readiness status
3. scan summary
4. issue summary
5. proposal preview
6. operator review status
7. approval status
8. lifecycle/state summary
9. audit trail metadata

## Minimale zichtbare informatie per sectie
Elke sectie mag alleen samengevatte, read-only en geclassificeerde informatie tonen. Voorbeelden:
- status-, mode- en service-metadata
- aantallen en samenvattingen
- preview-tekst of samenvattingsregels
- lifecycle- en auditmetadata

## Expliciet niet zichtbare informatie
De UI mag niet tonen:
- secrets
- API keys/tokens
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- execution payloads
- raw debuglogs zonder governance
- onnodige klantdata
- Prisma/database internals

## UI states
Minimaal te ontwerpen UI states zijn:
- loading
- empty
- error
- unavailable endpoint
- degraded diagnostics
- no issues
- mock/read-only mode

## Niet-toegestane acties
De eerste cockpit mag geen acties bevatten voor:
- approve
- reject/block
- execute
- write
- cleanup/delete
- export met echte data
- WooCommerce update
- AI/OpenAI call
- database write

## Widgets en voorkeuren
Widgets/data panels kunnen later mogelijk zijn, maar zijn niet noodzakelijk voor de eerste minimale cockpit. User preferences kunnen later mogelijk zijn, maar niet in de eerste minimale cockpit.

## Implementatiegrens
UI-implementatie mag pas na een apart implementatiebesluit en micro-scope worden toegevoegd.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een UI information architecture decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De cockpit blijft read-only.
- Er zijn geen nieuwe backendroutes nodig.
- `execution/write` is nog niet toegestaan.


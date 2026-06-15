# Health Checker Operator Cockpit Readiness Review

## Beoordeling
Een operator cockpit mag pas na een expliciete readiness-review worden ontworpen of gebouwd. Zonder zo'n review bestaat het risico dat read-only inzichten, review/approval en execution onbedoeld samen in één UI-lijn terechtkomen.

## Veilige cockpit-informatie
Een toekomstige cockpit zou conceptueel alleen veilige, geclassificeerde informatie mogen tonen zoals:
- scan overview
- issue summary
- proposal preview
- review status
- approval status
- audit trail metadata
- lifecycle/status metadata
- diagnostics/readiness status

## Informatie die niet getoond mag worden
De cockpit mag voorlopig niet tonen:
- secrets
- API keys/tokens
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- execution payloads
- onnodige klantdata
- raw debuglogs zonder governance

## Mogelijke acties in een latere cockpit
De volgende acties kunnen later conceptueel bestaan, maar zijn nog niet actief:
- proposal bekijken
- proposal reviewen
- approval voorbereiden
- audit trail bekijken
- export aanvragen
- cleanup aanvragen
- execution voorbereiden, voorlopig disabled
- execution uitvoeren, voorlopig disabled

## Cockpit-grenzen
- De cockpit moet read-only starten.
- De cockpit mag in de eerste fase geen execution/write bevatten.
- De cockpit moet access-control, actor identity, tenant/customer/shop boundary en data classification respecteren.
- Approval en execution mogen nooit één knop worden.
- AI/OpenAI-output mag nooit zonder label of human review als klantwaarheid worden getoond.
- WooCommerce-data mag later alleen via canonical of gemapte records zichtbaar worden.

## Implementatiegrens
De huidige cockpit readiness review staat nog geen UI-implementatie toe. Voor implementatie zijn minimaal nodig:
- cockpit scope decision
- role/permission matrix detailtabel
- auth/session identity boundary
- UI information architecture
- read-only first policy
- audit visibility policy
- empty/error/loading states
- frontend/backend contract decision
- security review

## Bevestigingen
- Dit is alleen een operator cockpit readiness review.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- De cockpit moet read-only starten.
- `execution/write` is nog niet toegestaan.


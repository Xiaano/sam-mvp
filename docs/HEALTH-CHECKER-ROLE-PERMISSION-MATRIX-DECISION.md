# Health Checker Role Permission Matrix Decision

## Besluit
Een role/permission matrix is nodig voordat operator cockpit, persistence, adapters of execution verantwoord kunnen worden aangesloten. Zonder expliciete matrix blijven lezen, reviewen, goedkeuren en uitvoeren te makkelijk door elkaar lopen.

## Scope
Dit document legt alleen de autorisatiegrenzen vast. Het geeft geen toestemming voor auth-code, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Mogelijke rollen
De volgende rollen kunnen later conceptueel bestaan:
- internal admin
- operator/reviewer
- support operator
- customer admin
- customer viewer
- audit-only viewer
- system/service actor

## Mogelijke acties
De volgende acties moeten later apart geautoriseerd worden:
- scan bekijken
- issue bekijken
- proposal bekijken
- proposal reviewen
- approval geven
- rejection/block geven
- audit trail bekijken
- data export aanvragen
- cleanup/verwijdering starten
- execution voorbereiden
- execution uitvoeren, voorlopig disabled

## Autorisatiegrenzen
- Lezen, reviewen, goedkeuren en uitvoeren zijn verschillende permissies.
- Approval betekent nooit automatisch execution.
- System/service actors mogen human approval nooit vervangen.
- Tenant/customer/shop boundary moet altijd vóór permissiecontrole gelden.
- Data classification moet toegang beïnvloeden.
- Secrets, API keys, tokens, raw payloads en execution payloads mogen nooit via normale Health Checker-permissies zichtbaar zijn.
- WooCommerce- en AI/OpenAI-data mogen later alleen via canonical, gemapte of gelabelde records zichtbaar zijn.

## Relatie tot later
Een toekomstige implementatie moet aansluiten op:
- permission matrix detailtabel
- actor identity policy
- session/user identity boundary
- access-control checks
- audit event mapping
- support/break-glass policy
- least privilege uitgangspunt
- UI/operator cockpit decision

## Bevestigingen
- Dit is alleen een role/permission matrix decision.
- Er zijn geen code-, auth-, runtime- of secretscope geraakt.
- Lezen, reviewen, approval en execution blijven gescheiden.
- `execution/write` is nog niet toegestaan.


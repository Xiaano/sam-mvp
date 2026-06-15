# SAM Health Checker Actor Identity Boundary Decision

## Waarom actor identity boundaries verplicht zijn

Actor identity boundaries zijn verplicht vóór access-control, audit logging, persistence, operator cockpit of execution, zodat duidelijk blijft wie iets deed, namens wie, en met welke autoriteit.

## Mogelijke actor types

Later kunnen conceptueel bestaan:

- human operator
- internal admin
- customer admin
- customer viewer
- support operator
- audit-only viewer
- system actor
- service actor
- scheduled job
- external integration actor

## Herkenbaarheid van actor-identiteit

Actor type, actor id/reference en actor scope moeten later apart herkenbaar zijn.

Menselijke acties en systeemacties mogen nooit impliciet hetzelfde zijn.

## Actor- en approval-grenzen

System- en service-actors mogen nooit menselijke approval vervangen.

Support- en admin-acties moeten auditbaar zijn en zijn niet automatisch klantacties.

## Boundarycontrole

Customer- en shop-boundaries moeten altijd vóór actorrechten gecontroleerd worden.

Actor identity moet aansluiten op:

- access-control boundary
- audit logging policy
- tenant/customer/shop boundary
- data classification
- retention
- review/approval policy

## Acties die actor-identiteit vereisen

Later vereisen actor-identiteit:

- scan bekijken
- proposal bekijken
- proposal reviewen
- approval geven
- audit trail bekijken
- export aanvragen
- cleanup/verwijdering starten
- execution voorbereiden
- execution uitvoeren, voorlopig disabled

## Execution/write-grens

Execution en write actions blijven voorlopig disabled en blocked.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- auth-code
- database
- Prisma
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Voorwaarden vóór latere implementatie

Vóór latere implementatie zijn minimaal nodig:

- role model decision
- permission matrix
- actor id/reference policy
- session/user identity boundary
- support/break-glass policy
- audit event actor mapping
- least privilege uitgangspunt
- review/approval policy

## Advies voor de volgende fase

De logische volgende fase is een actor identity model review of besluit, nog steeds documentair en zonder codebesluit.

## Bevestiging

Dit is alleen een actor identity boundary decision. Geen code, auth, Prisma of database is geraakt. Menselijke en systeemacties blijven gescheiden en persistence/integraties/execution zijn nog niet toegestaan.

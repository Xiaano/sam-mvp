# SAM Health Checker Execution Policy Boundary Decision

## Waarom execution/write actions geblokkeerd blijven

Execution en write actions blijven voorlopig volledig geblokkeerd, zodat er nog geen directe mutaties, adapterwrites of onbedoelde productie-effecten kunnen ontstaan.

## Mogelijke toekomstige execution-acties

Later kunnen conceptueel bestaan, maar nu nog disabled:

- WooCommerce product update
- proposal toepassen
- issue fix uitvoeren
- cleanup/verwijderactie uitvoeren
- export genereren
- audit/persistence write
- externe adapter write

## Execution mag niet volgen uit alleen bron- of systeeminput

Execution mag nooit volgen uit alleen scan, proposal, AI-output of system actor.

## Minimale vereisten voor execution

Later vereist execution minimaal:

- human approval
- actor identity
- tenant/customer/shop boundary
- source/canonical mapping
- audit event
- rollback/undo policy
- access-control check
- data classification
- dry-run/preview waar mogelijk

## Audit-grens

Approval en execution moeten aparte audit events blijven.

## Payload-grens

Execution payloads blijven standaard forbidden voor opslag.

Secrets, API keys en tokens mogen nooit zichtbaar worden via een execution-flow.

## WooCommerce-grens

WooCommerce-write mag later alleen via een aparte adapter decision en execution policy.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit rechtstreeks execution triggeren.

## Actor-grens

System- en service-actors mogen nooit menselijke approval vervangen.

## Persistence-grens

Execution mag niet gecombineerd worden met de eerste persistence-implementatie.

## WooCommerce-adapter-grens

Execution mag niet gecombineerd worden met de eerste WooCommerce-adapterimplementatie.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- code
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

- execution capability matrix
- permission matrix
- rollback/undo policy
- dry-run policy
- adapter-specific execution decision
- audit event mapping
- error/retry policy
- customer/shop boundary validation
- operator cockpit decision

## Bevestiging

Dit is alleen een execution policy boundary decision. Geen code, auth, Prisma of database is geraakt. Execution en write actions blijven volledig geblokkeerd en review/approval blijven gescheiden van execution. Persistence, integraties en execution zijn nog niet toegestaan.

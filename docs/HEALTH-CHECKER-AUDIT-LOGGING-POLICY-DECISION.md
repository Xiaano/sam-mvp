# SAM Health Checker Audit Logging Policy Decision

## Waarom audit logging nodig is

Audit logging is nodig vóór persistence, adapters, operator cockpit of execution, zodat beslissingen en ketenacties later herleidbaar zijn zonder dat alles als ruwe log wordt opgeslagen.

## Auditable acties

Later kunnen onder meer deze acties auditwaardig zijn:

- scan gestart
- scan voltooid
- issue gedetecteerd
- proposal gegenereerd
- proposal bekeken
- proposal gereviewd
- approval gegeven
- approval geweigerd
- execution voorbereid
- execution uitgevoerd, voorlopig disabled
- execution geblokkeerd
- data export aangevraagd
- data cleanup/verwijdering gestart

## Mogelijke audit metadata

Later kunnen conceptueel toegestaan zijn:

- event id
- event type
- timestamp
- tenant/customer/shop boundary
- actor type
- actor id/reference, geminimaliseerd
- source system/reference
- affected entity type/id
- lifecycle/status
- decision outcome
- reason summary
- correlation/run id

## Standaard niet opgeslagen

Standaard niet opgeslagen mogen worden:

- secrets
- API keys/tokens/certificates
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- execution/write payloads
- volledige klantdata
- persoonsgegevens zonder expliciet besluit
- ruwe debuglogs zonder governance

## Auditability-grens

Auditability betekent niet dat alles bewaard mag worden.

Audit events moeten metadata-first zijn.

Audit events moeten tenant/customer/shop/source boundaries respecteren.

Audit events moeten aansluiten op retention en data classification.

## Actor- en approval-grens

System- of service-actors mogen nooit menselijke approval vervangen.

Human approval en execution/write actions moeten apart auditbaar zijn.

## Logging- en execution-grens

Audit logging mag later niet gecombineerd worden met execution-implementatie.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- database
- Prisma
- logging-code
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Voorwaarden vóór latere implementatie

Vóór latere implementatie zijn minimaal nodig:

- audit event catalogus
- retention mapping
- data classification mapping
- access-control mapping
- tenant/customer/shop boundary
- actor identity boundary
- cleanup/deletion policy
- validation/reviewplan

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Advies voor de volgende fase

De logische volgende fase is een audit event catalogus en policy-vervolg als documentair traject, nog steeds zonder codebesluit.

## Bevestiging

Dit is alleen een audit logging policy decision. Geen code, logging, Prisma of database is geraakt. Auditability betekent niet dat ruwe payloads of secrets worden opgeslagen en persistence/integraties/execution zijn nog niet toegestaan.

# SAM Health Checker Review / Approval Policy Decision

## Waarom review/approval policy verplicht is

Review- en approval-policy zijn verplicht vóór write of execution, zodat duidelijk blijft wanneer iets alleen beoordeeld is en wanneer een menselijke goedkeuring echt is gegeven.

## Mogelijke review/approval states

Later kunnen conceptueel bestaan:

- review_required
- in_review
- changes_requested
- approved
- rejected
- blocked
- execution_not_allowed
- execution_allowed, alleen conceptueel en nog niet actief
- executed, alleen conceptueel en nog niet actief
- execution_failed, alleen conceptueel en nog niet actief

## Scheiding van stappen

Review, approval en execution zijn verschillende stappen.

Review betekent niet automatisch approval.

Approval betekent niet automatisch execution.

## Execution/write-grens

Execution en write actions blijven voorlopig disabled of blocked.

Human approval blijft verplicht voor elke toekomstige write of execution.

## Actor-grens

System- en service-actors mogen nooit zelfstandig approval geven.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit zonder human review tot approval leiden.

## WooCommerce-grens

WooCommerce-write of execution mag later alleen na expliciete approval en een aparte execution policy.

## Review/approval-audit

Iedere review- of approvalbeslissing heeft later actor identity, timestamp, tenant/customer/shop boundary en een audit event nodig.

Approval decisions mogen geen raw payloads, secrets of execution payloads opslaan.

Rejection- en blocked-states moeten auditbaar zijn zonder gevoelige of raw data te bewaren.

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

- permission matrix
- actor identity policy
- audit event mapping
- lifecycle/state contract
- execution policy decision
- rollback/undo policy
- customer/shop boundary rules
- UI/operator cockpit decision

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Advies voor de volgende fase

De logische volgende fase is een review-/approval-state model vervolg als documentair traject, nog steeds zonder codebesluit.

## Bevestiging

Dit is alleen een review/approval policy decision. Geen code, auth, Prisma of database is geraakt. Review, approval en execution blijven gescheiden en execution/write actions zijn nog niet toegestaan.

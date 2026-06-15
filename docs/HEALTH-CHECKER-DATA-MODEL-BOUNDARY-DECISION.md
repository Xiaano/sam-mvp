# SAM Health Checker Data Model Boundary Decision

## Mogelijk later persistent

De volgende entiteiten mogen later conceptueel persistent worden, maar nog niet nu:

- scan run
- issue
- proposal
- operator review decision
- audit event
- execution attempt/status, alleen conceptueel en nog niet actief
- source/input reference, alleen geminimaliseerd

## Voorlopig niet persistent

Voorlopig mogen deze gegevens niet persistent worden:

- mock data als waarheid
- secrets
- API keys
- ruwe WooCommerce responses
- ruwe AI/OpenAI prompts/responses
- onnodige klantdata
- execution/write payloads
- tijdelijke debugdata
- persoonsgegevens zonder dataminimalisatie- en retentionbesluit

## Boundaryregels

De boundaryregels zijn:

- mock data blijft testdata
- persistence mag alleen echte, gevalideerde input opslaan
- elke entiteit moet eerst een tenant/customer/shop-boundary krijgen vóór echte implementatie
- audit events mogen niet hetzelfde zijn als logs zonder governance
- proposals en review decisions moeten herleidbaar zijn zonder onnodige ruwe data op te slaan
- execution blijft blocked/disabled totdat apart besloten

## Voorwaarden vóór Prisma/schemawijziging

Vóór Prisma- of schemawijziging zijn minimaal nodig:

- expliciet datamodelbesluit
- veldniveau-besluit
- retention
- dataminimalisatie
- tenant/customer/shop boundary
- access-control uitgangspunten
- migration/rollback strategie
- seed/testdata strategie
- diagnose/debug logging grens

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor nieuwe queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Niet toegestaan in deze stap

Deze stap geeft geen toestemming voor implementatie.

## Risico's bij te vroege persistence

Te vroege persistence kan leiden tot:

- datavervuiling
- verwarring tussen mock en echt
- onbedoelde writes
- audit- en retention-drift
- boundary leakage tussen contract, mock en persistence

## Advies voor de volgende fase

De meest logische volgende fase is een persistence-/data-model readiness vervolg, nog steeds documentair en zonder codebesluit.

## Bevestiging

Dit is alleen een data model boundary decision. Geen code, Prisma of database is geraakt, en persistence-implementatie blijft niet toegestaan. Mock data mag niet als persistence-bron gelden.

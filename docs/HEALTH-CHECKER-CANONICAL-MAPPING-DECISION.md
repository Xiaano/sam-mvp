# SAM Health Checker Canonical Mapping Decision

## Waarom canonical mapping nodig is

Canonical mapping is nodig vóór echte integraties of persistence, zodat externe brondata eerst wordt vertaald naar een interne, minimale en gecontroleerde vorm in plaats van rechtstreeks als waarheid te worden opgeslagen.

## Nooit direct als interne waarheid

Externe brondata mag nooit rechtstreeks als interne waarheid worden opgeslagen.

Elke externe bron moet eerst naar een interne canonical vorm worden vertaald.

## Bronsoorten die mapping nodig kunnen hebben

Conceptueel kunnen later mapping nodig hebben:

- WooCommerce product/shop data
- scan engine output
- manual/operator input
- AI/OpenAI generated suggestions
- audit/review events
- mock/demo data, alleen als testdata en nooit als waarheid

## Mappinglagen

Mapping moet expliciet onderscheid maken tussen:

- raw source payload
- normalized source record
- canonical internal record
- proposal
- operator decision
- audit event

## Raw payloads

Raw payloads mogen standaard niet persistent worden zonder apart besluit.

## Canonical records

Canonical records mogen alleen geminimaliseerde, gevalideerde en geclassificeerde data bevatten.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit zonder human review als canonical truth gelden.

## WooCommerce-grens

WooCommerce-data mag later alleen via expliciete adapter plus mapping policy worden verwerkt.

## Mock/demo/testdata

Mock-, demo- en testdata mogen nooit canonical production records worden.

## Boundaryregels

Tenant-, customer-, shop-, source- en environment-boundaries blijven verplicht.

## Voorwaarden vóór latere implementatie

Vóór implementatie zijn minimaal nodig:

- source taxonomy
- field-level mapping
- validation rules
- trust-level policy
- data classification
- retention/data-minimization alignment
- tenant/customer/shop boundary alignment
- rollback/cleanupstrategie

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- database
- Prisma
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Advies voor de volgende fase

De logische volgende fase is een canonical-mapping readiness vervolg als documentair traject, nog steeds zonder codebesluit.

## Bevestiging

Dit is alleen een canonical mapping decision. Geen code, Prisma of database is geraakt. Raw source data wordt niet automatisch canonical truth en persistence/integraties zijn nog niet toegestaan.

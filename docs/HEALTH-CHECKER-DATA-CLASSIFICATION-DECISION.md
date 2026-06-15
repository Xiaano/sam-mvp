# SAM Health Checker Data Classification Decision

## Waarom dataclassificatie verplicht is

Dataclassificatie is verplicht vóór persistence, adapters of AI-context, zodat elk veld eerst kan worden beoordeeld op gevoeligheid, gebruik en bewaarplicht.

## Mogelijke dataklassen

Later kunnen conceptueel nodig zijn:

- mock_test_data
- operational_metadata
- customer_metadata
- shop_metadata
- source_reference
- issue_metadata
- proposal_metadata
- operator_decision_metadata
- audit_metadata
- technical_debug_data
- external_raw_payload
- ai_generated_content
- personal_data
- sensitive_data
- secret_forbidden
- execution_payload_forbidden

## Standaard niet persistent

Standaard niet persistent mogen worden:

- secret_forbidden
- API keys/tokens/certificates
- raw secrets
- execution_payload_forbidden
- raw AI/OpenAI prompts/responses zonder apart besluit
- raw WooCommerce responses zonder apart besluit
- mock/test/demo data als production truth

## Alleen onder strikte voorwaarden

Later mogen alleen onder strikte voorwaarden worden bewaard:

- personal data
- sensitive data
- external raw payloads
- AI-generated content
- technical debug data

## Geschikt voor beperkte canonical opslag

Geschikt voor beperkte canonical opslag kunnen zijn:

- operational metadata
- issue metadata
- proposal metadata
- operator decision metadata
- audit metadata
- source references
- tenant/customer/shop boundary metadata

## Veldverplichting

Iedere toekomstige persistent field moet vóór implementatie een data classification hebben.

## Classificatie moet aansluiten op

Classificatie moet aansluiten op:

- retention
- data minimization
- tenant/customer/shop boundary
- source system boundary
- canonical mapping
- access control
- auditability
- cleanup/deletion

## Auditability-grens

Auditability betekent niet dat alle ruwe data bewaard mag worden.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit zonder human review en AI-data-boundary als klantwaarheid gelden.

## WooCommerce-grens

WooCommerce-data moet later eerst via source boundary, canonical mapping en classificatie lopen.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- database
- Prisma
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Voorwaarden vóór latere implementatie

Vóór latere implementatie zijn minimaal nodig:

- dataclassificatiecatalogus
- veldniveau-mapping
- retention mapping
- access-control uitgangspunten
- privacy-impact beoordeling
- validation rules
- cleanup/verwijderstrategie

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Advies voor de volgende fase

De logische volgende fase is een data-classificatie- en veldcatalogusvervolg als documentair traject, nog steeds zonder codebesluit.

## Bevestiging

Dit is alleen een data classification decision. Geen code, Prisma of database is geraakt. Secrets en execution payloads blijven forbidden en persistence/integraties zijn nog niet toegestaan.

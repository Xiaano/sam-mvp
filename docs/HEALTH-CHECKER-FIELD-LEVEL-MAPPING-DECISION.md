# SAM Health Checker Field-Level Mapping Decision

## Waarom field-level mapping nodig is

Field-level mapping is nodig vóór echte persistence of integraties, zodat alleen expliciet gekozen, minimale en gevalideerde velden in canonical records terechtkomen.

## Mogelijk later toegestane veldcategorieën

Later kunnen conceptueel toegelaten zijn:

- stable identifiers
- tenant/customer/shop boundary fields
- source reference fields
- classification fields
- issue/proposal/review/audit metadata
- timestamps
- status/lifecycle fields
- confidence/reasoning summary fields, alleen geminimaliseerd
- operator decision metadata

## Standaard niet toegestane veldcategorieën

Standaard niet toegestaan zijn:

- secrets
- API keys
- raw WooCommerce payloads
- raw AI/OpenAI prompts/responses
- volledige klantdata zonder noodzaak
- persoonsgegevens zonder expliciet besluit
- execution/write payloads
- tijdelijke debugdata
- ruwe logs zonder governance
- mock/demo/testdata als production truth
- onnodige browser/session/user-agent data

## Beoordelingscriteria per veld

Elk toekomstig veld moet minimaal worden beoordeeld op:

- doel
- bron
- trust level
- tenant/shop boundary
- data classification
- retention category
- privacy impact
- auditwaarde
- cleanup/verwijderbaarheid
- noodzaak voor klantwaarde of troubleshooting

## Voorkeuren

Metadata heeft de voorkeur boven raw payloads.

Verwijzingen hebben de voorkeur boven kopieën.

Samenvattingen hebben de voorkeur boven volledige inhoud.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit zonder human review als canonical field gelden.

## WooCommerce-grens

WooCommerce-data mag later alleen veld-voor-veld via mapping policy worden overgenomen.

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

- veldcatalogus
- dataclassificatie
- retention mapping
- validation rules
- migration/rollback strategie
- cleanupstrategie
- access-control uitgangspunten

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Advies voor de volgende fase

De logische volgende fase is een veldcatalogus- en mappingvervolg als documentair traject, nog steeds zonder codebesluit.

## Bevestiging

Dit is alleen een field-level mapping decision. Geen code, Prisma of database is geraakt. Raw payloads en secrets blijven standaard buiten canonical fields en persistence/integraties zijn nog niet toegestaan.

# SAM Health Checker Retention & Data Minimization Decision

## Waarom eerst retention en dataminimalisatie

Retention en dataminimalisatie moeten vóór persistence worden vastgelegd, zodat later duidelijk is welke data überhaupt bewaard mag worden en hoe lang. Zonder deze grenzen wordt persistence te vroeg te breed en te onveilig.

## Mogelijk later beperkt bewaarbaar

Later kunnen conceptueel beperkt bewaarbaar zijn:

- scan run metadata
- issue metadata
- proposal metadata
- operator review decision
- audit event metadata
- execution attempt/status, alleen conceptueel en nog disabled
- source/input reference, alleen geminimaliseerd

## Standaard niet bewaren

Standaard niet bewaren:

- mock data als waarheid
- secrets
- API keys
- ruwe WooCommerce responses
- ruwe AI/OpenAI prompts/responses
- volledige klantdata zonder noodzaak
- persoonsgegevens zonder expliciet besluit
- execution/write payloads
- tijdelijke debugdata
- ruwe logs zonder governance
- onnodige browser/session/user-agent data

## Dataminimalisatieprincipes

De volgende principes gelden:

- alleen bewaren wat nodig is voor review, auditability, troubleshooting of klantwaarde
- metadata boven ruwe payloads
- verwijzingen boven kopieën
- samenvatting boven volledige inhoud
- tenant/customer/shop-boundary verplicht vóór opslag
- geen sensitive/secrets in logs of audit events
- geen AI-context opslaan zonder apart AI-data besluit

## Retentiecategorieën die later apart moeten worden uitgewerkt

Later moeten apart worden uitgewerkt:

- korte technische debugretentie
- operationele scan/auditretentie
- klantzichtbare rapportretentie
- security/auditretentie
- verwijder-/cleanupbeleid
- export-/inzagerecht ondersteuning

## Auditability-grens

Auditability betekent niet dat alles onbeperkt bewaard mag worden. Auditbaarheid moet binnen een expliciete retentie- en minimalisatiegrens blijven.

## Nog niet geïmplementeerd

Retention wordt nog niet geïmplementeerd.

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie of bestaande modellen geven geen toestemming voor opslag, queries, migraties, generate, seed of databaseconnecties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Toekomstige persistence

Echte persistence mag pas na een apart besluitdocument en een micro-scope worden toegevoegd.

## Advies voor de volgende fase

De logische volgende fase is een persistence-readiness vervolg waarin data-model, retentie en minimalisatie samen worden bevestigd voordat implementatie ooit wordt overwogen.

## Bevestiging

Dit is alleen een retention/data-minimization decision. Geen code, Prisma of database is geraakt. Persistence-implementatie blijft nog niet toegestaan. Mock data, secrets en ruwe externe payloads mogen niet als opslagbron gelden.

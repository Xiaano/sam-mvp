# SAM Health Checker Persistence Readiness Review

## Waarom persistence pas later

Persistence en databasegebruik mogen pas na een aparte readiness-review worden overwogen, omdat de huidige Health Checker fundering nog bewust read-only/mock en contractueel gescheiden is.

## Mogelijk later persistente data

Later kunnen conceptueel onder meer deze gegevens persistent worden:

- scan result
- issue
- proposal
- operator review decision
- audit event
- execution attempt/status

## Wat voorlopig niet persistent mag worden

Voorlopig mag niet persistent worden:

- mock data als waarheid
- secrets
- ruwe klantdata zonder dataminimalisatiebesluit
- AI/OpenAI context
- WooCommerce responses
- execution/write payloads

## Voorwaarden vóór database/Prisma

Vóór database- of Prisma-implementatie zijn minimaal nodig:

- datamodelbesluit
- retention-besluit
- data-minimalisatie
- auditability
- tenant/customer boundary
- access-control uitgangspunten
- migration strategy
- rollback/cleanup strategy

## Prisma/schema-documentatie

Bestaande Prisma/schema-documentatie geeft geen automatische toestemming voor nieuwe queries of migraties.

## Diagnostics-grens

`/diagnostics` moet voorlopig `database=not_checked` en `prisma=not_checked` blijven tonen.

## Niet doen in deze stap

Geen Prisma-query, databaseconnectie, migratie, seed of generate mag worden uitgevoerd in deze stap.

## Te vroeg aansluiten

Als persistence te vroeg wordt aangesloten, ontstaan risico's op:

- datavervuiling
- verwarring tussen mock en echt
- onbedoelde writes
- audit- of retention-drift
- boundary leak tussen contract, mock en persistence

## Advies voor de volgende fase

De logische volgende fase is een persistence readiness review als documentair vervolg. Pas daarna kan een micro-scope voor echte persistence worden overwogen.

## Bevestiging

Dit is alleen persistence-readiness documentatie. Geen code, testcode, runtime of secrets zijn geraakt. Geen database of Prisma is gebruikt en persistence-implementatie is hiermee nog niet toegestaan.

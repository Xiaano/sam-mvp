# SAM Health Checker Source System Boundary Decision

## Waarom source system boundaries verplicht zijn

Source system boundaries zijn verplicht vóór echte integraties, zodat toekomstige data niet vermengd raakt tussen mock runtime, operator input, scan engines, WooCommerce, AI/OpenAI, audit/review en execution/write flows.

## Mogelijke bronsoorten

De volgende bronsoorten kunnen later conceptueel bestaan:

- mock runtime
- manual/operator input
- scan engine
- WooCommerce
- internal canonical records
- AI/OpenAI generated proposal/support text
- audit/review events
- execution/write service, alleen conceptueel en disabled

## Verplichte source-identificatie

Elke toekomstige dataregel heeft vóór opslag of verwerking minimaal een duidelijke source-identificatie nodig:

- source system
- source type
- source environment
- source trust level
- source timestamp
- source reference/id waar veilig
- mock/real/demo marker

## Ruwe externe responses

Ruwe externe responses zijn niet automatisch interne waarheid.

## WooCommerce-grens

WooCommerce-data mag later alleen via een expliciete adapter en canonical mapping worden verwerkt.

## AI/OpenAI-grens

AI/OpenAI-output mag nooit zonder review en labeling als waarheid of klantdata worden opgeslagen.

## Mock runtime-grens

Mock runtime data mag nooit een echte source of production truth worden.

## Manual/operator input

Manual/operator input moet herkenbaar blijven als menselijke input.

## Audit/review-grens

Audit- en reviewevents mogen niet vermengd worden met ruwe logs of externe payloads.

## Execution/write-grens

Execution/write service blijft voorlopig disabled en blocked.

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

- source taxonomy
- canonical mapping decision
- field-level mapping
- trust-level policy
- validation rules
- retention/data-minimization alignment
- tenant/customer/shop boundary alignment

## Advies voor de volgende fase

De logische volgende fase is een bron-taxonomie en canonical-mapping vervolg, nog steeds documentair en zonder codebesluit.

## Bevestiging

Dit is alleen een source system boundary decision. Geen code, Prisma of database is geraakt. Source-vervuiling wordt expliciet voorkomen en persistence/integraties zijn nog niet toegestaan.

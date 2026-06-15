# SAM Health Checker Tenant / Customer / Shop Boundary Decision

## Waarom deze boundary verplicht is

Tenant-, customer- en shop-boundaries zijn verplicht vóór echte persistence of integraties, zodat data niet opnieuw door elkaar gaat lopen zoals in oude SAM-praktijken.

## Expliciet te voorkomen datavervuiling

De boundary moet expliciet voorkomen dat:

- testdata door live data gaat
- mock data door real data gaat
- demo-producten door echte shopproducten gaan
- scanresultaten van klant A bij klant B terechtkomen
- shop A door shop B wordt overschreven
- staging en productie impliciet dezelfde dataruimte delen
- tijdelijke debugdata auditdata vervuilt
- AI-context klantdata vervuilt
- WooCommerce responses als interne canonical records worden gebruikt

## Nodige boundary-identifiers

Vóór opslag of integratie zijn conceptueel minimaal deze identifiers nodig:

- environment
- tenant/customer id
- shop id
- source system
- source type
- run id
- scan id
- data classification
- mock/real marker
- retention class

## Boundaryregels

Geen enkele toekomstige persistent record mag zonder duidelijke boundary-identificatie worden opgeslagen.

Mock-, test- en demodata moeten altijd expliciet herkenbaar blijven.

Staging en productie mogen nooit impliciet dezelfde dataruimte delen.

WooCommerce-data mag later alleen via een expliciete shop/source boundary worden verwerkt.

AI/OpenAI-context mag later nooit zonder aparte AI-data-boundary aan tenant- of shopdata worden gekoppeld.

Audit events moeten herleidbaar zijn zonder ruwe externe payloads te kopiëren.

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

- veldniveau-besluit
- datamodelbesluit
- access-control uitgangspunten
- retention
- cleanupstrategie
- migration/rollbackstrategie
- testdata-/stagingdata-strategie

## Advies voor de volgende fase

De logische volgende fase is een boundary- en readiness-vervolg per integratie, nog steeds documentair en zonder codebesluit.

## Bevestiging

Dit is alleen een tenant/customer/shop boundary decision. Geen code, Prisma of database is geraakt. Test-, mock-, demo- en live-data vervuiling wordt expliciet voorkomen en persistence/integraties zijn nog niet toegestaan.

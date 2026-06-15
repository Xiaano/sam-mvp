# SAM Health Checker Adapter Boundary Design Review

## Waarom een adapter boundary nodig is

Een adapter boundary is nodig voordat echte integraties worden gebouwd, zodat mock/runtime, contractroutes, persistence, WooCommerce, AI/OpenAI en execution/write flows niet door elkaar gaan lopen.

## Strikte scheiding van lagen

De volgende lagen moeten strikt gescheiden blijven:

- mock runtime
- contractroutes
- toekomstige real scan service
- toekomstige persistence/database
- toekomstige WooCommerce adapter
- toekomstige AI/OpenAI service
- toekomstige execution/write service

## Mock data-grens

Mock data mag nooit rechtstreeks doorstromen naar echte adapters, persistence, AI-context, WooCommerce of execution.

## Contractroutes

Contractroutes mogen geen runtime- of adapterlagen aanroepen. Ze blijven statisch en beschrijven alleen vorm, afspraken en grenzen.

## Toekomstige adapteraansluitingen

Toekomstige real adapters mogen alleen via expliciete servicegrenzen worden aangesloten. Elke adapter heeft later een apart besluit, eigen scope, eigen validatie en eigen review nodig.

## Nog apart te beoordelen

Voor implementatie moet later apart worden beoordeeld of er readiness is voor:

- database/Prisma
- WooCommerce
- AI/OpenAI
- execution/write actions

## Execution/write actions

Execution en write actions blijven voorlopig volledig geblokkeerd.

## Minimale voorwaarden voor echte adapters

Vóór echte adapterimplementatie overwogen mag worden, zijn minimaal nodig:

- een apart besluitdocument voor de betreffende adapter
- expliciete servicegrens en scope
- validatie zonder mock/contractvermenging
- aparte review van persistence- of integration-readiness
- bevestiging dat write/execution nog niet geactiveerd wordt

## Advies voor de volgende fase

De logische volgende fase is een adapter boundary design als documentair vervolg, zonder codebesluit. Daarna kunnen readiness-onderwerpen per integratie apart worden beoordeeld.

## Bevestiging

Dit is alleen adapter boundary documentatie. Geen code, testcode, runtime of secrets zijn geraakt. Echte adapterimplementatie is hiermee nog niet toegestaan en database, Prisma, WooCommerce, AI/OpenAI en write/execution blijven buiten scope.

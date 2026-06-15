# SAM Health Checker Mock Runtime Service Post-Adoption Readability Review

## Status

- `apps/api/src/services/healthChecker/mockRuntimeService.ts` bevat momenteel 5 service-exports:
  - `createMockScanToReviewFlow()`
  - `createMockOperatorOverview()`
  - `createMockProposalPreview()`
  - `createMockOperatorReviewPreview()`
  - `createMockAuditLogPreview()`
- De volgende routes zijn daarvan afhankelijk:
  - `GET /api/health-checker/mock-scan-to-review-flow`
  - `GET /api/health-checker/operator-overview-mock`
  - `GET /api/health-checker/mock-proposal-preview`
  - `GET /api/health-checker/operator-review-preview`
  - `GET /api/health-checker/audit-log-preview`

## Leesbaarheid en onderhoudbaarheid

- De service is nog voldoende leesbaar en onderhoudbaar voor de huidige schaal.
- De mock data is wel duidelijk gegroeid en bevat meerdere gerelateerde objectgroepen.
- Er is nog geen acute noodzaak voor een refactor.

## Duplicatie en drift-risico

- Er is zichtbaar herhaling in:
  - `safety`
  - approval/write-action flags
  - route-/previewmetadata
  - audit- en reviewachtige payloadvormen
- Het drift-risico blijft daardoor aanwezig als er nog meerdere service-driven mock responses bijkomen.
- Dit is op dit moment een signaal voor later, geen reden voor directe wijziging.

## Shared helper / centralisatie

- Een shared helper of brede centralisatie is nu niet nodig.
- Kleine centralisatie kan later nuttig worden als dezelfde safety- en metadata-patronen verder blijven groeien.
- Eerst nog een apart refactorbesluit voorbereiden is verstandiger dan nu al abstraheren.

## Advies

- Doorgaan zonder refactor is nu nog verdedigbaar.
- Als de mock/service-familie verder groeit, is een apart refactorbesluit voor gedeelde safety-/response-structuren logisch.

## Volgende kandidaat als observatie

- Als observatie is `GET /api/health-checker/approval-flow-contract` technisch het dichtstbij, maar deze route is een contractroute en hoort voorlopig statisch te blijven.
- Er is daarom geen duidelijke volgende service-adoptiekandidaat die nu al echt aanbevolen is.

## Bevestiging

Dit document is alleen een documentatie- en leesbaarheidsreview.
Het geeft geen toestemming voor codewijziging en raakt geen runtime, code of secrets.


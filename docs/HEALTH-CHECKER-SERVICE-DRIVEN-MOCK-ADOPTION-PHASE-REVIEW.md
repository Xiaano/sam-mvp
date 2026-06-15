# SAM Health Checker Service-Driven Mock Adoption Phase Review

## Status

- De volgende Health Checker mock routes zijn service-driven via `apps/api/src/services/healthChecker/mockRuntimeService.ts`:
  - `GET /api/health-checker/mock-scan`
  - `GET /api/health-checker/mock-proposal-preview`
  - `GET /api/health-checker/operator-review-preview`
  - `GET /api/health-checker/mock-scan-to-review-flow`
  - `GET /api/health-checker/operator-overview-mock`
  - `GET /api/health-checker/audit-log-preview`
- De bijbehorende service-exports zijn:
  - `createMockScan()`
  - `createMockProposalPreview()`
  - `createMockOperatorReviewPreview()`
  - `createMockScanToReviewFlow()`
  - `createMockOperatorOverview()`
  - `createMockAuditLogPreview()`

## Statische contractroutes

De volgende routes blijven bewust statisch:

- `GET /api/health-checker/proposal-contract`
- `GET /api/health-checker/operator-review-contract`
- `GET /api/health-checker/approval-flow-contract`
- `GET /api/health-checker/audit-log-contract`

## Mock-data-boundary

- Mock data blijft quarantaine/testdata.
- Mock data mag niet doorstromen naar database, Prisma, WooCommerce, AI/OpenAI, write flows, execution of klantdata.
- Mock responses blijven herkenbaar via metadata zoals `source`, `mode` en `status`.
- `/diagnostics` moet `database=not_checked` en `prisma=not_checked` blijven tonen.

## Refactor- en besluitgrens

- Er is nu geen refactor nodig.
- Verdere service-adoptie mag alleen na een nieuw besluitdocument.
- De volgende fase is niet automatisch nóg een route-adoptie.

## Observatie van volgende fase-opties

- contractlaag functioneel compleet beoordelen;
- lifecycle/state-validatie aanscherpen;
- teststrategie voor mock endpoints vastleggen;
- voorbereiding op echte adapter/servicegrens zonder implementatie;
- operator-flow readiness review.

## Advies

- De meest logische volgende fase is een readiness/review op de contract- en operator-flow samenhang, niet direct nog een nieuwe service-adoptie.

## Bevestiging

- Dit document is alleen documentatie en review.
- Geen code, runtime of secrets zijn geraakt.
- Contractroutes blijven statisch.


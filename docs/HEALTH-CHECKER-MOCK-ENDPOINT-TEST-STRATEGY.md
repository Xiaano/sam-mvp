# SAM Health Checker Mock Endpoint Test Strategy

## Doel

Deze strategie beschrijft alleen wat toekomstige tests minimaal moeten bewaken voor de huidige mock/read-only Health Checker endpoints. Er wordt geen testcode toegevoegd.

## Minimale eerste testset

De eerste testset hoort minimaal deze endpoints te controleren:

- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`
- `GET /diagnostics`

## Te bewaken responsevelden

Per mock endpoint moeten tests minimaal letten op herkenbare metadata en relevante aantallen:

- `source`
- `mode`
- `status`
- `issues_found`, `proposals_previewed`, `review_items`, `audit_events_previewed` alleen waar die per endpoint relevant of aanwezig zijn
- andere aantallen die per route logisch aanwezig zijn

## Contract- en boundarybewaking

Tests moeten bewaken dat:

- mock endpoints read-only blijven;
- er geen POST/write/execution-gedrag ontstaat;
- contractroutes niet per ongeluk runtime/mock-data gaan gebruiken;
- mock data niet richting database, Prisma, WooCommerce, AI/OpenAI of klantdata beweegt;
- `/diagnostics` altijd `database=not_checked` en `prisma=not_checked` bevestigt.

## Testfocus

- Eerste tests mogen primair op contract, shape en metadata focussen.
- Volledige businesslogica hoeft in deze fase nog niet getest te worden.

## Latere tests

Later pas kunnen aanvullende checks volgen voor:

- echte adapter/servicegrens;
- database/persistence;
- WooCommerce;
- echte runtime-integratie.

Deze checks mogen alleen later worden overwogen na een apart besluitdocument en buiten de huidige mock/read-only fase.

## Besluitgrens

- Deze strategie staat geen testimplementatie toe.
- Echte testcode mag pas na een apart besluitdocument worden toegevoegd.

## Bevestiging

- Dit document is alleen een teststrategie en documentatie.
- Geen code, runtime of secrets zijn geraakt.
- Mock-data-boundary en contractroutegrenzen blijven bewaakt.

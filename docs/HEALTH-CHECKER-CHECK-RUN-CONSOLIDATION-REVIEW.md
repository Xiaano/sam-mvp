# SAM Health Checker Check Run Consolidation Review

## Bestaande checksets

Er bestaan twee minimale checksets:

- mock endpoint checks in `apps/api/src/checks/healthCheckerMockEndpointChecks.ts`
- contract-shape checks in `apps/api/src/checks/healthCheckerContractShapeChecks.ts`

## Wat elke checkset controleert

### Mock endpoint checks

De mock endpoint checks controleren:

- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`
- `GET /diagnostics`

### Contract-shape checks

De contract-shape checks controleren:

- `GET /api/health-checker/proposal-contract`
- `GET /api/health-checker/operator-review-contract`
- `GET /api/health-checker/approval-flow-contract`
- `GET /api/health-checker/audit-log-contract`
- `GET /api/health-checker/issue-proposal-mapping`
- `GET /api/health-checker/issue-classification`

## Scheiding van de checksets

Beide checksets blijven gescheiden:

- mock/runtime checks blijven mock/runtime checks;
- contract-shape checks blijven contract-shape checks.

Beide zijn read-only.

Contractroutes blijven statisch.

Mock/runtime en contractlagen blijven gescheiden.

## Betrouwbare runmethode

De huidige betrouwbare runmethode zijn de directe tsx-entrypoints:

```powershell
node node_modules/tsx/dist/cli.mjs apps/api/src/checks/healthCheckerMockEndpointChecks.ts
node node_modules/tsx/dist/cli.mjs apps/api/src/checks/healthCheckerContractShapeChecks.ts
```

## npm workspace scripts

De workspace npm-scripts mogen voorlopig niet als geslaagd worden geclaimd zolang de bekende EPERM/npm-context fout optreedt:

- `EPERM: operation not permitted, lstat 'C:\Users\Admin'`

## Dekking en grenzen

Deze checks claimen geen volledige testdekking. Ze bieden alleen minimale bewaking op shape, metadata en read-only gedrag.

Verdere testuitbreiding mag alleen na een apart besluit.

Geen database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution of secrets mogen worden geraakt.

## Advies

Deze checkbasis is voldoende voor de huidige mock/read-only fase, zolang het doel beperkt blijft tot minimale bewaking van mock/runtime- en contractgrenzen.

## Bevestiging

Dit document is alleen documentatie/review. Geen code, runtime of secrets zijn geraakt.

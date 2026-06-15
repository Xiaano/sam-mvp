# SAM Health Checker Mock Endpoint Check Runbook

## Doel

Dit runbook beschrijft alleen hoe de minimale Health Checker mock endpoint checks worden uitgevoerd. Het voegt geen nieuwe testscope toe.

## Wat de checks bewaken

De checks verifiëren alleen read-only/mock gedrag, met focus op:

- `statusCode=200`
- herkenbare metadata zoals `source`, `mode` en `status`
- endpoint-relevante aantallen waar aanwezig
- `/diagnostics` met `database=not_checked` en `prisma=not_checked`

## Gecontroleerde endpoints

De minimale checkset omvat:

- `GET /api/health-checker/mock-scan`
- `GET /api/health-checker/mock-proposal-preview`
- `GET /api/health-checker/operator-review-preview`
- `GET /api/health-checker/mock-scan-to-review-flow`
- `GET /api/health-checker/operator-overview-mock`
- `GET /api/health-checker/audit-log-preview`
- `GET /diagnostics`

## Betrouwbare huidige run-methode

Gebruik momenteel deze directe tsx-runmethode:

```powershell
node node_modules/tsx/dist/cli.mjs apps/api/src/checks/healthCheckerMockEndpointChecks.ts
```

## npm workspace-script

Het workspace-script mag voorlopig niet als geslaagd worden geclaimd zolang de bekende EPERM/npm-workspace-context fout optreedt:

```powershell
npm run check:mock-endpoints -w @sam-mvp/api
```

Bekende foutcontext:

- `EPERM: operation not permitted, lstat 'C:\Users\Admin'`

## Grenzen

Deze checks zijn read-only/mock. Ze mogen geen database, Prisma, WooCommerce, AI/OpenAI, POST/write/execution of secrets raken.

Dit runbook voegt geen nieuwe testscope toe en geeft geen toestemming voor:

- nieuwe dependencies
- routewijzigingen
- refactor
- adapter/servicegrensvoorbereiding

## Bevestiging

Dit is alleen een runbook/documentatiestap. Geen code, testcode of runtime scope is geraakt.

# SAM Health Checker Next Audit Log Preview Service Adoption Decision

## Besluit

- `GET /api/health-checker/audit-log-preview` is de volgende kandidaat voor service-adoptie.
- Dit is een preview/mock-route en past daarom beter bij `mockRuntimeService` dan contractroutes.
- Een latere codewijziging zal waarschijnlijk een gerichte export toevoegen, bijvoorbeeld `createMockAuditLogPreview()`.
- Het bestaande endpoint path moet ongewijzigd blijven.

## Waarom deze route

- Audit-log preview ondersteunt traceability en de auditlijn zonder echte persistence.
- De route volgt logisch op operator review en approval-flow semantiek.
- Service-adoptie kan hiermee preview/mock/runtime-achtige routes versterken zonder contractroutes aan te raken.

## Strikte scope voor latere code-stap

- Alleen de bestaande `audit-log-preview` route aansluiten.
- Eventueel `mockRuntimeService.ts` uitbreiden met een gerichte export als dat nodig is.
- Geen endpoint path wijzigen.
- Geen serverregistratie wijzigen.
- Geen andere routes aanpassen.
- Geen shared helper bouwen.
- Geen brede refactor.

## Veiligheidsgrenzen

- Geen database.
- Geen Prisma.
- Geen WooCommerce.
- Geen AI/OpenAI.
- Geen POST endpoints.
- Geen write actions.
- Geen execution.
- Geen secrets.
- Human review en human approval blijven verplicht.
- `auto_execute` blijft disabled.
- `/diagnostics` moet `database=not_checked` en `prisma=not_checked` blijven tonen.

## Contractroutes blijven statisch

De volgende contractroutes blijven voorlopig statisch:

- `GET /api/health-checker/proposal-contract`
- `GET /api/health-checker/operator-review-contract`
- `GET /api/health-checker/approval-flow-contract`
- `GET /api/health-checker/audit-log-contract`

## Acceptatiecriteria

- Response blijft read-only/mock.
- Bestaande responsevorm blijft functioneel compatibel.
- Safety blijft expliciet.
- Geen valse claim dat echte audit logging, database writes of runtime execution bestaan.
- Geen toestemming voor database, Prisma, WooCommerce, AI/OpenAI, POST endpoints, write actions, execution of secrets.

## Geen bredere scope

- Geen shared helper.
- Geen grote centralisatie.
- Geen codewijziging in andere mock routes.


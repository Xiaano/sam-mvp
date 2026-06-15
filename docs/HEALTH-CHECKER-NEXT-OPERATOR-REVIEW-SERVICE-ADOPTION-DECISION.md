# SAM Health Checker Next Operator Review Service Adoption Decision

## Besluit

- Geen brede refactor.
- Geen shared helper nu.
- De volgende veilige code-stap mag zijn: `GET /api/health-checker/operator-review-preview` aansluiten op `mockRuntimeService`.

## Waarom deze route

- De review queue is al onderdeel van de service-driven scan-to-review flow.
- De operator overview gebruikt dezelfde logica conceptueel.
- Service-adoptie verlaagt drift zonder brede centralisatie.

## Strikte scope voor de latere code-stap

- Alleen `apps/api/src/routes/healthCheckerOperatorReviewPreview.ts` aanpassen.
- Eventueel `mockRuntimeService.ts` uitbreiden met een gerichte export als dat nodig is.
- Geen endpoint path wijzigen.
- Geen serverregistratie wijzigen.
- Geen andere routes aanpassen.
- Geen shared helper bouwen.

## Veiligheidsgrenzen

- Geen database.
- Geen Prisma.
- Geen WooCommerce.
- Geen AI/OpenAI.
- Geen frontend/cockpit.
- Geen POST endpoints.
- Geen write actions.
- Geen execution.
- Geen secrets.
- Human review en human approval blijven verplicht.
- `auto_execute` blijft disabled.

## Acceptatiecriteria

- Response blijft read-only/mock.
- Bestaande responsevorm blijft functioneel compatibel.
- Safety blijft expliciet.
- `/diagnostics` blijft `database: "not_checked"` en `prisma: "not_checked"` tonen.
- Geen valse claim dat echte operator review acties bestaan.


# SAM Health Checker Next Service-Driven Mock Response Decision

## Besluit

* geen brede refactor
* geen shared helper nu
* volgende veilige code-stap mag zijn: `GET /api/health-checker/mock-proposal-preview` aansluiten op `mockRuntimeService`

## Waarom deze route

* proposal previews zijn al onderdeel van de service-driven scan-to-review flow
* proposal previews komen terug in operator overview
* service-adoptie verlaagt drift zonder brede centralisatie

## Strikte scope voor latere code-stap

Een latere code-stap blijft strikt beperkt tot:

* alleen `apps/api/src/routes/healthCheckerMockProposalPreview.ts` aanpassen
* eventueel `mockRuntimeService.ts` uitbreiden met een gerichte export als dat nodig is
* geen endpoint path wijzigen
* geen serverregistratie wijzigen
* geen andere routes aanpassen
* geen shared helper bouwen

## Veiligheidsgrenzen

Deze volgende stap blijft strikt beperkt tot:

* geen database
* geen Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit
* geen POST-endpoints
* geen write actions
* geen execution
* geen secrets
* human review en human approval blijven verplicht
* `auto_execute` blijft disabled

## Acceptatiecriteria

Voor de latere code-stap gelden deze voorwaarden:

* response blijft read-only/mock
* bestaande responsevorm blijft functioneel compatibel
* safety blijft expliciet
* `/diagnostics` blijft `database` en `prisma` `not_checked` tonen
* geen valse claim dat echte proposal generation bestaat

## Geen implementatie in dit document

Dit document bevat alleen het besluit en geen implementatie.


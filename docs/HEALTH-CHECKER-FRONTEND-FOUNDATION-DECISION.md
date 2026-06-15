# Health Checker Frontend Foundation Decision

## Besluit
Een frontend foundation decision is nodig vóór cockpit-UI, omdat een read-only cockpit anders geen veilige of stabiele basis heeft om op te landen. Zonder foundationbesluit is de stap naar UI te groot en te onduidelijk.

## Huidige status van `apps/web`
`apps/web` bestaat al, maar is nog alleen een TypeScript-placeholder.

Er is nog geen:
- UI-app-shell
- dev-script
- build-script
- echte frameworkstructuur

## Minimale frontend foundation
Voor een latere cockpit is minimaal nodig:
- app-shell
- entrypoint
- dev script
- build/check script
- read-only data fetch laag
- eenvoudige routing of single-page layout
- error/loading/empty state basis
- styling/basislayout
- geen auth in de eerste fase

## Grens voor cockpit-implementatie
- De eerste frontend foundation moet read-only blijven.
- Geen nieuwe backendroutes mogen nodig zijn voor de eerste cockpit.
- Frontend mag geen secrets, raw payloads, execution payloads of onnodige klantdata tonen.
- Frontend mag geen approve/reject/execute/write-acties bevatten.

## Framework- en dependency-keuze
Een toekomstige framework- of dependency-keuze moet apart expliciet worden gemotiveerd vóór installatie.

In dit document worden geen dependencies toegevoegd.

## Implementatiegrens
Een toekomstige frontend foundation implementatie heeft een aparte micro-scope decision nodig.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, dependencies, backend-routes, auth, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een frontend foundation decision.
- Er zijn geen frontend-, code-, dependency-, runtime- of secretscope geraakt.
- `apps/web` is nu nog een placeholder.
- Cockpit-implementatie is nog niet gestart.
- `execution/write` is nog niet toegestaan.


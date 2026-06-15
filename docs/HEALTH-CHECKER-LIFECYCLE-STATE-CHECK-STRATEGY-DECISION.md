# Health Checker Lifecycle State Check Strategy Decision

## Besluit
Lifecycle/state checks zijn later zinvol omdat de huidige fundering al meerdere state- en safety-lagen heeft die niet ongemerkt door elkaar mogen gaan lopen. Een kleine, gerichte checklaag kan helpen om mock completion, approval en mogelijke future execution nog explicieter van elkaar te scheiden.

## Scope
Dit document bepaalt alleen de strategie voor toekomstige lifecycle/state checks. Er wordt nog geen testcode toegevoegd en er is geen toestemming voor code, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Minimale state-semantiek die later bewaakt moet worden
Toekomstige lifecycle/state checks moeten minimaal blijven bewaken dat:
- `completed` in mock/read-only context geen echte execution betekent
- `approved` niet automatisch `execution_allowed` betekent
- `execution_allowed`, `executed` en `execution_failed` conceptueel blijven en nog niet actief zijn
- `blocked` en `disabled` write/execution blijven tegenhouden
- `review_required` en `approval_required` gescheiden blijven

## Mogelijke basis voor latere checks
De volgende bestaande onderdelen kunnen later als basis dienen:
- mock endpoint checks
- contract-shape checks
- lifecycle/state contract document
- lifecycle/state transition review

## Toegestane checkvorm
Lifecycle/state checks mogen alleen shape-, metadata- en semantic-guard checks zijn. Ze mogen de volgende grenzen niet overschrijden:
- geen execution
- geen POST/write
- geen database
- geen Prisma
- geen WooCommerce
- geen AI/OpenAI

## Niet combineren met
Een toekomstige lifecycle/state checkimplementatie mag niet gecombineerd worden met:
- routewijzigingen
- refactor
- nieuwe state-implementatie
- service-adoptie
- persistence
- integraties

## Implementatiegrens
Een echte checkimplementatie mag pas na een apart besluitdocument worden toegevoegd. De huidige documentatiestap geeft daar nog geen vrijgave voor.

## Bevestigingen
- Dit is alleen lifecycle/state check strategy.
- Er is geen testcode toegevoegd.
- Er zijn geen code-, runtime- of secretscope geraakt.
- `completed`, `approved` en `executed` blijven gescheiden.
- `execution/write` is nog niet toegestaan.


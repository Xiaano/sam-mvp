# Health Checker Lifecycle State Check Implementation Decision

## Besluit
Minimale lifecycle/state semantic-guard checks zijn later verantwoord, maar alleen als read-only ondersteuning op de bestaande mock- en contractbasis. Deze beslissing voegt nog geen testcode toe.

## Scope
Deze stap bepaalt alleen de latere implementatiegrens voor checks. Er is nog geen vrijgave voor code, testcode, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Mogelijke basis voor latere checks
De volgende bestaande checksets kunnen eventueel worden uitgebreid of aangevuld:
- mock endpoint checks
- contract-shape checks
- eventueel een aparte lifecycle/state checkfile, maar alleen na een aparte implementatiestap

## Minimale semantic guards
Latere checks moeten minimaal bewaken dat:
- `completed` geen execution betekent
- `approved` geen execution betekent
- `execution_allowed` niet actief is
- `executed` niet toegestaan is
- `execution_failed` alleen conceptueel is
- `blocked` en `disabled` write/execution blokkeren
- `review_required` en `approval_required` gescheiden blijven

## Checkgrenzen
De checks mogen alleen read-only GET endpoints gebruiken en alleen metadata-, shape- en semantic-guard controles uitvoeren. Ze mogen geen POST/write/execution testen.

## Niet combineren met
Een latere checkimplementatie mag niet gecombineerd worden met:
- routewijzigingen
- refactor
- nieuwe states
- runtimegedrag
- service-adoptie
- persistence
- integraties

## Implementatiegrens
Een echte checkimplementatie mag pas in een aparte vervolgstap worden toegevoegd. Dit document geeft daarvoor nog geen toestemming.

## Bevestigingen
- Dit is alleen lifecycle/state check implementation decision.
- Er is geen testcode toegevoegd.
- Er zijn geen code-, runtime- of secretscope geraakt.
- `completed`, `approved` en `executed` blijven gescheiden.
- `execution/write` is nog niet toegestaan.


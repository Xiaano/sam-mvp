# Health Checker Lifecycle State Contract Decision

## Besluit
De Health Checker heeft een lifecycle/state contract nodig voordat persistence, cockpit, WooCommerce of execution ooit verantwoord kan worden aangesloten. Zonder expliciet state-contract blijven mock/runtime, contractlaag, review/approval en mogelijke execution-gating te makkelijk door elkaar lopen.

## Scope
Dit document legt alleen de state-taal en de grenzen daarvan vast. Het is geen implementatiebesluit en geeft geen toestemming voor code, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## State-categorieën
De volgende state-categorieën bestaan conceptueel:
- scan states
- issue states
- proposal states
- review states
- approval states
- audit states
- execution states, alleen conceptueel en disabled

## Minimale states
De volgende states zijn minimaal relevant voor de huidige Health Checker-fundering:
- `mock`
- `mock_preview`
- `completed`
- `review_required`
- `in_review`
- `changes_requested`
- `approval_required`
- `approved`
- `rejected`
- `blocked`
- `disabled`
- `execution_not_allowed`
- `execution_allowed`, alleen conceptueel en nog niet actief
- `executed`, alleen conceptueel en nog niet actief
- `execution_failed`, alleen conceptueel en nog niet actief

## Betekenisgrenzen
- `completed` in mock/read-only context betekent niet dat echte uitvoering heeft plaatsgevonden.
- `review_required` betekent niet `approved`.
- `approved` betekent niet automatisch `execution_allowed`.
- `execution_allowed` is conceptueel en nog niet actief.
- `executed` bestaat alleen conceptueel en is nog niet toegestaan.
- `blocked` en `disabled` moeten write/execution blijven tegenhouden.

## Conceptueel toegestane transitions in de huidige mock/read-only fase
De huidige fase laat alleen transitions toe die de mock/read-only stroom expliciet en veilig houden, zoals:
- `mock` -> `mock_preview`
- `mock_preview` -> `completed`
- `review_required` -> `in_review`
- `in_review` -> `changes_requested`
- `in_review` -> `approved`
- `in_review` -> `rejected`
- `approval_required` -> `approved`
- `approval_required` -> `rejected`
- `approved` -> `blocked` of `disabled` wanneer execution nog niet is toegestaan

## Expliciet verboden transitions in de huidige fase
De volgende transitions zijn in deze fase expliciet verboden:
- `completed` -> echte execution
- `review_required` -> `approved` zonder human review
- `approved` -> `execution_allowed` zonder apart besluit
- `approved` -> `executed`
- `mock` of `mock_preview` -> production truth
- `blocked` of `disabled` -> execution/write
- AI/OpenAI-output -> state promotion zonder human review
- system/service actor -> menselijke approval vervangen

## Governance-regels
- AI/OpenAI-output mag nooit zelfstandig state promotion veroorzaken.
- System/service actors mogen human approval nooit vervangen.
- Iedere toekomstige state transition moet later auditbaar zijn.
- State transitions moeten later aansluiten op actor identity, access-control, review/approval policy, audit logging, tenant/customer/shop boundary, source/canonical mapping en rollback/undo policy.

## Relatie tot later
Dit state contract is een begrenzing voor latere implementatie. Het maakt duidelijk dat mock completion, approval en execution strikt gescheiden blijven, en dat `execution_write`-achtige mogelijkheden voorlopig niet bestaan.


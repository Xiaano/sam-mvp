# SAM Health Checker State Lifecycle Validation Review

## Zichtbare lifecycle/statusbegrippen

In de huidige read-only/mock en contractlaag zijn onder meer deze begrippen zichtbaar:

- `completed`
- `mock`
- `mock_preview`
- `mock_flow`
- `mock_overview`
- `contract`
- `available`
- `ready_for_review`
- `draft`
- `approved`
- `rejected`
- `on_hold`
- `changes_requested`
- `needs_more_context`
- `blocked`
- `disabled`
- `approval_required`
- `review_required`
- `human review required`
- `human_approval_required`
- `auto_execute disabled`
- `write_actions disabled`
- audit/traceability events

## Consistentie

De begrippen zijn voldoende consistent voor de huidige mock/read-only fase. `mock`-achtige statussen worden gebruikt voor runtime-/previewroutes, terwijl `contract` en `available` de statische contractroutes markeren.

## `completed` in mock-context

`completed` is in de mock/read-only context duidelijk genoeg zolang het expliciet gekoppeld blijft aan `mock`, `mock_preview`, `mock_flow` of `mock_overview` en niet als echte productievoltooiing wordt voorgesteld.

## `review_required` en `approval_required`

`review_required` en `approval_required` zijn bruikbaar, maar moeten conceptueel gescheiden blijven: review betekent inspectie/voorbereiding, approval betekent een menselijke goedkeuringsstap. De huidige documenten houden die intentie grotendeels in stand.

## `blocked`, `disabled` en execution-grenzen

`blocked` en `disabled` komen voldoende duidelijk terug rond execution/write actions. `auto_execute disabled` en human approval blijven hard bewaakt in zowel mock- als contractlaag.

## Audit/traceability

Audit- en traceability-semantiek zijn duidelijk genoeg zonder echte persistence, zolang de preview- en contractdocumentatie benadrukt dat het om leesbare traces gaat en niet om opgeslagen productiedata.

## Verwarrrisico

Er is nog wel risico op verwarring tussen:

- mock completion
- echte completion
- approval
- execution
- audit persistence

Dat risico blijft beheersbaar zolang mock/runtime en contractlagen gescheiden blijven en `source`/`mode`/`status`-metadata expliciet zichtbaar blijven.

## Lifecycle-gaten

Voor een echte adapter- of servicegrens blijven nog lifecycle-gaten bestaan rond:

- echte persistence
- echte execution
- echte audit-opslag
- adapter- of boundary-gedrag

## Aparte lifecycle/state-beslissing

Een aparte lifecycle/state contractbeslissing is op dit moment nog niet noodzakelijk voor de mock/read-only fase, maar kan later zinvol worden zodra echte runtime-adaptergrenzen of persistence in scope komen.

## Advies voor de volgende fase

De meest logische volgende fase is een state/lifecycle validation review als documentair vervolg, of anders pas een aparte adapter boundary design-fase. Er is nu nog geen codebesluit nodig.

## Bevestiging

Dit is alleen een documentatie-review. Geen code, testcode, runtime of secrets zijn geraakt.

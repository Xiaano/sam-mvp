# SAM Health Checker Lifecycle and State Design

## Doel

Dit document beschrijft een lifecycle/state-model voor een latere runtime-flow. Er is nog geen implementatie; dit is alleen een ontwerp voor de volgende fase.

## Statussen per domeinobject

### ScanRun

* `created`
* `running`
* `completed`
* `failed`

### Issue

* `detected`
* `classified`
* `mapped_to_proposal`

### Proposal

* `draft`
* `ready_for_review`
* `approved`
* `rejected`
* `on_hold`
* `changes_requested`

### ReviewItem

* `ready_for_review`
* `reviewed`

### ApprovalDecision

* `prepared`
* `approved`
* `rejected`

### AuditEvent

* `previewed`
* `recorded_later`

## Toegestane state transitions

De volgende overgangen zijn later logisch:

* `scan created` → `running` → `completed` / `failed`
* `issue detected` → `classified` → `mapped_to_proposal`
* `proposal draft` → `ready_for_review` → `approved` / `rejected` / `on_hold` / `changes_requested`
* `review ready_for_review` → `reviewed`
* `approval prepared` → `approved` / `rejected`
* `audit previewed` → `recorded later`

## Verboden overgangen

Bewust niet toegestaan:

* `approved` → `executed` zonder aparte execution-step
* `proposal` → WooCommerce write
* auto approval
* auto execute
* database write in deze fase

## Veiligheidsregels

De veiligheidsregels blijven:

* human review verplicht
* human approval verplicht
* `write_actions` disabled
* `auto_execute` disabled
* execution vereist later aparte beslissing
* geen database/Prisma/WooCommerce/AI/frontend

## Relatie met later

Dit lifecycle/state-model kan later gebruikt worden voor:

* een in-memory/mock service
* een latere Prisma/datamodel-richting
* cockpit-statussen


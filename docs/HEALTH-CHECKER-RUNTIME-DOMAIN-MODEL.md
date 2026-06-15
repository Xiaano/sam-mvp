# SAM Health Checker Runtime Domain Model

## Doel

Dit is het eerste domeinmodel voor een latere runtime-flow. Er is nog geen database- of Prisma-implementatie; het model dient alleen om de toekomstige runtime-opbouw coherent te houden.

## Domeinobjecten

### ScanRun

* Doel: één scanmoment representeren.
* Minimale velden: `scan_id`, `status`, `checked_at`, `source_route`, `shop_name`, `risk_level`.
* Relatie: een ScanRun bevat meerdere issues en vormt de bron voor latere review- en auditstappen.
* Voorlopig mock/read-only: ja.

### ProductSnapshot

* Doel: de relevante producttoestand op het scanmoment vastleggen.
* Minimale velden: `product_id`, `product_sku`, `title`, `description_status`, `image_status`, `tag_status`, `seo_status`.
* Relatie: gekoppeld aan een ScanRun en bron voor Issue-detectie.
* Voorlopig mock/read-only: ja.

### Issue

* Doel: een geconstateerd probleem of tekort vastleggen.
* Minimale velden: `issue_id`, `scan_id`, `product_sku`, `type`, `severity`, `confidence`, `message`, `status`.
* Relatie: komt voort uit een ScanRun en kan later aan een Proposal gekoppeld worden.
* Voorlopig mock/read-only: ja.

### Proposal

* Doel: een mogelijke verbetering of actie beschrijven.
* Minimale velden: `proposal_id`, `issue_id`, `proposal_type`, `title`, `proposed_change`, `reason`, `risk_level`, `confidence`, `default_status`.
* Relatie: wordt afgeleid uit een Issue en kan later door review worden beoordeeld.
* Voorlopig mock/read-only: ja.

### ReviewItem

* Doel: een voorstel in de review queue presenteren.
* Minimale velden: `review_id`, `proposal_id`, `current_status`, `recommended_action`, `available_actions`, `requires_human_review`, `requires_human_approval`, `auto_execute_allowed`.
* Relatie: verwijst naar een Proposal en vormt de operator-reviewstap.
* Voorlopig mock/read-only: ja.

### ApprovalDecision

* Doel: de uitkomst van een menselijke beoordeling beschrijven.
* Minimale velden: `decision_id`, `review_id`, `proposal_id`, `selected_action`, `next_status`, `reason`, `execution_enabled`.
* Relatie: volgt op een ReviewItem en bepaalt of iets later verder mag.
* Voorlopig mock/read-only: ja.

### AuditEvent

* Doel: een traceerbare gebeurtenis voor latere auditbeschrijving vastleggen.
* Minimale velden: `event_id`, `event_type`, `timestamp`, `actor_type`, `actor_id`, `scan_id`, `issue_id`, `proposal_id`, `action`, `previous_status`, `new_status`, `reason`, `source_endpoint`.
* Relatie: kan alle eerdere objecten refereren voor traceerbaarheid.
* Voorlopig mock/read-only: ja.

### SafetyPolicy

* Doel: vastleggen dat de huidige en toekomstige flow veilig, read-only en gecontroleerd blijft.
* Minimale velden: `database`, `prisma`, `woocommerce`, `secrets`, `write_actions`, `auto_execute`, `human_approval_required`.
* Relatie: geldt als omkaderende policy voor ScanRun, ReviewItem, ApprovalDecision en AuditEvent.
* Voorlopig mock/read-only: ja.

## Lifecycle

De beoogde levenscyclus is voorlopig:

* scan created
* issues detected
* proposals generated
* review queue created
* approval decision prepared
* audit event previewed

## Veiligheidsgrenzen

Het domeinmodel blijft binnen deze grenzen:

* geen database
* geen Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen write actions
* geen auto-execute
* human approval blijft verplicht

## Latere implementatierichting

De aanbevolen richting is later:

* eerst eventueel een in-memory/mock service
* daarna pas Prisma/datamodel
* WooCommerce pas na aparte beslissing


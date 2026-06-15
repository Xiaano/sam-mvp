# SAM Health Checker Operator Overview Design

## Doel

Het toekomstige operator-overzicht moet een menselijk, read-only cockpitbeeld geven van de bestaande Health Checker-keten. Het overzicht moet snel laten zien wat de mock scan oplevert, welke issues zijn gevonden, welke proposals volgen, wat de reviewstatus is, welke approval policy geldt en hoe audit-traceerbaarheid eruitziet.

## Panelen

Het overzicht moet later minimaal deze panelen kunnen tonen:

* scan summary
* issues
* proposal previews
* review queue
* approval policy
* audit trail preview
* safety/status panel

## Minimale velden

Per onderdeel zijn later minimaal deze velden nuttig:

* Issue
  * issue_id
  * product_sku
  * type
  * label
  * severity
  * confidence
  * message
  * status
* Proposal
  * proposal_id
  * issue_id
  * proposal_type
  * title
  * current_state
  * proposed_change
  * reason
  * risk_level
  * confidence
  * default_status
* Review item
  * review_id
  * proposal_id
  * source_issue_type
  * proposal_type
  * current_status
  * recommended_action
  * available_actions
  * requires_human_review
  * requires_human_approval
  * auto_execute_allowed
* Audit event
  * event_type
  * timestamp
  * actor_type
  * actor_id
  * scan_id
  * issue_id
  * proposal_id
  * action
  * previous_status
  * new_status
  * reason
  * source_endpoint

## Conceptuele acties

Het overzicht moet later conceptueel deze acties kunnen tonen:

* approve
* reject
* hold
* request changes
* needs more context

## Veiligheidsgrenzen

Het toekomstige overzicht blijft binnen deze grenzen:

* read-only
* geen database/Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen write actions
* geen auto-execute
* menselijke review/approval verplicht

## Future hooks

Het ontwerp moet bewerkbaar blijven en later ruimte laten voor:

* klant/shop-segmentatie
* issue-prioriteit
* impactscore
* risico-inschatting
* supportstatus
* klantwaarde
* operatorrollen
* audit retention
* approval history
* rollback/undo voorbereiding
* WooCommerce execution later
* AI proposal text later
* Nautilus/cockpit-weergave later
* mogelijke NEMO Commerce-positionering later

## Bewust buiten scope

Bewust buiten scope blijven:

* echte execution
* database writes
* Prisma writes
* WooCommerce writes
* approve/reject POST-endpoints
* automatische besluitvorming
* autonome AI
* frontend-implementatie nu

## Ontwerpprincipe

Het ontwerp moet bewerkbaar blijven, future hooks moeten geen actieve scope worden en overengineering moet worden vermeden. De platinum-route is: geen open eindjes, maar ook geen onnodige abstractie.

## Aanbevolen vervolgstap

De volgende logische stap is een read-only wireframe of informatie-architectuur voor het operator-overzicht, nog zonder implementatie en nog zonder write actions.


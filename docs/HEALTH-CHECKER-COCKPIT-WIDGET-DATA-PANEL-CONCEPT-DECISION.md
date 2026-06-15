# Health Checker Cockpit Widget Data Panel Concept Decision

## Besluit
Widgets/data panels kunnen later nuttig zijn voor de cockpit omdat ze een gecontroleerde, samenstelbare dashboardlaag bieden bovenop read-only Health Checker-informatie. Ze mogen echter alleen werken als views op gevalideerde en geclassificeerde data.

## Scope
Widgets zijn geen vrije data-containers. Ze mogen geen raw payloads, secrets, execution payloads of ongeclassificeerde data tonen.

## Mogelijke widgettypes
De volgende widgettypes zijn later conceptueel mogelijk:
- scan overview widget
- issue summary widget
- proposal preview widget
- review status widget
- approval status widget
- audit trail metadata widget
- diagnostics/readiness widget
- lifecycle/status widget
- risk/warning widget

## Boundary-regels
Iedere widget moet later aansluiten op:
- tenant/customer/shop boundary
- source system boundary
- canonical mapping
- data classification
- role/permission matrix
- audit visibility policy

## Read-only grens
- Widgets moeten in de eerste fase read-only zijn.
- Widgets mogen geen eigen write- of execution-logica bevatten.
- Approval en execution mogen nooit als één widgetactie worden samengevoegd.

## Dashboard preferences
User dashboard preferences kunnen later mogelijk zijn, maar alleen als kijk- of layoutvoorkeuren:
- zichtbare widgets
- volgorde/layout
- filters
- periodekeuze
- compacte of uitgebreide weergave

Deze preferences mogen geen brondata, raw payloads, secrets of klantwaarheid opslaan.

## Implementatiegrenzen
Een toekomstige widget-architectuur heeft een apart besluit nodig. Een toekomstige dashboard preference storage heeft ook een apart besluit nodig.

## Nog niet toegestaan
Dit document geeft geen toestemming voor frontend-code, backend-routes, database, Prisma, WooCommerce, AI/OpenAI, adapters, POST/write/execution of secrets.

## Bevestigingen
- Dit is alleen een cockpit widget/data panel concept decision.
- Er zijn geen frontend-, code-, auth-, runtime- of secretscope geraakt.
- Widgets blijven read-only gecontroleerde views.
- User preferences mogen later alleen layout- en kijkvoorkeuren zijn.
- `execution/write` is nog niet toegestaan.


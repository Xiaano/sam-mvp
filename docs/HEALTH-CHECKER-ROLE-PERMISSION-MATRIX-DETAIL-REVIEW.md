# Health Checker Role Permission Matrix Detail Review

## Beoordeling
De conceptuele rollen en actiecategorieën zijn voldoende duidelijk om later een echte permission matrix uit te werken, maar nog niet genoeg om al implementatie toe te staan. De huidige grens blijft: lezen, reviewen, goedkeuren en uitvoeren zijn verschillende rechten en execution/write blijft geblokkeerd.

## Rollen in de latere matrix
De volgende rollen horen conceptueel in de latere matrix:
- internal admin
- operator/reviewer
- support operator
- customer admin
- customer viewer
- audit-only viewer
- system/service actor

## Actiecategorieën in de latere matrix
De volgende actiecategorieën horen conceptueel in de latere matrix:
- scan bekijken
- issue bekijken
- proposal bekijken
- proposal reviewen
- approval geven
- rejection/block geven
- audit trail bekijken
- data export aanvragen
- cleanup/verwijdering starten
- execution voorbereiden
- execution uitvoeren, voorlopig disabled

## Gescheiden rechten
De volgende rechten moeten absoluut gescheiden blijven:
- read
- review
- approve
- reject/block
- export
- cleanup/delete
- prepare execution
- execute

## Waarschijnlijke eerste beperkingen
In de eerste implementatiefases mogen vermoedelijk geen executionrechten naar voren komen voor:
- customer viewer
- audit-only viewer
- support operator
- system/service actor

Daarnaast:
- system/service actors mogen human approval nooit vervangen
- customer viewer mag nooit review/approval/execution krijgen
- support operator mag niet automatisch klantapproval geven
- audit-only viewer mag alleen auditinformatie zien en niets wijzigen

## Boundary-regels
- Tenant/customer/shop-boundary moet vóór permissiecontrole gelden.
- Data classification moet toegang beperken.
- Secrets, raw payloads en execution payloads mogen nooit via normale permissies zichtbaar zijn.

## Open vragen voor een echte matrix
Een latere detailtabel moet nog antwoord geven op vragen zoals:
- welke combinaties van rol + boundary + classificatie exact leesrechten krijgen
- welke rollen export mogen aanvragen
- welke rollen cleanup/verwijdering mogen starten
- welke approval-grenzen per rol gelden
- welke support/break-glass uitzonderingen ooit toegestaan zijn
- welke cockpit-views per rol zichtbaar zijn

## Advies
De volgende stap is alleen logisch als echte permission matrix detailtabel-voorbereiding; geen codebesluit. Zolang die detailbeslissing ontbreekt, blijft execution/write buiten scope.

## Bevestigingen
- Dit is alleen een role/permission matrix detail review.
- Er zijn geen code-, auth-, runtime- of secretscope geraakt.
- Read, review, approval en execution blijven gescheiden.
- `execution/write` is nog niet toegestaan.


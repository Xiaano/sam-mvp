# SAM Health Checker Rollback / Undo Policy Decision

## Waarom rollback/undo verplicht is

Rollback en undo zijn verplicht vóór toekomstige write of execution, zodat elke wijziging een vooraf bepaald herstelpad heeft.

## Acties die rollback/undo vereisen

Rollback/undo-denken is later nodig voor:

- WooCommerce product update
- proposal toepassen
- issue fix uitvoeren
- cleanup/verwijderactie
- export genereren
- persistence write
- externe adapter write

## Herstelpad vooraf

Execution mag nooit bestaan zonder vooraf bepaald herstelpad.

Rollback/undo mag niet achteraf "later" worden toegevoegd.

## Dry-run/preview

Dry-run of preview is waar mogelijk het verplichte uitgangspunt vóór execution.

## Minimale informatie vóór execution

Vóór execution moet minimaal bekend zijn:

- wat wordt gewijzigd
- oude waarde/reference
- nieuwe waarde
- actor
- tenant/customer/shop
- source/canonical mapping
- audit event
- rollbackmogelijkheid
- failure state
- retry policy

## Undo/rollback-metadata

Undo- en rollbackmetadata is niet hetzelfde als ruwe payloads opslaan.

## Verboden inhoud

Secrets, API keys en tokens mogen nooit onderdeel zijn van rollbackdata.

AI/OpenAI-output mag nooit rechtstreeks rollback- of write-logica bepalen.

## WooCommerce-grens

WooCommerce-writes mogen later alleen via een aparte adapter- en rollbackpolicy.

## Destructive actions

Destructive actions zijn extra streng en blijven voorlopig volledig geblokkeerd.

## Scopegrenzen

Rollback/undo-policy mag niet gecombineerd worden met de eerste execution-implementatie.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- code
- auth-code
- database
- Prisma
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Voorwaarden vóór latere implementatie

Vóór latere implementatie zijn minimaal nodig:

- action capability matrix
- rollback capability matrix
- dry-run policy
- failure/retry policy
- audit event mapping
- approval policy alignment
- tenant/customer/shop validation
- adapter-specific rollback decision
- operator cockpit decision

## Bevestiging

Dit is alleen een rollback/undo policy decision. Geen code, auth, Prisma of database is geraakt. Execution en write actions blijven volledig geblokkeerd en rollback/undo is verplicht vóór toekomstige execution. Persistence, integraties en execution zijn nog niet toegestaan.

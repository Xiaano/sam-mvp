# Health Checker WooCommerce Read-only Config Contract

## Status

* Status: REVIEW / CONFIG CONTRACT
* Scope: Documentation only
* Current build impact: None
* Product priority: SAM Health Checker first
* Activation rule: No WooCommerce API call without separate approved implementation plan

## Kernregels

* De mocklaag blijft mock/read-only en wordt geen productie-integratie.
* WooCommerce staging-integratie wordt later een aparte read-only laag.
* Write/rewrite/execution blijft buiten scope.
* Echte credentials blijven buiten de repo.

## Required config placeholders

### `WC_BASE_URL`

* Doel: basis-URL van de WooCommerce staging-omgeving waar later read-only requests naartoe zouden gaan.
* Echte waarde buiten repo: ja, alleen buiten `sam-mvp` beheren.
* Placeholder in `.env.example`: aanwezig als lege variabele.
* Risico bij verkeerd gebruik: verkeerde omgeving, live-targeting of onbedoelde koppeling aan productie.

### `WC_CONSUMER_KEY`

* Doel: read-only API-key voor toekomstige WooCommerce staging-leesacties.
* Echte waarde buiten repo: ja, nooit committen.
* Placeholder in `.env.example`: aanwezig als lege variabele.
* Risico bij verkeerd gebruik: brede toegang, onverwachte write-rechten of exposure van credentials.

### `WC_CONSUMER_SECRET`

* Doel: geheime sleutel die samen met de consumer key de toekomstige WooCommerce-auth vormt.
* Echte waarde buiten repo: ja, nooit openen of opslaan in repo.
* Placeholder in `.env.example`: aanwezig als lege variabele.
* Risico bij verkeerd gebruik: credential-lek, misbruik van staging of onbedoelde productie-impact.

## Secrets boundary

* Echte secrets staan nooit in de repo.
* `.env` en `.env.*` worden niet geopend of gecommit.
* Codex mag echte secrets niet lezen.
* `.env.example` bevat alleen placeholders.

## WooCommerce permission boundary

* De eerste integratie is strikt read-only.
* Voorkeur gaat uit naar WooCommerce API keys met alleen leesrechten.
* Brede, admin- of write-rechten zijn voor de eerste scanfase niet toegestaan.

## Eerste read-only staging scan mag later maximaal

* producten lezen
* id / sku / name / status / permalink lezen
* image aanwezig ja/nee
* short description aanwezig ja/nee
* long description aanwezig ja/nee
* tags/categories aanwezig ja/nee
* issues als read-only resultaat teruggeven
* niets wijzigen

## Non-goals

* geen product updates
* geen media uploads
* geen description rewrites
* geen tag/category writes
* geen PDF uploads
* geen AI-generatie
* geen approval/execution
* geen database persistence zonder apart akkoord
* geen mock runtime uitbreiding

## Adapter separation

* `mockRuntimeService` blijft mock/demo.
* Een WooCommerce read-only adapter wordt later apart ontworpen.
* Write/rewrite/execution-adapters horen later in een aparte laag met audit, idempotency en rollback.

## Future implementation gate

Bouwen mag pas later als:

* dit contract akkoord is
* de secrets boundary bevestigd is
* read-only permissions bekend zijn
* adapter/endpoint micro-scope apart is goedgekeurd

## Recommended next micro-step

De meest logische volgende stap is een klein read-only WooCommerce endpoint/adapter-contract dat expliciet alleen staging-leesacties beschrijft, zonder calls of implementatie.

## Bevestiging

Dit document is alleen een read-only config contract. Geen code, database, Prisma of WooCommerce-call is geraakt en write/rewrite/execution blijft buiten scope.

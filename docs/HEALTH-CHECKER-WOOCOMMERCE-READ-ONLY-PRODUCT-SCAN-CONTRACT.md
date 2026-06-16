# Health Checker WooCommerce Read-only Product Scan Contract

## Status

* Status: REVIEW / PRODUCT SCAN CONTRACT
* Scope: Documentation only
* Current build impact: None
* Product priority: SAM Health Checker first
* Activation rule: No WooCommerce product read without separate approved implementation step

## Kernregel

De eerste WooCommerce scan is read-only en mag alleen productdata lezen voor Health Checker-analyse. Niets wijzigen.

## Eerste toegestane productvelden

De eerste read-only staging scan mag later maximaal deze velden lezen:

* `id`
* `sku`
* `name`
* `status`
* `type`
* `permalink`
* `stock_status`
* `stock_quantity` indien beschikbaar
* `manage_stock` indien beschikbaar
* images count / image present
* short description aanwezig ja/nee
* description aanwezig ja/nee
* categories
* tags
* `date_modified` indien beschikbaar

## Eerste Health Checker-detecties

De eerste scan mag later alleen deze read-only detecties doen:

* ontbrekende afbeelding
* ontbrekende korte omschrijving
* ontbrekende lange omschrijving
* ontbrekende tags
* ontbrekende categorie
* concept/draft/non-active status signaleren
* voorraadstatus alleen lezen, nog geen voorraadadvies bouwen

## Expliciet buiten scope

* product updates
* media uploads
* description rewrites
* tag/category writes
* PDF uploads
* AI-generatie
* proposal execution
* approval/execution flow
* database persistence zonder apart akkoord
* voorraad/status advanced checks
* notifications
* skip-with-reason
* prognoses/forecasting

## Source / Provenance

* WooCommerce existing data is sourceType `webshop_existing_data`
* scanresultaten moeten later herleidbaar zijn naar product id/sku
* geen proposal zonder bronstatus
* AI mag hier nog geen bron zijn

## Adapter separation

* `mockRuntimeService` blijft mock/demo
* WooCommerce read-only adapter is een aparte toekomstige laag
* write/rewrite/execution-adapter komt later apart met audit, idempotency en rollback

## Future implementation gate

Een echte productread mag pas later als:

* dit contract akkoord is
* config readiness veilig werkt
* adapter skeleton akkoord is
* read-only permissions bevestigd zijn
* een aparte micro-scope is goedgekeurd

## Recommended next micro-step

De meest logische volgende stap is een klein read-only WooCommerce endpoint-/adapter-contract dat expliciet alleen staging-leesacties beschrijft, zonder calls of implementatie.

## Bevestiging

Dit document is alleen een read-only product scan contract. Geen code, database, Prisma of WooCommerce-call is geraakt en write/rewrite/execution blijft buiten scope.

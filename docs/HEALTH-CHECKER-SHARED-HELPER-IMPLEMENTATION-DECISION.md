# SAM Health Checker Shared Helper Implementation Decision

## Besluit

* nu geen brede refactor van alle bestaande Health Checker routes
* nu geen volledige centralisatie van alle contractpayloads
* een kleine shared helper mag later alleen worden gebouwd als dit drift verlaagt

## Waarom niet nu breed refactoren

* de huidige routefamilie is nog begrijpelijk
* expliciete statische routes zijn nog bruikbaar
* te vroege abstractie kan leesbaarheid verminderen
* geen refactor om alleen esthetische redenen

## Wat later eventueel wél mag

* kleine shared safety helper
* gedeelde service- en version-constants
* gedeelde approval- en write-action flags
* gedeelde response metadata
* bij voorkeur eerst gebruiken in service-driven mock responses, niet meteen in alle oude contractroutes

## Strikte grenzen

Deze volgende stap blijft strikt beperkt tot:

* geen database
* geen Prisma
* geen WooCommerce
* geen AI/OpenAI
* geen frontend/cockpit
* geen write actions
* geen execution
* geen secrets

## Acceptatiecriteria voor eventuele latere helper

Een latere helper is alleen acceptabel als die:

* drift verlaagt
* responses expliciet leesbaar houdt
* geen endpoint paths breekt
* geen safety-semantiek verandert
* `/diagnostics` database/prisma `not_checked` laat houden
* een aparte code-opdracht vereist

## Aanbevolen volgende stap

Eerst dit besluit committen en pushen. Daarna pas eventueel een klein shared helper design of een implementatiestap voorbereiden. Geen automatische refactor.

## Geen implementatie in dit document

Dit document bevat alleen het besluit en geen implementatie.


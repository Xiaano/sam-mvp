# SAM Health Checker Next Phase Decision Review

## Afgeronde fases

De volgende fases zijn afgerond:

- contract/mock readiness
- service-driven mock adoption
- mock endpoint checks
- contract-shape checks
- check-run consolidation
- state/lifecycle validation review
- adapter boundary review
- governance/persistence-boundary chain
- documentatiestructuur-review
- document-index

## Nog niet toegestaan

De volgende zaken blijven buiten scope:

- database
- Prisma
- WooCommerce
- AI/OpenAI
- adapters
- POST/write/execution
- secrets

## Mogelijke volgende fases

Mogelijke volgende fases zijn:

- lifecycle/state contract decision
- role/permission matrix decision
- persistence implementation preconditions review
- WooCommerce readiness review
- operator cockpit readiness review
- documentation consolidation/index follow-up

## Risico en timing per optie

- lifecycle/state contract decision: laag risico, goede timing; sluit direct aan op de huidige mock/read-only statussen.
- role/permission matrix decision: laag tot middelgroot risico; hangt samen met access-control en actor-identity, maar kan na lifecycle nog helder worden uitgewerkt.
- persistence implementation preconditions review: middelgroot risico; logisch, maar alleen na verdere boundary-besluiten.
- WooCommerce readiness review: middelgroot risico; nuttig, maar pas zinvol nadat source/canonical/persistence-kaders vast zijn.
- operator cockpit readiness review: middelgroot risico; hangt af van review/approval, access-control en lifecycle semantics.
- documentation consolidation/index follow-up: laag risico; nuttig voor navigatie, maar niet inhoudelijk leidend.

## Advies

De volgende fase moet `lifecycle/state contract decision` zijn.

Dat hoort vóór persistence, WooCommerce, cockpit of execution, omdat lifecycle/statussen eerst eenduidig moeten vastliggen voordat echte mutatie-, review- of integratiepaden worden gebouwd.

## Nog niet toegestaan

Dit document geeft geen codebesluit en geen toestemming voor verdere implementatie. Verdere implementatie mag alleen via aparte micro-scope decisions.

## Bevestiging

Geen code, runtime of secrets zijn geraakt. Persistence, integraties en execution blijven nog niet toegestaan.

# Developer Workflow Helpers V1 Decision

## Status

* Status: APPROVED DIRECTION / NOT IMPLEMENTED
* Scope: Local developer workflow only
* Product impact: None
* SAM workflow automation: Not allowed

## Kernbesluit

Developer helpers mogen alleen lokale bouw- en testhandelingen ondersteunen, zoals API/frontend starten, herstarten, env-runtime leegmaken en veilige statuschecks uitvoeren.

## Toegestaan later

* API starten/herstarten
* frontend starten/herstarten
* health/readiness endpoints checken
* WooCommerce config readiness checken
* `git status` tonen
* lokale tijdelijke env-vars wissen
* VS Code tasks als launcher gebruiken
* PowerShell scripts voor lokale dev-handelingen

## Verboden

* productscan automatisch uitvoeren
* WooCommerce live raken
* secrets laden vanuit repo
* write/rewrite/execution
* database/Prisma acties zonder aparte opdracht
* automatische `git add/commit/push`
* SAM proposal/execution chain automatiseren

## Voorkeursopzet

* package scripts blijven basis
* VS Code tasks als dunne launcher
* PowerShell scripts alleen voor lokale dev-flow
* geen helperlaag die productlogica begrijpt

## Eerste latere helpers

* start API
* start frontend
* clear WooCommerce runtime env
* check health/readiness
* `git status`

## Niet nu bouwen

Dit document autoriseert nog geen scripts of tasks. Implementatie volgt later per kleine micro-stap.

## Bevestiging

Dit besluitdocument gaat alleen over lokale developer workflow helpers. Het opent geen SAM-productworkflow, geen scans, geen proposals, geen execution en geen WooCommerce-automatisering.

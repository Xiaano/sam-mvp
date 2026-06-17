# Codex Workflow Upgrade Decision

## Status

* Status: APPROVED DIRECTION / NOT IMPLEMENTED
* Scope: Local developer workflow only
* Product impact: None
* SAM workflow automation: Not allowed

## Kernbesluit

Codex werkt voortaan met taakklassen: `D0`, `F1`, `A1`, `X1`, `DB1`, `S1`, `W1`, `R1`.

## Taakklassen

* `D0` = documentatiebundel
* `F1` = frontend-only presentatie
* `A1` = read-only API
* `X1` = externe API/integratie
* `DB1` = database/Prisma
* `S1` = secrets/auth/security
* `W1` = write/rewrite/execution
* `R1` = refactor/cleanup

## Bundelregels

* documentatie mag sneller gebundeld
* frontend-only mag beperkt gebundeld
* één read-only GET-boundary mag route + service + serverregistratie bundelen
* externe API, database, secrets/auth en write/execution blijven strikt gated

## Rapportage- en besluitregels

* ChatGPT beoordeelt elk Codex-rapport vóór `git add`/`commit`/`push`
* Codex bepaalt nooit zelfstandig productrichting

## Werkbank en tooling

* werkbankautomatisering is alleen lokale development tooling
* werkbankautomatisering is geen product-chain automation

## Volgende stap

Ontwerp `AGENTS.md` om standaardregels repo-breed vast te leggen.

## Rapportageformat

* Aangemaakt
* Aangepast
* Niet aangepast
* Niet uitgevoerd
* Validatie
* Risico’s / aandachtspunten
* Korte beoordeling

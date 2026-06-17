# Codex Task Playbook

## Status

* Status: APPROVED GUIDANCE / NOT IMPLEMENTED
* Scope: Practical interpretation of Codex task classes
* Product impact: None
* Product-chain automation: Not allowed

## Doel

Dit playbook legt praktisch vast hoe Codex taakklassen moet lezen en toepassen, zodat opdrachten korter kunnen blijven zonder de guardrails te verliezen.

## Relatie met andere documenten

* `docs/CODEX-WORKFLOW-UPGRADE-DECISION.md` legt de formele taakklassen, bundelregels en workflowgrenzen vast.
* `AGENTS.md` is de repo-brede instructie voor vaste Codex-guardrails en rapportage.
* Dit playbook is de praktische uitvoerlaag: hoe Codex die regels in concrete taken toepast.

## Taakklassen

### D0 - documentatiebundel

* Toegestaan: documentatie schrijven, samenvoegen of kort actualiseren.
* Verboden: code, scripts, endpoints, data of workflows bouwen.
* Stop wanneer een document actie, automatisering of scope-uitbreiding begint te raken.
* Passende validatie: bronbestanden lezen en alleen documentconsistentie controleren.

### F1 - frontend-only presentatie

* Toegestaan: UI, labels, layout, rendering en bestaande GET-data tonen.
* Verboden: backendroutes, writes, execution, auth en nieuwe API-calls zonder expliciete opdracht.
* Stop wanneer frontendgedrag productautomatisering, opslag of writes suggereert.
* Passende validatie: browsercheck, UI-scan en endpointgebruik controleren.

### A1 - read-only API

* Toegestaan: read-only endpoints, safe responses en contract-/statusdata.
* Verboden: POST/PUT/PATCH/DELETE, persistence, writes en execution.
* Stop wanneer de route data wijzigt, opslaat of productactie impliceert.
* Passende validatie: endpoint-response, statuscodes en guardrailvelden controleren.

### X1 - externe API/integratie

* Toegestaan: expliciet goedgekeurde externe koppelingen of read-only probes binnen contract.
* Verboden: ongecontroleerde live calls, credentials lekken of productactie automatiseren.
* Stop wanneer de integratie buiten de afgesproken boundary gaat.
* Passende validatie: boundary, secrets-afscherming en extern gedrag verifi?ren.

### DB1 - database/Prisma

* Toegestaan: database- of Prisma-werk binnen expliciete opdracht.
* Verboden: schemawijzigingen, migraties of persistence zonder akkoord.
* Stop wanneer opslag, mutatie of structurele dataverandering ontstaat.
* Passende validatie: schema, migratiepad en datastroom controleren.

### S1 - secrets/auth/security

* Toegestaan: security- of auth-boundaries documenteren of implementeren binnen opdracht.
* Verboden: secrets openen, tonen, committen of laten uitlekken.
* Stop wanneer echte sleutels, tokens of credentials in beeld komen.
* Passende validatie: secrets-bescherming en security boundary checken.

### W1 - write/rewrite/execution

* Toegestaan: alleen wanneer expliciet goedgekeurd en afgebakend.
* Verboden: impliciete writes, automatische execution of verborgen mutaties.
* Stop wanneer een stap uitvoerbare productactie wordt.
* Passende validatie: write paths, audit, idempotency en rollback expliciet toetsen.

### R1 - refactor/cleanup

* Toegestaan: kleine, gecontroleerde verbeteringen zonder scopewijziging.
* Verboden: refactors die gedrag, scope of veiligheid verruimen.
* Stop wanneer cleanup verandert in functionele uitbreiding.
* Passende validatie: regressiecheck op bestaande grenzen en output.

### T1 - local development tooling

* Toegestaan: VS Code tasks, lokale startcommando's, statuschecks en dunne PowerShell helpers voor dev-workflows.
* Verboden: productscan/proposal-chain, live externe API-acties, secrets lezen, writes/execution en automatische git-acties.
* Stop wanneer tooling productlogica, integratiegedrag of stateful productflow probeert te automatiseren.
* Passende validatie: alleen lokale commandoboundaries, task labels en status-/startgedrag controleren.

## Veilige opdrachtvoorbeelden

* "Maak een documentatiebundel voor de Health Checker flow."
* "Voeg een read-only statusendpoint toe."
* "Toon bestaande read-only data in de frontend."
* "Werk een contractdocument bij zonder gedrag te wijzigen."
* "Maak een lokale dev-task voor API of frontend start."

## Gevaarlijk behulpzaam gedrag dat niet mag

* "Ik voeg alvast een kleine write mee zodat het later handig is."
* "Ik lees even de secrets om te zien of het werkt."
* "Ik maak direct ook de vervolgscan, want dat scheelt later tijd."
* "Ik voeg alvast een auto-run of fallback execution toe."

## Pre-flight checklist

* Taakklasse is expliciet bekend.
* Grenzen zijn gelezen en begrepen.
* Geen secrets, `.env` of externe productieactie nodig.
* Geen ongevraagde files, routes of workflows.
* Validatiepad is vooraf helder.

## Post-flight checklist

* Alleen verwachte bestanden zijn aangepast.
* Geen verboden scope is geraakt.
* Validatie is uitgevoerd of expliciet niet uitgevoerd.
* Rapportage is compact en volledig.
* Twijfelpunten zijn expliciet benoemd.

## Multi-agent-ready principe

Dit playbook is later ook bruikbaar voor reviewer-, test- en documentatie-agents zonder nu een multi-agent-platform te bouwen. De taakklasse en de guardrails blijven leidend; alleen de uitvoerende rol verschilt.

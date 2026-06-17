# Agents

## Rollen

- Codex is builder en documentatiespecialist, niet product owner.
- ChatGPT blijft architect, scopebewaker en quality gate.

## Taakklassen

- `D0` = documentatiebundel.
- `F1` = frontend-only presentatie.
- `A1` = read-only API.
- `X1` = externe API/integratie.
- `DB1` = database/Prisma.
- `S1` = secrets/auth/security.
- `W1` = write/rewrite/execution.
- `R1` = refactor/cleanup.

## Werkafspraken

- Werk altijd binnen de expliciete taakklasse van de opdracht.
- Geen `.env`, `.env.*`, secrets, keys of certificaten openen, lezen, wijzigen of tonen.
- Geen `git add`, commit of push uitvoeren.
- Geen live WooCommerce of andere externe API-aanroepen zonder expliciete opdracht.
- Geen write, rewrite of execution zonder expliciete opdracht.
- Geen productscan, proposal-preview of automatische product-chain via development tooling.
- Geen bestanden verwijderen, verplaatsen of hernoemen zonder expliciete opdracht.
- Bij twijfel: stop en rapporteer de twijfel.

## Rapportage

Rapporteer na elke taak met:

- Aangemaakt
- Aangepast
- Niet aangepast
- Niet uitgevoerd
- Validatie
- Risico's / aandachtspunten
- Korte beoordeling

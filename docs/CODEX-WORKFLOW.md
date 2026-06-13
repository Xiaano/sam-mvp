# Codex Workflow

## Doel

Dit document centraliseert de vaste werkregels voor Codex binnen `sam-mvp`.

Doel:

* toekomstige opdrachten korter maken;
* veiliger werken afdwingen;
* herhaling van losse instructies verminderen;
* zorgen dat Codex consequent dezelfde kernbronnen en grenzen gebruikt.

## Standaard werkwijze

Codex werkt binnen `sam-mvp` standaard in deze volgorde:

1. eerst alleen de relevante kernbestanden lezen;
2. daarna kort het doel, de aanpak en de grenzen samenvatten;
3. daarna pas uitvoeren;
4. daarna alleen rapporteren in het vaste eindformat.

Aanvullende regels:

* geen brede repo-scan tenzij expliciet gevraagd;
* geen "alles lezen" tenzij dit expliciet nodig is voor een consolidatiestap of auditvraag;
* eerst documentatie en guardrails begrijpen, daarna pas bestanden aanmaken of aanpassen;
* als iets onzeker is: `Controle nodig` schrijven in plaats van aannemen.

## Standaard te lezen kernbestanden

Bij toekomstige taken leest Codex standaard eerst:

* `README.md`
* `docs/CURRENT-STATUS.md`
* `docs/APPROVED-DECISIONS-INDEX.md`

Daarna leest Codex alleen nog een taakgericht kernbestand als dat nodig is, bijvoorbeeld:

* `docs/DATABASE-SCHEMA.md`
* `docs/API-PLAN.md`
* `docs/TECHNICAL-ARCHITECTURE.md`
* `docs/TEST-STRATEGY.md`

Extra regel:

* alleen voor documentatieconsolidatie, auditcontrole of historische reconstructie mag Codex bewust breder lezen.

## Wanneer `docs/BUILD-LOG.md` lezen

Codex leest `docs/BUILD-LOG.md` alleen wanneer historische context nodig is, bijvoorbeeld voor:

* eerdere installaties;
* eerdere validaties;
* warnings;
* auditcontext;
* handmatige Ricardo-stappen;
* volgorde van eerdere technische opbouw.

`docs/BUILD-LOG.md` is niet bedoeld als standaard startdocument voor elke taak.

## Secrets- en `.env`-regels

De volgende regels zijn hard en blijven letterlijk leidend:

* echte secrets blijven buiten `sam-mvp`;
* alleen `.env.example` mag in de repo;
* `DATABASE_URL` blijft buiten `sam-mvp`;
* Codex mag geen `.env`, `DATABASE_URL` of secrets lezen, openen, tonen, kopiëren of wijzigen;
* lokale secrets/config worden door Ricardo handmatig buiten de repo beheerd.

Aanvullende uitwerking:

* er komt geen echte `.env` in `sam-mvp`;
* echte waarden worden niet in documentatie opgeslagen;
* echte waarden worden niet in Git opgeslagen;
* voorbeeldlocaties buiten de repo mogen alleen documentair genoemd worden, niet geopend.

## Externe configuratie

Lokale configuratie en secrets worden buiten `sam-mvp` beheerd.

Ricardo mag handmatig tijdelijke PowerShell-sessievariabelen zetten, bijvoorbeeld voor:

* `POSTGRES_DB`
* `POSTGRES_USER`
* `POSTGRES_PASSWORD`
* `POSTGRES_HOST_PORT`
* `DATABASE_URL`

Codex mag:

* documenteren welke variabelen conceptueel nodig zijn;
* documenteren dat PowerShell-sessievariabelen tijdelijk gebruikt mogen worden;
* documenteren dat echte waarden door Ricardo worden beheerd.

Codex mag niet:

* echte waarden vragen;
* echte waarden invullen;
* echte waarden opslaan;
* een secrets-bestand openen;
* een `.env` aanmaken;
* een echte `DATABASE_URL` tonen of vastleggen.

## Package-manager-regel

De package-manager-richting blijft:

* `npm workspaces`

Aanvullende regel:

* geen overstap naar `pnpm`, `yarn` of `bun` zonder expliciet goedgekeurd besluit.

## Uitvoeringsgrenzen

Zonder expliciete opdracht voert Codex niet uit:

* geen npm-commando's
* geen npx-commando's
* geen Prisma-commando's
* geen databasecommando's
* geen buildcommando's
* geen testcommando's

Zonder expliciete opdracht doet Codex ook niet:

* geen bestanden verwijderen
* geen bestanden verplaatsen
* geen bestanden hernoemen
* geen archiefstap uitvoeren zonder goedgekeurde migratiematrix
* geen productie-deployment
* geen WooCommerce connector bouwen
* geen businesslogica bouwen
* geen nieuwe dependencies installeren

Extra grens:

* geen oude `SAM V2`-code of configuratie gebruiken als bron voor nieuwe implementatie.

## Documentatieregel

Documentatie binnen `sam-mvp` moet:

* gebaseerd zijn op goedgekeurde besluiten of expliciete validaties;
* onderscheid maken tussen actuele status en historische bouwgeschiedenis;
* geen losse ideeën zonder besluit als waarheid behandelen.

Letterlijk te behouden regel:

* geen losse ideeën zonder besluit

## Rapportageformat

Elke Codex-run eindigt exact met:

```text
Aangemaakt:
Aangepast:
Niet aangepast:
Niet uitgevoerd:
Risico’s / aandachtspunten:
Volgende logische stap:
```

## Contextbudget-regel

Codex-opdrachten moeten compact blijven.

Daarom geldt:

* gebruik eerst de kernbestanden;
* vermijd herhaling van volledige projecthistorie als `README.md`, `docs/CURRENT-STATUS.md`, `docs/APPROVED-DECISIONS-INDEX.md` en een taakgericht kernbestand voldoende zijn;
* lees `docs/BUILD-LOG.md` alleen wanneer historische installaties, validaties, warnings of auditdetails echt nodig zijn;
* herhaal geen brede context in elk antwoord als een korte verwijzing naar de kernstatus voldoende is.

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `docs/CODEX-WORKFLOW.md` zijn aangewezen:

* `README.md`
* `docs/README.md`
* `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md`
* `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`
* `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`
* `docs/PACKAGE-MANAGER-DECISION.md`

Daarnaast zijn meegelezen:

* `docs/DOCS-MIGRATION-MATRIX.md`
* `docs/CURRENT-STATUS.md`
* `docs/BUILD-LOG.md`

Zij zijn alleen gebruikt om deze workflow te laten aansluiten op de huidige consolidatiestructuur en niet als vervanging van de hierboven aangewezen bronset.

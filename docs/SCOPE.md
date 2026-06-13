# Scope

## Doel

Dit document legt de productmatige en functionele grenzen van `SAM MVP Release 1` centraal vast.

Dit document is bedoeld om:

* productscope los te trekken van technische status;
* te voorkomen dat ongetoetste ideeen als productwaarheid gaan gelden;
* te bewaken dat nieuwe stappen SAM dichter bij een bruikbare marktintroductie brengen.

## Wat SAM MVP Release 1 is

`SAM MVP Release 1` is:

* een frisse MVP-opbouw voor `SAM`;
* gericht op `SAM Health Checker` en `SAM Webshopbeheer`;
* bedoeld om eerst een verkoopbare, stabiele kern te bouwen;
* geen brede zelfstandige `AXIORA Guardian`-productontwikkeling in deze fase.

Uitgangspunten:

* oude `SAM V2` blijft alleen testcontext;
* oude code wordt niet overgenomen;
* de nieuwe opbouw moet klein, controleerbaar en herhaalbaar blijven.

## Binnen scope

Binnen scope voor `SAM MVP Release 1` vallen:

* productanalyse;
* webshopanalyse;
* issue-detectie;
* proposals;
* handmatige review;
* handmatige goedkeuring;
* gecontroleerde uitvoering later;
* documenteerbare workflow;
* herhaalbare workflow;
* een API-first basis als technische richting, zonder hier technische details te dupliceren.

Functioneel betekent dit dat `SAM MVP Release 1` vooral gericht blijft op:

* signaleren wat mis of onvolledig is;
* voorstellen wat verbeterd kan worden;
* zichtbaar maken welke menselijke beslissing nodig is;
* stap voor stap toewerken naar gecontroleerde uitvoering.

## Buiten scope

Buiten scope voor deze fase blijven:

* zelfstandige `AXIORA Guardian`-uitbouw;
* multi-tenant SaaS-complexiteit;
* billing;
* subscriptions;
* productie-deployment;
* `WooCommerce` connector, tenzij later expliciet gepland;
* businesslogica buiten goedgekeurde MVP-stappen;
* `AI`-agenten die autonoom wijzigingen uitvoeren;
* ongetoetste ideeen als productwaarheid.

Daarnaast blijven ook buiten scope:

* brede enterprise-uitbouw;
* losse productexperimenten zonder directe relatie tot `SAM`;
* uitbreidingen die de MVP zwaarder maken zonder aantoonbare marktwaarde.

## Source Authority

Source Authority is verplicht binnen `SAM MVP Release 1`.

De leidende bronvolgorde blijft:

1. klantbron / `PIM` / `ERP`
2. `Excel`- of `CSV`-productfeeds
3. officiele fabrikant- of merkwebsite
4. officiele `PDF`-datasheet, handleiding of productfiche
5. `Word`-documenten met productspecificaties of interne productinformatie
6. leveranciersfeed of distributeurbron
7. bestaande webshopdata
8. handmatige klantinput
9. `AI`-gegenereerd concept als laatste optie

Kernregel:

* klantbron, webshopdata, `PIM`, `ERP` en expliciete operator-input zijn leidend;
* `AI` is niet de primaire waarheid voor feitelijke productinformatie;
* `AI` mag alleen conceptvoorstellen genereren wanneer brondata onvoldoende is;
* `AI`-output moet als `AI CONCEPT` herkenbaar blijven;
* onzekere voorstellen vereisen handmatige review.

## Confidence-niveaus

De volgende confidence-niveaus blijven leidend:

* `HIGH`
  klantbron, `PIM`, `ERP`, officiele fabrikantbron of officiele datasheet
* `MEDIUM`
  betrouwbare leverancier/distributeur of gestructureerde `Excel`/`CSV`-feed
* `LOW`
  bestaande webshopdata, onvolledige bron of losse handmatige input
* `AI CONCEPT`
  gegenereerd voorstel zonder harde bron

## Technische gevolgen van Source Authority

Source Authority heeft ook technische gevolgen, zonder dat dit document de architectuurdetails overneemt.

Vastgelegd blijft:

* bronverwerking hoort niet rechtstreeks in routes;
* `WooCommerce` connector mag geen bronwaarheid bepalen;
* connectors blijven transport-/integratielaag;
* source adapters en proposal-logica moeten gescheiden blijven.

Daarmee wordt bewaakt dat:

* platformkoppelingen geen productwaarheid afdwingen;
* bronkeuze expliciet en toetsbaar blijft;
* proposals herleidbaar blijven naar hun bronbasis.

## Bewuste scope-rem

Nieuwe ideeen worden alleen toegevoegd als ze `SAM` aantoonbaar dichter bij marktintroductie brengen.

Dat betekent:

* eerst de verkoopbare en bruikbare kern afmaken;
* daarna pas uitbreiden;
* geen scopegroei op basis van nieuwsgierigheid alleen;
* geen productverbreding zonder duidelijke relatie met de kernwaarde van `SAM`.

## Relatie tot AXIORA Guardian

`Guardian` is strategisch belangrijk.

Tegelijk blijft vastgelegd:

* `Guardian` wordt nu niet zelfstandig gebouwd;
* lessen uit `SAM` mogen later input worden voor `Guardian`;
* `SAM` heeft prioriteit totdat er een werkend en bruikbaar product staat.

Voor deze fase betekent dit:

* `Guardian` blijft vooral richtinggevend als governance- en denkkader;
* `SAM` blijft de primaire productfocus;
* nieuwe Guardian-achtige ideeen mogen `SAM MVP Release 1` niet vertragen of verbreden zonder expliciet besluit.

## Bronstatus

Dit bestand is opgebouwd uit de documenten die in `docs/DOCS-MIGRATION-MATRIX.md` voor `docs/SCOPE.md` zijn aangewezen:

* `README.md`
* `docs/APPROVED-DECISIONS-INDEX.md`
* `docs/SOURCE-AUTHORITY-GUARDRAIL.md`

Daarnaast zijn meegelezen:

* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`
* `docs/DOCS-MIGRATION-MATRIX.md`

Zij zijn alleen gebruikt om deze scope te laten aansluiten op de huidige consolidatiestructuur en niet als vervanging van de hierboven aangewezen bronset.

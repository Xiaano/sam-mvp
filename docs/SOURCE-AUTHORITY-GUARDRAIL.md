# Source Authority Guardrail - SAM MVP

## 1. Titel

Source Authority Guardrail - SAM MVP

## 2. Status

`APPROVED`

## 3. Kernregel

`SAM` gebruikt `AI` niet als primaire waarheid voor feitelijke productinformatie. `SAM` gebruikt eerst toegestane bronnen en `AI` pas als laatste conceptlaag.

## 4. Bronhierarchie

1. Klantbron / `PIM` / `ERP`
2. `Excel`- of `CSV`-productfeeds
3. Officiele fabrikant- of merkwebsite
4. Officiele `PDF`-datasheet, handleiding of productfiche
5. `Word`-documenten met productspecificaties of interne productinformatie
6. Leveranciersfeed of distributeurbron
7. Bestaande webshopdata
8. Handmatige klantinput
9. `AI`-gegenereerd concept als laatste optie

## 5. Architectuurregel

* source handling hoort niet direct in routes
* source handling mag niet in `WooCommerce` connector worden verstopt
* connectors halen platformdata op
* source adapters verwerken brontypes zoals `Excel`, `PDF`, `Word`, `PIM` of fabrikantbron
* services bepalen welke bron leidend is
* proposals moeten bronvermelding of confidence kunnen tonen
* `AI`-concepten moeten als `AI CONCEPT` gemarkeerd worden

## 6. Confidence-niveaus

* `HIGH`: klantbron, `PIM`, `ERP`, officiele fabrikantbron of officiele datasheet
* `MEDIUM`: betrouwbare leverancier/distributeur of gestructureerde `Excel`/`CSV`-feed
* `LOW`: bestaande webshopdata, onvolledige bron of losse handmatige input
* `AI CONCEPT`: gegenereerd voorstel zonder harde bron

## 7. Governance

* `SAM` verzint geen feitelijke productspecificaties
* technische specificaties moeten herleidbaar zijn naar een bron
* `AI` mag tekst verbeteren, samenvatten of concepten voorstellen
* `AI` mag geen technische waarden gokken
* onzekere voorstellen vereisen handmatige review
* klant bepaalt welke bronnen gebruikt mogen worden
* geen crawling/scraping zonder toestemming

## 8. Buiten scope nu

* volledige `PIM`-integratie
* volledige `PDF`/`Word`/`Excel`-parser
* automatische scraping van merksites
* juridische beoordeling van brongebruik
* automatische publicatie zonder goedkeuring
* `AI` als primaire productdatabron

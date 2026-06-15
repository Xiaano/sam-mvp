# SAM Health Checker Runtime Transition Plan

## Huidige status

De huidige Health Checker-basis is compleet als contract/mock foundation. Read-only contracten, mock flows, reviewlagen en operator-overzicht zijn aanwezig en documentair afgerond.

## Doel van runtime transition

De volgende stap is niet opnieuw contracten stapelen, maar voorzichtig onderzoeken hoe een eerste echte runtime-flow later kan ontstaan zonder de read-only basis te verliezen.

## Wat nog niet gebouwd wordt

Bewust nog niet bouwen:

* database
* Prisma-runtime
* WooCommerce
* AI/OpenAI
* frontend/cockpit
* write actions
* execution

## Mogelijke eerste echte runtime-stap later

Een latere eerste runtime-stap kan bestaan uit:

* interne scan-run structuur
* issue/proposal object lifecycle
* operator review state
* audit event model

## Voorwaarden vóór runtime-implementatie

Voor runtime-implementatie moeten eerst deze punten helder zijn:

* shared response/safety design beoordelen
* datamodel expliciet kiezen
* persistence-grenzen bepalen
* secrets buiten repo houden
* write-actions disabled houden

## Risico’s bij te vroeg bouwen

Te vroeg runtime bouwen kan leiden tot:

* verkeerde modellering
* extra herwerk
* verlies van de huidige read-only helderheid
* te vroege koppeling aan database of execution

## Aanbevolen volgende stap

De volgende stap na dit document is een bewuste keuze tussen:

* shared-contract verfijning
* een kleine runtime-ontwerpschets voor scan-run en review lifecycle
* of een voorbereidende database/persistence-verkenning


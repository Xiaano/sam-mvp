# API First Build Decision - SAM MVP

## 1. Titel

API First Build Decision - SAM MVP

## 2. Status

`APPROVED`

## 3. Besluit

`SAM MVP Release 1` wordt vanaf deze fase `API-first` opgebouwd.

## 4. Reden

De API vormt de functionele ruggengraat van `SAM MVP Release 1`. `SAM` moet eerst producten, scan runs, issues, proposals, beslissingen, executions en history logisch kunnen dragen voordat de cockpit deze informatie zinvol kan tonen.

## 5. Waarom niet web-first

Een cockpit zonder onderliggende API zou vooral een visuele demo zijn. Voor `SAM MVP Release 1` is het belangrijker dat de kernflow inhoudelijk klopt:

* producten ophalen
* issues detecteren
* voorstellen voorbereiden
* beslissingen verwerken
* status bijhouden
* history/audit trail vastleggen

## 6. Wat API-first betekent

API-first betekent in deze fase:

* eerst API-structuur voorbereiden
* daarna datalaag/persistence voorbereiden
* daarna connector-boundary voorbereiden
* daarna pas cockpit aansluiten op echte of gesimuleerde API-data

## 7. Grenzen

* nog geen backendcode in deze stap
* nog geen API-endpoints in deze stap
* nog geen `Fastify`/`Express`-installatie
* nog geen Prisma schema
* connectors blijven vrij van Prisma en databasekennis
* oude `SAM V2` wordt niet gebruikt als codebron
* `Guardian` wordt niet als productmodule meegenomen

## 8. Vervolgactie

Na dit besluit mag een eerste API-structuurvoorbereiding worden gemaakt, zonder dependencies, zonder endpoints en zonder echte backendlogica.

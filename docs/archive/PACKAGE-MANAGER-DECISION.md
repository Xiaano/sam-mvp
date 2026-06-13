# Package Manager Decision - SAM MVP

## 1. Titel

Package Manager Decision - SAM MVP

## 2. Status

`APPROVED`

## 3. Besluit

Gebruik `npm workspaces` als package manager-richting voor `SAM MVP Release 1`.

## 4. Reden

* `npm` is standaard beschikbaar bij `Node.js`
* sluit aan op de bestaande workspaces in `package.json`
* eenvoudig genoeg voor Ricardo om te volgen
* veilig genoeg voor Codex om afgebakend mee te werken
* geen extra package manager complexiteit nodig in `MVP Release 1`

## 5. Niet gekozen

* `pnpm`
* `yarn`
* custom tooling

## 6. Grenzen

* geen installaties in deze stap
* geen dependencies toevoegen in deze stap
* geen frontend/backend scaffolding
* geen Prisma-installatie
* geen oude `SAM V2`-code of structuur gebruiken

## 7. Vervolgactie

Na dit besluit mag pas in een aparte opdracht een eerste gecontroleerde `npm install` worden voorbereid of uitgevoerd.

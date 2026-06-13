# Local tsx Install Steps - SAM MVP

## 1. Titel

Local tsx Install Steps - SAM MVP

## 2. Status

`COMPLETED`

## 3. Reden

De API runtime-strategie is goedgekeurd. Voor lokale ontwikkeling is een lichte `TypeScript` runtime nodig om de `Fastify` API later lokaal te kunnen starten zonder eerst een zware buildpipeline op te zetten. Codex voert geen npm-installaties uit; Ricardo voert lokale installaties uit in normale `PowerShell`.

## 4. Eerste toegestane lokale tsx-installatiestap

Doel:

`tsx` toevoegen als devDependency voor de API workspace.

Commando:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npm install -D tsx -w @sam-mvp/api
```

## 5. Daarna controleren

Commando's:

```powershell
npm ls tsx -w @sam-mvp/api
npm run check
```

## 6. Verwachte uitkomst

* `tsx` staat als devDependency in `sam-mvp/apps/api/package.json`
* `package-lock.json` is bijgewerkt
* `npm run check` blijft slagen
* er is nog geen API startscript
* er is nog geen server runtime-bestand
* er zijn nog geen extra endpoints
* er is nog geen `Prisma`/database/`WooCommerce`-logica

## 7. Uitvoering

Ricardo heeft de installatie lokaal uitgevoerd in normale `PowerShell`.

* `npm run check` is lokaal succesvol uitgevoerd
* Codex heeft geen npm-installaties uitgevoerd
* er is nog geen runtime startbestand, extra endpoints, Prisma of database toegevoegd

## 8. Niet doen

* geen `nodemon` installeren
* geen `ts-node` installeren
* geen backend framework toevoegen
* geen `Prisma` installeren
* geen database installeren
* geen server startbestand maken
* geen routes/endpoints toevoegen
* geen oude `SAM V2`-map gebruiken

## 9. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `npm ls tsx:`
* `npm run check:`
* `tsx toegevoegd: JA/NEE`
* `foutmelding indien aanwezig:`

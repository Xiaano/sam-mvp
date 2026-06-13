# Local Fastify Install Steps - SAM MVP

## 1. Titel

Local Fastify Install Steps - SAM MVP

## 2. Status

`COMPLETED`

## 3. Reden

`Fastify` is goedgekeurd als API-frameworkrichting voor `SAM MVP Release 1`. Codex voert voorlopig geen npm-installaties uit. Lokale npm-acties worden door Ricardo uitgevoerd in normale `PowerShell`.

## 4. Eerste toegestane lokale Fastify-installatiestap

Doel:

`Fastify` toevoegen als runtime dependency voor `apps/api`.

Commando:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npm install fastify -w @sam-mvp/api
```

## 5. Daarna controleren

Commando's:

```powershell
npm ls fastify -w @sam-mvp/api
npm run check
```

## 6. Verwachte uitkomst

* `fastify` staat als dependency in `sam-mvp/apps/api/package.json`
* `package-lock.json` is bijgewerkt
* `npm run check` blijft slagen
* er is nog geen backendcode
* er zijn nog geen API-endpoints
* er is nog geen Prisma schema

## 7. Uitvoering

Ricardo heeft de installatie lokaal uitgevoerd in normale `PowerShell`.

* `fastify: 5.8.5`
* `npm run check: GESLAAGD`
* Codex heeft geen npm-installaties uitgevoerd
* er is nog geen backendcode of endpoints gemaakt

## 8. Niet doen

* geen `Express` installeren
* geen `CORS`-plugin installeren
* geen `Swagger`/`OpenAPI` installeren
* geen Prisma installeren
* geen database installeren
* geen serverbestand maken
* geen routes/endpoints maken
* geen oude `SAM V2`-map gebruiken

## 9. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `npm ls fastify:`
* `npm run check:`
* `fastify toegevoegd: JA/NEE`
* `foutmelding indien aanwezig:`

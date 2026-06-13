# Local Prisma Install Steps - SAM MVP

## 1. Titel

Local Prisma Install Steps - SAM MVP

## 2. Status

`COMPLETED_WITH_WARNINGS`

## 3. Reden

`PostgreSQL` is gekozen als opslagrichting en `Prisma ORM` als toolingrichting. De API draait inmiddels lokaal en `/health` werkt. De volgende stap is `Prisma` tooling lokaal toevoegen, maar nog zonder database, schema, migraties of echte secrets.

## 4. Secrets-regel

* Codex mag geen `.env` lezen, openen, tonen, kopieren of wijzigen.
* In `sam-mvp` mag later alleen `.env.example` komen.
* Echte secrets blijven buiten `sam-mvp`, bijvoorbeeld in `D:\AXIORA_SECRETS\sam-mvp.env`.
* `DATABASE_URL` met echte waarde mag niet in documentatie of `Git` staan.

## 5. Eerste toegestane lokale Prisma-installatiestap

Doel:

`Prisma` tooling toevoegen aan de API workspace.

Commando's:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npm install -D prisma -w @sam-mvp/api
npm install @prisma/client -w @sam-mvp/api
```

## 6. Daarna controleren

Commando's:

```powershell
npm ls prisma -w @sam-mvp/api
npm ls @prisma/client -w @sam-mvp/api
npm run check
```

## 7. Verwachte uitkomst

* `prisma` staat als devDependency in `sam-mvp/apps/api/package.json`
* `@prisma/client` staat als dependency in `sam-mvp/apps/api/package.json`
* `package-lock.json` is bijgewerkt
* `npm run check` blijft slagen
* er is nog geen `Prisma` schema
* er is nog geen database
* er zijn nog geen migraties
* er is nog geen `.env`-bestand in `sam-mvp`

## 8. Uitvoering

Ricardo heeft de installatie lokaal uitgevoerd in normale `PowerShell`.

* `prisma: 7.8.0`
* `@prisma/client: 7.8.0`
* `npm run check: GESLAAGD`
* `EBADENGINE` warning op `@prisma/streams-local`
* `npm audit: 3 moderate vulnerabilities`
* Codex heeft geen npm-installaties uitgevoerd
* er zijn geen schema, database, migraties of `.env` aangemaakt

## 9. Niet doen

* geen `npx prisma init`
* geen `schema.prisma` maken
* geen database maken
* geen `migrate` uitvoeren
* geen `generate` uitvoeren
* geen `.env` maken
* geen echte `DATABASE_URL` opslaan
* geen `WooCommerce` connector maken
* geen oude `SAM V2`-map gebruiken

## 10. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `npm ls prisma:`
* `npm ls @prisma/client:`
* `npm run check:`
* `prisma toegevoegd: JA/NEE`
* `@prisma/client toegevoegd: JA/NEE`
* `.env aanwezig in sam-mvp: JA/NEE`
* `foutmelding indien aanwezig:`

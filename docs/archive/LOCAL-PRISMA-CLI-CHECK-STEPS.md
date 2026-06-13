# Local Prisma CLI Check Steps - SAM MVP

## 1. Titel

Local Prisma CLI Check Steps - SAM MVP

## 2. Status

`COMPLETED`

## 3. Reden

`Prisma` en `@prisma/client` zijn geinstalleerd, maar `npm` gaf een `EBADENGINE` warning op een subdependency. Voordat `schema.prisma`, databaseconnectie of migraties worden toegevoegd, moet lokaal gecontroleerd worden of de `Prisma CLI` correct werkt binnen de huidige `Node`/`npm`-omgeving.

## 4. Huidige bekende versies

* `node: v20.19.0`
* `npm: 10.8.2`
* `prisma: 7.8.0`
* `@prisma/client: 7.8.0`

## 5. Eerste toegestane lokale Prisma CLI-check

Ricardo voert lokaal uit:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npx prisma -v
npm run check
```

## 6. Verwachte uitkomst

* `npx prisma -v` toont Prisma-versie-informatie
* `npm run check` blijft slagen
* er wordt geen `schema.prisma` aangemaakt
* er wordt geen database aangemaakt
* er worden geen migraties uitgevoerd
* er wordt geen `.env` aangemaakt

## 7. Uitvoering

Ricardo heeft de check lokaal uitgevoerd.

* `npx prisma -v` werkte succesvol
* `npm run check` bleef succesvol
* Codex heeft geen npm/npx-commando's uitgevoerd
* er zijn geen schema, database, migraties of `.env` toegevoegd

## 8. Niet doen

* geen `npx prisma init`
* geen `prisma generate`
* geen `prisma migrate`
* geen `prisma db push`
* geen database maken
* geen `.env` maken
* geen `DATABASE_URL` invullen
* geen `npm audit fix`
* geen `npm audit fix --force`
* geen `Node` upgrade
* geen `Prisma` downgrade

## 9. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `npx prisma -v:`
* `npm run check:`
* `Prisma CLI werkt: JA/NEE`
* `schema.prisma aanwezig: JA/NEE`
* `.env aanwezig in sam-mvp: JA/NEE`
* `foutmelding indien aanwezig:`

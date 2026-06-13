# Local Prisma Schema Check Steps - SAM MVP

## 1. Titel

Local Prisma Schema Check Steps - SAM MVP

## 2. Status

`COMPLETED`

## 3. Reden

`schema.prisma v0` is aangemaakt met minimale MVP-modellen en relaties. Voordat er databaseconfiguratie, migrations of `generate` worden toegevoegd, moet lokaal gecontroleerd worden of het schema syntactisch klopt.

## 4. Huidige status

* `schema.prisma` bestaat in `apps/api/prisma/schema.prisma`
* Prisma CLI werkt lokaal
* er is geen database
* er is geen `.env` in `sam-mvp`
* er zijn geen migraties
* er is geen `prisma generate` uitgevoerd

## 5. Eerste toegestane lokale schema-check

Ricardo voert lokaal uit:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npx prisma format --schema apps/api/prisma/schema.prisma
npx prisma validate --schema apps/api/prisma/schema.prisma
npm run check
```

## 6. Verwachte uitkomst

* `prisma format` rondt af zonder foutmelding
* `prisma validate` rondt af zonder foutmelding of geeft alleen een bekende config/database-url waarschuwing
* `npm run check` blijft slagen
* er wordt geen database aangemaakt
* er worden geen migraties uitgevoerd
* er wordt geen Prisma Client gegenereerd
* er wordt geen `.env` aangemaakt

## 7. Uitvoering

Ricardo heeft de schema-check lokaal uitgevoerd.

* `prisma format: GESLAAGD`
* `prisma validate: GESLAAGD`
* `npm run check: GESLAAGD`
* er zijn geen database, migraties, generate of `.env` toegevoegd
* Codex heeft geen npm/npx-commando's uitgevoerd

## 8. Belangrijk

Als `prisma validate` faalt door ontbrekende Prisma config of datasource URL:

* niet zelf oplossen
* geen `.env` maken
* geen `DATABASE_URL` toevoegen
* geen `prisma.config.ts` maken
* foutmelding exact terugrapporteren

## 9. Niet doen

* geen `prisma init`
* geen `prisma generate`
* geen `prisma migrate`
* geen `prisma db push`
* geen database maken
* geen `.env` maken
* geen `DATABASE_URL` invullen
* geen `npm audit fix`
* geen `Node` upgrade
* geen `Prisma` downgrade

## 10. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `prisma format:`
* `prisma validate:`
* `npm run check:`
* `schema gewijzigd door format: JA/NEE/ONBEKEND`
* `schema geldig: JA/NEE`
* `.env aanwezig in sam-mvp: JA/NEE`
* `foutmelding indien aanwezig:`

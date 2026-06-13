# Local Install Steps - SAM MVP

## 1. Titel

Local Install Steps - SAM MVP

## 2. Status

`COMPLETED`

## 3. Reden

Codex voert voorlopig geen npm-installaties uit, omdat npm eerder in de Codex-uitvoercontext faalde op een Windows-permissieprobleem. Lokale npm-acties worden daarom door Ricardo uitgevoerd in normale `PowerShell`.

## 4. Eerste toegestane lokale installatiestap

Doel:

TypeScript als devDependency toevoegen aan de root van de monorepo.

Commando:

```powershell
cd "D:\AXIORA GUARDIAN PRO\sam-mvp"
npm install -D typescript
```

## 5. Daarna controleren

Commando's:

```powershell
npx tsc -v
dir package-lock.json
type package.json
```

## 6. Verwachte uitkomst

* TypeScript staat in `devDependencies` van root `package.json`
* `package-lock.json` is bijgewerkt
* `node_modules` bestaat lokaal, maar staat in `.gitignore`
* er is nog geen app-code
* er zijn nog geen frontend/backend dependencies

## 7. Uitvoering

Ricardo heeft de installatie lokaal uitgevoerd in normale `PowerShell`.

* `node: v20.19.0`
* `npm: 10.8.2`
* `npx tsc -v: Version 6.0.3`
* `foutmelding indien aanwezig: geen`
* Codex heeft geen npm-installaties uitgevoerd
* `npm run check` is lokaal succesvol uitgevoerd
* de TypeScript-basis is nu gevalideerd
* Codex heeft geen npm-commando's uitgevoerd

## 8. Niet doen

* geen React installeren
* geen Vite installeren
* geen backend framework installeren
* geen Prisma installeren
* geen schema maken
* geen oude `SAM V2`-map gebruiken
* geen globale npm-config wijzigen

## 9. Rapportage na lokale uitvoering

Ricardo rapporteert terug:

* `node:`
* `npm:`
* `npx tsc -v:`
* `typescript toegevoegd: JA/NEE`
* `foutmelding indien aanwezig:`

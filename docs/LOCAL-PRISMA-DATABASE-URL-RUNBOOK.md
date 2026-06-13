# Local Prisma DATABASE_URL Runbook - SAM MVP

## Status

APPROVED

## Context

De lokale PostgreSQL-container is succesvol gestart en gevalideerd.

De databaseverbinding is handmatig gecontroleerd.

Geverifieerd:

* database: sam_mvp_dev
* user: sam_mvp_local
* hostpoort: 5433
* container: sam-mvp-postgres
* status: healthy

Er is nog geen Prisma migrate uitgevoerd.

Er is nog geen Prisma generate uitgevoerd.

Er is nog geen Prisma db push uitgevoerd.

Er is geen .env in sam-mvp.

Echte secrets blijven buiten sam-mvp.

## Besluit

Prisma mag later verbinding maken met lokale PostgreSQL via DATABASE_URL, maar DATABASE_URL blijft buiten sam-mvp.

Codex mag DATABASE_URL niet lezen, tonen, kopiëren, opslaan of wijzigen.

Ricardo beheert DATABASE_URL handmatig buiten de repository.

## Veilige richting

DATABASE_URL wordt later handmatig gezet als tijdelijke PowerShell-sessievariabele.

Conceptueel patroon zonder echte secrets:

```powershell
$env:DATABASE_URL="postgresql://<user>:<password>@localhost:5433/sam_mvp_dev?schema=public"
```

De echte waarde wordt niet in documentatie opgeslagen.

De echte waarde wordt niet in sam-mvp opgeslagen.

De echte waarde wordt niet aan Codex gegeven.

## Belangrijke grens

Er komt geen .env in sam-mvp.

.env.example mag alleen lege placeholders bevatten.

Prisma gebruikt later alleen tijdelijke lokale environment values of extern beheerde secrets.

## Niet doen in deze stap

* geen DATABASE_URL maken
* geen echte secrets opslaan
* geen .env maken
* geen Prisma uitvoeren
* geen migrate uitvoeren
* geen generate uitvoeren
* geen db push uitvoeren
* geen schema wijzigen
* geen database wijzigen

## Governance

DATABASE_URL is infrastructuurconfiguratie, geen applicatielogica.

Secrets horen buiten de repository.

Databaseconfiguratie blijft gescheiden van connectors.

WooCommerce connector blijft buiten scope.

Source Authority blijft leidend voor productwaarheid.

Geen oude SAM V2-database kopiëren.

## Conclusie

SAM MVP mag later Prisma verbinden met lokale PostgreSQL, maar alleen via een extern beheerde DATABASE_URL en pas na aparte expliciete toestemming.

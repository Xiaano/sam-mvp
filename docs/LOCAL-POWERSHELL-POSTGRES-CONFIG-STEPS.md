# Local PowerShell PostgreSQL Config Steps - SAM MVP

Status: APPROVED

## Context

* `docker-compose.yml` is voorbereid
* Docker is nog niet gestart
* database bestaat nog niet
* secrets blijven buiten `sam-mvp`
* Codex mag geen `.env` of secrets lezen

## Benodigde variabelen

* `POSTGRES_DB`
* `POSTGRES_USER`
* `POSTGRES_PASSWORD`
* `POSTGRES_HOST_PORT`

## Conceptuele PowerShell-voorbeelden zonder echte secrets

```powershell
$env:POSTGRES_DB="sam_mvp_dev"
$env:POSTGRES_USER="<local_user>"
$env:POSTGRES_PASSWORD="<local_password>"
$env:POSTGRES_HOST_PORT="5433"
```

## Uitleg

* Deze waarden worden alleen tijdelijk in de `PowerShell`-sessie gezet.
* Echte waarden kiest Ricardo zelf.
* Wachtwoorden worden nooit in documentatie opgeslagen.
* `DATABASE_URL` komt later pas, buiten `sam-mvp`.
* Docker mag pas gestart worden na aparte expliciete toestemming.

## Niet doen

* geen Docker starten
* geen `docker compose` uitvoeren
* geen `.env` maken
* geen secrets opslaan
* geen database maken
* geen Prisma uitvoeren

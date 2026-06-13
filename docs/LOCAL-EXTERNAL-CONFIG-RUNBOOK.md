# Local External Config Runbook - SAM MVP

## Status

APPROVED

## Context

SAM MVP heeft een voorbereide docker-compose.yml voor lokale PostgreSQL.

Docker is nog niet gestart.

Er is nog geen PostgreSQL-container.

Er is nog geen Docker-volume.

Er is geen .env in sam-mvp.

Echte secrets blijven buiten sam-mvp.

## Besluit

Lokale configuratiewaarden worden buiten sam-mvp beheerd.

Codex mag deze waarden niet lezen, openen, tonen, kopiëren of wijzigen.

Ricardo beheert echte waarden lokaal, bijvoorbeeld via:

* PowerShell sessievariabelen
* een lokaal secrets-bestand buiten sam-mvp
* wachtwoordmanager

Voorbeeldlocatie buiten sam-mvp:

D:\AXIORA_SECRETS\sam-mvp.env

Deze locatie is alleen een voorbeeld en mag niet door Codex worden geopend.

## Waarden die later nodig zijn

Voor Docker/PostgreSQL:

* POSTGRES_DB
* POSTGRES_USER
* POSTGRES_PASSWORD
* POSTGRES_HOST_PORT

Voor Prisma/API:

* DATABASE_URL

## Veilige standaardrichting

Conceptueel later:

* POSTGRES_DB: sam_mvp_dev
* POSTGRES_HOST_PORT: 5433

POSTGRES_USER wordt later door Ricardo gekozen.

POSTGRES_PASSWORD wordt nooit in documentatie opgeslagen.

DATABASE_URL wordt later door Ricardo samengesteld buiten sam-mvp.

## Belangrijke grens

Er komt geen .env in sam-mvp.

docker-compose.yml gebruikt alleen placeholders.

Echte waarden worden niet in Git opgeslagen.

Echte waarden worden niet in documentatie opgeslagen.

Codex mag geen secrets zien.

## Latere handmatige PowerShell-richting

Wanneer expliciet toegestaan, kan Ricardo later zelf tijdelijke PowerShell-variabelen zetten voordat Docker wordt gestart.

Conceptueel voorbeeld zonder echte secrets:

$env:POSTGRES_DB="sam_mvp_dev"
$env:POSTGRES_USER="<local_user>"
$env:POSTGRES_PASSWORD="<local_password>"
$env:POSTGRES_HOST_PORT="5433"

Daarna mag Docker pas gestart worden na aparte expliciete toestemming.

## Niet doen in deze stap

* geen .env maken
* geen secrets maken
* geen DATABASE_URL maken
* geen Docker uitvoeren
* geen docker compose uitvoeren
* geen database maken
* geen container starten
* geen volume maken
* geen Prisma-commando uitvoeren

## Governance

Secrets horen buiten de repository.

Databaseconfiguratie hoort bij infrastructuur.

Applicatiecode mag niet afhankelijk worden van hardcoded lokale waarden.

Connectors blijven vrij van Prisma en databasekennis.

WooCommerce connector komt later apart.

Source Authority blijft leidend voor productwaarheid.

Geen oude SAM V2-database kopiëren.

## Conclusie

SAM MVP mag lokale PostgreSQL-configuratie gebruiken, maar echte waarden blijven volledig buiten sam-mvp en buiten Codex-zicht.

# Local Docker PostgreSQL Compose Strategy - SAM MVP

## Status

APPROVED

## Context

SAM MVP gebruikt PostgreSQL als toekomstige lokale ontwikkel- en testdatabase.

De lokale PostgreSQL-strategie is al goedgekeurd.

Er is nog geen database.

Er is nog geen Docker-configuratie.

docker-compose.yml is voorbereid, maar nog niet uitgevoerd.

Er is geen .env in sam-mvp.

Echte secrets blijven buiten sam-mvp.

## Besluit

Voor lokale ontwikkeling wordt Docker de voorkeursroute voor PostgreSQL.

Docker wordt gebruikt om lokale database-inrichting reproduceerbaar, controleerbaar en verwijderbaar te maken.

In deze stap wordt geen Docker gestart en wordt geen compose-configuratie uitgevoerd.

Deze stap legt de veilige voorbereiding vast voor de latere Docker/PostgreSQL-configuratie.

## Toekomstige compose-richting

Een latere docker-compose.yml krijgt waarschijnlijk één PostgreSQL-service.

Conceptuele richting:

* service: postgres
* image: postgres, exacte versie later bepalen
* database: sam_mvp_dev
* container database poort: 5432
* host poort: later definitief bepalen

Omdat lokale ontwikkelomgevingen al bestaande PostgreSQL-instanties kunnen hebben, mag de hostpoort later afwijken van 5432, bijvoorbeeld 5433.

Poortkeuze wordt pas definitief gemaakt wanneer Docker-configuratie daadwerkelijk wordt voorbereid.

## Volumes

Later wordt waarschijnlijk een named Docker volume gebruikt voor lokale PostgreSQL-data.

De volumenaam wordt later bepaald.

Er wordt nu geen volume aangemaakt.

## Secrets-regel

Echte DATABASE_URL blijft buiten sam-mvp.

docker-compose.yml mag later geen echte wachtwoorden bevatten.

Wachtwoorden komen niet hardcoded in documentatie.

In sam-mvp staat alleen .env.example met lege waarden.

Codex mag geen .env lezen, openen, tonen, kopiëren of wijzigen.

Echte secrets worden lokaal door Ricardo beheerd, bijvoorbeeld in:

D:\AXIORA_SECRETS\sam-mvp.env

of in een wachtwoordmanager.

## Waarom Docker

Docker wordt gekozen als voorkeursroute omdat het zorgt voor:

* reproduceerbare lokale database
* makkelijk resetbare ontwikkelomgeving
* scheiding van productie/staging
* geen afhankelijkheid van oude SAM V2-database
* geen handmatige installatie van PostgreSQL binnen het project
* duidelijke scheiding tussen code, configuratie en secrets

## Niet doen zolang deze strategie alleen documentatie is

* geen docker-compose.yml uitvoeren
* geen Docker container starten
* geen database maken
* geen Docker volume maken
* geen .env maken
* geen echte DATABASE_URL opslaan
* geen prisma migrate
* geen prisma db push
* geen prisma generate

## Governance

Database hoort bij persistence/data-access.

Connectors blijven vrij van Prisma en databasekennis.

WooCommerce connector komt later apart.

Source Authority blijft leidend voor productwaarheid.

Er wordt geen oude SAM V2-database gekopieerd.

Docker is infrastructuur, geen productlogica.

Compose-configuratie wordt pas in een aparte gecontroleerde stap toegevoegd.

## Latere volgorde

Stap 1:
Docker/PostgreSQL compose-strategie vastleggen.

Stap 2:
docker-compose.yml voorbereiden zonder echte secrets.

Stap 3:
.env.example controleren of DATABASE_URL-placeholder correct is.

Stap 4:
Ricardo beheert echte DATABASE_URL buiten sam-mvp.

Stap 5:
Docker container pas starten na expliciete toestemming.

Stap 6:
Prisma migratie/generate pas overwegen nadat Docker/PostgreSQL lokaal gecontroleerd werkt.

## Conclusie

SAM MVP mag Docker als voorkeursroute gebruiken voor lokale PostgreSQL, maar docker-compose.yml, containers, volumes, poorten en secrets worden pas in aparte gecontroleerde stappen toegevoegd.

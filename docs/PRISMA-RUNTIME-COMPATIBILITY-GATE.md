# Prisma Runtime Compatibility Gate - SAM MVP

## 1. Titel

Prisma Runtime Compatibility Gate - SAM MVP

## 2. Status

`PASSED_WITH_WARNINGS`

## 3. Context

`Prisma` is lokaal door Ricardo geinstalleerd in `@sam-mvp/api`.

Vastgestelde versies:

* `node: v20.19.0`
* `npm: 10.8.2`
* `prisma: 7.8.0`
* `@prisma/client: 7.8.0`

Installatie-uitkomst:

* installatie gelukt
* `npm run check` geslaagd
* geen `schema.prisma` aanwezig
* geen database aanwezig
* geen migraties uitgevoerd
* geen `.env` in `sam-mvp`

## 4. Waarschuwing

Tijdens installatie gaf `npm` een `EBADENGINE` warning voor:

`@prisma/streams-local@0.1.2`

Melding:

* required: `node >=22.0.0` of `bun >=1.3.6`
* current: `node v20.19.0`, `npm 10.8.2`

Daarnaast meldde `npm`:

* `3 moderate severity vulnerabilities`

## 5. Besluit tot gate

Voordat `schema.prisma`, `Prisma generate`, databaseconnectie of migraties worden toegevoegd, moet deze waarschuwing bewust worden beoordeeld.

Vastgelegd:

* Prisma CLI werkt lokaal
* `npm run check` slaagt
* `EBADENGINE` warning blijft genoteerd als aandachtspunt, maar blokkeert de volgende voorbereidende documentatiestap niet
* `npm audit` warnings blijven genoteerd als later security/audit punt
* nog geen schema/database/migraties toegestaan zonder aparte opdracht

## 6. Mogelijke routes later

`A. Doorgaan met Node 20.19.0 en Prisma 7.8.0`

* Alleen als een minimale Prisma runtime-check later slaagt.
* Geen schema of migratie voordat dit expliciet wordt goedgekeurd.

`B. Node later verhogen naar Node 22 LTS`

* Alleen na apart besluit.
* Kan gevolgen hebben voor lokale omgeving, hosting en deployment.

`C. Prisma versie pinnen of downgraden`

* Alleen na apart besluit.
* Alleen als `Node 20` compatibility of audit-risico's problematisch blijken.

## 7. Niet doen zolang gate open is

* geen `schema.prisma` maken
* geen `prisma generate`
* geen `prisma migrate`
* geen database aanmaken
* geen `Prisma Client` gebruiken in runtimecode
* geen `npm audit fix`
* geen `npm audit fix --force`
* geen `Node` upgrade zonder besluit

## 8. Veilig vervolg

De volgende veilige stap is een apart besluitdocument waarin wordt gekozen:

* eerst minimale Prisma runtime-check voorbereiden
* of `Node`/`Prisma` versiebeleid aanpassen

## 9. Conclusie

`Prisma` is geinstalleerd en de minimale CLI-compatibility check is geslaagd, maar de runtime compatibility gate blijft als `PASSED_WITH_WARNINGS` gemarkeerd totdat de `EBADENGINE` warning en audit-meldingen inhoudelijk zijn beoordeeld.

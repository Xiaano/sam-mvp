# Local API TypeScript Validation Plan - SAM MVP

## Status

APPROVED FOR NEXT STEP

## Context

De centrale Prisma client module is aangemaakt en statisch gevalideerd.

Er is nog geen TypeScript/build-check uitgevoerd na toevoeging van:

`apps/api/src/persistence/prismaClient.ts`

## Inspectie

* Bekeken `package.json`-bestanden: `sam-mvp/package.json` en `sam-mvp/apps/api/package.json`.
* Relevante scripts: root `check`, root `check:ts`, en API-workspace `check`.
* Voor `apps/api` geldt `sam-mvp/apps/api/tsconfig.json`, met `extends` naar `../../tsconfig.base.json` en `module` plus `moduleResolution` op `NodeNext`.
* De huidige foutgrens zit in de Prisma 7 constructor/adaptor boundary van `apps/api/src/persistence/prismaClient.ts`.
* `@prisma/adapter-pg` is nog geen dependency.
* `pg` is nog geen dependency.
* Expliciete Node type-definities zijn niet zichtbaar in de huidige package-configuratie.
* Daardoor is eerst een aparte dependency-beslissing nodig voordat een veilige code-aanpassing of herhaalde TypeScript-validatie logisch is.

## Voorgestelde vervolgstap

Eerst aandachtspunt:

Een aparte dependency-beslissing is nodig voor Prisma 7 runtime-initialisatie, omdat de huidige repo-inspectie geen beschikbare `@prisma/adapter-pg`- of `pg`-dependency laat zien en de huidige TypeScript-fout daardoor niet veilig binnen deze stap kan worden opgelost.

Pas daarna kan Ricardo later opnieuw handmatig valideren met:

`npm run check -w @sam-mvp/api`

## Grenzen

Deze stap voert geen npm uit.

Deze stap voert geen npx uit.

Deze stap wijzigt geen code.

Deze stap wijzigt geen package.json.

Deze stap voert geen Prisma uit.

Deze stap wijzigt geen database.

Er is geen databaseactie uitgevoerd.

Er zijn geen secrets betrokken.

## Conclusie

De API TypeScript-validatie mag pas na deze planstap en na een aparte dependency-beslissing handmatig worden uitgevoerd door Ricardo.

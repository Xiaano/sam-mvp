# GitHub Ready Check

## Korte samenvatting

De lokale `sam-mvp`-map is grotendeels netjes voorbereid voor een eerste GitHub-commit: `.gitignore` is aanwezig en de belangrijkste secret-, environment- en generated-outputregels staan erin. Er zijn geen verdachte secretbestanden aangetroffen binnen de gecontroleerde bestandsnamen, behalve de toegestane `.env.example`. De actieve documentatie bevat geen absolute lokale Windows-links meer.

De belangrijkste blokkade is dat `git status` en `git remote -v` niet uitgevoerd konden worden binnen `sam-mvp`, omdat de map op dit moment geen geïnitialiseerde git-repository lijkt te zijn.

## Gecontroleerde punten

* `.gitignore` bestaat
* `.gitignore` sluit minimaal uit:
  * `.env`
  * `.env.*`
  * `!.env.example`
  * `secrets/`
  * `*.pem`
  * `*.key`
  * `*.p12`
  * `*.crt`
  * `node_modules/`
  * `dist/`
  * `build/`
  * `.turbo/`
  * `.next/`
  * `.vite/`
  * `apps/api/src/generated/prisma/`
* `.env.example` blijft toegestaan
* gecontroleerde bestandsnamen/paden leverden alleen deze `.env`-achtige match op:
  * `.env.example`
* `docs/archive/` is bewust aanwezig
* actieve documentatie bevat geen absolute lokale Windows-links meer

## Gevonden risico’s

* `sam-mvp` lijkt lokaal nog geen git-repository te zijn:
  * `git status --short --branch` gaf: `fatal: not a git repository (or any of the parent directories): .git`
  * `git remote -v` gaf dezelfde fout
* Daardoor kon niet bevestigd worden:
  * of git al geïnitialiseerd is;
  * of er al een remote bestaat;
  * welke tracked/untracked bestanden git precies zou meenemen bij een eerste commit
* In `docs/archive/` staan nog historische documenten met lokale Windows-paden in voorbeeldcommando’s. Dat is op zichzelf geen active-doc probleem, maar het blijft wel commitbare documentatie die later bewust beoordeeld kan worden.

## Eventuele .gitignore-aanpassingen

Geen aanpassing nodig.

De huidige `.gitignore` bevat al de noodzakelijke environment-, secret-, cache- en generated-outputregels voor deze controle.

## Bestanden/mappen die bewust niet zijn gelezen

* inhoud van `.env`-bestanden
* inhoud van secret-, key- of certificaatbestanden
* inhoud van bestanden onder `secrets/`, indien aanwezig

Controle vond alleen plaats op bestandsnamen en paden waar relevant.

## Advies vóór eerste commit

* initialiseer eerst lokaal git in `sam-mvp`, als dat bewust de repository-root moet zijn
* controleer daarna opnieuw:
  * `git status`
  * `git remote -v`
* beoordeel vervolgens expliciet of `docs/archive/` in de eerste commit mee moet, of pas in een latere documentatiecommit
* houd secretsbeleid ongewijzigd:
  * alleen `.env.example` in de repo
  * geen echte `.env`
  * geen echte secrets

## Aanbevolen eerste commit-scope

Een veilige eerste commit-scope lijkt:

* kernstructuur van de monorepo
* actieve documentatie onder `docs/`
* `README.md`
* configuratiebestanden zoals `.gitignore`, `.editorconfig`, `package.json`, `package-lock.json`, `tsconfig`-bestanden en `docker-compose.yml`
* gecontroleerde API-basiscode en Prisma-schema/migrations

Controlepunt vóór commit:

* bevestig eerst via git-status welke bestanden daadwerkelijk meegenomen worden

## Expliciet niet uitgevoerd

* geen commit uitgevoerd
* geen push uitgevoerd
* geen remote toegevoegd
* geen GitHub-login uitgevoerd
* geen GitHub CLI gebruikt

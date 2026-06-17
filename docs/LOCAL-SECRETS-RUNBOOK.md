# Local Secrets Runbook

## Status

* Status: RUNBOOK / LOCAL ONLY
* Scope: Local secrets handling for future read-only checks
* Product priority: SAM Health Checker first
* Repository impact: No real secrets in repo
* Activation rule: Secrets are managed manually by Ricardo outside the repo

## Core Rules

* Echte secrets mogen nooit in de repo.
* Codex mag nooit `.env`, `.env.*`, keys, tokens, certificaten of secrets openen, lezen, tonen, kopieren of wijzigen.
* Secrets worden alleen lokaal handmatig door Ricardo beheerd.
* Voorbeeld externe locatie: `D:\AXIORA_SECRETS\sam-mvp.env`
* Dit runbook bevat geen echte waarden.
* Maak geen `.env` aan in `sam-mvp`.
* Alleen `.env.example` mag in de repo.
* Secrets mogen niet verschijnen in docs, `package.json`, `.vscode/tasks.json`, scripts, screenshots, logs of chat.

## Wat Telt Als Secret

* WooCommerce consumer key/secret
* Database URL
* OpenAI/API keys
* JWT/auth secrets
* Certificaten/private keys
* Tokens
* Alles wat toegang geeft tot systemen, data, geld of klantomgevingen

## Veilige Placeholder-Richtlijn

Gebruik alleen placeholders in documentatie of voorbeeldtekst:

* `<WC_BASE_URL>`
* `<WC_CONSUMER_KEY>`
* `<WC_CONSUMER_SECRET>`

Neem geen echte values op.

Gebruik geen voorbeeldcommando's die `.env`-inhoud printen.

Gebruik geen `Get-Content` voorbeeld dat secrets toont.

## WooCommerce Testvolgorde

1. Missing-config path is al veilig bewezen.
2. Secrets later handmatig buiten repo laden.
3. API starten vanuit dezelfde lokale sessie.
4. Eerst alleen `GET /api/health-checker/woocommerce-config-readiness`.
5. Daarna pas eventueel `GET /api/health-checker/woocommerce-connection-readiness`.
6. Nog geen productscan.
7. Nog geen proposal-preview op WooCommerce-data.
8. Geen write/rewrite/execution.

## Stopregels

Stop direct als:

* secrets zichtbaar worden;
* secrets in git status, diff of docs verschijnen;
* Codex `.env` of secrets wil openen;
* `secretsExposed` `true` wordt;
* `writeScopeEnabled` `true` wordt;
* een WooCommerce API-call te vroeg gebeurt.

## Boundaries

* Geen live WooCommerce test zonder expliciete opdracht.
* Geen externe API-call zonder expliciete opdracht.
* Geen productscan zonder aparte micro-scope.
* Geen proposal-preview op WooCommerce-data zonder aparte micro-scope.
* Geen database/Prisma-stap zonder aparte `DB1`-opdracht.
* Geen write/rewrite/execution zonder aparte `W1`-opdracht.

## Huidige Stand

* `GET /api/health-checker/woocommerce-config-readiness` is zonder WooCommerce-config veilig gecontroleerd.
* De route faalt dicht met `missing_config`.
* Er zijn geen secrets getoond.
* Er is geen WooCommerce API-call gedaan.
* Er is geen write-scope geopend.
* Er is geen productscan of proposal-preview uitgevoerd.

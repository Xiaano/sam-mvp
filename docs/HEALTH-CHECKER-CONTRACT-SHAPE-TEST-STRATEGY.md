# SAM Health Checker Contract Shape Test Strategy

## Doel

Deze strategie beschrijft alleen welke contract-/mappingroutes later minimaal shape-tested mogen worden. Er wordt geen testcode toegevoegd.

## Te behandelen routes

De volgende statische contract-/mappingroutes mogen later shape-tested worden:

- `GET /api/health-checker/proposal-contract`
- `GET /api/health-checker/operator-review-contract`
- `GET /api/health-checker/approval-flow-contract`
- `GET /api/health-checker/audit-log-contract`
- `GET /api/health-checker/issue-proposal-mapping`
- `GET /api/health-checker/issue-classification`

## Wat shape-tests mogen bewaken

Contract-shape tests mogen alleen contractvorm, metadata, verplichte velden en statische grenzen bewaken, zoals:

- `statusCode=200`
- vaste `service`/`status`/`mode`-achtige metadata waar aanwezig
- aanwezigheid van contractsecties
- aanwezigheid van issue-, proposal-, review- en auditdefinities
- expliciete disabled/blocked execution-semantiek waar aanwezig
- geen write/action-endpointgedrag

## Wat shape-tests niet zijn

Contract-shape tests zijn niet hetzelfde als mock endpoint runtime checks en betekenen geen service-adoptie.

## Contractgrenzen

De contractroutes blijven statisch. De tests mogen niet bewaken of afdwingen dat contractroutes mock/runtime-data gebruiken.

Ze mogen ook geen database, Prisma, WooCommerce, AI/OpenAI, write/execution of secrets raken.

Contract-shape tests mogen geen echte businesslogica, execution, approval-uitvoering of adapter-/servicegrens testen.

## Scopegrenzen

Eventuele testimplementatie mag pas na een apart besluitdocument. Deze strategie staat geen testcode toe en ook geen routewijzigingen, refactor, shared helper of serverregistratiewijzigingen.

## Minimale shape-aspecten

Later zijn de volgende shape-aspecten logisch:

- `statusCode=200`
- vaste `service`/`status`/`mode`-metadata waar aanwezig
- aanwezigheid van contractsecties
- aanwezigheid van issue/proposal/review/audit-definities
- expliciete disabled of blocked execution-semantiek waar aanwezig
- geen write/action-endpointgedrag

## Bevestiging

Dit is alleen een contract-shape teststrategie. Geen testcode, code, runtime of secrets zijn geraakt. Mock/runtime en contractlagen blijven gescheiden.

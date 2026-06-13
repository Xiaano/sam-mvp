# Archive Candidates

## Doel

Dit document is alleen een voorstel voor latere archivering van oude losse documentatiebestanden. Er worden in deze stap geen bestanden verplaatst, verwijderd of gearchiveerd.

## Voorstel per document

| Bestand | Status | Reden | Inhoud nu gedragen door | Voorwaarde vóór daadwerkelijk archiveren |
| --- | --- | --- | --- | --- |
| `docs/README.md` | veilig archiveerbaar | kernregel is inmiddels overgenomen in de geconsolideerde workflow- en statusdocumentatie | `docs/CODEX-WORKFLOW.md`, `docs/CURRENT-STATUS.md` | nog één keer controleren dat de regel over “geen losse ideeën zonder besluit” voldoende zichtbaar blijft |
| `docs/DOCS-PIPELINE-PROPOSAL.md` | veilig archiveerbaar | eerste vereenvoudigingsvoorstel is opgevolgd door migratiematrix en geconsolideerde kernbestanden | `docs/DOCS-MIGRATION-MATRIX.md`, `docs/CODEX-WORKFLOW.md` | alleen archiveren nadat de huidige kernset als leidend is bevestigd |
| `docs/API-FIRST-BUILD-DECISION.md` | veilig archiveerbaar | API-first besluit is geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/API-PLAN.md` | controleren dat geen unieke formulering meer alleen hier staat |
| `docs/API-FRAMEWORK-DECISION.md` | veilig archiveerbaar | Fastify-besluit en route-boundaries zijn geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/API-PLAN.md` | controleren dat alle boundaryregels terugkomen in de kernbestanden |
| `docs/API-RUNTIME-STRATEGY-DECISION.md` | veilig archiveerbaar | runtime-richting via `tsx` en health-testcontext zijn geconsolideerd | `docs/API-PLAN.md`, `docs/BUILD-LOG.md` | controleren dat de runtimevolgorde voldoende herkenbaar blijft |
| `docs/ENVIRONMENT-BLOCKERS.md` | veilig archiveerbaar | blockerhistorie en warnings zijn nu gescheiden opgenomen als status- en bouwgeschiedeniscontext | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/TEST-STRATEGY.md` | controleren dat de `EPERM`-historie en Prisma warnings auditmatig zichtbaar blijven |
| `docs/LOCAL-API-TYPESCRIPT-VALIDATION-PLAN.md` | veilig archiveerbaar | tussenstap is historisch geworden | `docs/TEST-STRATEGY.md`, `docs/BUILD-LOG.md` | alleen archiveren als de tijdelijke planstatus niet meer als actuele actie nodig is |
| `docs/LOCAL-DOCKER-POSTGRES-COMPOSE-STRATEGY.md` | veilig archiveerbaar | compose-richting is technisch en documentair geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/DATABASE-SCHEMA.md`, `docs/CODEX-WORKFLOW.md` | controleren dat `postgres:16-alpine` en poortcontext elders voldoende zijn vastgelegd |
| `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md` | controle nodig | secrets- en externe configregels zijn grotendeels overgenomen, maar dit document heeft nog concrete operationele nuance | `docs/CODEX-WORKFLOW.md`, `docs/CURRENT-STATUS.md`, `docs/DATABASE-SCHEMA.md` | eerst controleren of voorbeeldlocaties en externe-configuurnuance elders volledig genoeg zijn |
| `docs/LOCAL-FASTIFY-INSTALL-STEPS.md` | veilig archiveerbaar | installatiestap is historische bouwcontext | `docs/BUILD-LOG.md` | geen |
| `docs/LOCAL-INSTALL-STEPS.md` | veilig archiveerbaar | TypeScript-installatiestap is historische bouwcontext | `docs/BUILD-LOG.md`, `docs/TEST-STRATEGY.md` | geen |
| `docs/LOCAL-POSTGRES-RUNTIME-VALIDATION.md` | veilig archiveerbaar | runtimevalidatie is als statusfeit en bouwgeschiedenis overgenomen | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-POSTGRES-STRATEGY.md` | veilig archiveerbaar | lokale PostgreSQL-richting is geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/DATABASE-SCHEMA.md`, `docs/CODEX-WORKFLOW.md` | geen |
| `docs/LOCAL-POSTGRES-TABLES-VALIDATION.md` | veilig archiveerbaar | tabelvalidatie is geconsolideerd als status en historie | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md` | controle nodig | tijdelijke PowerShell-sessievariabelen zijn beschreven, maar operationele nuance kan nog nuttig zijn | `docs/CODEX-WORKFLOW.md`, `docs/DATABASE-SCHEMA.md` | eerst controleren of de PowerShell-richting elders concreet genoeg blijft |
| `docs/LOCAL-PRISMA-ADAPTER-DEPENDENCY-DECISION.md` | veilig archiveerbaar | dependencygrens is historische bouwcontext geworden | `docs/BUILD-LOG.md`, `docs/TEST-STRATEGY.md`, `docs/API-PLAN.md` | geen |
| `docs/LOCAL-PRISMA-APP-INTEGRATION-PLAN.md` | veilig archiveerbaar | Prisma-via-persistence-plan is geconsolideerd | `docs/API-PLAN.md`, `docs/TECHNICAL-ARCHITECTURE.md`, `docs/DATABASE-SCHEMA.md` | controleren dat voorkeurslocatie `apps/api/src/persistence/prismaClient.ts` zichtbaar blijft |
| `docs/LOCAL-PRISMA-CLI-CHECK-STEPS.md` | veilig archiveerbaar | CLI-check is historische validatiecontext | `docs/BUILD-LOG.md`, `docs/TEST-STRATEGY.md` | geen |
| `docs/LOCAL-PRISMA-CLIENT-MODULE-VALIDATION.md` | veilig archiveerbaar | modulevalidatie is historische bouwcontext | `docs/BUILD-LOG.md`, `docs/API-PLAN.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md` | controle nodig | strikte `DATABASE_URL`-grenzen zijn overgenomen, maar dit document bevat nog concrete operationele nuance | `docs/CODEX-WORKFLOW.md`, `docs/DATABASE-SCHEMA.md` | eerst controleren of tijdelijke lokale `DATABASE_URL`-richting elders volledig genoeg is |
| `docs/LOCAL-PRISMA-GENERATE-VALIDATION.md` | veilig archiveerbaar | generate-validatie is geconsolideerd | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-GENERATED-CLIENT-OUTPUT-VALIDATION.md` | veilig archiveerbaar | generated output-beleid is geconsolideerd | `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-INSTALL-STEPS.md` | veilig archiveerbaar | installatiestap en warnings zijn historische bouwcontext | `docs/BUILD-LOG.md`, `docs/CURRENT-STATUS.md`, `docs/TEST-STRATEGY.md` | geen |
| `docs/LOCAL-PRISMA-MIGRATION-APPLIED-VALIDATION.md` | veilig archiveerbaar | migratie-apply is geconsolideerd als status en historie | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-MIGRATION-CREATE-ONLY-VALIDATION.md` | veilig archiveerbaar | create-only validatie is historische auditcontext | `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-MIGRATION-PLAN.md` | veilig archiveerbaar | migratiebeleid is geconsolideerd | `docs/DATABASE-SCHEMA.md`, `docs/TEST-STRATEGY.md`, `docs/BUILD-LOG.md` | geen |
| `docs/LOCAL-PRISMA-SCHEMA-CHECK-STEPS.md` | veilig archiveerbaar | schema-check is historische validatiecontext | `docs/BUILD-LOG.md`, `docs/TEST-STRATEGY.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-PRISMA-SCHEMA-VALIDATION-WITH-DATABASE-URL.md` | veilig archiveerbaar | validatie met externe `DATABASE_URL` is geconsolideerd | `docs/CURRENT-STATUS.md`, `docs/BUILD-LOG.md`, `docs/DATABASE-SCHEMA.md` | geen |
| `docs/LOCAL-TSX-INSTALL-STEPS.md` | veilig archiveerbaar | tsx-installatiestap is historische bouwcontext | `docs/BUILD-LOG.md`, `docs/API-PLAN.md` | geen |
| `docs/PACKAGE-MANAGER-DECISION.md` | veilig archiveerbaar | package-manager-keuze is geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/CODEX-WORKFLOW.md`, `docs/APPROVED-DECISIONS-INDEX.md` | geen |
| `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md` | controle nodig | warnings en gate-status zijn geconsolideerd, maar dit document heeft nog zelfstandige auditwaarde | `docs/CURRENT-STATUS.md`, `docs/TEST-STRATEGY.md`, `docs/DATABASE-SCHEMA.md` | eerst controleren of de gate als apart auditdocument nog gewenst blijft |
| `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md` | controle nodig | veel inhoud is geconsolideerd, maar het document heeft nog waarde als expliciete v7-beslisbron | `docs/DATABASE-SCHEMA.md`, `docs/TECHNICAL-ARCHITECTURE.md`, `docs/APPROVED-DECISIONS-INDEX.md` | eerst controleren of de expliciete Prisma 7-beslisbron apart bewaard moet blijven |
| `docs/SOURCE-AUTHORITY-GUARDRAIL.md` | controle nodig | Source Authority is geconsolideerd, maar dit document is nog een sterke zelfstandige guardrailbron | `docs/SCOPE.md`, `docs/TECHNICAL-ARCHITECTURE.md`, `docs/API-PLAN.md`, `docs/APPROVED-DECISIONS-INDEX.md` | eerst controleren of een apart guardraildocument wenselijk blijft voor governance |
| `docs/TYPESCRIPT-DECISION.md` | veilig archiveerbaar | taalkeuze is geconsolideerd | `docs/TECHNICAL-ARCHITECTURE.md`, `docs/APPROVED-DECISIONS-INDEX.md` | geen |

## Niet archiveren

De volgende documenten moeten actief blijven:

* `README.md`
* `docs/CODEX-WORKFLOW.md`
* `docs/CURRENT-STATUS.md`
* `docs/BUILD-LOG.md`
* `docs/SCOPE.md`
* `docs/TECHNICAL-ARCHITECTURE.md`
* `docs/DATABASE-SCHEMA.md`
* `docs/API-PLAN.md`
* `docs/TEST-STRATEGY.md`
* `docs/APPROVED-DECISIONS-INDEX.md`
* `docs/DOCS-MIGRATION-MATRIX.md`

## Controle nodig vóór archiveren

Deze documenten hebben nog genoeg zelfstandige nuance, governancewaarde of auditwaarde om niet automatisch als veilig archiveerbaar te markeren:

* `docs/LOCAL-EXTERNAL-CONFIG-RUNBOOK.md`
* `docs/LOCAL-POWERSHELL-POSTGRES-CONFIG-STEPS.md`
* `docs/LOCAL-PRISMA-DATABASE-URL-RUNBOOK.md`
* `docs/PRISMA-RUNTIME-COMPATIBILITY-GATE.md`
* `docs/PRISMA-V7-SCHEMA-CONFIG-STRATEGY.md`
* `docs/SOURCE-AUTHORITY-GUARDRAIL.md`

## Volgende veilige stap

De volgende veilige stap is later een expliciete archiefronde in twee delen:

1. eerst de documenten met status `veilig archiveerbaar` nog één keer handmatig nalopen tegen de genoemde kernbestanden;
2. daarna pas, in een aparte expliciete opdracht, een `docs/archive/`-stap uitvoeren voor alleen die bevestigde kandidaten.

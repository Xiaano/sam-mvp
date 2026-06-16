# Health Checker Commerce Depth & Extension Groups Review

## Status

* Status: REVIEW / FUTURE EXTENSION
* Scope: Documentation only
* Current build impact: None
* Product priority: SAM Health Checker first
* Activation rule: Separate approved plan required before build

## Executive Summary

Toekomstige Commerce Depth, Source Intake en Extension Groups worden bewust geparkeerd zodat SAM niet opnieuw te breed groeit. De huidige MVP-prioriteit blijft de Health Checker-fundering afronden en marktklaar houden, zonder nu al de scope uit te rekken naar bredere commerce-, content- of intelligence-uitbreidingen.

## Current Boundary

* Health Checker blijft voorlopig read-only en analysegericht.
* Geen automatische live-wijzigingen.
* Geen onbeheerde AI-acties.
* Geen scope-uitbreiding zonder goedgekeurd plan.

## Extension Group Model

Extension groups zijn hier te zien als groepen in een meterkast: elke groep heeft een duidelijke functie, eigen permissies, source-classificatie, mapping/validatie, feature flag of toggle, audit logging en een expliciete activatiebeslissing voordat die groep live mag.

De logische volgorde is daarom: eerst documenteren, dan governance vastleggen, daarna pas apart goedkeuren en bouwen.

## Toekomstige Extension Groups

### Commerce Depth Group

* **Doel:** diepere commerce-analyse rond catalogus, productinformatie, prijs- en assortimentsignalen.
* **Voorbeelden:** productdetailverrijking, categorieanalyse, commerciele signalering, verrijkte productstatus.
* **Risico's:** scope creep, datavervuiling tussen catalogus en operationele data, te vroege live-koppeling.
* **Governance-eisen:** tenant/shop isolation, source classificatie, mapping/validatie, audit logging, human review.
* **Activeringsvoorwaarde:** apart goedgekeurd commerce-depth plan.

### Controlled Source Intake Group

* **Doel:** gecontroleerde broninname van externe of aangeleverde bronnen.
* **Voorbeelden:** PDF-input, datasheets, handmatige broninvoer, beperkte bronextractie.
* **Risico's:** ruwe brondata als waarheid behandelen, mixed source states, onbedoelde opslag van gevoelige data.
* **Governance-eisen:** source classification, data minimization, retention rules, human review, feature flags.
* **Activeringsvoorwaarde:** expliciete source-intake-goedkeuring met afgebakende bronsoorten.

### PDF / Datasheet Intelligence Group

* **Doel:** documenten en datasheets later semantisch laten duiden.
* **Voorbeelden:** specificatie-extractie, productkenmerken uitlezen, documentvergelijking.
* **Risico's:** OCR-/extractiefouten, auteursrechtelijke of privacygevoelige broninhoud, AI-overinterpretatie.
* **Governance-eisen:** data classification, source mapping, human review, audit logging, retention controls.
* **Activeringsvoorwaarde:** apart besluit voor document-intelligence-werking.

### Product Page Template / Profile Detection Group

* **Doel:** herbruikbare productpagina- of profielpatronen herkennen.
* **Voorbeelden:** templateherkenning, layoutprofielen, contentstructuurdetectie.
* **Risico's:** verkeerde automatische classificatie, ongewenste normalisatie, onbedoelde live-aanpassing.
* **Governance-eisen:** read-only analyse, audit logging, feature flags, human review, no automatic execution.
* **Activeringsvoorwaarde:** expliciete template/profile-goedkeuring.

### AI Language & Content Quality Group

* **Doel:** taal- en kwaliteitsverbetering voor content, samenvattingen of suggesties.
* **Voorbeelden:** copy-suggesties, tone-of-voice checks, kwaliteitsannotaties.
* **Risico's:** AI-hallucinatie, klantwaarheid vermengen met suggesties, onbedoelde contentpublicatie.
* **Governance-eisen:** AI-labeling, human review, source classification, data minimization, audit logging.
* **Activeringsvoorwaarde:** apart AI-contentbeleid met expliciete reviewstap.

### Notification & Communication Group

* **Doel:** later gecontroleerde notificaties of communicatie-acties voorbereiden.
* **Voorbeelden:** waarschuwing per e-mail, statusmelding, interne signalering.
* **Risico's:** ongecontroleerde verzending, verkeerde ontvangers, juridisch/operationeel risico.
* **Governance-eisen:** role based access control, human approval, audit logging, tenant/shop isolation.
* **Activeringsvoorwaarde:** expliciet communicatieplan en go/no-go per kanaal.

### Commercial Intelligence Group

* **Doel:** commerciiele inzichten en trends op basis van gecontroleerde data.
* **Voorbeelden:** prioritering, risico-inschatting, groeisignalen, assortimentsobservaties.
* **Risico's:** strategische bias, datakwaliteit, te brede interpretatie van beperkte brondata.
* **Governance-eisen:** source classification, retention rules, audit logging, human review, explicit activation decision.
* **Activeringsvoorwaarde:** apart besluit voor commercial intelligence.

## Governance Requirements

De volgende eisen gelden minimaal voordat een group ooit live mag gaan:

* tenant/shop isolation
* role based access control
* source classification
* data minimization
* retention rules
* audit logging
* human review
* feature flags
* explicit activation decision
* no automatic live execution
* secrets outside repository
* GDPR- en EU AI Act-bewustzijn waar relevant

## Review Matrix

| Extension Group | Business Value | MVP Relevance | Risk Level | Build Timing | Activation Requirement | Notes |
|---|---|---|---|---|---|---|
| Commerce Depth Group | Hoog | Laag | Hoog | Future / document only | Separate approved commerce-depth plan | Eerst scope begrenzen, daarna pas bouwen |
| Controlled Source Intake Group | Hoog | Laag | Hoog | Future / document only | Explicit source-intake approval | Alleen gecontroleerde bronnen, geen ruwe waarheid |
| PDF / Datasheet Intelligence Group | Gemiddeld | Laag | Hoog | Future / document only | Document-intelligence approval | Alleen met labeling, review en retention |
| Product Page Template / Profile Detection Group | Gemiddeld | Laag | Gemiddeld | Future / document only | Template/profile decision | Eerst analyse, geen live-aanpassing |
| AI Language & Content Quality Group | Gemiddeld | Laag | Hoog | Future / document only | AI-content policy decision | AI-output blijft suggestie, geen klantwaarheid |
| Notification & Communication Group | Gemiddeld | Laag | Hoog | Future / document only | Communication plan approval | Alleen met doelgroep-, kanaal- en auditbeleid |
| Commercial Intelligence Group | Gemiddeld | Laag | Hoog | Future / document only | Commercial intelligence approval | Alleen na data- en boundary-governance |

## Non-Goals

* Dit document bouwt niets.
* Dit document activeert niets.
* Dit document wijzigt geen MVP-scope.
* Dit document start Guardian niet als zelfstandig product.
* Dit document autoriseert geen codewijzigingen.

## Closing Position

Commerce Depth is strategisch waardevol, maar huidige prioriteit blijft SAM Health Checker richting marktintroductie brengen.

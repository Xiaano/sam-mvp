# SAM Health Checker Access-Control Boundary Decision

## Waarom access-control boundaries verplicht zijn

Access-control boundaries zijn verplicht vóór persistence, adapters, operator cockpit of execution, zodat lees-, review-, goedkeurings- en uitvoerrechten niet door elkaar lopen.

## Mogelijke rollen

Later kunnen conceptueel bestaan:

- internal admin
- operator/reviewer
- customer admin
- customer viewer
- support operator
- system/service actor
- audit-only viewer

## Later apart te autoriseren acties

Later moeten apart geautoriseerd worden:

- scan bekijken
- issue bekijken
- proposal bekijken
- proposal reviewen
- approval geven
- audit trail bekijken
- execution voorbereiden
- execution uitvoeren, voorlopig disabled
- data exporteren
- data verwijderen/cleanup starten

## Scheiding van rechten

Lezen, reviewen, goedkeuren en uitvoeren zijn verschillende rechten en moeten apart worden gemodelleerd.

## Boundarycontrole

Tenant-, customer- en shop-boundaries moeten altijd vóór toegang worden gecontroleerd.

## Classificatie en toegang

Data classification moet invloed hebben op toegang.

## Auditzichtbaarheid

Audit metadata kan breder zichtbaar zijn dan gevoelige of ruwe data, maar is niet automatisch publiek.

## Verboden zichtbaarheid

Secrets, API keys, tokens en execution payloads mogen nooit via normale Health Checker views zichtbaar zijn.

## AI/OpenAI-grens

AI/OpenAI-output moet later apart gelabeld en gereviewd worden vóór klantzichtbaarheid.

## WooCommerce-grens

WooCommerce-data mag later alleen zichtbaar zijn via canonical of gemapte records, niet als ruwe payload.

## Service actor-grens

Service- of system-actors mogen nooit impliciet menselijke approval vervangen.

## Human approval

Human approval blijft verplicht voor write en execution.

## Nog niet toegestaan

Deze decision geeft geen toestemming voor:

- auth-code
- database
- Prisma
- WooCommerce
- AI/OpenAI
- POST/write/execution
- secrets

## Voorwaarden vóór latere implementatie

Vóór latere implementatie zijn minimaal nodig:

- role model decision
- permission matrix
- tenant/customer/shop access rules
- audit logging policy
- session/user identity boundary
- least privilege uitgangspunt
- break-glass/support policy
- review/approval policy

## Advies voor de volgende fase

De logische volgende fase is een access-control model review of besluit, nog steeds documentair en zonder codebesluit.

## Bevestiging

Dit is alleen een access-control boundary decision. Geen code, auth, Prisma of database is geraakt. Lezen, reviewen, goedkeuren en uitvoeren blijven gescheiden en persistence/integraties/execution zijn nog niet toegestaan.

# Connectors

Connectors praten later met externe systemen zoals WooCommerce.

Belangrijke uitgangspunten:

* connectors mogen geen Prisma gebruiken
* connectors krijgen geen databasekennis
* connectors mogen data ophalen, externe acties voorbereiden/uitvoeren en data normaliseren
* connectors bevatten geen businesslogica zoals issue-detectie of approval-flow

# Health Checker Local-Dev CORS Micro-Scope Decision

1. Local-dev CORS is nodig omdat de read-only cockpit in de browser draait op `http://localhost:5174` en browserrequests naar de API op `http://localhost:3001` anders worden geblokkeerd door same-origin beleid.
2. Deze beslissing geldt alleen voor browserrequests van `http://localhost:5174` naar `http://localhost:3001`.
3. Alleen de origin `http://localhost:5174` valt in scope.
4. Alleen read-only GET-browserrequests vallen in scope.
5. Credentials, cookies en auth zijn buiten scope.
6. Wildcard-CORS voor productie is niet toegestaan.
7. CORS mag niet worden gebruikt als algemene security bypass.
8. CORS geeft geen toestemming voor `POST`, `PUT`, `PATCH` of `DELETE`.
9. CORS geeft geen toestemming voor `approve`, `reject`, `execute` of `write`.
10. CORS geeft geen toestemming voor database, Prisma, WooCommerce, AI/OpenAI, adapters of secrets.
11. Implementatie mag pas in een aparte microstap gebeuren.
12. Na implementatie moet minimaal worden getest dat de cockpit `/health`, `/diagnostics` en `/api/health-checker/readiness` kan lezen, dat `/diagnostics` `database=not_checked`, `prisma=not_checked`, `woocommerce=not_built`, `secrets=not_exposed` blijft tonen, en dat de bestaande API checks groen blijven.

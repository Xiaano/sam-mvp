import Fastify from "fastify";

import { registerDiagnosticsRoute } from "./routes/diagnostics.js";
import { registerHealthRoute } from "./routes/health.js";
import { registerHealthCheckerReadinessRoute } from "./routes/healthCheckerReadiness.js";

export function createApiServer() {
  const app = Fastify({
    logger: false,
  });

  registerHealthRoute(app);
  registerDiagnosticsRoute(app);
  registerHealthCheckerReadinessRoute(app);

  return app;
}

import { Application, Router } from '../deps.ts';
import cfg from '../cfg.json' with { type: 'json' };
import * as HealthCheck from './healthcheck/mod.ts';

export async function start() {
  const router = new Router();
  router.get('/v1/healthcheck', HealthCheck.getHandler);

  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());

  console.log(`注冊服務器運行在 http://localhost:${cfg.serverPort}`);
  await app.listen({ port: cfg.serverPort });
}

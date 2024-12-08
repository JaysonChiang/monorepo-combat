import * as router from './src/router.ts';
import { printError } from './src/utils.ts';
import cfg from './cfg.json' with { type: 'json' };

async function checkAccess() {
  if (
    (
      await Deno.permissions.query({
        name: 'net',
        host: `localhost:${cfg.serverPort}`,
      })
    ).state !== 'granted'
  ) {
    printError(`Please allow network access to localhost:${cfg.serverPort}`);
    Deno.exit(1);
  }
}

await checkAccess();
router.start();

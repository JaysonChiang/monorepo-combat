import { version } from '../../version.ts';

export function healthStatus() {
  return {
    status: 'online',
    ...version(),
  };
}

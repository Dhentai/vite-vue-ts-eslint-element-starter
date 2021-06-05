/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadEnv } from 'vite';
export interface ViteEnv {
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_USE_MOCK: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
}

export function handleLoadEnv(mode: string): ViteEnv {
  const env = loadEnv(mode, process.cwd());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ret: any = {};
  for (const envName of Object.keys(env)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let realName: any = env[envName].replace(/\\n/g, '\n');
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyConfig = {
  [k: string]: {
    target: string;
    changeOrigin: boolean;
    rewrite(path: string): string;
  };
};

const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(reg, 'g'), '');
};

export function createProxy(list: ProxyList = []): ProxyConfig {
  const ret: Partial<ProxyConfig> = {};
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      rewrite: (path: string) => regExps(path, prefix),
    };
  }
  return ret;
}

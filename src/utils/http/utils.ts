import { EnclosureHttpRequestConfig } from './types.d';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function excludeProps<T extends { [key: string]: any }>(
  origin: T,
  prop: string,
): { [key: string]: T } {
  return Object.keys(origin)
    .filter((key) => !prop.includes(key))
    .reduce((res, key) => {
      res[key] = origin[key];
      return res;
    }, {} as { [key: string]: T });
}

export function transformConfigByMethod(
  params: unknown,
  config: EnclosureHttpRequestConfig,
): EnclosureHttpRequestConfig {
  const { method } = config;
  const props = ['delete', 'get', 'head', 'options'].includes(
    (method as string).toLocaleLowerCase(),
  )
    ? 'params'
    : 'data';
  return {
    ...config,
    [props]: params,
  };
}

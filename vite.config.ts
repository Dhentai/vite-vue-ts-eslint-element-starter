import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import styleImport from 'vite-plugin-style-import';
import pkg from './package.json';
import { handleLoadEnv } from './build/utils';

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT, VITE_OPEN } = handleLoadEnv(mode);
  return {
    server: {
      port: VITE_PORT,
      open: VITE_OPEN,
    },
    resolve: {
      alias,
    },
    define: {
      _APP_VERSION: JSON.stringify(pkg.version),
    },
    plugins: [
      vue(),
      eslintPlugin({
        include: '**/*.+(vue|js|jsx|ts|tsx)',
      }),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            },
          },
        ],
      }),
    ],
    optimizeDeps: {
      include: [
        'element-plus/lib/locale/lang/zh-cn',
        'element-plus/lib/locale/lang/en',
      ],
    },
  };
});

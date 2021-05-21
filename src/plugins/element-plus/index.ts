import { App } from 'vue';

import { ElButton, ElSelect, ElLoading, ElMessage } from 'element-plus';

import ElementLocale from 'element-plus/lib/locale';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

const components = [ElButton, ElSelect];

const plugins = [ElLoading, ElMessage];

export const useElementPlus = (app: App): void => {
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 };

  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

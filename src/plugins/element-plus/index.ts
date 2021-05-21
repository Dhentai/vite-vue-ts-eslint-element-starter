import { App } from 'vue';

import { locale, ElButton, ElSelect, ElLoading, ElMessage } from 'element-plus';

import zhLang from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';

const components = [ElButton, ElSelect];

const plugins = [ElLoading, ElMessage];

locale(zhLang);

export const useElementPlus = (app: App): void => {
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 };

  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

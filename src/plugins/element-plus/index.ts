import { App } from 'vue';

import { ElButton, ElSelect, ElLoading, ElMessage } from 'element-plus';

import ElementLocale from 'element-plus/lib/locale';
import zhLang from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';

const components = [ElButton, ElSelect];

const plugins = [ElLoading, ElMessage];

ElementLocale.use(zhLang);

export const useElementPlus = (app: App): void => {
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 };

  components.forEach((component) => {
    app.component(component.name, component);
  });
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

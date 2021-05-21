import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useElementPlus } from './plugins/element-plus';

const app = createApp(App);

app.use(router).use(store).use(useElementPlus).mount('#app');

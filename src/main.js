import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import 'element-plus/dist/index.css'
import axios from 'axios';
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store)
  .use(router)
  .use(ElementPlus)
  .use(Antd)
  .mount('#app');

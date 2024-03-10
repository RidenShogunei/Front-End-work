import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';
const app = createApp(App);

// 将 Axios 实例挂载到 Vue 实例的原型上
app.config.globalProperties.$axios = axios;

app.use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app');

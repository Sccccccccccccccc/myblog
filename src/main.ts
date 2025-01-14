import { createApp } from 'vue'
import './assets/styles/tailwind.css'
import ElementPlus from 'element-plus'
// import router from './router/index.ts'
import router from './router'
import App from './App.vue'
import './permission'
import pinia from "./store/store";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')


import {
  createApp
} from 'vue'
import App from './App.vue'
import routes from './router'
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import {
  createPinia
} from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ArcoVue, {
  componentPrefix: 'arco'
})
app.use(ArcoVueIcon)
app.mount('#app')
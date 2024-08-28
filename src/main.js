import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'
import less from 'less'
import api from './api/api'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/api/mock.js"
import { useAllDataStore } from './stores/allData'

const app = createApp(App)
app.use(less)
app.use(createPinia())
const store= useAllDataStore()
store.addMenu(router,'refresh')
app.use(router)
//全局注册
app.config.globalProperties.$api=api;

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

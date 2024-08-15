import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'
import less from 'less'

const app = createApp(App)
app.use(less)
app.use(createPinia())
app.use(router)

app.mount('#app')

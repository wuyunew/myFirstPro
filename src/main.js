import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'
import less from 'less'
import api from './api/api'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/api/mock.js"
import { useAllDataStore } from './stores/allData'
//路由守卫
router.beforeEach((to,from)=>{  //路由守卫的规则看看
  //token过期且不在登录界面时重定向
  if(!store.state.token && to.path!=="/login"){
    return router.push("/login");
  }
  //token存在时检查是否有token过期
  if(store.state.token && new Date().getTime() > store.state.tokenExpiration){
    ElMessage.error("Token已过期,请重新登陆");
    return router.push("/login");
  }
  // if no match path found,return 404
  if(!to.matched.length){
    return router.push("/404");
  }
  //token存在且没有过期时正常跳转
  return true;
  

  
})
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

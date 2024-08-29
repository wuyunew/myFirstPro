import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { watch } from 'vue'
function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home',
        //url:'Home',
      },
    ],
    currentMenu: null,
    menuList: [],
    token: "",
    routerList: [],
  }
}
export const useAllDataStore = defineStore('allData', () => {
  //ref 类似state属性
  //computed getters
  //function actions
  const state = ref(initState());
  //监听state 使得路由持久化
  watch(state,(newObj)=>{
    if(!newObj.token) return;
    localStorage.setItem("store",JSON.stringify(newObj));
  },
  {deep: true})
  function selectMenu(val) {
    if (val.name === 'home') {
      state.value.currentMenu = null
    }
    else {
      let index = state.value.tags.findIndex(item => item.name === val.name)
      index === -1 ? state.value.tags.push(val) : "";
    }
  }
  function updateTags(tags) {
    let index = state.value.tags.findIndex(item => item.name === tags.name)
    state.value.tags.splice(index, 1);
  }
  function updateMenuList(val) {
    state.value.menuList = val;

  }
  //动态路由
  function addMenu(router,type) {
    if(type ==='refresh') {//刷新后保存路由
      if(JSON.parse(localStorage.getItem("store"))) {
        state.value = JSON.parse(localStorage.getItem("store"));
        state.value.routerList=[];
      } else {
        return;
    }
  }
    const menu = state.value.menuList;
    const module = import.meta.glob('../views/**/*.vue');
    const routeArr = []
    menu.forEach(item => {
      if (item.children) {
        item.children.forEach(val => {
          let url = `../views/${val.url}.vue`;
          val.component = module[url];
          routeArr.push(...item.children);
        })
      }
      else {
        let url = `../views/${item.url}.vue`;
        item.component = module[url];
        routeArr.push(item);

      }

    });
    //解决路由多账号问题
    state.value.routerList = [];
    let routers = router.getRoutes();
    routers.forEach(item => {
      if (item.name == 'main' || item.name == 'login') {
        return
      }else {
        router.removeRoute(item.name);
      }
    })
    routeArr.forEach(item => {
      state.value.routerList.push(
        router.addRoute("main", item)
      )
    })

  }

  function clean(){
    state.value.routerList.forEach(
      (item) => {//item是默认参数 remove
        if(item) item();
      }
    )
    state.value=initState();
    //删除本地的缓存
    localStorage.removeItem('store');
  }

  return {
    state,
    selectMenu,
    updateTags,
    updateMenuList,
    addMenu,
    clean,

  }
})

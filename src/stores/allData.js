import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home',
      },
    ],
    currentMenu: null,
  }
}
export const useAllDataStore = defineStore('allData', () => {
  //ref 类似state属性
  //computed getters
  //function actions
  const state = ref(initState());
  function selectMenu(val){
    if(val.name === 'home'){
      state.value.currentMenu=null
    }
    else{
      let index =state.value.tags.findIndex(item=>item.name === val.name)
      index === -1 ? state.value.tags.push(val):"";
    }
  }
  function updateTags(tags){
    let index = state.value.tags.findIndex(item=>item.name===tags.name)
    state.value.tags.splice(index,1);
  }
  return {
    state,
    selectMenu,
    updateTags,

  }
})

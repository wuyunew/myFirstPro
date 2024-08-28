<template>
  <el-aside :width="width">
    <el-menu background-color="#545c64" text-color="#fff" :collapse="isCollaspe" :collapse-transition="false"
    :default-active="activeMenu">
      <h3 v-show="!isCollaspe">通用后台管理系统</h3>
      <h3 v-show="isCollaspe"> 后台</h3>
      <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path"
      @click="handleMenu(item)"><!--一级菜单-->
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>

      <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">

        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>

        <el-menu-item-group>
          <el-menu-item v-for="(subItem, subIndex) in item.children" :index="subIndex.path" :key="subItem.path"
          @click="handleMenu(subItem)">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>

</template>


<script setup>
import { ref, computed } from 'vue';
import { useAllDataStore } from '@/stores/allData';
import { useRoute, useRouter } from 'vue-router';

const list =computed(()=>store.state.menuList)
//computed 计算属性 返回值为计算属性的ref 计算属性来描述依赖响应式状态的复杂逻辑，接收getter函数，自动追踪响应式依赖
//filter为给定数组执行浅拷贝，filter内部的函数被数组中的每个数据执行一次，item传递的参数为正在执行的数据，
const noChildren = computed(() => list.value.filter(item => !item.children))
const hasChildren = computed(() => list.value.filter(item => item.children))
//浅拷贝：共享相同的引用 不是同一个对象，属性值和原型链相等，对副本的嵌套对象属性的重新赋值会影响源对象,顶层不会
//array.prototype.concat(),slice(),from(),Object.assign()
const store = useAllDataStore()
const isCollaspe = computed(() => store.state.isCollapse)
//width
const width = computed(() => store.state.isCollapse ? '64px' : '180px')
const router=useRouter()
const route=useRoute()
const activeMenu=computed(() => route.path)
const handleMenu=(item)=>{
  router.push(item.path)
  store.selectMenu(item)
}
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.el-menu {
  border-right: none;

  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}

.el-aside {
  height: 100%;
  background-color: #545c64;
}
</style>
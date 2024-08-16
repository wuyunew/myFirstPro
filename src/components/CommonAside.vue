<template>
    <<el-aside width="180px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
</template>


<script setup>
import { ref,computed} from 'vue';
const list =ref([
    {
        path:'/home',
        name:'home',
        label:'首页',
        icon:'house',
        url:'Home'
    },
    {
        path:'/mall',
        name:'mall',
        label:'商品管理',
        icon:'video-play',
        url:'Mall'
    },
    {
        path:'/user',
        name:'user',
        label:'用户管理',
        icon:'user',
        url:'User'
    },
    {
        path:'other',
        name:'other',
        label:'其他',
        icon:'location',
        children:[
            {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'setting',
                url:'Page1'
            },
            {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'setting',
                url:'Page2'

            }
        ],
    }
])
//computed 计算属性 返回值为计算属性的ref 
//filter为给定数组执行浅拷贝，filter内部的函数被数组中的每个数据执行一次，item传递的参数为正在执行的数据，
const noChildren =computed(()=>list.filter(item=>!item.children))
const hasChildren =computed(()=>list.filter(item=>item.children))


</script>
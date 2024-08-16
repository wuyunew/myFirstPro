<template>
    <el-aside width="180px">
      <el-menu
      background-color="#545c64"
      text-color="#fff">
      <h3>通用后台管理系统</h3>
        <el-menu-item
            v-for="item in noChildren"
            :index="item.path"
            :key="item.path"
        >
          <component class="icons" :is="item.icon"></component> 
          <span>{{ item.label }}</span>
        </el-menu-item>

        <el-sub-menu
            v-for="item in hasChildren"
            :index="item.path"
            :key="item.path"
        >

          <template #title>
            <component class="icons" :is="item.icon"></component> 
            <span>{{ item.label }}</span>
          </template>

          <el-menu-item-group>
            <el-menu-item
              v-for="(subItem,subIndex) in item.children"
              :index="subIndex.path"
              :key="subItem.path"
            >
            <component class="icons" :is="subItem.icon"></component> 
            <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>        
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
//computed 计算属性 返回值为计算属性的ref 计算属性来描述依赖响应式状态的复杂逻辑，接收getter函数，自动追踪响应式依赖
//filter为给定数组执行浅拷贝，filter内部的函数被数组中的每个数据执行一次，item传递的参数为正在执行的数据，
const noChildren =computed(()=>list.value.filter(item=>!item.children))
const hasChildren =computed(()=>list.value.filter(item=>item.children))
//浅拷贝：共享相同的引用 不是同一个对象，属性值和原型链相等，对副本的嵌套对象属性的重新赋值会影响源对象,顶层不会
//array.prototype.concat(),slice(),from(),Object.assign()

</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.el-menu{
  border-right: none;
  h3{
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
.el-aside{
  height: 100%;
  background-color: #545c64;
}
</style>
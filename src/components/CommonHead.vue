<template>
    <div class="header">
        <div class="l-content">
            <el-button type="primary" size="small" @click="handleCollaspe">
                <component class="icons" is="menu"></component>
            </el-button>
            <el-breadcrumb separate="/" class="bread">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="current" :to="current.path">{{ current.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img :src="getImgUrl('user')" class="user" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAllDataStore } from '@/stores/allData';
import { useRouter } from 'vue-router';
//动态头像
const getImgUrl  = (user)=>{
    return new URL(`../assets/images/${user}.jpg`,import.meta.url).href
}
const store = useAllDataStore()
const handleCollaspe = () => {
    store.state.isCollapse = !store.state.isCollapse
}
const router=useRouter()
const handleLoginOut = () => {
    // 退出操作
    // 跳转到登出页面
    store.clean()
    router.push('/login')

}
const current=computed(() => store.state.currentMenu)
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #333;
}

.icons {
    width: 20px;
    height: 20px;
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

:deep(.bread span) {
    color: #fff !important;
    cursor: pointer !important;
}
</style>

<template>
    <div class="body-login">
        <el-form :model="loginForm" ref="form" :rules="rules"  :inline="false" size="normal"
            class="login-container">
            <h1>welcome login</h1>
            <el-form-item label="" size="normal">
                <el-input v-model="loginForm.username" placeholder="请输入账号" size="normal" clearable @change=""
                    type="input" />
            </el-form-item>
            <el-form-item label="" size="normal">
                <el-input v-model="loginForm.password" placeholder="请输入密码 "  show-password></el-input>
            </el-form-item>
            <el-form-item label="" size="normal">
                <el-button type="primary" size="medium" @click="handleLogin">登录</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from 'vue';
import { useAllDataStore } from '@/stores/allData';
import { useRouter } from 'vue-router';
const loginForm = reactive({
    username: '',
    password: '',
})
const {proxy}=getCurrentInstance()
const store=useAllDataStore()
const router=useRouter()
const handleLogin=async() => {
   const res= await proxy.$api.getMenu(loginForm)
   console.log(res)
   //拿到菜单以后 在哪里显示呢？
   store.updateMenuList(res.meunlist)
   store.state.token=res.token
   router.push('/home')


}
</script>

<style scoped lang="less">
.body-login {
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/background.png);
    background-size: 100%;
    overflow: hidden;
}

.login-container {
    width: 300px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    padding: 35px 35px 35px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 250px auto;

    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #505450;
    }
    :deep(.el-form-item__content) {
        //样式穿刺
        justify-content: center;
    }



}
</style>
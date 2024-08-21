<template>
    <el-row :gutter="20" class="home">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="getImageUrl(`user`)" class="user" />
                    <div class="user-info">
                        <p class="user-info-admin">Admin</p>
                        <p class="user-info-p">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2024-06-30</span></p>
                    <p>上次登录地点：<span>浙江</span></p>
                </div>
            </el-card>

            <el-card shadow="hover" class="user-table">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tabelLabel" :key="key" :prop="key" :label="val" />

                </el-table>
            </el-card>

        </el-col>

        <el-col :span="16" style="margin-top: 20px;">
            <div class="num">
                <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
                    <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
                    <div class="detail">
                        <p class="num">${{ item.value }}</p>
                        <p class="txt">${{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>

</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
const { proxy } = getCurrentInstance();
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const countData = ref([])
const tableData = ref([
    {
        name: 'java',
        todayBuy: 100,
        monthBuy: 200,
        totalBuy: 300,
    },
    {
        name: 'vue',
        todayBuy: 150,
        monthBuy: 250,
        totalBuy: 400,
    }
])
const tabelLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})
const getTableData = async () => {
    const data = await proxy.$api.getTableData()
    tableData.value = data.tableData
    console.log(tableData.value)
}
const getCountData = async () => {
    const data = await proxy.$api.getCountData()
    countData.value = data.countData
    console.log(countData.value)
}
onMounted(() => {
    getTableData()
    getCountData()
})

</script>

<style scoped lang="less">
.home {
    height: 100%;
    overflow: hidden;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }

        .user-info {
            p {
                line-height: 40px;
            }

            .user-info-p {
                color: #999;
            }

            .user-info-admin {
                font-size: 35px;
            }
        }

    }

    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;

            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }

    .user-table {
        margin-top: 20px;
    }


    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 32%;
            margin-bottom: 20px;

        }

        .icons {
            font-size: 70px;
            height: 70px;
            font-size: 70px;
            text-align: center;
            line-height: 70px;
            color: #fff;
        }

        .detail {
            margin-left: 25px;
            margin-top: -10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .num {
            font-size: 18px;

        }

        .txt {
            margin-top: -13px;
            color: #999;
            font-size: 14px;
        }




    }
}
</style>
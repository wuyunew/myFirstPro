<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue';
//按需引入element后不需要再import 否则会出bug
const handleClick = () => {
    console.log('click');
}
const tableData = ref([])
const { proxy } = getCurrentInstance()
const getUserData = async () => {
    let data = await proxy.$api.getUserData(config)
    tableData.value = data.list.map(item => ({
        ...item,
        sexLablel: item.sex === 1 ? '男' : '女'
    }))
    config.total = data.count;
}
const tabelLabel = reactive([
    {
        prop: 'name',
        label: '姓名'
    },
    {
        prop: 'age',
        label: '年龄'
    },
    {
        prop: 'sexLablel',
        label: '性别'
    },
    {
        prop: 'birth',
        label: '出生日期',
        width: 200
    },
    {
        prop: 'addr',
        label: '住址',
        width: 400
    }
])
const formInline = reactive({
    keyWord: ''
})
const handleSearch = () => {
    config.name = formInline.keyWord
    getUserData()
}
const config = reactive({
    name: '',
    total: 0,
    page: 1
});
const handleChange = (page) => {
    config.page = page;
    getUserData()
}
const handleDelete = (val) => {
    ElMessageBox.confirm("Are you sure you want to delete").then(async () => {
        await proxy.$api.deleteUser({ id: val.id })
        ElMessage({
            showClose: true,
            message: "删除成功",
            type: "success"
        })
        getUserData()
    })
}
onMounted(
    () => {
        getUserData()
    }
)


</script>

<template>
    <div class="user-header">
        <el-button type="primary">新增</el-button>
        <el-form :inline="true" size="normal" :model="formInline">
            <el-form-item label="请输入">
                <el-input placeholder="情输入用户名" v-model="formInline.keyWord"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="default" @click="handleSearch">搜素</el-button>

            </el-form-item>
        </el-form>
    </div>
    <div class="table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column v-for="item in tabelLabel" :key="item.prop" :width="item.width ? item.width : 125"
                :prop="item.prop" :label="item.label"></el-table-column>
            />

            <el-table-column fixed="right" label="Operations" min-width="120">
                <template #="scope">
                    <el-button type="primary" size="small" @click="handleClick">
                        编辑
                    </el-button>
                    <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="pager" background layout="prev,pager,next" size="small" :total="config.total"
            @current-change="handleChange" />


    </div>
    <el-dialog
    v-model="dialogvisible"
        :title="action=='add'?'新增用户':'编辑用户'"
        width="35%"
        :before-close="handleClose">

        <!--需要注意的是-->
    </el-dialog>
    





</template>

<style scoped lang="less">
.user-header {
    display: flex;
    justify-content: space-between;
}

.table {
    position: relative;
    height: 520px;

    .pager {
        position: absolute;
        right: 10px;
        bottom: 30px;
    }

    .el-table {
        width: 100%;
        height: 500%;
    }
}
</style>
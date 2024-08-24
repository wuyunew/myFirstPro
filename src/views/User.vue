<script setup>
import { time } from 'echarts';
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
const action = ref('add')
const dialogvisible = ref(false)
const formUser = reactive({})
const rules = reactive({
    name: [
        { required: true, message: '名称不能为空', trigger: 'blur' }
    ],
    age: [
        { required: true, message: '年龄不能为空', trigger: 'blur' },
        { type: 'number', message: '年龄必须为数字', trigger: 'blur' },
        //{ min: 1, max: 150, message: '年龄在1-150之间', trigger: 'blur' }
    ],
    sex: [
        { required: true, message: '性别不能为空', trigger: 'change' }
    ],
    birth: [
        { required: true, message: '出生日期不能为空', }
    ],
    addr: [
        { required: true, message: '住址不能为空', }
    ]
})
const handleClose = () => {
    //获取表单重置表单
    dialogvisible.value = false;

}
const handleCancel = () => {
    dialogvisible.value = false;


}
const handleAdd = () => {
    dialogvisible.value = true;
    action.value = 'add';

}
const timeFormat = (time) => {
    var time = new Date(time)
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var day = time.getDate()
    return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
}
const onSubmit = () => {
    //先校验
    proxy.$refs['userForm'].validate(async (vaild) => {
        if (vaild) {
            let res = null;
            formUser.birth = /^\d{4}-\d{2}-\d{2}$/.test(formUser.birth) ? formUser.birth : timeFormat(formUser.birth)
            if (action.value === 'add') {
                res = await proxy.$api.addUser(formUser)
            }
            if (res) {
                dialogvisible.value = false;
                proxy.$refs['userForm'].resetFields()
                getUserData()
            }
        } else {
            ElMessage({
                showClose: true,
                message: "请检查输入的数据是否有误",
                type: "error"
            })
        }
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
        <el-button type="primary" @click="handleAdd">新增</el-button>
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

    <el-dialog v-model="dialogvisible" :title="action == 'add' ? '新增用户' : '编辑用户'" width="35%"
        :before-close="handleClose">
        <!--需要注意的是设置了：inline="true",会对el-select的样式造成影响
        我们通过给他设置一个class=select-clearn在CSS中进行处理-->

        <el-form :model="formUser" ref="userForm" :rules="rules" :inline="true">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="formUser.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="formUser.age" placeholder="请输入年龄"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="性别" class="select-clearn" prop="sex">
                        <el-select v-model="formUser.sex" placeholder="请选择性别">
                            <el-option value="1" label="男"></el-option>
                            <el-option value="2" label="女"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="出生日期" prop="birth">
                        <el-date-picker v-model="formUser.birth" type="date" placeholder="请选择出生日期" style="
                           width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="formUser.addr" placeholder="请输入地址"></el-input>
                </el-form-item>
            </el-row>
            <el-row style="justify-content: flex-end;">
                <el-form-item>
                    <el-button type="primary" @click="handleCancel">取消</el-button>
                    <el-button type="primary" @click="onSubmit">确定</el-button>
                </el-form-item>
            </el-row>




        </el-form>

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

.select-clearn {
    display: flex;
}
</style>
<script setup>
import CommonAside from '@/components/CommonAside.vue';

</script>
<template>
<div class="common-layout">
    <el-container :direction="vertical" class="lay-container">
        <el-header class="el-header">
            <common-header />
        </el-header>
        <el-container :direction="horizontal">
            <CommonAside />
            <el-container :direction="vertical">
                <el-main height="" class="right-main">
                    main
                </el-main>
                <el-footer height="">
                    <!-- Footer content -->
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
    
</div>
</template>

<style scoped lang="less">
  .common-layout,.lay-container{
    height: 100%;
  }
  .el-header{
    background-color: #333;
  }



</style>

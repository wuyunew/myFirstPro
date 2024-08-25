<script setup>
import CommonAside from '@/components/CommonAside.vue';
import CommonHead from '@/components/CommonHead.vue';
import CommonTab from '@/components/CommonTab.vue';
</script>
<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <CommonAside />
      <el-container>
        <el-header class="el-header">
          <CommonHead />
        </el-header>
        <CommonTab />
        <el-main>
          <RouterView></RouterView>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout,
.lay-container {
  height: 100%;
}

.el-header {
  background-color: #333;
}
</style>

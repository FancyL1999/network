<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-mouse"></i>
          <span slot="title">交互配置</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">脚本配置</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-view"></i>
          <span slot="title">拓扑校验</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-row, .el-menu {
  background-color: #f8fcf9;
  color: #212121;
  text-align: center;
  line-height: 200px;
}
</style>

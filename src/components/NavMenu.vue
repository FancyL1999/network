<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        router
        default-active="1"
        class="el-menu-vertical-demo"
        style="min-height: 100vh"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
<!--        <el-menu-item index="1">-->
<!--          <i class="el-icon-setting"></i>-->
<!--          <span slot="title">选择路由</span>-->
<!--        </el-menu-item>-->
        <el-menu-item index="Interaction">
          <i class="el-icon-mouse"></i>
          <span slot="title">交互配置</span>
        </el-menu-item>
        <el-menu-item index="Document">
          <i class="el-icon-document"></i>
          <span slot="title">脚本配置</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-view"></i>
          <span slot="title">拓扑校验</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  import left from '@/components/left'
  import Document from "./config/Document";
  import Interaction from "./config/Interaction";


  export default {
    components: {
      Document,
      Interaction,
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        this.$router.push({
          name: key,
        });
        console.log(key, keyPath);
      },
      changeSidebar(name) {
        this.$router.push({
          name: name,
        });
      }

    }
  }

</script>

<style>
  .el-row, .el-menu {
    background-color: #FFFFFF;
    color: #212121;
    text-align: center;
    line-height: 200px;
  }

  .el-menu-item.is-active {
    color: #409EFF;
    border-right: 2px solid #409EFF;
  }
</style>

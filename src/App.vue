<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <i class="el-icon-user-solid"></i>
        <span>拓扑自动化搭建及校验管理系统</span>
        </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <left></left>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Header'
  import left from '@/components/left'


  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'vheader': Header,
      'left':left
    }
  }

</script>

<style>
  .header {
    background-color: rgba(64, 158, 255, 0.99);
    color: #fff;
    line-height: 60px;
  }
</style>

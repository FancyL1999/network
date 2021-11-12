<template>
  <div id="app" class="autoHeight">

    <el-container class="autoHeight">
      <el-header>
        <i class="el-icon-user-solid"></i>
        <span>拓扑自动化搭建及校验管理系统</span>

        <el-select v-model="value" placeholder="请选择路由">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-header>

      <el-container class="autoHeight">

        <el-aside width="200px" class="autoHeight">
          <navmenu></navmenu>
        </el-aside>

        <el-main class="autoHeight">
          <left></left>
        </el-main>
      </el-container>

    </el-container>
    <!--    </el-container>-->


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
    'left': left
  },
  data() {
    return {
      options: [{
        value: 'router_01',
        label: 'Router01'
      }, {
        value: 'router_02',
        label: 'Router02'
      }, {
        value: 'router_03',
        label: 'Router03'
      }],
      value: ''
    }
  }
}

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: #000000;
}

.header {
  background-color: #ffffff;
  color: #212121;
  line-height: 60px;
}

.body {
  background-color: #f7fdf1;
}

.autoHeight {
  min-height: 300px;
  height: 100%;
}


.el-header, .el-footer {

  background-color: #ffffff;
  color: #212121;
  line-height: 60px;

  /*background-color: #B3C0D1;*/
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 60px;*/
}

.el-aside {
  background-color: #f8fcf9;
  color: #212121;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e8f8de;
  color: #212121;
  /*text-align: center;*/
  /*line-height: 160px;*/
}

</style>

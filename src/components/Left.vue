<template>
  <el-row class="autoHeight">
    <el-col class="grid-content width-50 content-color">
      <router-view/>
    </el-col>
    <el-col class="grid-content width-50">
      <el-row style="margin-bottom: 2%" class="grid-content2 content-color">
      </el-row>
      <el-row style="margin-top: 2%" class="grid-content2 content-color">
      </el-row>
    </el-col>
  </el-row>
</template>

<style>
  .el-row {
    /*background-color: #FFFFFF;*/
    background-color: #f8f8fa;

  }

  .el-col {
  }

  .grid-content {
    /*margin-left: 15px;*/
    margin-right: 1%;
    border-radius: 5px;
    /*min-height: 500px;*/
    height: 100%;
  }

  .content-color {
    /*background-color: #f8f8fa;*/
    background-color: #FFFFFF;
  }

  .width-50 {
    width: 49%;
  }

  .grid-content2 {
    border-radius: 5px;
    min-height: 240px;
    height: 49%;
  }

  .autoHeight {
    /*min-height: 300px;*/
    height: 100%;
  }
</style>

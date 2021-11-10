<template>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>

    <el-col :span="12">
      <el-row :gutter="15">
        <el-col ><div class="grid-content2 bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="15">
        <el-col ><div class="grid-content2 bg-purple"></div></el-col>
      </el-row>

<!--      <div class="grid-content bg-purple"></div>-->
    </el-col>


<!--    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>-->

<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
  </el-row>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #b5c6dc;
  }
  .bg-purple {
    background: #f4f6f8;
  }
  .bg-purple-light {
    background: #f3f4f6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 500px;
  }
  .grid-content2 {
    border-radius: 4px;
    min-height: 240px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

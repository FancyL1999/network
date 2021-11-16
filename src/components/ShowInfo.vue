<template>
  <div>
    <el-row type="flex" align="left" style="margin-top: 5%">
      <el-col :span="1"/>
      <el-col :span="4">
        ID：
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="4">
        接口：
      </el-col>
    </el-row>
  <el-row type="flex" align="left" >
    <el-col :span="1"/>
    <el-col :span="4">
      IP：
    </el-col>
  </el-row>
    <el-row type="flex" align="left" >
      <el-col :span="1"/>
      <el-col :span="4">
        掩码：
      </el-col>
    </el-row>
    <el-row type="flex" align="left" >
      <el-col :span="1"/>
      <el-col :span="4">
        状态：
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "ShowInfo"
    }
</script>

<style scoped>
  .el-row {
    /*margin-bottom: 20px;*/
    float: left;
    background-color: #ffffff;
    height: 5%;
    width: 100%;
    padding: 10px;
    display: flex;
    /*flex-wrap: wrap;*/
    line-height: 30px;
    text-align: center;
  }

  .el-col {
    font-size: 13px;
  }
</style>

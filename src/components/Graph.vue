<template>
    <el-row type="flex" align="left" style="margin-top: 13%">
      <el-col :span="1">
      </el-col>
      <el-col :span="4">
        <img src="../assets/router_off.png" style="height: 100px">
      </el-col>
      <el-col :span="4" style="margin-top: 12%;margin-left: 2%">
        <img src="../assets/link_green.png" style="height: 20px;align:center;margin-top: 5%">
      </el-col>
      <el-col :span="4">
        <img src="../assets/router_off.png" style="height: 100px">
      </el-col>
      <el-col :span="4" style="margin-top: 12%;margin-left: 2%">
        <img src="../assets/link_green.png" style="height: 20px;align:center;margin-top: 5%">
      </el-col>
      <el-col :span="4">
        <img src="../assets/router_off.png" style="height: 100px">
      </el-col>

    </el-row>
</template>

<script>
  import imgUrl from "../assets/router_off.png"
  export default {
    name: "Graph",
    data() {
      return {
        imgUrl:imgUrl
      }
    }
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
    line-height: 50px;
    text-align: center;
  }

  .el-col {
    font-size: 13px;
  }
</style>

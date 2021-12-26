<template>
    <el-row type="flex" align="left" style="margin-top: 13%">
      <el-col :span="1">
      </el-col>
      <el-col :span="4">
        <img :src="require('../assets/' + ((flag[0]==1)?'router_off.png':'router_on.png'))" @click="test(0)" style="height: 9vw"/>
      </el-col>
      <el-col :span="4" style="margin-top: 12%;margin-left: 2%">
        <img :src="require('../assets/' + ((flag[3]==1)?'link_green.png':'link_green_dot_lgreen_rgreen.png'))" @click="test(3)" style="height: 2vw;align:center;margin-top: 5%"/>
      </el-col>
      <el-col :span="4">
        <img :src="require('../assets/' + ((flag[1]==1)?'router_off.png':'router_on.png'))" @click="test(1)" style="height: 9vw"/>
      </el-col>
      <el-col :span="4" style="margin-top: 12%;margin-left: 2%">
        <img :src="require('../assets/' + ((flag[4]==1)?'link_green.png':'link_green_dot_lgreen_rgreen.png'))" @click="test(4)" style="height: 2vw;align:center;margin-top: 5%"/>
      </el-col>
      <el-col :span="4">
        <img :src="require('../assets/' + ((flag[2]==1)?'router_off.png':'router_on.png'))" @click="test(2)" style="height: 9vw"/>

      </el-col>
    </el-row>




</template>

<script>
  import imgUrl from "../assets/router_off.png"
  export default {
    name: "Graph",
    data() {
      return{
        flag:[-1,1,1,1,1]
      }
    },
    methods: {
      test: function (index) {
        this.flag=[1,1,1,1,1]
        this.flag[index]=-1
        this.$emit('transfer-Data',this.flag)
      }
    },
    created(){
      this.$emit('transfer-Data',this.flag)
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

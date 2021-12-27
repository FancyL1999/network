<template>
  <el-row class="autoHeight">
    <el-col class="grid-content width-50 content-color">
      <router-view/>
    </el-col>
    <el-col class="grid-content width-50">
      <el-row style="margin-bottom: 2%" class="grid-content2 content-color">
        <graph @transfer-Data="getflag">

        </graph>
      </el-row>
      <el-row style="margin-top: 2%" class="grid-content3 content-color">
<!--        选择的是：{{flags}}-->
        <showinfo :flags="flags"></showinfo>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import Graph from '@/components/Graph'
  import Showinfo from '@/components/ShowInfo'

  export default {
    name: 'Left',
    components: {
      'graph': Graph,
      'showinfo':Showinfo

    },
    data() {
      return {
        flags :''
      }
    },
    methods:{
      getflag(data){
        this.flags = data
        console.log(data)
      }
    }
  }
</script>
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
    height: 39%;
    /*height: 100%;*/
  }

  .grid-content3 {
    border-radius: 5px;
    min-height: 240px;
    height: 59%;
    /*height: 100%;*/
  }

  .autoHeight {
    /*min-height: 300px;*/
    height: 100%;
  }
</style>

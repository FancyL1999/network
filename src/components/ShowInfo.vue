<template>
  <div>

    <el-row type="flex" align="left" style="margin-top: 5%">
      <el-col :span="2"/>
      <el-col :span="8" align="left">
        ID：{{information.ID}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="8" align="left">
        接口：{{information.interface}}
      </el-col>
    </el-row>
  <el-row type="flex" align="left" >
    <el-col :span="2"/>
    <el-col :span="8" align="left">
      IP：{{information.IP}}
    </el-col>
  </el-row>
    <el-row type="flex" align="left" >
      <el-col :span="2"/>
      <el-col :span="8" align="left">
        掩码：{{information.MASK}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left" >
      <el-col :span="2"/>
      <el-col :span="8" align="left">
        状态：{{information.status}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="8" align="left">
        flag：{{flags}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "ShowInfo",
      data(){
          return{
            information:{
              ID:'ROUTER_A',
              interface:'S0/0/0',
              IP:'172.16.0.1',
              MASK:'225.225.225.0',
              status:'ON'},
            choice:[]
          }
      },
      props:['flags'],
      watch:{
        flags :function (newVal,oldVal) {
          console.log(newVal, oldVal)
          this.choice=newVal;//newVal就是获取的动态新数据，赋值给newdata
        }
      },
      methods:{
        get_data:function(){
          // 使用axios请求数据
          this.$axios.get("http://127.0.0.1:4523/mock/459015/view/router/1").then((response)=>{
            console.log(response);
          }).catch(error=>{
            console.log(error);
          })
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
    line-height: 30px;
    text-align: center;
  }

  .el-col {
    font-size: 13px;
  }
</style>

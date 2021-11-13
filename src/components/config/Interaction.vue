<template>

<div >
    <el-row type="flex" align="left" style="margin-top: 10%">
      <el-col :span="6">
        接口：
      </el-col>
      <el-col :span="12" >
        <el-input placeholder="请输入接口" v-model="input"></el-input>
      </el-col>
    </el-row>
  <el-row type="flex" align="left">
    <el-col :span="6">
      IP：
    </el-col>
    <el-col :span="12">
      <el-input placeholder="请输入IP" v-model="input"></el-input>
    </el-col>
  </el-row>
  <el-row type="flex" align="left">
    <el-col :span="6">
      网关：
    </el-col>
    <el-col :span="12">
      <el-input placeholder="请输入网关" v-model="input"></el-input>
    </el-col>
  </el-row>
</div>

<!--  <div>-->
<!--    <el-input maxlength="1" v-model="b"></el-input>-->
<!--    <el-input maxlength="1" v-model="a"></el-input>-->
<!--    <el-input maxlength="1" v-model="c"></el-input>-->
<!--    <el-col>-->
<!--      接口：-->
<!--      <el-input placeholder="请输入接口" v-model="inter"></el-input>-->
<!--    </el-col>-->
<!--    <el-col>-->
<!--      IP：-->
<!--      <el-input placeholder="请输入IP" v-model="input"></el-input>-->
<!--    </el-col>-->
<!--    <el-col>-->
<!--      网关：-->
<!--      <el-input placeholder="请输入网关" v-model="input"></el-input>-->
<!--    </el-col>-->
    <!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
    <!--    接口：-->
    <!--    <el-input placeholder="请输入接口" v-model="inter"></el-input>-->
    <!--    IP：-->
    <!--    <el-input placeholder="请输入IP" v-model="input"></el-input>-->
    <!--    网关：-->
    <!--    <el-input placeholder="请输入网关" v-model="input"></el-input>-->
    <!--    </div>-->
    <!--    <el-col>-->
    <!--      oiuoyoyu-->
    <!--    </el-col>-->
    <!--    <el-col>-->
    <!--      oiuoyoyu-->
    <!--    </el-col>-->


<!--  </div>-->


  <!--  <div class="demo-input-suffix">-->
  <!--    <el-input v-model="form.name"></el-input>-->
  <!--    <el-form ref="form" :model="form" label-width="80px">-->
  <!--      <el-form-item label="活动名称">-->
  <!--        <el-input v-model="form.name"></el-input>-->
  <!--      </el-form-item>-->
  <!--      <el-form-item label="活动区域">-->
  <!--        <el-select v-model="form.region" placeholder="请选择活动区域">-->
  <!--          <el-option label="区域一" value="shanghai"></el-option>-->
  <!--          <el-option label="区域二" value="beijing"></el-option>-->
  <!--        </el-select>-->
  <!--      </el-form-item>-->
  <!--    </el-form>-->

  <!--  </div>-->


</template>

<script>
export default {
  name: "Interaction"
}
</script>

<style scoped>
/*.el-row {*/
/*  background-color: rgba(255, 255, 255, 0);*/
/*  height: auto;*/
/*}*/
.el-row {
  /*margin-bottom: 20px;*/
  float: left;
  background-color:#ffffff;
  height:5%;
  width:100%;
  padding: 10px;
  display: flex;
  /*flex-wrap: wrap;*/
  line-height: 60px;
  text-align: center;
 }
</style>

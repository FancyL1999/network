<template>
  <el-row class="autoHeight">
    <el-col class="grid-content width-50 content-color">
      <div></div>
    </el-col>

    <el-col class="grid-content width-50">

      <el-row style="margin-bottom: 2%" class="grid-content2 content-color">
        <div></div>
      </el-row>

      <el-row style="margin-top: 2%" class="grid-content2 content-color">
        <div></div>
      </el-row>

    </el-col>

  </el-row>
</template>

<style>
.el-row {
  background-color: #e8f8de;
}

.el-col {
}

.grid-content {
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 15px;
  min-height: 500px;
  height: 100%;

}

.content-color {
  background-color: #fefffe;
}

.width-50 {
  width: 48%;
}

.grid-content2 {
  border-radius: 15px;
  min-height: 240px;
  height: 49%;
}


.autoHeight {
  min-height: 300px;
  height: 100%;
}
</style>

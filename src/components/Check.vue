<template>
  <div>
    <el-row type="flex" align="left" style="margin-top: 3%; margin-bottom: 1%">
      <el-col :span="1"/>
      <el-col style="font-size: 13px">
        PING
      </el-col>

    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip"></el-input>
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4">
        <el-button size="small" type="primary" plain @click="handlePing()">发送</el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left" style="margin-bottom: 1%">
      <el-col :span="1"/>
      <el-col>
        测试文件
      </el-col>

    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>

      <el-col>
        <el-input
          type="textarea"
          :rows="15"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </el-col>

      <el-col :span="1"/>

    </el-row>

    <el-row>

      <el-col :span="1"/>

      <el-col style="height: 70px">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://localhost:8080/file/test"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传yml/yaml文件</div>
        </el-upload>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="updateTestFile()">提交</el-button>
      </el-col>

    </el-row>

    <el-row style="height: 100%;margin-left: 5%; width: 90%;">
      <el-input
        type="textarea"
        placeholder="输出"
        v-model="msg"
        :rows="5"
        :disabled="true">
      </el-input>
    </el-row>

    <!--    <div v-text="msg" ></div>-->


  </div>
</template>

<script>
export default {
  name: "Check",
  data() {
    return {
      ip: '',
      textarea: '',
      fileList: [],
      msg: ''
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handlePing() {
      let curId = this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$data.value
      // console.log(curId)
      this.$axios({
        url: 'http://localhost:8080/check/ping/'+ curId,
        method: 'get',
        params: {
          ip: this.$data.ip
        } // query参数
      }).then(response => {
        this.$data.msg = response.data.data
      })
    },
    getTestFile() {
      this.$axios({
        url: 'http://localhost:8080/file/test',
        method: 'get'
      }).then(response => {
        this.$data.textarea = response.data.data
      })
    },
    updateTestFile() {
      this.$axios({
        url: 'http://localhost:8080/file/test',
        method: 'put',
        params: {
          context: this.$data.textarea
        } // query参数
      }).then(response => {
        // this.$data.msg = response.data.data
      })

      this.$axios({
        url: 'http://localhost:8080/check/test',
        method: 'get',
      }).then(response => {
        this.$data.msg = response.data.data
      })
    }
  },
  mounted:function () {   //自动触发写入的函数
    this.getTestFile();
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
  line-height: 5px;
  text-align: left;
}
</style>

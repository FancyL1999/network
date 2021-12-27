<template>
  <div>
    <el-row type="flex" align="left" style="margin-top: 5%; margin-bottom: 1%">
      <el-col :span="1"/>
      <el-col>
        <div>
          配置命令
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textcommand">
        </el-input>
      </el-col>
      <el-col :span="1"/>
    </el-row>

    <el-row>
      <el-col :span="24"/>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleCommand()">运行
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col>
        <div>
          配置文件
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col>
        <el-input
          type="textarea"
          :rows="10"
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
          action="http://localhost:8080/file/config"
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
          @click="updateConfigFile()">提交
        </el-button>
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

  </div>
</template>

<script>
export default {
  name: "Document",
  data() {
    return {
      textarea: '',
      textcommand: '',
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
    handleCommand() {
      // console.log(this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$data.value)
      this.$axios({
        url: 'http://localhost:8080/config/command',
        method: 'put',
        data: {
          id: this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$data.value,
          command: textcommand
        }, // body参数
        // params: {
        //   end: 1900 + this.$data.end.getYear()
        // } // query参数
      }).then(response => {
        this.$data.msg = response.data.data
      })
    },
    getConfigFile() {
      this.$axios({
        url: 'http://localhost:8080/file/config',
        method: 'get'
      }).then(response => {
        this.$data.textarea = response.data.data
      })
    },
    updateConfigFile() {
      this.$axios({
        url: 'http://localhost:8080/file/config',
        method: 'put',
        params: {
          context: this.$data.textarea
        } // query参数
      }).then(response => {
        this.$data.msg = response.data.data
      })
      // this.getConfigFile()
    }
  },
  mounted:function () {   //自动触发写入的函数
    this.getConfigFile();
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

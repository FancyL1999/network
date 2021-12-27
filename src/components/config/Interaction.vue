<template>

  <div>
    <el-row type="flex" align="left" style="margin-top: 3%">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        S0/0/0
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_s0"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_s0"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('s0', ip_s0, mask_s0)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        S0/0/1
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_s1"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_s1"></el-input>
      </el-col>

      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('s1', ip_s1, mask_s1)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        g0/0/0
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_g0"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_g0"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('g0', ip_g0, mask_g0)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        g0/0/1
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_g1"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_g1"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('g1', ip_g1, mask_g1)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        loopback01
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_lb1"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_lb1"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('lo1', ip_lb1, mask_lb1)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        loopback02
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_lb2"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_lb2"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('lo2', ip_lb2, mask_lb2)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        loopback03
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_lb3"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_lb3"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('lo3', ip_lb3, mask_lb3)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        loopback04
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_lb4"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_lb4"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('lo4', ip_lb4, mask_lb4)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row type="flex" align="left">
      <el-col :span="1"/>
      <el-col :span="2">
        接口：
      </el-col>
      <el-col :span="3">
        loopback05
      </el-col>
      <el-col :span="2">
        IP：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入IP" v-model="ip_lb5"></el-input>
      </el-col>
      <el-col :span="2">
        掩码：
      </el-col>
      <el-col :span="5">
        <el-input size="small" placeholder="请输入掩码" v-model="mask_lb5"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          type="primary"
          plain
          @click="handleSub('lo5', ip_lb5, mask_lb5)">提交
        </el-button>
      </el-col>
    </el-row>

    <el-row style="height: 100%;margin-left: 5%; width: 87%;">
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
  name: "Interaction",
  data() {
    return {
      msg: '',
      ip_s0: '',
      mask_s0: '',
      ip_s1: '',
      mask_s1: '',
      ip_g0: '',
      mask_g0: '',
      ip_g1: '',
      mask_g1: '',
      ip_lb1: '',
      mask_lb1: '',
      ip_lb2: '',
      mask_lb2: '',
      ip_lb3: '',
      mask_lb3: '',
      ip_lb4: '',
      mask_lb4: '',
      ip_lb5: '',
      mask_lb5: '',
    }
  },
  methods: {
    handleSub(inter, ip, mask) {
      // console.log("dsda")
      // console.log(this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$data.value)
      // console.log(inter)
      // console.log(ip)
      // console.log(mask)

      this.$axios({
        url: 'http://localhost:8080/config/interaction',
        method: 'put',
        data: {
          id: this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$data.value,
          interface: inter,
          ip: ip,
          mask: mask
        }, // body参数
        // params: {
        //   end: 1900 + this.$data.end.getYear()
        // } // query参数
      }).then(response => {
        // console.log(response.data)
        this.$data.msg = response.data.data
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
  line-height: 50px;
  text-align: center;
}

.el-col {
  font-size: 13px;
}
</style>

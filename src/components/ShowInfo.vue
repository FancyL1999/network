<template>
  <div>
    <el-row type="flex" align="left" style="margin-top: 5%">
      <el-col :span="2"/>
      <el-col :span="4" align="left">
        ID：{{name[index]}}
      </el-col>
    </el-row>
    <div v-if="index===0 || index===1 || index===2">
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="3" align="left">
        接口：{{testshow.s0.itf}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        IP：{{testshow.s0.ip}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="6" align="left">
        掩码：{{testshow.s0.mask}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        状态：{{testshow.s0.status}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="3" align="left">
        接口：{{testshow.s1.itf}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        IP：{{testshow.s1.ip}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="6" align="left">
        掩码：{{testshow.s1.mask}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        状态：{{testshow.s1.status}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="3" align="left">
        接口：{{testshow.g0.itf}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        IP：{{testshow.g0.ip}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="6" align="left">
        掩码：{{testshow.g0.mask}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        状态：{{testshow.g0.status}}
      </el-col>
    </el-row>
    <el-row type="flex" align="left">
      <el-col :span="2"/>
      <el-col :span="3" align="left">
        接口：{{testshow.g1.itf}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        IP：{{testshow.g1.ip}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="6" align="left">
        掩码：{{testshow.g1.mask}}
      </el-col>
      <el-col :span="1"/>
      <el-col :span="4" align="left">
        状态：{{testshow.g1.status}}
      </el-col>
    </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo0.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo0.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo0.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo0.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo1.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo1.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo1.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo1.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo2.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo2.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo2.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo2.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo3.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo3.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo3.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo3.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo4.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo4.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo4.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo4.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="3" align="left">
          接口：{{testshow.lo5.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.lo5.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.lo5.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.lo5.status}}
        </el-col>
      </el-row>
    </div>
    <div v-if="index===3 || index===4 ">
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="1" align="left">
          左：
        </el-col>
        <el-col :span="2"/>
        <el-col :span="4" align="left">
          接口：{{testshow.left.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.left.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.left.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.left.status}}
        </el-col>
      </el-row>
      <el-row type="flex" align="left">
        <el-col :span="2"/>
        <el-col :span="1" align="left">
          右：
        </el-col>
        <el-col :span="2"/>
        <el-col :span="4" align="left">
          接口：{{testshow.right.itf}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          IP：{{testshow.right.ip}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="6" align="left">
          掩码：{{testshow.right.mask}}
        </el-col>
        <el-col :span="1"/>
        <el-col :span="4" align="left">
          状态：{{testshow.right.status}}
        </el-col>
      </el-row>
    </div>
<!--  <el-row type="flex" align="left" >-->
<!--    <el-col :span="2"/>-->
<!--    <el-col :span="8" align="left">-->
<!--      IP：{{information.IP}}-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--    <el-row type="flex" align="left" >-->
<!--      <el-col :span="2"/>-->
<!--      <el-col :span="8" align="left">-->
<!--        掩码：{{information.MASK}}-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <el-row type="flex" align="left" >-->
<!--      <el-col :span="2"/>-->
<!--      <el-col :span="8" align="left">-->
<!--        状态：{{information.status}}-->
<!--      </el-col>-->
<!--    </el-row>-->
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
            choice:[],
            name:['router1','router2','router3','cable1','cable2'],
            index:0,
            allinfo:{},
            testshow:{},
            testinfo:{
              "router_01": {
                "s0": {
                  "ip": "172.168.1.1",
                  "interface": "s0/0/0",
                  "mask": "255.255.255.0",
                  "status": "1"
                },
                "s1": {
                  "ip": "172.168.2.1",
                  "interface": "s0/0/1",
                  "mask": null,
                  "status": null
                },
                "g0": {
                  "ip": "172.168.3.1",
                  "interface": "g0/0",
                  "mask": "255.255.255.0",
                  "status": "0"
                },
                "g1": {
                  "ip": null,
                  "interface": "g0/1",
                  "mask": null,
                  "status": null
                }
              },
              "router_02": {
                "s0": {
                  "ip": "172.168.1.2",
                  "interface": "s0/0/0",
                  "mask": "255.255.255.0",
                  "status": "1"
                },
                "s1": {
                  "ip": null,
                  "interface": "s0/0/1",
                  "mask": null,
                  "status": null
                },
                "g0": {
                  "ip": "172.168.1.3",
                  "interface": "g0/0",
                  "mask": "255.255.255.0",
                  "status": "1"
                },
                "g1": {
                  "ip": null,
                  "interface": "g0/1",
                  "mask": null,
                  "status": null
                }
              },
              "router_03": {
                "s0": {
                  "ip": null,
                  "interface": "s0/0/0",
                  "mask": null,
                  "status": null
                },
                "s1": {
                  "ip": null,
                  "interface": "s0/0/1",
                  "mask": null,
                  "status": null
                },
                "g0": {
                  "ip": null,
                  "interface": "g0/0",
                  "mask": null,
                  "status": null
                },
                "g1": {
                  "ip": null,
                  "interface": "g0/1",
                  "mask": null,
                  "status": null
                }
              },
              "cable_01": {
                "status": null,
                "left": {
                  "ip": "172.168.1.3",
                  "interface": "g0/0",
                  "mask": "255.255.255.0",
                  "status": "1"
                },
                "right": {
                  "ip": "172.168.1.3",
                  "interface": "g0/0",
                  "mask": "255.255.255.0",
                  "status": "1"
                }
              },
              "cable_02": {
                "status": null,
                "left": {
                  "ip": null,
                  "interface": "s0/0/0",
                  "mask": null,
                  "status": null
                },
                "right": {
                  "ip": null,
                  "interface": "s0/0/0",
                  "mask": null,
                  "status": null
                }
              }
            }
          }
      },
      props:['flags'],
      watch:{
        flags :function (newVal,oldVal) {
          console.log(newVal, oldVal)
          this.choice=newVal;//newVal就是获取的动态新数据，赋值给newdata
          this.index=this.choice.indexOf(-1)
          this.get_data()
          // this.allinfo = this.testinfo;
          this.testname = this.name[this.index]
          this.testshow = this.allinfo[this.testname]
          console.log(this.testshow)
        }
      },
      methods:{
        get_data:function(){
          // 使用axios请求数据
          this.$axios.get("http://localhost:8080/view").then((response)=>{
            console.log(response.data);
            this.allinfo = response.data
          }).catch(error=>{
            console.log(error);
          })
        }
      },
      created() {
        this.get_data()
        // this.allinfo = this.testinfo;
        this.testname = this.name[this.index]
        this.testshow = this.allinfo[this.testname]
        console.log(this.testshow)

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

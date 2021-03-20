<template>
   
  <el-card >
    <el-form :model="loanApply" ref="loanApplyFrom" label-width="150px">
      <div >
        <table width="1200" height="700px" border="1">
          <form></form>
          <tbody>
          <tr>
            <th scope="col" colspan="10" bgcolor="#66cdaa" height="70px">助学贷款申请表</th>
          </tr>
          <tr>
            <td rowspan="5" width="120" bgcolor="#66cdaa">学生</td>
            <td width="100" bgcolor="#66cdaa">姓名</td>
            <td colspan="3" width="440" >{{loanApply.stuName}}</td>
            <td width="100" bgcolor="#66cdaa">身份证号</td>
            <td colspan="4" width="440" > {{loanApply.idNumber}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">家庭住址</td>
            <td colspan="8">{{loanApply.stuAddress}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">毕业中学</td>
            <td colspan="3">{{loanApply.stuGraschool}}</td>
            <td bgcolor="#66cdaa">联系电话</td>
            <td colspan="4">{{loanApply.stuTel}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">高校名称</td>
            <td colspan="3">{{loanApply.stuSchoolname}}</td>
            <td bgcolor="#66cdaa">专业</td>
            <td colspan="4">{{loanApply.stuMajor}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">入学年份</td>
            <td colspan="3">{{loanApply.stuEntrance}}</td>
            <td bgcolor="#66cdaa">毕业年份</td>
            <td colspan="4">{{loanApply.stuGraduation}}</td>
          </tr>
          <tr>
            <td rowspan="3" bgcolor="#66cdaa">共同借款人</td>
            <td bgcolor="#66cdaa">姓名</td>
            <td colspan="3">{{loanApply.stuConame}}</td>
            <td width="100" bgcolor="#66cdaa">身份证号</td>
            <td colspan="4">{{loanApply.stuCoaddress}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">与学生关系</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:100%;border-width:0px;" v-model="loanApply.stuCorelation">
            </td>
            <td bgcolor="#66cdaa">联系电话</td>
            <td colspan="4">{{loanApply.stuCotel}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">居住住址</td>
            <td colspan="8">{{loanApply.stuCoaddress}}</td>
          </tr>
          <tr>
            <td rowspan="3" bgcolor="#66cdaa">贷款信息</td>
            <td bgcolor="#66cdaa">贷款金额</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:100%;border-width:0px;" v-model="loanApply.loanMoney">
            </td>
            <td width="100" rowspan="2" bgcolor="#66cdaa">贷款学年</td>
            <td colspan="4" rowspan="2">
              <div class="layui-form">
                <div class="layui-input-inline">
                  <input type="text" class="layui-input" id="test7" placeholder=" - " v-model="loanApply.loanTime">
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">贷款期限</td>
            <td>
              <select style="width: 100px;height: 30px;" v-model="loanApply.loanTerm">
                <option value="">请选择期限</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">贷款原因</td>
            <td colspan="8" style="width:500px;height:50px;margin:0px;padding:0px;overflow:hidden;">
              <textarea placeholder="请输入内容" class="layui-textarea" v-model="loanApply.loanReason"></textarea>
            </td>

          </tr>
          <tr>
            <td align="center" colspan="10">

              <div class="layui-form-item">
                <div class="layui-input-block">
                  <el-button type="primary" @click="onSubmit('loanApplyFrom')"
                  >提交</el-button
                  >
                  <el-button v-if="!isEdit" @click="resetForm('loanApplyFrom')"
                  >重置</el-button
                  >
                </div>
              </div>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </el-form>
  </el-card>
</template>
<script>
  // https://lbs.qq.com/tool/getpoint/  SONBZ-DMEWW-AKYRZ-O5HIL-VBK5O-JTFXQ
  import { getLoanApply, createLoanApply, updateLoanApply } from "@/api/loanApply";
  import { mapGetters } from 'vuex'

  const defaultLoanApply = {
    stuName: "",
    idNumber: "",
    stuTel: "",
    stuAddress:"",
    stuGraschool: "",
    stuSchoolname: "",
    stuMajor: "",
    stuEntrance: "",
    stuGraduation: "",
    stuConame: "",
    stuCoaddress: "",
    stuCotel: "",
    stuCoidNumber: "",
    stuCorelation: "",
    loanMoney: "",
    loanTime: "",
    loanTerm: "",
    loanReason: "",
    loanState: "",
  };
  export default {
    name: "updateLoanApply",
    props: {
      isEdit: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      ...mapGetters([
        'userId'
      ])
    },
    data() {
      return {
        loanApply: Object.assign({}, defaultLoanApply)
      };
    },
    created() {
      getLoanApply(this.$route.query.id).then((response) => {
        this.loanApply = response.data;
      });
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.loanApply.loanMoney = "";
        this.loanApply.loanTime = "";
        this.loanApply.loanTerm = "";
        this.loanApply.loanReason = "";
        this.loanApply.loanState = "";
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否提交数据', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.loanApply.loanState = 0;
              updateLoanApply(this.$route.query.id, this.loanApply).then(response=>{
                this.$message({
                  type: 'success',
                  message: '提交成功',
                  duration:1000
                });
                this.$router.push({path: '/ums/loanApply'})
              });
            });
          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration:1000
            });
            return false;
          }
        });
      },
    },
  };
</script>
<style>
  .my-autocomplete li {
    line-height: normal;
    padding: 7px;
  }
  .my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
  }

  .my-autocomplete li .highlighted .addr {
    color: #ddd;
  }
</style>



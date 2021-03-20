<template>
   
  <el-card >
    <el-form :model="loanApply" ref="storeFrom" label-width="150px">
      <div >
        <!-- 内容主体区域 -->
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
            <td colspan="4" width="440">{{loanApply.idNumber}}</td>
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
            <td colspan="4">{{loanApply.stuCoidNumber}}</td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">与学生关系</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:100%;border-width:0px;" v-model="loanApply.stuCorelation" readonly>
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
              <input type="text" style="width:100%;height:100%;border-width:0px;" v-model="loanApply.loanMoney" readonly>
            </td>
            <td width="100" rowspan="2" bgcolor="#66cdaa">贷款学年</td>
            <td colspan="4" rowspan="2">
              <div class="layui-form">
                <div class="layui-input-inline">
                  <input type="text" class="layui-input" id="test7" placeholder=" - " v-model="loanApply.loanTime" readonly>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">贷款期限</td>
            <td>
              {{loanApply.loanTerm}}
            </td>
          </tr>
          <tr>
            <td bgcolor="#66cdaa">贷款原因</td>
            <td colspan="8" style="width:500px;height:50px;margin:0px;padding:0px;overflow:hidden;">
              <textarea placeholder="请输入内容" class="layui-textarea" >{{loanApply.loanReason}}</textarea>
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
import { getLoanApply, updateLoanApply } from "@/api/loanApply";

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
  name: "LoanApply",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
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
    onSubmit(formName, loanState) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('是否提交数据', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if (this.isEdit) {
              var param = {};
              param.loanState = loanState;
              updateLoanApply(this.$route.query.id, param).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '审批完成',
                  type: 'success',
                  duration:1000
                });
                this.$router.back();
              });
            }
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



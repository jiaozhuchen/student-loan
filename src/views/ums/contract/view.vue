<template>
   
  <el-card >
    <el-form :model="contract" ref="contractFrom" >
      <table width="1200" height="1200">
        <form></form>
        <tbody>
        <tr>
          <th scope="col" colspan="15" bgcolor="#66cdaa" height="70px" style="font-size:25px;">高校助学贷款借款合同</th>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" align="center">合同编号：{{contract.contractNumber}}</td>
        </tr>
        <tr>
          <th scope="col" colspan="15" align="left" bgcolor="#66cdaa">甲方（借款学生）：</th>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">学生姓名</td>
          <td colspan="4" width="400">{{contract.stuName}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">身份证号</td>
          <td colspan="4" width="400">{{contract.idNumber}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">联系电话</td>
          <td colspan="4" width="400">{{contract.stuTel}}</td>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">高校名称</td>
          <td colspan="9" width="900">{{contract.stuSchoolname}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">入学年份</td>
          <td colspan="4" width="400">{{contract.stuEntrance}}</td>
        </tr>
        <tr>
          <th scope="col" colspan="15" align="left" bgcolor="#66cdaa">甲方（共同借款人）：</th>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">共同借款人姓名</td>
          <td colspan="4" width="400">{{contract.stuConame}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">共同借款人身份证号</td>
          <td colspan="4" width="400">{{contract.stuCoidNumber}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">与学生关系</td>
          <td colspan="4" width="400">{{contract.stuCorelation}}</td>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">居住地址</td>
          <td colspan="9" width="900">{{contract.stuCoaddress}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">联系电话</td>
          <td colspan="4" width="400">{{contract.stuCotel}}</td>
        </tr>
        <tr>
          <th scope="col" colspan="15" align="left" bgcolor="#66cdaa">乙方（国家开发银行）：</th>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">经办分行</td>
          <td colspan="9" width="900">{{contract.bankName}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">联系电话</td>
          <td colspan="4" width="400">{{contract.bankTel}}</td>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">通讯地址</td>
          <td colspan="14" width="1100">{{contract.bankAddress}}</td>
        </tr>
        <tr>
          <th scope="col" colspan="15" align="left" bgcolor="#66cdaa">丙方（受托机构）：</th>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">受托机构名称</td>
          <td colspan="9" width="900">{{contract.mechanismName}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">联系人</td>
          <td colspan="4" width="400">{{contract.agentName}}</td>
        </tr>
        <tr style="border:1px solid">
          <td width="100" bgcolor="#66cdaa" align="center">通讯地址</td>
          <td colspan="9" width="900">{{contract.mechanismAddress}}</td>
          <td width="100" bgcolor="#66cdaa" align="center">联系电话</td>
          <td colspan="4" width="400">{{contract.mechanismTel}}</td>
        </tr>
        <tr>
          <th scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-size:20px;">正文</th>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据中华人民共和国法律、法规以及相关政策，经各方协商一致， 订立本《国家开发银行生源地信用助学贷款借款合同》（简称“本合 同”）。除本合同另有说明外，甲方指借款学生和共同借款人双方。</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-weight:900;">第一条 借款金额及期限</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">借款金额：人民币{{contract.loanMoney}}元（大写：{{contract.loanUppermoney}}；
            借款期限：从乙方借款资金发放至甲方（借款学生）生源地的省（或县）学生资助管理中心在乙方开立的账户之日（简称“借款发放日”）起，至{{contract.dateLast}}年9月20日（最后还本日）止。</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-weight:900;">第二条 账户开立</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">甲方（借款学生）委托乙方为其开立支付宝账户（简称“指定账户”）用于乙方借款发放、资金划付和本息回收。 指定账户：{{contract.account}}。</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-weight:900;">第三条 借款用途</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">借款用途：限于甲方（借款学生）在高校就读期间支付学费、住宿费，剩余部分可用于生活费，不得挪用。</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-weight:900;">第四条 借款利率与利息</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">按照借款发放时中国人民银行授权全国银行间同业拆借中心发布的同期五年期以上贷款市场报价利率
            5%（每年 12 月 21 日根据最新 LPR5Y 调整一次，乙方无需另行通知甲方），自借款发放日起按年计收利息。甲方（借款学生）在校学习及因患病等原因休学期间利息由国家
            财政贴息，自毕业（或结业）当年 9 月 1 日起由甲方自行负担利息。</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-weight:900;">第五条 违约责任</td>
        </tr>
        <tr>
          <td scope="col" colspan="15" bgcolor="#66cdaa" height="40px">（一）甲方未按本合同约定期限足额归还借款本息的，乙方对逾期本金计收罚息，罚息利率为本合同借款利率的 130%；每月 20 日（11
            月除外）为逾期本息及罚息偿还日，甲方应在偿还日前及时登录“在线系统”查询应还本息（罚息计算至当月 20 日），并在偿还日的 5 日 前将应还本息存入指定账户；甲方应如实提供乙方要求的资料，配合
            乙方及丙方对甲方个人（包括家庭）经济收入、开支等进行调查。<br>
            （二）甲方不履行本合同约定的义务或违反其陈述、保证或承诺 的，构成甲方的违约行为。乙方有权停止发放借款、提前收回借款本 息，并将违约情况告知甲方（借款学生）所在单位（包括境内外就读 院校、工作单位等）、国家有关部门和甲方（共同借款人）居住地政府有关部门。<br>
            （三）甲方未按借款合同约定还款，连续拖欠超过一年且不与丙 方主动联系办理有关手续的，乙方、丙方有权在不通知甲方的情况下 在新闻媒体和网络等信息渠道上公布甲方姓名、身份证号码、甲方（借 款学生）毕业学校、甲方（借款学生）生源地（县、区）及违约行为
            等信息,并提供给全国学生资助管理中心等相关机构。<br>
            （四）当乙方未按合同约定足额发放借款给甲方造成损失时，应 承担相应法律责任。
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th scope="col" colspan="15" bgcolor="#66cdaa" height="40px" style="font-size:20px;">签字</th>
        </tr>
        <tr style="background: #66cdaa">
          <td width="100" align="right">甲方：（签字）<br>借款学生：<br></td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">甲方：（签字）<br>共同借款人：<br></td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">乙方：（公章）<br>法定代表人：</td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">丙方：（公章）<br>法定代表人：</td>
          <td colspan="2" width="200"></td>
        </tr>
        <tr style="background: #66cdaa">
          <td width="100" align="right">日期：</td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">日期：</td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">日期：</td>
          <td colspan="2" width="200"></td>
          <td width="100" align="right">日期：</td>
          <td colspan="2" width="200"></td>
        </tr>
        <tr>
          <td align="left">
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button type="submit" class="layui-btn" lay-submit="" lay-filter="demo1">保存√</button>
              </div>
            </div>
          </td>
        </tr>
        </tfoot>

      </table>
    </el-form>
  </el-card>
</template>
<script>
// https://lbs.qq.com/tool/getpoint/  SONBZ-DMEWW-AKYRZ-O5HIL-VBK5O-JTFXQ
import { getContract, updateContract } from '@/api/contract'

const defaultContract = {
  stuName: "",
  stuTel: "",
  stuSchoolname: "",
  stuEntrance: "",
  stuConame: "",
  stuCoaddress: "",
  stuCotel: "",
  stuCoidNumber: "",
  stuCorelation: "",
  bankName: "",
  bankAddress: "",
  bankTel: "",
  mechanismName: "",
  mechanismAddress: "",
  mechanismTel: "",
  agentName: "",
  loanMoney: "",
  loanTerm: "",
  contractNumber: "",
  loanUppermoney: "",
  dateFrom: "",
  dateTo: "",
  dateLast: "",
  account: "",
  money1: "",
  money2: "",
  loanDate: "",
  contractSate: "",

};

export default {
  name: "viewContract",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      contract: Object.assign({}, defaultContract),
    };
  },
  created() {
    getContract(this.$route.query.id).then((response) => {
      this.contract = response.data;
    });
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('是否提交数据', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if (this.isEdit) {
              updateSupplier(this.$route.query.id, this.contract).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration:1000
                });
                this.$router.back();
              });
            } else {
              addSupplier(this.contract).then(response => {
                this.$refs[formName].resetFields();
                this.contract = Object.assign({},defaultSupplier);
                this.$message({
                  message: '提交成功',
                  type: 'success',
                  duration:1000
                });
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.contract = Object.assign({}, defaultSupplier);
    }
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



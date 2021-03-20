<template> 
  <el-card >
    <el-form :model="student" ref="studentFrom" label-width="150px">
      <div >
        <table width="1200" height="700px">
          <tbody>
          <tr>
            <th scope="col" height="70px" align="center">基本信息</th>
          </tr>
          <tr>
            <td colspan="2" width="100" align="right">姓名：</td>
            <td colspan="3" width="150">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95" unselectable="on" v-model="student.stuName">
            </td>
            <td colspan="2" align="right" width="100">身份证号：</td>
            <td colspan="3" width="150">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95" readonly=""  unselectable="on" v-model="student.idNumber" >
            </td>
            <td colspan="2" align="right" width="100">性别：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuSex">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">毕业中学：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuGraschool">
            </td>
            <td colspan="2" align="right">户口性质：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuNation">
            </td>
            <td colspan="2" align="right">民族：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuNature">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right" width="100">身份证起始日期：</td>
            <td colspan="3" width="150">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.idNumberFrom">
            </td>
            <td colspan="2" align="right">身份证结束日期：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.idNumberTo">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">家庭住址：</td>
            <td colspan="13">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuAddress">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right" style="font-weight:800;">通信信息：</td>
          </tr>
          <tr>
            <td colspan="2" align="right">手机号码：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuTel">
            </td>
            <td colspan="2" align="right">邮箱：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuEmail">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right" style="font-weight:800;">高校信息：</td>
          </tr>
          <tr>
            <td colspan="2" align="right">高校名称：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuSchoolname">
            </td>
            <td colspan="2" align="right">院系：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuDepart">
            </td>
            <td colspan="2" align="right">专业：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuMajor">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">入学年份：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuEntrance">
            </td>
            <td colspan="2" align="right">毕业年份：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuGraduation">
            </td>
            <td colspan="2" align="right">学号：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuNumber">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right" style="font-weight:800;">共同借款人信息：</td>
          </tr>
          <tr>
            <td colspan="2" align="right">姓名：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuConame">
            </td>
            <td colspan="2" align="right">身份证号：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuCoidNumber">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">手机号：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuCotel">
            </td>
            <td colspan="2" align="right">与学生关系：</td>
            <td colspan="3">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuCorelation">
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">居住住址：</td>
            <td colspan="13">
              <input type="text" style="width:100%;height:90%;border-width:2px; border-color: #009f95"  unselectable="on" v-model="student.stuCoaddress">
            </td>
          </tr>

          <tr>
            <td align="center" colspan="10">

              <div class="layui-form-item">
                <div class="layui-input-block">
                  <el-button type="primary" @click="onSubmit('studentApplyFrom')"
                  >提交</el-button
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
  import {updateStudentInformation, getStudentInformation} from '@/api/student';
  import { mapGetters } from 'vuex'
  // import {formatDate} from '@/utils/date';

  const defaultStudent = {
    "id": null,
    "stuName": "",
    "idNumber": "",
    "stuTel": "",
    "idNumberFrom": "",
    "idNumberTo": "",
    "stuSex": "",
    "stuNation": "",
    "stuGraschool": "",
    "stuNature": "",
    "stuAddress": "",
    "stuEmail": "",
    "stuConame": "",
    "stuCoaddress": "",
    "stuCotel": "",
    "stuCoidNumber": "",
    "stuCorelation": "",
    "stuSchoolname": "",
    "stuDepart": "",
    "stuMajor": "",
    "stuEntrance": "",
    "stuGraduation": "",
    "stuNumber": ""
  };
  export default {
    name: 'updateStudentInformation',
    computed: {
      ...mapGetters([
        'userId'
      ])
    },
    data() {
      return {
        list: null,
        total: null,
        listLoading: false,
        dialogVisible: false,
        student: Object.assign({}, defaultStudent),
      }
    },
    created() {
      this.getDetail();
    },
    filters: {
      formatDateTime(time) {
        if (time == null || time === '') {
          return 'N/A';
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {
      onSubmit() {
        this.$confirm('是否要确认?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          updateStudentInformation(this.student.id,this.student).then(response => {
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
            this.dialogVisible =false;
          })
        })
      },
      getDetail() {
        this.listLoading = true;
        getStudentInformation(this.userId).then(response => {
          this.listLoading = false;
          this.student = response.data;
        });
      },
    }
  }
</script>
<style></style>



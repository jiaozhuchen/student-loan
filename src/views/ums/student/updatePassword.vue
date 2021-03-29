<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="student"
               :rules="loginRules"
               ref="studentForm"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <el-form-item prop="idNumber">
          <el-input name="idNumber"
                    type="text"
                    v-model="student.idNumber"
                    placeholder="请输入身份证号">
          <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
<!--        <el-form-item prop="stuPsw">-->
<!--          <el-input name="stuPsw"-->
<!--                    :type="pwdType"-->
<!--                    v-model="student.stuPsw"-->
<!--                    placeholder="请输入原密码">-->
<!--          <span slot="prefix">-->
<!--            <svg-icon icon-class="password" class="color-main"></svg-icon>-->
<!--          </span>-->
<!--          </el-input>-->
<!--        </el-form-item>-->
        <el-form-item prop="stuPsw">
          <el-input name="stuPsw"
                    :type="pwdType"
                    v-model="student.stuPsw"
                    placeholder="请输入密码">
          <span slot="prefix">
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input name="rePassword"
                    :type="pwdType"
                    v-model="student.rePassword"
                    placeholder="请输入密码">
          <span slot="prefix">
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="float: left; width: 40%" type="primary" :loading="loading" @click.native.prevent="handleUpdatePass">
            确认
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="login_center_bg" class="login-center-layout">
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import {updateStudentInformation, getStudentInformation, updateStudent} from '@/api/student';
  import { mapGetters } from 'vuex'
  import login_center_bg from '@/assets/images/login_center_bg.png'

  export default {
    name: 'updatePsw',
    computed: {
      ...mapGetters([
        'userId'
      ])
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
      return {
        student: {
          id: '',
          stuName: '',
          stuIdNumber: '',
          stuTel: '',
          stuPsw: '',
          rePassword: '',
          newStuPsw: '',
        },
        loginRules: {
          stuTel: [{required: true, trigger: 'blur'}],
          stuPsw: [{required: true, trigger: 'blur'}]
        },
        loading: false,
        pwdType: 'password',
        login_center_bg,
        dialogVisible:false,
        supportDialogVisible:false
      }
    },
    created() {
      getStudentInformation(this.userId).then(response => {
        this.listLoading = false;
        this.student.id = response.data.id;
      });
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleUpdatePass() {
        this.$refs.studentForm.validate(valid => {
          if (valid) {
            if(this.student.stuPsw != this.student.rePassword) {
              this.$message({
                message: '两次密码不一致，请确认！',
                type: 'error',
                duration: 1000
              });
              return ;
            }
            this.loading = true;
            updateStudent(this.student.id,this.student).then(response => {
              this.$message({
                message: '修改成功请重新登陆',
                type: 'success',
                duration: 1000
              });
              this.loading = false;
            }).catch(() => {
              this.$message({
                message: '原始密码错误！',
                type: 'error',
                duration: 1000
              });
              this.loading = false;
            });
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      },
      handleToLogin(){
        this.$router.push({path: '/login'})
      },
      handleTry(){
        this.dialogVisible =true
      },
      dialogConfirm(){
        this.dialogVisible =false;
        setSupport(true);
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>

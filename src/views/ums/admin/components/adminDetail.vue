<template>
   
  <el-card class="form-container" shadow="never">
    <el-form :model="adminInfo" :rules="rules" ref="supplierFrom" label-width="150px">
      <el-form-item label="姓名" prop="adminName">
        <el-input v-model="adminInfo.adminName" disabled></el-input>
      </el-form-item>
<!--      <el-form-item label="密码" prop="psw" >-->
<!--        <el-input v-model="adminInfo.psw" show-password type="password" disabled="true"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item label="身份证" prop="adminIdNumber">
        <el-input v-model="adminInfo.adminIdNumber" disabled></el-input>
      </el-form-item>
      <el-form-item label="身份证有效期">
        <el-input v-model="adminInfo.adminIdNumberFrom" :disabled="!isEdit"></el-input> ~ <el-input v-model="adminInfo.adminIdNumberTo" :disabled="!isEdit"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="adminTel">
        <el-input v-model="adminInfo.adminTel" :disabled="!isEdit"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="adminInfo.adminSex" :disabled="!isEdit"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="adminAddress">
        <el-input v-model="adminInfo.adminAddress" :disabled="!isEdit"></el-input>
      </el-form-item>

      <el-form-item label="邮箱：" prop="adminEmail">
        <el-input v-model="adminInfo.adminEmail" :disabled="!isEdit"></el-input>
      </el-form-item>
      <el-form-item v-if="isEdit">
        <el-button type="primary" @click="onSubmit('supplierFrom')"
          >提交</el-button
        >
        <el-button v-if="!isEdit" @click="resetForm('supplierFrom')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { getAdmin, updateAdmin } from "@/api/admin";

const defaultAdminInfo = {
  adminName: "",
  psw: "",
  adminIdNumber: "",
  adminIdNumberFrom: "",
  adminIdNumberTo: "",
  adminTel: "",
  sex: "",
  address: "",
  email: "",
};

export default {
  name: "AdminDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      adminInfo: Object.assign({}, defaultAdminInfo),
      rules: {
        adminName: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 2 到 140 个字符",
            trigger: "blur",
          },
        ],
        adminAddress: [
          { required: true, message: "请输入地址", trigger: "blur" },
        ],
        adminEmail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "长度在 2 到 50 个字符",
            trigger: "blur",
          },
        ]
      },
    };
  },
  created() {
    getAdmin(this.$route.query.id).then((response) => {
      this.adminInfo = response.data;
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
              updateAdmin(this.$route.query.id, this.adminInfo).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '修改成功',
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.adminInfo = Object.assign({}, defaultAdminInfo);
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



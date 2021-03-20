<template>
   
  <el-card class="form-container" shadow="never">
    <el-form :model="brand" :rules="rules" ref="brandFrom" label-width="150px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="brand.name"></el-input>
      </el-form-item>
      <el-form-item label="权重" prop="weight">
        <el-input v-model="brand.weight"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('brandFrom')"
          >提交</el-button
        >
        <el-button v-if="!isEdit" @click="resetForm('brandFrom')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { addBrand, getBrand, updateBrand } from "@/api/repair";

const defaultBrand = {
  name: "",
  weight: "",
  status: 1,
  deviceType: "phone"
};

export default {
  name: "BrandDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      brand: Object.assign({}, defaultBrand),
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 2 到 140 个字符",
            trigger: "blur",
          },
        ],
        weight: [
          { required: true, message: "请输入权重", trigger: "blur" },
        ],
        
      },
    };
  },
  created() {
    if (this.isEdit) {
      getBrand(this.$route.query.id).then((response) => {
        this.brand = response.data;
      });
    } else {
      this.brand = Object.assign({}, defaultBrand);
    }
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
              updateBrand(this.$route.query.id, this.brand).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration:1000
                });
                this.$router.back();
              });
            } else {
              addBrand(this.brand).then(response => {
                this.$refs[formName].resetFields();
                this.brand = Object.assign({},defaultBrand);
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
      this.brand = Object.assign({}, defaultBrand);
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



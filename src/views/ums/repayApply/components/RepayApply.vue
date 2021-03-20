<template>
  <el-card class="form-container" shadow="never">
    <el-form :model="repayApply"
             :rules="rules"
             ref="repayApplyFrom"
             label-width="150px">
      <el-form-item label="菜单名称：" prop="title">
        <el-input v-model="repayApply.title"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单：">
        <el-select v-model="repayApply.parentId"
                   placeholder="请选择菜单">
          <el-option
            v-for="item in selectMenuList"
            :key="item.id"
            :label="item.title"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="前端名称：" prop="name">
        <el-input v-model="repayApply.name"></el-input>
      </el-form-item>
      <el-form-item label="前端图标：" prop="icon">
        <el-input v-model="repayApply.icon" style="width: 80%"></el-input>
        <svg-icon style="margin-left: 8px" :icon-class="repayApply.icon"></svg-icon>
      </el-form-item>
      <el-form-item label="是否显示：">
        <el-radio-group v-model="repayApply.hidden">
          <el-radio :label="0">是</el-radio>
          <el-radio :label="1">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排序：">
        <el-input v-model="repayApply.sort"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('repayApplyFrom')">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  import {getRepayApply, updateRepayApply} from '@/api/repayApply'

  const defaultRepayApply = {
    title: '',
    parentId: 0,
    name: '',
    icon: '',
    hidden: 0,
    sort: 0
  };
  export default {
    name: "RepayApply",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        repayApply: Object.assign({}, defaultRepayApply),
      }
    },
    created() {
      if (this.isEdit) {
        getRepayApply(this.$route.query.id).then(response => {
          this.repayApply = response.data;
        });
      } else {
        this.repayApply = Object.assign({}, defaultRepayApply);
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
                updateRepayApply(this.$route.query.id, this.repayApply).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: 1000
                  });
                  this.$router.back();
                });
              }
            });
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>

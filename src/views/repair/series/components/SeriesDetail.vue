<template>
   
  <el-card class="form-container" shadow="never">
    <el-form :model="series" :rules="rules" ref="seriesFrom" label-width="150px">
      <el-form-item label="系列名称" prop="name">
        <el-input v-model="series.name"></el-input>
      </el-form-item>
      <el-form-item label="品牌：" prop="brandId">
        <el-select v-model="series.brandId" placeholder="请选择"  @change="chooseBrand">
          <el-option
            v-for="item in brandList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('seriesFrom')"
          >提交</el-button
        >
        <el-button v-if="!isEdit" @click="resetForm('seriesFrom')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { addSeries, getSeries, updateSeries,getBrandAll } from "@/api/repair";

const defaultSeries = {
  name: "",
  brandId: "",
  brandName: "",
  status: 1
};

export default {
  name: "SeriesDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      series: Object.assign({}, defaultSeries),
      brandList:[],
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
        brandId: [
          { required: true, message: "请选择品牌", trigger: "change" },
        ],
        
      },
    };
  },
  created() {
      getBrandAll().then((response) => {
        this.brandList = response.data;
      })

    if (this.isEdit) {
      getSeries(this.$route.query.id).then((response) => {
        this.series = response.data;
      });
    } else {
      this.series = Object.assign({}, defaultSeries);
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
              updateSeries(this.$route.query.id, this.series).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration:1000
                });
                this.$router.back();
              });
            } else {
              addSeries(this.series).then(response => {
                this.$refs[formName].resetFields();
                this.series = Object.assign({},defaultSeries);
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
      this.series = Object.assign({}, defaultSeries);
    },
    chooseBrand(id){
      for (const key in this.brandList) {
        if (Object.hasOwnProperty.call(this.brandList, key)) {
          const item = this.brandList[key];
          if(item.id == id){
              this.series.brandName = item.name
              break;
          }
        }
      }
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



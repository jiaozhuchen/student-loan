<template>
   
  <el-card class="form-container" shadow="never">
    <el-form :model="offer" :rules="rules" ref="offerFrom" label-width="150px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="offer.name"></el-input>
      </el-form-item>
      <el-form-item label="品牌" prop="brandName">
        <el-input v-model="offer.brandName"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="categoryName">
        <el-input v-model="offer.categoryName"></el-input>
      </el-form-item>

      <el-form-item label="配置：" prop="configuration">
        <el-input v-model="offer.configuration"></el-input>
      </el-form-item>
      <el-form-item label="价格：" prop="price">
        <el-input v-model="offer.price" type="number"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit('offerFrom')"
          >提交</el-button
        >
        <el-button v-if="!isEdit" @click="resetForm('offerFrom')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
// https://lbs.qq.com/tool/getpoint/  SONBZ-DMEWW-AKYRZ-O5HIL-VBK5O-JTFXQ
import { addOffer, getOffer, updateOffer } from "@/api/offer";
import SingleUpload from "@/components/Upload/singleUpload";

const defaultOffer = {
  name: "",
  brandName: "",
  categoryName: "",
  configuration: "",
  price: ""
};

export default {
  name: "OfferDetail",
  components: { SingleUpload },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      offer: Object.assign({}, defaultOffer),
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
        brandName: [
          { required: true, message: "请输入品牌", trigger: "blur" },
        ],
        configuration: [
          { required: true, message: "请输入配置", trigger: "blur" },
          {
            min: 2,
            max: 50,
            message: "长度在 2 到 50 个字符",
            trigger: "blur",
          },
        ],
        price: [
          { required: true, message: "请输入门店价格", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 10 到 100 个字符",
            trigger: "blur",
          },
        ],
        categoryName: [
          { required: true, message: "请输入分类", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 10 到 100 个字符",
            trigger: "blur",
          },
        ]
      }
    };
  },
  created() {
    if (this.isEdit) {
      getOffer(this.$route.query.id).then((response) => {
        this.offer = response.data;
      });
    } else {
      this.offer = Object.assign({}, defaultOffer);
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
              updateOffer(this.$route.query.id, this.offer).then(response => {
                this.$refs[formName].resetFields();
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration:1000
                });
                this.$router.back();
              });
            } else {
              addOffer(this.offer).then(response => {
                this.$refs[formName].resetFields();
                this.offer = Object.assign({},defaultOffer);
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
      this.offer = Object.assign({}, defaultOffer);
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



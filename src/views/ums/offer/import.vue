<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-document"></i>
        <span>文件</span>
        <el-button
          style="float: right"
          type="primary"
          size="small"
          @click="impOffer()"
        >
          保存
        </el-button>
        <el-button
          type="success"
          style="float: right; margin-right: 15px"
          @click="downloadTemp()"
          size="small"
        >
          下载模板
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <upload-excel-component
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
        />
      </div>
    </el-card>

    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
import { addOfferList } from "@/api/offer";
export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      items: [],
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 10;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 10m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
      this.items = [];
      for (const key in results) {
        if (Object.hasOwnProperty.call(results, key)) {
          const element = results[key];
          this.items.push({
            brandName: element.品牌,
            categoryName: element.分类,
            name: element.名称,
            configuration: element.配置参数,
            price: element.价格,
          });
        }
      }
    },
    impOffer() {
      addOfferList(this.items).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "导入成功.",
            type: "success",
          });
          this.tableData = [];
          this.tableHeader = [];
          this.items = [];
        }
      });
    },
    downloadTemp() {
      window.location.href = "/static/templates/报价模板.xlsx";
    },
  },
};
</script>
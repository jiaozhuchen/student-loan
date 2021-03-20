<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>
          <el-button
            style="float: right"
            @click="searchBrandList()"
            type="primary"
            size="small">
            查询结果
          </el-button>
        </div>
        <div style="margin-top: 15px">
          <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
            <el-form-item label="输入搜索：">
              <el-input style="width: 203px" v-model="listQuery.name" placeholder="合同编号"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        class="btn-add"
        @click="addSupplier()"
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="合同编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.contractNumber}}</template>
        </el-table-column>
        <el-table-column label="贷款学年" align="center">
          <template slot-scope="scope">{{scope.row.loanTerm}}</template>
        </el-table-column>
        <el-table-column label="学生姓名" align="center">
          <template slot-scope="scope">{{scope.row.stuName}}</template>
        </el-table-column>
        <el-table-column label="身份证号" align="center">
          <template slot-scope="scope">{{scope.row.idNumber}}</template>
        </el-table-column>
        <el-table-column label="学生电话" align="center">
          <template slot-scope="scope">{{scope.row.stuTel}}</template>
        </el-table-column>
        <el-table-column label="学校名称"  align="center">
          <template slot-scope="scope">{{scope.row.stuSchoolname}}</template>
        </el-table-column>
        <el-table-column label="共同借款人姓名"  align="center">
          <template slot-scope="scope">{{scope.row.stuConame}}</template>
        </el-table-column>
        <el-table-column label="共同借款人身份证号"  align="center">
          <template slot-scope="scope">{{scope.row.stuCoidNumber}}</template>
        </el-table-column>
        <el-table-column label="共同借款人电话"  align="center">
          <template slot-scope="scope">{{scope.row.stuCotel}}</template>
        </el-table-column>
        <el-table-column label="银行名称"  align="center">
          <template slot-scope="scope">{{scope.row.bankName}}</template>
        </el-table-column>
        <el-table-column label="银行电话"  align="center">
          <template slot-scope="scope">{{scope.row.bankTel}}</template>
        </el-table-column>
        <el-table-column label="机构名称"  align="center">
          <template slot-scope="scope">{{scope.row.mechanismName}}</template>
        </el-table-column>
        <el-table-column label="机构电话"  align="center">
          <template slot-scope="scope">{{scope.row.mechanismTel}}</template>
        </el-table-column>
        <el-table-column label="合同签订状态" width="100" align="center">
          <template slot-scope="scope">
            {{scope.row.contractSate | formatStatus}}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleView(scope.$index, scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import { getContract, getContractList, updateContract } from '@/api/contract'

  export default {
    name: 'supplierList',
    data() {
      return {
        listQuery: {
          name: null,
          pageNum: 1,
          pageSize: 10
        },
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: []
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        getContractList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
          this.totalPage = response.data.totalPage;
          this.pageSize = response.data.pageSize;
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleUpdate(index, row) {
        this.$router.push({path: '/ums/updateContract', query: {id: row.id}})
      },
      handleView(index, row) {
        this.$router.push({path: '/ums/viewContract', query: {id: row.id}})
      },
      handleShowStatusChange(index, row) {
        let data = new URLSearchParams();
        data.append("ids", row.id);
        data.append("showStatus", row.showStatus);
        updateShowStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.showStatus === 0) {
            row.showStatus = 1;
          } else {
            row.showStatus = 0;
          }
        });
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>



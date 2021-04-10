<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
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
          </el-form>
        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
    </el-card>
    <div class="table-container">
      <el-table ref="menuTable"
                style="width: 100%"
                :data="list"
                v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="合同编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.contractNumber}}</template>
        </el-table-column>
        <el-table-column label="学生姓名" align="center">
          <template slot-scope="scope">{{scope.row.stuName}}</template>
        </el-table-column>
        <el-table-column label="学生身份证号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.idNumber}}</template>
        </el-table-column>
        <el-table-column label="贷款学年" align="center">
          <template slot-scope="scope">{{scope.row.loanTerm}}</template>
        </el-table-column>
        <el-table-column label="还款账户" width="100" align="center">
          <template slot-scope="scope">{{scope.row.account}}</template>
        </el-table-column>
        <el-table-column label="贷款金额" width="100" align="center">
          <template slot-scope="scope">{{scope.row.loanMoney }}</template>
        </el-table-column>
        <el-table-column label="应还本息" width="100" align="center">
          <template slot-scope="scope">{{scope.row.loanMoney }}</template>
        </el-table-column>
        <el-table-column label="实还金额" width="100" align="center">
          <template slot-scope="scope">{{scope.row.repayMoney }}</template>
        </el-table-column>
        <el-table-column label="申请日期" width="100" align="center">
          <template slot-scope="scope">{{scope.row.repayApplyDate }}</template>
        </el-table-column>
        <el-table-column label="扣款日期" width="100" align="center">
          <template slot-scope="scope">{{scope.row.deductionDate }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <div>
              <el-col :span="9" style="text-align: right;">
                <el-button @click="dialogVisible=true"
                  style="text-align: right;font-weight:700;font-size: 17px;padding: 7px 10px;">还款
                </el-button>
              </el-col>
              <!--弹框-->
              <el-dialog title="还款金额" :visible.sync="dialogVisible" :close-on-click-modal="true" :modal="true" :show-close="true" :center="true">
                <input type="text" style="border-width:1px; border-color: #009f95" v-model="replayMoney">
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleUpdate(scope.row, replayMoney)">确 定</el-button>
                </span>
              </el-dialog>
            </div>
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
        :page-sizes="[10,15,20]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getRepayApplyList , updateRepayApply} from '@/api/repayApply'
  import { mapGetters } from 'vuex'
  export default {
    name: "repayApplyList",
    computed: {
      ...mapGetters([
        'userId','idNumber'
      ])
    },
    data() {
      return {
      dialogVisible: false,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          contractNumber: '',
          stuName: '',
          idNumber: ''
        },
        replayMoney: '',
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        this.listQuery.idNumber = this.idNumber;
        getRepayApplyList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
        });
      },
      handleUpdate(row) {
        row.status = 1;
        row.repayMoney = this.replayMoney;
        updateRepayApply(row.id, row);
        this.replayMoney = '';
        this.dialogVisible = false;
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      searchBrandList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
    }
  }

</script>

<style scoped>

</style>

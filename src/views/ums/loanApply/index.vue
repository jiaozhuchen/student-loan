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
<!--            <el-form-item label="输入搜索：">-->
<!--              <el-input style="width: 203px" v-model="listQuery.stuName" placeholder="学生姓名"></el-input>-->
<!--              <el-input style="width: 203px" v-model="listQuery.stuTel" placeholder="学生电话"></el-input>-->
<!--              <el-input style="width: 203px" v-model="listQuery.idNumber" placeholder="学生身份证号"></el-input>-->
<!--              <el-form-item label="审核状态：">-->
<!--                <el-select v-model="listQuery.loanState" class="input-width" placeholder="全部" clearable>-->
<!--                  <el-option v-for="item in stateOptions"-->
<!--                             :key="item.value"-->
<!--                             :label="item.label"-->
<!--                             :value="item.value">-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </el-form-item>-->
<!--            </el-form-item>-->
          </el-form>
        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
      <el-button
        class="btn-add"
        @click="addLoanApply()"
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
        <el-table-column label="学生姓名" width="100" align="center">
          <template slot-scope="scope">{{scope.row.stuName}}</template>
        </el-table-column>
        <el-table-column label="学生身份证号" align="center" width="300">
          <template slot-scope="scope">{{scope.row.idNumber}}</template>
        </el-table-column>
        <el-table-column label="学生号码" width="150" align="center">
          <template slot-scope="scope">{{scope.row.stuTel}}</template>
        </el-table-column>
        <el-table-column label="毕业学校" width="150" align="center">
          <template slot-scope="scope">{{scope.row.stuGraschool}}</template>
        </el-table-column>
        <el-table-column label="详细地址" width="100" align="center">
          <template slot-scope="scope">{{scope.row.stuAddress}}</template>
        </el-table-column>
        <el-table-column label="学校名称" width="100" align="center">
          <template slot-scope="scope">{{scope.row.stuSchoolname}}</template>
        </el-table-column>
        <el-table-column label="专业" width="100" align="center">
          <template slot-scope="scope">{{scope.row.stuMajor}}</template>
        </el-table-column>
        <el-table-column label="贷款申请状态" width="150" align="center">
          <template slot-scope="scope">{{scope.row.loanState | formatStatus}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.loanState != 1"
              @click="handleUpdate(scope.$index, scope.row)">更新
            </el-button>
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
  import { getLoanApplyList } from '@/api/loanApply'
  import { mapGetters } from 'vuex'

  export default {
    name: 'applyList',
    computed: {
      ...mapGetters([
        'idNumber'
      ])
    },
    data() {
      return {
        listQuery: {
          idNumber: this.idNumber,
          pageNum: 1,
          pageSize: 10
        },
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: [],

        stateOptions: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '待审核',
            value: 0
          },
          {
            label: '审核通过',
            value: 1
          },
          {
            label: '审核不通过',
            value: 2
          }
        ],
      }
    },
    created() {
      this.getList();
    },
    filters: {
      formatStatus(value) {
        if (value == 0) {
          return '待审核';
        } else if (value == 1) {
          return '审核通过';
        } else if (value == 2) {
          return '审核不通过';
        }
      },
    },
    methods: {
      getList() {
        this.listLoading = true;
        getLoanApplyList(this.listQuery).then(response => {
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
        this.$router.push({path: '/ums/updateLoanApply', query: {id: row.id}})
      },
      handleView(index, row) {
        this.$router.push({path: '/ums/viewLoanApply', query: {id: row.id}})
      },
      handleFactoryStatusChange(index, row) {
        var data = new URLSearchParams();
        data.append("ids", row.id);
        data.append("factoryStatus", row.factoryStatus);
        updateFactoryStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.factoryStatus === 0) {
            row.factoryStatus = 1;
          } else {
            row.factoryStatus = 0;
          }
        });
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
      addLoanApply() {
        this.$router.push({path: '/ums/addLoanApply'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>



<template>
  <div class="staff">
    <el-card class="tem-card">
      <div class="tem">
        <div class="search-item">
          <el-form
            size="small"
            ref="searchForm"
            label-position="right"
            inline
            label-width="80px"
            :model="searchForm"
          >
            <el-form-item label="姓名">
              <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable></el-input>
            </el-form-item>
            <el-form-item label="工号">
              <el-input v-model="searchForm.jobNumber" placeholder="请输入工号" clearable></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="search-btn">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            :loading="loading"
            @click="search"
          >查询</el-button>
          <el-button
            type="success"
            size="small"
            icon="el-icon-document"
            :loading="loading"
            @click="document"
          >审批</el-button>
        </div>
      </div>
    </el-card>
    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="Data"
        border
        @row-dblclick="checkInfo"
        @selection-change="handleSelectionChange"
      >
        <el-table-column fixed type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="120"></el-table-column>
        <el-table-column prop="jobNumber" label="工号" width="120"></el-table-column>
        <el-table-column prop="lobJobNumber" label="lob工号" width="120"></el-table-column>
        <el-table-column prop="businessDept" label="事业部" width="120"></el-table-column>
        <el-table-column prop="deliveryDept" label="交付部" width="120"></el-table-column>
        <el-table-column prop="level" label="级别" width="120"></el-table-column>
        <el-table-column prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column prop="graduationDate" label="毕业日期" width="150"></el-table-column>
        <el-table-column prop="educationalBkg" label="学历" width="120"></el-table-column>
        <el-table-column prop="phoneNumber" label="手机号码" width="150"></el-table-column>
        <el-table-column prop="emergencyContact" label="紧急联系人" width="120"></el-table-column>
        <el-table-column prop="emergencyPhoneNumber" label="紧急联系电话" width="150"></el-table-column>
      </el-table>
    </div>
    <Detail :isOpen='isOpen' @closeApp='closeApp'></Detail>
  </div>
</template>

<script>
import Detail from './detail'
export default {
  components: {
    Detail
  },
  data () {
    return {
      loading: false,
      searchForm: {
        name: '',
        jobNumber: ''
      },
      Data: [
        {
          name: '战战',
          sex: '男',
          jobNumber: 'xxx',
          lobJobNumber: 'sss',
          businessDept: 'xxx',
          deliveryDept: 'sss',
          level: 'qqq',
          age: 18,
          graduationDate: '2012-09-01',
          educationalBkg: 'sss',
          phoneNumber: '1882939893',
          emergencyContact: 'zhanzhan',
          emergencyPhoneNumber: '123213123213'
        }
      ],
      multipleSelection: [],
      isOpen: false
    }
  },
  methods: {
    search () {},
    document () {},
    checkInfo () {
      this.isOpen = true
    },
    closeApp () {
      this.isOpen = false
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/style/card.scss";
</style>

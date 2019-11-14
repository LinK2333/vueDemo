<template>
  <div class="home">
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
            <el-form-item label="开始时间">
              <el-date-picker
                style="width: 100%;"
                v-model="searchForm.entryTimeStart"
                type="date"
                placeholder="选择开始日期"
                value-format="yyyy-MM-dd"
                clearable
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-date-picker
                style="width: 100%;"
                v-model="searchForm.entryTimeEnd"
                type="date"
                placeholder="选择结束日期"
                value-format="yyyy-MM-dd"
                clearable
              ></el-date-picker>
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
            icon="el-icon-download"
            :loading="loading"
            @click="downLoad"
          >下载</el-button>
        </div>
      </div>
    </el-card>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border @row-dblclick="checkInfo">
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
        <el-table-column fixed="right" label="通知" width="240">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.row)" type="text" size="small">邮件通知</el-button>
            <el-button @click.native.prevent="deleteRow(scope.row)" type="text" size="small">联系本人</el-button>
            <el-button @click.native.prevent="deleteRow(scope.row)" type="text" size="small">联系紧急人</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <detailInfo :openInfo="openInfo" @closeInfo="closeInfo"></detailInfo>
  </div>
</template>

<script>
import {
  // 列表渲染
  searchList,
  // xiazai
  exportStaff
} from '@/api/home'
import detailInfo from './detailInfo'
export default {
  components: {
    detailInfo
  },
  data () {
    return {
      loading: false,
      // 查询card
      searchForm: {
        name: '',
        lobNumbner: '',
        entryTimeStart: '',
        entryTimeEnd: ''
      },
      tableData: [
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
      // 打开对话框
      openInfo: false
    }
  },
  mounted () {
    // 渲染列表
    // this.search()
  },
  methods: {
    // 查询
    search () {
      searchList(this.searchForm).then(res => {
        if (res.data.code === '200') {
          this.tableData = res.data.data
        }
      })
    },
    //
    deleteRow (row) {
      console.log(row)
    },
    // 查看详情
    checkInfo (row) {
      this.openInfo = true
      console.log(row)
    },
    // 下载
    downLoad () {
      exportStaff().then(res => {
        console.log(1)
      })
    },
    // 关闭信息框
    closeInfo () {
      this.openInfo = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/style/card.scss";
</style>

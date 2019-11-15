<template>
  <el-dialog title="信息详情" fullscreen :visible="openInfo" width="800px" :before-close="handleClose">
    <div>
      <el-form label-width="100px" :model="formLabelAlign">
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="姓名">
              <el-input size="small" v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="住址">
              <el-input size="small" v-model="formLabelAlign.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="性别">
              <el-input size="small" v-model="formLabelAlign.sex"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="学历">
              <el-input size="small" v-model="formLabelAlign.educationalBkg"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="工号">
              <el-input size="small" v-model="formLabelAlign.jobNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="毕业日期">
              <el-input size="small" v-model="formLabelAlign.graduationDate"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="lob工号">
              <el-input size="small" v-model="formLabelAlign.lobJobNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="工作年限">
              <el-input size="small" v-model="formLabelAlign.workYear"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="年龄">
              <el-input size="small" v-model="formLabelAlign.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="身份证">
              <el-input size="small" v-model="formLabelAlign.identificationNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="事业部">
              <el-input size="small" v-model="formLabelAlign.businessDept"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="手机号码">
              <el-input size="small" v-model="formLabelAlign.phoneNumber"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="交付部">
              <el-input size="small" v-model="formLabelAlign.deliveryDept"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="紧急联系人">
              <el-input size="small" v-model="formLabelAlign.emergencyContact"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="级别">
              <el-input size="small" v-model="formLabelAlign.level"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="紧急联系电话">
              <el-input size="small" v-model="formLabelAlign.emergencyPhoneNumber"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11">
            <el-form-item label="入职时间">
              <el-input size="small" v-model="formLabelAlign.entryTime"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <!-- <el-row type="flex" justify="end">
              <el-col :span="1">
                <el-button type="success" size="small" icon="el-icon-download">下 载</el-button>
              </el-col>
            </el-row>-->
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="but">
      <el-button type="success" size="small" icon="el-icon-download">批量下载</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="文件名称"></el-table-column>
        <el-table-column prop="name" label="文件描述"></el-table-column>
      </el-table>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="handleClose">关 闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import {
  // 查看个人详情
  getInfoById
} from '@/api/home'
export default {
  props: ['openInfo', 'infoId'],
  data () {
    return {
      formLabelAlign: {
        name: ''
      },
      multipleSelection: [],
      tableData: [
        {
          date: 'xxxx',
          name: 'ssss'
        },
        {
          date: 'xxxx',
          name: 'ssss'
        }
      ]
    }
  },
  watch: {
    openInfo (val) {
      if (val) {
        // this.renderInfo()
      }
    }
  },
  mounted () {},
  methods: {
    // 渲染列表
    renderInfo () {
      // 查看个人详情
      let data = { id: this.infoId }
      getInfoById(data).then(res => {
        console.log(res)
        if (res.data.code === '200') {
          this.formLabelAlign = res.data.data
        }
      })
    },
    // 获取当前内容
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(val)
    },
    // 关闭弹框
    handleClose () {
      this.$emit('closeInfo')
    }
  }
}
</script>

<style lang='scss' scoped>
.but {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>

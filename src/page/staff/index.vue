<template>
  <div class="staff">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">上传附件</el-button>
      <div slot="tip" class="el-upload__tip">
        支持多个文件上传，不限制文件类型，单个文件内容不能大于5M
      </div>
    </el-upload>

    <!-- from -->
    <div class="empty"></div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>新增员工</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >新增</el-button
        >
      </div>
      <div class="text item">
        <el-form label-width="100px" :model="formLabelAlign">
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="姓名">
                <el-input size="small" v-model="formLabelAlign.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="住址">
                <el-input
                  size="small"
                  v-model="formLabelAlign.address"
                ></el-input>
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
                <el-input
                  size="small"
                  v-model="formLabelAlign.educationalBkg"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="工号">
                <el-input
                  size="small"
                  v-model="formLabelAlign.jobNumber"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="毕业日期">
                <el-input
                  size="small"
                  v-model="formLabelAlign.graduationDate"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="lob工号">
                <el-input
                  size="small"
                  v-model="formLabelAlign.lobJobNumber"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="工作年限">
                <el-input
                  size="small"
                  v-model="formLabelAlign.workYear"
                ></el-input>
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
                <el-input
                  size="small"
                  v-model="formLabelAlign.identificationNum"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="事业部">
                <el-input
                  size="small"
                  v-model="formLabelAlign.businessDept"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="手机号码">
                <el-input
                  size="small"
                  v-model="formLabelAlign.phoneNumber"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="交付部">
                <el-input
                  size="small"
                  v-model="formLabelAlign.deliveryDept"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="紧急联系人">
                <el-input
                  size="small"
                  v-model="formLabelAlign.emergencyContact"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="级别">
                <el-input
                  size="small"
                  v-model="formLabelAlign.level"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="紧急联系电话">
                <el-input
                  size="small"
                  v-model="formLabelAlign.emergencyPhoneNumber"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-form-item label="入职时间">
                <el-input
                  size="small"
                  v-model="formLabelAlign.entryTime"
                ></el-input>
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
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLabelAlign: {
        name: ''
      },
      fileList: []
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      if (file.size > 5000000) {
        return this.$message.error('文件不能超过5M!')
      }
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/card.scss';
@import '@/style/staff.scss';
</style>

<template>
  <div class="login">
    <el-row class="row" type="flex" justify="center">
      <el-col :span="8">
        <div class="title">后台管理系统</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-loginForm">
          <el-form-item label="用户名" prop="username">
            <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="loginForm.password"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="starLogin">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    starLogin () {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) {
          return this.$message.error('验证失败!')
        }
        let res = await this.$store.dispatch('login', this.loginForm)
        const { status, msg } = res
        if (status === 200) {
          this.$message.success('登录成功')
          this.$router.push({ path: '/index' })
        } else {
          this.$message.warning(msg)
        }
      })
    },
    // 重置表单
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/style/login.scss";
</style>

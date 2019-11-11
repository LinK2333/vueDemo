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
      arouter: [
        {
          name: '订单管理',
          children: [
            {
              name: '订单列表'
            },
            {
              name: '生产管理'
            },
            {
              name: '退货管理'
            }
          ]
        },
        {
          name: '产品管理',
          children: [
            {
              name: '产品列表'
            },
            {
              name: '产品分类'
            }
          ]
        }
      ],
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
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return this.$message.error('验证失败!')
        }
        // 调用登录接口,获取token,并存到localStorage中
        // 登录跳转
        this.$store
          .dispatch('LoginByUserInfo', this.loginForm)
          .then(() => {
            // 获取路由的全部信息

            this.$router.push({
              name: 'index'
            })
          })
          .catch(err => {
            this.$message.error(err) // 登录失败提示错误
          })
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

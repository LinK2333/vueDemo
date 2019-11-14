<template>
  <div class="layout">
    <div class="aside">
      <Asider></Asider>
    </div>
    <div class="main">
      <div class="picture">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img class="img" src="../../assets/images/headerPicture.png" alt />
            Admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-circle-close" @click.native="loginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/page/index/Breadcrumb'
import Asider from '@/page/index/Asider'
import store from '@/store'
export default {
  components: { Asider, Breadcrumb },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    // 登出
    async loginOut () {
      let res = await store.dispatch('LogOut')
      const { status } = res.data
      if (status === 200) {
        localStorage.removeItem('tokenkey')
        this.$message.success('退出登录成功')
        this.$router.push('/')
      } else {
        this.$message.info('退出登录失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

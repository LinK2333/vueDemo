<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#39b38e"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
  >
    <div v-for="route in menusList" :key="route.name" v-if="!route.hidden">
      <!-- 单路由   -->
      <el-menu-item v-if="route.alwaysShow" :index="route.children[0].path">
        <template slot="title">
          <span>{{route.children[0].name}}</span>
        </template>
      </el-menu-item>
      <!-- 多路由 -->
      <el-submenu v-else :index="route.path">
        <template slot="title">
          <!-- <router-link :to='route.path'> -->
          <div class="link-style">
            <span slot="title">{{route.name}}</span>
          </div>
          <!-- </router-link> -->
        </template>
        <el-menu-item-group v-for="child in route.children" :key="child.name">
          <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      menusList: []
    }
  },
  created () {
    this.menusList = JSON.parse(JSON.stringify(this.$store.getters.routes))
    console.log(this.menusList)
  }
}
</script>

<style lang='scss' scoped>
.el-menu {
  border: none;
}
</style>

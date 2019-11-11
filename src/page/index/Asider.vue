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
    <el-submenu v-for="item in asideList" :key="item.id" :index="item.id+''">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="item1 in item.children"
        :key="item1.id"
        :index="'/'+item1.path"
      >{{ item1.authName }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      asideList: [
        {
          id: 1,
          authName: '系统管理',
          children: [{
            id: 2,
            path: '',
            authName: '角色管理'
          },
          {
            id: 3,
            path: '',
            authName: '权限管理'
          }]
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.el-menu {
  border:none;
}
</style>

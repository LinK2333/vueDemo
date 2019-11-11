<template>
  <div></div>
</template>

<script>
// import { hello } from '@/api/index'
import Header from '@/page/index/header'
import Asider from '@/page/index/Asider'
export default {
  components: { Header, Asider },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store.state.userInfo)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

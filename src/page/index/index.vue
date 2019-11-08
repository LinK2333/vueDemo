<template>
  <div>
    <div @click="goHello">{{msg | dateLine}}</div>
    <div @click="getHello">请求</div>
  </div>
</template>

<script>
import { hello } from '@/api/index'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    this.msg = +new Date()
  },
  methods: {
    goHello () {
      this.$router.push({
        name: 'HelloWorld'
      })
    },
    getHello () {
      hello({
        name: 'jack',
        age: 18
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

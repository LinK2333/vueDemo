<template>
  <div @click="goHello">{{msg | dateLine}}</div>
</template>

<script>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
</style>

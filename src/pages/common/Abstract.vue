<template>
  <div>
    index
  </div>
</template>
<script>
  export default {
    created () {
      console.log(this.$options.doNotInit)
      this.init()
    },
    methods: {
      init () {
        console.log('11')
      }
    }
  }
</script>
<style scoped lang="stylus">
</style>

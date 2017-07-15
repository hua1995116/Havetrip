<template>
  <div>
    index
  </div>
</template>
<script>
  import Abstract from '../common/Abstract.vue'
  export default {
    mixins: [Abstract],
    doNotInit: true,
    created () {
      this.init()
    }
  }
</script>
<style scoped lang="stylus">
</style>

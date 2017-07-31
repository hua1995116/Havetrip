<template>
  <div>
    notes
    <vue-html5-editor @change="updateData" :content="content" :height="500" :z-index="1000" :auto-height="true" ></vue-html5-editor>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content: 'hello'
      }
    },
    methods: {
      updateData (data) {
        console.log(data)
      }
    }
  }
</script>
<style scoped lang="stylus">
</style>

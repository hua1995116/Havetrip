<template>
  <div>
    <ul class="index-tab">
      <li><router-link :to="{ path: '/index/detail1' }">tab1</router-link></li>
      <li><router-link :to="{ path: '/index/detail2' }">tab2</router-link></li>
      <li><router-link :to="{ path: '/index/detail3' }">tab3</router-link></li>
    </ul>
    <div class="index-l">
      <router-view></router-view>
    </div>
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
  .index-tab{
    float: left;
    width: 200px;
    li{
      width: 200px;
      height 80px;
      float: left;
      list-style: none;
    }
  }
  .index-l{
    width: 400px;
    height: 400px;
    float: left;
    border: 1px solid #ddd;
  }
</style>

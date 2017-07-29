<template>
  <div>
    <ul class="index-tab">
      <li><router-link :to="{ path: '/index/detail1' }">tab1</router-link></li>
      <li><router-link :to="{ path: '/index/detail2' }">tab2</router-link></li>
      <li><router-link :to="{ path: '/index/detail3' }">tab3</router-link></li>
    </ul>
    <div class="index-l">
      <div>
        {{list}}
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Abstract from '../common/Abstract.vue'
  import axios from 'axios'
  export default {
    mixins: [Abstract],
    doNotInit: true,
    data () {
      return {
        list: []
      }
    },
    created () {
      this.init()
      this.ajaxgetdata()
    },
    methods: {
      ajaxgetdata () {
        axios.get('/api/ssm01/country/oneCountryById?id=1')
          .then((res) => {
            this.list = res.data
          })
      }
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

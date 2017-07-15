/**
 * Created by huayi on 2017/7/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import modal1 from './modules/modal1'

const store = new Vuex.Store({
  modules: {
    modal1
  }
})
export default store

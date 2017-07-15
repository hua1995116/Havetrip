import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../pages/common/404.vue'
import { Main, ShowIndex, TravelNotes, Personal } from './routes'
Vue.use(Router)

const root = Vue.component('root', {
  template: '<router-view></router-view>'
})

export default new Router({
  routes: [
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/',
      name: 'XX系统',
      component: root,
      children: [
        Main,
        ShowIndex,
        TravelNotes,
        Personal
      ]
    },
    {
      path: '*',
      redirect: {path: '/404'}
    }
  ]
})

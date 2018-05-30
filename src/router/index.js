import Vue from 'vue'
import Router from 'vue-router'

import home from '@/router/home'
import tag from '@/router/tag'
import information from '@/router/information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: home
    },
    {
      path: '/tag',
      name: 'tag',
      components: tag
    },
    {
      path: '/information',
      name: 'information',
      components: information
    }
  ]
})

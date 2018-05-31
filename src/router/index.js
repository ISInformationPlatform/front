import Vue from 'vue'
import Router from 'vue-router'

import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'
import ThePerson from '@/components/ThePerson'
import ThePost from '@/components/ThePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Forum: TheForum,
        SideBar: TheBillboard
      }
    },
    {
      path: '/tag',
      name: 'tag',
      components: {
        Forum: TheForum
      }
    },
    {
      path: '/article',
      name: 'article',
      components: {
        Content: ThePost
      }
    },
    {
      path: '/information',
      name: 'information',
      components: {
        Content: ThePerson
      }
    }
  ]
})

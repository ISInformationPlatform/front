import Vue from 'vue'
import Router from 'vue-router'

import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'
import ThePerson from '@/components/ThePerson'
import ThePost from '@/components/ThePost'
import TheSignin from '@/components/TheSignin'
import TheSignUp from '@/components/TheSignUp'

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
    },
    {
      path: '/Signin',
      name: 'Signin',
      components: {
        Content: TheSignin
      }
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      components: {
        Content: TheSignUp
      }
    }
  ]
})

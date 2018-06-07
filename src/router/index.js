import Vue from 'vue'
import Router from 'vue-router'

import forum from '@/page/forum'
import newPost from '@/page/newPost'

import TheForum from '@/components/TheForum'
import ThePerson from '@/components/ThePerson'
import ThePost from '@/components/ThePost'
import TheSignIn from '@/components/TheSignIn'
import TheSignUp from '@/components/TheSignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/forum/:forumId',
      name: 'forum',
      components: {
        Content: forum
      }
    },
    {
      path: '/newPost',
      name: 'post',
      components: {
        Content: newPost
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
      path: '/SignIn',
      name: 'SignIn',
      components: {
        Content: TheSignIn
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

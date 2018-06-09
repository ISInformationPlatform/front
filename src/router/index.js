import Vue from 'vue'
import Router from 'vue-router'

import forum from '@/page/forum'
import post from '@/page/post'
import notice from '@/page/notice'
import newPost from '@/page/newPost'

import ThePerson from '@/components/ThePerson'
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
      path: '/forum/:forumId/post/:postId',
      name: 'forum',
      components: {
        Content: post
      }
    },
    {
      path: '/forum/:forumId/post',
      name: 'newPost',
      components: {
        Content: newPost
      }
    },
    {
      path: '/notice/:noticeId',
      name: 'notice',
      components: {
        Content: notice
      }
    },
    {
      path: '/person/:personId',
      name: 'person',
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

import Vue from 'vue';
import Router from 'vue-router';

import forum from '@/page/forum';
import post from '@/page/post';
import newPost from '@/page/newPost';
import home from '@/page/home';
import newBill from '@/page/newBill';
import billboard from '@/page/Billboard';

import ThePerson from '@/components/ThePerson';
import TheSignIn from '@/components/TheSignIn';
import TheSignUp from '@/components/TheSignUp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        Content: home
      }
    },
    {
      path: '/forum/:forumId',
      components: {
        Content: forum
      }
    },
    {
      path: '/forum/:forumId/post/:postId',
      components: {
        Content: post
      }
    },
    {
      path: '/forum/:forumId/post',
      components: {
        Content: newPost
      }
    },
    {
      path: '/notice/:noticeId',
      components: {
        Content: newBill
      }
    },
    {
      path: '/person/:personId',
      components: {
        Content: ThePerson
      }
    },
    {
      path: '/SignIn',
      components: {
        Content: TheSignIn
      }
    },
    {
      path: '/forum/:forumId/notice/:noticeId',
      components: {
        Content: billboard
      }
    },
    {
      path: '/SignUp',
      components: {
        Content: TheSignUp
      }
    }
  ]
});

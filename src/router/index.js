import Vue from 'vue';
import Router from 'vue-router';

import forum from '@/page/forum';
import post from '@/page/post';
import notice from '@/page/notice';
import newPost from '@/page/newPost';
import home from '@/page/home';

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
        Content: notice
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
      path: '/SignUp',
      components: {
        Content: TheSignUp
      }
    }
  ]
});

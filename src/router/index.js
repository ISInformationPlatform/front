import Vue from 'vue';
import Router from 'vue-router';

import forum from './forum';
import notice from './notice';
import sign from './sign';

import Home from '@/page/Home';
import ThePerson from '@/components/ThePerson';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        Content: Home
      }
    },
    {
      path: '/person/:personId',
      components: {
        Content: ThePerson
      }
    }
  ]
    .concat(forum)
    .concat(notice)
    .concat(sign)
});

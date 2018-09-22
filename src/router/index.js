import Vue from 'vue';
import Router from 'vue-router';

import forum from './forum';
import notice from './notice';
import sign from './sign';

import Home from '@/page/Home';
import Person from '@/page/Person';
import Jump from '@/page/Jump';

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
        Content: Person
      }
    },
    {
      path: '/jump',
      components: {
        Content: Jump
      }
    }
  ]
    .concat(forum)
    .concat(notice)
    .concat(sign)
});

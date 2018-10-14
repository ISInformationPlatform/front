import Vue from 'vue';
import Vuex from 'vuex';

import { JUMP_WAITING, JUMP_SUCCESS, JUMP_FAIL } from '@/page/Jump';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    user_id: null,
    jump_status: 0,
    jump_message: 'test'
  },
  mutations: {
    update_log_state (state, { username, id }) {
      state.username = username;
      state.user_id = id;
    },
    delete_log_state (state, id) {
      state.user_id = null;
      state.username = null;
    },
    update_jump (state, { message, status }) {
      state.jump_message = message;
      state.jump_status = status;
    }
  },
  actions: {
    logIn (context, { id, username }) {
      context.commit('update_log_state', { id, username });
    },
    logOut (context) {
      context.commit('delete_log_state');
    },
    jump (context, { message, obj, promise }) {
      obj.$router.push('/jump');
      context.commit('update_jump', { message: '加载中', status: JUMP_WAITING });

      promise.then(data => {
        context.commit('update_jump', { message: message, status: JUMP_SUCCESS });
        obj.$router.push('/jump');
      });

      promise.catch(err => {
        context.commit('update_jump', { message: err.message, status: JUMP_FAIL });
        obj.$router.push('/jump');
      });
    }
  }
});

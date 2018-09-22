import Vue from 'vue';
import Vuex from 'vuex';

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
    jump (context, { obj, message, status }) {
      if (status === 0) {
        message = '加载中';
      }

      context.commit('update_jump', { message, status });
      obj.$router.push('/jump');
    }
  }
});

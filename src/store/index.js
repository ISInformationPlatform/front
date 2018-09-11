import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    user_id: null
  },
  mutations: {
    update_log_state (state, { username, id }) {
      state.username = username;
      state.user_id = id;
    },
    delete_log_state (state, id) {
      state.user_id = null;
      state.username = null;
    }
  },
  actions: {
    logIn (context, { id, username }) {
      context.commit('update_log_state', { id, username });
    },
    logOut (context) {
      context.commit('delete_log_state');
    }
  }
});

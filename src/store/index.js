import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    USERNAME: null,
    ID: null
  },
  mutations: {
    log_in (state, username) {
      state.USERNAME = username;
    },
    log_out (state) {
      state.USERNAME = null;
    },
    update_id (state, id) {
      state.ID = id;
    }
  }
});

import Vue from 'vue';
import Vuex from 'vuex';
import RejiModule from './reji-store';

// import text from '../assets/js/text';
import css from '../assets/js/text-css';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // strictモード -本番環境ではoffにする。
  state: {
    // t: text,
    css,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    reji: RejiModule,
  },
});

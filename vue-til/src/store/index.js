import Vue from 'vue';
import Vuex from 'vuex';
import {
  getUserFromCookie,
  getAuthFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 새로고침을 했을때 token 이 없어지는 문제를 해결하기 위함이며 지속적인 주요 값 관리를 위함이다.
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // this.$store.dispatch 를 사용하기 위한 전역 함수 로직
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      // cookie 에 입력.
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
    },
  },
});

// store/index.js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      dialog: {
        isVisible: false,
        title: ''
      },
      // Các trạng thái khác của ứng dụng
    };
  },
  mutations: {
    SHOW_DIALOG(state, title) {
      state.dialog.isVisible = true;
      state.dialog.title = title;
    },
    HIDE_DIALOG(state) {
      state.dialog.isVisible = false;
      state.dialog.title = '';
    }
  },
  actions: {
    showDialog({ commit }, title) {
      commit('SHOW_DIALOG', title);
    },
    hideDialog({ commit }) {
      commit('HIDE_DIALOG');
    }
  },
  getters: {
    dialogIsVisible: (state) => state.dialog.isVisible,
    dialogTitle: (state) => state.dialog.title
  }
});

import { createStore } from 'vuex';

const STORAGE_KEY = 'todos';

export const store = createStore({
  state() {
    return {
      todos: []
    };
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, text) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      state.todos.push(newTodo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
      }
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    }
  },
  actions: {
    initializeStore({ commit }) {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      commit('SET_TODOS', todos);
    },
    addTodo({ commit }, text) {
      commit('ADD_TODO', text);
    },
    toggleTodo({ commit }, id) {
      commit('TOGGLE_TODO', id);
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id);
    }
  },
 
});


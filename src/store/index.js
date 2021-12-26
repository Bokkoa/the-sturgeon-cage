import { createStore } from 'vuex'
import fishModule from '@/modules/fish/store'
// import { darkTheme } from 'naive-ui'


const store = createStore({

  state: {
    theme: null
  },

  mutations: {
    toggleDarkTheme: (state, mode) => state.theme = mode
  },

  actions: {

  },

  getters:{
  
    getDarkThemeState: ( state ) => state.theme

  },

  modules: {
    fish: fishModule
  }
})


export default store
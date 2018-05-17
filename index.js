import Vue from 'vue'
import Vuex from 'vuex'

import { router } from './router'
import store from './store/index'
import App from './components/App'

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

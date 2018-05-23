import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import { router } from './router'
import store from './store/index'
import App from './components/App'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

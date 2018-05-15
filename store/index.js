import Vue from 'vue'
import Vuex from 'vuex'
import req from '../api/request'
import tweets from './modules/tweets'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0,
  },
  modules: {
    tweets,
  },
});

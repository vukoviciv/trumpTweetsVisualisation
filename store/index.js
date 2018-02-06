import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import req from '../api/request'
import tweets from './modules/tweets'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  state: {
    count: 0,
  },
  modules: {
    tweets,
  },
});

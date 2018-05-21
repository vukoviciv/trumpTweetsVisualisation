import Vue from 'vue'
import Vuex from 'vuex'
import req from '../api/request'
import tweets from './modules/tweets'
import graphs from './modules/graphs'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tweets,
    graphs
  },
});

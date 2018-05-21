import * as types from '../mutation-types'
import req from '../../api/request'
import { type } from 'os';

const routes = {
  fetchGraphData: '/api/graph/fetch_graph',
}

// initial state
const state = {
  words: [],
}

// getters
const getters = {
  words: state => state.words,
}

// actions
const actions = {
  fetchGraph ({ commit }) {
    req.get(`${routes.fetchGraphData}`)
      .then(response => {
        commit(types.CREATE_GRAPH, response.data)
      })
      .catch(err => console.log('boom', err))
  },
}

// mutations
const mutations = {
  [types.CREATE_GRAPH] (state, words) {
    state.words = words
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

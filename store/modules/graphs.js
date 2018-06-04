import * as types from '../mutation-types'
import req from '../../api/request'
import { type } from 'os';

const routes = {
  fetchGraphData: '/api/graph/fetch_graph',
}

// initial state
const state = {
  wordsWithCount: [],
}

// getters
const getters = {
  wordsWithCount: state => state.wordsWithCount,
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
  [types.CREATE_GRAPH] (state, wordsWithCount) {
    state.wordsWithCount = wordsWithCount
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

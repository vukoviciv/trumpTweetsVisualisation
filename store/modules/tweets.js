import * as types from '../mutation-types'
import req from '../../api/request'
import { type } from 'os';

// initial state
const state = {
  all: [],
  count: 0,
  lastPageNumber: 1, // will be updated with each api request
}

// getters
const getters = {
  allTweets: state => state.all,
  count: state => state.count
}

const actions = {
  appendTweetsPage ({ commit }) {
    const currentPageNumber = state.lastPageNumber;
    console.log('aa', currentPageNumber)
    req.get(`/api/tweets/page/${currentPageNumber}`)
      .then(response => {
        console.log(response)
        const { tweets } = response.data
        commit(types.APPEND_TWEETS_PAGE, { tweets })
        commit(types.INCREMENT_PAGE_COUNTER)
      })
      .catch(err => console.log('sjebalo se', err))
  }
}

// mutations
const mutations = {
  [types.INCREMENT_COUNT] (state, { number }) {
    state.count += number
  },
  [types.APPEND_TWEETS_PAGE] (state, { tweets }) {
    state.all = state.all.concat(tweets)
  },
  [types.INCREMENT_PAGE_COUNTER] (state) {
    state.lastPageNumber += 1
    console.log('new page number state', state.lastPageNumber)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
import * as types from '../store/mutation-types'

export const getTweets = ({ commit }) => {
  commit(types.GET_TWEET_PAGE)
}

export const incrementCount = ({ commit }, number) => {
  console.log(commit)
  commit(types.INCREMENT_COUNT, { number })
}
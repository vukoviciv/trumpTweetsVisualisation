import * as types from '../store/mutation-types'

// export const getTweets = ({ commit }) => {
//   commit(types.GET_TWEET_PAGE)
// }

// export const appendTweetsPage = ({ commit }) => {
//   console.log('in action')

//   commit(types.APPEND_TWEETS_PAGE)
// }

export const incrementCount = ({ commit }, number) => {
  console.log(number)
  commit(types.INCREMENT_COUNT, { number })
}
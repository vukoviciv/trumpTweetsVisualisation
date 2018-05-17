import * as types from '../mutation-types'
import req from '../../api/request'
import { type } from 'os';

/*  Example of a tweet
    const test = {
        id_str: '901032475111116800',
        full_text: 'Few, if any, Administrations have done more in just 7 months than the Trump...',
        source: '<a href='http://twitter.com/download/iphone' rel='nofollow'>Twitter for iPhone</a>',
        created_at: 'Fri Aug 25 10:44:17 +0000 2017',
        retweet_count: 15628,
        favorite_count: 70984
    };
*/

const routes = {
  fetchPage: '/api/tweets/page',
  fetchProfile: '/api/tweets/profile'
}

// initial state
const state = {
  tweets: [],
  lastPageNumber: 1, // will be updated with each api request
  profilePictureUrl: undefined,
  bannerUrl: undefined
}

// getters
const getters = {
  tweets: state => state.tweets,
  profilePictureUrl: state => state.profilePictureUrl,
  bannerUrl: state => state.bannerUrl
}

// actions
const actions = {
  appendTweetsPage ({ commit }) {
    const currentPageNumber = state.lastPageNumber;

    req.get(`${routes.fetchPage}/${currentPageNumber}`)
      .then(response => {
        commit(types.APPEND_TWEETS_PAGE, response.data.tweets)
        commit(types.INCREMENT_PAGE_COUNTER)
      })
      .catch(err => console.log('boom', err))
  },

  getProfileAndBackgroundPicture ({ commit }) {
    req.get(`${routes.fetchProfile}`)
      .then(response => {
        const { imageUrl, bannerUrl } = response.data
        commit(types.UPDATE_PROFILE, { imageUrl, bannerUrl })
      })
      .catch(err => console.log('boom', err))
  }
}

// mutations
const mutations = {
  [types.APPEND_TWEETS_PAGE] (state, fetchedTweets) {
    state.tweets = state.tweets.concat(fetchedTweets)
  },
  [types.INCREMENT_PAGE_COUNTER] (state) {
    state.lastPageNumber += 1
  },
  [types.UPDATE_PROFILE] (state, profile) {
    state.profilePictureUrl = profile.imageUrl
    state.bannerUrl = profile.bannerUrl
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

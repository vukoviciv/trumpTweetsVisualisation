import * as types from '../mutation-types'
import req from '../../api/request'

// initial state
const state = {
  all: ['testis', 'test'],
  count: 0,
}

// getters
const getters = {
  allTweets: state => state.all,
  count: state => state.count
}

// actions
// const actions = {
//   getAllProducts ({ commit }) {
//     shop.getProducts(products => {
//       commit(types.RECEIVE_PRODUCTS, { products })
//     })
//   }
// }
const actions = {
  getTweetsPage ({ commit }) {
    req.get('/api/tweets')
      .then(tweets => console.log(tweets))
  }
}

// mutations
const mutations = {
  [types.INCREMENT_COUNT] (state, { number }) {
    state.count += number;
  }
  // [types.RECEIVE_PRODUCTS] (state, { products }) {
  //   state.all = products
  // },

  // [types.ADD_TO_CART] (state, { id }) {
  //   state.all.find(product => product.id === id).inventory--
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
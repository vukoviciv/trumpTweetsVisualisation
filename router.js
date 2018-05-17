import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/main/Home'
import TweetsIndex from './components/tweets/TweetsIndex'
import Graph from './components/graphs/Graph'

Vue.use(VueRouter)

const routeNames = {
  HOME: 'home',
  TWEETS: 'tweets',
  GRAPHS: 'graphs',
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: routeNames.HOME, path: '/', component: Home },
    { name: routeNames.TWEETS, path: '/tweets', component: TweetsIndex },
    { name: routeNames.GRAPHS, path: '/graph', component: Graph },
  ]
})

export {
  router,
  routeNames,
}
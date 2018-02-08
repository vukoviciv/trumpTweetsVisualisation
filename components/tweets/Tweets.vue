<template>
  <div> Ovo je tweets ruta  <br>
    <br>
    <button @click="appendTweetsPage">Append new page</button>
    <ul>
      <li :for="tweet in tweets">
        <tweet :tweet="tweet"></Tweet>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Tweet from './Tweet';

export default {

  computed: mapGetters({
    tweets: 'allTweets'
  }),

  methods: mapActions(['appendTweetsPage']),

  components: { Tweet },

};
</script>

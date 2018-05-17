<template>
  <div>
    <tweets-header></tweets-header>
    <tweets-list></tweets-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TweetsList from './TweetsList.vue'
import TweetsHeader from './Header.vue'

// Root component
export default {
  methods: {
    ...mapActions([
      'getProfileAndBackgroundPicture',
      'appendTweetsPage'
    ])
  },

  created() {
    this.getProfileAndBackgroundPicture()
    this.appendTweetsPage()
  },

  components: { TweetsList, TweetsHeader }
}
</script>

<style lang="scss">
.loading {
  background-color: #f0f0f0;
  border-color: #f0f0f0;
}
</style>

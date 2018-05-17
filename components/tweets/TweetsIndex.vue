<template>
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <tweets-header
      :profilePictureUrl='profilePictureUrl'
      :bannerUrl='bannerUrl'>
    </tweets-header>
    <tweets-list
      :tweets='tweets'>
    </tweets-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TweetsList from './TweetsList.vue'
import TweetsHeader from './Header.vue'

// Root component
export default {
  data() {
    return {
      loading: true
    }
  },

  computed: {
    ...mapGetters([
      'profilePictureUrl',
      'bannerUrl',
      'tweets'
    ])
  },

  methods: {
    ...mapActions([
      'getProfileAndBackgroundPicture',
      'appendTweetsPage'
    ])
  },

  mounted() {
    this.getProfileAndBackgroundPicture()
    this.appendTweetsPage()
  },

  updated() {
    this.loading = false
  },

  components: { TweetsList, TweetsHeader }
}
</script>

<style lang="scss">

</style>

<template>
  <div> Ovo je tweets ruta  <br>
    {{ tweetseei }}
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    tweetseei: 'allTweets'
  }),
  created() {
    return this.$store.dispatch('getTweetsPage')
  }
}
</script>

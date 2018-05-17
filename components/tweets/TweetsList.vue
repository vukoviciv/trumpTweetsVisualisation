<template>
  <div class='tweets-container'>
    <ol id='tweet-items-container'>
      <tweet
        v-for='tweet in tweets'
        :key='tweet.id'
        :tweet='tweet'>
      </tweet>
    </ol>

    <button @click='appendTweetsPage'>Append new page</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Tweet from './Tweet.vue';

  export default {
    computed: mapGetters({
      tweets: 'allTweets'
    }),

    methods: mapActions([
      'appendTweetsPage'
    ]),

    mounted() {
      this.appendTweetsPage();
    },

    components: { Tweet },
  };
</script>

<style lang="scss" scoped>
  @import 'assets/stylesheets/breakPoints.scss';
  @import 'assets/stylesheets/variables.scss';

  $max-width: 64rem;

  @mixin inset-top-shadow() {
    -webkit-box-shadow: inset 0px 3px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: inset 0px 3px 5px 0px rgba(0,0,0,0.15);
    box-shadow: inset 0px 3px 5px 0px rgba(0,0,0,0.15);
  }

  @mixin transition-ease-out () {
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
  }

  .tweets-container {
    margin-top: 4rem;

    @include inset-top-shadow;

    #tweet-items-container {
      max-width: $max-width;
      margin: 0 auto;
      padding: 1.6rem;
      list-style: none;
    }

    li.tweet {
      padding: .8rem;
      line-height: 1.5;

      &:hover {
        background-color: #f9f9f9;
        @include transition-ease-out();
        @include for-desktop-up() {
          transform: scale(1.2);
          cursor: pointer;
        }
      }

      .text-wrapper {
        cursor: text;
      }

      .time-count-wrapper {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      .time {
        font-size: .8rem;
        color: $light-grey;
      }

      .favorite-count {
        float: right;
        color: $light-grey;
      }

      .favorite-count .fa {
        color: red;
      }
    }

    #load-more {
      display: none;
    }
  }
</style>

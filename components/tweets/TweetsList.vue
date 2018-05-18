<template>
  <div class='tweets-container'>
    <div id='infinity' v-if='loading'></div>
    <ol v-else id='tweet-items-container'>
      <tweet
        v-for='tweet in tweets'
        :key='tweet.id'
        :tweet='tweet'>
      </tweet>
    </ol>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Tweet from './Tweet.vue';

  export default {
    data() {
      return { bottom: false }
    },

    computed: {
      ...mapGetters(['tweets']),
      loading() {
        return this.tweets.length === 0
      }
    },

    methods: {
      ...mapActions(['appendTweetsPage']),
      bottomVisible() {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = visible + scrollY >= pageHeight
        return bottomOfPage || pageHeight < visible
      }
    },

    watch: {
      bottom(bottom) {
        if(bottom) this.appendTweetsPage()
      }
    },

    created() {
        window.addEventListener('scroll', () => {
        this.bottom = this.bottomVisible()
      })
    },

    components: { Tweet },
  };
</script>

<style lang='scss'>
  @import 'assets/stylesheets/breakPoints.scss';
  @import 'assets/stylesheets/variables.scss';

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

  // Infinity loader
  #infinity {
    position: relative;
    width: 212px;
    height: 100px;
    margin: 0 auto;
    @include transition-ease-out();
  }

  #infinity:before,
  #infinity:after {
    content: "";
    position: absolute;
    top: 60px;
    left: 0;
    width: 60px;
    height: 60px;
    border: 20px solid #f0f0f0;
    -moz-border-radius: 50px 50px 0 50px;
        border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }

  #infinity:after {
    left: auto;
    right: 0;
    -moz-border-radius: 50px 50px 50px 0;
        border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
            transform: rotate(45deg);
  }
</style>

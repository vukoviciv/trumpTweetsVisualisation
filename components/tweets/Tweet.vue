<template>
  <li
    class='tweet'
    :class='{ loading: loading }'
    @mouseover='mouseOver'
    @mouseout='mouseOut'>
    <span class='text-wrapper'>
      <span class='text'>{{ tweet.full_text }}</span>
    </span>
    <span class='time-count-wrapper'>
      <span class='favorite-count'>
        <heart :pulse='pulse'></heart>
        <span>{{ tweet.favorite_count }}</span>
      </span>
      <span class='time'>{{ createdAt }}</span>
    </span>
  </li>
</template>

<script>
import Heart from '../common/Heart.vue'

export default {
  data() {
      return { pulse: false }
  },

  props: {
    tweet: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean
    }
  },

  computed: {
    createdAt() {
      const parsedTime = new Date(Date.parse(this.tweet.created_at));
      return `${parsedTime.toLocaleTimeString()}, ${parsedTime.toDateString()}`;
    }
  },

  methods: {
    mouseOver() { this.pulse = true },
    mouseOut() { this.pulse = false }
  },

  components: { Heart }
}
</script>

<style lang='scss' scoped>
@import 'assets/stylesheets/variables.scss';
@import 'assets/stylesheets/breakPoints.scss';

@mixin transition-ease-out() {
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.tweet {
  padding: 0.8rem;
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
    font-size: 0.8rem;
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
</style>

<template>
  <li class="tweet">
    <span class="text-wrapper">
      <span class="text">{{ tweet.full_text }}</span>
    </span>
    <span class="time-count-wrapper">
      <span class="favorite-count">
        <i class="fa fa-heart-o"></i>
        <span>{{ tweet.favorite_count }}</span>
      </span>
      <span class="time">{{ createdAt }}</span>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },

  computed: {
    createdAt() {
      const parsedTime = new Date(Date.parse(this.tweet.created_at));
      return `${parsedTime.toLocaleTimeString()}, ${parsedTime.toDateString()}`;
    }
  }
};
</script>

<style lang="scss" scoped>
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

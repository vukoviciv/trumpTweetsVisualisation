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
      <span class="time">{{ tweet.created_at }}</span>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    }
  }
};
</script>

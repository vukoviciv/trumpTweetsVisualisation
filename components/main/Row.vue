<template>
  <div class="row">
    <div class="large-text-container">
      <h1> {{ title }} </h1>
    </div>
    <div class="large-button-container">
      <router-link :to="{ name: routeName }">{{ linkText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    }
  }
};
</script>

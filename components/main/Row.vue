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

<style lang="scss">
.row {
  margin: 3em 0;
  text-align: center;

  .large-text-container {
    width: 100%;
    font-size: 3em;
  }

  .large-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 9em;
    text-align: right;
  }

  a {
    background-color: black;
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
  }
}
</style>

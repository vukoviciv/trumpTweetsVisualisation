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
  margin: 2em;

  .large-text-container {
    width: 100%;
    font-size: 5em;
  }

  .large-button-container {
    width: 100%;
    display: flex;
    justify-content: center;

    text-transform: uppercase;
    font-size: 14em;
    text-align: right;
  }

  a {
    display: flex;
    align-items: center;
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

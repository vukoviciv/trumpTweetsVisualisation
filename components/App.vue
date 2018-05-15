<template>
  <router-view class="content"></router-view>
</template>

<script>
  import Home from './main/Home.vue';

  export default {
    components: { Home }
  }
</script>

<style lang="scss">
  @import 'assets/stylesheets/main.scss'
</style>

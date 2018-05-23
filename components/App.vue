<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Home from './main/Home.vue';

  export default {
    components: { Home }
  }
</script>

<style lang="scss">
  @import 'assets/stylesheets/main.scss';
</style>

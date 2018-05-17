<template>
  <div class='question-wrapper'>
    <div class='question-container'>
      <row
        v-for='(row, index) in rows'
        :key='index'
        :row='row'>
      </row>
    </div>
  </div>
</template>

<script>
// TODO: find out how to import from root folder
import { routeNames } from '../../router';
import Row from './Row.vue'

export default {
  data: function() {
    return {
      rows: [{
        title: 'Would you like to',
        linkText: 'read',
        routeName: routeNames.TWEETS
      }, {
        title: 'or just to',
        linkText: 'watch',
        routeName: routeNames.GRAPHS
      }]
    };
  },

  components: { Row }
};
</script>

<style lang='scss'>
  .question-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .question-container {
    max-width: 100em;
    margin: 0 auto;
    text-transform: capitalize;
  }
</style>

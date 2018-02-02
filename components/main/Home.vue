<template>
  <div class="question-container">
    <row
      v-bind:title="firstRow.title"
      v-bind:linkText="firstRow.linkText"
      v-bind:routeName="firstRow.routeName"
    >
    </row>
    <row
      v-bind:title="secondRow.title"
      v-bind:linkText="secondRow.linkText"
      v-bind:routeName="secondRow.routeName"
    >
    </row>
  </div>
</template>

<script>
import { routeNames } from '../../router'
import Row from './Row.vue'

export default {
  data: function() {
    return {
      firstRow: {
        title: 'Would you like to',
        linkText: 'read',
        routeName: routeNames.TWEETS
      },
      secondRow: {
        title: 'or just to',
        linkText: 'watch',
        routeName: routeNames.GRAPHS
      }
    }
  },
  components: { Row },
};
</script>

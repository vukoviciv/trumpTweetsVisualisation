<template>
  <div class="question-container">
    <row
      :title="firstRow.title"
      :linkText="firstRow.linkText"
      :routeName="firstRow.routeName"
    >
    </row>
    <row
      :title="secondRow.title"
      :linkText="secondRow.linkText"
      :routeName="secondRow.routeName"
    >
    </row>
  </div>
</template>

<script>
// TODO: find out how to import from root folder
import { routeNames } from '../../router';
import Row from './Row.vue';

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
    };
  },
  components: { Row }
};
</script>

<style lang="scss">
.question-container {
  text-transform: capitalize;
  font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>

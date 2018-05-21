<template>
  <div class='main-graph-container'>
    <!-- <legend></legend> -->
    <graph></graph>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Graph from './Graph.vue'

// Root component
export default {
  components: { Graph }
}
</script>

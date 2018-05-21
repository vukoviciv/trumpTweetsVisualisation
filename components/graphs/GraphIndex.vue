<template>
  <div class='main-graph-container'>
    <graph-legend :words='words'></graph-legend>
    <graph :words='words'></graph>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Graph from './Graph.vue'
import GraphLegend from './GraphLegend.vue'

// Root component
export default {
  methods: {
    ...mapActions(['fetchGraph']),
  },

  computed: {
    ...mapGetters(['words'])
  },

  mounted() {
    this.fetchGraph()
  },

  components: { GraphLegend, Graph }
}
</script>

<style lang="scss" scoped>
.main-graph-container {
  display: flex;
  align-items: stretch;
  height: 100%;
}

</style>

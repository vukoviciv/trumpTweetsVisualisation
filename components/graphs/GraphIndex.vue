<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap class='main-graph-container'>
      <v-flex md2 class='left-container'>
        <graph-legend :words='words'></graph-legend>
      </v-flex>
      <v-flex md10 class='right-container'>
        <graph :words='words'></graph>
      </v-flex>
      <modal dialog='dialog'></modal>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Graph from './Graph.vue'
import GraphLegend from './GraphLegend.vue'
import Modal from '../common/Modal.vue'

// Root component
export default {
  name: 'graph-index',
  data() {
    return {
      dialog: false
    }
  },

  methods: {
    ...mapActions(['fetchGraph']),
    toggle() {
      this.open = !this.open
    }
  },

  computed: {
    ...mapGetters(['words'])
  },

  mounted() {
    this.fetchGraph()
  },

  components: {
    GraphLegend,
    Graph,
    Modal,
  }
}
</script>

<style lang='scss' scoped>
.main-graph-container {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.right-container {
  width: 100%;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<template>
  <v-container grid-list-md align-top>
    <custom-menu
      :showCollapsedMenu=showCollapsedMenu
      :words='words'>
    </custom-menu>
    <v-layout row justify-content class='main-graph-container'>
      <v-flex lg4 md1 class='left-container'>
        <graph-legend
          :showCollapsedMenu=showCollapsedMenu
          :words='words'>
        </graph-legend>
      </v-flex>
      <v-flex lg6 class='right-container'>
        <graph :words='words'></graph>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm12 md3>
        <modal dialog='dialog'></modal>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Graph from './Graph.vue'
import GraphLegend from './GraphLegend.vue'
import Modal from '../common/Modal.vue'
import CustomMenu from '../common/Menu.vue'

// Root component
export default {
  name: 'graph-index',
  data() {
    return {
      dialog: false,
      showCollapsedMenu: true
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

  // TODO: here all resize events for graph, legend and legend menu?

  components: {
    GraphLegend,
    Graph,
    Modal,
    CustomMenu
  }
}
</script>

<template>
  <v-container grid-list-md align-top>
    <v-layout row justify-content class='main-graph-container'>
      <v-flex lg4 md1 class='left-container'>
        <graph-legend :words='words'></graph-legend>
        <menu showCollapsedMenu='true'></menu>
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
import Menu from '../common/Menu.vue'

// Root component
export default {
  name: 'graph-index',
  data() {
    return {
      dialog: false,
      showCollapsedMenu: false
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

<style lang="scss" scoped>
.footer {
  height: 50px;
}
</style>
>

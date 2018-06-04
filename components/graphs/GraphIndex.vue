<template>
  <v-container grid-list-md align-top>
    <custom-menu
      :showCollapsedMenu=showCollapsedMenu
      :words=words>
    </custom-menu>
    <v-layout row justify-content class='main-graph-container'>
      <v-flex sm12 lg4 md1 class='left-container'
        v-show=!showCollapsedMenu>
        <graph-legend :words=words> </graph-legend>
      </v-flex>
      <v-flex sm12 lg8 class='right-container'>
        <graph :words=words></graph>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm12 md3>
        <modal dialog=dialog></modal>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as d3 from 'd3'

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
      showCollapsedMenu: false,
      words: []
    }
  },

  watch: {
    wordsWithCount() {
      this.words = this.addColorsToWordItems()
    }
  },

  methods: {
    ...mapActions(['fetchGraph']),
    toggle() {
      this.open = !this.open
    },

    addColorsToWordItems() {
      const colorScheme = d3.scaleOrdinal(d3.schemePaired)
      return this.wordsWithCount.map((word, i) => ({
        text: word.word,
        count: word.count,
        color: colorScheme(i) })
      )
    },

    showHideCollapsedMenuOnResize() {
      const { innerWidth } = window
      if (innerWidth <= 960)
        this.showCollapsedMenu = true
      else
        this.showCollapsedMenu = false
    },
  },

  computed: {
    ...mapGetters(['wordsWithCount'])
  },

  mounted() {
    this.fetchGraph()
    window.addEventListener('resize', this.showHideCollapsedMenuOnResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.showHideCollapsedMenuOnResize)
  },

  components: {
    GraphLegend,
    Graph,
    Modal,
    CustomMenu
  }
}
</script>

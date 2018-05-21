<template>
  <div class='graph-container'>
    <svg
      id='graph-container'
      preserveAspectRatio='xMinYMin meet'>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import throttle from 'lodash/throttle'
import { mapGetters } from 'vuex'
import Graph from './Graph.vue'

// Root component
export default {
  computed: {
    ...mapGetters(['words']),

    force() {

    }
  },

  watch: {
    words() {
      this.buildGraph()
    }
  },

  methods: {
    buildGraph () {
      const nodes = this.words
      const windowDimensions = this.getWindowInnerDimension();
      const forceX = d3.forceX(windowDimensions.width / 2).strength(0.09);
      const forceY = d3.forceY(windowDimensions.height / 2).strength(0.09);
      const unitConstant = 0.4;
      const color = d3.scaleOrdinal(d3.schemePaired);

      const d3graphContainer = d3.select('#graph-container');
      d3graphContainer.selectAll('*').remove();

      d3graphContainer
        .attr('viewBox', `0 0 ${windowDimensions.width} ${windowDimensions.height}`);

      const circlesContainer = d3graphContainer
        .append('g')
        .attr('class', 'circles-container');

      const textContainer = d3graphContainer
        .append('g')
        .attr('class', 'text-container');

      const circles = circlesContainer
        .selectAll('circle')
        .data(nodes.filter(node => node.count > 0))
        .enter()
        .append('circle');

      // Circles attributes
      circles
        .attr('r', d => this.getRadius(d, unitConstant))
        .style('fill', (d, i) => color(i))
        .append('title')
        .text(d => `${d.word} (${d.count})`);

      // Text
      textContainer
        .selectAll('text')
        .data(nodes.filter(node => node.count > 30))
        .enter().append('text')
        .attr('text-anchor', 'middle')
        .style('font-size', d => this.getFontSizeInUnits(d, unitConstant))
        .text(d => d.word);

      // Force
      d3.forceSimulation()
        .velocityDecay(0.1)
        .force('x', forceX)
        .force('y', forceY)
        .force('collide', d3.forceCollide().radius(d => this.getRadius(d, unitConstant)).iterations(1))
        .nodes(nodes)
        .on('tick', () => this.ticked(circlesContainer, textContainer, unitConstant));

      // createLegend(words, color);
      // this.showOrHideResetDefaultButton();
    },

    getWindowInnerDimension () {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },

    getRadius (d, unitConstant) {
      return d.count * unitConstant
    },

    getFontSizeInUnits (d, unitConstant) {
      return this.getRadius(d, unitConstant) / 2
    },

    ticked (circlesContainer, textContainer, unitConstant) {
      circlesContainer.selectAll('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      textContainer.selectAll('text')
        .attr('x', d => d.x)
        .attr('y', d => d.y + (this.getFontSizeInUnits(d, unitConstant) / 3));
    },

    /* Graph data helpers */

    customDataExists () {
      return window.sessionStorage.getItem('graphData');
    },

    getDefaultData () {
      return JSON.parse(window.sessionStorage.getItem('defaultData'))
    },

    // showOrHideResetDefaultButton () {
    //   const resetButton = document.getElementById('reset-to-default');
    //   if (customDataExists()) resetButton.classList.remove('hidden');
    //   else resetButton.classList.add('hidden');
    // }
  }
}
</script>

<style lang="scss" scoped>
.graph-container {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* aspect ratio */
  vertical-align: top;
  overflow: hidden;
}

svg#graph-container {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

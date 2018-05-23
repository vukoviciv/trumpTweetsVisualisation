<template>
  <svg
    id='legend-container'
    preserveAspectRatio='xMaxYMax meet'>
  </svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'graph-legend',

  props: {
    words: {
      type: Array,
      required: true
    }
  },

  watch: {
    words() {
      this.buildLegend()
    }
  },

  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    // TODO: under 960px swith to dropdown legend
    buildLegend() {
      const nodes = this.words
      const d3legendContainer = d3.select('#legend-container');
      const { width, height, ratioWtoH } = this.getDimensions()

      const color = d3.scaleOrdinal(d3.schemePaired);
      const rectangleSide = 20;

      d3legendContainer
        .attr('width', width )
        .attr('height', Math.round(width / ratioWtoH))
        .attr('viewBox', `0 0 ${width} ${height}`);

      const rectanglesContainer = d3legendContainer
        .append('g')
        .attr('class', 'rectangles-container');

      const textContainer = d3legendContainer
        .append('g')
        .attr('class', 'text-container')

      const rectangles = rectanglesContainer
        .selectAll('rect')
        .data(nodes)
        .enter().append('rect')
        .style('fill', (d, i) => color(i))
        .attr('width', rectangleSide)
        .attr('height', rectangleSide)
        .attr('x', 50)
        .attr('y', (d, i) => 30 * (i + 2));

      const texts = textContainer
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .text(d => d.word)
        .attr('x', 80)
        .attr('y', (d, i) => ((30 * (i + 2)) + 15));
    },

    resize() {
      const { width, ratioWtoH } = this.getDimensions()

      const d3graphContainer = d3.select('#legend-container')
        .attr('width', width )
        .attr('height', Math.round(width / ratioWtoH));
    },

    getDimensions() {
      const width = window.innerWidth / 5
      // Include rectangle size and diff between the two of them
      const sizeConstant = 50;
      const height = this.words.length * sizeConstant

      return { width, height, ratioWtoH : width/height }
    }
  }
}
</script>

<style lang="scss">
svg#legend-container{
  height: 100%;
}
</style>

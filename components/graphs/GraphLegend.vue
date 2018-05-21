<template>
  <div class='left-container'>
    <svg id='legend-container'></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
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

  methods: {
    buildLegend() {
      const nodes = this.words
      const d3legendContainer = d3.select('#legend-container');
      const color = d3.scaleOrdinal(d3.schemePaired);

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
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 50)
        .attr('y', (d, i) => 30 * (i + 2));

      const texts = textContainer
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .text(d => d.word)
        .attr('x', 80)
        .attr('y', (d, i) => ((30 * (i + 2)) + 15));
    }
  }
}
</script>

<style lang="scss">
svg#legend-container{
  height: 100%;

  g.legend-container {
    text {
      text-transform: lowercase;
    }
  }
}
</style>

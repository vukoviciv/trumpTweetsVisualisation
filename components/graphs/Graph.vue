<template>
    <svg
      id='graph-container'
      preserveAspectRatio='xMaxYMax meet'>
    </svg>
</template>

<script>
import * as d3 from 'd3'

// Root component
export default {
  name: 'graph',

  props: {
    words: {
      type: Array,
      required: true
    }
  },

  watch: {
    words() {
      this.buildGraph()
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    resize() {
      const { width, ratioWtoH } = this.getDimensions()

      const d3graphContainer = d3.select('#graph-container')
        .attr('width', width )
        .attr('height', Math.round(width / ratioWtoH))
    },

    buildGraph () {
      const nodes = this.words

      const { width, height, ratioWtoH } = this.getDimensions()
      const forceX = d3.forceX(width / 2).strength(0.09)
      const forceY = d3.forceY(height/ 2).strength(0.09)
      const unitConstant = width * 0.0004  // Magic number
      console.log(unitConstant)

      const d3graphContainer = d3.select('#graph-container')
        .attr('width', width )
        .attr('height', Math.round(width / ratioWtoH))
        .attr('viewBox', `0 0 ${width} ${height}`)

      const circlesContainer = d3graphContainer
        .append('g')
        .attr('class', 'circles-container')

      const textContainer = d3graphContainer
        .append('g')
        .attr('class', 'text-container')

      const circles = circlesContainer
        .selectAll('circle')
        .data(nodes.filter(node => node.count > 0))
        .enter()
        .append('circle')

      // Circles attributes
      circles
        .attr('r', d => this.getRadius(d, unitConstant))
        .style('fill', (d, i) => d.color)
        .append('title')
        .text(d => `${d.text} (${d.count})`)

      // Text
      textContainer
        .selectAll('text')
        .data(nodes.filter(node => node.count > 30))
        .enter().append('text')
        .attr('text-anchor', 'middle')
        .style('font-size', d => this.getFontSizeInUnits(d, unitConstant))
        .text(d => d.text)

      // Force
      d3.forceSimulation()
        .velocityDecay(0.1)
        .force('x', forceX)
        .force('y', forceY)
        .force('collide', d3.forceCollide().radius(d => this.getRadius(d, unitConstant)).iterations(1))
        .nodes(nodes)
        .on('tick', () => this.ticked(circlesContainer, textContainer, unitConstant))

      // this.showOrHideResetDefaultButton()
    },

    getDimensions () {
      const width = window.innerWidth - (window.innerWidth / 2)
      const height = window.innerHeight - (window.innerHeight / 5)
      return { width, height, ratioWtoH : width/height }
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
        .attr('cy', d => d.y)

      textContainer.selectAll('text')
        .attr('x', d => d.x)
        .attr('y', d => d.y + (this.getFontSizeInUnits(d, unitConstant) / 3))
    },
  }
}
</script>

<style lang="scss">
svg#graph-container {
  g.text-container text {
    fill: white ;
    font-weight: bold;
  }
}
</style>

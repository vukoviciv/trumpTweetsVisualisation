<template>
  <div> Ovo je graphs ruta

    {{ count }}
    <button @click="increment"> + </button>
    <button @click="decrement"> - </button>

  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  // actions
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

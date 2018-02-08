<template>
  <div> Ovo je graphs ruta

    {{ count }}
    <button @click="incrementCount(2)"> + </button>
    <br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count: 'count',
  }),

  // actions
  methods: mapActions([
    'incrementCount',
  ]),

  created() {
    return this.$store.dispatch('appendTweetsPage')
  }
}
</script>

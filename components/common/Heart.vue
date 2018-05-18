<template>
  <svg
    class='heart'
    viewBox='0 0 32 29.6'
    :class='{pulsing: pulse}'>
  <path
    d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'/>
</svg>
</template>

<script>
export default {
  props: {
    pulse: { type: Boolean }
  }
}
</script>


<style lang='scss' scoped>
.heart {
  fill: red;
  position: relative;
  top: 5px;
  width: 20px;

  &.pulsing {
    animation: pulse 1s ease infinite;
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
</style>

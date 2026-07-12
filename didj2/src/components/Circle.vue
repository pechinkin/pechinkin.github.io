<style scoped lang="scss">
@use '../assets/styles/components/Circle';
</style>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#42b883'
  },
  positionStyle: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div
      class="circle"
      :style="{ backgroundColor: color, ...positionStyle }"
  >
    <p class="circle-text text-h2">
      {{ text }}
    </p>
  </div>
</template>


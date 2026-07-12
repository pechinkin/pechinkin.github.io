<script setup>
// Принимаем текст как пропс
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-block">
    <p class="text-mono">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/components/paragraph';
</style>
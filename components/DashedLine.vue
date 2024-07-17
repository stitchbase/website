<script setup lang="ts">
const props = defineProps({
  isSmall: {
    type: Boolean,
    default: false,
  },
  width: Number,
  repeats: {
    type: Number,
    default: 10,
  },
});

const widthStyle = `width: ${props.width}px` || `width: 100%`;
</script>

<template>
  <div class="flex gap-x-2">
    <div
      v-for="(item, index) in repeats"
      :key="index"
      class="flex gap-x-2"
      :style="widthStyle"
    >
      <div class="dash bg-red"></div>
      <div class="dash bg-orange"></div>
      <div class="dash bg-yellow"></div>
      <div class="dash bg-green"></div>
      <div class="dash bg-blue"></div>
      <div class="dash bg-purple"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dash {
  @apply h-1 w-4;
}
</style>

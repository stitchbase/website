<script setup lang="ts">
defineProps({
  level: {
    type: String,
    default: "h2",
  },
});

const commonClass = "font-bold tracking-tight text-gray-900";
</script>

<template>
  <h1 v-if="level === 'h1'" :class="`${commonClass} text-4xl sm:text-6xl`">
    <slot />
  </h1>
  <h2 v-if="level === 'h2'" :class="`${commonClass} text-4xl sm:text-6xl`">
    <slot />
  </h2>
  <h3 v-if="level === 'h3'" :class="`${commonClass} text-4xl sm:text-6xl`">
    <slot />
  </h3>
  <h4 v-if="level === 'h4'" :class="`${commonClass} text-4xl sm:text-6xl`">
    <slot />
  </h4>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "bg-page",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
.container {
  @apply mx-auto max-w-7xl px-6 lg:px-8;
}
</style>

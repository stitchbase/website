<script setup lang="ts">
const { params } = useRoute();
</script>

<template>
  <main>
    <ContentDoc />

    <!-- <DisqusCount :identifier="params.slug" />
    <DisqusComments :identifier="params.slug" /> -->
  </main>
</template>

<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    required: true,
  },
  text: String,
  eyebrow: String,
});
</script>

<template>
  <div class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p
        v-if="eyebrow"
        class="mb-2 text-base font-semibold leading-7 text-blue-600"
      >
        {{ eyebrow }}
      </p>
      <LibHeading level="h1">{{ heading }}</LibHeading>
      <p v-if="text" class="mt-6 text-lg leading-8 text-gray-600">{{ text }}</p>
    </div>
  </div>
</template>

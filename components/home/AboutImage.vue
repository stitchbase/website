<script setup lang="ts">
const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
});

let backgroundClass =
  "relative before:block before:absolute before:-z-10 before:-inset-1";

let imageClass = "block aspect-[3/2] w-full rounded-2xl object-cover";

if (props.person.color === "red") {
  backgroundClass =
    backgroundClass +
    " before:bg-red before:skew-y-12 before:rounded-tl-[70%] before:rounded-tr-[10%] before:rounded-bl-[40%] before:rounded-br-[30%]";

  imageClass =
    imageClass +
    " rounded-tl-[70%] rounded-tr-[10%] rounded-bl-[40%] rounded-br-[30%] -rotate-12";
}
</script>

<template>
  <div :class="backgroundClass">
    <img :class="imageClass" :src="person.imageUrl" :alt="person.name" />
  </div>
</template>

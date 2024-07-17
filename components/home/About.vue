<script setup>
const people = [
  {
    name: "Josh Evensen",
    role: "Designer, Software Engineer, Crocheter",
    color: "orange",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
  },
  {
    name: "Kristen Matte",
    role: "Yarn Dyer, Business Owner, Knitter",
    color: "red",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
  },
];
</script>

<template>
  <div id="about" class="container py-24 md:pt-32 md:pb-24">
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-20">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-purple sm:text-4xl">
          About Us
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We're a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-20 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
      >
        <li v-for="person in people" :key="person.name">
          <HomeAboutImage :person="person" />
          <h3 :class="`mt-6 text-2xl font-bold leading-8 text-${person.color}`">
            {{ person.name }}
          </h3>
          <p :class="`text-base leading-7 text-${person.color}`">
            {{ person.role }}
          </p>
          <p class="mt-4 text-base leading-7 text-gray-600">{{ person.bio }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

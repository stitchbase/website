<script setup>
const { data } = await useAsyncData("blog", () => queryContent("blog").find());

const posts = data.value.map((item) => {
  const dateObject = new Date(item.date);

  const date = dateObject.toLocaleString("en-us", { dateStyle: "medium" });

  const year = dateObject.getFullYear;
  const month = dateObject.getMonth + 1; // JS starts with 0 for January
  const day = dateObject.getDate();

  return {
    title: item.title,
    href: item._path,
    description: item.description,
    date,
    datetime: `${year}-${month}-${day}`,
    category: { title: item.category, color: "red" },
  };
});
</script>

<template>
  <div id="blog" class="container py-24 sm:py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-green">
        From the Blog
      </h2>
    </div>

    <div
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <article
        v-for="(post, index) in posts"
        :key="index"
        class="flex flex-col items-start justify-between"
      >
        <div class="max-w-xl">
          <p
            :class="`inline-block rounded-xl bg-${post.category.color} px-3 py-1 font-medium text-sm text-white`"
          >
            {{ post.category.title }}
          </p>
          <a :href="post.href" class="group block">
            <h3
              :class="`mt-3 text-2xl font-bold leading-6 text-gray group-hover:text-${post.category.color}`"
            >
              {{ post.title }}
            </h3>
            <div class="mt-1 mb-4 flex items-center gap-x-2">
              <time :datetime="post.datetime" class="text-gray-500">
                {{ post.date }}
              </time>
            </div>
            <p class="line-clamp-3 leading-6 text-gray">
              {{ post.description }}
            </p>
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

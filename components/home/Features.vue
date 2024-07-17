<script setup>
import {
  UserGroupIcon,
  MapIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/solid";

const features = [
  {
    color: "green",
    name: "Explore",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    icon: MapIcon,
  },
  {
    color: "purple",
    name: "Gather",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    icon: UserGroupIcon,
  },
  {
    color: "yellow",
    name: "Shop",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    icon: ShoppingBagIcon,
  },
];
</script>

<template>
  <div class="container pt-6 sm:pt-8 pb-2">
    <div class="mx-auto max-w-xl lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          :class="`flex flex-col p-6 rounded-2xl bg-${feature.color}`"
        >
          <dt
            class="flex items-center gap-x-3 text-3xl font-semibold leading-7 text-white"
          >
            <div
              class="flex justify-center items-center h-10 w-10 bg-white rounded-2xl"
            >
              <component
                :is="feature.icon"
                :class="`h-6 w-6 flex-none text-${feature.color}`"
                aria-hidden="true"
              />
            </div>
            {{ feature.name }}
          </dt>
          <dd
            class="mt-4 flex flex-auto flex-col text-base leading-7 text-white"
          >
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

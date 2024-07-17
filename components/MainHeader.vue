<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="container">
    <nav
      class="relative flex items-center justify-between my-6 overflow-hidden"
      aria-label="Global"
    >
      <a href="/">
        <AppLogo />
      </a>
      <div class="absolute bottom-[26px] left-[194px]">
        <DashedLine />
      </div>
      <div v-if="navigation.length" class="pb-6">
        <div class="flex md:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden md:flex md:gap-x-8 md:items-center">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="font-semibold leading-6 text-gray-900"
          >
            {{ item.name }}
          </a>
          <a
            href="#newsletter"
            class="bg-blue py-1 px-3 rounded-xl text-sm font-bold leading-6 text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
    <Dialog
      v-if="navigation.length"
      class="md:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/">
            <AppLogo />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                href="#newsletter"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

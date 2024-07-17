<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PlusIcon, MinusIcon } from "@heroicons/vue/16/solid";

const faqs = [
  {
    question: "Isn't Ravelry good enough?",
    answer:
      "Nope. Ravelry isn't for every fiber art, isn't good for indie sellers, and it's missing features users want.",
  },
  {
    question: "Will stitchBASE be free?",
    answer:
      "Yes and No. You can join for free, but there will be a store where indie sellers can sell their patterns, fibers, and other materials. There will be small transaction fee to the indie seller for that. However, stitchBASE will provide the value to make it worth it.",
  },
  {
    question: "When will stitchBASE be ready?",
    answer:
      "Unknown. stitchBASE is just getting started but if you join the newsletter above you'll get all the updates along the way",
  },
];
</script>

<template>
  <ClientOnly>
    <div id="faq" class="container py-8 sm:py-12">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2
          class="text-4xl font-bold leading-10 tracking-tight text-blue text-center"
        >
          Frequently Asked Questions
        </h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray"
              >
                <span class="text-2xl font-semibold leading-7">
                  {{ faq.question }}
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-lg leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </ClientOnly>
</template>

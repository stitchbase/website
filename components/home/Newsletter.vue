<template>
  <div
    id="newsletter"
    class="newsletter container bg-blue py-16 sm:pt-24 sm:pb-20"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
      <div
        class="max-w-2xl text-2xl tracking-tight text-white sm:text-4xl lg:col-span-7"
      >
        <h2 class="inline sm:block lg:inline xl:block text-[120%] font-bold">
          Want product news and updates?
        </h2>
        <p class="mt-2 inline sm:block lg:inline xl:block">
          Sign up for our newsletter.
        </p>
      </div>
      <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="min-w-0 flex-auto rounded-md border-0 bg-white/90 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="flex-none rounded-md bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Subscribe
          </button>
        </div>
        <p class="mt-2 text-sm leading-6 text-gray-300">
          We care about your data. Read our
          <a href="#" class="font-semibold text-white hover:text-blue-50"
            >privacy&nbsp;policy</a
          >.
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
.newsletter {
  position: relative;
}

.newsletter::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  @apply bg-white;
  content: "";
}
</style>

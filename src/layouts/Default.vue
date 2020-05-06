<template>
  <div class="container mx-auto my-8 max-w-3xl p-5">
    <h1 class="text-5xl font-extrabold leading-none mb-4">
      A very awesome conference
    </h1>
    <p class="text-2xl font-light leading-snug">
      This is an example call for papers application, made to showcase how to
      make use of GitHub Actions to add user generated content to your JAMStack
      static site! Check out the
      <ExternalLink href="https://github.com/codegram/jamstack-cfp"
        >repo</ExternalLink
      >.
    </p>
    <div class="mt-6 mb-8 border-b border-gray-200">
      <nav class="-mb-px flex">
        <g-link
          to="/"
          class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
          exact-active-class="border-indigo-500 text-indigo-600"
        >
          Submit
        </g-link>
        <g-link
          to="/submissions"
          class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          exact-active-class="border-indigo-500 text-indigo-600"
        >
          Accepted submissions
        </g-link>
        <g-link
          to="/pending"
          class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          exact-active-class="border-indigo-500 text-indigo-600"
        >
          Pending submissions
        </g-link>
      </nav>
    </div>

    <slot />

    <footer
      class="mt-10 text-gray-700 text-sm text-center border-t-2 border-gray-200 pt-5"
    >
      Made with ❤️ by
      <ExternalLink href="https://www.codegram.com/">Codegram</ExternalLink>
      using
      <ExternalLink href="https://gridsome.org/">Gridsome</ExternalLink>,
      <ExternalLink href="https://github.com/features/actions"
        >GitHub Actions</ExternalLink
      >
      and
      <ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink>.
    </footer>
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";

export default {
  components: {
    ExternalLink,
  },
};
</script>

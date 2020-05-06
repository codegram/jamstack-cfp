<template>
  <a
    :href="href"
    rel="noopener noreferrer"
    class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

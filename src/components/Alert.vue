<template>
  <div
    :class="`rounded-md mt-5 p-4 ${
      theme === 'error' ? 'bg-red-100' : 'bg-green-100'
    }`"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        {{ icon }}
      </div>
      <div class="ml-3">
        <h3
          :class="`text-sm leading-5 font-medium ${
            theme === 'error' ? 'text-red-800' : 'text-green-800'
          }`"
        >
          <slot />
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
      validator(value) {
        const validThemes = ["error", "success"];
        return validThemes.includes(value);
      },
    },
  },
  computed: {
    icon() {
      return this.theme === "error" ? "😳" : "🎉";
    },
  },
};
</script>

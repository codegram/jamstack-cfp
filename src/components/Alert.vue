<template>
  <div :class="`rounded-md bg-${color}-100 mt-5 p-4`">
    <div class="flex">
      <div class="flex-shrink-0">
        {{ icon }}
      </div>
      <div class="ml-3">
        <h3 :class="`text-sm leading-5 font-medium text-${color}-800`">
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
    color() {
      return this.theme === "error" ? "red" : "green";
    },
  },
};
</script>

<style lang="scss" scoped></style>

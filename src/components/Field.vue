<template>
  <div>
    <label
      :for="id"
      class="block text-sm font-medium leading-5 text-gray-700 mt-5"
    >
      <slot />
    </label>
    <component
      :is="type"
      :class="`mt-1 border rounded py-3 shadow-sm px-4 block w-full transition ease-in-out duration-150 ${
        error ? 'border-red-400' : 'border-gray-400'
      }`"
      v-bind="{
        id,
        value,
      }"
      @change="$emit('update:value', $event.target.value)"
      required
    />
    <span
      v-show="error"
      class="block text-sm font-medium leading-5 text-red-700 mt-1"
      >{{ error }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "input",
      validator(value) {
        const validTypes = ["input", "textarea"];
        return validTypes.includes(value);
      },
    },
  },
};
</script>

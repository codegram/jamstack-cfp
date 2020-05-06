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
      class="mt-1 border border-gray-400 rounded py-3 shadow-sm px-4 block w-full transition ease-in-out duration-150"
      v-bind="{ id, value }"
      @change="$emit('update:value', $event.target.value)"
    />
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

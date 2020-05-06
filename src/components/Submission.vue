<template>
  <div class="py-10 border-t-2 border-gray-200">
    <p class="text-sm leading-5 text-gray-600">
      Submitted by {{ submission.name }}
    </p>
    <div class="block">
      <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
        {{ submission.title }}
      </h3>
      <p class="mt-3 text-base leading-6 text-gray-600 whitespace-pre-line">
        {{ submission.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submission: {
      type: Object,
      required: true,
    },
  },
};
</script>

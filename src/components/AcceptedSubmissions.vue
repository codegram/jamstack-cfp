<template>
  <section class="my-5">
    <h2
      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
    >
      Submissions
    </h2>
    <div class="mt-3 sm:mt-4">
      <p class="text-xl leading-7 text-gray-600">
        Accepted submissions are added to the repository as json files, after
        the pull request is merged.
      </p>
    </div>
    <div class="mt-6 border-t-2 border-gray-200">
      <Submission
        v-for="submission in submissions"
        :key="submission.id"
        :submission="submission"
      />
    </div>
  </section>
</template>

<static-query>
  query {
    submissions: allSubmission {
      edges {
        node {
          id
          date
          description
          name
          title
        }
      }
    }
  }
</static-query>

<script>
import Submission from "~/components/Submission";

export default {
  components: {
    Submission,
  },
  computed: {
    submissions() {
      return this.$static.submissions.edges.map((e) => e.node);
    },
  },
};
</script>

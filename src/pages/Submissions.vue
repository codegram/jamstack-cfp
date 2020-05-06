<template>
  <Layout>
    <SubmissionList title="Accepted submissions" :submissions="submissions">
      Accepted submissions are added to the repository as json files, after the
      pull request is merged.
    </SubmissionList>
  </Layout>
</template>

<page-query>
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
</page-query>

<script>
import SubmissionList from "~/components/SubmissionList";

export default {
  components: {
    SubmissionList,
  },
  computed: {
    submissions() {
      return this.$page.submissions.edges.map((e) => e.node);
    },
  },
};
</script>

<style lang="scss" scoped></style>

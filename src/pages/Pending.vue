<template>
  <Layout>
    <SubmissionList title="Pending submissions" :submissions="submissions">
      Pending submissions are in the repository
      <a
        href="https://github.com/codegram/jamstack-cfp/pulls?q=is%3Apr+is%3Aopen+label%3Asubmission"
        class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
        >pull requests</a
      >. By adding the GitHub's API as a
      <a
        href="https://gridsome.org/plugins/@gridsome/source-graphql"
        class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
        >GraphQL source</a
      >
      we can compile them statically. A deploy is triggered after a new PR is
      opened to always list latest submissions.
    </SubmissionList>
  </Layout>
</template>

<page-query>
  query {
    github {
      repository(owner: "codegram", name: "jamstack-cfp") {
        pullRequests(last: 100, labels: "submission", states: OPEN) {
          edges {
            node {
              id
              body
              createdAt
            }
          }
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
      return this.$page.github.repository.pullRequests.edges.map((e) => {
        const [_, title, name, description] = e.node.body.match(
          /# (.+)\n## by (.+)\n> (.+)/
        );

        return {
          id: e.node.id,
          date: e.node.createdAt,
          description,
          name,
          title,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

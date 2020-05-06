<template>
  <Layout>
    <SubmissionList title="Pending submissions" :submissions="submissions">
      Pending submissions are the open
      <ExternalLink
        href="https://github.com/codegram/jamstack-cfp/pulls?q=is%3Apr+is%3Aopen+label%3Asubmission"
        >pull requests</ExternalLink
      >. By adding the GitHub's API as a
      <ExternalLink href="https://gridsome.org/plugins/@gridsome/source-graphql"
        >GraphQL source</ExternalLink
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
import ExternalLink from "~/components/ExternalLink";
import SubmissionList from "~/components/SubmissionList";

export default {
  components: {
    ExternalLink,
    SubmissionList,
  },
  computed: {
    submissions() {
      return this.$page.github.repository.pullRequests.edges.map((e) => {
        const [_, title, name, description] = e.node.body.match(
          /# (.+)\n## by (.+)\n> ((.|\n)+)/
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

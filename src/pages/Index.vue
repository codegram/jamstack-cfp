<template>
  <Layout>
    <h1 class="text-5xl font-bold leading-none mb-4">
      A very awesome conference
    </h1>
    <p class="text-2xl font-light leading-snug">
      This is an example call for papers application, made to showcase how to
      make use of GitHub Actions to add user generated content to your JAMStack
      static site! Check out the
      <a
        href="https://github.com/codegram/jamstack-cfp"
        class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
        >repo</a
      >.
    </p>
    <ApplicationForm />
  </Layout>
</template>

<script>
import ApplicationForm from "~/components/ApplicationForm";
export default {
  components: {
    ApplicationForm,
  },
  metaInfo: {
    title: "A CFP built with JAMStack and GitHub Actions",
  },
};
</script>

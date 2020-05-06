<template>
  <form @submit.prevent="handleSubmit">
    <h2
      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
    >
      Submit
    </h2>
    <div class="mt-3 sm:mt-4">
      <p class="text-xl leading-7 text-gray-600">
        Submitting this form will trigger a pull request using GitHub Actions.
        Once it's merged you will be able to see your submission in the
        <g-link
          to="/submissions"
          class="underline text-indigo-600 hover:text-indigo-900 transition ease-in-out duration-150"
          >Accepted submissions</g-link
        >
        list!
      </p>
    </div>
    <Field id="name" :error="nameError" :value.sync="name">
      Your name
    </Field>
    <Field id="title" :error="titleError" :value.sync="title">
      Talk title
    </Field>
    <Field id="description" :value.sync="description" type="textarea">
      Talk Description
    </Field>
    <Alert v-if="error" theme="error">
      Oops, this is embarassing, but something went wrong while submitting the
      form.
    </Alert>
    <Alert v-if="success" theme="success">
      Form submitted successfully
    </Alert>
    <Btn :disabled="loading">
      Submit
    </Btn>
  </form>
</template>

<script>
import axios from "axios";

import Alert from "~/components/Alert";
import Btn from "~/components/Btn";
import Field from "~/components/Field";

export default {
  data() {
    return {
      name: "",
      title: "",
      description: "",
      loading: false,
      error: false,
      success: false,
    };
  },
  components: {
    Alert,
    Btn,
    Field,
  },
  computed: {
    nameError() {
      if (this.name && this.invalidString(this.name)) {
        return "Please avoid using special characters";
      }
      return "";
    },
    titleError() {
      if (this.title && this.invalidString(this.title)) {
        return "Please avoid using special characters";
      }
      return "";
    },
  },
  methods: {
    invalidString(str) {
      return !/^(?!.*(#|>))/.test(str);
    },
    handleSubmit() {
      this.loading = true;
      this.error = false;
      this.success = false;
      axios
        .post(process.env.GRIDSOME_LAMBDA, {
          name: this.name,
          title: this.title,
          description: this.description,
        })
        .then(() => {
          this.success = true;
          this.name = "";
          this.title = "";
          this.description = "";
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
  },
};
</script>

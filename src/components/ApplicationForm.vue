<template>
  <form class="my-10" @submit.prevent="handleSubmit">
    <Field id="name" :value.sync="name">
      Your name
    </Field>
    <Field id="title" :value.sync="title">
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
  methods: {
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

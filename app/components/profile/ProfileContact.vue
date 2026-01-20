<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { contactFormSchema, type ContactForm } from "~/schemas/contact";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const sendForm = (event: FormSubmitEvent<ContactForm>) => {
  alert("valid data:" + event.data.name);
};
</script>

<template>
  <UForm
    :schema="contactFormSchema"
    :state="form"
    class="space-y-4 flex flex-col items-center *:w-full"
    @submit="sendForm"
  >
    <UFormField
      label="Name"
      name="name"
    >
      <UInput v-model="form.name" />
    </UFormField>

    <UFormField
      label="Email"
      name="email"
    >
      <UInput v-model="form.email" />
    </UFormField>

    <UFormField
      label="Message"
      name="message"
    >
      <UTextarea v-model="form.message" />
    </UFormField>

    <UButton type="submit">
      Send
    </UButton>
  </UForm>
</template>

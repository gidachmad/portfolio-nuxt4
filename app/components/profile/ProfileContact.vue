<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { contactFormSchema, type ContactForm } from "~/schemas/contact";

const form = reactive({
  subject: "",
  message: "",
});

const sendForm = (event: FormSubmitEvent<ContactForm>) => {
  alert("valid data:" + event.data.subject);
};
</script>

<template>
  <BasePortfolioSection
    title="Contact me!"
    icon="mdi:email-edit-outline"
  >
    <p class="mb-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, exercitationem?
    </p>
    <UForm
      :schema="contactFormSchema"
      :state="form"
      class="space-y-6 flex flex-col items-center"
      @submit="sendForm"
    >
      <UFormField
        label="Subject"
        name="subject"
        class="w-full"
      >
        <UInput
          v-model="form.subject"
          class="w-full"
          name="subject"
          placeholder="What's the matter?"
        />
      </UFormField>

      <UFormField
        label="Message"
        class="w-full"
        name="message"
      >
        <UTextarea
          v-model="form.message"
          class="w-full"
          size="xl"
          :maxrows="8"
          autoresize
          placeholder="Tell me more about it..."
        />
      </UFormField>

      <UButton
        type="submit"
        class="py-2 w-full justify-center cursor-pointer"
      >
        Send
      </UButton>
    </UForm>
  </BasePortfolioSection>
</template>

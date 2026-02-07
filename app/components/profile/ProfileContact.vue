<script setup lang="ts">
import emailjs from "@emailjs/browser";
import type { FormSubmitEvent } from "@nuxt/ui";
import { contactFormSchema, type ContactForm } from "~/schemas/contact";

const config = useRuntimeConfig();
// console.log(config.public.emailjsServiceId ? config.public.emailjsServiceId : "nothing");
function checkRuntimeEmail() {
  if (!config.public.emailjsServiceId) {
    return console.warn("EmailJS disabled on static build");
  }
}

checkRuntimeEmail();

const form = reactive<ContactForm>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSending = ref(false);
const success = ref(false);
const error = ref<string | null>(null);

const sendForm = async (event: FormSubmitEvent<ContactForm>) => {
  isSending.value = true;
  error.value = null;

  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      {
        name: event.data.name,
        email: event.data.email,
        subject: event.data.subject,
        message: event.data.message,
      },
      config.public.emailjsPublicKey,
    );

    success.value = true;
    Object.assign(form, { name: "", subject: "", email: "", message: "" });
  }
  catch (err: any) {
    console.error("[EmailJS]", err);

    if (err?.status === 429) {
      error.value = "Too many requests. Please try again later.";
    }
    else {
      error.value = "Failed to send message. Please try again.";
    }
  }
  finally {
    isSending.value = false;
  }
};
</script>

<template>
  <UForm
    :schema="contactFormSchema"
    :state="form"
    class="space-y-6 flex flex-col items-center"
    @submit="sendForm"
  >
    <UFormField
      label="Name"
      class="w-full"
      name="name"
    >
      <UInput
        v-model="form.name"
        class="w-full"
        placeholder="Who are you?"
      />
    </UFormField>

    <UFormField
      label="Email"
      class="w-full"
      name="email"
    >
      <UInput
        v-model="form.email"
        class="w-full"
        placeholder="May I ask your email?"
      />
    </UFormField>

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
      :loading="isSending"
    >
      Send Message
    </UButton>

    <p
      v-if="success"
      class="text-green-500 text-sm"
    >
      Message sent successfully!
    </p>

    <p
      v-if="error"
      class="text-red-500 text-sm"
    >
      {{ error }}
    </p>

    <!-- Fallback -->
    <a
      href="mailto:you@email.com"
      class="text-xs underline opacity-70"
    >
      Or send via email client
    </a>
  </UForm>
</template>

<!-- <script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { contactFormSchema, type ContactForm } from "~/schemas/contact";

const form = reactive({
  subject: "",
  message: "",
});

const sendForm = (event: FormSubmitEvent<ContactForm>) => {
  alert("something something");
  // alert("valid data:" + event.data.subject);
};
</script>

<template>
  <BasePortfolioSection
    title="Contact me!"
    icon="mdi:email-edit-outline"
  >
    <p class="mb-6">
      You can contact me through mail. It might take some time for me to reply, but feel free to send one!!
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
</template> -->

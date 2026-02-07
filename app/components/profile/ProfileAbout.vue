<script setup lang="ts">
import { about, personalData } from "@/data/profile";
import { Icon } from "@iconify/vue";

const aboutDesc = about.description_en;
</script>

<template>
  <section class="flex flex-col gap-4 items-center mt-4">
    <!-- <div class="w-32 h-32 overflow-hidden rounded-full">
      <NuxtImg
        src="/images/portfolio/profile_formal.png"
        alt="profile"
      />
    </div> -->
    <div class="text-center flex flex-col">
      <h2>Gid Achmad Ahlul Fadli</h2>
      <small>Tasikmalaya | Bandung, Indonesia</small>
      <small>Web Developer | Freelancer</small>
    </div>
    <ul class="flex">
      <li>
        <a
          :href="`https://mail.google.com/mail/?view=cm&fs=1&to=` + personalData.work_email"
          target="_blank"
        >
          <Icon
            icon="mdi:gmail"
            class="w-10 h-10"
          />
        </a>
      </li>
      <li>
        <a
          :href="personalData.linkedin"
          target="_blank"
        >
          <Icon
            icon="mdi:linkedin"
            class="w-10 h-10"
          />
        </a>
      </li>
      <li>
        <a
          :href="`https://wa.me/` + personalData.whatsapp"
          target="_blank"
        >
          <Icon
            icon="mdi:whatsapp"
            class="w-10 h-10"
          />
        </a>
      </li>
    </ul>
    <p class="text-sm text-justify">
      {{ aboutDesc }}
    </p>
  </section>
</template>

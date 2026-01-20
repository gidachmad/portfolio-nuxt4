<script setup lang="ts">
import type { experienceTypes } from "~/types/portfolio";

defineProps<{
  data: experienceTypes;
}>();
</script>

<template>
  <section class="my-2 flex flex-col gap-4 mb-10">
    <header class="border-b-2 pb-2 flex flex-col">
      <h5>
        {{ data.role }}
      </h5>
      <p class="text-sm">
        {{ data.company }}
      </p>
      <p class="text-xs">
        {{ data.start_date }} - {{ data.end_date }}
      </p>
    </header>
    <p class=" text-sm">
      {{ data.desc }}
    </p>
    <div class="flex gap-2 items-center">
      <p>Skill:</p>
      <ul class="flex gap-2">
        <li
          v-for="(item, index) in data.skills"
          :key="index"
          class="border rounded-2xl p-2 text-xs hover:bg-zinc-500 transition cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

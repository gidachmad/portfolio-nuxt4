<script setup lang="ts">
import type { experienceTypes } from "~/types/portfolio";

defineProps<{
  data: experienceTypes;
}>();
</script>

<template>
  <BaseItemComponent :skills="data.skills">
    <template #header>
      <h4>
        {{ data.role }}
      </h4>
      <p class="text-sm">
        {{ data.company }}
      </p>
      <p class="text-xs">
        {{ data.start_date }} - {{ data.end_date }}
      </p>
    </template>

    <template #content>
      <p>
        {{ data.desc }}
      </p>

      <p class="mt-4">
        What I do :
      </p>
      <ul
        v-for="(desc_li, index) in data.desc_list"
        :key="index"
        class="list-disc"
      >
        <li>{{ desc_li }}</li>
      </ul>
    </template>
  </BaseItemComponent>
</template>

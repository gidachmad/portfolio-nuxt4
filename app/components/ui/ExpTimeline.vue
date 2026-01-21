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

    {{ data.desc }}
  </BaseItemComponent>
</template>

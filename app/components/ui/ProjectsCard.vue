<script setup lang="ts">
import type { projectTypes } from "~/types/portfolio";

defineProps<{
  data: projectTypes;
}>();
</script>

<template>
  <BaseItemComponent :skills="data.skills">
    <template
      #header
    >
      <a
        target="_blank"
        :href="data.link"
        class="flex items-center cursor-pointer"
        rel="noopener noreferrer"
        aria-label="Open project in new tab"
      >
        <h4>
          {{ data.title }}
        </h4>
        <Icon name="mdi:launch" />
      </a>
    </template>

    {{ data.desc }}
  </BaseItemComponent>
</template>

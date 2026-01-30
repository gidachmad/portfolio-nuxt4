<script setup lang="ts">
import type { projectTypes } from "~/types/portfolio";

defineProps<{
  data: projectTypes;
}>();
</script>

<template>
  <BaseItemComponent
    :skills="data.skills"
    :examples="data.examples"
  >
    <template #header>
      <div class="flex items-center">
        <h4>
          <a
            target="_blank"
            :href="data.link"
            class=" cursor-pointer"
            rel="noopener noreferrer"
            aria-label="Open project in new tab"
          >
            {{ data.title }}
          </a>
        </h4>
        <Icon name="mdi:launch" />
      </div>
    </template>

    {{ data.desc }}
  </BaseItemComponent>
</template>

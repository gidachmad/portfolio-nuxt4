<script setup lang="ts">
import type { exampleTypes } from "~/types/portfolio";

defineProps<{
  skills?: string[];
  examples?: exampleTypes[];
}>();
</script>

<template>
  <section class="my-2 flex flex-col gap-4 mb-10">
    <header class="border-b-2 pb-2 flex flex-col">
      <slot name="header" />
    </header>
    <p class=" text-sm">
      <slot />
    </p>
    <div
      v-if="skills"
      class="flex gap-2 items-center"
    >
      <p>Skill:</p>
      <ul class="flex gap-2">
        <li
          v-for="(item, index) in skills"
          :key="index"
          class="border rounded-2xl p-2 text-xs hover:bg-zinc-500 transition cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div
      v-if="examples"
      class="flex flex-col gap-2"
    >
      <p>Examples: </p>
      <ul class="flex gap-2">
        <li
          v-for="(item, index) in examples"
          :key="index"
          class="border rounded-2xl p-4 text-xs hover:bg-zinc-500 transition cursor-pointer"
        >
          <a
            v-if="item.youtubeId"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group block"
            aria-label="Open video on YouTube"
          >

            <img
              v-if="item.youtubeId"
              :src="`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`"
              class="max-h-xs"
            >
          </a>

          <span v-else>
            <p class="mb-4">
              {{ item.name }}
            </p>
            <img
              :src="item.url"
              :alt="item.name"
              class="max-h-xs"
            >
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

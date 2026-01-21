<script setup lang="ts">
defineProps<{
  skills?: string[];
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
  </section>
</template>

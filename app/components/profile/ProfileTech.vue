<script setup lang="ts">
import { techSkills } from "~/data/profile";
</script>

<template>
  <BasePortfolioSection
    title="Technical Skills"
    icon="mdi:code"
  >
    <div>
      <h4 class="mb-2">
        Programming Languages
      </h4>
      <ul class="flex gap-2 mb-2">
        <li
          v-for="(skill, index) in techSkills['Programming Languages']"
          :key="index"
          class="border rounded-2xl p-2 text-xs hover:bg-zinc-500 transition cursor-pointer"
        >
          {{ skill }}
        </li>
      </ul>
      <h4 class="mb-2">
        Frameworks / Libraries
      </h4>
      <ul class="flex gap-2">
        <li
          v-for="(skill, index) in techSkills['Frameworks / Libraries']"
          :key="index"
          class="border rounded-2xl p-2 text-xs hover:bg-zinc-500 transition cursor-pointer"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
    <!-- <div class="">
      <h4>Programming Languages</h4>
      <ul
        v-for="(skill, index) in techSkills['Programming Languages']"
        :key="index"
        class="flex gap-1"
      >
        <li class="border">
          {{ skill }}
        </li>
      </ul>

      <h4>Frameworks / Libraries</h4>
      <ul
        v-for="(skill, index) in techSkills['Frameworks / Libraries']"
        :key="index"
      >
        <li>{{ skill }}</li>
      </ul>
    </div> -->
  </BasePortfolioSection>
</template>

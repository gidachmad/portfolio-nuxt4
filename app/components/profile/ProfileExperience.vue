<script setup lang="ts">
import { workExperience } from "~/data/profile";
import ExpTimeline from "../ui/ExpTimeline.vue";
import type { experienceTypes } from "~/types/portfolio";
import { formatDateToYear } from "~/utils/NumberFormatting";

const expWorks = useState<experienceTypes[]>("expWorks",
  () => workExperience.map(item => ({
    company: item.company,
    role: item.role,
    desc: item.description_en,
    start_date: formatDateToYear(item.month_start, item.year_start),
    end_date: formatDateToYear(item.month_end, item.year_end),
    skills: item.skill_tag,
  })));
</script>

<template>
  <section>
    <header class="flex items-center mb-4 border-b-2 w-max">
      <Icon
        name="mdi:briefcase"
        class="w-8 h-8 mr-2"
      />
      <h3>
        Experience
      </h3>
    </header>
    <div
      v-for="exp in expWorks"
      :key="exp.company"
    >
      <ExpTimeline :data="exp" />
    </div>
  </section>
</template>

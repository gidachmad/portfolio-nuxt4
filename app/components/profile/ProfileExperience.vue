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
  <BasePortfolioSection
    title="Experience"
    icon="mdi:briefcase-outline"
  >
    <div
      v-for="(exp, index) in expWorks"
      :key="index"
    >
      <ExpTimeline :data="exp" />
    </div>
  </BasePortfolioSection>
</template>

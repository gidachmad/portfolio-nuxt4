<script setup lang="ts">
import { studyExperience } from "~/data/profile";
import type { academicTypes } from "~/types/portfolio";

const studyExp: academicTypes = studyExperience[0];
// const studyExp = useState<academicTypes[]>("studyExp",
//   () => studyExperience.map(item => ({
//     institution: item.institution,
//     degree: item.degree,
//     thesis_title: item.thesis_title,
//     desc: item.desc,
//     desc_list: item.desc_list,
//     gpa: item.gpa,
//     max_gpa: item.max_gpa,
//     year: item.year,
//   })));
</script>

<template>
  <BasePortfolioSection
    title="Academics"
    icon="mdi:account-student-outline"
  >
    <BaseItemComponent>
      <template #header>
        <h4>
          {{ studyExp.institution }}
        </h4>
        <p class="text-sm">
          {{ studyExp.degree }}
        </p>
        <p class="text-xs">
          {{ studyExp.year }}
        </p>
        <p class="text-xs">
          Score: {{ studyExp.gpa }} / {{ studyExp.max_gpa.toFixed(2) }}
        </p>
      </template>

      <template #content>
        <p>
          {{ studyExp.desc }}
        </p>

        <p class="mt-4">
          What I do :
        </p>
        <ul
          v-for="(desc_li, index) in studyExp.desc_list"
          :key="index"
          class="list-disc"
        >
          <li>{{ desc_li }}</li>
        </ul>
      </template>
    </BaseItemComponent>
  </BasePortfolioSection>
</template>

<script setup lang="ts">
// import { workExperience } from "~/data/profile";
// import ExpTimeline from "../ui/ExpTimeline.vue";
// import type { experienceTypes } from "~/types/portfolio";
// import { formatDateToYear } from "~/utils/NumberFormatting";

// const expWorks = useState<experienceTypes[]>("expWorks",
//   () => workExperience.map(item => ({
//     company: item.company,
//     role: item.role,
//     desc: item.description_en,
//     start_date: formatDateToYear(item.month_start, item.year_start),
//     end_date: formatDateToYear(item.month_end, item.year_end),
//     skills: item.skill_tag,
//   })));
</script>

<template>
  <section>
    <header class="flex items-center mb-4 border-b-2 w-max">
      <Icon
        name="mdi:account-student"
        class="w-8 h-8 mr-2"
      />
      <h3>
        Academics
      </h3>
    </header>

    <article>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, qui corporis consequuntur in voluptatum sit quos voluptates tempora iusto blanditiis, maiores id ullam tempore sequi veniam aspernatur sed inventore maxime consectetur exercitationem alias, culpa dolor! Rerum qui et, obcaecati nobis dolorem similique labore error nesciunt, eaque officiis veniam at esse.
    </article>
  </section>
</template>

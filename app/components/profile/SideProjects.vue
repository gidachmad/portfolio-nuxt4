<script setup lang="ts">
import type { projectTypes } from "~/types/portfolio";
import ProjectsCard from "../ui/ProjectsCard.vue";
import { sideProjects } from "~/data/projects";

const sideprojects = useState<projectTypes[]>("sideprojects",
  () => sideProjects.map(item => ({
    title: item.title,
    desc: item.desc,
    link: item.link,
  })));
</script>

<template>
  <BasePortfolioSection
    title="Projects"
    icon="mdi:code-braces"
  >
    <div
      v-for="(project, index) in sideprojects"
      :key="index"
    >
      <ProjectsCard :data="project" />
    </div>
  </BasePortfolioSection>
</template>

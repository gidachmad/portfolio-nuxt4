<script setup lang="ts">
import type { projectTypes } from "~/types/portfolio";
import ProjectsCard from "../ui/ProjectsCard.vue";
import { codingProjects } from "~/data/projects";

const projects = useState<projectTypes[]>("projects",
  () => codingProjects.map(item => ({
    title: item.title,
    desc: item.desc,
    kind: item.kind,
    // year: item.year,
    skills: item.skills,
    link: item.link,
  })));
</script>

<template>
  <BasePortfolioSection
    title="Projects"
    icon="mdi:code-braces"
  >
    <div
      v-for="(project, index) in projects"
      :key="index"
    >
      <ProjectsCard :data="project" />
    </div>
  </BasePortfolioSection>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  icon?: string;
}>();
</script>

<template>
  <section>
    <header class="header_section">
      <Icon
        v-if="icon"
        :name="icon"
        class="w-8 h-8 mr-2"
      />
      <h3>
        {{ title }}
      </h3>
    </header>

    <slot />
  </section>
</template>

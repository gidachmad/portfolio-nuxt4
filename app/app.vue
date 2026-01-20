<script lang="ts" setup>
provideHeadlessUseId(() => useId());
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

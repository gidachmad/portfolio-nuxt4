<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <div class=" fixed bottom-4 right-4 z-50">
    <button
      class="hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition border rounded-full flex p-3"
      aria-label="Toggle dark mode"
      @click="toggleTheme"
    >
      <Icon
        v-if="colorMode.preference === 'dark'"
        name="mdi:weather-sunny"
        class="w-8 h-8"
      />
      <Icon
        v-else
        name="mdi:weather-night"
        class="w-8 h-8"
      />
    </button>
  </div>
</template>

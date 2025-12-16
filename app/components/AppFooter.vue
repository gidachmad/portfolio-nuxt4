<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="flex flex-col p-8 mt-8 border-t-2 w-full items-center shrink-0">
    <p>
      &copy;{{ currentYear }} | Gid Achmad AF - Regid
    </p>
  </footer>
</template>
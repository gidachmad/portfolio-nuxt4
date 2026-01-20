<template>
  <div class="flex flex-col min-h-screen">
    <main class="w-4/5 xl:w-2/5 m-auto my-4 flex flex-col gap-8 items-center grow text-justify">
      <slot />
    </main>
    <AppFooter class="mt-auto" />
  </div>
</template>

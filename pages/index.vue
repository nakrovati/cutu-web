<script setup lang="ts">
useHead({
  title: "Cutu - URL shortener",
});
</script>

<template>
  <main>
    <div class="mx-auto max-w-[640px] flex-shrink px-4 pt-8 lg:max-w-[920px]">
      <URLShortener />
    </div>
  </main>
</template>

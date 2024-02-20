<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header>
    <BaseContainer class="flex max-w-full justify-between py-2">
      <NuxtLink
        v-if="route.path !== '/'"
        class="text-xl font-bold dark:text-white"
        to="/"
        >Cutu</NuxtLink
      >
      <div v-else class="text-xl font-bold dark:text-white">Cutu</div>

      <TheColorThemeToggle></TheColorThemeToggle>
    </BaseContainer>
  </header>
</template>

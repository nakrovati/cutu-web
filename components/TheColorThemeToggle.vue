<script setup lang="ts">
import PhMoon from "~/assets/icons/PhMoon.vue";
import PhSun from "~/assets/icons/PhSun.vue";

const colorMode = useColorMode();

function handleToggleColorMode() {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}
</script>

<template>
  <button class="dark:text-white" @click="handleToggleColorMode">
    <PhSun v-if="colorMode.value === 'light'" class="h-auto w-6"></PhSun>
    <PhMoon v-else class="h-auto w-6"></PhMoon>
  </button>
</template>

<script setup lang="ts">
// const route = useRoute();
// const { backendURL } = useRuntimeConfig().public;

definePageMeta({
  middleware: "check-short-url",
});

const shortLink = useShortLink();
</script>

<template>
  <div>
    <div v-if="shortLink">
      <main class="mt-8">
        <div class="mx-auto w-full px-4 md:w-[640px] lg:w-[920px]">
          <div>{{ shortLink }}</div>
        </div>
      </main>
    </div>
    <div v-else>
      <main class="mt-8">
        <div class="mx-auto max-w-[640px] px-4 lg:max-w-[920px]">
          <div>Not Found</div>
        </div>
      </main>
    </div>
  </div>
</template>

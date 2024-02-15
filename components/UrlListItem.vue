<script setup lang="ts">
import PhCopy from "~/assets/icons/PhCopy.vue";

interface Props {
  shortenedUrl: ShortenedUrl;
}

const isCopied = ref(false);

defineProps<Props>();

async function copyShortURL(shortUrl: string) {
  await navigator.clipboard.writeText(shortUrl);
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 1_000);
}
</script>

<template>
  <li class="grid grid-cols-[auto_auto] gap-4 sm:items-center">
    <div class="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
      <div class="truncate dark:text-white">
        {{ shortenedUrl.originalUrl }}
      </div>
      <a
        class="w-fit text-blue-600 dark:text-blue-500 sm:ml-auto"
        :href="shortenedUrl.originalUrl"
        >{{ shortenedUrl.shortUrl }}</a
      >
    </div>
    <div class="grid items-start sm:grid-cols-2">
      <button
        type="button"
        class="p-1"
        @click="copyShortURL(shortenedUrl.shortUrl)"
      >
        <PhCopy
          class="h-auto w-6 dark:text-white"
          :class="[isCopied ? 'text-green-500' : '']"
        ></PhCopy>
      </button>
    </div>
  </li>
</template>

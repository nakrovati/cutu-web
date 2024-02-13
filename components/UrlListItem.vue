<script setup lang="ts">
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
  <li class="grid lg:grid-cols-2 lg:grid-rows-none lg:items-center lg:gap-4">
    <span class="truncate dark:text-white">{{ shortenedUrl.originalUrl }}</span>
    <span
      class="grid grid-rows-[auto_auto] gap-1 text-blue-600 dark:text-blue-500 lg:flex lg:items-center lg:justify-end lg:gap-4"
    >
      <a :href="shortenedUrl.originalUrl">{{ shortenedUrl.shortUrl }}</a>
      <button
        type="button"
        :class="[
          isCopied
            ? 'bg-green-700 text-white'
            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:to-blue-200 dark:text-black',
        ]"
        class="rounded-lg px-4 py-2 transition-colors lg:w-24"
        @click="copyShortURL(shortenedUrl.shortUrl)"
      >
        {{ isCopied ? "Copied!" : "Copy" }}
      </button>
    </span>
  </li>
</template>

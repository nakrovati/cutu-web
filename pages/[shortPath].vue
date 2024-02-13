<script setup lang="ts">
import PhLinkSimple from "assets/icons/PhLinkSimple.vue";

const shortenedUrl = useShortenedUrl();

useServerSeoMeta({
  title: `Cutu - ${shortenedUrl.value.shortUrl}`,
  description: `Data about the short link https://cutu.dev ${shortenedUrl.value.shortUrl}`,
});

definePageMeta({
  middleware: "check-short-code",
});

const createdAt = new Date(shortenedUrl.value.createdAt);
const convertedUrlCreationDate = new Intl.DateTimeFormat(undefined, {
  dateStyle: "full",
  timeStyle: "full",
}).format(createdAt);
</script>

<template>
  <div class="grid w-full gap-4">
    <div class="text-grey dark:text-blue-500">
      {{ convertedUrlCreationDate }}
    </div>
    <div
      class="flex items-center rounded-lg border-2 border-blue-500 px-2 py-4"
    >
      <PhLinkSimple class="mr-2 h-5 w-5 sm:h-6 sm:w-6 dark:text-white" /><a
        :href="shortenedUrl.originalUrl"
        class="sm:text-xl dark:text-white"
        >{{ shortenedUrl.shortUrl }}</a
      >
    </div>

    <div class="max-h-8 truncate dark:text-white">
      <strong>Description:</strong> {{ shortenedUrl.originalUrl }}
    </div>
  </div>
</template>

<script setup lang="ts">
const shortenedUrls = useShortenedUrlsStorage();

const sortedShortenedUrlsByDate = computed(() =>
  shortenedUrls.value
    .slice()
    .sort((a, b) => compareDates(a.createdAt, b.createdAt, "desc")),
);
</script>

<template>
  <ul
    v-if="shortenedUrls.length"
    class="mt-8 flex flex-col gap-4 rounded-lg bg-blue-50 p-4 dark:bg-slate-700"
  >
    <UrlListItem
      v-for="shortenedUrl in sortedShortenedUrlsByDate"
      :key="shortenedUrl.shortUrl"
      :shortened-url="shortenedUrl"
    ></UrlListItem>
  </ul>
</template>

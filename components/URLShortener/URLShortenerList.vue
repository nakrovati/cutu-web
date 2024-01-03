<script setup lang="ts">
const shortLinks = useShortLinksStorage();

const sortedShortLinksByDate = computed(() =>
  shortLinks.value
    .slice()
    .sort((a, b) => compareDates(a.dateCreated, b.dateCreated, "desc")),
);
</script>

<template>
  <ul
    v-if="shortLinks.length"
    class="mt-8 flex flex-col gap-4 rounded-lg bg-blue-50 p-4 dark:bg-slate-700"
  >
    <URLShortenerListItem
      v-for="shortLink in sortedShortLinksByDate"
      :key="shortLink.shortUrl"
      :short-url="shortLink.shortUrl"
      :initial-url="shortLink.initialUrl"
      :date-created="shortLink.dateCreated"
    ></URLShortenerListItem>
  </ul>
</template>

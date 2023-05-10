<script setup lang="ts">
/** Compares dates from new to old */
function compareDatesDesc(a: ShortLink, b: ShortLink) {
  return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
}

const shortLinks = useShortLinks();

const sortedShortLinksByDate = computed(() =>
  shortLinks.value.slice().sort(compareDatesDesc)
);
</script>

<template>
  <ul
    v-if="shortLinks.length"
    class="mt-8 flex flex-col gap-4 rounded-lg bg-surface-1 p-4"
  >
    <URLShortenerListItem
      v-for="shortLink in sortedShortLinksByDate"
      :key="shortLink.shortURL"
      :short-u-r-l="shortLink.shortURL"
      :initial-u-r-l="shortLink.initialURL"
      :date-created="shortLink.dateCreated"
    ></URLShortenerListItem>
  </ul>
</template>

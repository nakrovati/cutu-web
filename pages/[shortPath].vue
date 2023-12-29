<script setup lang="ts">
import PhLinkSimple from "assets/icons/PhLinkSimple.vue";

const shortLink = useShortLink();

const title = `Cutu - ${shortLink.value.shortURL}`;
const description = `Data about the short link https://cutu.dev ${shortLink.value.shortURL}`;

useServerSeoMeta({
  title,
  description,
});

definePageMeta({
  middleware: "check-short-url",
});

const convertedDateCreated = computed(() => {
  const dateCreated = new Date(shortLink.value.dateCreated);

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "full",
  }).format(dateCreated);
});
</script>

<template>
  <div class="grid w-full gap-4">
    <div class="text-grey dark:text-blue-500">{{ convertedDateCreated }}</div>
    <div
      class="flex items-center rounded-lg border-2 border-blue-500 px-2 py-4"
    >
      <PhLinkSimple class="mr-2 h-5 w-5 sm:h-6 sm:w-6" /><a
        :href="shortLink.initialURL"
        class="dark:text-white sm:text-xl"
        >{{ shortLink.shortURL }}</a
      >
    </div>

    <div class="max-h-8 truncate dark:text-white">
      <strong>Description:</strong> {{ shortLink.initialURL }}
    </div>
  </div>
</template>

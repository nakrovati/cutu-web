<script setup lang="ts">
import PhLinkSimple from "assets/icons/PhLinkSimple.vue";
useServerSeoMeta({
  title: "Cutu - URL shorteners",
});

definePageMeta({
  middleware: "check-short-url",
});

const shortLink = useShortLink();

const convertedDateCreated = computed(() => {
  const dateCreated = new Date(shortLink.value.dateCreated);

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "full",
  }).format(dateCreated);
});
</script>

<template>
  <main class="mt-8">
    <div class="mx-auto grid w-full gap-4 px-4 md:w-[640px] lg:w-[920px]">
      <div class="text-grey dark:text-blue-500">{{ convertedDateCreated }}</div>
      <div
        class="flex items-center rounded-lg border-2 border-blue-500 px-2 py-4"
      >
        <PhLinkSimple
          class="mr-2 h-5 w-5 dark:text-white-dark sm:h-6 sm:w-6"
        /><a
          :href="shortLink.initialURL"
          class="dark:text-white-dark sm:text-xl"
          >{{ shortLink.shortURL }}</a
        >
      </div>

      <div class="max-h-8 truncate dark:text-white-dark">
        <strong>Description:</strong> {{ shortLink.initialURL }}
      </div>
    </div>
  </main>
</template>

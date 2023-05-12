<script setup lang="ts">
import PhLinkSimple from "assets/icons/PhLinkSimple.vue";

definePageMeta({
  middleware: "check-short-url",
});

const shortLink = useShortLink();

const convertedDateCreated = computed(() => {
  const userLang = process.client ? window.navigator.language : "en-US";
  const date = new Date(shortLink.value.dateCreated);
  return Intl.DateTimeFormat(userLang || "en-US", {
    dateStyle: "full",
    timeStyle: "full",
  }).format(date);
});
</script>

<template>
  <div>
    <div v-if="shortLink">
      <main class="mt-8">
        <div class="mx-auto grid w-full gap-4 px-4 md:w-[640px] lg:w-[920px]">
          <div>{{ convertedDateCreated }}</div>
          <div
            class="flex items-center rounded-lg border-2 border-blue-500 px-2 py-4"
          >
            <PhLinkSimple class="mr-2 h-6 w-6" /><a
              :href="shortLink.initialURL"
              class="text-xl"
              >{{ shortLink.shortURL }}</a
            >
          </div>

          <div class="w-full truncate">
            <strong>Destination: </strong>
            <span>{{ shortLink.initialURL }}</span>
          </div>
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

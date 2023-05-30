<script setup lang="ts">
interface Props {
  shortURL: string;
  initialURL: string;
  dateCreated: string;
}

const isCopied = ref(false);

defineProps<Props>();

async function copyShortURL(shortURL: string) {
  await navigator.clipboard.writeText(shortURL);
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 1_000);
}
</script>

<template>
  <li class="grid lg:grid-cols-2 lg:grid-rows-none lg:items-center lg:gap-4">
    <span class="truncate dark:text-white-dark">{{ initialURL }}</span>
    <span
      class="grid grid-rows-[auto_auto] gap-1 text-blue-600 dark:text-blue-500 lg:flex lg:items-center lg:justify-end lg:gap-4"
    >
      <a :href="initialURL">{{ shortURL }}</a>
      <button
        type="button"
        :class="[
          isCopied
            ? 'bg-green text-white'
            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-dark-200 dark:text-black',
        ]"
        class="rounded-lg px-4 py-2 transition-colors lg:w-24"
        @click="copyShortURL(shortURL)"
      >
        {{ isCopied ? "Copied!" : "Copy" }}
      </button>
    </span>
  </li>
</template>

<script setup lang="ts">
import PhArrowsClockwise from "~/assets/icons/PhArrowsClockwise.vue";

const { backendURL } = useRuntimeConfig().public;

const url = ref("");
const isLoading = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref("");
const shortLinks = useShortLinks();
let errorTimer: NodeJS.Timeout;

function startErrorTimer(ms = 10_000) {
  errorTimer = setTimeout(() => {
    showErrorMessage.value = false;
    errorMessage.value = "";
    clearTimeout(errorTimer);
  }, ms);
}

function handleCreateShortURL() {
  if (isValidURL(url.value)) {
    shortenURL();
  } else {
    errorMessage.value = "Unable to shorten that link. It is not a valid url.";
    showErrorMessage.value = true;
    startErrorTimer();
  }
}

async function shortenURL() {
  isLoading.value = true;
  const newShortLink: NewShortLink = {
    initialURL: url.value,
    dateCreated: new Date().toISOString(),
  };

  try {
    const shortLink = await $fetch<ShortLink>("/urls", {
      method: "POST",
      baseURL: backendURL,
      body: newShortLink,
      responseType: "json",
    });

    shortLinks.value.push(shortLink);
  } catch (error) {
    errorMessage.value = "An error occurred. Please try again later.";
    showErrorMessage.value = true;
    startErrorTimer();
  } finally {
    isLoading.value = false;
  }
}

function resetValidation() {
  showErrorMessage.value = false;
  clearTimeout(errorTimer);
}
</script>

<template>
  <form
    class="grid grid-rows-[auto] gap-2"
    @submit.prevent="handleCreateShortURL"
  >
    <div
      class="row-start-1 row-end-2 grid gap-2 lg:grid-cols-[auto_20%] lg:gap-8"
    >
      <label>
        <input
          v-model="url"
          aria-describedby="url-error"
          type="text"
          name="url"
          autocomplete="off"
          class="w-full rounded-md border-2 border-blue-500 px-4 py-2 dark:border-surface-dark-2 dark:bg-surface-dark-2 dark:text-white-dark"
          placeholder="Shorten your link"
          aria-label="Enter the URL you want to shorten"
          @focus="resetValidation"
        />
      </label>
      <button
        :disabled="isLoading"
        class="rounded-md bg-blue-500 py-2 text-white transition-colors hover:bg-blue-600 active:bg-blue-700 dark:text-white-dark"
        type="submit"
        aria-label="Shorten"
      >
        <span v-if="isLoading">
          <PhArrowsClockwise
            class="mx-auto h-auto w-6 animate-spin dark:text-white-dark"
          ></PhArrowsClockwise
        ></span>
        <span v-else>Shorten</span>
      </button>
    </div>
    <Transition name="fade">
      <span
        v-if="showErrorMessage"
        id="url-error"
        class="rounded-md bg-red-600 py-2 text-center text-white dark:bg-red-500"
        >{{ errorMessage }}</span
      >
    </Transition>
  </form>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

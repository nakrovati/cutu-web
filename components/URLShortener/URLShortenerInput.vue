<script setup lang="ts">
import { z } from "zod";

const { backendURL } = useRuntimeConfig().public;

const shortLinks = useShortLinks();
const isValid = ref(true);
const url = ref("");
const errorMessage = ref("");

function resetValidation() {
  isValid.value = true;
}

function validateURL() {
  const urlSchema = z.string().url();

  try {
    urlSchema.parse(url.value);

    isValid.value = true;
    errorMessage.value = "";
  } catch (error) {
    if (error instanceof z.ZodError) {
      isValid.value = false;
      errorMessage.value =
        "Unable to shorten that link. It is not a valid url.";
      setTimeout(() => (isValid.value = true), 10_000);
    }
  }
}

async function shortenURL() {
  validateURL();

  if (!isValid.value) return;

  try {
    const newShortLink: NewShortLink = {
      initialURL: url.value,
      dateCreated: new Date().toString(),
    };

    const shortLink = await $fetch<ShortLink>("/url", {
      method: "POST",
      baseURL: backendURL,
      body: newShortLink,
      responseType: "json",
    });

    shortLinks.value.push(shortLink);
  } catch (error) {
    errorMessage.value = "An error occurred. Please try again later.";
  }
}
</script>

<template>
  <form class="grid grid-rows-[auto] gap-2" @submit.prevent="shortenURL">
    <div
      class="row-start-1 row-end-2 grid gap-2 lg:grid-cols-[auto_20%] lg:gap-8"
    >
      <label>
        <input
          v-model="url"
          aria-describedby="url-error"
          type="text"
          name="url"
          class="w-full rounded-md border-2 border-blue-500 px-4 py-2"
          placeholder="Shorten your link"
          aria-label="Enter the URL you want to shorten"
          @focus="resetValidation"
        />
      </label>
      <button
        class="rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-500"
        type="submit"
      >
        Shorten
      </button>
    </div>
    <Transition name="fade">
      <span
        v-show="!isValid"
        id="url-error"
        class="rounded-md bg-red-500 py-2 text-center text-white"
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

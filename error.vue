<template>
  <NuxtLayout>
    <div class="flex flex-col items-center gap-y-8">
      <h1 class="text-4xl dark:text-white-dark">Whoops!</h1>
      <p class="dark:text-white-dark">
        The page you are looking for could not be found.
      </p>
      <NuxtLink
        to="/"
        class="block w-max rounded-md bg-blue-500 px-8 py-2 text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
        >Go to home</NuxtLink
      >
    </div>
  </NuxtLayout>
</template>

<script setup>
useServerSeoMeta({
  title: "Cutu | Page Not Found | 404",
});

useDark();
</script>

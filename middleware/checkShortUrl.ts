export default defineNuxtRouteMiddleware(async (_to, from) => {
  if (process.client) return;

  const { backendURL } = useRuntimeConfig().public;

  const shortLink = await $fetch<ShortLink>(`/url/${from.params.shortPath}`, {
    baseURL: backendURL,
    responseType: "json",
  });

  if (!shortLink) {
    abortNavigation();
  }

  useShortLink().value = shortLink;
});

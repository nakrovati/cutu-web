export default defineNuxtRouteMiddleware(async (_to, from) => {
  if (process.client) return;

  const { backendURL } = useRuntimeConfig().public;

  const shortLink = await $fetch<ShortLink>(`/urls/${from.params.shortPath}`, {
    baseURL: backendURL,
    responseType: "json",
  });

  if (!shortLink) {
    abortNavigation();
  }

  useShortLink().value = shortLink;
});

export default defineNuxtRouteMiddleware(async (_to, from) => {
  if (process.client) return;

  const shortPath = from.params.shortPath.toString();
  const shortPathRegex = /^\w{7}[+]?$/;

  if (!shortPathRegex.test(shortPath)) {
    return abortNavigation();
  }

  const { backendURL } = useRuntimeConfig().public;
  const shortLink = useShortLink();

  try {
    const response = await $fetch<ShortLink>(
      `/urls/${shortPath.substring(0, 7)}`,
      {
        baseURL: backendURL,
      }
    );

    if (!response) {
      return abortNavigation();
    }

    shortLink.value = response;
  } catch (error) {
    return abortNavigation();
  }
});

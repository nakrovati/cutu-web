export default defineNuxtRouteMiddleware(async (_to, from) => {
  if (process.server) return;

  const shortPath = from.params.shortPath.toString();
  const shortPathRegex = /^\w{7}[+]?$/;

  if (!shortPathRegex.test(shortPath)) {
    return abortNavigation();
  }

  const { backendURL } = useRuntimeConfig().public;
  const shortenedUrl = useShortenedUrl();

  try {
    const response = await $fetch<ShortenedUrl>(
      `/urls/${shortPath.substring(0, 7)}`,
      {
        baseURL: backendURL,
      },
    );

    if (!response) {
      return abortNavigation();
    }

    shortenedUrl.value = response;
  } catch (error) {
    return abortNavigation();
  }
});

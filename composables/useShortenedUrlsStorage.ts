import { useStorage } from "@vueuse/core";

export const useShortenedUrlsStorage = () => {
  const shortenedUrlsStorage = useStorage<ShortenedUrl[]>("shortened-urls", []);

  return shortenedUrlsStorage;
};

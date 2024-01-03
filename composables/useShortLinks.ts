import { useStorage } from "@vueuse/core";

export const useShortLinksStorage = () => {
  const shortLinksStorage = useStorage<ShortLink[]>("short-links", []);

  return shortLinksStorage;
};

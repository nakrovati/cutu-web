import { useStorage } from "@vueuse/core";
import { useState } from "#app";

export const useShortLinks = () => {
  const shortLinksStorage = useStorage<ShortLink[]>("short-links", []);
  const shortLinks = useState<ShortLink[]>("short-links", () => []);

  onMounted(() => {
    shortLinks.value = shortLinksStorage.value;
  });

  return shortLinks;
};

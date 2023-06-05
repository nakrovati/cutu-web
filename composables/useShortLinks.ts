import { useStorage } from "@vueuse/core";

export const useShortLinks = () => {
  const shortLinksStorage = useStorage<ShortLink[]>("short-links", []);
  const shortLinks = useState<ShortLink[]>("short-links", () => []);

  onMounted(() => {
    shortLinks.value = shortLinksStorage.value;
  });

  return shortLinks;
};

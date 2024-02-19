<script setup lang="ts">
import { PhCopy, PhQrCode } from "~/assets/icons";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const props = defineProps<{ shortenedUrl: ShortenedUrl }>();

const isCopied = ref(false);
const qrcode = useQRCode(props.shortenedUrl.shortUrl);

async function copyShortURL(shortUrl: string) {
  await navigator.clipboard.writeText(shortUrl);
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 1_000);
}

const shortUrlWithoutProtocol = computed(() => {
  const url = new URL(props.shortenedUrl.shortUrl);
  return url.host + url.pathname;
});

const { share } = useShare();

function shareQRCode() {
  share({
    title: props.shortenedUrl.shortUrl,
    text: `Shortened URL: ${props.shortenedUrl.shortUrl}`,
    url: props.shortenedUrl.shortUrl,
  });
}
</script>

<template>
  <li class="grid grid-cols-[1fr_auto] gap-4 sm:items-center">
    <div class="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none">
      <div class="truncate dark:text-white">
        {{ shortenedUrl.originalUrl }}
      </div>
      <a
        class="w-fit text-blue-600 dark:text-blue-500 sm:ml-auto"
        :href="shortenedUrl.originalUrl"
        >{{ shortUrlWithoutProtocol }}</a
      >
    </div>
    <div class="grid items-start sm:grid-cols-2">
      <BaseDialog :title="shortenedUrl.shortUrl">
        <template #trigger>
          <button class="p-1">
            <PhQrCode class="h-auto w-6 dark:text-white"></PhQrCode>
          </button>
        </template>

        <img :src="qrcode" alt="QR code" />
        <BaseButton type="button" @click="shareQRCode">Share</BaseButton>
      </BaseDialog>
      <button
        type="button"
        class="p-1"
        @click="copyShortURL(shortenedUrl.shortUrl)"
      >
        <PhCopy
          class="h-auto w-6 dark:text-white"
          :class="[isCopied ? 'text-green-500' : '']"
        ></PhCopy>
      </button>
    </div>
  </li>
</template>

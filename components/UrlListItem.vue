<script setup lang="ts">
import PhCopy from "~/assets/icons/PhCopy.vue";
import PhQrCode from "~/assets/icons/PhQrCode.vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";
import { useShare } from "#imports";

interface Props {
  shortenedUrl: ShortenedUrl;
}

const props = defineProps<Props>();

const isCopied = ref(false);
const qrcode = useQRCode(props.shortenedUrl.shortUrl);

async function copyShortURL(shortUrl: string) {
  await navigator.clipboard.writeText(shortUrl);
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 1_000);
}

const { share } = useShare();

function shareQRCode() {
  share({
    title: props.shortenedUrl.shortUrl,
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
        >{{ shortenedUrl.shortUrl }}</a
      >
    </div>
    <div class="grid items-start sm:grid-cols-2">
      <BaseDialog :title="shortenedUrl.shortUrl">
        <template #trigger>
          <button class="p-1" name="trigger" type="button">
            <PhQrCode class="h-auto w-6 dark:text-white"></PhQrCode>
          </button>
        </template>

        <img :src="qrcode" alt="QR code" />
        <button
          type="button"
          class="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
          @click="shareQRCode"
        >
          Share
        </button>
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

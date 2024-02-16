<script setup lang="ts">
import PhX from "~/assets/icons/PhX.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <DialogRoot>
    <DialogTrigger as-child><slot name="trigger"></slot></DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-30 bg-black/50 data-[state=open]:animate-overlayShow"
      ></DialogOverlay>

      <DialogContent
        class="fixed left-1/2 top-1/2 z-50 max-h-[85dvh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow"
      >
        <DialogTitle class="text-lg">
          QR code for <strong>{{ title }}</strong>
        </DialogTitle>
        <slot></slot>

        <DialogClose
          class="absolute right-4 top-4 inline-flex appearance-none items-center justify-center rounded-md focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <PhX class="h-auto w-4 dark:text-black"></PhX
        ></DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

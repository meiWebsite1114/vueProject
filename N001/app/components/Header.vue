<script setup>
import { Icon } from "@iconify/vue";
import { useStore } from "~/store/useStore";

const store = useStore();
</script>
<template>
  <header class="flex justify-between items-center py-2 px-6 h-16 text-white bg-primary font-bold sticky top-0 z-9">
    <NuxtLink to="/" class="text-xl">Amaaz Store</NuxtLink>
    <nav class="flex items-center gap-4">
      <NuxtLink to="/products">全部商品</NuxtLink>
      <NuxtLink to="/about">關於我們</NuxtLink>
      <NuxtLink to="/cart" class="relative">
        <Icon icon="mdi:cart-variant" class="w-8 h-8" />
        <span v-if="store.totalItems"
          class="absolute w-5 h-5 rounded-full bg-red-400 text-center text-sm -top-2 -right-2">{{
            store.totalItems }}</span>
      </NuxtLink>
    </nav>
  </header>
</template>
<style scoped></style>

<script setup>
import { useShopStore } from "@/stores/shopStore";

const store = useShopStore();
</script>
<template>
  <header class="bg-primay py-4 px-8">
    <div class="inner flex justify-between">
      <RouterLink to="/" class="font-bold text-white text-xl">Shopping Beauty</RouterLink>
      <div class="btns flex gap-4">
        <RouterLink to="/favorites">
          <Icon icon="si:heart-alt-duotone" class="w-8 h-8 text-white" />
        </RouterLink>
        <RouterLink to="/cart" class="relative">
          <Icon icon="mynaui:cart" class="w-8 h-8 text-white" />
          <div v-if="store.cartCount"
            class="w-6 h-6 bg-red-400 absolute -right-[16px] -top-[10px] text-center content-center text-white rounded-full">
            {{ store.cartCount }}
          </div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

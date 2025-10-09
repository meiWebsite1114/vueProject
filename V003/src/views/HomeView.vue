<script setup>
import ProductCard from '@/components/ProductCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import { useShopStore } from '@/stores/shopStore';

const store = useShopStore()

</script>

<template>
  <HeroSection />
  <div class="container mx-auto p-4">
    <div class="card_lists grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      <ProductCard v-for="p in store.products" :key="p.id" :product="p" />
    </div>
  </div>

</template>

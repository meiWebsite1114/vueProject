<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { useShopStore } from '@/stores/shopStore';

const store = useShopStore()

</script>
<template>
  <div class="container mx-auto p-4">
    <div class="card_lists grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      <ProductCard v-for="p in store.favorites" :key="p.id" :product="p" />
    </div>
  </div>
</template>
<style scoped></style>
<script setup>
import ProductCard from '@/components/ProductCard.vue';
import HeroSection from '@/components/HeroSection.vue';
import { useShopStore } from '@/stores/shopStore';

const store = useShopStore()

</script>

<template>
  <HeroSection />
  <div class="container mx-auto p-8">
    <div class=" flex items-center justify-center gap-4">
      <button type="button" v-for="tab in store.tabs" :key="index" @click="store.activeTab = tab"
        class="w-30 h-10 border border-seconary text-seconary text-center content-center rounded-md cursor-pointer"
        :class="tab === store.activeTab ? 'bg-seconary text-white' : ''">{{
          tab }}
      </button>
    </div>
    <div class="card_lists grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <ProductCard v-for="p in store.filteredProducts" :key="p.id" :product="p" />
    </div>
  </div>

</template>

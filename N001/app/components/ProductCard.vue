<script setup>
import { defineProps } from "vue";
import { useStore } from "~/store/useStore";

const store = useStore();
const props = defineProps({
  product: {
    type: Object,
    require: true,
  },
});
</script>
<template>
  <div class="card_item flex flex-col justify-between shadow-md p-4 hover:scale-[1.01] transition">
    <NuxtLink :to="`/products/${product.id}`" class="card_top text-xl cursor-pointer">
      <img :src="product.image" alt="" class="w-50 h-50 object-contain mx-auto" />
      <h3 class="text-sm mt-4">{{ product.title }}</h3>
    </NuxtLink>
    <div class="card_bottom mt-4">
      <h4 class="text-xl">${{ product.price }}</h4>
      <button @click="store.addToCart(product)" type="button"
        class="mt-6 px-4 h-10 bg-secondary rounded-md cursor-pointer block ml-auto">
        加入購物車
      </button>
    </div>
  </div>
</template>
<style scoped></style>

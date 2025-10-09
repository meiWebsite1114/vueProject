<script setup>
import { RouterLink } from 'vue-router';
import { useShopStore } from '@/stores/shopStore';
import { defineProps, computed } from 'vue';

const store = useShopStore()
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const isFavorite = computed(() =>
  store.favorites.some(item => item.id === props.product.id)
)

</script>
<template>
  <div class="card_item border border-primay px-4 pb-4 flex flex-col justify-between">
    <RouterLink :to="`/product/${product.id}`" class="card_top">
      <img :src="product.image" alt="">
      <h3 class=" font-bold text-xl">{{ product.name }}</h3>
      <h4 class=" text-xl my-4">${{ product.price }}</h4>
    </RouterLink>
    <div class="card_bottom">
      <div class="btns flex justify-between gap-4">
        <button @click="store.toggleFavorite(product)" type="button" class=" cursor-pointer">
          <Icon v-if="isFavorite" icon="si:heart-alt-duotone" class=" w-8 h-8 text-primay" />
          <Icon v-else icon="mdi-light:heart" class=" w-8 h-8 text-primay" />
        </button>
        <button @click="store.addToCart(product)" type="button"
          class=" cursor-pointer bg-primay rounded-md p-2 text-white">加入購物車</button>
      </div>
    </div>
  </div>
</template>

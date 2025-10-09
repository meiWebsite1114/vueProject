<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useShopStore } from '@/stores/shopStore';

const route = useRoute()
const store = useShopStore()

const routeId = parseInt(route.params.id)
const product = store.products.find(item => item.id === routeId)

const isFavorite = computed(() =>
  store.favorites.some(item => item.id === product.id)
)
</script>
<template>
  <div>
    <div class=" max-w-2xl mx-auto">
      <div class="card_item px-4 pb-4">
        <div class="detail_top">
          <img :src="product.image" alt="" />
          <h3 class=" font-bold text-xl my-4">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <h4 class=" text-xl my-4">${{ product.price }}</h4>
        </div>
        <div class="detail_bottom">
          <div class="btns flex justify-between gap-4 flex-col">
            <button @click="store.toggleFavorite(product)" type="button" class=" cursor-pointer">
              <Icon v-if="isFavorite" icon="si:heart-alt-duotone" class=" w-8 h-8 text-primay" />
              <Icon v-else icon="mdi-light:heart" class=" w-8 h-8 text-primay" />
            </button>
            <button @click="store.addToCart(product)" type="button"
              class=" cursor-pointer bg-primay rounded-md p-2 text-white">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

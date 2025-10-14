<script setup>
import { useShopStore } from '@/stores/shopStore';
import { RouterLink } from 'vue-router';

const store = useShopStore()
</script>
<template>
  <div v-if="store.cartCount" class="container mx-auto p-4 mt-10">
    <ul class="cart_lists">
      <TransitionGroup name="list">
        <li v-for="product in store.cart" :key="product.id"
          class="cart_item flex flex-col md:flex-row items-center justify-center gap-10 border border-primay py-4 px-6 mb-4">
          <img class=" w-50 h-50 text-center" :src="product.image" alt="">
          <h3>{{ product.name }}</h3>
          <input v-model.number="product.quantity" @change="store.updateQuantity(product.id, product.quantity)"
            class=" text-center border md:ml-auto p-1 " type="number">
          <h4 class=" text-xl my-4">${{ product.price }}</h4>
          <button @click="store.removeFromCart(product.id)" class=" cursor-pointer" type="button">
            <Icon icon="mdi-light:delete" class=" w-7 h-7 text-gray-400" />
          </button>
        </li>
      </TransitionGroup>
    </ul>
    <h4 class="total text-2xl mt-10 ml-auto w-fit">總計<span> ${{ store.totalPrice }}</span></h4>
  </div>
  <div v-else class="text-center ">
    <p class=" mt-20 mb-8 text-xl">購物車還沒有商品喔</p>
    <RouterLink to="/" class="bg-primay rounded-md p-2 text-white ">繼續購物</RouterLink>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: .5s ease-out;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
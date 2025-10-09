<script setup>
import { useShopStore } from '@/stores/shopStore';

const store = useShopStore()
</script>
<template>
  <div class="container mx-auto p-4 mt-10">
    <ul class="cart_lists">
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
    </ul>
    <h4 class="total text-2xl mt-10 ml-auto w-fit">總計<span> ${{ store.totalPrice }}</span></h4>
  </div>
</template>
<style scoped></style>
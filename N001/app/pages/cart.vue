<script setup>
import { useStore } from "~/store/useStore";

const store = useStore();
</script>

<template>
  <section class="py-10 px-4">
    <h2 class="text-center text-2xl font-bold border-b w-[95%] mx-auto pb-4">
      我的購物車
    </h2>
    <div v-if="store.totalItems" class="container mx-auto mt-10">
      <div v-for="(item, index) in store.cartItems" :key="item.id"
        class="cart_item flex flex-col md:flex-row justify-between items-center shadow-md py-4 px-8 hover:scale-[1.01] transition gap-2">
        <NuxtLink :to="`/products/${item.id}`"
          class="flex flex-col md:flex-row items-center cart_top text-xl cursor-pointer gap-10">
          <img :src="item.image" alt="" class="w-20 h-20 object-contain" />
          <h3 class="text-[16px]">{{ item.title }}</h3>
        </NuxtLink>
        <div class="cart_bottom mt-4 flex flex-col md:flex-row items-center gap-10">
          <h4 class="text-lg">${{ item.price }}</h4>
          <button @click="store.removeFromCart(index)" type="button"
            class="px-4 h-10 bg-red-300 rounded-md cursor-pointer">
            移除
          </button>
        </div>
      </div>
      <hr class="my-8" />
      <div class="text-right">
        <h3 class="text-xl font-bold">總金額:${{ store.totalPrice }}</h3>
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-4">您的購物車目前是空的</p>
    </div>
  </section>
</template>

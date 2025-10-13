<script setup>
import { onMounted } from "vue";
import { useStore } from "~/store/useStore";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const productId = route.params.id;

onMounted(() => {
  store.loading = true;
  store.fetchDataId(productId);
});
</script>
<template>
  <section class="py-10 px-4">
    <Loading v-if="store.loading" />
    <div v-else class="shadow-md p-4 w-full max-w-[960px] text-center mx-auto">
      <div to="" class="card_top">
        <img :src="store.product.image" alt="" class="mx-auto w-80" />
        <h3 class="text-xl my-4 font-bold">{{ store.product.title }}</h3>
        <p>{{ store.product.description }}</p>
      </div>
      <div class="card_bottom mt-4">
        <h4 class="text-xl">${{ store.product.price }}</h4>
        <button @click="store.addToCart(store.product)" type="button"
          class="mt-6 px-4 h-10 bg-secondary rounded-md cursor-pointer">
          加入購物車
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

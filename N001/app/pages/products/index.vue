<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "~/store/useStore";

const store = useStore();

onMounted(() => {
  store.fetchData();
});
</script>
<template>
  <section class="py-10 px-4">
    <h2 class="text-center text-2xl font-bold border-b w-[95%] mx-auto pb-4">
      全部商品
    </h2>
    <Loading v-if="store.loading" />
    <div v-else class="container mx-auto mt-10">
      <div class="grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
        <ProductCard v-for="item in store.products" :key="item.id" :product="item" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>

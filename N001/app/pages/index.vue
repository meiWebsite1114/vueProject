<script setup>
import { onMounted } from "vue";
import { useStore } from "~/store/useStore";

const store = useStore();

onMounted(() => {
  store.fetchData();
});
</script>
<template>
  <Banner />
  <section class="py-10 px-4">
    <h2 class="text-center text-2xl font-bold border-b w-[95%] mx-auto pb-4">
      精選商品
    </h2>
    <Loading v-if="store.loading" />
    <div v-else class="container mx-auto mt-10">
      <div class="grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
        <ProductCard v-for="item in store.specialProducts" :key="item.id" :product="item" />
      </div>
    </div>
  </section>
</template>

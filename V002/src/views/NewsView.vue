<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useNewStore } from "../stores/news";

const newStore = useNewStore();

onMounted(() => {
  newStore.getNewsData();
});
</script>

<template>
  <div v-if="newStore.loading">
    <div class="wrap">
      <p class="text-white text-center text-xl">載入中...</p>
    </div>
  </div>

  <div v-else>
    <section class="text-white mt-20" id="services">
      <div class="px-4 xl:pl-16">
        <h2 class="text-4xl font-bold text-white mb-4">News</h2>
      </div>
      <div
        class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div v-for="item in newStore.newsLists" :key="item.id" data-aos="fade-up"
          class="px-8 py-5 roundeds-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
          <div class="text-center">
            <h3
              class="pt-4 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
              {{ item.title }}
            </h3>
            <p class="mb-5 text-gray pt-4 text-sm group-hover:text-white md:text-base">
              {{ item.body }}
            </p>
            <RouterLink :to="`/detail/${item.id}`" class="cursor-pointer border-1 px-4 py-2 rounded-full">
              查看詳情
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

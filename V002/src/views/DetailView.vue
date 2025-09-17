<script setup>
import { onMounted, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useNewStore } from "../stores/news";

const newStore = useNewStore();
const route = useRoute();

onMounted(() => {
  if (!newStore.newsLists.length) {
    newStore.getNewsData();
  }
});

const news = computed(() => newStore.getById(route.params.id));
</script>
<template>
  <div class="text-white text-center mt-5">
    <h3 class="text-3xl font-bold mb-3">{{ news.title }}</h3>
    <p class="mb-7">{{ news.body }}</p>
    <RouterLink to="/" class="cursor-pointer border-1 px-4 py-2 rounded-full">回首頁</RouterLink>
  </div>
</template>

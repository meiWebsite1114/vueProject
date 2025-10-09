<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePostStore } from "@/stores/postStore";

const route = useRoute();
const router = useRouter();
const store = usePostStore();
const post = ref(null);

onMounted(async () => {
  post.value = await store.fetchPostById(route.params.id);
});
</script>
<template>
  <div class="max-w-3xl mx-auto mt-5 p-4">
    <div v-if="!post" class=" text-center content-center min-h-50">
      <p>Loading....</p>
    </div>
    <div v-else class="box border border-primary rounded-md p-4 min-h-50">
      <h3 class="text-xl mb-4 font-bold">{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
    <button @click="router.push('/')" type="button"
      class="bg-secondary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer block mx-auto">
      回首頁
    </button>
  </div>
</template>
<style scoped></style>

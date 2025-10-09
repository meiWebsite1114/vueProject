<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const countdown = ref(5);

onMounted(() => {
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      router.push("/");
    }
  }, 1000);
});
</script>
<template>
  <div class="max-w-3xl mx-auto text-center min-h-100 content-center">
    <h3 class="text-3xl">404 找不到頁面</h3>
    <p class="mt-4">{{ countdown }}秒後回到首頁...</p>
    <button @click="router.push('/')" type="button"
      class="bg-secondary w-30 h-10 rounded-md text-white mt-4 text-lg cursor-pointer block mx-auto">
      回首頁
    </button>
  </div>
</template>
<style scoped></style>

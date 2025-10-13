<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header class="sticky top-0 z-9" />
  <RouterView />
</template>

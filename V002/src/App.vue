<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/BackToTop.vue";
</script>

<template>
  <div class="bg-[#1d2128] min-h-screen">
    <NavBar />
    <HeroSection />
    <RouterView />
    <Footer />
    <BackToTop />
  </div>
</template>

<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #ccc;
}
</style>

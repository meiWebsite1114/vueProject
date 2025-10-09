<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1.1,
  wrapAround: true,
  autoplay: 3000,
}

const pics = ["pic01.jpg", "pic02.jpg", "pic03.jpg"]

</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in pics" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
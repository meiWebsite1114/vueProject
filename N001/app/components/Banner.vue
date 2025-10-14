<script setup>
const bannerPics = ["b01.jpg", "b02.jpg", "b03.jpg"];
</script>

<template>
  <div class="block text-center">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="30vw">
      <el-carousel-item v-for="item in bannerPics" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
</style>

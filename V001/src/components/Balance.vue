<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
})

</script>
<template>
  <h4>總開銷</h4>
  <h1 id="balance">${{ total }}</h1>
</template>

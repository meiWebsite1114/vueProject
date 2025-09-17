<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <div class="inc-exp-container">
    <div>
      <h4>收入</h4>
      <p id="money-plus" class="money plus">${{ income }}</p>
    </div>
    <div>
      <h4>支出</h4>
      <p id="money-minus" class="money minus">${{ expenses }}</p>
    </div>
  </div>
</template>
<style scoped></style>

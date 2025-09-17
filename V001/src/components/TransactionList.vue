<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(['transcationDeleted'])

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const deleteTranscation = (id) => {
  emit('transcationDeleted', id)
}

</script>

<template>
  <h3>明細表</h3>
  <ul id="list" class="list">
    <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{ transaction.text }} <span>${{ transaction.amount }}</span><button @click="deleteTranscation(transaction.id)"
        class="delete-btn">x</button>
    </li>
  </ul>
</template>

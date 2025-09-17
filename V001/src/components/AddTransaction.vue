<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const text = ref('')
const amount = ref(null)
const emit = defineEmits(['transactionSubmitted'])

const toast = useToast()

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('輸入錯誤...')
    return
  }

  const transactionData = {
    id: Date.now(),
    text: text.value,
    amount: amount.value
  }

  emit('transactionSubmitted', transactionData)

  text.value = '';
  amount.value = ''
}

</script>
<template>
  <h3>記上一筆</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">名稱</label>
      <input v-model="text" type="text" id="text" placeholder="名稱..." />
    </div>
    <div class="form-control">
      <label for="amount">金額</label>
      <input v-model.number="amount" type="number" id="amount" placeholder="金額..." />
    </div>
    <button class="btn">新增</button>
  </form>
</template>

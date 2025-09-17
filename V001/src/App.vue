<script setup>
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpenses from "@/components/IncomeExpenses.vue";
import TransactionList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";

const toast = useToast()

const transactions = ref([])

onMounted(() => {
  const savedTranscations = JSON.parse(localStorage.getItem('transactions'))
  if (savedTranscations) {
    transactions.value = savedTranscations
  }
})

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
})

const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
})

const handlerTransactionSubmitted = (transactionData) => {
  const { id, text, amount } = transactionData
  transactions.value.push({ id, text, amount })

  savedTranscationsToLocalStorage()
  toast.success('新增成功')
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 10000000)
}

const handlerTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) =>
    transaction.id !== id
  )
  savedTranscationsToLocalStorage()
  toast.success('刪除成功')
}

const savedTranscationsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" @transcationDeleted="handlerTransactionDeleted" />
    <AddTransaction @transactionSubmitted="handlerTransactionSubmitted" />
  </div>
</template>

<style scoped></style>

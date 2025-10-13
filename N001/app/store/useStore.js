import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useStore = defineStore("store", () => {
  const products = ref([]);
  const product = ref({});
  const cartItems = ref([]);
  const loading = ref(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      products.value = res.data;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchDataId = async (productId) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      product.value = res.data;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const addToCart = (p) => {
    cartItems.value.push(p);
  };

  const removeFromCart = (index) => {
    cartItems.value.splice(index, 1);
  };

  const specialProducts = computed(() => products.value.slice(0, 8));

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );

  const totalItems = computed(() => cartItems.value.length);

  return {
    products,
    cartItems,
    loading,
    fetchData,
    fetchDataId,
    product,
    addToCart,
    specialProducts,
    removeFromCart,
    totalPrice,
    totalItems,
  };
});

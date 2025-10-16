import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useStore = defineStore("store", () => {
  const products = ref([]);
  const product = ref({});
  const cartItems = ref([]);
  const tabs = ref(["all"]);
  const activeTab = ref("all");
  const loading = ref(true);

  const fetchData = async () => {
    try {
      const [productRes, categoryRes] = await Promise.all([
        axios.get("https://fakestoreapi.com/products"),
        axios.get("https://fakestoreapi.com/products/categories"),
      ]);

      products.value = productRes.data;
      tabs.value = ["all", ...categoryRes.data];
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

  const removeFromCart = (id) => {
    const removeIndex = cartItems.value.findIndex((item) => item.id === id);
    cartItems.value.splice(removeIndex, 1);
  };

  const specialProducts = computed(() => products.value.slice(0, 8));

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  );

  const totalItems = computed(() => cartItems.value.length);

  const filteredProducts = computed(() => {
    if (activeTab.value === "all") return products.value;
    return products.value.filter((item) => item.category === activeTab.value);
  });

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
    tabs,
    activeTab,
    filteredProducts,
  };
});

import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import productsData from "../assets/db.json";
import { toast } from "vue3-toastify";

export const useShopStore = defineStore("shop", () => {
  const products = ref(productsData);
  const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

  const toggleFavorite = (product) => {
    const index = favorites.value.findIndex((item) => item.id === product.id);
    if (index > -1) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(product);
    }
  };

  const addToCart = (product) => {
    const isExisting = cart.value.find((item) => item.id === product.id);
    if (isExisting) {
      isExisting.quantity++;
    } else {
      cart.value.push({
        ...product,
        quantity: 1,
      });
    }

    toast.success("商品已加入購物車", {
      autoClose: 1000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const removeFromCart = (productId) => {
    const index = cart.value.findIndex((item) => item.id === productId);
    if (index > -1) {
      cart.value.splice(index, 1);
    }
  };

  const updateQuantity = (productId, quantity) => {
    const product = cart.value.find((item) => item.id === productId);
    if (product) {
      quantity <= 0 ? removeFromCart(productId) : (product.quantity = quantity);
    }
  };

  const totalPrice = computed(() => {
    return cart.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });

  const cartCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  watch(
    favorites,
    (newVal) => {
      localStorage.setItem("favorites", JSON.stringify(newVal));
    },
    { deep: true }
  );

  watch(
    cart,
    (newVal) => {
      localStorage.setItem("cart", JSON.stringify(newVal));
    },
    {
      deep: true,
    }
  );

  return {
    products,
    favorites,
    cart,
    toggleFavorite,
    addToCart,
    removeFromCart,
    totalPrice,
    updateQuantity,
    cartCount,
    toast,
  };
});

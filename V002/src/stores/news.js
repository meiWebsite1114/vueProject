import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useNewStore = defineStore("news", () => {
  const newsLists = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const getNewsData = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      newsLists.value = res.data.map(({ id, title, body }) => ({
        id,
        title,
        body,
      }));
    } catch (err) {
      error.value = "無法取得資料";
      console.log(err);
    } finally {
      loading.value = false;
    }
  };

  const getById = (id) => {
    return newsLists.value.find((item) => item.id === Number(id));
  };

  return { newsLists, loading, error, getNewsData, getById };
});

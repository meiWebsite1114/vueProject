import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", () => {
  const posts = ref([]);
  const loading = ref(false);

  const fetchPosts = async () => {
    loading.value = true;

    try {
      const res = await axios.get("http://localhost:3000/posts");
      posts.value = res.data;
    } catch (error) {
      console.error("API錯誤:", error);
    } finally {
      loading.value = false;
    }
  };

  const addPost = async (post) => {
    try {
      const res = await axios.post("http://localhost:3000/posts", post);
      posts.value.push(res.data);
    } catch (error) {
      console.error("新增失敗:", error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/posts/${id}`,
        updatedPost
      );
      const idx = posts.value.findIndex((p) => p.id === id);
      if (idx !== -1) posts.value[idx] = res.data;
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      posts.value = posts.value.filter((p) => p.id !== id);
    } catch (error) {
      console.error("刪除失敗:", error);
    }
  };

  const fetchPostById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/posts/${id}`);
      return res.data;
    } catch (error) {
      console.error("取得文章失敗:", error);
      return null;
    }
  };
  return {
    posts,
    loading,
    fetchPosts,
    addPost,
    deletePost,
    updatePost,
    fetchPostById,
  };
});

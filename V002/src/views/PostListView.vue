<script setup>
import { ref, onMounted } from "vue";
import { usePostStore } from "../stores/postStore";
import { useRouter } from "vue-router";

const store = usePostStore();
const router = useRouter();

const postField = ref({
  title: '',
  content: '',
})

const addHandler = () => {
  if (!postField.value.title || !postField.value.content) {
    alert('請輸入資料')
    return
  };
  store.addPost(postField.value);
  postField.value.title = "";
  postField.value.content = "";
};

const editHandler = ({ id, title, content }) => {
  postField.value = {
    id,
    title,
    content
  }
};

const cancelHandler = () => {
  delete postField.value.id
  postField.value.title = "";
  postField.value.content = "";
}

const updateHandler = () => {
  if (!postField.value.title || !postField.value.content) {
    alert('請輸入資料')
    return
  };
  store.updatePost(postField.value.id, postField.value);

  delete postField.value.id
  postField.value.title = "";
  postField.value.content = "";
};

onMounted(() => {
  store.fetchPosts();
});

</script>
<template>
  <div class="max-w-3xl mx-auto mt-5 p-4">
    <div class="box">
      <input v-model="postField.title" type="text" placeholder="標題"
        class="border border-primary rounded-md w-full h-12 p-4" />
      <textarea v-model="postField.content" name="" id="" placeholder="內容"
        class="border border-primary rounded-md w-full h-50 p-4 mt-4"></textarea>
      <button v-if="!postField.id" @click="addHandler" type="button"
        class="bg-primary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer block mx-auto">
        新增
      </button>
      <div v-else class="btn-groups flex gap-8 justify-center">
        <button @click="updateHandler" type="button"
          class="bg-secondary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer">
          更新
        </button>
        <button @click="cancelHandler" type="button"
          class="bg-secondary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer">
          取消
        </button>
      </div>
    </div>
    <div class="content mt-10">
      <div v-if="store.loading" class="text-center content-center min-h-60">
        <p>Loading....</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="post in store.posts" :key="post.id" class="border border-primary p-4 rounded-md mb-4">
            <h3 class="text-xl mb-4 font-bold">{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <div class="btns mt-10 flex gap-4">
              <button @click="router.push(`/posts/${post.id}`)" type="button"
                class="bg-secondary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer">
                查看
              </button>
              <button @click="editHandler(post)" type="button"
                class="bg-secondary w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer">
                編輯
              </button>
              <button @click="store.deletePost(post.id)" type="button"
                class="bg-btn-delete w-25 h-10 rounded-md text-white mt-4 text-lg cursor-pointer">
                刪除
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

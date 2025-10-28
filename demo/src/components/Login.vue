<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isEyeOpen = ref(false);
</script>
<template>
  <section class="login_wrap min-h-screen flex items-center justify-center px-4">
    <div
      class="w-full max-w-xl mx-auto backdrop-blur-2xl text-white p-8 rounded-2xl border border-white/20 bg-white/5 shadow-[0px_0px_20px] shadow-white/20">
      <h3 class="text-2xl font-bold text-center mb-3">歡迎登入</h3>
      <div class="space-y-3">
        <div class="border border-gray-600 rounded-lg focus-within:border-primary/60">
          <input type="text" placeholder="請輸入Email" class="w-full h-10 outline-none p-4" />
        </div>
        <div class="border border-gray-600 rounded-lg flex items-center gap-2 pr-4 focus-within:border-primary/60">
          <input :type="isEyeOpen ? 'text' : 'password'" placeholder="密碼" maxlength="20"
            class="w-full h-10 outline-none p-4" />
          <button @click="isEyeOpen = !isEyeOpen" type="button" class="cursor-pointer">
            <Icon :icon="isEyeOpen ? 'mdi:eye-outline' : 'mdi:eye-off-outline'" class="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between mt-5">
        <div>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="" class="input_checkbox absolute opacity-0" />
            <span
              class="flex items-center gap-1 before:size-4 before:border before:border-gray-600 before:transition-all">記住帳號</span>
          </label>
        </div>
        <ul class="flex items-center">
          <li class="after:content-['|']">
            <a href="#" class="hover:text-primary mx-2">立即註冊</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary mx-2">忘記密碼</a>
          </li>
        </ul>
      </div>
      <button type="button" class="w-full h-10 bg-primary rounded-lg mt-10 cursor-pointer hover:brightness-90">
        登入
      </button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.login_wrap {
  width: 100%;
  background: url(/src/assets/bg.jpg) no-repeat center;
  background-size: cover;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.input_checkbox:checked+span::before {
  border-top: transparent;
  border-right: transparent;
  height: 9px;
  border-width: 3px;
  transform: rotate(-45deg) translateY(-4px);
  border-color: #26c6d0;
}
</style>

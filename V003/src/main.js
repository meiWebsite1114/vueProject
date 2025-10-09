import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("Icon", Icon);
app.use(Vue3Toastify);

app.mount("#app");

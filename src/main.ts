import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import { i18n } from "./locales/locale";

createApp(App).use(i18n).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";
import { i18n } from "./locales/locale";
import store from './store'

createApp(App).use(store).use(i18n).use(router).mount("#app");

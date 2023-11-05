import { createI18n } from "vue-i18n";
import en from "./en/en.json";
import fa from "./fa/fa.json";

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    fa: fa,
  },
});

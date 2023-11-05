<template>
  <ModalView
    v-if="name === ''"
    @uName="handleName"
    @error="handleError"
    :theme="theme"
  />
  <transition name="error" appear>
    <ErrorView v-if="showError" :errorValue="errorValue" />
  </transition>

  <Appbar :theme="theme" />

  <Sidebar :theme="theme" />

  <div class="content">
    <router-view
      :uName="name"
      :theme="theme"
      :language="language"
      @newName="handleNewName"
      @error="handleError"
      @themeChange="handleTheme"
      @localeChange="handleLocale"
      v-slot="{ Component }"
    >
      <transition name="content">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import Appbar from "./components/Appbar.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import ModalView from "./components/ModalView.vue";
import ErrorView from "./components/ErrorView.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "App",
  components: { Appbar, Sidebar, ModalView, ErrorView },
  setup() {
    let name = ref<string | null>("");
    let theme = ref<string>("light");
    let language = ref<string>("en");
    let showError = ref<boolean>(false);
    let errorValue = ref<string>("");
    const { locale } = useI18n({ useScope: "global" });

    watch(theme, () => {
      if (theme.value === "dark") {
        document.body.style.backgroundColor = "#1f1f1f";
      } else {
        document.body.style.backgroundColor = "#d4d4d4";
      }
    });
    watch(language, () => {
      locale.value = language.value;
      localStorage.setItem("locale", language.value);
    });

    onMounted(() => {
      if (localStorage.getItem("name")) {
        name.value = localStorage.getItem("name");
      }
      if (localStorage.getItem("theme")) {
        theme.value = localStorage.getItem("theme")!;
      }
      if (localStorage.getItem("locale")) {
        language.value = localStorage.getItem("locale")!;
      }
    });

    const handleName = (userName: string) => {
      name.value = userName;
    };

    const handleNewName = (newName: string) => {
      name.value = newName;
    };

    const handleTheme = (e: string) => {
      theme.value = e;
      localStorage.setItem("theme", theme.value);
    };
    const handleLocale = (e: string) => {
      language.value = e;
      localStorage.setItem("locale", language.value);
    };

    const handleError = (errorText: string) => {
      errorValue.value = errorText;
      showError.value = true;
      setTimeout(() => {
        showError.value = false;
      }, 3000);
    };

    return {
      handleError,
      handleName,
      handleNewName,
      handleTheme,
      handleLocale,
      showError,
      errorValue,
      name,
      theme,
      language,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* transstion styles */
.error-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.error-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.error-enter-active {
  transition: all 0.3s ease;
}
.error-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.error-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.error-leave-active {
  transition: all 0.3s ease;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.content-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.content-enter-active {
  transition: all 0.4s ease;
}
.content-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.content-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.content-leave-active {
  transition: all 0.1s ease;
}
</style>

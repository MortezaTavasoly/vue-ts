<template>
  <div
    class="profile"
    :class="{ dark: theme === 'dark' }"
    data-testid="profile"
  >
    <form class="profile-form" @submit.prevent="handelNewName">
      <label class="name">
        {{ $t("name") }}:
        <div>
          <input
            type="text"
            v-model="newName"
            :placeholder="uName"
            data-testid="name-edit-input"
          />
          <button>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </div>
      </label>
      <label>
        {{ $t("theme") }}:
        <select @change="handleTheme" :value="theme" data-testid="mode">
          <option value="light">{{ $t("light") }}</option>
          <option value="dark">{{ $t("dark") }}</option>
        </select>
      </label>

      <label>
        {{ $t("locale") }}:
        <select @change="handleLocale" :value="language" data-testid="locale">
          <option value="en">{{ $t("english") }}</option>
          <option value="fa">{{ $t("farsi") }}</option>
        </select>
      </label>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "ProfileView",
  props: ["uName", "theme", "language"],
  emits: ["newName", "error", "themeChange", "localeChange"],

  setup(props, context) {
    const newName = ref<string>("");
    const curTheme = ref<string>("");
    const curLocale = ref<string>("");
    const { t } = useI18n({ useScope: "global" });

    const handleTheme = (e: any) => {
      context.emit("themeChange", e.target.value);
    };
    const handleLocale = (e: any) => {
      context.emit("localeChange", e.target.value);
    };
    const handelNewName = () => {
      if (newName.value.trim() !== "") {
        localStorage.setItem("name", newName.value);
        context.emit("newName", newName.value);
        newName.value = "";
      } else {
        context.emit("error", t("profileNameError"));
      }
    };
    return {
      newName,
      curTheme,
      handelNewName,
      handleLocale,
      handleTheme,
      curLocale,
    };
  },
});
</script>
<style>
.profile-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.profile-form label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px -40px 20px 0;
  max-width: 300px;
  width: 80%;
}

.profile-form label.name div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px 5px 5px 20px;
}
.profile-form label.name div input {
  height: 40px;
  width: 80%;
  border-radius: 20px;
  padding-left: 10px;
  border: 0;
  cursor: pointer;
}
.profile-form label.name div input::placeholder {
  text-align: center;
}
.profile-form label.name div button {
  font-size: 25px;
  cursor: pointer;
  background-color: white;
  border: 0;
  transition: 0.2s ease;
  border-radius: 5px;
  margin-right: 5px;
  width: 20%;
}
.profile-form label.name div button:hover {
  color: white;
  background-color: rgb(56, 56, 56);
}
.profile-form label select {
  cursor: pointer;
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 20px;
  padding-left: 20px;
}
</style>

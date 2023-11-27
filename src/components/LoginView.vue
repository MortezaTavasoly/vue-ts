<template>
  <form class="login-container" @submit.prevent="auth">
    <label>
      {{ $t("userName") }}
      <input
        type="text"
        placeholder="username is username1"
        v-model="userName"
      />
    </label>
    <label>
      {{ $t("password") }}
      <input type="text" placeholder="password is 1234" v-model="password" />
    </label>
    <div>
      <button class="login-btn">
        {{ $t("login") }}
      </button>
      <router-link to="/">
        <button class="close-btn">
          {{ $t("close") }}
        </button>
      </router-link>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const { t } = useI18n({});
const emit = defineEmits(["uName", "error"]);

const userName = ref<string>("");
const password = ref<string>("");

const auth = () => {
  if (
    userName.value === store.state.user.userName &&
    password.value === store.state.user.password
  ) {
    store.commit("logging");
    localStorage.setItem("loggedIn", "true");
    router.push("/");
  } else {
    emit("error", t("loginError"));
  }
};
</script>
<style>
.login-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container label {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}
.login-container label input {
  height: 40px;
  width: 80%;
  border-radius: 20px;
  padding-left: 10px;
  border: 0;
  cursor: pointer;
  width: 100%;
  max-width: 250px;
}
.close-btn {
  border-radius: 20px;
  border: 0;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;
}
.close-btn:hover {
  background-color: #cfcfcf;
}
</style>

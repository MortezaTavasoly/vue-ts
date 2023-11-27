<template>
  <div
    class="appbar"
    :class="{ dark: props.theme === 'dark' }"
    data-testid="appbar"
  >
    <h1 class="appbar-title">LOGO</h1>

    <router-link to="/login" v-if="!store.state.loggedin">
      <button class="login-btn">
        <p>
          {{ $t("login") }}
        </p>
      </button>
    </router-link>
    <router-link to="/" @click="logOut" v-else>
      <button class="logout-btn">
        <p>
          {{ $t("logOut") }}
        </p>
      </button>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  theme: String,
});
const store = useStore();

const logOut = () => {
  store.state.loggedin = false;
  localStorage.setItem("loggedIn", "false");
};
</script>
<style>
.appbar.dark {
  background-color: rgb(75, 75, 75);
}
.appbar {
  padding: 20px 30px;
  background-color: #e7e7e7;
  margin: 20px 0;
  display: flex;
}
.appbar-title {
  margin: 0 auto;
  width: 200px;
}
.login-btn,
.logout-btn {
  border-radius: 20px;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;
}
.login-btn:hover,
.logout-btn:hover {
  background-color: #cfcfcf;
}
</style>

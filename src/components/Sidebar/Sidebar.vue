<template>
  <div
    class="sidebar"
    :class="{ dark: theme === 'dark' }"
    :style="{ width: sidebarWidthComputed }"
    data-testid="slidbar"
  >
    <span
      @click="toggleSidebar"
      class="icon-colapse"
      :class="{ spin: collapsed }"
      data-testid="sidebar-toggle"
      ><i class="fa fa-angle-double-left"></i
    ></span>
    <div class="links">
      <router-link to="/">
        <i class="fa fa-th-large" aria-hidden="true"></i>
        <p :class="{ 'link-hide': collapsed }">
          {{ $t("dashboard") }}
        </p></router-link
      >
      <router-link to="/todos">
        <i class="fa fa-tasks" aria-hidden="true"></i>
        <p :class="{ 'link-hide': collapsed }">
          {{ $t("todos") }}
        </p></router-link
      >
      <router-link to="/weather"
        ><i class="fa fa-thermometer-half" aria-hidden="true"></i>
        <p :class="{ 'link-hide': collapsed }">
          {{ $t("weather") }}
        </p></router-link
      >
      <router-link to="/profile"
        ><i class="fa fa-user-circle"></i>
        <p :class="{ 'link-hide': collapsed }">
          {{ $t("profile") }}
        </p></router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { collapsed, toggleSidebar, sidebarWidthComputed } from "./states";

export default defineComponent({
  name: "Side-bar",
  props: ["theme"],
  setup() {
    return { collapsed, toggleSidebar, sidebarWidthComputed };
  },
});
</script>
<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  float: left;
  color: white;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: rgb(139, 139, 139);
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
}
.sidebar.dark {
  background-color: rgb(65, 65, 65);
}
.sidebar .links {
  width: 100%;
  height: 100vh;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  transition: 0.2s ease;
}
.sidebar .links p {
  margin-top: 5px;
}
.sidebar .links a:hover {
  background-color: rgb(107, 107, 107);
  border-radius: 20px;
}
.sidebar .links a {
  width: 100%;
  padding: 5px;
  text-decoration: none;
  color: white;
  margin: 15px auto;
}
.sidebar.dark .links a.router-link-active {
  color: rgb(65, 65, 65);
  background-color: white;
}
.sidebar .links a.router-link-active {
  border-radius: 40px 0 0 40px;
  background-color: rgb(77, 77, 77);
}
.fa {
  font-size: 30px;
}
.icon-colapse {
  transition: 0.2s ease;
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 30px;
}
.spin {
  transform: rotate(180deg);
  transition: 0.2s ease;
}
.link-hide {
  display: none;
}
</style>

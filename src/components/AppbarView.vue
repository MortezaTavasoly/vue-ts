<template>
  <div
    class="appbar"
    :class="{ dark: props.theme === 'dark' }"
    data-testid="appbar"
  >
    <h1 class="appbar-title">LOGO</h1>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  theme: String,
});
</script>
<style>
.appbar.dark {
  background-color: rgb(75, 75, 75);
}
.appbar {
  padding: 20px 30px;
  background-color: #e7e7e7;
  margin: 20px 0;
}
.appbar-title {
  margin: 0 auto;
  width: 200px;
}
</style>

<template>
  <div class="error-container">
    <div class="title">
      <p>{{ props.errorValue }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  errorValue: String,
});
</script>

<style>
.error-container {
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-container .title {
  border-radius: 20px;
  padding: 5px 40px;
  background-color: #dc143c;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  max-width: 600px;
  color: #e4e4e4;
}
</style>

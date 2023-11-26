<template>
  <form
    @submit.prevent="
      () => {
        $emit('addTodo');
        newTask = '';
      }
    "
    class="todo-form"
    data-testid="todo-form"
  >
    <input
      type="text"
      v-model="newTask"
      @keyup="$emit('changeTodoTitle', newTask)"
      data-testid="todo-input"
    />
    <button><i class="fa fa-plus-square icon" aria-hidden="true"></i></button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";

const emit = defineEmits(["addTodo", "changeTodoTitle"]);

const newTask = ref<string>("");
</script>

<style></style>

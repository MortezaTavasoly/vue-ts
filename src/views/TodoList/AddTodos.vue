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

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AddTodos",
  emits: ["addTodo", "changeTodoTitle"],
  setup() {
    const newTask = ref<string>("");
    return { newTask };
  },
});
</script>

<style></style>

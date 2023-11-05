<template>
  <div :class="['todo', todo.completed ? 'completed' : '']" data-testid="todo">
    <h3 class="todo-title">{{ todo.title }}</h3>

    <div class="btns">
      <button
        class="remove"
        @click="handleList('remove', todo.id)"
        data-testid="delete-btn"
      >
        <i class="fa fa-bitbucket" aria-hidden="true"></i>
      </button>
      <button class="check" @click="handleList('completed', todo.id)">
        <i class="fa fa-check-square" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["todo"],
  emits: ["handleTodo"],

  setup(props, context) {
    const handleList = (term: string, id: string | number) => {
      context.emit("handleTodo", term, id);
    };
    return { handleList };
  },
});
</script>

<style>
.todo {
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  background-color: rgb(180, 180, 180);
  z-index: 3;
  margin-bottom: 10px;
  margin-right: 0;
  padding: 0 20px;
  border-radius: 40px;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 15px;
}
.todo:hover {
  box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 15px;
}
.todo-list.dark .todo {
  background-color: rgb(122, 122, 122);
}
.todo-list.dark .todo:hover {
  background-color: rgb(189, 189, 189);
}
.todo-title {
  max-width: 550px;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  min-width: 70px;
  max-width: 100px;
}
.btns button.remove:hover {
  background-color: crimson;
}
.btns button.check:hover {
  background-color: rgb(2, 184, 2);
}
.btns button {
  transition: 0.3s ease;
  cursor: pointer;
  font-size: 20px;
  border-radius: 50%;
  border: 0;
}
.todo.completed {
  color: grey;
  background-color: rgb(165, 165, 165);
  text-decoration: line-through;
}
.todo-list.dark .todo.completed {
  color: rgb(80, 80, 80);
  background-color: rgb(51, 51, 51);
}
.todo-list.dark .todo.completed .check {
  background-color: green;
  color: white;
  border-radius: 5px;
}
</style>

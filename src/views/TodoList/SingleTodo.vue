<template>
  <div :class="['todo', todo.completed ? 'completed' : '']" data-testid="todo">
    <h3 class="todo-title">{{ todo.title }}</h3>

    <div class="btns">
      <button
        class="remove"
        @click="$emit('handleTodo', { action: 'remove', id: todo.id })"
        data-testid="delete-btn"
      >
        <i class="fa fa-bitbucket" aria-hidden="true"></i>
      </button>
      <button
        class="check"
        @click="$emit('handleTodo', { action: 'completed', id: todo.id })"
      >
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
/*  */
.todo-list {
  max-width: 1000px;
  width: 90%;
  margin: 30px auto;
  padding: 0 0 40px 20px;
}

.todos {
  position: relative;
  padding: 0 10px 0;
}
.todo-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px auto;
  width: 70%;
  border-radius: 20px 5px 5px 20px;
  background-color: white;
}
.todo-form input {
  width: 90%;
  height: 40px;
  border-radius: 20px 0 0 20px;
  padding-left: 10px;
  border: 0;
}
.todo-form button {
  border-radius: 5px;
  font-size: 25px;
  width: 10%;
  background-color: white;
  border: 0;
  margin: 0 5px;
  transition: 0.2s ease;
  cursor: pointer;
  padding: 0 2px;
}
.todo-form button:hover {
  background-color: rgb(56, 56, 56);
  color: white;
}

.icon {
  font: 2px;
}
.empty-box {
  margin: 140px auto 0;
  color: grey;
  width: 65%;
}

/* todo transition styles */

.todo-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.todo-enter-to {
  opacity: 1;
  transform: scale(1);
}
.todo-enter-active {
  transition: all 0.4s ease;
}
.todo-leave-from {
  opacity: 1;
  transform: scale(1);
}
.todo-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.todo-leave-active {
  transition: all 0.2s ease;
  position: absolute;
}
.todo-move {
  transition: all 0.1s ease;
}

/* responsive */

@media (max-width: 500px) {
  .todo-list {
    padding: 0;
    margin: 30px;
    margin-right: 0;
  }
  .todo-form {
    margin: 30px;
    margin-right: 10px;
    width: 85%;
  }
  .todos {
    padding: 0;
  }
  .todo {
    font-size: 14px;
    border-radius: 5px;
    padding: 0 0 0 10px;
  }
  .btns {
    width: 10%;
    min-width: 50px;
    flex-direction: column;
  }
  .btns button {
    border-radius: 5px;
    margin: 2px;
  }
}
</style>

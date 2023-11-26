<template>
  <div
    class="todo-list"
    :class="{ dark: theme === 'dark' }"
    data-testid="todos"
  >
    <AddTodos @addTodo="addNewTodo" @changeTodoTitle="changeTodo" />

    <transition-group tag="div" name="todo" appear v-if="todos.length !== 0">
      <div class="todos" v-for="todo in todos" :key="todo.id">
        <SingleTodo :todo="todo" @handleTodo="handleList" />
      </div>
    </transition-group>
    <h1 v-else class="empty-box">{{ $t("todoListEmpty") }}</h1>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from "vue";
import Todo from "../../types/Todo";
import SingleTodo from "./SingleTodo.vue";
import AddTodos from "./AddTodos.vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  theme: String,
});
const emit = defineEmits(["error"]);

const todos = ref<Todo[]>([]);
const task = ref<string>("");
const { t } = useI18n({});

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    todos.value = JSON.parse(localStorage.getItem("tasks")!);
  }
});

const changeTodo = (title: string) => {
  task.value = title;
};

const addNewTodo = () => {
  if (task.value.trim() !== "") {
    const newTask: Todo = {
      title: task.value,
      id: Math.floor(Math.random() * 1000),
      completed: false,
    };
    todos.value.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(todos.value));
    task.value = "";
  } else {
    emit("error", t("todoListError"));
  }
};

const handleList = (payload: any) => {
  if (payload.action === "remove") {
    todos.value = todos.value.filter((todo) => {
      return todo.id !== payload.id;
    });
    localStorage.setItem("tasks", JSON.stringify(todos.value));
  } else if (payload.action === "completed") {
    let res: Todo = todos.value.find((todo) => {
      return todo.id === payload.id;
    }) as Todo;
    res.completed! = !res.completed;
    localStorage.setItem("tasks", JSON.stringify(todos.value));
  }
};
</script>
<style></style>

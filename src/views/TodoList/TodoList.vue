<template>
  <div
    class="todo-list"
    :class="{ dark: theme === 'dark' }"
    data-testid="todos"
  >
    <form
      @submit.prevent="handleSubmit(task)"
      class="todo-form"
      data-testid="todo-form"
    >
      <input type="text" v-model="task" data-testid="todo-input" />
      <button><i class="fa fa-plus-square icon" aria-hidden="true"></i></button>
    </form>
    <transition-group tag="div" name="todo" appear v-if="todos.length !== 0">
      <div class="todos" v-for="todo in todos" :key="todo.id">
        <SingleTodo :todo="todo" @handleTodo="handleList" />
      </div>
    </transition-group>
    <h1 v-else class="empty-box">{{ $t("todoListEmpty") }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Todo from "../../types/Todo";
import SingleTodo from "./SingleTodo.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TodoList",
  components: { SingleTodo },
  props: ["theme"],
  emits: ["error"],

  setup(props, context) {
    const todos = ref<Todo[]>([]);
    const task = ref<string>("");
    const { t } = useI18n({});

    onMounted(() => {
      if (localStorage.getItem("tasks")) {
        todos.value = JSON.parse(localStorage.getItem("tasks")!);
      }
    });

    const handleSubmit = (e: string) => {
      if (e.trim() !== "") {
        const newTask: Todo = {
          title: e,
          id: Math.floor(Math.random() * 1000),
          completed: false,
        };
        todos.value.unshift(newTask);
        localStorage.setItem("tasks", JSON.stringify(todos.value));
        task.value = "";
      } else {
        context.emit("error", t("todoListError"));
      }
    };

    const handleList = (term: string, id: number | string) => {
      if (term === "remove") {
        todos.value = todos.value.filter((todo) => {
          return todo.id !== id;
        });
        localStorage.setItem("tasks", JSON.stringify(todos.value));
      } else if (term === "completed") {
        let res: Todo = todos.value.find((todo) => {
          return todo.id === id;
        }) as Todo;
        res.completed! = !res.completed;
        localStorage.setItem("tasks", JSON.stringify(todos.value));
      }
    };

    return { todos, task, handleList, handleSubmit };
  },
});
</script>
<style>
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

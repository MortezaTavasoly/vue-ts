<template>
  <div
    class="modal"
    :class="{ dark: props.theme === 'dark' }"
    data-testid="popup"
  >
    <form
      class="modal-form"
      @submit.prevent="handleName"
      data-testid="popup-form"
    >
      <label>
        {{ $t("modalTitle") }} :
        <input type="text" v-model="name" data-testid="popup-input" />
      </label>
      <button>{{ $t("submit") }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  theme: String,
});

const emit = defineEmits(["uName", "error"]);

const name = ref<string>("");
const { t } = useI18n({});

const handleName = (): void => {
  if (name.value.trim() !== "") {
    emit("uName", name.value);
    localStorage.setItem("name", name.value);
    name.value = "";
  } else {
    name.value = "";
    emit("error", t("modalNameError"));
  }
};
</script>

<style>
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(10, 10, 10, 0.99);
}
.modal.dark .modal-form {
  background-color: rgb(48, 48, 48);
}
.modal .modal-form {
  background-color: white;
  display: flex;
  align-items: center;
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
}
.modal .modal-form label {
  display: flex;
  flex-direction: column;
}
.modal .modal-form label input {
  margin: 10px auto;
  height: 30px;
  border: 1px solid grey;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.2s ease;
}
.modal .modal-form label input:focus {
  background-color: rgb(163, 163, 163);
}
.modal .modal-form label input:hover {
  background-color: rgb(209, 209, 209);
}
.modal .modal-form button {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid grey;
  cursor: pointer;
}
.modal .modal-form button:hover {
  transition: 0.2s ease;
  background-color: rgb(209, 209, 209);
}
</style>

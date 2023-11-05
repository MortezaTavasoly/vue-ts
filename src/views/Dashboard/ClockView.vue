<template>
  <div class="clock" data-testid="clock">
    <h1 class="numbers">
      {{ hour > 9 ? hour : `0${hour}` }}:{{
        minute > 9 ? minute : `0${minute}`
      }}:{{ second > 9 ? second : `0${second}` }}
    </h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ClockView",
  setup() {
    const curDate = new Date();
    const hour = ref<number>(curDate.getHours());
    const minute = ref<number>(curDate.getMinutes());
    const second = ref<number>(curDate.getSeconds());
    const greeting = ref<string>("Good Morning");

    setInterval(() => {
      let date = new Date();
      hour.value = date.getHours();
      minute.value = date.getMinutes();
      second.value = date.getSeconds();
    }, 1000);

    return { hour, minute, second, greeting };
  },
});
</script>

<style>
.clock {
  margin: 40px;
  margin-right: -20px;
}
.clock .numbers {
  font-size: 60px;
}
</style>

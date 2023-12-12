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

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  hour: number;
  minute: number;
  second: number;
  greeting: string;
}>();
</script>
<style>
.dash-board {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.greeting {
  margin: 0 10px;
}
.clock {
  margin: 40px;
  margin-right: -20px;
}
.clock .numbers {
  font-size: 60px;
}
/* responsive */
@media (max-width: 500px) {
  .clock .numbers {
    font-size: 40px;
  }
}
</style>

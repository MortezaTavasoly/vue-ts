<template>
  <div
    class="dash-board"
    :class="{ dark: theme === 'dark' }"
    data-testid="dashboard"
  >
    <ClockView>
      <h1 v-if="uName" class="greeting" data-testid="greeting">
        {{ greeting }} {{ uName }}
      </h1>
    </ClockView>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ClockView from "./ClockView.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DashBoard",
  props: ["uName", "theme"],
  components: { ClockView },
  setup() {
    const date = new Date();
    const hour = ref<number>(date.getHours());
    const greeting = ref<string>("");
    const { t } = useI18n({});

    onMounted(() => {
      if (hour.value >= 0 && hour.value <= 12) {
        greeting.value = t("greeting1");
      } else if (hour.value >= 12 && hour.value <= 18) {
        greeting.value = t("greeting2");
      } else {
        greeting.value = t("greeting3");
      }
    });

    return { hour, greeting };
  },
});
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
/* responsive */
@media (max-width: 500px) {
  .clock .numbers {
    font-size: 40px;
  }
}
</style>

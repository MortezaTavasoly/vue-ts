<template>
  <div
    class="dash-board"
    :class="{ dark: theme === 'dark' }"
    data-testid="dashboard"
  >
    <ClockView
      :hour="hour"
      :minute="minute"
      :second="second"
      :greeting="greeting"
    >
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
    const minute = ref<number>(date.getMinutes());
    const second = ref<number>(date.getSeconds());
    const greeting = ref<string>("");
    const { t } = useI18n({});

    setInterval(() => {
      const curData = new Date();
      hour.value = curData.getHours();
      minute.value = curData.getMinutes();
      second.value = curData.getSeconds();
    }, 1000);

    onMounted(() => {
      if (hour.value >= 0 && hour.value <= 12) {
        greeting.value = t("greeting1");
      } else if (hour.value >= 12 && hour.value <= 18) {
        greeting.value = t("greeting2");
      } else {
        greeting.value = t("greeting3");
      }
    });

    return { hour, greeting, minute, second };
  },
});
</script>
<style></style>

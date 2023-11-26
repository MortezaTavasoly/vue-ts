<template>
  <div class="extra-details">
    <h2>{{ weatherData.weather[0].description.toLocaleUpperCase() }}</h2>
    <h4>
      {{ $t("humidity") }} : {{ weatherData.main.humidity }}
      {{ $t("percent") }}
    </h4>
    <h4>
      {{ $t("pressure") }} : {{ weatherData.main.pressure }} {{ $t("hPa") }}
    </h4>
    <h4>
      {{ $t("visibility") }} : {{ weatherData.visibility / 1000 }}
      {{ $t("km") }}
    </h4>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { WeatherData } from "../../types/Weather";

const props = defineProps<{
  weatherData: WeatherData;
}>();
</script>

<style></style>

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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherSecondaryDetails",
  props: ["weatherData"],
});
</script>

<style></style>

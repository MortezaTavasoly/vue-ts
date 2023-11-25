<template>
  <div class="weather-container" :class="{ dark: theme === 'dark' }">
    <form class="weather-form" @submit.prevent="getSearchWeather(searchValue)">
      <input
        type="text"
        :placeholder="$t('searchCity')"
        v-model="searchValue"
        data-testid="search"
      />
      <button><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>

    <h1 v-if="error" class="location-error">{{ $t("error") }}</h1>
    <div class="weather" v-if="weatherData" data-testid="weather">
      <WeatherPrimeryDetails :weatherData="weatherData" />
      <WeatherSecondaryDetails :weatherData="weatherData" />
    </div>
    <div v-else class="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { WeatherData, LocationData } from "../../types/Weather";
import WeatherPrimeryDetails from "./WeatherPrimeryDetails.vue";
import WeatherSecondaryDetails from "./WeatherSecondaryDetails.vue";
import { useI18n } from "vue-i18n";
import { getLocation, getWeatherData } from "./UseWeather";

export default defineComponent({
  props: ["uName", "theme"],
  emits: ["newName", "error"],
  components: { WeatherPrimeryDetails, WeatherSecondaryDetails },
  name: "WeatherView",

  setup(props, context) {
    const weatherData = ref<WeatherData | null>(null);
    const searchValue = ref<string>("");
    const error = ref<string>("");
    const { t } = useI18n({});

    const getSearchWeather = (cityName: string) => {
      searchValue.value = "";

      if (cityName.trim() !== "") {
        getWeatherData(cityName).then((response) => {
          if (response !== "error") {
            weatherData.value = response;
          } else {
            error.value = response;
          }
        });
      } else {
        context.emit("error", t("cityEmptyError"));
      }
    };

    onMounted(() => {
      getLocation().then((response) => {
        weatherData.value = response;
      });
    });

    return {
      getWeatherData,
      weatherData,
      searchValue,
      error,
      getSearchWeather,
    };
  },
});
</script>
<style></style>

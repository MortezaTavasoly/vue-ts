<template>
  <div class="weather-container" :class="{ dark: theme === 'dark' }">
    <form class="weather-form" @submit.prevent="getWeatherData(searchValue)">
      <input
        type="text"
        :placeholder="$t('searchCity')"
        v-model="searchValue"
        data-testid="search"
      />
      <button><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>

    <h1 v-if="error" class="location-error">{{ error }}</h1>
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

export default defineComponent({
  props: ["uName", "theme"],
  emits: ["newName", "error"],
  components: { WeatherPrimeryDetails, WeatherSecondaryDetails },
  name: "WeatherView",

  setup(props, context) {
    const weatherData = ref<WeatherData | null>(null);
    const locationData = ref<LocationData | null>(null);
    const searchValue = ref<string>("");
    const error = ref<string>("");
    const { t } = useI18n({});

    const getWeatherData = async (cityName: string) => {
      if (cityName !== "") {
        searchValue.value = "";
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=694a16ace6caa2c6d2756d2e2fcb8bf5`
          );

          if (!response.ok) {
            throw new Error(t("error"));
          }
          const data: WeatherData = await response.json();
          weatherData.value = data;
        } catch (err: any) {
          error.value = err.message;
        }
      } else {
        context.emit("error", t("cityEmptyError"));
      }
    };

    onMounted(() => {
      fetch("http://ip-api.com/json/?fields=country,city,lat,lon,timezone")
        .then((response) => response.json())
        .then((data: LocationData) => {
          locationData.value = data;
          getWeatherData(data.city);
        });
    });

    return { getWeatherData, weatherData, searchValue, error };
  },
});
</script>
<style></style>

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
      <div class="weather-details">
        <h1 class="degrees">
          {{ Math.round(weatherData?.main.temp - 273) }}°C
        </h1>
        <h3>{{ weatherData.sys.country }},{{ weatherData?.name }}</h3>
        <img
          v-if="weatherData?.weather[0].icon"
          :src="`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`"
          alt="`weather-image"
        />
      </div>
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
    </div>
    <div v-else class="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { WeatherData, LocationData } from "../types/Weather";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: ["uName", "theme"],
  emits: ["newName", "error"],
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
<style>
.weather-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weather-form {
  height: 40px;
  background-color: white;
  border-radius: 20px 5px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.weather-form input {
  border-radius: 20px;
  border: 0;
  padding-left: 10px;
  height: 100%;
  width: 90%;
}
.weather-form button {
  padding: 2px;
  border-radius: 5px;
  font-size: 25px;
  width: 20%;
  border: 0;
  margin-right: 5px;
  background-color: white;
  transition: 0.2s ease;
  cursor: pointer;
}
.weather-form button:hover {
  background-color: rgb(56, 56, 56);
  color: white;
}
.weather {
  display: flex;
  margin: 30px auto;
  padding: 0 100px;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: 95%;
}
.degrees {
  font-size: 60px;
}
.extra-details {
  border-left: 1px solid rgb(138, 138, 138);
  margin-left: 10px;
  padding-left: 20px;
}
.loading {
  margin-top: 100px;
}
.location-error {
  margin-top: 50px;
}

/* responsive */
@media (max-width: 500px) {
  .weather {
    margin: 0 auto;
    flex-direction: column;
    padding: 30px 0 30px 30px;
  }
  .extra-details {
    border: 0;
    margin: 0 auto;
    padding: 0;
  }
  .weather-form {
    align-self: flex-end;
    margin-right: 10px;
    width: 80%;
  }
  .location-error {
    width: 60%;
    font-size: 20px;
  }
}
</style>

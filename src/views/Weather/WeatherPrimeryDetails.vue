<template>
  <div class="weather-details">
    <h1 class="degrees">{{ Math.round(weatherData?.main.temp - 273) }}°C</h1>
    <h3>{{ weatherData.sys.country }},{{ weatherData?.name }}</h3>
    <img
      v-if="weatherData?.weather[0].icon"
      :src="`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`"
      alt="`weather-image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherPrimeryDetails",
  props: ["weatherData"],
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

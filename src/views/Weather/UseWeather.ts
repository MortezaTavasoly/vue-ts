import { WeatherData, LocationData } from "../../types/Weather";

export async function getLocation() {
  const response = await fetch(
    "http://ip-api.com/json/?fields=country,city,lat,lon,timezone"
  );
  const json: LocationData = await response.json();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${json.city}&appid=694a16ace6caa2c6d2756d2e2fcb8bf5`
    );

    if (!response.ok) {
      throw new Error("error");
    }
    const data: WeatherData = await response.json();
    return data;
  } catch (err: any) {
    return err.message;
  }
}

export async function getWeatherData(cityName: string) {
  if (cityName !== "") {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=694a16ace6caa2c6d2756d2e2fcb8bf5`
      );

      if (!response.ok) {
        throw new Error("error");
      }
      const data: WeatherData = await response.json();
      return data;
    } catch (err: any) {
      return err.message;
    }
  }
}

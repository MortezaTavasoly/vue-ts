export type WeatherData = {
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  sys: {
    country: string;
  };
  name: string;
  visibility: number;
};
export interface LocationData {
  city: string;
  country: string;
  lan: number;
  lon: number;
  timezone: string;
}

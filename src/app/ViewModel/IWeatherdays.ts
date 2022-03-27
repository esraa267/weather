export interface IWeatherDays {
  air_quality?: string;
  astronomy?: 
    {
      moon_phase?: string;
      moonrise?: string;
      moonset?: string;
      sunrise?: string;
      sunset?: string;
    }
  ;

  index?: number;
  date?: string;
  day?: string;
  maxtempC?: string;
  mintempC?: string;

  uvIndex?: string;
}

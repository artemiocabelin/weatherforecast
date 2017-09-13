import { Weather } from './weatherInfo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ForecastService {
  weatherObj= new Weather;
  constructor(private _http: Http) { }

  retrieveWeatherInfo(weatherId, callback) {
    console.log('retrieving Weather');
    this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + weatherId + '&units=imperial&appId=c5d364a1743b6a69d0ec28484d414efa')
    .subscribe(
      (response) => {
        console.log(response.json());
        this.weatherObj.location = weatherId;
        this.weatherObj.humidity = response.json().main.humidity;
        this.weatherObj.averageTemperature = response.json().main.temp;
        this.weatherObj.highTemperature = response.json().main.temp_max;
        this.weatherObj.lowTemperature = response.json().main.temp_min;
        this.weatherObj.status = response.json().weather[0].description;
        console.log(this.weatherObj);
        callback(this.weatherObj);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

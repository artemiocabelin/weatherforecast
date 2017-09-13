import { ForecastService } from './../forecast.service';
import { Weather } from './../weatherInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather = new Weather;
  cityName = 'chicago';
  constructor(private _forecastService: ForecastService) {
    this.getWeatherInfo();
   }

   getWeatherInfo() {
    this._forecastService.retrieveWeatherInfo(this.cityName, 
      (weatherObj) => {
        this.weather = weatherObj;
      }
    );
   }

  ngOnInit() {
  }

}

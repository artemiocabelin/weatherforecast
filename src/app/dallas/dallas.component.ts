import { ForecastService } from './../forecast.service';
import { Weather } from './../weatherInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather = new Weather;
  cityName = 'dallas';
  constructor(private _forecastService: ForecastService) {
    this.getWeatherInfo();
   }

  getWeatherInfo() {
    console.log('calling service to get weather');
    this._forecastService.retrieveWeatherInfo(this.cityName, 
      (weatherObj) => {
        this.weather = weatherObj;
      }
    );
  }

  ngOnInit() {
  }

}

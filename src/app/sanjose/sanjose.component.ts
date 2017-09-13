import { Weather } from './../weatherInfo';
import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather = new Weather;
  cityName = 'san jose';
  constructor(private _forecastService: ForecastService) { }

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

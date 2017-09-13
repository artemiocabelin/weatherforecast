import { ForecastService } from './../forecast.service';
import { Weather } from './../weatherInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather = new Weather;
  cityName = 'seattle';
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

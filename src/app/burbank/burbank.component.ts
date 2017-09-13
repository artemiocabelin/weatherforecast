import { Weather } from './../weatherInfo';
import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = new Weather;
  cityName = 'burbank';
  
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

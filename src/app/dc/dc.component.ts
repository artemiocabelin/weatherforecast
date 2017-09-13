import { ForecastService } from './../forecast.service';
import { Weather } from './../weatherInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather = new Weather;
  cityName = 'washingtondc';
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

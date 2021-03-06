import { Component, OnInit } from '@angular/core';
import { WeatherItemModel } from '../../models/weather-item.model';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItemModel[];

    constructor(private _weatherService: WeatherService) {}
    
    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}

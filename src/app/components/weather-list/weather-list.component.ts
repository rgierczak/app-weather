import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item/weather-item';
import { WEATHER_ITEMS } from './weather.data';

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];
    
    ngOnInit(): any {
        this.weatherItems = WEATHER_ITEMS;
    }
}

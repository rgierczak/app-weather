import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WEATHER_ITEMS } from '../models/weather-list.model';
import { WeatherItem } from '../models/weather-item.model';
import 'rxjs/Rx';

const UNITS_TYPE = 'metric';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const KEY = ''; //Add your APPID here!

@Injectable() export class WeatherService {
    constructor(private _http: Http) {}
    
    getWeatherItems() {
        return WEATHER_ITEMS;
    }
    
    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }
    
    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }

    buildWeatherItem(data: any) {
        return new WeatherItem(
            data.name,
            data.weather[0].description,
            data.main.temp
        )
    }
    
    searchWeatherData(cityName: string): Observable<any> {
        let url = API_URL + cityName + '&APPID=' + KEY + '&units=' + UNITS_TYPE;
        
        return this._http.get(url)
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
            });
    }
}

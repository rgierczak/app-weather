import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WeatherListModel } from '../models/weather-list.model';
import { WeatherItemModel } from '../models/weather-item.model';
import 'rxjs/Rx';

const UNITS_TYPE = 'metric';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const KEY = '5958d5f47c1c8b34a9f5124e3f2c4839';

@Injectable() export class WeatherService {
    constructor(private _http: Http) {}
    
    getWeatherItems() {
        return WeatherListModel;
    }
    
    addWeatherItem(weatherItem: WeatherItemModel) {
        WeatherListModel.push(weatherItem);
    }
    
    clearWeatherItems() {
        WeatherListModel.splice(0);
    }

    buildWeatherItem(data: any) {
        return new WeatherItemModel(
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

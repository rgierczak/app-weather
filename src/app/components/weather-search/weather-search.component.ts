import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Subject } from "rxjs";

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css']
})

export class WeatherSearchComponent implements OnInit {
    private weatherData: any = {};
    private searchStream = new Subject<string>();
    
    constructor(private _weatherService: WeatherService) {}
    
    onSubmit() {
        let item = this._weatherService.buildWeatherItem(this.weatherData);
        this._weatherService.addWeatherItem(item);
    }
    
    ngOnInit() {
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(
                (input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => this.setWeatherData(data)
            );
    }
    
    setWeatherData(data: object) {
        this.weatherData = data;
    }
    
    onSearchLocation(cityName: string) {
        this.searchStream
            .next(cityName);
    }
}

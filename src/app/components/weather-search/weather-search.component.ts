import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from '../weather-item/weather-item';

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css']
})

export class WeatherSearchComponent {
    city: String = null;

    constructor(private _weatherService: WeatherService){}
    
    onSubmit(form: FormGroup) {
        this._weatherService.searchWeatherData(form.value.city)
            .subscribe(
                data => {
                    let item = this.buildWeatherItem(data);
                    this._weatherService.addWeatherItem(item);
                }
            );
        
    }
    
    buildWeatherItem(data: any) {
        return new WeatherItem(
            data.name,
            data.weather[0].description,
            data.main.temp
        )
    }
}
